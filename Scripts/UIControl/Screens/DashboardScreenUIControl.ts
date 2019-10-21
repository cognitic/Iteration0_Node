namespace I0 {
    export class DashboardScreenUIControl extends ScreenUIControl {
        customTableToolbarTemplate =  `
        <div id="add-feature-profile" title="Add Profile" class="clickable-icon"><span class="fas fa-plus-square"></span></div>
        <div id="edit-feature-profile-visibility" title="Edit Profile Visibility" class="clickable-icon"><span class="fas fa-eye"></span></div>`;

        constructor(screenVM: ScreenViewModel, appContext: Iteration0) {
            super("DashboardScreenUIControl", "#main", appContext);
            this.VM = screenVM;
            this.displayOptions.viewtabs = true;
            this.displayOptions.header = true;
            this.displayOptions.headertitle = false;
            this.displayOptions.mainmenu = false;
            this.DisplayCustomBoardView();
            this.DisplayHistoryView();
            this.DisplayDownloadView();
            this.AttachCustomEvents();  
        }
        AttachCustomEvents() {
            //Todo check user session   
            $(".main .clickable-icon").off('click');
            $("#screen-edit-button").click((e => { this.ShowEditProjectForm(); return false }));
            $("#screen-remove-button").click((e => { this.ShowRemoveProjectForm(); return false }));   
            $('#add-feature-profile').click((e => { this.ShowNewFeatureProfileForm(); return false }));
            $("#edit-feature-profile-visibility").click((e => { this.ShowEditFeatureProfileForm(true); return false }));  
            $(".download-card").click((e => { this.app.ShowAlert("Coming back soon !", "Work in progress"); return false }));
            $("#top-context-expander-button").click((e => { this.ExpandCollapseHeader(e); return false })); 
        }    
        ShowEditProjectForm() {
            var formHtml =  this.helper.BuildHtmlForField(1, "formName", "Name", "Name", this.app.currentProjectVM.Project.Label, null);
            this.app.ShowCustomMessage("<div class='item-form form-group'>" + formHtml + "</div>", "Define Project", this.OnProjectSaveClick, null, this, null);
            return false;
        }  
        OnProjectSaveClick(context: ExplorerUIControl) {
            var item = context.app.currentProjectVM.Project;
            item.Label = $.trim($(".item-form").attr('formName'));     
            var isOK = true;
            if ((context.helper.FieldIsBlank(item.Label))) { isOK = false; context.app.ShowAlert("Name is mandatory !"); }
            if (isOK) {
                context.helper.AjaxCall(DefineItemEndpoint, JSON.stringify(
                  {ProjectId: context.ProjectId(), CollectionId: 0, ItemId: 0, Item: item, ViewType: ViewEnumType.Project}), 
                  context.app.LoadProject, context.app);
            }
        }
        ShowRemoveProjectForm() {
            this.app.ShowCustomMessage("Are you sure you want to delete this project ?", "Remove Project", this.OnProjectRemoveClick, null, this, null);
        }  
        OnProjectRemoveClick(context: ScreenUIControl) {
            context.helper.AjaxCall(RemoveItemEndpoint, JSON.stringify(
                {ProjectId: context.ProjectId(), CollectionId: 0, ItemId: 0, RemovedItemId: 0, ViewType: ViewEnumType.Project}), 
                context.app.LoadUserSession, context.app);
        } 
        ShowNewFeatureProfileForm() {
            this.ShowEditFeatureProfileForm(false);
        }  
        ShowEditFeatureProfileForm(mustManageVisibility : boolean) {
            var formHtml = "";
            if (this.app.currentProjectVM.ScopeProfiles.length == 0) mustManageVisibility = false;
            if (mustManageVisibility) formHtml += this.helper.BuildHtmlForField(3, "formProfile", "Profile", "Select Profile", null, this.app.currentProjectVM.ScopeProfiles);
            formHtml += this.helper.BuildHtmlForField(1, "formName", "Name", "Profile Name", "", null);
            formHtml += this.helper.BuildHtmlForField(1, "formCode", "Code", "Profile Code", "", null);
            if (mustManageVisibility) formHtml += "<div><input type='checkbox' id='profileVisibility'>Is Visible</div>";
            this.app.ShowCustomMessage("<div class='feature-profile-form form-group'>" + formHtml + "</div>", "Define Profile", this.OnFeatureProfileSaveClick, null, this, null);
            if (mustManageVisibility){
                $('#formProfile').change((e => {                     
                    var item: ItemViewModel; var profileid = $('#formProfile').val();
                    jQuery.each(this.app.currentProjectVM.ScopeProfiles, function () { if (this.KeyValue == profileid) { item = this; return false; } });
                    $("#formName").val(item.Label); $("#formCode").val(item.Code);
                    $('#profileVisibility').prop('checked', item.IsSelected);
                }));
                $("#formProfile option:first").attr('selected','selected');
            }
            return false;
        }
        OnFeatureProfileSaveClick(context: UseCaseScreenUIControl) {
            var profileid = $('#formProfile').val();
            var mustManageVisibility = false;
            //$('#profileVisibility:checked')
            var item = new ItemViewModel($("#formName").val(), profileid.toString());
            item.ParentKeyValue = context.ProjectId().toString();
            item.Code = $.trim($('#formCode').val());
            item.Type = ContextEnumType.FeatureProfile;
            var isOK = true;
            if ((context.helper.FieldIsBlank(item.Label))) { isOK = false; context.app.ShowAlert("Name is mandatory !"); }
            if (isOK) {
                if (mustManageVisibility){
                    this.app.ShowAlert("Coming back soon !", "Work in progress");
                } else{
                    context.helper.AjaxCall(DefineItemEndpoint, JSON.stringify(
                        {ProjectId: context.ProjectId(), CollectionId: -1, ItemId: 0, Item: item, ViewType: ViewEnumType.Explorer}), 
                        context.app.LoadProject, context.app);
                }
            }
        }
        DisplayCustomBoardView(){ 
            this.DisplayCustomHeader();
            $("#screen-body").html("<div id='feature-rank-card' class='card-col'></div><div id='roadmap-card' class='card-col'></div>");
            this.DisplayFeatureProfileCard();
            this.DisplayRoadmapCard();   
        }
        DisplayCustomHeader(){                 
            var result ="";
            jQuery.each(this.VM.CardLists[0].Items, function () {
                var progressPercent = Math.round(this.Score / this.ObjectiveScore * 100).toString();
              result += progressCardTemplate.replace(/{{templatetitle}}/g,this.Label).replace(/{{templatecounter}}/g,this.ObjectiveScore).replace(/{{templateprogress}}/g, progressPercent);
            });
            $("#screen-header").html(result);
            this.DisplayHeaderToolbar();
        }
        DisplayFeatureProfileCard(){ 
            var sublistHtml ="";
            jQuery.each(this.app.currentProjectVM.ScopeProfiles, function () {
                var progressPercent = Math.round(this.Score / this.ObjectiveScore * 100).toString(); 
                sublistHtml += rankCardRowTemplate.replace(/{{templatetitle}}/g,this.Label).replace(/{{templatecounter}}/g,this.ObjectiveScore.toString()).replace(/{{templateprogress}}/g, progressPercent);
            });
            $("#feature-rank-card").html(rankCardTemplate.replace(/{{templatetabletoolbar}}/g, this.customTableToolbarTemplate).replace(/{{templatelist}}/g, sublistHtml));
        }
        DisplayRoadmapCard(){            
            var sublistHtml ="";
            jQuery.each(this.app.currentProjectVM.HistoryMarkerList.Items, function () {
              var time = MonthOptions[this.Score-1].Label + " " + this.ObjectiveScore;
              sublistHtml += "<li class='timeline-item'><strong>" + this.Label +"</strong><p class='text-sm'>" + time +"</p></li>";
            });
            $("#roadmap-card").html(roadmapCardTemplate.replace(/{{templatetimeline}}/g,sublistHtml));
        }
    }
}