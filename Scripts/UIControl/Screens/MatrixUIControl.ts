namespace I0 {
    export class MatrixUIControl extends ScreenUIControl {
        ColumnFilter: Array<string> = [];
        CurrentScopeIDs: Array<string> = [];

        constructor(matrixVM: ScreenViewModel, appContext: Iteration0) {
            super("MatrixUIControl", "#main", appContext);
            this.VM = matrixVM;
            this.displayOptions.viewtabs = false;
            this.DisplayMatrixView();
            //this.AttachDefaultEvents();  
            this.AttachCustomEvents();  
        }           
        AttachCustomEvents() {
            $("#filter-edit-button").click((e => { this.ShowDefineFilterForm(); return false }));
        }  
        ShowDefineFilterForm() {
            var formHtml = "";
            formHtml += this.helper.BuildHtmlForField(6, "formScope", "Scope", "", this.ColumnFilter, this.app.currentProjectVM.ScopeProfiles);
            this.app.ShowCustomMessage("<div class='screen-form form-group'>" + formHtml + "</div>", "Define Columns", this.OnFilterUpdateClick, null, this, null);
            $('#formScope .scope-CB').click((e => this.UpdateCardItemContextSummary('#formScope')));this.UpdateCardItemContextSummary('#formScope');
            return false;
        }
        OnFilterUpdateClick(context: MatrixUIControl) {
            context.ColumnFilter = $('#formScope .scope-field').val().split(", ");
            context.DisplayMatrixView(); 
            context.AttachCustomEvents();  
            context.app.HideUnfreezeControls();
        }
        DisplayMatrixView(){   
            $("#matrix-view").html(matrixTemplate);
            var context = this;
            var headers =  new Array<ItemViewModel>();
            var Profiles = this.app.currentProjectVM.ScopeProfiles.sort(function(a, b) {
                var nameA = a.Label.toUpperCase();  var nameB = b.Label.toUpperCase();  
                if (nameA < nameB) { return -1; }
                if (nameA > nameB) { return 1; }
                return 0;
              });
            jQuery.each(Profiles, function () {
                var colItem = this;
                jQuery.each(context.ColumnFilter, function () {
                    if (colItem.Code == this ) { headers.push(colItem); }
                });
                if (context.ColumnFilter.length == 0) { headers.push(colItem); }
            }); 
            $("#matrix-view table thead").html(context.BuildHtmlForHeaderItem(headers));
            var bodyHtml ="";
            var colCount = (this.ColumnFilter.length == 0 ? Profiles.length :  this.ColumnFilter.length);
            jQuery.each(this.VM.CardLists, function () {
                bodyHtml += context.BuildHtmlForBodyItem(this, headers);
            });
            $("#matrix-view table tbody").html(bodyHtml);
            $("#matrix-view table tbody .fa-circle").attr('title', 'Mandatory');
            $("#matrix-view table tbody .fa-adjust").attr('title', 'Optional');
            $("#matrix-view table tbody .fa-ban").attr('title', 'Alternative');
        }
        BuildHtmlForHeaderItem(columns: Array<ItemViewModel>) : string {
            var context = this;
            var rowHtml = "<th><div>" + this.VM.Ressource.Name + "</div>";
            rowHtml += '<div id="filter-edit-button" class="clickable-icon"><span class="fas fa-filter"></span></div>' + "</div></th>";
            jQuery.each(columns, function () {
                var colItem = this;
                rowHtml += "<th>"+ colItem.Label +"</th>";
            });
            return "<tr>" + rowHtml + "</tr>";
        }     
        BuildHtmlForBodyItem(row: ItemViewModelList, columns: Array<ItemViewModel>) : string {
            var context = this;
            var cellIconHtml = "";
            if(context.VM.Ressource.ScaleOrder == 1){//rule
                var cellIconClass = configTypeIcons[1];
                var cellIconColorlass = "accent-color";
                if (row.Pool.Score < 100) cellIconColorlass = "accent-color-refracted";
                cellIconHtml = "<span class='fas "+ cellIconClass + " " + cellIconColorlass +"'></span>";
            } 
            var rowHtml = "<tr><th>" + cellIconHtml + " " + row.Pool.Label  + "</th><td colspan='" + columns.length.toString() + "'></td></tr>";
            
            rowHtml += "<tr><th>";
            jQuery.each(row.Items, function () {
                var rowItem = this;
                if(context.VM.Ressource.ScaleOrder > 1){//feature
                    var cellIconClass = configTypeIcons[rowItem.Type];
                    var cellIconColorlass = "accent-color";
                    if (rowItem.Score < 100) cellIconColorlass = "accent-color-refracted";
                    rowHtml += "<div><span class='fas "+ cellIconClass + " " + cellIconColorlass +"'></span>" + context.helper.sanitizeHtml(rowItem.Label) + "</div>";
                } else {//rule
                    var rule = context.helper.sanitizeHtml(rowItem.Label);
                    rowHtml += "<div title='"+ rule +"'>" + rowItem.Code + ") " + rule + "</div>";
                }
            });
            rowHtml += "</th>";
            jQuery.each(columns, function () {
                var colItem = this;
                rowHtml += "<td>";
                jQuery.each(row.Items, function () {
                    var rowItem = this; var code = 1;
                    if(context.VM.Ressource.ScaleOrder > 1){//feature
                        if (rowItem.ScopeLists[1].indexOf(colItem.Code) > -1 ) code = 2;
                        if (rowItem.ScopeLists[2].indexOf(colItem.Code) > -1 ) code = 3;
                    } else {//rule
                        if (rowItem.ScopeLists[0].indexOf(colItem.Code)== -1 ) code = 3;
                    }
                    var cellIconClass = configTypeIcons[code];
                    var cellIconColorlass = "accent-color";
                    if (code == 3) cellIconColorlass = "accent-color-refracted";//high contrast
                    rowHtml += "<div><span class='fas "+ cellIconClass + " " + cellIconColorlass +"'></span></div>";
                });
                rowHtml += "</td>";
            });
            return rowHtml + "</tr>";
        }   
    }
}