namespace I0 {
    export class UserAdminScreenUIControl extends ScreenUIControl {
        VM: ScreenViewModel;
        customTableHeadersTemplate = "<th>User Mail</th><th>-</th><th>Action</th>";
        
        constructor(screenVM: ScreenViewModel, appContext: Iteration0) {
            super("UserAdminScreenUIControl", "#main",appContext);
            this.VM = screenVM;
            this.displayOptions.viewtabs = false;           
            this.defaultViewType = 0;   
            this.displayOptions.header = false;
            this.displayOptions.headertitle = true;
            this.displayOptions.nogapheader = false;
            this.displayOptions.mainmenu = true;
            this.displayOptions.cardicon = false;
            $(".breadcrumb").html(this.VM.Ressource.Name);
            $("#screen-header").html("");
            this.DisplayBody("role-user-list");
            this.DisplayHistoryView();
            this.DisplayDownloadView();
            this.AttachDefaultEvents();
            this.AttachCustomEvents();
            $('.card-remove-button, .breadcrumb fas').hide();         
        } 
        AttachCustomEvents() {
            //Todo check user session    
        } 
        ShowDefineCardForm(role: RessourceViewModel) {
            var definition = $.parseJSON(role.Definition); 
            var formHtml = this.helper.BuildHtmlForTab(["Definition", "Edit Rights", "Permission"]);
            formHtml += "<div class='tab-view' tabindex='0'>";
            formHtml += this.helper.BuildHtmlForField(1, "formName", "Name", "Profile Name", role.Name, null);
            formHtml += this.helper.BuildHtmlForField(2, "formComment", "Comment", "Profile General description", role.Detail1, null);
            formHtml += "</div><div class='tab-view' tabindex='1'>";
            formHtml += this.helper.BuildHtmlForField(8, "formCanEditCompetitor", "Market", "", definition["CanEditCompetitor"], null);
            formHtml += this.helper.BuildHtmlForField(8, "formCanEditPersonna", "Persona", "", definition["CanEditPersonna"], null);
            formHtml += this.helper.BuildHtmlForField(8, "formCanEditRequirements", "Requirement", "", definition["CanEditRequirements"], null);
            formHtml += this.helper.BuildHtmlForField(8, "formCanEditDomains", "Domain", "", definition["CanEditDomains"], null);
            formHtml += this.helper.BuildHtmlForField(8, "formCanEditRoadmap", "Roadmap", "", definition["CanEditRoadmap"], null);
            formHtml += "</div><div class='tab-view' tabindex='2'>";
            formHtml += this.helper.BuildHtmlForField(8, "formCanDownload", "Ressource Download", "", definition["CanDownload"], null);
            formHtml += this.helper.BuildHtmlForField(8, "formCanExportProject", "Project Export", "", definition["CanExportProject"], null);
            formHtml += this.helper.BuildHtmlForField(8, "formCanImportProject", "Project Import", "", definition["CanImportProject"], null);
            formHtml += this.helper.BuildHtmlForField(8, "formIsRestrictedToEdit", "Restricted Access (/Edit Rights)", "", definition["IsRestrictedToEdit"], null);
            formHtml += this.helper.BuildHtmlForField(8, "formIsAdmin", "Admin Tools", "", definition["IsAdmin"], null);
            formHtml += "</div>";
            this.app.ShowCustomMessage("<div id='UCform' class='screen-form form-group'  typeid='" + role.RessourceId + "'>" + formHtml + "</div>", 
                "Define Role", this.OnCardSaveClick, null, this, null);
            //TODO add tooltip icon if not placeholder null => title="This is the text of the placeholder"   
            this.helper.ShowTab("UCform", "0");
            $("#UCform .tab-item").click((e => {  this.helper.ShowTab("UCform", $(e.target).attr('tabindex')); return false; }));   
            $(".label-switcher").click((e => { $(e.target).html(($(e.target).html() == "Allowed" ? "Denied" :"Allowed" ))}));                         
            return false;
        }   
    OnCardSaveClick(context: ScreenUIControl) {
        var item = new ItemViewModel($("#formName").val(), $(".screen-form").attr('typeid'));
        item.Type = DataStructureEnumType.Role;
        var summary = { "CanEditCompetitor": $("#CanEditCompetitor").html() == "Allowed",
            "CanEditPersonna": $("#CanEditPersonna").html() == "Allowed", "CanEditRequirements": $("#CanEditRequirements").html() == "Allowed",
            "CanEditDomains": $("#CanEditDomains").html() == "Allowed", "CanEditRoadmap": $("#CanEditRoadmap").html() == "Allowed", "CanDownload": $("#CanDownload").html() == "Allowed",
            "CanExportProject": $("#CanExportProject").html() == "Allowed", "CanImportProject": $("#CanImportProject").html() == "Allowed",
            "IsRestrictedToEdit": $("#IsRestrictedToEdit").html() == "Allowed", "IsAdmin": $("#IsAdmin").html() == "Allowed"};
        item.Summary = JSON.stringify(summary);
        var isOK = true;
        if ((context.helper.FieldIsBlank(item.Label))) { isOK = false; context.app.ShowAlert("Name is mandatory !"); }
        if (isOK) {
            context.helper.AjaxCall(DefineAdminItemEndpoint, JSON.stringify(
                {ProjectId: -1, CollectionId: -1, ItemId: -1, Item: item, ViewType: ViewEnumType.UserAdmin}), 
                context.OnEditorSaved, context);
        }
    }
    ShowDefineCardItemForm(item: any) {
        var formHtml = "";
        formHtml += this.helper.BuildHtmlForField(1, "formMail", "Mail (UPN)", "Mail address used as Login", item.Label, null);
        this.app.ShowCustomMessage("<div class='screen-form form-group'  formid='" + item.KeyValue + "' typeid='" + item.KeyValue + "'>" + formHtml + "</div>", "Define User", 
         this.OnCardItemSaveClick, null, this, null);
        return false;
    }
    OnCardItemSaveClick(context: ScreenUIControl) {
        var item = new ItemViewModel($.trim($("#formMail").val()), $.trim($(".screen-form").attr('formid')));   
        item.ParentKeyValue = $.trim($(".screen-form").attr('typeid')); 
        item.Type = SubDataStructureByExplorerType[this.app.currentExplorerType];
        var isOK = true;
        if ((context.helper.FieldIsBlank(item.Label))) { isOK = false; context.app.ShowAlert("Mail is mandatory !"); }
        if (isOK) {
            context.helper.AjaxCall(DefineAdminItemEndpoint, JSON.stringify(
                {ProjectId: context.ProjectId(), CollectionId: context.ScreenId(), ItemId: parseInt(item.ParentKeyValue), Item: item, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId)}), 
                context.OnEditorSaved, context);
        }
    }
    ShowRemoveCardItemForm(linkId: string) {
        this.helper.AsyncPendingID = linkId; 
        this.app.ShowCustomMessage("Are you sure you want to remove this user ?", "Remove User", this.OnCardItemRemoveClick, null, this, null);
    }    
    OnCardItemRemoveClick(context: ScreenUIControl) {
        context.helper.AjaxCall(RemoveAdminItemEndpoint, JSON.stringify(
            {ProjectId: context.ProjectId(), CollectionId: 0, ItemId: context.helper.AsyncPendingID, ViewType: ViewEnumType.UserAdmin}), 
            context.OnEditorSaved, context);
    }
    }
}