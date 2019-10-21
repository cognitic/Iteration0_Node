/// <reference path="./Libs/jquery.d.ts" />
/// <reference path='./Config/Enums.ts'/>
/// <reference path='./Config/UITemplates.ts'/>
/// <reference path='./Config/ViewModels.ts'/>
/// <reference path='./Config/Labels.ts'/>
/// <reference path='./Exports/PDFGenerator.ts'/>
/// <reference path='./UIControls/UIControl.ts'/>
/// <reference path='./UIControls/PopUpUIControl.ts'/>
/// <reference path='./UIControls/ExplorerUIControl.ts'/>
/// <reference path='./UIControls/MatrixUIControl.ts'/>
/// <reference path='./UIControls/ScreenUIControl.ts'/>
/// <reference path='./UIControls/UseCaseScreenUIControl.ts'/>
/// <reference path='./UIControls/ConceptScreenUIControl.ts'/>
/// <reference path='./UIControls/ProductVersionScreenUIControl.ts'/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var I0;
(function (I0) {
    var Iteration0 = /** @class */ (function (_super) {
        __extends(Iteration0, _super);
        function Iteration0(appSettings) {
            var _this = _super.call(this, "App", "body") || this;
            _this.testMode = true;
            _this.localMode = false;
            _this.settings = appSettings;
            if (_this.testMode) {
                _this.currentSessionVM = I0.sessionMockUp;
                _this.currentConfigExplorerVM = I0.configExplorerMockUp;
                _this.currentProjectVM = I0.projectMockUp;
                _this.currentScreenVM = _this.currentProjectVM.DashboardScreenVM;
                _this.currentExplorerType = 0;
                _this.currentViewType = 0;
                // this.currentScreenVM = this.currentProjectVM.RequirementExplorerVM; this.currentExplorerType = 1;  this.currentViewType = 0;
                // this.currentScreenVM = this.currentProjectVM.DomainExplorerVM; this.currentExplorerType = 2;  this.currentViewType = 0;
                // this.currentScreenVM = this.currentProjectVM.RoadMapExplorerVM; this.currentExplorerType = 3;  this.currentViewType = 0;
                // this.currentScreenVM = this.currentProjectVM.MatrixExplorerVM; this.currentExplorerType = 4;  this.currentViewType = 0;
                _this.DisplayMenu();
                _this.DisplayExplorer(_this.currentExplorerType);
                _this.LoadProject(_this.currentProjectVM, _this);
                //this.DisplayScreen(this.currentScreenVM, this);
            }
            else {
                _this.LoadAppSettings();
            }
            return _this;
        }
        Iteration0.prototype.LoadAppSettings = function () {
            this.currentConfigExplorerVM = new I0.ExplorerViewModel(0);
            if (this.settings != null) {
                this.localMode = (this.settings.localMode == "yes");
                if (this.localMode) {
                    this.LoadLocalConfiguration();
                    if (this.settings.servers.length > 0) {
                        this.currentSessionVM = null;
                        this.currentServerSetting = null;
                        jQuery.each(this.settings.servers, function () {
                            if (this.default == "yes") {
                                this.currentServerSetting = this;
                                return false;
                            }
                        });
                        if (this.currentServerSetting != null)
                            this.LoadUserSessionAsync(this.currentServerSetting);
                    }
                    else { //local only
                        this.DisplayMenu();
                    }
                }
            }
            else {
                this.ShowAlert("Application Settings are missing !");
            }
        };
        Iteration0.prototype.LoadLocalConfiguration = function () {
            if (this.localMode) {
                this.currentConfigExplorerVM.MenuLists.push(new I0.ItemViewModelList());
                this.currentConfigExplorerVM.MenuLists[0].Pool = new I0.ItemViewModel("Local Computer", "0");
                this.currentConfigExplorerVM.MenuLists[0].Items = new Array();
                //todo load local json projects
            }
        };
        Iteration0.prototype.LoadUserSessionAsync = function (serverSetting) {
            var context = this;
            if (this.localMode) {
                //Work in progress ...
                //this.helper.AjaxCall(serverSetting.url + UserLoadSessionEndpoint, JSON.stringify({ UserId: serverSetting.login, Password: serverSetting.password}), context.LoadUserSession, context);
            }
            else { //We ask current website session
                this.helper.AjaxCall(I0.UserLoadSessionEndpoint, JSON.stringify({ UserId: null, Password: null }), context.LoadUserSession, context);
            }
        };
        Iteration0.prototype.LoadUserSession = function (response, context) {
            if (response.Role != undefined) {
                this.currentSessionVM = response;
                this.currentConfigExplorerVM.MenuLists.push(new I0.ItemViewModelList());
                this.currentConfigExplorerVM.MenuLists[0].Pool = new I0.ItemViewModel(this.currentServerSetting.name, "0");
                this.currentConfigExplorerVM.MenuLists[0].Items = new Array();
                jQuery.each(this.currentSessionVM.Projects, function () {
                    context.currentConfigExplorerVM.MenuLists[0].Items.push(new I0.ItemViewModel(this.Name, this.KeyValue));
                });
                this.DisplayMenu();
                this.DisplayExplorer(I0.MenuEnumType.Home); //todo URL mapping
            }
            else {
                this.ShowAlert("User Session not found !");
            }
        };
        Iteration0.prototype.DisplayMenu = function () {
            var _this = this;
            $("#app-menu li").addClass("h");
            if (this.currentProjectVM != null) {
                $("#app-menu li").removeClass("h");
            }
            else {
                $("#app-menu li[linkid=0]").removeClass("h");
            }
            if (this.currentSessionVM != null) {
                //TODO show global menu / user right
            }
            $("#app-menu li").click((function (e) { _this.DisplayExplorer(parseInt($(e.target).attr('linkid'))); return false; }));
        };
        Iteration0.prototype.DisplayExplorer = function (explorerType) {
            this.currentExplorerType = explorerType;
            var context = this;
            var explorers = {
                '0': function () {
                    return new I0.ExplorerUIControl(context.currentConfigExplorerVM);
                },
                '1': function () {
                    return new I0.ExplorerUIControl(context.currentProjectVM.RequirementExplorerVM);
                },
                '2': function () {
                    return new I0.ExplorerUIControl(context.currentProjectVM.DomainExplorerVM);
                },
                '3': function () {
                    return new I0.ExplorerUIControl(context.currentProjectVM.RoadMapExplorerVM);
                },
                '4': function () {
                    return new I0.ExplorerUIControl(context.currentProjectVM.MatrixExplorerVM);
                }
            };
            this.currentExplorer = explorers[explorerType.toString()]();
            this.currentExplorer.Show();
        };
        Iteration0.prototype.DisplayScreenAsync = function (ressourceId) {
            var context = this;
            if (this.currentExplorerType == I0.MenuEnumType.Home) {
                this.helper.AjaxCall(I0.ProjectLoadEndpoint, JSON.stringify({ ProjectId: 0 }), context.LoadProject, context);
            }
            else {
                this.helper.AjaxCall(I0.ProjectLoadScreenEndpoint, JSON.stringify({ ProjectId: 0, ScreenType: this.currentExplorerType, RessourceId: ressourceId }), context.DisplayScreen, context);
            }
        };
        Iteration0.prototype.LoadProject = function (response, context) {
            if (response.Project != undefined) {
                context.currentProjectVM = response;
                $('#project-title').html(context.currentProjectVM.Project.Label);
                context.currentScreenVM = context.currentProjectVM.DashboardScreenVM;
                context.DisplayScreen(context.currentScreenVM, context);
            }
            else {
                context.ShowAlert(response);
            }
        };
        Iteration0.prototype.DisplayScreen = function (response, context) {
            if (response.CardLists != undefined) {
                context.currentScreenVM = response;
                var screens = {
                    '0': function () {
                        return new I0.DashboardScreenUIControl(context.currentScreenVM);
                    },
                    '1': function () {
                        return new I0.UseCaseScreenUIControl(context.currentScreenVM);
                    },
                    '2': function () {
                        return new I0.ConceptScreenUIControl(context.currentScreenVM);
                    },
                    '3': function () {
                        return new I0.ProductVersionScreenUIControl(context.currentScreenVM);
                    },
                    '4': function () {
                        return new I0.MatrixUIControl(context.currentScreenVM);
                    }
                };
                var currentScreen = screens[context.currentExplorerType]();
                currentScreen.Show();
            }
            else {
                context.ShowAlert(response);
            }
        };
        Iteration0.prototype.ShowFrozenScreen = function () {
            if (this.backScreen == null) {
                this.backScreen = $('#frozen-screen-layer');
            }
            this.backScreen.css("width", "100%");
            this.backScreen.css("height", '100%');
            this.backScreen.show();
        };
        Iteration0.prototype.HideFrozenScreen = function () {
            if (this.backScreen != null)
                this.backScreen.hide();
        };
        Iteration0.prototype.HideUnfreezeControls = function () {
            $('#app_pop_up1,#app_pop_up98,#app_pop_up99').hide();
            this.HideFrozenScreen();
        };
        Iteration0.prototype.ShowAlert = function (message) {
            new I0.PopUpUIControl("Alert", message, 99, this).ShowOk();
        };
        Iteration0.prototype.ShowCustomMessage = function (html, title, okDelegate, cancelDelegate, okContext, cancelContext) {
            new I0.PopUpUIControl(title, html, 98, this).ShowOkCancel(okDelegate, cancelDelegate, okContext, cancelContext);
        };
        Iteration0.prototype.ShowConfirmationMessage = function (message, title, okDelegate, cancelDelegate) {
            this.ShowCustomMessage(message, title, okDelegate, cancelDelegate, null, null);
        };
        return Iteration0;
    }(I0.UIControl));
    I0.Iteration0 = Iteration0;
})(I0 || (I0 = {}));
