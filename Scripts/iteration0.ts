/// <reference path="./Lib/jquery.d.ts" />
/// <reference path='./Config/Enums.ts'/>
/// <reference path='./Config/UITemplates.ts'/>
/// <reference path='./Config/ViewModels.ts'/>
/// <reference path='./Config/Labels.ts'/>
/// <reference path='./Helper/UIHelper.ts'/>
/// <reference path='./Export/PDFGenerator.ts'/>
/// <reference path='./UIControl/UIControl.ts'/>
/// <reference path='./UIControl/ScreenUIControl.ts'/>
/// <reference path='./UIControl/PopUpUIControl.ts'/>
/// <reference path='./UIControl/ExplorerUIControl.ts'/>
/// <reference path='./UIControl/Screens/MatrixUIControl.ts'/>
/// <reference path='./UIControl/Screens/UseCaseScreenUIControl.ts'/>
/// <reference path='./UIControl/Screens/ConceptScreenUIControl.ts'/>
/// <reference path='./UIControl/Screens/ProductVersionScreenUIControl.ts'/>

namespace I0 {
    export class Iteration0 extends UIControl {    
    settings: any;  
    currentServerSetting: any = {name : "Intranet"};
    currentSessionVM: UserSessionViewModel;
    currentProjectExplorerVM: ExplorerViewModel;
    currentProjectVM: ProjectViewModel;  
    currentProjectVMIsFresh: boolean;  
    currentExplorerType: any; 
    currentExplorer : ExplorerUIControl;
    currentViewType: any; 
    currentScreenVM: ScreenViewModel; 
    backScreen: JQuery;   
    testMode: boolean = true;  
    localMode: boolean = false; 

