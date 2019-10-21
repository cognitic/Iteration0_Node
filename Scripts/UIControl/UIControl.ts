/// <reference path="../Lib/jquery.d.ts" />

//
//      Parent Class for UI Controls
//
namespace I0 {
    export class UIControl {
    app: Iteration0;
    type: string;
    wrapper: JQuery; contentWrapper: JQuery; wrapperID: string;
    helper: UIHelper;
    public ProjectId():number{return parseInt(this.app.currentProjectVM.Project.KeyValue);}

    constructor(ControlType: string, htmlWrapperID: string, appContext: Iteration0) {
        this.type = ControlType;
        this.wrapperID = htmlWrapperID;
        this.wrapper = $(this.wrapperID);
        this.app = appContext;
        this.helper = new UIHelper(appContext);
    }
    Show() { }
    Hide() { } 
    
    GetViewTypeFor(type : ExplorerEnumType) : ViewEnumType {
        switch (type) {
            case ExplorerEnumType.Market:
                return ViewEnumType.Competitor; break;
            case ExplorerEnumType.Persona:
                return ViewEnumType.Persona; break;
            case ExplorerEnumType.Domain:
                return ViewEnumType.Concept; break;
            case ExplorerEnumType.Requirement:
                return ViewEnumType.UseCase; break;
            case ExplorerEnumType.Roadmap:
                return ViewEnumType.Version; break;
        }
    }   
}
}