/// <reference path=".\..\Libs\jquery.d.ts" />
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
//
//      Parent Class for Screens
//
var I0;
(function (I0) {
    var ScreenUIControl = /** @class */ (function (_super) {
        __extends(ScreenUIControl, _super);
        function ScreenUIControl(ControlType, htmlWrapperID) {
            var _this = _super.call(this, ControlType, htmlWrapperID) || this;
            _this.displayOptions = { viewtabs: false, header: false, headertitle: false, mainmenu: false };
            return _this;
        }
        ScreenUIControl.prototype.DisplayHeader = function (HeaderCards) {
            $("#top-context-expander-button").click(function (e) {
                $(e.target).toggleClass("open");
                if ($(e.target).hasClass("open")) {
                    $(e.target).child().addClass('fa-caret-square-up').removeClass('fa-caret-square-down');
                    $(".main").removeClass('main-top-collapsed');
                }
                else {
                    $(e.target).child().addClass('fa-caret-square-down').removeClass('fa-caret-square-up');
                    $(".main").addClass('main-top-collapsed');
                }
            });
        };
        ScreenUIControl.prototype.DisplayBoardView = function (CardLists) {
            var cardTemplate = "";
        };
        ScreenUIControl.prototype.DisplayHistoryView = function (HistoryLogList) {
            var logTemplate = "";
        };
        ScreenUIControl.prototype.DisplayDownloadView = function (DownloadList) {
            var downloadTemplate = "";
        };
        ScreenUIControl.prototype.Hide = function () {
            $("#main-view-tab").addClass("h");
            //hide all : displayOptions viewtabs headermenu mainmenu header  main
        };
        ScreenUIControl.prototype.Show = function () {
            this.Hide();
            if (this.displayOptions.viewtabs) {
                $("#main-view-tab").removeClass("h");
                //this.app.currentViewType
                //viewtabs highlight
                //if board..
                //show main 
                //else..
                //$(".Rule-view-tab").click((e => { this.ShowView(parseInt($(e.target).attr('viewIndex'))); return false }));
            }
            else {
                //show main 
            }
            //show viewtabs headermenu mainmenu header 
        };
        ScreenUIControl.prototype.Save = function () {
        };
        return ScreenUIControl;
    }(I0.UIControl));
    I0.ScreenUIControl = ScreenUIControl;
})(I0 || (I0 = {}));
