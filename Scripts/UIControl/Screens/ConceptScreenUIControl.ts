namespace I0 {
    export class ConceptScreenUIControl extends ScreenUIControl {
        customHeaderToolbarTemplate = `
        <div id="add-aggregation-button" title="Aggregate to Collection" class="clickable-icon"><span class="fas fa-sitemap"></span></div>`;
        customTableHeadersTemplate = "<th>Rule</th><th>Scope</th><th>Actions</th>";

        constructor(screenVM: ScreenViewModel, appContext: Iteration0) {
            super("ConceptScreenUIControl", "#main",appContext);
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
            $("#add-aggregation-button").click((e => { this.app.ShowAlert("Coming back soon !", "Work in progress"); return false }));
            //$("#add-aggregation-button").click((e => { this.ShowCardAssociationForm(this.VM.Ressource.RessourceId.toString()); return false })); 
            //$(".remove-aggregation-button").click((e => { this.ShowRemoveCardAssociationForm($(e.target).attr('linkid')); return false }));
            $(".download-card").click((e => { this.app.ShowAlert("Coming back soon !", "Work in progress"); return false }));
        }
        ShowEditScreenForm() {
            var concept = this.VM.Ressource;
            var formHtml = this.helper.BuildHtmlForTab(["Definition", "Scope"]);
            formHtml += "<div class='tab-view' tabindex='0'>";
            formHtml += this.helper.BuildHtmlForField(1, "formConceptName", "Name", "Concept Name", concept.Name, null);
            formHtml += this.helper.BuildHtmlForField(2, "formDefinition", "Definition", "Concept Definition", concept.Definition, null);
            formHtml += this.helper.BuildHtmlForField(3, "formStatus", "Status", "Select Status", concept.StatusEnumType.toString(), VersionStatusOptions);
            formHtml += "</div><div class='tab-view' tabindex='1'>";
            formHtml += this.helper.BuildHtmlForField(3, "formContext", "Context", "Select Sub-Domain", concept.ManagerId.toString(), this.app.CurrentScreenExplorerContexts());
            formHtml += "</div>";
            this.app.ShowCustomMessage("<div id='conceptform' class='form-group' formid='" + concept.RessourceId + "' >" + formHtml + "</div>", 
                                        "Define Concept", this.OnRessourceSaveClick, null, this, null);
            //TODO add tooltip icon if not placeholder null => title="This is the text of the placeholder" 
            this.helper.ShowTab("conceptform", "0");
            $("#conceptform .tab-item").click((e => { this.helper.ShowTab("conceptform", $(e.target).attr('tabindex')); return false; }));                          
            return false;
        }   
        OnRessourceSaveClick(context: ConceptScreenUIControl) {
            var concept = context.VM.Ressource;
            concept.RessourceId = parseInt($.trim($("#conceptform").attr('formid')));
            concept.RessourceEnumType = DataStructureEnumType.Concept;
            concept.Name = $.trim($("#formConceptName").val());
            concept.Definition = $.trim($("#formDefinition").val());
            concept.StatusEnumType = parseInt($.trim($("#formStatus").val()));
            concept.ManagerId = parseInt($.trim($("#formContext").val()));
            var isOK = true;
            if ((context.helper.FieldIsBlank(concept.ManagerId))) { isOK = false; context.app.ShowAlert("Context is mandatory !"); }
            if (isOK) {
                context.helper.AjaxCall(DefineRessourceEndpoint, JSON.stringify(
                    {ProjectId: context.ProjectId(), CollectionId: 0, ItemId: concept.RessourceId, Ressource: concept, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId)}), 
                    context.OnEditorSaved, context);
            }
        }
    }
}