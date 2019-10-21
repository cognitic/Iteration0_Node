
namespace I0 {
    export class UIHelper {
    AsyncPendingID: string; 
    AsyncPendingJoinID: string;
    app: Iteration0;
    constructor(appContext: Iteration0) {
        this.app = appContext;
    }

    public BuildHtmlForTab(headers: Array<string>) {
        var TabHtml = "<div class='tab-selector'>";
        jQuery.each(headers, function (index) {
            TabHtml += "<div class='tab-item' tabindex='" + index + "'>" + this + "</div>";
        });
        TabHtml += "</div>";
        return TabHtml;
    } 
    public ShowTab(formId: string, tabindex: string) {
        var lastViewHeight = $("#" +formId).height();
        $("#" +formId + " .tab-item, #" +formId + " .tab-view").removeClass("active"); 
        $("#" +formId + " .tab-item[tabindex='" + tabindex + "'], #" +formId + " .tab-view[tabindex='" + tabindex + "']" ).addClass("active");
        var newViewHeight = $("#" +formId).height();
        if (newViewHeight > lastViewHeight) $("#" +formId).css('min-height', newViewHeight.toString() + 'px');
    } 
    public BuildDropDownHtmlWith(dropDownId: string, items: Array<ItemViewModel>, defaultValue: string, selectedValue: string) {
        var DropDownHtml = "<select id='" + dropDownId + "'><option value='' disabled='' " + ((selectedValue == "-1") ? "selected=''" : "") + ">" + defaultValue + "</option>";
        jQuery.each(items, function () {
            DropDownHtml += "<option value='" + this.KeyValue + "' " + ((selectedValue == this.KeyValue) ? "selected=''" : "") + ">" + this.Label + "</option>";
        });
        DropDownHtml += '</select>';
        return DropDownHtml;
    } 
    public BuildColorDropDownHtmlWith(dropDownId: string, items: Array<String>, defaultValue: string, selectedValue: string) {
        var DropDownHtml = '<input id="' + dropDownId + '" type="color" list="' + dropDownId + 'Colors" value="' + selectedValue + '"><datalist id="' + dropDownId + 'Colors">';
        jQuery.each(items, function () {
            DropDownHtml += "<option value='" + this + "' " + ((selectedValue == this) ? "selected=''" : "") + ">" + this.Label + "</option>";
        });
        DropDownHtml += '</datalist>';
        return DropDownHtml;
    } 
    
                //<input id="bgColor" type="color" list="presetBGColors">
                //  <option>#C2B29E</option> </datalist>
    public BuildHtmlForField(fieldType : Number, fieldkey : string, fieldLabel : string, emptyValue : string, 
                                fieldValue : any, fieldOptions : Array<any>): string {
        var context = this;
        var fieldHtml = {
            '1': function () {
                return "<input type='text' id='" + fieldkey + "' class='texttype' maxlength='50' placeholder='" + emptyValue + "' value='" + fieldValue + "'>";
            },
            '2': function () {
                return "<textarea id='" + fieldkey + "' type='textarea' maxlength='1000' placeholder='" + emptyValue + "'>" + 
                fieldValue + "</textarea>";
            },
            '3': function () {
                return context.BuildDropDownHtmlWith(fieldkey, fieldOptions, emptyValue, fieldValue);
            },
            '4': function () { //NB: day is not managed
                return "<div class='flex-group'>" + context.BuildDropDownHtmlWith(fieldkey+"Month", MonthOptions, "Select Month", fieldValue[0]) +
                context.BuildDropDownHtmlWith(fieldkey+"Year", YearOptions, "Select Year", fieldValue[2]) + "</div>";
            },
            '5': function () {
                return "<div class='flex-group'>" + context.BuildDropDownHtmlWith(fieldkey+"1", ScaleOptions, "Select Scale", fieldValue[0]) +
                context.BuildDropDownHtmlWith(fieldkey+"2", StepOptions, "Select Step", fieldValue[1]) + "</div>";
            },
            '6': function () {
                return context.BuildHtmlButtonSelector(fieldkey, fieldOptions, fieldValue);
            },
            '7': function () {
                return context.BuildColorDropDownHtmlWith(fieldkey, fieldOptions, emptyValue, fieldValue);
            },
            '8': function () {
                return "<span class='clickable label-switcher' id='" + fieldkey + "'>" + (fieldValue ? "Allowed" : "Denied") + "</span>";
            }
        };
        return "<div class='form-element-group group-type-" + fieldType.toString() + "'><div><label>" + fieldLabel + " : </label></div><div>" + 
                    fieldHtml[fieldType.toString()]() + "</div></div>";
    }
    public BuildHtmlListWith(items: Array<ItemViewModel>, hasTwoOptions: boolean): string {
        var html = '';
        jQuery.each(items, function () {
            html += '<div class="column-list-row clickable">';
            if(hasTwoOptions){
                html += '<input class="row-cb has-one" type="checkbox"  cbId="' + this.KeyValue + '" >';
                html += '<input class="row-cb has-many" type="checkbox"  cbId="' + this.KeyValue + '" >';
            }else{
                html += '<input class="row-cb" type="checkbox"  cbId="' + this.KeyValue + '" >';
            }
            html += '<span class="name-list">' + this.Label + '</span></div>';
        });
        return html;
    }
    public BuildHtmlButtonSelector(selectorId: string, Scopes: Array<ItemViewModel>, selectedScopeIDs: Array<String>): string {
        var context = this;
        var html = "";
        html += "<div id='" + selectorId + "' class='context-field-selector'><input type='text' class='texttype scope-field' maxlength='50' style='width: 200px;' value='Default' disabled>";
        html += '<div class="variants-dropdown dropdown"><button class=""> Scope ▾</button><div class="dropdown-content">';
        jQuery.each(Scopes, function () {
            html += "<div><input type='checkbox' class='scope-CB i' CBCode='" + this.Code + "'  CBId='" + this.KeyValue + "' " + (selectedScopeIDs.indexOf(this.Code) > -1 ? "checked" : "") + ">" + this.Label + "</div>";
        });
        html += '</div></div>';
        html += '</div>';
        return html;
    }
    public DisableButtonSelector(selectorId: string) {
        $('#' + selectorId + ' .scope-CB').prop("checked", false);
        $('#' + selectorId + ' .scope-field').val("Default");
    }
    public IniField(content: string): string {
        return (this.FieldIsBlank(content) ? "Empty" : content);
    }

