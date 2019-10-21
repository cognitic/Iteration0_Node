namespace I0 {
    export class PersonaScreenUIControl extends ScreenUIControl {
        customTableHeadersTemplate = "<th>Acceptance Criteria</th><th>-</th><th>Actions</th>";

        constructor(screenVM: ScreenViewModel, appContext: Iteration0) {
            super("PersonaScreenUIControl", "#main",appContext);
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
            $(".card-item-add-button, .card-item-edit-button").off('click');
            $(".card-item-add-button").click((e => { this.ShowNewCardItemForm($(e.target).attr('cardid')); return false }));
            $(".card-item-edit-button").click((e => { this.ShowEditCardItemForm($(e.target).attr('itemid')); return false }));
            $(".download-card").click((e => { this.app.ShowAlert("Coming back soon !", "Work in progress"); return false }));
        }
        ShowEditScreenForm() {
            var persona = this.VM.Ressource;
            var definition = $.parseJSON(persona.Definition);
            var formHtml = this.helper.BuildHtmlForTab(["Definition", "Details", "Scope"]);
            formHtml += "<div class='tab-view' tabindex='0'>";
            formHtml += this.helper.BuildHtmlForField(1, "formPersonaName", "Name", "Persona Archetype Name", persona.Name, null);
            formHtml += this.helper.BuildHtmlForField(1, "formPopulationShare", "User Population %", "1", definition["PopulationShare"], null);
            formHtml += this.helper.BuildHtmlForField(1, "formWorkingHours", "Mean Activity / Day", "1h", definition["WorkingHours"], null);
            formHtml += this.helper.BuildHtmlForField(1, "formMaxWorkingHours", "Max Activity / Day", "6h", definition["MaxWorkingHours"], null);
            formHtml += this.helper.BuildHtmlForField(3, "formStatus", "Status", "Select Status", persona.StatusEnumType.toString(), VersionStatusOptions);
            formHtml += "</div><div class='tab-view' tabindex='1'>";
            formHtml += this.helper.BuildHtmlForField(2, "formGoals", "Goals", "Business Goals", persona.Detail1, null);
            formHtml += this.helper.BuildHtmlForField(2, "formDislikes", "Dislikes", "Unproductive Activity or Organizational friction", persona.Detail2, null);
            formHtml += this.helper.BuildHtmlForField(2, "formCommonSoftware", "Software", "Commonly Used Software", persona.Detail3, null);
            formHtml += "</div><div class='tab-view' tabindex='2'>";
            formHtml += this.helper.BuildHtmlForField(3, "formContext", "Persona Category", "Select Category", persona.ManagerId.toString(), this.app.CurrentScreenExplorerContexts());
            formHtml += "</div>";
            this.app.ShowCustomMessage("<div id='conceptform' class='form-group' formid='" + persona.RessourceId + "' >" + formHtml + "</div>", 
                                        "Define Persona", this.OnRessourceSaveClick, null, this, null);
            //TODO add tooltip icon if not placeholder null => title="This is the text of the placeholder" 
            this.helper.ShowTab("conceptform", "0");
            $("#conceptform .tab-item").click((e => { this.helper.ShowTab("conceptform", $(e.target).attr('tabindex')); return false; }));                          
            return false;
        }   
        OnRessourceSaveClick(context: ConceptScreenUIControl) {
            var persona = context.VM.Ressource;
            var definition = { "PopulationShare": $.trim($("#formPopulationShare").val()),
                "WorkingHours": $.trim($("#formWorkingHours").val()), "MaxWorkingHours": $.trim($("#formMaxWorkingHours").val())};
            persona.Definition = JSON.stringify(definition);
            persona.RessourceId = parseInt($.trim($("#conceptform").attr('formid')));
            persona.RessourceEnumType = DataStructureEnumType.Persona;
            persona.Name = $.trim($("#formPersonaName").val());
            persona.Detail1 = $.trim($("#formGoals").val());
            persona.Detail2 = $.trim($("#formDislikes").val());
            persona.Detail3 = $.trim($("#formCommonSoftware").val());
            persona.StatusEnumType = parseInt($.trim($("#formStatus").val()));
            persona.ManagerId = parseInt($.trim($("#formContext").val()));
            var isOK = true;
            if ((context.helper.FieldIsBlank(persona.ManagerId))) { isOK = false; context.app.ShowAlert("Context is mandatory !"); }
            if (isOK) {
                context.helper.AjaxCall(DefineRessourceEndpoint, JSON.stringify(
                    {ProjectId: context.ProjectId(), CollectionId: 0, ItemId: persona.RessourceId, Ressource: persona, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId)}), 
                    context.OnEditorSaved, context);
            }
        }
    }
}