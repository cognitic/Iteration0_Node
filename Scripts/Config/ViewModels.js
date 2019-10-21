var I0;
(function (I0) {
    var UserRoleViewModel = /** @class */ (function () {
        function UserRoleViewModel() {
        }
        return UserRoleViewModel;
    }());
    I0.UserRoleViewModel = UserRoleViewModel;
    var UserSessionViewModel = /** @class */ (function () {
        function UserSessionViewModel() {
        }
        return UserSessionViewModel;
    }());
    I0.UserSessionViewModel = UserSessionViewModel;
    var ExplorerViewModel = /** @class */ (function () {
        function ExplorerViewModel(MenuType) {
            this.MenuEnumType = MenuType;
            this.MenuLists = new Array();
        }
        return ExplorerViewModel;
    }());
    I0.ExplorerViewModel = ExplorerViewModel;
    var ProjectViewModel = /** @class */ (function () {
        function ProjectViewModel() {
            this.MatrixExplorerVM = new ExplorerViewModel(4);
            this.HistoryMarkerList = new ItemViewModelList();
        }
        return ProjectViewModel;
    }());
    I0.ProjectViewModel = ProjectViewModel;
    var ScreenViewModel = /** @class */ (function () {
        function ScreenViewModel() {
            this.CardLists = new Array();
            this.CardOptionLists = new Array();
            this.HistoryLogList = new ItemViewModelList();
            this.DownloadList = new Array();
        }
        return ScreenViewModel;
    }());
    I0.ScreenViewModel = ScreenViewModel;
    var MatrixViewModel = /** @class */ (function () {
        function MatrixViewModel() {
        }
        return MatrixViewModel;
    }());
    I0.MatrixViewModel = MatrixViewModel;
    var UserAdminScreenViewModel = /** @class */ (function () {
        function UserAdminScreenViewModel() {
        }
        return UserAdminScreenViewModel;
    }());
    I0.UserAdminScreenViewModel = UserAdminScreenViewModel;
    var DocumentViewModel = /** @class */ (function () {
        function DocumentViewModel() {
        }
        return DocumentViewModel;
    }());
    I0.DocumentViewModel = DocumentViewModel;
    var ItemViewModel = /** @class */ (function () {
        function ItemViewModel(Name, Id, ObjectiveScore, CurrentScore) {
            this.Label = Name;
            this.KeyValue = Id;
            this.Score = CurrentScore;
            this.ObjectiveScore = ObjectiveScore;
        }
        return ItemViewModel;
    }());
    I0.ItemViewModel = ItemViewModel;
    var ItemViewModelList = /** @class */ (function () {
        function ItemViewModelList() {
            this.Items = [];
        }
        return ItemViewModelList;
    }());
    I0.ItemViewModelList = ItemViewModelList;
    var ScopeViewModel = /** @class */ (function () {
        function ScopeViewModel() {
            this.Items = [];
        }
        return ScopeViewModel;
    }());
    I0.ScopeViewModel = ScopeViewModel;
    var DefinitionViewModel = /** @class */ (function () {
        function DefinitionViewModel(Name, Id, Type, SubType, Status, StatusScore) {
            this.Name = Name;
            this.RessourceID = Id;
            this.RessourceEnumType = Type;
            this.PreConfigEnumType = SubType;
            this.StatusEnumType = Status;
            this.StatusScore = StatusScore;
        }
        return DefinitionViewModel;
    }());
    I0.DefinitionViewModel = DefinitionViewModel;
    var DefinitionViewModelList = /** @class */ (function () {
        function DefinitionViewModelList() {
            this.Definitions = [];
        }
        return DefinitionViewModelList;
    }());
    I0.DefinitionViewModelList = DefinitionViewModelList;
    var AssociationViewModel = /** @class */ (function () {
        function AssociationViewModel() {
        }
        return AssociationViewModel;
    }());
    I0.AssociationViewModel = AssociationViewModel;
})(I0 || (I0 = {}));
