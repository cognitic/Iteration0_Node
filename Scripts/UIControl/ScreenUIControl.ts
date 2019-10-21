//
//      Parent Class for Screens
//
namespace I0 {
    export class ScreenUIControl extends UIControl{
    VM: ScreenViewModel;
    defaultViewType = 3;
    displayOptions: any = {viewtabs: false, header: false, headertitle: false, 
                            nogapheader: false, mainmenu: false, cardicon: true};
    customHeaderToolbarTemplate: string = ''; customBodyToolbarTemplate: string = '';
    customTableHeadersTemplate: string = '';
    customTableToolbarTemplate: string = ''; customItemToolbarTemplate: string = '';
    MustUsePoolDependencies() : boolean {
        return this.VM.ExplorerTypeId == ExplorerEnumType.Requirement || this.VM.ExplorerTypeId == ExplorerEnumType.Roadmap;
    }
    ScreenId():number{return this.VM.Ressource.RessourceId;}
    
    constructor(ControlType: string, htmlWrapperID: string, appContext: Iteration0) {
        super(ControlType, htmlWrapperID, appContext);
    }
    AttachDefaultEvents() {
        //Todo check user session      
        $(".main .clickable-icon").off('click');
        $("#screen-edit-button").click((e => { this.ShowEditScreenForm(); return false }));
        $("#screen-remove-button").click((e => { this.ShowRemoveScreenForm(); return false }));        
        $('#card-add-button').click((e => { this.ShowNewCardForm(); return false }));
        $('.card-edit-button').click((e => { this.ShowEditCardForm($(e.target).attr('cardid')); return false }));
        $('.card-remove-button').click((e => { this.ShowRemoveCardForm($(e.target).attr('cardid')); return false }));
        $(".card-item-add-button").click((e => { this.ShowNewCardItemForm($(e.target).attr('cardid')); return false }));
        $(".card-item-edit-button").click((e => { this.ShowEditCardItemForm($(e.target).attr('itemid')); return false }));
        $(".card-item-remove-button").click((e => { this.ShowRemoveCardItemForm($(e.target).attr('itemid')); return false }));
        $("#top-context-expander-button").click((e => { this.ExpandCollapseHeader(e); return false })); 
    }  
    ShowEditScreenForm() {}  
    ShowRemoveScreenForm() {
        this.app.ShowCustomMessage("Are you sure you want to delete this "+ ContextItemLabels[this.VM.ExplorerTypeId] +" ?", "Remove "+ ContextItemLabels[this.VM.ExplorerTypeId], this.OnScreenRemoveClick, null, this, null);
    }  
    OnScreenRemoveClick(context: ScreenUIControl) {
        context.helper.AjaxCall(RemoveItemEndpoint, JSON.stringify(
            {ProjectId: context.ProjectId(), CollectionId: 0, ItemId:context.VM.Ressource.RessourceId, RemovedItemId: context.VM.Ressource.RessourceId, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId)}), 
            context.app.LoadProject, context.app);
    } 
    ShowNewCardForm() {
        var newVM = new RessourceViewModel("",-1); this.ShowDefineCardForm(newVM);
    }  
    ShowEditCardForm(cardId: string) {
        var item: RessourceViewModel;
        jQuery.each(this.VM.CardLists, function (i) { if (i>0 && this.PoolDef.RessourceId == cardId) { item = this.PoolDef; return false; } });
        this.ShowDefineCardForm(item);
    }  
    configOption = ["","formMandatoryScope","formOptionScope","formAltScope"];
    ShowDefineCardForm(ress: RessourceViewModel) {
        var formHtml = "";
        switch (this.VM.ExplorerTypeId) {
            case ExplorerEnumType.Persona:
                var formHtml = "";
                formHtml += this.helper.BuildHtmlForField(1, "formName", "As a " + this.VM.Ressource.Name + ", I want to ", "Story Goal", this.helper.sanitizeHtml(ress.Definition), null);
                formHtml += this.helper.BuildHtmlForField(1, "formSo", "So that ", "Story Goal Context", this.helper.sanitizeHtml(ress.Detail1), null);
                break;
            case ExplorerEnumType.Domain:
                formHtml += this.helper.BuildHtmlForField(1, "formName", "Name", "SubConcept Name", ress.Name, null);
                formHtml += this.helper.BuildHtmlForField(3, "formRuleType", "Rule Type", "Select Rule Type", ress.ConfigEnumType, RuleTypeOptions);
                break;
            case ExplorerEnumType.Requirement:
                formHtml += this.helper.BuildHtmlForField(1, "formName", "Name", "Feature Name", ress.Name, null);
                formHtml += this.helper.BuildHtmlForField(3, "formDefaultConfig", "Default Configuration", "Select Configuration", ress.ConfigEnumType, ConfigOptions);
                formHtml += this.helper.BuildHtmlForField(6, "formMandatoryScope", "Mandatory Scope", "", ress.ScopeLists[0], this.app.currentProjectVM.ScopeProfiles);
                formHtml += this.helper.BuildHtmlForField(6, "formOptionScope", "Optional Scope", "", ress.ScopeLists[1], this.app.currentProjectVM.ScopeProfiles);
                formHtml += this.helper.BuildHtmlForField(6, "formAltScope", "Alternative Scope", "", ress.ScopeLists[2], this.app.currentProjectVM.ScopeProfiles);
                break;
            default:
                formHtml += this.helper.BuildHtmlForField(1, "formName", "Name", ContextSubItemLabels[this.VM.ExplorerTypeId] + " Name", ress.Name, null);
                break;
        }
        if (this.VM.ExplorerTypeId != ExplorerEnumType.Roadmap) formHtml += this.helper.BuildHtmlForField(3, "formStatus", "Progress Status", "Select Progress Status", ress.StatusEnumType, RessourceStatusOptions);
        this.app.ShowCustomMessage("<div class='screen-form form-group'  typeid='" + ress.RessourceId + "'>" + formHtml + "</div>", "Define " + ContextSubItemLabels[this.VM.ExplorerTypeId], this.OnCardSaveClick, null, this, null);
        if (this.VM.ExplorerTypeId == ExplorerEnumType.Requirement){
            var context = this;
            $('#formMandatoryScope .scope-CB').click((e => this.UpdateCardItemContextSummary('#formMandatoryScope')));this.UpdateCardItemContextSummary('#formMandatoryScope');
            $('#formOptionScope .scope-CB').click((e => this.UpdateCardItemContextSummary('#formOptionScope')));this.UpdateCardItemContextSummary('#formOptionScope');
            $('#formAltScope .scope-CB').click((e => this.UpdateCardItemContextSummary('#formAltScope')));this.UpdateCardItemContextSummary('#formAltScope');  
            context.helper.DisableButtonSelector(context.configOption[ress.ConfigEnumType]);
            $('#formDefaultConfig').change((e => {$('.scope-CB').prop("checked", false); $('.scope-field').val(""); context.helper.DisableButtonSelector(context.configOption[$(e.target).val()]); }));     
        }
        return false;
    }
    OnCardSaveClick(context: ScreenUIControl) {
        var ress = new RessourceViewModel($("#formName").val(), parseInt($(".screen-form").attr('typeid')));
        ress.ManagerId = context.VM.Ressource.RessourceId;
        ress.StatusEnumType = parseInt($("#formStatus").val());
        ress.RessourceEnumType = SubDataStructureByExplorerType[context.app.currentExplorerType];
        switch (context.VM.ExplorerTypeId) {
            case ExplorerEnumType.Market:
                //ress.RessourceEnumType = DataStructureEnumType.BestPractice;
                break;
            case ExplorerEnumType.Persona:
                // ress.RessourceEnumType = DataStructureEnumType.EpicStory;
                ress.Detail1 = $.trim($("#formSo").val());
                break;
            case ExplorerEnumType.Requirement:
                // ress.RessourceEnumType = DataStructureEnumType.Feature;
                ress.ConfigEnumType = parseInt($("#formDefaultConfig").val());
                context.helper.DisableButtonSelector(context.configOption[ress.ConfigEnumType]);
                ress.ScopeLists.push(context.UpdateCardItemContextSummary("#formMandatoryScope"));    
                ress.ScopeLists.push(context.UpdateCardItemContextSummary("#formOptionScope"));    
                ress.ScopeLists.push(context.UpdateCardItemContextSummary("#formAltScope"));
                break;
            case ExplorerEnumType.Domain:
                // ress.RessourceEnumType = DataStructureEnumType.SubConcept;
                ress.ConfigEnumType = parseInt($("#formRuleType").val());
                break;
            case ExplorerEnumType.Roadmap:
                // ress.RessourceEnumType = DataStructureEnumType.Version;
                break;
        }
        var isOK = true;
        if ((context.helper.FieldIsBlank(ress.Name))) { isOK = false; context.app.ShowAlert("Name is mandatory !"); }
        if (isOK) {
            context.helper.AjaxCall(DefineRessourceEndpoint, JSON.stringify(
                {ProjectId: context.ProjectId(), CollectionId: context.ScreenId(), ItemId: ress.ManagerId, Ressource: ress, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId)}), 
                context.OnEditorSaved, context);
        }
    }
    ShowRemoveCardForm(cardId: string) {
        this.helper.AsyncPendingID = cardId; 
        this.app.ShowCustomMessage("Are you sure you want to remove this "+ ContextSubItemLabels[this.VM.ExplorerTypeId] +" ?", 
                            "Remove " + ContextSubItemLabels[this.VM.ExplorerTypeId], this.OnCardItemRemoveClick, null, this, null);
    }    
    ShowNewCardItemForm(cardId: string) {
        if (this.MustUsePoolDependencies()){
            this.ShowCardAssociationForm(cardId);
        }else{
            var newItem = new ItemViewModel("","-1"); newItem.ParentKeyValue = cardId; 
            if (this.VM.ExplorerTypeId == ExplorerEnumType.Persona) newItem.Summary = JSON.stringify({Given:"",When:"",Then:""});
            this.ShowDefineCardItemForm(newItem);
        }
    } 
    ShowEditCardItemForm(linkId: string) {
        var Context = this;
        var item: any;
        jQuery.each(this.VM.CardLists, function (i) { 
            if (i>0){
                if (Context.MustUsePoolDependencies()){
                    jQuery.each(this.PoolDef.DependencyList, function () { if (this.AssociationId == linkId) { item = this; return false; } });
                } else {
                    jQuery.each(this.Items, function () { if (this.KeyValue == linkId) { item = this; return false; } });
                } 
                if (item != null) return false;
            }
        });
        this.ShowDefineCardItemForm(item);
    }  
    ShowDefineCardItemForm(item: any) {
        var formHtml = "";
        switch (this.VM.ExplorerTypeId) {
            case ExplorerEnumType.Persona:
                    var criteria = $.parseJSON(item.Summary);
                    var formHtml = "";
                    formHtml += this.helper.BuildHtmlForField(1, "formGiven", "Given", "Criteria Start Condition(s)", criteria.Given, null);
                    formHtml += this.helper.BuildHtmlForField(1, "formWhen", "When", "Criteria Action", criteria.When, null);
                    formHtml += this.helper.BuildHtmlForField(1, "formThen", "Then", "Criteria End Result", criteria.Then, null);
                break;
            case ExplorerEnumType.Requirement:
                formHtml += this.helper.BuildHtmlForField(1, "formContractName", item.ChildName + " Responsibility", "Responsibility Verb Name", item.ContractResponsibility, null);
                break;
            case ExplorerEnumType.Domain:
                var subConcept: RessourceViewModel;
                jQuery.each(this.VM.CardLists, function (i) { if (i > 0 && this.PoolDef.RessourceId.toString() == item.ParentKeyValue) { subConcept = this.PoolDef; return false; } });
                var ruleType = RuleTypeOptions[subConcept.ConfigEnumType - 1].Label; var placeholder = RuleTypeExamples[subConcept.ConfigEnumType - 1].Label;
                if (item.ScopeLists.length == 0) item.ScopeLists.push([]);
                formHtml += this.helper.BuildHtmlForField(1, "formName", ruleType + " Rule", placeholder, 
                            this.helper.sanitizeHtml(item.Label), null);
                formHtml += this.helper.BuildHtmlForField(6, "formRuleScope", "Rule Scope", "", item.ScopeLists[0],  this.app.currentProjectVM.ScopeProfiles);
                break;
            case ExplorerEnumType.Roadmap:
                formHtml += this.helper.BuildHtmlForField(1, "formGoal", "Goal(s) on " + item.ChildName, "Task Verb Name(s)", item.ContractResponsibility, null);
                break;
            case ExplorerEnumType.MenuUserAdmin:
                formHtml += this.helper.BuildHtmlForField(1, "formMail", "Mail Address (UPN)", "Mail address used as Login", item.Label, null);
                break;
            default:
                formHtml += this.helper.BuildHtmlForField(1, "formName", "Name", ContextSubItemDetailLabels[this.VM.ExplorerTypeId] + " Name", this.helper.sanitizeHtml(item.Label), null);
            break;
        }
        this.app.ShowCustomMessage("<div class='screen-form form-group'  formid='" + (this.MustUsePoolDependencies()? item.AssociationId : item.KeyValue) +
                                     "' typeid='" + (this.MustUsePoolDependencies()? item.ParentId : item.ParentKeyValue) + "'>" + formHtml + "</div>", "Define " + ContextSubItemDetailLabels[this.VM.ExplorerTypeId], 
        (this.MustUsePoolDependencies()? this.OnCardAssociationSaveClick : this.OnCardItemSaveClick), null, this, null);
        $('#formRuleScope .scope-CB').click((e => this.UpdateCardItemContextSummary('#formRuleScope')));this.UpdateCardItemContextSummary('#formRuleScope');        
        return false;
    }
    UpdateCardItemContextSummary(selectorId: string): Array<string> {
        var result = [];
        //jQuery.each(this.app.currentProjectVM.ScopeProfiles, function () {
            var selector = $(selectorId);
            if (selector.length > 0) {
                var summary = "";
                jQuery.each(selector.find('.scope-CB:checked'), function () {
                    summary += $(this).attr('CBCode') + ', ';
                    result.push($(this).attr('CBCode'));
                });
                summary = (summary.length > 0) ? summary.substring(0, summary.length - 2) : "Default";
                selector.find('.scope-field').val(summary);
            }
        //});
        return result;
    }
    OnCardItemSaveClick(context: ScreenUIControl) {
        var item = new ItemViewModel($.trim($("#formName").val()), $.trim($(".screen-form").attr('formid')));   
        item.ParentKeyValue = $.trim($(".screen-form").attr('typeid')); 
        item.Type = SubDataStructureItemByExplorerType[context.app.currentExplorerType]; 
        var isOK = true;     
        switch (context.VM.ExplorerTypeId) {
            case ExplorerEnumType.Market:
                if ((context.helper.FieldIsBlank(item.Label))) { isOK = false; context.app.ShowAlert("Factor Name is mandatory !"); }
                break;
            case ExplorerEnumType.Persona:
                var summary = { "Given": $.trim($("#formGiven").val()), "When": $.trim($("#formWhen").val()), "Then": $.trim($("#formThen").val())};
                item.Label = summary.Given;
                item.Summary = JSON.stringify(summary);
                item.Type = DataStructureEnumType.EpicCriteria;
                if (context.helper.FieldIsBlank(summary.Given) || context.helper.FieldIsBlank(summary.When) || 
                    context.helper.FieldIsBlank(summary.Then)) { isOK = false; context.app.ShowAlert("Criteria is incomplete !"); }
                break;
            case ExplorerEnumType.Domain:  
                item.ScopeLists.push(context.UpdateCardItemContextSummary("#formRuleScope"));
                if ((context.helper.FieldIsBlank(item.Label))) { isOK = false; context.app.ShowAlert("Rule is mandatory !"); }
                break;
        }
        if (isOK) {
            context.helper.AjaxCall(DefineItemEndpoint, JSON.stringify(
                {ProjectId: context.ProjectId(), CollectionId: parseInt(item.ParentKeyValue), ItemId: context.VM.Ressource.RessourceId, Item: item, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId)}), 
                context.OnEditorSaved, context);
        }
    }
    ShowRemoveCardItemForm(linkId: string) {
        this.helper.AsyncPendingID = linkId; 
        this.app.ShowCustomMessage("Are you sure you want to remove this "+ ContextSubItemDetailLabels[this.VM.ExplorerTypeId] +" ?", "Remove "+ ContextSubItemDetailLabels[this.VM.ExplorerTypeId], this.OnCardItemRemoveClick, null, this, null);
    }    
    OnCardItemRemoveClick(context: ScreenUIControl) {
        context.helper.AjaxCall(RemoveItemEndpoint, JSON.stringify(
            {ProjectId: context.ProjectId(), CollectionId: 0, ItemId:context.VM.Ressource.RessourceId, RemovedItemId: context.helper.AsyncPendingID, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId)}), 
            context.OnEditorSaved, context);
    }
    ExpandCollapseHeader(e) {
        $(e.target).toggleClass("open");
        if ($(e.target).hasClass("open")){
          $(e.target).children().addClass('fa-caret-square-up').removeClass('fa-caret-square-down');
          $("#board-view").removeClass('main-top-collapsed');
        }else {
          $(e.target).children().addClass('fa-caret-square-down').removeClass('fa-caret-square-up');
          $("#board-view").addClass('main-top-collapsed');
        }
    } 
    ShowCardAssociationForm(cardId: string) {
        var Context = this;
        if ((this.VM.CardOptionLists.length > 0) && (this.VM.CardOptionLists[0].Items.length > 0)) {
            var html = '<div><div style="height: 240px; overflow-y: scroll;"><div class="column-list">';
            html += this.helper.BuildHtmlListWith(this.VM.CardOptionLists[0].Items, this.VM.ExplorerTypeId == ExplorerEnumType.Domain) + '</div></div></div>';
        } else {
            html = '<div class="tac">No items available</div>';
        }
        this.app.ShowCustomMessage("<div id='UCform' class='screen-form form-group'  typeid='" + cardId + "'>" + html + "</div>", 
                            "Select items", this.OnCardAssociationAddClick, null, this, null);        
        $(".column-list-row").click((e => { $(e.target).find(".row-cb").prop("checked", !$(e.target).find(".row-cb").prop("checked"))}));                         
        return false;
    }
    OnCardAssociationAddClick(context: ScreenUIControl) {
        var parentId = parseInt($(".screen-form").attr('typeid'));
        var selectionIds = [];
        jQuery.each($('.column-list-row .row-cb:checked'), function () {
            selectionIds.push(parseInt($(this).attr('cbId')));
        }); 
        var isOK = true; 
        if (selectionIds.length == 0) { isOK = false; context.app.ShowAlert("No items Selected !"); }
        if (isOK) {
            context.helper.AjaxCall(AddAssociationEndpoint, JSON.stringify(
                {ProjectId: context.ProjectId(), CollectionId: 0, ItemId: context.VM.Ressource.RessourceId, 
                    ParentId : parentId, ChildrenIds : selectionIds, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId)}), 
                context.OnEditorSaved, context);
        }
    }
    ShowRemoveCardAssociationForm(itemId: string) {
        this.helper.AsyncPendingID = itemId;
        this.app.ShowCustomMessage("Are you sure you want to delete this row ?", "Remove row", this.OnCardAssociationRemoveClick, null, this, null);
    }
    OnCardAssociationRemoveClick(context: ConceptScreenUIControl) {
        context.helper.AjaxCall(RemoveAssociationEndpoint, JSON.stringify(
            {ProjectId: context.ProjectId(), CollectionId: 0, ItemId: context.VM.Ressource.RessourceId, 
                AssociationId: context.helper.AsyncPendingID, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId)}), 
            context.OnEditorSaved, context);
    }
    OnCardAssociationSaveClick(context: ScreenUIControl) {
        var associationId = parseInt($(".form-group").attr('formid')); 
        var assoc: AssociationViewModel;
        jQuery.each(context.VM.CardLists, function (i) { 
            if (i>0){
                jQuery.each(this.PoolDef.DependencyList, function () { if (this.AssociationId == associationId) { assoc = this; return false; } });
                if (assoc != null) return false;
            }
        });
        var isOK = true;    
        switch (context.VM.ExplorerTypeId) {
            case ExplorerEnumType.Requirement:
                assoc.ContractResponsibility = $.trim($("#formContractName").val())
                if ((context.helper.FieldIsBlank(assoc.ContractResponsibility))) { isOK = false; context.app.ShowAlert("Responsibility Name is mandatory !"); }
                break;
            case ExplorerEnumType.Roadmap:
                assoc.ContractResponsibility = $.trim($("#formGoal").val())
                if ((context.helper.FieldIsBlank(assoc.ContractResponsibility))) { isOK = false; context.app.ShowAlert("Task Goal is mandatory !"); }
                break;
        }
        if ((context.helper.FieldIsBlank(assoc.ContractResponsibility))) { isOK = false; context.app.ShowAlert("Name is mandatory !"); }
        if (isOK) {
            context.helper.AjaxCall(DefineAssociationEndpoint, JSON.stringify(
                {ProjectId: context.ProjectId(), CollectionId: 0, ItemId: context.VM.Ressource.RessourceId, 
                    Association: assoc, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId)}), 
                context.OnEditorSaved, context);
        }
    }
    OnEditorSaved(response, context: ScreenUIControl) {
        if (response.Ressource != undefined) {
            context.app.currentProjectVMIsFresh = false;
            context.app.DisplayScreen(response, context.app);
            context.app.HideUnfreezeControls();
        }
        else {
            context.app.ShowAlert(response);
        }
    }  
    public DisplayHeader() {
        var result =""; var context = this;
        jQuery.each(this.VM.CardLists[0].Items, function () {
          result += cardTemplate.replace(/{{templatetitle}}/g,context.helper.sanitizeHtml(this.Label)).replace(/{{templatecontent}}/g,context.helper.sanitizeHtml(this.Summary, true));
        });        
        $("#screen-header").html(result);
        this.DisplayHeaderToolbar();
    } 
    public DisplayHeaderToolbar() { 
        if (this.displayOptions.header){
            $("#board-view-toolbar").html(this.customHeaderToolbarTemplate + defaultHeaderToolbarTemplate);
        }
    } 
    public DisplayBody(tableCssClass: string) {            
        var result = "";
        var context = this;
        jQuery.each(this.VM.CardLists, function (index) {
            if (index > 0){
                var iconclass = "";
                if (context.displayOptions.cardicon){
                    var cellIconClass = (this.PoolDef.RessourceEnumType==DataStructureEnumType.Feature? configTypeIcons[this.PoolDef.ConfigEnumType] :configTypeIcons[1]);
                    var cellIconColorlass = "accent-color";
                    if (this.PoolDef.StatusEnumType != StatusEnumType.Finalised) cellIconColorlass = "accent-color-refracted";
                    iconclass = "fas " + cellIconClass + " " + cellIconColorlass;
                }
                var card = editorCardTemplate.replace(/{{templateiconclass}}/g,iconclass);
                card = card.replace(/{{templatetitle}}/g,this.PoolDef.Name);
                card = card.replace(/{{templatetabletoolbar}}/g,context.customTableToolbarTemplate 
                     + defaultTableToolbarTemplate.replace(/{{templateid}}/g, "cardid='" + this.PoolDef.RessourceId + "'"));
                card = card.replace(/{{templatetableclass}}/g,tableCssClass);
                card = card.replace(/{{templatetablehead}}/g,context.customTableHeadersTemplate);
                var bodyHtml = "";
                if (context.MustUsePoolDependencies()){
                    jQuery.each(this.PoolDef.DependencyList, function (index) {
                        bodyHtml += context.BuildHtmlForBodyWithAssociation(this);
                    });
                }else{
                    jQuery.each(this.Items, function (index) {
                        bodyHtml += context.BuildHtmlForBodyWithItem(this);
                    });
                }
                card = card.replace(/{{templatetablebody}}/g,bodyHtml);
                result += card;
            }
        });
        $("#screen-body").html(result);
        this.DisplayBodyToolbar();
        if(this.VM.ExplorerTypeId ==ExplorerEnumType.Requirement || this.VM.ExplorerTypeId ==ExplorerEnumType.Matrix ){
            $("#screen-body .card-header .fa-circle").attr('title', 'Mandatory');
            $("#screen-body .card-header .fa-adjust").attr('title', 'Optional');
            $("#screen-body .card-header .fa-ban").attr('title', 'Alternative');
        }else{
            $("#screen-body .card-header .fa-circle").attr('title', RessourceStatusOptions[0].Label);
            $("#screen-body .card-header .fa-circle.accent-color").attr('title', RessourceStatusOptions[1].Label);
        }
    }   
    public DisplayBodyToolbar() { 
        if (this.displayOptions.mainmenu){
            $("#board-cards-toolbar").html(this.customBodyToolbarTemplate + defaultBodyToolbarTemplate);
        } 
    }   
    public BuildHtmlForBodyWithAssociation(assoc: AssociationViewModel) : string {
        return editorCardItemTemplate.replace(/{{templatecol1}}/g,assoc.ChildName).replace(/{{templatecol2}}/g,this.helper.sanitizeHtml(assoc.ContractResponsibility)).replace(/{{templatetoolbar}}/g,this.customItemToolbarTemplate 
            + defaultItemToolbarTemplate.replace(/{{templateid}}/g, "itemid='" + assoc.AssociationId + "'"));
    }   
    public BuildHtmlForBodyWithItem(item: ItemViewModel) : string {
        return editorCardItemTemplate.replace(/{{templatecol1}}/g,this.helper.sanitizeHtml(item.Label, true)).replace(/{{templatecol2}}/g,item.ScopeLists.join(", ")).replace(/{{templatetoolbar}}/g,this.customItemToolbarTemplate 
            + defaultItemToolbarTemplate.replace(/{{templateid}}/g, "itemid='" + item.KeyValue + "'"));
    }   
    public DisplayHistoryView() {
        var logHtml ="";
        jQuery.each(this.VM.HistoryLogList.Items, function () {
          var spaceIndex = this.Label.indexOf(" ");
          var date = this.Label.substring(0,spaceIndex);
          var time = this.Label.substring(spaceIndex + 1, this.Label.length);
          logHtml += "<tr><td>" + this.KeyValue +"</td><td>" + date +"</td><td>" + time +"</td><td>" + this.Code +"</td><td>" + this.Summary +"</td></tr>";
        });
        $("#table-view .log-list tbody").html(logHtml);
    }        
    public DisplayDownloadView() {  
        var context = this;
        var downloadCardHtml ="";
        jQuery.each(this.VM.DownloadList.Items, function () {
            downloadCardHtml += downloadCardTemplate.replace(/{{templateIcon}}/g,DownloadTypeIcons[this.Code]).replace(/{{templateTitle}}/g,context.helper.sanitizeHtml(this.Label)).replace(/{{templateType}}/g,this.Code);
        });
        $("#megamenu-view .download-card-col").html(downloadCardHtml);
    }    
    public Hide() {
        $("#main-view-tab, #board-view-toolbar, #board-cards-toolbar, #main-top-summary").addClass("h");
        $("#board-view, #table-view, #megamenu-view, #matrix-view").addClass("h");
    }
    public Show() {
        this.Hide();
        $(".main-top, .main-top-col").removeClass("no-gap");
        if (this.displayOptions.viewtabs){
            if (this.displayOptions.header)  $("#board-view-toolbar").removeClass("h");
            if (this.displayOptions.headertitle){ 
                $("#main-top-summary .breadcrumb").html(this.VM.Ressource.Name);
                //TODO refresh explorer item name ? ExplorerByExplorerType(context.app.currentRessoureceType)
                $("#main-top-summary .fa-certificate, #main-top-summary .fa-flask").addClass('h');
                if (this.VM.Ressource.StatusEnumType > 0){
                    if (this.VM.Ressource.StatusEnumType == StatusEnumType.Draft)$("#main-top-summary .fa-flask").removeClass('h');
                    if (this.VM.Ressource.StatusEnumType == StatusEnumType.Finalised)$("#main-top-summary .fa-certificate").removeClass('h');
                }
                $("#main-top-summary").removeClass("h")
            };
            if (this.displayOptions.mainmenu) $("#board-cards-toolbar").removeClass("h");
            if (this.displayOptions.nogapheader) $(".main-top, .main-top-col").addClass("no-gap");
            $("#main-view-tab label").click((e => { this.ShowView(parseInt($(e.target).prev().val())); }));
            $("#main-view-tab input[value=" + this.app.currentViewType.toString() + "]").prop("checked", true);
            $("#main-view-tab").removeClass("h");
            this.ShowView(this.app.currentViewType);
        }else {
            this.ShowView(this.defaultViewType);
            $("#main-top-summary").removeClass("h")
        }
    }
    public ShowView(viewType : number) {
        this.app.currentViewType = viewType;
        $("#board-view, #table-view, #megamenu-view, #matrix-view").addClass("h");
        if (viewType == ScreenViewEnumType.Board){
            $("#top-context-expander-button").children().addClass('fa-caret-square-up').removeClass('fa-caret-square-down');
            if (this.displayOptions.header) {$("#board-view").removeClass('main-top-collapsed')}
            else{$("#board-view").addClass('main-top-collapsed')};
            $("#board-view").removeClass("h");
        }else if (viewType == ScreenViewEnumType.Table){
            $("#table-view").removeClass("h");
        }else if (viewType == ScreenViewEnumType.Downloads){
            $("#megamenu-view").removeClass("h");
        }else if (viewType == ScreenViewEnumType.Matrix){
            $("#matrix-view").removeClass("h");
        }else { //downloads           
            this.app.ShowAlert("View Undefined !");
        }
    }
}
}