    // public BuildHtmlFor(content: string): string {
    //     var summary = (this.FieldIsBlank(content) ? "Empty" : "");
    //     if (!this.FieldIsBlank(content)){
    //         var editor = this;
    //         var lines = content.split("\n");
    //         jQuery.each(lines, function (index) {
    //             var line = lines[index];
    //             summary += editor.HighlightNumeration(line) + "</br>";
    //             });
    //     }
    //     return summary;
    // }

    // public BuildBulletListFor(content: string, cssClass: string): string {
    //     var summary = (this.FieldIsBlank(content) ? "Empty" : "");
    //     if (!this.FieldIsBlank(content)) {
    //         var editor = this;
    //         var lines = content.split("\n");
    //         jQuery.each(lines, function (index) {
    //             var line = lines[index];
    //             var firstWord = line.substr(0, line.indexOf(" "));
    //             if (/^\d\.$/.test(firstWord)) {
    //                 if (summary.length > 0) summary += "</ul>";
    //                 summary += "<span class='b'>" + line  + "</span><ul class='" + cssClass + "'>";
    //             } else {
    //                 //if (/^\d\.\d$/.test(firstWord)) line = line.substr(line.indexOf(" "), line.length - line.indexOf(" ") -1);
    //                 summary += "<li>" + editor.HighlightNumeration(line) + "</li>";
    //             }
    //         });
    //     }
    //     return summary + "</ul>";
    // }

    public HighlightNumeration(content: string): string {
        var firstWord = content.substr(0, content.indexOf(" "));
        if (/^\d\.\S?\.?\S?$/.test(firstWord)) content = "<span class='b'>" + firstWord + "</span>" + content.substr(content.indexOf(" "), content.length - content.indexOf(" ") - 1);
        return content;
    }

