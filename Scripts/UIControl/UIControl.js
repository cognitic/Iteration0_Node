/// <reference path=".\..\Libs\jquery.d.ts" />
//
//      Parent Class for UI Controls
//
var I0;
(function (I0) {
    var UIControl = /** @class */ (function () {
        function UIControl(ControlType, htmlWrapperID) {
            this.type = ControlType;
            this.wrapperID = htmlWrapperID;
            this.wrapper = $(this.wrapperID);
            this.helper = new I0.UIHelpers();
        }
        UIControl.prototype.Show = function () { };
        UIControl.prototype.Hide = function () { };
        return UIControl;
    }());
    I0.UIControl = UIControl;
})(I0 || (I0 = {}));
