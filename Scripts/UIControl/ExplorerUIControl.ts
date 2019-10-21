namespace I0 {
    export class ExplorerUIControl extends UIControl {
      VM: ExplorerViewModel;

        constructor(explorerVM: ExplorerViewModel, appContext: Iteration0) {
            super("ExplorerUIControl", "#explorer",appContext);
            this.VM = explorerVM;
            this.wrapper.attr('typeid', this.app.currentExplorerType);            
            this.DisplayPools();
            this.ExpandMostInterestingPool();  
            this.AttachCustomEvents();  
        }
        AttachCustomEvents() {  
          if ((this.app.currentExplorerType == ExplorerEnumType.Home) || (this.app.currentExplorerType == ExplorerEnumType.Matrix)) 
           $("#explorer-add-pool-button, .explorer-pool-edit-button, .explorer-pool-remove-button").hide();
          if (this.app.currentExplorerType ==  ExplorerEnumType.Matrix) $(".explorer-add-pool-item-button").hide();
          $('#explorer-add-pool-button').click((e => { this.ShowNewPoolForm(); return false }));
          $(".explorer-pool-edit-button").click((e => { this.ShowEditPoolForm($(e.target).attr('poolid')); return false }));
          $(".explorer-pool-remove-button").click((e => { this.ShowRemovePoolForm($(e.target).attr('poolid')); return false }));
          $('.explorer-add-pool-item-button').click((e => { this.ShowNewPoolItemForm($(e.target).attr('poolid')); return false }));
        }
        ShowNewPoolForm() {
          var newItem = new ItemViewModel("","-1"); newItem.ParentKeyValue = null; 
          newItem.Type= ContextByExplorerType[this.app.currentExplorerType];
          this.ShowPoolForm(newItem);
        }
        ShowEditPoolForm(linkId: string) {
          var item: ItemViewModel;
          jQuery.each(this.VM.MenuLists, function () { if (this.Pool.KeyValue == linkId) { item = this.Pool; return false; } });
          this.ShowPoolForm(item);
        }
        ShowRemovePoolForm(linkid: string) {
            //todo check pool is empty
            this.helper.AsyncPendingID = linkid;
            this.app.ShowCustomMessage("Are you sure you want to remove this item ?", "Remove item", this.OnExplorerItemRemoveClick, null, this, null);
        }    
        OnExplorerItemRemoveClick(context: ExplorerUIControl) {
            context.helper.AjaxCall(RemoveItemEndpoint, JSON.stringify(
              {ProjectId: context.ProjectId(), CollectionId: context.helper.AsyncPendingID, ItemId: 0, RemovedItemId: 0, ViewType: ViewEnumType.Explorer}), 
              context.app.LoadProject, context.app);
        }
        ShowNewPoolItemForm(typeid: string) {
          var newItem = new ItemViewModel("","-1"); newItem.ParentKeyValue = typeid; 
          newItem.Type= DataStructureByExplorerType[this.app.currentExplorerType];
          this.ShowPoolForm(newItem);
        }
        //NB: Pool item & pool form are the same except item ParentKeyValue
        ShowPoolForm(item: ItemViewModel) {          
            var Label = (item.ParentKeyValue == null ? ContextLabels[this.app.currentExplorerType] :ContextItemLabels[this.app.currentExplorerType] );
            var formHtml = this.helper.BuildHtmlForField(1, "formName", "Name", "Name", item.Label, null);
            this.app.ShowCustomMessage("<div class='item-form form-group' type='" + item.Type + "' formid='" + item.KeyValue + 
                  "' poolid='" + (item.ParentKeyValue? item.ParentKeyValue: "-1") + "'>" + formHtml + "</div>", "Define " + Label, this.OnPoolSaveClick, null, this, null);
            return false;
        }
        OnPoolSaveClick(context: ExplorerUIControl) {
            var item = new ItemViewModel( $.trim($("#formName").val()), "-1");
            item.KeyValue = $.trim($(".item-form").attr('formid'));
            item.ParentKeyValue = $.trim($(".item-form").attr('poolid'));
            item.Type = parseInt($(".item-form").attr('type'));
     
            var isOK = true;
            if ((context.helper.FieldIsBlank(item.Label))) { isOK = false; context.app.ShowAlert("Name is mandatory !"); }
            if (isOK) {
                var pId = (context.app.currentExplorerType == ExplorerEnumType.Home? 0 : context.ProjectId());
                context.helper.AjaxCall(DefineItemEndpoint, JSON.stringify(
                  {ProjectId: pId, CollectionId: parseInt(item.ParentKeyValue), ItemId: 0, Item: item, ViewType: ViewEnumType.Explorer}), 
                  context.OnEditorSaved, context);
            }
        }
        OnEditorSaved(response, context: ExplorerUIControl) {
            if (response.MenuLists != undefined) {
                context.app.SetCurrentExplorer(response);
                context.app.DisplayExplorer(context.app.currentExplorerType);
                context.app.HideUnfreezeControls();
            }
            else if (context.app.currentExplorerType == ExplorerEnumType.Home) {
              context.app.LoadUserSession(response, context.app);
            }
            else {
                context.app.ShowAlert(response);
            }
        }  
        ExpandMostInterestingPool() {
          var pool : JQuery;
          if (this.app.currentScreenVM != null && this.app.currentScreenVM.ExplorerTypeId == this.app.currentExplorerType){
            pool = $(".sidenav-list-header[poolid=" + this.app.currentScreenVM.Ressource.ManagerId + "]");
            $(".sublist-item[linkid=" + this.app.currentScreenVM.Ressource.RessourceId + "]").addClass("selected");
          }
          if (pool !=  undefined && pool.length > 0){
            pool.toggleClass("open").parent().next().toggleClass("h");
          }else{
            if (this.VM.MenuLists.length > 0){
              $(".sidenav-list-header:first").toggleClass("open").parent().next().toggleClass("h");
            }else{
              //Show warning icon with tooltip : No x found !
            }
          }
        }
        DisplayPools() {
            $("#explorer").html(explorerTemplate.replace("{{explorername}}", ContextPluralLabels[this.app.currentExplorerType]));
            var result ="";
            var context = this;
            jQuery.each(this.VM.MenuLists, function () {
              //TODO if refreshing same explorer Keep pool ouvertes et le select en cas de refresh
              result += poolTemplate.replace("{{templatename}}", this.Pool.Label).replace(/{{templateid}}/g,"poolid='" + this.Pool.KeyValue + "'");
            });
            $("#explorer .sidenav-list").html(result);
            jQuery.each(this.VM.MenuLists, function () {
              var sublistHtml ="";
              jQuery.each(this.Items, function () {
                sublistHtml += "<li linkid='" + this.KeyValue + "' class='sublist-item'>" + this.Label + "</li>";
              });
              $("#explorer .sublist[poolid='" + this.Pool.KeyValue + "']").html(sublistHtml);
            });
            
            // $("#edit-definition-button").click((e => { this.ShowEditDefinitionForm(); return false }));
            // Edit() => Synchronize, DisplayExplorer()
            $("#explorer .sublist li").click((e => { this.LoadScreenAsync(parseInt($(e.target).attr('linkid'))); return false })); 
            $(".sidenav-list-header").click(function(e) {
              $(e.target).toggleClass("open").parent().next().toggleClass("h");
            });
        }  
        public LoadScreenAsync(ressourceId: number) {
          $(".sublist-item[linkid='" + ressourceId+ "']").addClass("loading");
          this.app.currentViewType = 0;
          this.app.DisplayScreenAsync(ressourceId);
        }
    }
}