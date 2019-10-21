namespace I0 {
    export class PopUpUIControl extends UIControl {
        zIndex: number;
        BottomWrapper() : JQuery {
            return $("#app_pop_up" + this.zIndex.toString() + " .buttons");
        }
        OKButton() : JQuery {
            return $("#app_pop_up" + this.zIndex.toString() + " .okbtn");
        }
        CancelButton() : JQuery {
            return $("#app_pop_up" + this.zIndex.toString() + " .cancelbtn");
        }
        constructor(title: string, content: string, zIndex: number, appRef : Iteration0) {
            super("PopUpUIControl", "#frozen-screen-layer", appRef);
            this.zIndex = zIndex; this.wrapperID = '#app_pop_up' + zIndex.toString(); this.app = appRef;

            var popupHtml = popUpTemplate.replace(/{{templateZIndex}}/g,this.zIndex.toString()).replace(/{{templatetitle}}/g,title);
            popupHtml = popupHtml.replace(/{{templatecontent}}/g, content);
            if ($(this.wrapperID).length > 0) $(this.wrapperID).remove();
            $("#frozen-screen-layer").append(popupHtml);
            this.wrapper = $(this.wrapperID); this.wrapper.click(function (e) { e.stopPropagation(); }); 
            $("#app_pop_up" + this.zIndex.toString() + " .close-button").click((e => { this.Hide(); return false }));
        }
        Show() {
            this.BottomWrapper().hide(); this.Appear();
        }
        ShowOk() {
            this.BottomWrapper().html(OKButtonTemplate);
            this.OKButton().click((e => { this.Hide(); return false }));
            this.Appear();
        }
        ShowOkCancel(okDelegate, cancelDelegate, okContext: any, cancelContext: any) {
            if (okContext == null) okContext = this; if (cancelContext == null) cancelContext = this;
            this.BottomWrapper().html(OKButtonTemplate + CancelButtonTemplate);
            this.OKButton().click((e => { okDelegate(okContext); return false }));
            if (cancelDelegate == null) {
                this.CancelButton().click((e => { this.Hide(); return false }));
            } else {
                this.CancelButton().click((e => { cancelDelegate(cancelContext); return false }));
            }
            this.Appear();
        };
        Hide() {
            this.wrapper.hide();
            if ($('.popup-message').length == 1) this.app.HideFrozenScreen();
            this.wrapper.remove();
        }
        Appear() {
            this.app.ShowFrozenScreen();
            this.wrapper.show();
        }
    } 
}