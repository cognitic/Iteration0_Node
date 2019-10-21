
namespace I0 {
    export class UserPreferenceUIControl extends ScreenUIControl {
        ColumnFilter: Array<string> = [];

        constructor(prefVM: ScreenViewModel, appContext: Iteration0) {
            super("UserPreferenceUIControl", "#main", appContext);
            this.VM = prefVM;
            this.displayOptions.viewtabs = false;
            this.DisplaySettingView();
            this.AttachDefaultEvents();  
            this.AttachCustomEvents();  
        }
        DisplaySettingView(){   
            var formHtml = "<div id='display-setting-view'>";
            formHtml += "<div class='form-element-group'><h3>Preferences</h3></div>";
            formHtml += this.helper.BuildHtmlForField(7, "formAccentColor", "Accent Color", "Select Color", 
                        this.app.currentSessionVM.CustomThemecolor1, AccentColorOptions);
            formHtml += this.helper.BuildHtmlForField(3, "formProductLine", "Default Project", "Select Product Line", 
                        this.app.currentSessionVM.defaultProjectId, this.app.currentSessionVM.Projects);
            formHtml += "</div>";
            $("#matrix-view").html(formHtml);//TODO rename matrix view into custom view
            var context = this;
            var bodyHtml ="";
        }
        AttachCustomEvents() {
            var context = this;
            $('#formAccentColor').change(function (e) {
                var newThemeIndex = AccentColorOptions.indexOf($("#formAccentColor").val());
                if (newThemeIndex > -1 && context.app.currentSessionVM.CustomThemecolor1 != AccentColorOptions[newThemeIndex]){
                    context.app.currentSessionVM.CustomThemecolor1 = AccentColorOptions[newThemeIndex];
                    context.app.currentSessionVM.CustomThemecolor2 = AccentColorRefractions[newThemeIndex];
                    context.app.LoadTheme(context.app.currentSessionVM.CustomThemecolor1, context.app.currentSessionVM.CustomThemecolor2);
                    context.SaveCurrentPreference();
                }
            });
            $('#formProductLine').change(function (e) {
                if (context.app.currentSessionVM.defaultProjectId == parseInt($('#formProductLine').val())){
                    context.app.currentSessionVM.defaultProjectId = parseInt($('#formProductLine').val());
                    context.SaveCurrentPreference();
                }
            });
        }    
        SaveCurrentPreference() {
            var preferencesJSON = {CustomThemecolor1 : this.app.currentSessionVM.CustomThemecolor1,
                CustomThemecolor2 : this.app.currentSessionVM.CustomThemecolor2,
                defaultProjectId : this.app.currentSessionVM.defaultProjectId};            
            var item = new ItemViewModel("Preferences", "-1"); item.Summary = JSON.stringify(preferencesJSON);
            this.helper.AjaxCall(DefineAdminItemEndpoint, JSON.stringify(
                {ProjectId: -1, CollectionId: -1, ItemId: -1, Item: item, ViewType: ViewEnumType.Session}), 
                this.OnPreferenceSaved, this);
        }  
        OnPreferenceSaved(response, context: ScreenUIControl) {
            if (response.Projects != undefined) {
                context.app.HideUnfreezeControls();
            }
            else {
                context.app.ShowAlert(response);
            }
        }  
    }
}