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
    var ExplorerUIControl = /** @class */ (function (_super) {
        __extends(ExplorerUIControl, _super);
        function ExplorerUIControl(explorerVM) {
            var _this = _super.call(this, "ExplorerUIControl", "#explorer") || this;
            _this.VM = explorerVM;
            _this.DisplayPools();
            return _this;
        }
        ExplorerUIControl.prototype.DisplayPools = function () {
            var _this = this;
            var explorerTemplate = "\n            <div class=\"sidenav-list-header-grid\">\n            <div class=\"sidenav-top-context\">{{explorername}}xxx</div> \n              <div class=\"toolbar\">\n                <div class=\"clickable-icon\"><span class=\"fas fa-plus-square\"></span></div>\n              </div>\n            </div>\n            <ul class=\"sidenav-list\">\n            </ul>";
            $("#explorer").html(explorerTemplate.replace("{{explorername}}", I0.ContextPluralLabels[this.app.currentExplorerType]));
            var poolTemplate = "\n            <li>\n              <div class=\"sidenav-list-header-grid\">\n                <div class=\"sidenav-list-header\">{{templatename}}</div> \n              <div class=\"toolbar\">\n                <div {{templateid}} class=\"clickable-icon\"><span class=\"fas fa-plus-square\"></span></div>\n                <div {{templateid}} class=\"clickable-icon\"><span class=\"fas fa-edit\"></span></div>\n                <div {{templateid}} class=\"clickable-icon\"><span class=\"fas fa-trash-alt\"></span></div>\n              </div>\n          </div>\n            <ul {{templateid}} class=\"sublist h\">\n            </ul>\n          </li>";
            var result = "";
            var context = this;
            jQuery.each(this.VM.MenuLists, function () {
                result += poolTemplate.replace("{{templatename}}", this.Pool.Label).replace(/{{templateid}}/g, "poolid='" + this.Pool.KeyValue + "'");
            });
            $("#explorer .sidenav-list").html(result);
            jQuery.each(this.VM.MenuLists, function () {
                var sublistHtml = "";
                jQuery.each(this.Items, function () {
                    sublistHtml += "<li linkid='" + this.KeyValue + "' class='sublist-item'>" + this.Label + "</li>";
                });
                $("#explorer .sublist[poolid='" + this.Pool.KeyValue + "']").html(sublistHtml);
            });
            // $("#edit-definition-link").click((e => { this.ShowEditDefinitionForm(); return false }));
            // Edit() => Synchronize, DisplayExplorer()
            $(".screen-link").click((function (e) { _this.app.DisplayScreenAsync(parseInt($(e.target).attr('linkid'))); return false; }));
            $(".sidenav-list-header").click(function (e) {
                $(e.target).toggleClass("open");
                $(e.target).parent().next().toggleClass("h");
            });
        };
        return ExplorerUIControl;
    }(I0.UIControl));
    I0.ExplorerUIControl = ExplorerUIControl;
})(I0 || (I0 = {}));