    public ReplaceHashtagIdsWithLink(content: string, ProjectId: string): string {
        return (this.FieldIsBlank(content) ? content : content.replace(/#([a-zA-Z0-9]*)/g, '<a class="u" href="/Project/Search/?ProjectID='+ ProjectId +'&Query=$1">#$1</a>'));
    }

    // public BuildBulletListForList(Contents: Array<string>, cssClass: string, ProjectId: string): string {
    //     var summary = "<ul class='" + cssClass +"'>"; var editor = this;
    //     jQuery.each(Contents, function (index) {
    //         summary += "<li>" + editor.BuildHtmlFor(editor.ReplaceHashtagIdsWithLink(Contents[index], ProjectId)) + "</li>";
    //     });
    //     return summary + "</ul>";
    // }
    // public BuildDefinitionSummaryFor(Headers: Array<string>, Contents: Array<string>): string {
    //     var summary = ""; var editor = this;
    //     jQuery.each(Headers, function (index) {
    //         summary += "<h3>" + Headers[index] + "</h3>";
    //         summary += "<p>" + (editor.BuildHtmlFor(Contents[index])) + "</p>";
    //     });
    //     return summary;
    // }

    AjaxCall(postURL: string, JSONData: string, callBackFunction, callBackParameter?: any, httpMethod: string = 'POST', loadingMessage: string = 'Loading') {
        $.ajax({
            context: this,
            url: postURL,
            type: httpMethod,
            data: JSONData,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            beforeSend: function () {
                $('#loading-text').html(loadingMessage)
                $('.event-progress').toggleClass('open');

            },
            success: function (response) {
                $('.event-progress').toggleClass('open');
                if (response) {
                    this.app.HideUnfreezeControls();
                    if (callBackParameter == null) {
                        callBackFunction(response, this);
                    } else {
                        callBackFunction(response, callBackParameter);
                    }
                }
                else {
                    this.app.ShowAlert("An unexpected error occurred while communicating with the server !");
                }
            },
            error: function (xhRequest, ErrorText, thrownError) {
                console.log(ErrorText)
                if (xhRequest.getAllResponseHeaders()) { this.app.ShowAlert("An unexpected error occurred while communicating with the server !"); }
            }
        });
    }
    preventEnterSubmit(e) {
        if (e.which == 13) {
            var $targ = $(e.target);
            if (!$targ.is("textarea") && !$targ.is(":button,:submit")) {
                var focusNext = false;
                $(this).find(":input:visible:not([disabled],[readonly]), a").each(function () {
                    if (this === e.target) {
                        focusNext = true;
                    }
                    else if (focusNext) {
                        $(this).focus();
                        return false;
                    }
                });
                return false;
            }
        }
    }
    DesactivateButton(buttons: JQuery) {
        buttons.each(function (index) {
            $(this).off('click')
            //button.click(function (e) { e.preventDefault(); });
            $(this).addClass('btn_fake');
        });
    }
    ReActivateButton(button: JQuery, OnCLickDelegate) {
        button.unbind('click');
        button.click((e => { OnCLickDelegate(this); return false }));
        button.removeClass('btn_fake');
    }
    SearchIndexOf(ValueKeyData: any, SearchKey: Number, SearchIndex?: number) {
        if (SearchIndex == null)
            SearchIndex = 1;
        var index = 0;
        var found: boolean= false;
        jQuery.each(ValueKeyData, function () {
            if (this[SearchIndex] == SearchKey) {
                found = true;
                return false;//break 
            }
            index += 1;
        });
        if (found) {
            return index;
        } else {
            return -1;
        }
    }
    ConvertDateToArray(d: Date): number[] {
        if (d == null) {
            return null;
        } else {
            return [d.getFullYear(), d.getMonth()+1, d.getDate()];
        }
    }
    public  FieldIsBlank(str) : boolean {
        return (!str || /^\s*$/.test(str));
    }
    DisableFields(fields: JQuery) {
        fields.each(function (index) {
            $(this).prop("disabled", true);
            //$(this).addClass('field_fake');
        });
    }
    EnableFields(fields: JQuery) {
        fields.each(function (index) {
            $(this).prop("disabled", false);
            //$(this).addClass('field_fake');
        });
    }
    GroupBy(objectList: Array<any>, key) {
        return objectList.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };    
    UploadFileTo(controllerURL, modelId, callBackFunction, callBackParameter?: any) {
        var form = <HTMLFormElement>$('#FormUpload')[0];
        var datastring = new FormData(form);
        datastring.append('id', modelId);
        $.ajax({
            context: this,
            url: controllerURL, 
            type: 'POST',
            success: function (response) {
                if (response) {
                    if (callBackParameter == null) {
                        callBackFunction(response, this);
                    } else {
                        callBackFunction(response, this, callBackParameter);
                    }
                }
                else {
                    this.app.ShowAlert("An unexpected error occurred while communicating with the server !");
                }
            },
            error: function (response) {
                this.app.ShowAlert("An unexpected error occurred while communicating with the server !");
            },
            complete: function (response) {
            },
            data: datastring,
            //Options to tell jQuery not to process data or worry about content-type.
            cache: false,
            contentType: false,
            processData: false
        });
        return false;
    }
    GenerateNumericList(min: number, max: number, IsKeyValue: Boolean): any[] {
        var result = [];
        for (var i = min; i <= max; i++) {
            if (IsKeyValue) {
                result.push([i,i]);
            } else {
                result.push(i);
            }
        }
        return result;
    } 
    sanitizeHtml(html: string, mustInjectHtmlNotation: boolean = false): string {
        if (this.FieldIsBlank(html)){
            return "";
        }else{
            var result =  html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            if (mustInjectHtmlNotation) {
                result = result.replace(/\n/gim, "<br/>");
                result = result.replace(/@link:/g, "<a class='u' href='").replace(/@link@/g, "'>").replace(/:link@/g, "</a>");
                result = result.replace(/\(\+\)/g, "<span class='fas fa-plus'></span>").replace(/\(\-\)/g, "<span class='fas fa-minus'></span>");
                result = result.replace(/@fa:/g, "<span class='fas fa-").replace(/:fa@/g, "'></span>");
            }
            return result;
        }
    }  
}
}