    constructor(appSettings?: any) {        
        super("App", "body", null);
        this.helper.app = this;
        this.settings = appSettings;
        if (this.testMode){            
            this.currentSessionVM = sessionMockUp; this.currentProjectExplorerVM = configExplorerMockUp; this.currentProjectVM= projectMockUp;
            this.currentScreenVM = this.currentProjectVM.DashboardScreenVM; this.currentExplorerType = 0;  this.currentViewType = 0;
            this.currentServerSetting = AppSettingsMockUp; this.LoadDefaultMatrixExplorerVM(); 
            this.DisplayMenu(); this.DisplayExplorer(this.currentExplorerType); this.LoadProject(this.currentProjectVM, this);
        }else{
            this.LoadAppSettings(); 
        }
        this.AttachDefaultEvents();
    }
    public LoadAppSettings() {
        this.currentProjectExplorerVM = new ExplorerViewModel(0);
        if (this.settings != null) {
            this.localMode = (this.settings.localMode == "yes");
            if (this.localMode){
                this.LoadLocalConfiguration();
                if (this.settings.servers.length > 0){
                    this.currentSessionVM = null; 
                    this.currentServerSetting = null;
                    jQuery.each(this.settings.servers, function () {
                        if (this.default == "yes") { this.currentServerSetting = this; return false;}
                    });
                    if (this.currentServerSetting != null) this.LoadUserSessionAsync(this.currentServerSetting);        
                }else{ //local only
                    this.DisplayMenu();
                }
            }else{ //server only
                this.LoadUserSessionAsync(null);
            }
        }else{
            this.ShowAlert("Application Settings are missing !");
        }
    }
    public LoadLocalConfiguration() {
        if (this.localMode){
            this.currentProjectExplorerVM.MenuLists.push(new ItemViewModelList());
            this.currentProjectExplorerVM.MenuLists[0].Pool = new ItemViewModel("Local Computer", "0")
            this.currentProjectExplorerVM.MenuLists[0].Items = new Array<ItemViewModel>();
            //todo load local json projects
        }
    }
    public LoadUserSessionAsync(serverSetting: any) {
        var context = this;
        if (this.localMode){
            //Work in progress ...
            //this.helper.AjaxCall(serverSetting.url + UserLoadSessionEndpoint, JSON.stringify({ UserId: serverSetting.login, Password: serverSetting.password}), context.LoadUserSession, context);
        }else{  //We ask current website session
            this.helper.AjaxCall(LoadSessionEndpoint, JSON.stringify({}), context.LoadUserSession, context);
        }
    }
    public LoadUserSession(response, context: Iteration0) {
        if (response.Role != undefined) {            
            // CanEditRequirements: boolean;
            // CanEditDomains: boolean;
            // CanEditRoadmap: boolean;
            // CanDownload: boolean;
            // CanExportProject: boolean;
            // CanImportProject: boolean;
            // IsAdmin: boolean;
            context.currentSessionVM = response; 
            context.currentProjectExplorerVM.MenuLists = new Array<ItemViewModelList>();
            context.currentProjectExplorerVM.MenuLists.push(new ItemViewModelList());
            context.currentProjectExplorerVM.MenuLists[0].Pool = new ItemViewModel(context.currentServerSetting.name, "0")
            context.currentProjectExplorerVM.MenuLists[0].Items = new Array<ItemViewModel>();
            jQuery.each(context.currentSessionVM.Projects, function () {
                context.currentProjectExplorerVM.MenuLists[0].Items.push(new ItemViewModel(this.Label, this.KeyValue));
            });
            context.LoadTheme(context.currentSessionVM.CustomThemecolor1, context.currentSessionVM.CustomThemecolor2);
            context.LoadDefaultMatrixExplorerVM();
            context.DisplayMenu();
            context.DisplayExplorer(ExplorerEnumType.Home);//todo URL mapping
            if (context.currentSessionVM.defaultProjectId){
                //load default project 
            }
        }
        else {
            this.ShowAlert("User Session not found !");
        }
    }
    public LoadTheme(themecolor1: string, themecolor2: string) {
        if (themecolor1.length > 0 && themecolor2.length > 0){
            $("<div />", { html: '&shy;<style>' + themeTemplate.replace(/{{templatecolor1}}/g,themecolor1).replace(/{{templatecolor2}}/g,themecolor2) + '</style>' }).appendTo("#custom-layer"); 
        }
    }
    public LoadDefaultMatrixExplorerVM() {
        this.currentSessionVM.MatrixExplorerVM = new ExplorerViewModel(ExplorerEnumType.Matrix);
        this.currentSessionVM.MatrixExplorerVM.MenuLists.push(new ItemViewModelList());
        this.currentSessionVM.MatrixExplorerVM.MenuLists[0].Pool = new ItemViewModel("Comparison Matrix", "0")
        this.currentSessionVM.MatrixExplorerVM.MenuLists[0].Items = new Array<ItemViewModel>();
        this.currentSessionVM.MatrixExplorerVM.MenuLists[0].Items.push(new ItemViewModel("Features Comparison", "998"));
        this.currentSessionVM.MatrixExplorerVM.MenuLists[0].Items.push(new ItemViewModel("Rules Comparison", "999"));
    }
    public DisplayMenu() {
        $("#app-menu li").addClass("h");
        if (this.currentProjectVM != null) {
            $("#app-menu li").removeClass("h");
        }else{
            $("#app-menu li[linkid=0]").removeClass("h");
        }
        if (this.currentSessionVM != null) {
            //TODO show global menu / user right
        }
        $("#app-menu li").click((e => { this.DisplayExplorer(parseInt($(e.target).attr('linkid'))); return false }));
    }
    public DisplayExplorer(explorerType: Number) {   
        //TODO lock explorer change during screen loading     
        this.currentExplorerType = explorerType;
        var context = this;
        var explorers = {
            '0': function () {
                return new ExplorerUIControl(context.currentProjectExplorerVM, context);
            },
            '1': function () {
                return new ExplorerUIControl(context.currentProjectVM.MarketExplorerVM, context);
            },
            '2': function () {
                return new ExplorerUIControl(context.currentProjectVM.PersonaExplorerVM, context);
            },
            '3': function () {
                return new ExplorerUIControl(context.currentProjectVM.RequirementExplorerVM, context);
            },
            '4': function () {
                return new ExplorerUIControl(context.currentProjectVM.DomainExplorerVM, context);
            },
            '5': function () {
                return new ExplorerUIControl(context.currentProjectVM.RoadMapExplorerVM, context);
            },
            '6': function () {
                return new ExplorerUIControl(context.currentSessionVM.MatrixExplorerVM, context);
            }
        };
        this.currentExplorer = explorers[explorerType.toString()]();
        this.currentExplorer.Show();
        if (this.testMode){  
            var screenMockUps = [this.currentProjectVM.DashboardScreenVM, competitorScreenMockUp, personaScreenMockUp, UCScreenMockUp, conceptScreenMockUp, roadmapScreenMockUp, featureMatrixExplorerMockUp, ruleMatrixExplorerMockUp];
            $("#explorer[typeid=0],#explorer[typeid=1],#explorer[typeid=2],#explorer[typeid=3],#explorer[typeid=4],#explorer[typeid=5]").find(".sublist li").click((e => { this.currentViewType = 0; this.DisplayScreen(screenMockUps[this.currentExplorerType], this); return false }));
            $("#explorer[typeid=6] .sublist li[linkid=998]").click((e => { this.DisplayScreen(screenMockUps[this.currentExplorerType], this); return false }));
            $("#explorer[typeid=6] .sublist li[linkid=999]").click((e => { this.DisplayScreen(screenMockUps[this.currentExplorerType + 1], this); return false }));
        }
        //TODO show current project if already selected 
    }
    SetCurrentExplorer(explorerVM: ExplorerViewModel){
        switch (this.currentExplorerType) {
            case ExplorerEnumType.Home:
                return this.currentProjectExplorerVM = explorerVM; break;
            case ExplorerEnumType.Market:
                return this.currentProjectVM.MarketExplorerVM = explorerVM; break;
            case ExplorerEnumType.Persona:
                return this.currentProjectVM.PersonaExplorerVM = explorerVM; break;
            case ExplorerEnumType.Domain:
                return this.currentProjectVM.DomainExplorerVM = explorerVM; break;
            case ExplorerEnumType.Requirement:
                return this.currentProjectVM.RequirementExplorerVM = explorerVM; break;
            case ExplorerEnumType.Roadmap:
                return this.currentProjectVM.RoadMapExplorerVM = explorerVM; break;
            case ExplorerEnumType.Matrix:
                return this.currentSessionVM.MatrixExplorerVM = explorerVM; break;
        }
    }
    public DisplayScreenAsync(ressourceId: number) {
        var context = this;
        if (this.currentExplorerType == ExplorerEnumType.Home || this.currentExplorerType == ExplorerEnumType.Matrix){
            if (context.currentProjectVMIsFresh && this.currentExplorerType == ExplorerEnumType.Matrix){
                this.DisplayScreenCache(this.currentExplorerType, ressourceId);
            }else{
                this.helper.AsyncPendingID = this.currentExplorerType; this.helper.AsyncPendingJoinID = ressourceId.toString();
                this.helper.AjaxCall(LoadProjectViewEndpoint, JSON.stringify(
                    {ProjectId: ressourceId, ItemId: 0, SearchViewOption:"", ViewType: ViewEnumType.Project}), 
                    context.LoadProject, context);
            }
        }else{
            this.helper.AjaxCall(LoadProjectViewEndpoint, JSON.stringify(
                {ProjectId: context.ProjectId(), ItemId: ressourceId, SearchViewOption:"", ViewType: context.GetViewTypeFor(this.currentExplorerType)}), 
                context.DisplayScreen, context);
        }
    }
    public DisplayScreenCache(explorerType: number, ressourceId: number) {
        var screenCache = [this.currentProjectVM.DashboardScreenVM, null, null, null, null, null, this.currentProjectVM.FeatureMatrixVM, this.currentProjectVM.RuleMatrixrVM];
        var cacheindex = this.currentExplorerType;
        if (this.currentExplorerType == ExplorerEnumType.Matrix && ressourceId == 999) cacheindex += 1;
        if (screenCache[this.currentExplorerType] != null){
            this.DisplayScreen(screenCache[cacheindex], this);
        }else{
            this.DisplayScreen(screenCache[0], this);//default: go home
        }
    }
    public LoadProject(response, context: Iteration0) {
        if (response.Project != undefined) {
            context.currentProjectVM = response; //project cache reloaded
            context.currentProjectVMIsFresh = true;
            $('#project-title').text(context.currentProjectVM.Project.Label);
            context.DisplayMenu();
            context.DisplayScreenCache(parseInt(context.helper.AsyncPendingID), parseInt(context.helper.AsyncPendingJoinID));
            context.DisplayExplorer(context.currentExplorerType);
        }
        else {
            context.ShowAlert(response);
        }
    }
    public ProjectId() {return parseInt(this.currentProjectVM.Project.KeyValue);} 
    public CurrentScreenExplorerContexts(): Array<ItemViewModel>{
        var result = [];
        var pools = Array<ItemViewModelList>();
        switch (this.currentScreenVM.ExplorerTypeId) {
            case ExplorerEnumType.Market:
                pools = this.currentProjectVM.MarketExplorerVM.MenuLists; break;
            case ExplorerEnumType.Persona:
                pools = this.currentProjectVM.PersonaExplorerVM.MenuLists; break;
            case ExplorerEnumType.Domain:
                pools = this.currentProjectVM.DomainExplorerVM.MenuLists; break;
            case ExplorerEnumType.Requirement:
                pools = this.currentProjectVM.RequirementExplorerVM.MenuLists; break;
            case ExplorerEnumType.Roadmap:
                pools = this.currentProjectVM.RoadMapExplorerVM.MenuLists; break;
        }
        if (pools.length> 0) jQuery.each(pools, function () { result.push(this.Pool); });
        return result;
    }     
    public DisplayScreen(response, context: Iteration0) {
        if (response.CardLists != undefined) {
            context.currentScreenVM = response;
            $("#explorer .sublist-item").removeClass("loading").removeClass("selected");
            $("#explorer .sublist-item[linkid='" + context.currentScreenVM.Ressource.RessourceId + "']").addClass("selected");
            
            var screens = {
                '0': function () {
                    return new DashboardScreenUIControl(context.currentScreenVM, context);
                },
                '1': function () {
                    return new CompetitorScreenUIControl(context.currentScreenVM, context);
                },
                '2': function () {
                    return new PersonaScreenUIControl(context.currentScreenVM, context);
                },
                '3': function () {
                    return new UseCaseScreenUIControl(context.currentScreenVM, context);
                },
                '4': function () {
                    return new ConceptScreenUIControl(context.currentScreenVM, context);
                },
                '5': function () {
                    return new ProductVersionScreenUIControl(context.currentScreenVM, context);
                },
                '6': function () {
                    return new MatrixUIControl(context.currentScreenVM, context);
                },
                '7': function () {
                    return new SearchResultUIControl(context.currentScreenVM, context);
                },
                '9': function () {
                    return new UserAdminScreenUIControl(context.currentScreenVM, context);
                }
            };           
            context.currentViewType = 0;
            var currentScreen = screens[context.currentScreenVM.ExplorerTypeId]();
            currentScreen.Show();
        }
        else {
            context.ShowAlert(response);
        }
    }
    AttachDefaultEvents() {
        var context = this;
        $("#app-manager-menu li[linkid=4]").click(function(e) {   
            if (context.testMode){  
                context.DisplayScreen(adminScreenMockUp, context);
            }else{
                context.currentViewType = 0;
                context.helper.AjaxCall(LoadAdminViewEndpoint, JSON.stringify(
                    {ViewType: ViewEnumType.UserAdmin}), 
                    context.DisplayScreen, context);
            }         
            return false;
        });
        $("#app-manager-menu li[linkid=3]").click(function(e) {              
            var currentScreen = new UserPreferenceUIControl(new ScreenViewModel(ExplorerEnumType.MenuUserPrefs), context);
            //currentScreen.DisplayBody(context.currentSessionVM.PreferenceJSON, false);
            currentScreen.Show();
            return false;
        });
        $("#app-manager-menu li[linkid=2]").click(function(e) { 
            var formHtml = ""; var defaultProjectId = null;
            if (context.currentProjectVM != undefined) defaultProjectId = context.currentProjectVM.Project.KeyValue;
            formHtml += context.helper.BuildHtmlForField(1, "formSearchQuery", "Search", "Search for..", "", null);
            formHtml += context.helper.BuildHtmlForField(3, "formProject", "Project", "Select Project", defaultProjectId, context.currentSessionVM.Projects);
            context.ShowCustomMessage("<div id='versionform' class='form-group'>" + formHtml + "</div>", 
                                        "Search Project", context.OnSearchClick, null, context, null);
            return false;
        });
        $("#app-manager-menu li[linkid=1]").click(function(e) {            
            context.ShowAlert(AboutTemplate, "About Iteration0");
            //style ?
            return false;
        });
        $("#app-manager-menu li[linkid=0]").click(function(e) {  
            window.location.replace(location.protocol + "//" + window.location.host  + "/Application/Logout");  
            return false;
        });
    }    
    OnSearchClick(context: Iteration0) { 
        if (context.testMode){  
            context.DisplaySearch(SearchMockUp, context);
        }else{
            context.DisplaySearchAsync($.trim($("#formSearchQuery").val()), $("#formProject").val());
        }
    }
    public DisplaySearchAsync(query: string, projectId: number) {
        var isOK = true;
        if ((this.helper.FieldIsBlank(query))) { isOK = false; this.app.ShowAlert("Search query is mandatory !"); }
        if (isOK) {
            this.helper.AjaxCall(LoadProjectViewEndpoint, JSON.stringify(
                {ProjectId: projectId, ItemId: 0, SearchViewOption:query, ViewType: ViewEnumType.Search}), 
                this.DisplaySearch, this);
        }
    }
    public DisplaySearch(response, context: Iteration0) {
        if (response.Items != undefined) {   
            context.HideUnfreezeControls();
            var currentScreen = new SearchResultUIControl(new ScreenViewModel(ExplorerEnumType.MenuSearch), context);
            currentScreen.DisplayTableView(response);
            currentScreen.Show();
        }
        else {
            context.ShowAlert(response);
        }
    }
    public ShowFrozenScreen() {
        if (this.backScreen == null) {
            this.backScreen = $('#frozen-screen-layer');
        }
        this.backScreen.css("width", "100%"); this.backScreen.css("height", '100%');
        this.backScreen.show();
    }
    public HideFrozenScreen() {
        if (this.backScreen != null)
            this.backScreen.hide();
    }
    public HideUnfreezeControls() {
        $('#app_pop_up1,#app_pop_up98,#app_pop_up99').remove();
        this.HideFrozenScreen();
    }
    public ShowAlert(message: string, title: string = "Alert") {
        new PopUpUIControl(title, "<h3>"+ message + "</h3>", 99, this).ShowOk();
    }
    public ShowCustomMessage(html: string, title: string, okDelegate, cancelDelegate, okContext: any, cancelContext: any) {
        new PopUpUIControl(title, html, 98, this).ShowOkCancel(okDelegate, cancelDelegate, okContext, cancelContext);
    }
    public ShowConfirmationMessage(message: string, title: string, okDelegate, cancelDelegate) {
        this.ShowCustomMessage(message, title, okDelegate, cancelDelegate, null, null)
    }
}
}
