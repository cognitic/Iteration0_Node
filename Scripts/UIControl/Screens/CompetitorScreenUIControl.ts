namespace I0 {
    export class CompetitorScreenUIControl extends ScreenUIControl {
        customTableHeadersTemplate = "<th>Success Factor</th><th>-</th><th>Actions</th>";

        constructor(screenVM: ScreenViewModel, appContext: Iteration0) {
            super("CompetitorScreenUIControl", "#main",appContext);
            this.VM = screenVM;
            this.displayOptions.viewtabs = true;
            this.displayOptions.header = true;
            this.displayOptions.headertitle = true;
            this.displayOptions.nogapheader = true;
            this.displayOptions.mainmenu = true;
            this.DisplayHeader();
            this.DisplayBody("concept-rule-list");
            this.DisplayHistoryView();
            this.DisplayDownloadView();
            this.AttachDefaultEvents();  
            this.AttachCustomEvents();  
        }
        AttachCustomEvents() {
            //Todo check user session 
            $(".download-card").click((e => { this.app.ShowAlert("Coming back soon !", "Work in progress"); return false }));
        }
        ShowEditScreenForm() {
            var competitor = this.VM.Ressource;
            var definition = $.parseJSON(competitor.Definition);
            var formHtml = this.helper.BuildHtmlForTab(["Definition", "Details", "Scope"]);
            formHtml += "<div class='tab-view' tabindex='0'>";
            formHtml += this.helper.BuildHtmlForField(1, "formCompetitorName", "Name", "Competitor Name", competitor.Name, null);
            formHtml += this.helper.BuildHtmlForField(1, "formWebsite", "Website", "https://www.vendor.com/product", definition["Website"], null);
            formHtml += this.helper.BuildHtmlForField(1, "formLicenceFee", "License Price", "License Price for 1 user / month", definition["LicenceFee"], null);
            formHtml += this.helper.BuildHtmlForField(3, "formStatus", "Status", "Select Status", competitor.StatusEnumType.toString(), VersionStatusOptions);
            formHtml += "</div><div class='tab-view' tabindex='1'>";
            formHtml += this.helper.BuildHtmlForField(2, "formPositioning", "Positioning", "Product Identity, Value and Differentiation", competitor.Detail1, null);
            formHtml += this.helper.BuildHtmlForField(2, "formStrength", "Strengths", "Product Strengths (+) and  Weakness (-) against competitors", competitor.Detail2, null);
            formHtml += this.helper.BuildHtmlForField(2, "formReviews", "Reviews", "Detailled Review URLs", competitor.Detail3, null);
            formHtml += "</div><div class='tab-view' tabindex='2'>";
            formHtml += this.helper.BuildHtmlForField(3, "formContext", "Market", "Select Market", competitor.ManagerId.toString(), this.app.CurrentScreenExplorerContexts());
    formHtml += "</div>";
            this.app.ShowCustomMessage("<div id='conceptform' class='form-group' formid='" + competitor.RessourceId + "' >" + formHtml + "</div>", 
                                        "Define Competitor", this.OnRessourceSaveClick, null, this, null);
            //TODO add tooltip icon if not placeholder null => title="This is the text of the placeholder" 
            this.helper.ShowTab("conceptform", "0");
            $("#conceptform .tab-item").click((e => { this.helper.ShowTab("conceptform", $(e.target).attr('tabindex')); return false; }));                          
            return false;
        }   
        OnRessourceSaveClick(context: ConceptScreenUIControl) {
            var competitor = context.VM.Ressource;
            var definition = { "Website": $.trim($("#formWebsite").val()), "LicenceFee": $.trim($("#formLicenceFee").val())};
            competitor.Definition = JSON.stringify(definition);
            competitor.RessourceId = parseInt($.trim($("#conceptform").attr('formid')));
            competitor.RessourceEnumType = DataStructureEnumType.Competitor;
            competitor.Name = $.trim($("#formCompetitorName").val());
            competitor.Detail1 = $.trim($("#formPositioning").val());
            competitor.Detail2 = $.trim($("#formStrength").val());
            competitor.Detail3 = $.trim($("#formReviews").val());
            competitor.StatusEnumType = parseInt($.trim($("#formStatus").val()));
            competitor.ManagerId = parseInt($.trim($("#formContext").val()));
            var isOK = true;
            if ((context.helper.FieldIsBlank(competitor.ManagerId))) { isOK = false; context.app.ShowAlert("Context is mandatory !"); }
            if (isOK) {
                context.helper.AjaxCall(DefineRessourceEndpoint, JSON.stringify(
                    {ProjectId: context.ProjectId(), CollectionId: 0, ItemId: competitor.RessourceId, Ressource: competitor, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId)}), 
                    context.OnEditorSaved, context);
            }
        }
    }
}