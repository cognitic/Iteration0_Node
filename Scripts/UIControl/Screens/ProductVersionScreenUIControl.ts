namespace I0 {
    export class ProductVersionScreenUIControl extends ScreenUIControl {
        customTableHeadersTemplate = "<th>Feature</th><th>Goal</th><th>Action</th>";
        
        constructor(screenVM: ScreenViewModel, appContext: Iteration0) {
            super("ProductVersionUIControl", "#main",appContext);
            this.VM = screenVM;
            this.displayOptions.viewtabs = true;
            this.displayOptions.header = true;
            this.displayOptions.headertitle = true;
            this.displayOptions.nogapheader = true;
            this.displayOptions.mainmenu = true;
            this.displayOptions.cardicon = false;            
            this.DisplayHeader();
            $("#screen-header .card-col:nth-child(4) .card").addClass("accent-color");
            this.DisplayBody("featureset-list");
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
            var version = this.VM.Ressource;
            var formHtml = this.helper.BuildHtmlForTab(["Definition", "Details", "Scope"]);
            formHtml += "<div class='tab-view' tabindex='0'>";
            formHtml += this.helper.BuildHtmlForField(5, "formNumber", "Number", "-", [version.ScaleOrder,version.StepOrder], null);
            formHtml += this.helper.BuildHtmlForField(1, "formNickname", "Nickname", "Version Nickname", version.Name, null);
            formHtml += this.helper.BuildHtmlForField(4, "formStart", "Start", "Select Start", version.DateDetail1, null);
            formHtml += this.helper.BuildHtmlForField(4, "formEnd", "End", "Select End", version.DateDetail2, null);
            formHtml += this.helper.BuildHtmlForField(3, "formStatus", "Status", "Select Status", version.StatusEnumType.toString(), VersionStatusOptions);
            formHtml += "</div><div class='tab-view' tabindex='1'>";
            formHtml += this.helper.BuildHtmlForField(2, "formGoals", "Goals", "Business Goals", version.Definition, null);
            formHtml += this.helper.BuildHtmlForField(2, "formRisks", "Risks", "Risks encountered by this version", version.Detail1, null);
            formHtml += this.helper.BuildHtmlForField(2, "formSteps", "Steps", "Project Milestones", version.Detail2, null);
            formHtml += "</div><div class='tab-view' tabindex='2'>";
            formHtml += this.helper.BuildHtmlForField(2, "formTeams", "Teams", "Team(s) working on this version", version.Detail3, null);
            formHtml += this.helper.BuildHtmlForField(3, "formContext", "Context", "Select Product", version.ManagerId.toString(), this.app.CurrentScreenExplorerContexts());
            formHtml += "</div>";
            this.app.ShowCustomMessage("<div id='versionform' class='form-group' formid='" + version.RessourceId + "' >" + formHtml + "</div>", 
                                        "Define Version", this.OnRessourceSaveClick, null, this, null);
            //TODO add tooltip icon if not placeholder null => title="This is the text of the placeholder"  
            this.helper.ShowTab("versionform", "0");
            $("#versionform .tab-item").click((e => { this.helper.ShowTab("versionform", $(e.target).attr('tabindex')); return false; }));  
            return false;
        }   
        public OnRessourceSaveClick(context: ProductVersionScreenUIControl) {
            var version = context.VM.Ressource;
            version.RessourceId = parseInt($.trim($("#versionform").attr('formid')));
            version.RessourceEnumType = DataStructureEnumType.Version;
            version.ScaleOrder = parseInt($.trim($("#formNumber1").val()));
            version.StepOrder = parseInt($.trim($("#formNumber2").val()));
            version.Name = $.trim($("#formNickname").val());
            version.DateDetail1 = [parseInt($.trim($("#formStartMonth").val())),1,parseInt($.trim($("#formStartYear").val()))];
            version.DateDetail2 = [parseInt($.trim($("#formEndMonth").val())),1,parseInt($.trim($("#formEndYear").val()))];
            version.StatusEnumType = parseInt($.trim($("#formStatus").val()));
            version.Definition = $.trim($("#formGoals").val());
            version.Detail1 = $.trim($("#formRisks").val());
            version.Detail2 = $.trim($("#formSteps").val());
            version.Detail3 = $.trim($("#formTeams").val());
            version.ManagerId = parseInt($.trim($("#formContext").val()));
            var isOK = true;
            if ((context.helper.FieldIsBlank(version.ManagerId))) { isOK = false; context.app.ShowAlert("Context is mandatory !"); }
            if (isOK) {
                context.helper.AjaxCall(DefineRessourceEndpoint, JSON.stringify(
                    {ProjectId: context.ProjectId(), CollectionId: 0, ItemId: version.RessourceId, Ressource: version, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId)}), 
                    context.OnEditorSaved, context);
            }
        }
    }
}