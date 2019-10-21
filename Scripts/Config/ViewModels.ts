namespace I0 {
export class UserSessionViewModel{
    User: ItemViewModel;
    Role: ItemViewModel;
    CustomThemecolor1: string;
    CustomThemecolor2: string;
    defaultProjectId: number;
    Token: string;
    Projects: Array<ItemViewModel>; 
    MatrixExplorerVM: ExplorerViewModel;
}
export class ExplorerViewModel{
    MenuEnumType: number;
    MenuLists: Array<ItemViewModelList>;
    constructor(MenuType: number) {
        this.MenuEnumType = MenuType;
        this.MenuLists = new Array<ItemViewModelList>();
    }
}
export class ProjectViewModel{
    Project: ItemViewModel;
    DashboardScreenVM: ScreenViewModel;
    ScopeProfiles: Array<ItemViewModel>;
    HistoryMarkerList: ItemViewModelList;
    MarketExplorerVM: ExplorerViewModel;
    PersonaExplorerVM: ExplorerViewModel;
    RequirementExplorerVM: ExplorerViewModel;
    DomainExplorerVM: ExplorerViewModel;
    RoadMapExplorerVM: ExplorerViewModel;
    FeatureMatrixVM: ScreenViewModel;
    RuleMatrixrVM: ScreenViewModel;
    constructor() {
        this.HistoryMarkerList = new ItemViewModelList();
    }     
}
export class ScreenViewModel{
    Ressource: RessourceViewModel;
    ExplorerTypeId: number;
    CardLists: Array<ItemViewModelList>;
    CardOptionLists: Array<ItemViewModelList>;
    HistoryLogList: ItemViewModelList;
    DownloadList: ItemViewModelList;
    constructor(explorerType: number) {
        this.ExplorerTypeId = explorerType;
        this.CardLists = new Array<ItemViewModelList>();
        this.CardOptionLists = new Array<ItemViewModelList>();
        this.HistoryLogList = new ItemViewModelList();
        this.DownloadList = new ItemViewModelList();
    }     
}
export class DocumentViewModel{
    Title: string;
    SubTitle: string;
    FileName: string;
    ContentLists: Array<ItemViewModelList>;
}
export class ItemViewModel {
    Type: number;
    KeyValue: string;
    ParentKeyValue: string;
    Label: string;
    Summary: string;
    Code: string;
    IsSelected: boolean;
    Score: number;
    ObjectiveScore: number;
    SortOrder: number;
    ScopeLists: Array<Array<string>>;
    constructor(Name: string, Id: string, ObjectiveScore?: number, CurrentScore?: number, CodeId?: string) {
        this.Label = Name;
        this.KeyValue = Id;
        this.Code = CodeId;
        this.ObjectiveScore = ObjectiveScore;
        this.Score = CurrentScore;
        this.ScopeLists = new Array<Array<string>>();
    }     
}
export class ItemViewModelList {
    Pool: ItemViewModel;
    PoolDef: RessourceViewModel;
    Items: Array<ItemViewModel>;
    IsSelected: boolean;
    constructor() {
        this.Items = [];
    }
}
export class RessourceViewModel {
    RessourceEnumType: number;
    ManagerId: number;
    RessourceId: number;
    Name: string;
    Definition: string;
    Detail1: string;
    Detail2: string;
    Detail3: string;
    DateDetail1: Array<number>;
    DateDetail2: Array<number>;
    Priority: number;
    ScaleOrder: number;
    StepOrder: number;
    SortOrder: number;
    DependencyList: Array<AssociationViewModel>;
    StatusEnumType: number;
    ConfigEnumType: number;
    ExternalCode: string;
    ScopeLists: Array<Array<string>>;
    constructor(Name: string, Id: number, Type?: number, SubType?: number) {
        this.Name = Name;
        this.RessourceId = Id;
        this.RessourceEnumType = Type;
        this.ConfigEnumType = SubType;
        this.DependencyList = new Array<AssociationViewModel>();
        this.ScopeLists = new Array<Array<string>>();
        this.ScopeLists.push([]);
        this.ScopeLists.push([]);
        this.ScopeLists.push([]);
    }     
}
export class AssociationViewModel {
    AssociationId: number;
    AssociationEnumType: number;
    ParentID: number;
    ParentName: string;
    ChildID: number;
    //ParentName: string;
    ChildName: string;
    ContractResponsibility: string;
    ContractSuccessFactor: string;
    ContractSuccessExample: string;
}
}