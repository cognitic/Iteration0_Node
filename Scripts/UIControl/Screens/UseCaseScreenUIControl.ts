namespace I0 {
    export class UseCaseScreenUIControl extends ScreenUIControl {
        customTableHeadersTemplate = "<th>Dependency</th><th>Responsibility</th><th>Action</th>";
        
        constructor(screenVM: ScreenViewModel, appContext: Iteration0) {
            super("UseCaseScreenUIControl", "#main",appContext);
            this.VM = screenVM;
            this.displayOptions.viewtabs = true;
            this.displayOptions.header = true;
            this.displayOptions.headertitle = true;
            this.displayOptions.nogapheader = true;
            this.displayOptions.mainmenu = true;
            this.DisplayHeader();
            this.DisplayBody("feature-dependency-list");
            this.DisplayHistoryView();
            this.DisplayDownloadView();
            this.AttachDefaultEvents();   
            this.AttachCustomEvents();  
        } 
        AttachCustomEvents() {
            //Todo check user session
            $(".card-item-remove-button").off('click');
            $(".card-item-remove-button").click((e => { this.ShowRemoveCardAssociationForm($(e.target).attr('itemid')); return false }));
            $(".download-card").click((e => { this.app.ShowAlert("Coming back soon !", "Work in progress"); return false }));
        }
        ShowEditScreenForm() {
            var usecase = this.VM.Ressource;
            var definition = $.parseJSON(usecase.Definition);
            var formHtml = this.helper.BuildHtmlForTab(["Definition", "Details", "Scope"]);
            formHtml += "<div class='tab-view' tabindex='0'>";
            formHtml += this.helper.BuildHtmlForField(1, "formGoalName", "Goal", "Goal Action Verb", usecase.Name, null);
            formHtml += this.helper.BuildHtmlForField(1, "formBefore", "Preconditions", "what we expect is already the state of the world", definition["Before"], null);
            formHtml += this.helper.BuildHtmlForField(1, "formSuccess", "Success End Condition", "The state of the world upon successful completion", definition["Success"], null);
            formHtml += this.helper.BuildHtmlForField(1, "formFailure", "Failed End Condition", "The state of the world if goal abandoned", definition["Failure"], null);
            formHtml += this.helper.BuildHtmlForField(1, "formActors", "Primary, Secondary Actors", "The role name for the actors", definition["Actors"], null);
            formHtml += this.helper.BuildHtmlForField(3, "formStatus", "Status", "Select Status", usecase.StatusEnumType.toString(), VersionStatusOptions);
            formHtml += "</div><div class='tab-view' tabindex='1'>";
            formHtml += this.helper.BuildHtmlForField(1, "formStartStep", "Trigger", "Starting Step", definition["Start"], null);
            formHtml += this.helper.BuildHtmlForField(2, "formFlowSteps", "Normal Flow", "Line-by-line Steps of the scenario from trigger to goal delivery, and any cleanup after", usecase.Detail1, null);
            formHtml += this.helper.BuildHtmlForField(2, "formExtensions", "Extensions", "Line-by-line Condition causing branching (Error or Subsidiary Option)", usecase.Detail2, null);
            formHtml += this.helper.BuildHtmlForField(2, "formVariations", "Sub-Variations", "Line-by-line Context causing variation (Parametric Alternative)", usecase.Detail3, null);
            formHtml += "</div><div class='tab-view' tabindex='2'>";
            formHtml += this.helper.BuildHtmlForField(3, "formScope", "Scope", "Select Scope", definition["Scope"], UseCaseScopes);
            formHtml += this.helper.BuildHtmlForField(3, "formLevel", "Level", "Select Level", definition["Level"], UseCaseLevels);
            formHtml += this.helper.BuildHtmlForField(3, "formContext", "Context", "Select Process", usecase.ManagerId.toString(), this.app.CurrentScreenExplorerContexts());
            formHtml += this.helper.BuildHtmlForField(1, "formGoalContext", "Goal in Context", "A longer statement of the goal in context if needed", definition["Context"], null);
            formHtml += this.helper.BuildHtmlForField(5, "formNumber", "Step Order", "-", [usecase.ScaleOrder, usecase.StepOrder], null);
            formHtml += "</div>";
            this.app.ShowCustomMessage("<div id='UCform' class='form-group' formid='" + usecase.RessourceId + "' >" + formHtml + "</div>", 
                                        "Define Use Case", this.OnRessourceSaveClick, null, this, null);
            //$('#formLevel').width(140); $('#formScope').width(180);
            //TODO add tooltip icon if not placeholder null => title="This is the text of the placeholder"   
            this.helper.ShowTab("UCform", "0");
            $("#UCform .tab-item").click((e => {  this.helper.ShowTab("UCform", $(e.target).attr('tabindex')); return false; }));                          
            return false;
        }   
        public OnRessourceSaveClick(context: UseCaseScreenUIControl) {
            var usecase = context.VM.Ressource;
            var definition = { "Context": $.trim($("#formGoalContext").val()),
                "Scope": parseInt($.trim($("#formScope").val())), "Level": parseInt($.trim($("#formLevel").val())),
                "Before": $.trim($("#formBefore").val()), "Success": $.trim($("#formSuccess").val()), "Failure": $.trim($("#formFailure").val()),
                "Actors": $.trim($("#formActors").val()), "Start": $.trim($("#formStartStep").val())};
            usecase.Definition = JSON.stringify(definition);
            usecase.RessourceId = parseInt($.trim($("#UCform").attr('formid')));
            usecase.RessourceEnumType = DataStructureEnumType.UseCase;
            usecase.Name = $.trim($("#formGoalName").val());
            usecase.StatusEnumType = parseInt($.trim($("#formStatus").val()));
            usecase.Detail1 = $.trim($("#formFlowSteps").val());
            usecase.Detail2 = $.trim($("#formExtensions").val());
            usecase.Detail3 = $.trim($("#formVariations").val());
            usecase.ManagerId = parseInt($.trim($("#formContext").val()));
            usecase.ScaleOrder = parseInt($.trim($("#formNumber1").val()));
            usecase.StepOrder = parseInt($.trim($("#formNumber2").val()));
            var isOK = true;
            if ((context.helper.FieldIsBlank(usecase.ManagerId))) { isOK = false; context.app.ShowAlert("Context is mandatory !"); }
            if (isOK) {
                context.helper.AjaxCall(DefineRessourceEndpoint, JSON.stringify(
                    {ProjectId: context.ProjectId(), CollectionId: 0, ItemId: usecase.RessourceId, Ressource: usecase, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId)}), 
                    context.OnEditorSaved, context);
            }
        }
    }
}