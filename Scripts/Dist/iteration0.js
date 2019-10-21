var I0;
(function (I0) {
    var ExplorerEnumType;
    (function (ExplorerEnumType) {
        ExplorerEnumType[ExplorerEnumType["Home"] = 0] = "Home";
        ExplorerEnumType[ExplorerEnumType["Market"] = 1] = "Market";
        ExplorerEnumType[ExplorerEnumType["Persona"] = 2] = "Persona";
        ExplorerEnumType[ExplorerEnumType["Requirement"] = 3] = "Requirement";
        ExplorerEnumType[ExplorerEnumType["Domain"] = 4] = "Domain";
        ExplorerEnumType[ExplorerEnumType["Roadmap"] = 5] = "Roadmap";
        ExplorerEnumType[ExplorerEnumType["Matrix"] = 6] = "Matrix";
        ExplorerEnumType[ExplorerEnumType["MenuSearch"] = 7] = "MenuSearch";
        ExplorerEnumType[ExplorerEnumType["MenuUserPrefs"] = 8] = "MenuUserPrefs";
        ExplorerEnumType[ExplorerEnumType["MenuUserAdmin"] = 9] = "MenuUserAdmin";
    })(ExplorerEnumType = I0.ExplorerEnumType || (I0.ExplorerEnumType = {}));
    ;
    var ScreenViewEnumType;
    (function (ScreenViewEnumType) {
        ScreenViewEnumType[ScreenViewEnumType["Board"] = 0] = "Board";
        ScreenViewEnumType[ScreenViewEnumType["Table"] = 1] = "Table";
        ScreenViewEnumType[ScreenViewEnumType["Downloads"] = 2] = "Downloads";
        ScreenViewEnumType[ScreenViewEnumType["Matrix"] = 3] = "Matrix";
    })(ScreenViewEnumType = I0.ScreenViewEnumType || (I0.ScreenViewEnumType = {}));
    ;
    var ContextEnumType;
    (function (ContextEnumType) {
        ContextEnumType[ContextEnumType["unknown"] = 0] = "unknown";
        ContextEnumType[ContextEnumType["Application"] = 1] = "Application";
        ContextEnumType[ContextEnumType["FeatureProfile"] = 2] = "FeatureProfile";
        ContextEnumType[ContextEnumType["Market"] = 3] = "Market";
        ContextEnumType[ContextEnumType["PersonaCategory"] = 4] = "PersonaCategory";
        ContextEnumType[ContextEnumType["BusinessProcess"] = 5] = "BusinessProcess";
        ContextEnumType[ContextEnumType["SubDomain"] = 6] = "SubDomain";
        ContextEnumType[ContextEnumType["Product"] = 7] = "Product";
    })(ContextEnumType = I0.ContextEnumType || (I0.ContextEnumType = {}));
    ;
    I0.ContextByExplorerType = [1, 3, 4, 5, 6, 7, 0, 0, 0, 0];
    var ViewEnumType;
    (function (ViewEnumType) {
        ViewEnumType[ViewEnumType["unknown"] = 0] = "unknown";
        ViewEnumType[ViewEnumType["Session"] = 1] = "Session";
        ViewEnumType[ViewEnumType["UserAdmin"] = 2] = "UserAdmin";
        ViewEnumType[ViewEnumType["Project"] = 3] = "Project";
        ViewEnumType[ViewEnumType["Explorer"] = 4] = "Explorer";
        ViewEnumType[ViewEnumType["Competitor"] = 5] = "Competitor";
        ViewEnumType[ViewEnumType["Persona"] = 6] = "Persona";
        ViewEnumType[ViewEnumType["UseCase"] = 7] = "UseCase";
        ViewEnumType[ViewEnumType["Concept"] = 8] = "Concept";
        ViewEnumType[ViewEnumType["Version"] = 9] = "Version";
        ViewEnumType[ViewEnumType["Matrix"] = 10] = "Matrix";
        ViewEnumType[ViewEnumType["Search"] = 11] = "Search";
        ViewEnumType[ViewEnumType["UseCaseDirectory"] = 12] = "UseCaseDirectory";
        ViewEnumType[ViewEnumType["RuleDirectory"] = 13] = "RuleDirectory";
        ViewEnumType[ViewEnumType["VersionDirectory"] = 14] = "VersionDirectory";
        ViewEnumType[ViewEnumType["UserDirectory"] = 15] = "UserDirectory";
    })(ViewEnumType = I0.ViewEnumType || (I0.ViewEnumType = {}));
    ;
    I0.ViewByExplorerType = [0, 5, 6, 7, 8, 9, 0, 0, 0, 0];
    I0.DataStructureByExplorerType = [0, 14, 17, 5, 8, 11, 0, 0, 0, 0];
    I0.SubDataStructureByExplorerType = [0, 15, 18, 6, 9, 12, 0, 0, 0, 1];
    I0.SubDataStructureItemByExplorerType = [0, 16, 19, 7, 10, 13, 0, 0, 0, 2];
    var DataStructureEnumType;
    (function (DataStructureEnumType) {
        DataStructureEnumType[DataStructureEnumType["unknown"] = 0] = "unknown";
        DataStructureEnumType[DataStructureEnumType["Role"] = 1] = "Role";
        DataStructureEnumType[DataStructureEnumType["User"] = 2] = "User";
        DataStructureEnumType[DataStructureEnumType["Project"] = 3] = "Project";
        DataStructureEnumType[DataStructureEnumType["Context"] = 4] = "Context";
        DataStructureEnumType[DataStructureEnumType["UseCase"] = 5] = "UseCase";
        DataStructureEnumType[DataStructureEnumType["Feature"] = 6] = "Feature";
        DataStructureEnumType[DataStructureEnumType["FeatureDependency"] = 7] = "FeatureDependency";
        DataStructureEnumType[DataStructureEnumType["Concept"] = 8] = "Concept";
        DataStructureEnumType[DataStructureEnumType["SubConcept"] = 9] = "SubConcept";
        DataStructureEnumType[DataStructureEnumType["SubConceptRule"] = 10] = "SubConceptRule";
        DataStructureEnumType[DataStructureEnumType["Version"] = 11] = "Version";
        DataStructureEnumType[DataStructureEnumType["VersionEpic"] = 12] = "VersionEpic";
        DataStructureEnumType[DataStructureEnumType["VersionEpicFeature"] = 13] = "VersionEpicFeature";
        DataStructureEnumType[DataStructureEnumType["Competitor"] = 14] = "Competitor";
        DataStructureEnumType[DataStructureEnumType["BestPractice"] = 15] = "BestPractice";
        DataStructureEnumType[DataStructureEnumType["SuccessFactor"] = 16] = "SuccessFactor";
        DataStructureEnumType[DataStructureEnumType["Persona"] = 17] = "Persona";
        DataStructureEnumType[DataStructureEnumType["EpicStory"] = 18] = "EpicStory";
        DataStructureEnumType[DataStructureEnumType["EpicCriteria"] = 19] = "EpicCriteria";
    })(DataStructureEnumType = I0.DataStructureEnumType || (I0.DataStructureEnumType = {}));
    ;
    var AssociationEnumType;
    (function (AssociationEnumType) {
        AssociationEnumType[AssociationEnumType["unknown"] = 0] = "unknown";
        AssociationEnumType[AssociationEnumType["HasOne"] = 1] = "HasOne";
        AssociationEnumType[AssociationEnumType["HasMany"] = 2] = "HasMany";
        AssociationEnumType[AssociationEnumType["Responsibility"] = 3] = "Responsibility";
        AssociationEnumType[AssociationEnumType["Goal"] = 4] = "Goal";
    })(AssociationEnumType = I0.AssociationEnumType || (I0.AssociationEnumType = {}));
    ;
    var StatusEnumType;
    (function (StatusEnumType) {
        StatusEnumType[StatusEnumType["unknown"] = 0] = "unknown";
        StatusEnumType[StatusEnumType["Draft"] = 1] = "Draft";
        StatusEnumType[StatusEnumType["Finalised"] = 2] = "Finalised";
    })(StatusEnumType = I0.StatusEnumType || (I0.StatusEnumType = {}));
    ;
    var ConfigEnumType;
    (function (ConfigEnumType) {
        ConfigEnumType[ConfigEnumType["unknown"] = 0] = "unknown";
        ConfigEnumType[ConfigEnumType["Mandatory"] = 1] = "Mandatory";
        ConfigEnumType[ConfigEnumType["Optional"] = 2] = "Optional";
        ConfigEnumType[ConfigEnumType["Alternative"] = 3] = "Alternative";
    })(ConfigEnumType = I0.ConfigEnumType || (I0.ConfigEnumType = {}));
    ;
    var PDFEnumType;
    (function (PDFEnumType) {
        PDFEnumType[PDFEnumType["unknown"] = 0] = "unknown";
        PDFEnumType[PDFEnumType["UseCases"] = 1] = "UseCases";
        PDFEnumType[PDFEnumType["BusinessRules"] = 2] = "BusinessRules";
        PDFEnumType[PDFEnumType["Glossary"] = 3] = "Glossary";
        PDFEnumType[PDFEnumType["UserDirectory"] = 4] = "UserDirectory";
    })(PDFEnumType = I0.PDFEnumType || (I0.PDFEnumType = {}));
    ;
})(I0 || (I0 = {}));
var I0;
(function (I0) {
    I0.OKButtonTemplate = '<input class="okbtn" type="button" value="OK" />';
    I0.CancelButtonTemplate = ' &nbsp; <input class="cancelbtn" type="button" value="Cancel" />';
    I0.popUpTemplate = "\n    <div id=\"app_pop_up{{templateZIndex}}\" class=\"popup-message\" style=\"z-index:{{templateZIndex}};\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"title\" title=\"{{templatetitle}}\">{{templatetitle}}</div>\n            <div class=\"toolbar\">\n                <div class=\"close-button clickable-icon\" title=\"Close\"><span class=\"fas fa-window-close\"></span></div>\n            </div>\n        </div>\n        <div class=\"card-main\">\n            <div class=\"warning\"></div>\n            <div class=\"content\">{{templatecontent}}</div>\n        </div>\n        <div class=\"card-bottom\">\n            <div class=\"buttons\"></div>\n        </div>\n    </div></div>";
    I0.explorerTemplate = "\n    <div class=\"sidenav-list-header-grid\">\n    <div class=\"sidenav-top-context\">{{explorername}}</div> \n      <div class=\"toolbar\">\n        <div id=\"explorer-add-pool-button\" title=\"Add Folder\" class=\"clickable-icon\"><span class=\"fas fa-folder-plus\"></span></div>\n      </div>\n    </div>\n    <ul class=\"sidenav-list\">\n    </ul>";
    I0.poolTemplate = "\n    <li>\n    <div class=\"sidenav-list-header-grid\">\n        <div {{templateid}} class=\"sidenav-list-header\">{{templatename}}</div> \n    <div class=\"toolbar\">\n        <div {{templateid}} title=\"Add\" class=\"explorer-add-pool-item-button clickable-icon\"><span class=\"fas fa-file-medical\"></span></div>\n        <div {{templateid}} title=\"Edit\" class=\"explorer-pool-edit-button clickable-icon\"><span class=\"fas fa-edit\"></span></div>\n        <div {{templateid}} title=\"Remove\" class=\"explorer-pool-remove-button clickable-icon\"><span class=\"fas fa-trash-alt\"></span></div>\n    </div>\n    </div>\n    <ul {{templateid}} class=\"sublist h\">\n    </ul>\n    </li>";
    I0.defaultExpanderButtonTemplate = "\n    <div id=\"top-context-expander-button\" title=\"Hide / Show\" class=\"clickable-icon open\"><span class=\"fas fa-caret-square-up\"></span></div>";
    I0.defaultHeaderToolbarTemplate = "\n    <div id=\"screen-edit-button\" title=\"Edit\" class=\"clickable-icon\"><span class=\"fas fa-edit\"></span></div>\n    <div id=\"screen-remove-button\" title=\"Remove\" class=\"clickable-icon\"><span class=\"fas fa-trash-alt\"></span></div>" +
        I0.defaultExpanderButtonTemplate;
    I0.defaultBodyToolbarTemplate = "\n    <div id=\"card-add-button\" title=\"Add\" class=\"clickable-icon open\"><span class=\"fas fa-plus-square\"></span></div>";
    I0.defaultTableToolbarTemplate = "\n    <div {{templateid}} title=\"Add\" class=\"card-item-add-button clickable-icon\"><span class=\"fas fa-plus-square\"></span></div>\n    <div {{templateid}} title=\"Edit\" class=\"card-edit-button clickable-icon\"><span class=\"fas fa-edit\"></span></div>\n    <div {{templateid}} title=\"Remove\" class=\"card-remove-button clickable-icon\"><span class=\"fas fa-trash-alt\"></span></div>";
    I0.defaultItemToolbarTemplate = "\n    <div {{templateid}} title=\"Edit\" class=\"card-item-edit-button clickable-icon\"><span class=\"fas fa-edit\"></span></div>\n    <div {{templateid}} title=\"Remove\" class=\"card-item-remove-button clickable-icon\"><span class=\"fas fa-trash-alt\"></span></div>";
    I0.editorCardTemplate = "\n    <div class=\"card-col\"><div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"title\" title=\"{{templatetitle}}\"><span class=\"{{templateiconclass}}\"></span>{{templatetitle}}</div>\n            <div class=\"toolbar\">{{templatetabletoolbar}}</div>\n        </div>\n        <div class=\"card-main\">\n            <table class=\"card-main-table table-striped {{templatetableclass}}\">\n            <thead><tr>{{templatetablehead}}</tr></thead>\n            <tbody>{{templatetablebody}}</tbody>\n            </table>\n        </div>\n    </div></div>";
    I0.editorCardItemTemplate = "\n    <tr>\n    <td>{{templatecol1}}</td><td>{{templatecol2}}</td><td><div class=\"toolbar\">{{templatetoolbar}}</div></td>\n    </tr>";
    I0.downloadCardTemplate = "\n    <div class=\"card-col\"><div class=\"card download-card\">\n        <div class=\"card-icon\"><span class=\"fas fa-{{templateIcon}}\"></span></div>\n        <div class=\"card-main\">\n            <div class=\"card-title\">{{templateTitle}}</div>\n            <div class=\"card-subtitle\">{{templateType}}</div>\n        </div>\n        </div>\n    </div>  ";
    I0.cardTemplate = "\n    <div class=\"card-col\"><div class=\"card\">\n        <div class=\"card-header\">{{templatetitle}}</div>\n        <div class=\"card-main\">{{templatecontent}}</div>\n    </div></div>";
    I0.progressCardTemplate = "\n    <div class=\"card-col\"><div class=\"card dashboard-kpi\">\n        <div class=\"card-header\">{{templatetitle}} <span class='counter'>{{templatecounter}}</span></div>\n        <div class=\"card-main\">\n            <div class=\"dashboard-kpi\">{{templateprogress}}%</div>\n            <div class=\"progress-bar-container accent-bg-color-refracted\">\n                <div class=\"progress-bar accent-bg-color\" style=\"width: {{templateprogress}}%;\"></div>\n            </div>\n        </div>\n    </div></div>";
    I0.rankCardTemplate = "\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div>FEATURE PROFILES</div>\n            <div class=\"toolbar\">{{templatetabletoolbar}}</div>\n        </div>\n        <div class=\"card-main\">\n            <table class=\"card-main-table table-striped profile-dashboard\">\n              <thead><tr><th>Profile</th><th>Features</th><th>% Completed</th></tr></thead>\n              <tbody>\n              {{templatelist}}\n            </tbody></table>\n        </div>\n    </div> ";
    I0.rankCardRowTemplate = "\n    <tr><td>{{templatetitle}}</td><td>{{templatecounter}}</td>\n        <td>\n            <div class=\"progress-bar-container accent-bg-color-refracted\">\n            <div class=\"progress-bar accent-bg-color\" style=\"width: {{templateprogress}}%;\">{{templateprogress}}%</div>\n            </div>\n    </td></tr>";
    I0.roadmapCardTemplate = "\n      <div class=\"card\">\n      <div class=\"card-header\">ROADMAP</div>\n      <div class=\"card-main\">\n          <div class=\"roadmap\">\n          <ul class=\"timeline\">\n          {{templatetimeline}}\n          </ul>\n        </div>\n    </div>";
    I0.matrixTemplate = "\n    <div class=\"table-scroller\">\n    <table class=\"table-centered table-striped matrix-list\">\n    <thead></thead>\n    <tbody></tbody>\n    </table>\n    </div>";
    I0.themeTemplate = "\n    .accent-color { color: {{templatecolor1}}; }\n    .accent-color-refracted { color: {{templatecolor2}}; }\n    .accent-bg-color { background:{{templatecolor1}}; }\n    .accent-bg-color-refracted { background: {{templatecolor2}}; }\n    .timeline-item:before{ background: {{templatecolor1}}; border: 3px solid {{templatecolor2}}; }";
    I0.AboutTemplate = "\n    <div class='rich-text'>\n        <h3>Iteration0 - V0.5 - Product Management Solution</h3>\n        <p>\n            Original Creation by\n            <a class=\"u\" href='https://fr.linkedin.com/in/jean-charles-labas-30878951'>Jean-Charles LABAS</a>\n        </p>\n        <p>\n            <a class=\"u\" href='https://github.com/cognitic/iteration0'>Source code</a> under \n            <a class=\"u\" href='https://www.gnu.org/licenses/gpl-3.0.html'>GPLv3 Licence</a>        \n        </p>\n    </div>";
})(I0 || (I0 = {}));
var I0;
(function (I0) {
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
            this.HistoryMarkerList = new ItemViewModelList();
        }
        return ProjectViewModel;
    }());
    I0.ProjectViewModel = ProjectViewModel;
    var ScreenViewModel = /** @class */ (function () {
        function ScreenViewModel(explorerType) {
            this.ExplorerTypeId = explorerType;
            this.CardLists = new Array();
            this.CardOptionLists = new Array();
            this.HistoryLogList = new ItemViewModelList();
            this.DownloadList = new ItemViewModelList();
        }
        return ScreenViewModel;
    }());
    I0.ScreenViewModel = ScreenViewModel;
    var DocumentViewModel = /** @class */ (function () {
        function DocumentViewModel() {
        }
        return DocumentViewModel;
    }());
    I0.DocumentViewModel = DocumentViewModel;
    var ItemViewModel = /** @class */ (function () {
        function ItemViewModel(Name, Id, ObjectiveScore, CurrentScore, CodeId) {
            this.Label = Name;
            this.KeyValue = Id;
            this.Code = CodeId;
            this.ObjectiveScore = ObjectiveScore;
            this.Score = CurrentScore;
            this.ScopeLists = new Array();
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
    var RessourceViewModel = /** @class */ (function () {
        function RessourceViewModel(Name, Id, Type, SubType) {
            this.Name = Name;
            this.RessourceId = Id;
            this.RessourceEnumType = Type;
            this.ConfigEnumType = SubType;
            this.DependencyList = new Array();
            this.ScopeLists = new Array();
            this.ScopeLists.push([]);
            this.ScopeLists.push([]);
            this.ScopeLists.push([]);
        }
        return RessourceViewModel;
    }());
    I0.RessourceViewModel = RessourceViewModel;
    var AssociationViewModel = /** @class */ (function () {
        function AssociationViewModel() {
        }
        return AssociationViewModel;
    }());
    I0.AssociationViewModel = AssociationViewModel;
})(I0 || (I0 = {}));
var I0;
(function (I0) {
    I0.AccentColorOptions = ["#ff00dd", "#ffb300", "#d6ff00", "#00ff68", "#7c00ff", "#00fdff"];
    I0.AccentColorRefractions = ["#40323e", "#403232", "#394032", "#394032", "#373240", "#323e40"];
    I0.ContextLabels = ["Product Line", "Market", "Persona Type", "Business Process", "Sub-Domain", "Product", "x"];
    I0.ContextItemLabels = ["Project", "Competitor", "Persona", "Use Case", "Concept", "Version", "Matrix"];
    I0.ContextPluralLabels = ["Product Lines", "Competitors", "Persona", "Use Cases", "Concepts", "Versions", "Configurations"];
    I0.ContextSubItemLabels = ["Feature ¨Profile", "Best Practice", "Epic Story", "Feature", "SubConcept", "Epic Feature Set", ""];
    I0.ContextSubItemDetailLabels = ["", "Success Factor", "Acceptance Criteria", "Dependency", "Rule", "Goal(s)", ""];
    I0.RuleTypeOptions = new Array();
    I0.RuleTypeOptions.push(new I0.ItemViewModel("Definition", "1"));
    I0.RuleTypeOptions.push(new I0.ItemViewModel("Structure", "2"));
    I0.RuleTypeOptions.push(new I0.ItemViewModel("Decision", "3"));
    I0.RuleTypeOptions.push(new I0.ItemViewModel("Behavior", "4"));
    I0.RuleTypeExamples = new Array();
    I0.RuleTypeExamples.push(new I0.ItemViewModel("Ex: <term> MUST HAVE < at least, at most, exactly...> <term>", "1"));
    I0.RuleTypeExamples.push(new I0.ItemViewModel("Ex : <term> MUST BE IN LIST < a, b, c...>", "2"));
    I0.RuleTypeExamples.push(new I0.ItemViewModel("Ex : IF <condition> THEN <action>", "3"));
    I0.RuleTypeExamples.push(new I0.ItemViewModel("Ex : <actor> MUST DO or not DO <#UCX, #FeatureY, #FeatureZ...>", "4"));
    I0.DocumentationSteps = new Array();
    I0.DocumentationSteps.push(new I0.ItemViewModel("New", "1"));
    I0.DocumentationSteps.push(new I0.ItemViewModel("Draft", "2"));
    I0.DocumentationSteps.push(new I0.ItemViewModel("Reviewed", "3"));
    I0.DocumentationSteps.push(new I0.ItemViewModel("Approved", "4"));
    I0.UseCaseScopes = new Array();
    I0.UseCaseScopes.push(new I0.ItemViewModel("System (black-box)", "1"));
    I0.UseCaseScopes.push(new I0.ItemViewModel("System (white-box)", "2"));
    I0.UseCaseScopes.push(new I0.ItemViewModel("Component", "3"));
    I0.UseCaseLevels = new Array();
    I0.UseCaseLevels.push(new I0.ItemViewModel("User Goal", "1"));
    I0.UseCaseLevels.push(new I0.ItemViewModel("Infrastructure", "2"));
    I0.MonthOptions = new Array();
    I0.MonthOptions.push(new I0.ItemViewModel("January", "1"));
    I0.MonthOptions.push(new I0.ItemViewModel("February", "2"));
    I0.MonthOptions.push(new I0.ItemViewModel("March", "3"));
    I0.MonthOptions.push(new I0.ItemViewModel("April", "4"));
    I0.MonthOptions.push(new I0.ItemViewModel("May", "5"));
    I0.MonthOptions.push(new I0.ItemViewModel("June", "6"));
    I0.MonthOptions.push(new I0.ItemViewModel("July", "7"));
    I0.MonthOptions.push(new I0.ItemViewModel("August", "8"));
    I0.MonthOptions.push(new I0.ItemViewModel("September", "9"));
    I0.MonthOptions.push(new I0.ItemViewModel("October", "10"));
    I0.MonthOptions.push(new I0.ItemViewModel("November", "11"));
    I0.MonthOptions.push(new I0.ItemViewModel("December", "12"));
    I0.YearOptions = new Array();
    I0.YearOptions.push(new I0.ItemViewModel("2018", "2018"));
    I0.YearOptions.push(new I0.ItemViewModel("2019", "2019"));
    I0.YearOptions.push(new I0.ItemViewModel("2020", "2020"));
    I0.YearOptions.push(new I0.ItemViewModel("2021", "2021"));
    I0.YearOptions.push(new I0.ItemViewModel("2022", "2022"));
    I0.YearOptions.push(new I0.ItemViewModel("2023", "2023"));
    I0.YearOptions.push(new I0.ItemViewModel("2024", "2024"));
    I0.YearOptions.push(new I0.ItemViewModel("2025", "2025"));
    I0.ReviewStatus = new Array();
    I0.ReviewStatus.push(new I0.ItemViewModel("First Draft", "1"));
    I0.ReviewStatus.push(new I0.ItemViewModel("Work Document", "2"));
    I0.ReviewStatus.push(new I0.ItemViewModel("Pending Global Review", "3"));
    I0.ReviewStatus.push(new I0.ItemViewModel("Pending Final Review", "4"));
    I0.ReviewStatus.push(new I0.ItemViewModel("Finalized", "5"));
    I0.PriorityLevels = new Array();
    I0.PriorityLevels.push(new I0.ItemViewModel("Nice to Have", "1"));
    I0.PriorityLevels.push(new I0.ItemViewModel("Low", "2"));
    I0.PriorityLevels.push(new I0.ItemViewModel("Medium", "3"));
    I0.PriorityLevels.push(new I0.ItemViewModel("High", "4"));
    I0.PriorityLevels.push(new I0.ItemViewModel("Mandatory", "5"));
    I0.PrecisionScale = new Array();
    I0.PrecisionScale.push(new I0.ItemViewModel("Slightly Precise", "1"));
    I0.PrecisionScale.push(new I0.ItemViewModel("Moderately Precise", "2"));
    I0.PrecisionScale.push(new I0.ItemViewModel("Precise", "3"));
    I0.PrecisionScale.push(new I0.ItemViewModel("Very Precise", "4"));
    I0.PrecisionScale.push(new I0.ItemViewModel("Extremely Precise", "5"));
    I0.ScaleOptions = new Array();
    I0.ScaleOptions.push(new I0.ItemViewModel("0.", "0"));
    I0.ScaleOptions.push(new I0.ItemViewModel("1.", "1"));
    I0.ScaleOptions.push(new I0.ItemViewModel("2.", "2"));
    I0.ScaleOptions.push(new I0.ItemViewModel("3.", "3"));
    I0.ScaleOptions.push(new I0.ItemViewModel("4.", "4"));
    I0.ScaleOptions.push(new I0.ItemViewModel("5.", "5"));
    I0.StepOptions = new Array();
    I0.StepOptions.push(new I0.ItemViewModel("0", "0"));
    I0.StepOptions.push(new I0.ItemViewModel("1", "1"));
    I0.StepOptions.push(new I0.ItemViewModel("2", "2"));
    I0.StepOptions.push(new I0.ItemViewModel("3", "3"));
    I0.StepOptions.push(new I0.ItemViewModel("4", "4"));
    I0.StepOptions.push(new I0.ItemViewModel("5", "5"));
    I0.ConfigOptions = new Array();
    I0.ConfigOptions.push(new I0.ItemViewModel("Mandatory", "1"));
    I0.ConfigOptions.push(new I0.ItemViewModel("Optional", "2"));
    I0.ConfigOptions.push(new I0.ItemViewModel("Alternative", "3"));
    I0.VersionStatusOptions = new Array();
    I0.VersionStatusOptions.push(new I0.ItemViewModel("Draft", "1"));
    I0.VersionStatusOptions.push(new I0.ItemViewModel("Finalised", "2"));
    I0.RessourceStatusOptions = new Array();
    I0.RessourceStatusOptions.push(new I0.ItemViewModel("Pending", "1"));
    I0.RessourceStatusOptions.push(new I0.ItemViewModel("Completed", "2"));
    I0.CardinalityOptions = new Array();
    I0.CardinalityOptions.push(new I0.ItemViewModel("Has One", "1"));
    I0.CardinalityOptions.push(new I0.ItemViewModel("Has Many", "2"));
    I0.DownloadTypeIcons = { "PDF Document": "file-pdf", "Zip Archive (C#)": "file-archive", "Zip Archive (Xml)": "code", "Markdown document": "link", "Zip Archive (JSON)": "save" };
    I0.configTypeIcons = { "0": "fa-external-link-square-alt", "1": "fa-circle", "2": "fa-adjust", "3": "fa-ban" };
})(I0 || (I0 = {}));
var I0;
(function (I0) {
    var UIHelper = /** @class */ (function () {
        function UIHelper(appContext) {
            this.app = appContext;
        }
        UIHelper.prototype.BuildHtmlForTab = function (headers) {
            var TabHtml = "<div class='tab-selector'>";
            jQuery.each(headers, function (index) {
                TabHtml += "<div class='tab-item' tabindex='" + index + "'>" + this + "</div>";
            });
            TabHtml += "</div>";
            return TabHtml;
        };
        UIHelper.prototype.ShowTab = function (formId, tabindex) {
            var lastViewHeight = $("#" + formId).height();
            $("#" + formId + " .tab-item, #" + formId + " .tab-view").removeClass("active");
            $("#" + formId + " .tab-item[tabindex='" + tabindex + "'], #" + formId + " .tab-view[tabindex='" + tabindex + "']").addClass("active");
            var newViewHeight = $("#" + formId).height();
            if (newViewHeight > lastViewHeight)
                $("#" + formId).css('min-height', newViewHeight.toString() + 'px');
        };
        UIHelper.prototype.BuildDropDownHtmlWith = function (dropDownId, items, defaultValue, selectedValue) {
            var DropDownHtml = "<select id='" + dropDownId + "'><option value='' disabled='' " + ((selectedValue == "-1") ? "selected=''" : "") + ">" + defaultValue + "</option>";
            jQuery.each(items, function () {
                DropDownHtml += "<option value='" + this.KeyValue + "' " + ((selectedValue == this.KeyValue) ? "selected=''" : "") + ">" + this.Label + "</option>";
            });
            DropDownHtml += '</select>';
            return DropDownHtml;
        };
        UIHelper.prototype.BuildColorDropDownHtmlWith = function (dropDownId, items, defaultValue, selectedValue) {
            var DropDownHtml = '<input id="' + dropDownId + '" type="color" list="' + dropDownId + 'Colors" value="' + selectedValue + '"><datalist id="' + dropDownId + 'Colors">';
            jQuery.each(items, function () {
                DropDownHtml += "<option value='" + this + "' " + ((selectedValue == this) ? "selected=''" : "") + ">" + this.Label + "</option>";
            });
            DropDownHtml += '</datalist>';
            return DropDownHtml;
        };
        //<input id="bgColor" type="color" list="presetBGColors">
        //  <option>#C2B29E</option> </datalist>
        UIHelper.prototype.BuildHtmlForField = function (fieldType, fieldkey, fieldLabel, emptyValue, fieldValue, fieldOptions) {
            var context = this;
            var fieldHtml = {
                '1': function () {
                    return "<input type='text' id='" + fieldkey + "' class='texttype' maxlength='50' placeholder='" + emptyValue + "' value='" + fieldValue + "'>";
                },
                '2': function () {
                    return "<textarea id='" + fieldkey + "' type='textarea' maxlength='1000' placeholder='" + emptyValue + "'>" +
                        fieldValue + "</textarea>";
                },
                '3': function () {
                    return context.BuildDropDownHtmlWith(fieldkey, fieldOptions, emptyValue, fieldValue);
                },
                '4': function () {
                    return "<div class='flex-group'>" + context.BuildDropDownHtmlWith(fieldkey + "Month", I0.MonthOptions, "Select Month", fieldValue[0]) +
                        context.BuildDropDownHtmlWith(fieldkey + "Year", I0.YearOptions, "Select Year", fieldValue[2]) + "</div>";
                },
                '5': function () {
                    return "<div class='flex-group'>" + context.BuildDropDownHtmlWith(fieldkey + "1", I0.ScaleOptions, "Select Scale", fieldValue[0]) +
                        context.BuildDropDownHtmlWith(fieldkey + "2", I0.StepOptions, "Select Step", fieldValue[1]) + "</div>";
                },
                '6': function () {
                    return context.BuildHtmlButtonSelector(fieldkey, fieldOptions, fieldValue);
                },
                '7': function () {
                    return context.BuildColorDropDownHtmlWith(fieldkey, fieldOptions, emptyValue, fieldValue);
                },
                '8': function () {
                    return "<span class='clickable label-switcher' id='" + fieldkey + "'>" + (fieldValue ? "Allowed" : "Denied") + "</span>";
                }
            };
            return "<div class='form-element-group group-type-" + fieldType.toString() + "'><div><label>" + fieldLabel + " : </label></div><div>" +
                fieldHtml[fieldType.toString()]() + "</div></div>";
        };
        UIHelper.prototype.BuildHtmlListWith = function (items, hasTwoOptions) {
            var html = '';
            jQuery.each(items, function () {
                html += '<div class="column-list-row clickable">';
                if (hasTwoOptions) {
                    html += '<input class="row-cb has-one" type="checkbox"  cbId="' + this.KeyValue + '" >';
                    html += '<input class="row-cb has-many" type="checkbox"  cbId="' + this.KeyValue + '" >';
                }
                else {
                    html += '<input class="row-cb" type="checkbox"  cbId="' + this.KeyValue + '" >';
                }
                html += '<span class="name-list">' + this.Label + '</span></div>';
            });
            return html;
        };
        UIHelper.prototype.BuildHtmlButtonSelector = function (selectorId, Scopes, selectedScopeIDs) {
            var context = this;
            var html = "";
            html += "<div id='" + selectorId + "' class='context-field-selector'><input type='text' class='texttype scope-field' maxlength='50' style='width: 200px;' value='Default' disabled>";
            html += '<div class="variants-dropdown dropdown"><button class=""> Scope ▾</button><div class="dropdown-content">';
            jQuery.each(Scopes, function () {
                html += "<div><input type='checkbox' class='scope-CB i' CBCode='" + this.Code + "'  CBId='" + this.KeyValue + "' " + (selectedScopeIDs.indexOf(this.Code) > -1 ? "checked" : "") + ">" + this.Label + "</div>";
            });
            html += '</div></div>';
            html += '</div>';
            return html;
        };
        UIHelper.prototype.DisableButtonSelector = function (selectorId) {
            $('#' + selectorId + ' .scope-CB').prop("checked", false);
            $('#' + selectorId + ' .scope-field').val("Default");
        };
        UIHelper.prototype.IniField = function (content) {
            return (this.FieldIsBlank(content) ? "Empty" : content);
        };
        // public BuildHtmlFor(content: string): string {
        //     var summary = (this.FieldIsBlank(content) ? "Empty" : "");
        //     if (!this.FieldIsBlank(content)){
        //         var editor = this;
        //         var lines = content.split("\n");
        //         jQuery.each(lines, function (index) {
        //             var line = lines[index];
        //             summary += editor.HighlightNumeration(line) + "</br>";
        //             });
        //     }
        //     return summary;
        // }
        // public BuildBulletListFor(content: string, cssClass: string): string {
        //     var summary = (this.FieldIsBlank(content) ? "Empty" : "");
        //     if (!this.FieldIsBlank(content)) {
        //         var editor = this;
        //         var lines = content.split("\n");
        //         jQuery.each(lines, function (index) {
        //             var line = lines[index];
        //             var firstWord = line.substr(0, line.indexOf(" "));
        //             if (/^\d\.$/.test(firstWord)) {
        //                 if (summary.length > 0) summary += "</ul>";
        //                 summary += "<span class='b'>" + line  + "</span><ul class='" + cssClass + "'>";
        //             } else {
        //                 //if (/^\d\.\d$/.test(firstWord)) line = line.substr(line.indexOf(" "), line.length - line.indexOf(" ") -1);
        //                 summary += "<li>" + editor.HighlightNumeration(line) + "</li>";
        //             }
        //         });
        //     }
        //     return summary + "</ul>";
        // }
        UIHelper.prototype.HighlightNumeration = function (content) {
            var firstWord = content.substr(0, content.indexOf(" "));
            if (/^\d\.\S?\.?\S?$/.test(firstWord))
                content = "<span class='b'>" + firstWord + "</span>" + content.substr(content.indexOf(" "), content.length - content.indexOf(" ") - 1);
            return content;
        };
        UIHelper.prototype.ReplaceHashtagIdsWithLink = function (content, ProjectId) {
            return (this.FieldIsBlank(content) ? content : content.replace(/#([a-zA-Z0-9]*)/g, '<a class="u" href="/Project/Search/?ProjectID=' + ProjectId + '&Query=$1">#$1</a>'));
        };
        // public BuildBulletListForList(Contents: Array<string>, cssClass: string, ProjectId: string): string {
        //     var summary = "<ul class='" + cssClass +"'>"; var editor = this;
        //     jQuery.each(Contents, function (index) {
        //         summary += "<li>" + editor.BuildHtmlFor(editor.ReplaceHashtagIdsWithLink(Contents[index], ProjectId)) + "</li>";
        //     });
        //     return summary + "</ul>";
        // }
        // public BuildDefinitionSummaryFor(Headers: Array<string>, Contents: Array<string>): string {
        //     var summary = ""; var editor = this;
        //     jQuery.each(Headers, function (index) {
        //         summary += "<h3>" + Headers[index] + "</h3>";
        //         summary += "<p>" + (editor.BuildHtmlFor(Contents[index])) + "</p>";
        //     });
        //     return summary;
        // }
        UIHelper.prototype.AjaxCall = function (postURL, JSONData, callBackFunction, callBackParameter, httpMethod, loadingMessage) {
            if (httpMethod === void 0) { httpMethod = 'POST'; }
            if (loadingMessage === void 0) { loadingMessage = 'Loading'; }
            $.ajax({
                context: this,
                url: postURL,
                type: httpMethod,
                data: JSONData,
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                beforeSend: function () {
                    $('#loading-text').html(loadingMessage);
                    $('.event-progress').toggleClass('open');
                },
                success: function (response) {
                    $('.event-progress').toggleClass('open');
                    if (response) {
                        this.app.HideUnfreezeControls();
                        if (callBackParameter == null) {
                            callBackFunction(response, this);
                        }
                        else {
                            callBackFunction(response, callBackParameter);
                        }
                    }
                    else {
                        this.app.ShowAlert("An unexpected error occurred while communicating with the server !");
                    }
                },
                error: function (xhRequest, ErrorText, thrownError) {
                    console.log(ErrorText);
                    if (xhRequest.getAllResponseHeaders()) {
                        this.app.ShowAlert("An unexpected error occurred while communicating with the server !");
                    }
                }
            });
        };
        UIHelper.prototype.preventEnterSubmit = function (e) {
            if (e.which == 13) {
                var $targ = $(e.target);
                if (!$targ.is("textarea") && !$targ.is(":button,:submit")) {
                    var focusNext = false;
                    $(this).find(":input:visible:not([disabled],[readonly]), a").each(function () {
                        if (this === e.target) {
                            focusNext = true;
                        }
                        else if (focusNext) {
                            $(this).focus();
                            return false;
                        }
                    });
                    return false;
                }
            }
        };
        UIHelper.prototype.DesactivateButton = function (buttons) {
            buttons.each(function (index) {
                $(this).off('click');
                //button.click(function (e) { e.preventDefault(); });
                $(this).addClass('btn_fake');
            });
        };
        UIHelper.prototype.ReActivateButton = function (button, OnCLickDelegate) {
            var _this = this;
            button.unbind('click');
            button.click((function (e) { OnCLickDelegate(_this); return false; }));
            button.removeClass('btn_fake');
        };
        UIHelper.prototype.SearchIndexOf = function (ValueKeyData, SearchKey, SearchIndex) {
            if (SearchIndex == null)
                SearchIndex = 1;
            var index = 0;
            var found = false;
            jQuery.each(ValueKeyData, function () {
                if (this[SearchIndex] == SearchKey) {
                    found = true;
                    return false; //break 
                }
                index += 1;
            });
            if (found) {
                return index;
            }
            else {
                return -1;
            }
        };
        UIHelper.prototype.ConvertDateToArray = function (d) {
            if (d == null) {
                return null;
            }
            else {
                return [d.getFullYear(), d.getMonth() + 1, d.getDate()];
            }
        };
        UIHelper.prototype.FieldIsBlank = function (str) {
            return (!str || /^\s*$/.test(str));
        };
        UIHelper.prototype.DisableFields = function (fields) {
            fields.each(function (index) {
                $(this).prop("disabled", true);
                //$(this).addClass('field_fake');
            });
        };
        UIHelper.prototype.EnableFields = function (fields) {
            fields.each(function (index) {
                $(this).prop("disabled", false);
                //$(this).addClass('field_fake');
            });
        };
        UIHelper.prototype.GroupBy = function (objectList, key) {
            return objectList.reduce(function (rv, x) {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
            }, {});
        };
        ;
        UIHelper.prototype.UploadFileTo = function (controllerURL, modelId, callBackFunction, callBackParameter) {
            var form = $('#FormUpload')[0];
            var datastring = new FormData(form);
            datastring.append('id', modelId);
            $.ajax({
                context: this,
                url: controllerURL,
                type: 'POST',
                success: function (response) {
                    if (response) {
                        if (callBackParameter == null) {
                            callBackFunction(response, this);
                        }
                        else {
                            callBackFunction(response, this, callBackParameter);
                        }
                    }
                    else {
                        this.app.ShowAlert("An unexpected error occurred while communicating with the server !");
                    }
                },
                error: function (response) {
                    this.app.ShowAlert("An unexpected error occurred while communicating with the server !");
                },
                complete: function (response) {
                },
                data: datastring,
                //Options to tell jQuery not to process data or worry about content-type.
                cache: false,
                contentType: false,
                processData: false
            });
            return false;
        };
        UIHelper.prototype.GenerateNumericList = function (min, max, IsKeyValue) {
            var result = [];
            for (var i = min; i <= max; i++) {
                if (IsKeyValue) {
                    result.push([i, i]);
                }
                else {
                    result.push(i);
                }
            }
            return result;
        };
        UIHelper.prototype.sanitizeHtml = function (html, mustInjectHtmlNotation) {
            if (mustInjectHtmlNotation === void 0) { mustInjectHtmlNotation = false; }
            if (this.FieldIsBlank(html)) {
                return "";
            }
            else {
                var result = html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                if (mustInjectHtmlNotation) {
                    result = result.replace(/\n/gim, "<br/>");
                    result = result.replace(/@link:/g, "<a class='u' href='").replace(/@link@/g, "'>").replace(/:link@/g, "</a>");
                    result = result.replace(/\(\+\)/g, "<span class='fas fa-plus'></span>").replace(/\(\-\)/g, "<span class='fas fa-minus'></span>");
                    result = result.replace(/@fa:/g, "<span class='fas fa-").replace(/:fa@/g, "'></span>");
                }
                return result;
            }
        };
        return UIHelper;
    }());
    I0.UIHelper = UIHelper;
})(I0 || (I0 = {}));
/// <reference path="../Lib/jquery.d.ts" />
/// <reference path="../Lib/jspdf.d.ts" />
//
//      PDFGenerator
// 
var I0;
(function (I0) {
    var PDFGenerator = /** @class */ (function () {
        function PDFGenerator(document, jsPDF) {
            this.HeaderTemplate = '<div id="app_xxx###"></div>';
            this.FooterTemplate = '<div id="app_xxx###"></div>';
            this.docVM = document;
            this.pdf = jsPDF;
        }
        //Header All versions Title Date
        //Summary
        //Footer
        //Header
        //20 lines (UC Title et Numérotation + Descripton Lorem Ipsum line size ?)
        //20 lines (Feature Title et Numérotation + Field Descripton Lorem Ipsum line size ?)
        //Footer Page Num
        //https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html
        //https://cdn.rawgit.com/MrRio/jsPDF/master/examples/html2pdf/showcase_supported_html.html
        //https://github.com/eKoopmans/html2pdf.js/blob/master/README.md
        PDFGenerator.prototype.Download = function () {
            var margins = {
                top: 15,
                bottom: 15,
                left: 15,
                width: 580
            };
            var pdfContentHtml = "";
            pdfContentHtml += "<h1>" + this.docVM.FileName + "</h1>";
            pdfContentHtml += "<p class='break'></p>";
            var lastH1 = "", lastH2 = "";
            jQuery.each(this.docVM.ContentLists, function () {
                pdfContentHtml += (lastH1 != this.Header1) ? "<h1>" + this.Header1 + "</h1>" : "";
                pdfContentHtml += (lastH2 != this.Header2) ? "<h2>" + this.Header2 + "</h2>" : "";
                pdfContentHtml += "<h3>" + this.Header3 + "</h3>";
                pdfContentHtml += "<p>" + this.Content + "</p>";
                pdfContentHtml += "<p class='break'></p>";
                lastH1 = this.Header1;
                lastH2 = this.Header2;
            });
            $('#pdf-content').html(pdfContentHtml);
            var context = this;
            this.pdf.html($('#pdf-content')[0], {
                callback: function (doc) {
                    doc.save(context.docVM.FileName + '.pdf');
                }
            });
        };
        return PDFGenerator;
    }());
})(I0 || (I0 = {}));
/// <reference path="../Lib/jquery.d.ts" />
//
//      Parent Class for UI Controls
//
var I0;
(function (I0) {
    var UIControl = /** @class */ (function () {
        function UIControl(ControlType, htmlWrapperID, appContext) {
            this.type = ControlType;
            this.wrapperID = htmlWrapperID;
            this.wrapper = $(this.wrapperID);
            this.app = appContext;
            this.helper = new I0.UIHelper(appContext);
        }
        UIControl.prototype.ProjectId = function () { return parseInt(this.app.currentProjectVM.Project.KeyValue); };
        UIControl.prototype.Show = function () { };
        UIControl.prototype.Hide = function () { };
        UIControl.prototype.GetViewTypeFor = function (type) {
            switch (type) {
                case I0.ExplorerEnumType.Market:
                    return I0.ViewEnumType.Competitor;
                    break;
                case I0.ExplorerEnumType.Persona:
                    return I0.ViewEnumType.Persona;
                    break;
                case I0.ExplorerEnumType.Domain:
                    return I0.ViewEnumType.Concept;
                    break;
                case I0.ExplorerEnumType.Requirement:
                    return I0.ViewEnumType.UseCase;
                    break;
                case I0.ExplorerEnumType.Roadmap:
                    return I0.ViewEnumType.Version;
                    break;
            }
        };
        return UIControl;
    }());
    I0.UIControl = UIControl;
})(I0 || (I0 = {}));
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
        function ScreenUIControl(ControlType, htmlWrapperID, appContext) {
            var _this = _super.call(this, ControlType, htmlWrapperID, appContext) || this;
            _this.defaultViewType = 3;
            _this.displayOptions = { viewtabs: false, header: false, headertitle: false,
                nogapheader: false, mainmenu: false, cardicon: true };
            _this.customHeaderToolbarTemplate = '';
            _this.customBodyToolbarTemplate = '';
            _this.customTableHeadersTemplate = '';
            _this.customTableToolbarTemplate = '';
            _this.customItemToolbarTemplate = '';
            _this.configOption = ["", "formMandatoryScope", "formOptionScope", "formAltScope"];
            return _this;
        }
        ScreenUIControl.prototype.MustUsePoolDependencies = function () {
            return this.VM.ExplorerTypeId == I0.ExplorerEnumType.Requirement || this.VM.ExplorerTypeId == I0.ExplorerEnumType.Roadmap;
        };
        ScreenUIControl.prototype.ScreenId = function () { return this.VM.Ressource.RessourceId; };
        ScreenUIControl.prototype.AttachDefaultEvents = function () {
            var _this = this;
            //Todo check user session      
            $(".main .clickable-icon").off('click');
            $("#screen-edit-button").click((function (e) { _this.ShowEditScreenForm(); return false; }));
            $("#screen-remove-button").click((function (e) { _this.ShowRemoveScreenForm(); return false; }));
            $('#card-add-button').click((function (e) { _this.ShowNewCardForm(); return false; }));
            $('.card-edit-button').click((function (e) { _this.ShowEditCardForm($(e.target).attr('cardid')); return false; }));
            $('.card-remove-button').click((function (e) { _this.ShowRemoveCardForm($(e.target).attr('cardid')); return false; }));
            $(".card-item-add-button").click((function (e) { _this.ShowNewCardItemForm($(e.target).attr('cardid')); return false; }));
            $(".card-item-edit-button").click((function (e) { _this.ShowEditCardItemForm($(e.target).attr('itemid')); return false; }));
            $(".card-item-remove-button").click((function (e) { _this.ShowRemoveCardItemForm($(e.target).attr('itemid')); return false; }));
            $("#top-context-expander-button").click((function (e) { _this.ExpandCollapseHeader(e); return false; }));
        };
        ScreenUIControl.prototype.ShowEditScreenForm = function () { };
        ScreenUIControl.prototype.ShowRemoveScreenForm = function () {
            this.app.ShowCustomMessage("Are you sure you want to delete this " + I0.ContextItemLabels[this.VM.ExplorerTypeId] + " ?", "Remove " + I0.ContextItemLabels[this.VM.ExplorerTypeId], this.OnScreenRemoveClick, null, this, null);
        };
        ScreenUIControl.prototype.OnScreenRemoveClick = function (context) {
            context.helper.AjaxCall(I0.RemoveItemEndpoint, JSON.stringify({ ProjectId: context.ProjectId(), CollectionId: 0, ItemId: context.VM.Ressource.RessourceId, RemovedItemId: context.VM.Ressource.RessourceId, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId) }), context.app.LoadProject, context.app);
        };
        ScreenUIControl.prototype.ShowNewCardForm = function () {
            var newVM = new I0.RessourceViewModel("", -1);
            this.ShowDefineCardForm(newVM);
        };
        ScreenUIControl.prototype.ShowEditCardForm = function (cardId) {
            var item;
            jQuery.each(this.VM.CardLists, function (i) { if (i > 0 && this.PoolDef.RessourceId == cardId) {
                item = this.PoolDef;
                return false;
            } });
            this.ShowDefineCardForm(item);
        };
        ScreenUIControl.prototype.ShowDefineCardForm = function (ress) {
            var _this = this;
            var formHtml = "";
            switch (this.VM.ExplorerTypeId) {
                case I0.ExplorerEnumType.Persona:
                    var formHtml = "";
                    formHtml += this.helper.BuildHtmlForField(1, "formName", "As a " + this.VM.Ressource.Name + ", I want to ", "Story Goal", this.helper.sanitizeHtml(ress.Definition), null);
                    formHtml += this.helper.BuildHtmlForField(1, "formSo", "So that ", "Story Goal Context", this.helper.sanitizeHtml(ress.Detail1), null);
                    break;
                case I0.ExplorerEnumType.Domain:
                    formHtml += this.helper.BuildHtmlForField(1, "formName", "Name", "SubConcept Name", ress.Name, null);
                    formHtml += this.helper.BuildHtmlForField(3, "formRuleType", "Rule Type", "Select Rule Type", ress.ConfigEnumType, I0.RuleTypeOptions);
                    break;
                case I0.ExplorerEnumType.Requirement:
                    formHtml += this.helper.BuildHtmlForField(1, "formName", "Name", "Feature Name", ress.Name, null);
                    formHtml += this.helper.BuildHtmlForField(3, "formDefaultConfig", "Default Configuration", "Select Configuration", ress.ConfigEnumType, I0.ConfigOptions);
                    formHtml += this.helper.BuildHtmlForField(6, "formMandatoryScope", "Mandatory Scope", "", ress.ScopeLists[0], this.app.currentProjectVM.ScopeProfiles);
                    formHtml += this.helper.BuildHtmlForField(6, "formOptionScope", "Optional Scope", "", ress.ScopeLists[1], this.app.currentProjectVM.ScopeProfiles);
                    formHtml += this.helper.BuildHtmlForField(6, "formAltScope", "Alternative Scope", "", ress.ScopeLists[2], this.app.currentProjectVM.ScopeProfiles);
                    break;
                default:
                    formHtml += this.helper.BuildHtmlForField(1, "formName", "Name", I0.ContextSubItemLabels[this.VM.ExplorerTypeId] + " Name", ress.Name, null);
                    break;
            }
            if (this.VM.ExplorerTypeId != I0.ExplorerEnumType.Roadmap)
                formHtml += this.helper.BuildHtmlForField(3, "formStatus", "Progress Status", "Select Progress Status", ress.StatusEnumType, I0.RessourceStatusOptions);
            this.app.ShowCustomMessage("<div class='screen-form form-group'  typeid='" + ress.RessourceId + "'>" + formHtml + "</div>", "Define " + I0.ContextSubItemLabels[this.VM.ExplorerTypeId], this.OnCardSaveClick, null, this, null);
            if (this.VM.ExplorerTypeId == I0.ExplorerEnumType.Requirement) {
                var context = this;
                $('#formMandatoryScope .scope-CB').click((function (e) { return _this.UpdateCardItemContextSummary('#formMandatoryScope'); }));
                this.UpdateCardItemContextSummary('#formMandatoryScope');
                $('#formOptionScope .scope-CB').click((function (e) { return _this.UpdateCardItemContextSummary('#formOptionScope'); }));
                this.UpdateCardItemContextSummary('#formOptionScope');
                $('#formAltScope .scope-CB').click((function (e) { return _this.UpdateCardItemContextSummary('#formAltScope'); }));
                this.UpdateCardItemContextSummary('#formAltScope');
                context.helper.DisableButtonSelector(context.configOption[ress.ConfigEnumType]);
                $('#formDefaultConfig').change((function (e) { $('.scope-CB').prop("checked", false); $('.scope-field').val(""); context.helper.DisableButtonSelector(context.configOption[$(e.target).val()]); }));
            }
            return false;
        };
        ScreenUIControl.prototype.OnCardSaveClick = function (context) {
            var ress = new I0.RessourceViewModel($("#formName").val(), parseInt($(".screen-form").attr('typeid')));
            ress.ManagerId = context.VM.Ressource.RessourceId;
            ress.StatusEnumType = parseInt($("#formStatus").val());
            ress.RessourceEnumType = I0.SubDataStructureByExplorerType[context.app.currentExplorerType];
            switch (context.VM.ExplorerTypeId) {
                case I0.ExplorerEnumType.Market:
                    //ress.RessourceEnumType = DataStructureEnumType.BestPractice;
                    break;
                case I0.ExplorerEnumType.Persona:
                    // ress.RessourceEnumType = DataStructureEnumType.EpicStory;
                    ress.Detail1 = $.trim($("#formSo").val());
                    break;
                case I0.ExplorerEnumType.Requirement:
                    // ress.RessourceEnumType = DataStructureEnumType.Feature;
                    ress.ConfigEnumType = parseInt($("#formDefaultConfig").val());
                    context.helper.DisableButtonSelector(context.configOption[ress.ConfigEnumType]);
                    ress.ScopeLists.push(context.UpdateCardItemContextSummary("#formMandatoryScope"));
                    ress.ScopeLists.push(context.UpdateCardItemContextSummary("#formOptionScope"));
                    ress.ScopeLists.push(context.UpdateCardItemContextSummary("#formAltScope"));
                    break;
                case I0.ExplorerEnumType.Domain:
                    // ress.RessourceEnumType = DataStructureEnumType.SubConcept;
                    ress.ConfigEnumType = parseInt($("#formRuleType").val());
                    break;
                case I0.ExplorerEnumType.Roadmap:
                    // ress.RessourceEnumType = DataStructureEnumType.Version;
                    break;
            }
            var isOK = true;
            if ((context.helper.FieldIsBlank(ress.Name))) {
                isOK = false;
                context.app.ShowAlert("Name is mandatory !");
            }
            if (isOK) {
                context.helper.AjaxCall(I0.DefineRessourceEndpoint, JSON.stringify({ ProjectId: context.ProjectId(), CollectionId: context.ScreenId(), ItemId: ress.ManagerId, Ressource: ress, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId) }), context.OnEditorSaved, context);
            }
        };
        ScreenUIControl.prototype.ShowRemoveCardForm = function (cardId) {
            this.helper.AsyncPendingID = cardId;
            this.app.ShowCustomMessage("Are you sure you want to remove this " + I0.ContextSubItemLabels[this.VM.ExplorerTypeId] + " ?", "Remove " + I0.ContextSubItemLabels[this.VM.ExplorerTypeId], this.OnCardItemRemoveClick, null, this, null);
        };
        ScreenUIControl.prototype.ShowNewCardItemForm = function (cardId) {
            if (this.MustUsePoolDependencies()) {
                this.ShowCardAssociationForm(cardId);
            }
            else {
                var newItem = new I0.ItemViewModel("", "-1");
                newItem.ParentKeyValue = cardId;
                if (this.VM.ExplorerTypeId == I0.ExplorerEnumType.Persona)
                    newItem.Summary = JSON.stringify({ Given: "", When: "", Then: "" });
                this.ShowDefineCardItemForm(newItem);
            }
        };
        ScreenUIControl.prototype.ShowEditCardItemForm = function (linkId) {
            var Context = this;
            var item;
            jQuery.each(this.VM.CardLists, function (i) {
                if (i > 0) {
                    if (Context.MustUsePoolDependencies()) {
                        jQuery.each(this.PoolDef.DependencyList, function () { if (this.AssociationId == linkId) {
                            item = this;
                            return false;
                        } });
                    }
                    else {
                        jQuery.each(this.Items, function () { if (this.KeyValue == linkId) {
                            item = this;
                            return false;
                        } });
                    }
                    if (item != null)
                        return false;
                }
            });
            this.ShowDefineCardItemForm(item);
        };
        ScreenUIControl.prototype.ShowDefineCardItemForm = function (item) {
            var _this = this;
            var formHtml = "";
            switch (this.VM.ExplorerTypeId) {
                case I0.ExplorerEnumType.Persona:
                    var criteria = $.parseJSON(item.Summary);
                    var formHtml = "";
                    formHtml += this.helper.BuildHtmlForField(1, "formGiven", "Given", "Criteria Start Condition(s)", criteria.Given, null);
                    formHtml += this.helper.BuildHtmlForField(1, "formWhen", "When", "Criteria Action", criteria.When, null);
                    formHtml += this.helper.BuildHtmlForField(1, "formThen", "Then", "Criteria End Result", criteria.Then, null);
                    break;
                case I0.ExplorerEnumType.Requirement:
                    formHtml += this.helper.BuildHtmlForField(1, "formContractName", item.ChildName + " Responsibility", "Responsibility Verb Name", item.ContractResponsibility, null);
                    break;
                case I0.ExplorerEnumType.Domain:
                    var subConcept;
                    jQuery.each(this.VM.CardLists, function (i) { if (i > 0 && this.PoolDef.RessourceId.toString() == item.ParentKeyValue) {
                        subConcept = this.PoolDef;
                        return false;
                    } });
                    var ruleType = I0.RuleTypeOptions[subConcept.ConfigEnumType - 1].Label;
                    var placeholder = I0.RuleTypeExamples[subConcept.ConfigEnumType - 1].Label;
                    if (item.ScopeLists.length == 0)
                        item.ScopeLists.push([]);
                    formHtml += this.helper.BuildHtmlForField(1, "formName", ruleType + " Rule", placeholder, this.helper.sanitizeHtml(item.Label), null);
                    formHtml += this.helper.BuildHtmlForField(6, "formRuleScope", "Rule Scope", "", item.ScopeLists[0], this.app.currentProjectVM.ScopeProfiles);
                    break;
                case I0.ExplorerEnumType.Roadmap:
                    formHtml += this.helper.BuildHtmlForField(1, "formGoal", "Goal(s) on " + item.ChildName, "Task Verb Name(s)", item.ContractResponsibility, null);
                    break;
                case I0.ExplorerEnumType.MenuUserAdmin:
                    formHtml += this.helper.BuildHtmlForField(1, "formMail", "Mail Address (UPN)", "Mail address used as Login", item.Label, null);
                    break;
                default:
                    formHtml += this.helper.BuildHtmlForField(1, "formName", "Name", I0.ContextSubItemDetailLabels[this.VM.ExplorerTypeId] + " Name", this.helper.sanitizeHtml(item.Label), null);
                    break;
            }
            this.app.ShowCustomMessage("<div class='screen-form form-group'  formid='" + (this.MustUsePoolDependencies() ? item.AssociationId : item.KeyValue) +
                "' typeid='" + (this.MustUsePoolDependencies() ? item.ParentId : item.ParentKeyValue) + "'>" + formHtml + "</div>", "Define " + I0.ContextSubItemDetailLabels[this.VM.ExplorerTypeId], (this.MustUsePoolDependencies() ? this.OnCardAssociationSaveClick : this.OnCardItemSaveClick), null, this, null);
            $('#formRuleScope .scope-CB').click((function (e) { return _this.UpdateCardItemContextSummary('#formRuleScope'); }));
            this.UpdateCardItemContextSummary('#formRuleScope');
            return false;
        };
        ScreenUIControl.prototype.UpdateCardItemContextSummary = function (selectorId) {
            var result = [];
            //jQuery.each(this.app.currentProjectVM.ScopeProfiles, function () {
            var selector = $(selectorId);
            if (selector.length > 0) {
                var summary = "";
                jQuery.each(selector.find('.scope-CB:checked'), function () {
                    summary += $(this).attr('CBCode') + ', ';
                    result.push($(this).attr('CBCode'));
                });
                summary = (summary.length > 0) ? summary.substring(0, summary.length - 2) : "Default";
                selector.find('.scope-field').val(summary);
            }
            //});
            return result;
        };
        ScreenUIControl.prototype.OnCardItemSaveClick = function (context) {
            var item = new I0.ItemViewModel($.trim($("#formName").val()), $.trim($(".screen-form").attr('formid')));
            item.ParentKeyValue = $.trim($(".screen-form").attr('typeid'));
            item.Type = I0.SubDataStructureItemByExplorerType[context.app.currentExplorerType];
            var isOK = true;
            switch (context.VM.ExplorerTypeId) {
                case I0.ExplorerEnumType.Market:
                    if ((context.helper.FieldIsBlank(item.Label))) {
                        isOK = false;
                        context.app.ShowAlert("Factor Name is mandatory !");
                    }
                    break;
                case I0.ExplorerEnumType.Persona:
                    var summary = { "Given": $.trim($("#formGiven").val()), "When": $.trim($("#formWhen").val()), "Then": $.trim($("#formThen").val()) };
                    item.Label = summary.Given;
                    item.Summary = JSON.stringify(summary);
                    item.Type = I0.DataStructureEnumType.EpicCriteria;
                    if (context.helper.FieldIsBlank(summary.Given) || context.helper.FieldIsBlank(summary.When) ||
                        context.helper.FieldIsBlank(summary.Then)) {
                        isOK = false;
                        context.app.ShowAlert("Criteria is incomplete !");
                    }
                    break;
                case I0.ExplorerEnumType.Domain:
                    item.ScopeLists.push(context.UpdateCardItemContextSummary("#formRuleScope"));
                    if ((context.helper.FieldIsBlank(item.Label))) {
                        isOK = false;
                        context.app.ShowAlert("Rule is mandatory !");
                    }
                    break;
            }
            if (isOK) {
                context.helper.AjaxCall(I0.DefineItemEndpoint, JSON.stringify({ ProjectId: context.ProjectId(), CollectionId: parseInt(item.ParentKeyValue), ItemId: context.VM.Ressource.RessourceId, Item: item, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId) }), context.OnEditorSaved, context);
            }
        };
        ScreenUIControl.prototype.ShowRemoveCardItemForm = function (linkId) {
            this.helper.AsyncPendingID = linkId;
            this.app.ShowCustomMessage("Are you sure you want to remove this " + I0.ContextSubItemDetailLabels[this.VM.ExplorerTypeId] + " ?", "Remove " + I0.ContextSubItemDetailLabels[this.VM.ExplorerTypeId], this.OnCardItemRemoveClick, null, this, null);
        };
        ScreenUIControl.prototype.OnCardItemRemoveClick = function (context) {
            context.helper.AjaxCall(I0.RemoveItemEndpoint, JSON.stringify({ ProjectId: context.ProjectId(), CollectionId: 0, ItemId: context.VM.Ressource.RessourceId, RemovedItemId: context.helper.AsyncPendingID, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId) }), context.OnEditorSaved, context);
        };
        ScreenUIControl.prototype.ExpandCollapseHeader = function (e) {
            $(e.target).toggleClass("open");
            if ($(e.target).hasClass("open")) {
                $(e.target).children().addClass('fa-caret-square-up').removeClass('fa-caret-square-down');
                $("#board-view").removeClass('main-top-collapsed');
            }
            else {
                $(e.target).children().addClass('fa-caret-square-down').removeClass('fa-caret-square-up');
                $("#board-view").addClass('main-top-collapsed');
            }
        };
        ScreenUIControl.prototype.ShowCardAssociationForm = function (cardId) {
            var Context = this;
            if ((this.VM.CardOptionLists.length > 0) && (this.VM.CardOptionLists[0].Items.length > 0)) {
                var html = '<div><div style="height: 240px; overflow-y: scroll;"><div class="column-list">';
                html += this.helper.BuildHtmlListWith(this.VM.CardOptionLists[0].Items, this.VM.ExplorerTypeId == I0.ExplorerEnumType.Domain) + '</div></div></div>';
            }
            else {
                html = '<div class="tac">No items available</div>';
            }
            this.app.ShowCustomMessage("<div id='UCform' class='screen-form form-group'  typeid='" + cardId + "'>" + html + "</div>", "Select items", this.OnCardAssociationAddClick, null, this, null);
            $(".column-list-row").click((function (e) { $(e.target).find(".row-cb").prop("checked", !$(e.target).find(".row-cb").prop("checked")); }));
            return false;
        };
        ScreenUIControl.prototype.OnCardAssociationAddClick = function (context) {
            var parentId = parseInt($(".screen-form").attr('typeid'));
            var selectionIds = [];
            jQuery.each($('.column-list-row .row-cb:checked'), function () {
                selectionIds.push(parseInt($(this).attr('cbId')));
            });
            var isOK = true;
            if (selectionIds.length == 0) {
                isOK = false;
                context.app.ShowAlert("No items Selected !");
            }
            if (isOK) {
                context.helper.AjaxCall(I0.AddAssociationEndpoint, JSON.stringify({ ProjectId: context.ProjectId(), CollectionId: 0, ItemId: context.VM.Ressource.RessourceId,
                    ParentId: parentId, ChildrenIds: selectionIds, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId) }), context.OnEditorSaved, context);
            }
        };
        ScreenUIControl.prototype.ShowRemoveCardAssociationForm = function (itemId) {
            this.helper.AsyncPendingID = itemId;
            this.app.ShowCustomMessage("Are you sure you want to delete this row ?", "Remove row", this.OnCardAssociationRemoveClick, null, this, null);
        };
        ScreenUIControl.prototype.OnCardAssociationRemoveClick = function (context) {
            context.helper.AjaxCall(I0.RemoveAssociationEndpoint, JSON.stringify({ ProjectId: context.ProjectId(), CollectionId: 0, ItemId: context.VM.Ressource.RessourceId,
                AssociationId: context.helper.AsyncPendingID, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId) }), context.OnEditorSaved, context);
        };
        ScreenUIControl.prototype.OnCardAssociationSaveClick = function (context) {
            var associationId = parseInt($(".form-group").attr('formid'));
            var assoc;
            jQuery.each(context.VM.CardLists, function (i) {
                if (i > 0) {
                    jQuery.each(this.PoolDef.DependencyList, function () { if (this.AssociationId == associationId) {
                        assoc = this;
                        return false;
                    } });
                    if (assoc != null)
                        return false;
                }
            });
            var isOK = true;
            switch (context.VM.ExplorerTypeId) {
                case I0.ExplorerEnumType.Requirement:
                    assoc.ContractResponsibility = $.trim($("#formContractName").val());
                    if ((context.helper.FieldIsBlank(assoc.ContractResponsibility))) {
                        isOK = false;
                        context.app.ShowAlert("Responsibility Name is mandatory !");
                    }
                    break;
                case I0.ExplorerEnumType.Roadmap:
                    assoc.ContractResponsibility = $.trim($("#formGoal").val());
                    if ((context.helper.FieldIsBlank(assoc.ContractResponsibility))) {
                        isOK = false;
                        context.app.ShowAlert("Task Goal is mandatory !");
                    }
                    break;
            }
            if ((context.helper.FieldIsBlank(assoc.ContractResponsibility))) {
                isOK = false;
                context.app.ShowAlert("Name is mandatory !");
            }
            if (isOK) {
                context.helper.AjaxCall(I0.DefineAssociationEndpoint, JSON.stringify({ ProjectId: context.ProjectId(), CollectionId: 0, ItemId: context.VM.Ressource.RessourceId,
                    Association: assoc, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId) }), context.OnEditorSaved, context);
            }
        };
        ScreenUIControl.prototype.OnEditorSaved = function (response, context) {
            if (response.Ressource != undefined) {
                context.app.currentProjectVMIsFresh = false;
                context.app.DisplayScreen(response, context.app);
                context.app.HideUnfreezeControls();
            }
            else {
                context.app.ShowAlert(response);
            }
        };
        ScreenUIControl.prototype.DisplayHeader = function () {
            var result = "";
            var context = this;
            jQuery.each(this.VM.CardLists[0].Items, function () {
                result += I0.cardTemplate.replace(/{{templatetitle}}/g, context.helper.sanitizeHtml(this.Label)).replace(/{{templatecontent}}/g, context.helper.sanitizeHtml(this.Summary, true));
            });
            $("#screen-header").html(result);
            this.DisplayHeaderToolbar();
        };
        ScreenUIControl.prototype.DisplayHeaderToolbar = function () {
            if (this.displayOptions.header) {
                $("#board-view-toolbar").html(this.customHeaderToolbarTemplate + I0.defaultHeaderToolbarTemplate);
            }
        };
        ScreenUIControl.prototype.DisplayBody = function (tableCssClass) {
            var result = "";
            var context = this;
            jQuery.each(this.VM.CardLists, function (index) {
                if (index > 0) {
                    var iconclass = "";
                    if (context.displayOptions.cardicon) {
                        var cellIconClass = (this.PoolDef.RessourceEnumType == I0.DataStructureEnumType.Feature ? I0.configTypeIcons[this.PoolDef.ConfigEnumType] : I0.configTypeIcons[1]);
                        var cellIconColorlass = "accent-color";
                        if (this.PoolDef.StatusEnumType != I0.StatusEnumType.Finalised)
                            cellIconColorlass = "accent-color-refracted";
                        iconclass = "fas " + cellIconClass + " " + cellIconColorlass;
                    }
                    var card = I0.editorCardTemplate.replace(/{{templateiconclass}}/g, iconclass);
                    card = card.replace(/{{templatetitle}}/g, this.PoolDef.Name);
                    card = card.replace(/{{templatetabletoolbar}}/g, context.customTableToolbarTemplate
                        + I0.defaultTableToolbarTemplate.replace(/{{templateid}}/g, "cardid='" + this.PoolDef.RessourceId + "'"));
                    card = card.replace(/{{templatetableclass}}/g, tableCssClass);
                    card = card.replace(/{{templatetablehead}}/g, context.customTableHeadersTemplate);
                    var bodyHtml = "";
                    if (context.MustUsePoolDependencies()) {
                        jQuery.each(this.PoolDef.DependencyList, function (index) {
                            bodyHtml += context.BuildHtmlForBodyWithAssociation(this);
                        });
                    }
                    else {
                        jQuery.each(this.Items, function (index) {
                            bodyHtml += context.BuildHtmlForBodyWithItem(this);
                        });
                    }
                    card = card.replace(/{{templatetablebody}}/g, bodyHtml);
                    result += card;
                }
            });
            $("#screen-body").html(result);
            this.DisplayBodyToolbar();
            if (this.VM.ExplorerTypeId == I0.ExplorerEnumType.Requirement || this.VM.ExplorerTypeId == I0.ExplorerEnumType.Matrix) {
                $("#screen-body .card-header .fa-circle").attr('title', 'Mandatory');
                $("#screen-body .card-header .fa-adjust").attr('title', 'Optional');
                $("#screen-body .card-header .fa-ban").attr('title', 'Alternative');
            }
            else {
                $("#screen-body .card-header .fa-circle").attr('title', I0.RessourceStatusOptions[0].Label);
                $("#screen-body .card-header .fa-circle.accent-color").attr('title', I0.RessourceStatusOptions[1].Label);
            }
        };
        ScreenUIControl.prototype.DisplayBodyToolbar = function () {
            if (this.displayOptions.mainmenu) {
                $("#board-cards-toolbar").html(this.customBodyToolbarTemplate + I0.defaultBodyToolbarTemplate);
            }
        };
        ScreenUIControl.prototype.BuildHtmlForBodyWithAssociation = function (assoc) {
            return I0.editorCardItemTemplate.replace(/{{templatecol1}}/g, assoc.ChildName).replace(/{{templatecol2}}/g, this.helper.sanitizeHtml(assoc.ContractResponsibility)).replace(/{{templatetoolbar}}/g, this.customItemToolbarTemplate
                + I0.defaultItemToolbarTemplate.replace(/{{templateid}}/g, "itemid='" + assoc.AssociationId + "'"));
        };
        ScreenUIControl.prototype.BuildHtmlForBodyWithItem = function (item) {
            return I0.editorCardItemTemplate.replace(/{{templatecol1}}/g, this.helper.sanitizeHtml(item.Label, true)).replace(/{{templatecol2}}/g, item.ScopeLists.join(", ")).replace(/{{templatetoolbar}}/g, this.customItemToolbarTemplate
                + I0.defaultItemToolbarTemplate.replace(/{{templateid}}/g, "itemid='" + item.KeyValue + "'"));
        };
        ScreenUIControl.prototype.DisplayHistoryView = function () {
            var logHtml = "";
            jQuery.each(this.VM.HistoryLogList.Items, function () {
                var spaceIndex = this.Label.indexOf(" ");
                var date = this.Label.substring(0, spaceIndex);
                var time = this.Label.substring(spaceIndex + 1, this.Label.length);
                logHtml += "<tr><td>" + this.KeyValue + "</td><td>" + date + "</td><td>" + time + "</td><td>" + this.Code + "</td><td>" + this.Summary + "</td></tr>";
            });
            $("#table-view .log-list tbody").html(logHtml);
        };
        ScreenUIControl.prototype.DisplayDownloadView = function () {
            var context = this;
            var downloadCardHtml = "";
            jQuery.each(this.VM.DownloadList.Items, function () {
                downloadCardHtml += I0.downloadCardTemplate.replace(/{{templateIcon}}/g, I0.DownloadTypeIcons[this.Code]).replace(/{{templateTitle}}/g, context.helper.sanitizeHtml(this.Label)).replace(/{{templateType}}/g, this.Code);
            });
            $("#megamenu-view .download-card-col").html(downloadCardHtml);
        };
        ScreenUIControl.prototype.Hide = function () {
            $("#main-view-tab, #board-view-toolbar, #board-cards-toolbar, #main-top-summary").addClass("h");
            $("#board-view, #table-view, #megamenu-view, #matrix-view").addClass("h");
        };
        ScreenUIControl.prototype.Show = function () {
            var _this = this;
            this.Hide();
            $(".main-top, .main-top-col").removeClass("no-gap");
            if (this.displayOptions.viewtabs) {
                if (this.displayOptions.header)
                    $("#board-view-toolbar").removeClass("h");
                if (this.displayOptions.headertitle) {
                    $("#main-top-summary .breadcrumb").html(this.VM.Ressource.Name);
                    //TODO refresh explorer item name ? ExplorerByExplorerType(context.app.currentRessoureceType)
                    $("#main-top-summary .fa-certificate, #main-top-summary .fa-flask").addClass('h');
                    if (this.VM.Ressource.StatusEnumType > 0) {
                        if (this.VM.Ressource.StatusEnumType == I0.StatusEnumType.Draft)
                            $("#main-top-summary .fa-flask").removeClass('h');
                        if (this.VM.Ressource.StatusEnumType == I0.StatusEnumType.Finalised)
                            $("#main-top-summary .fa-certificate").removeClass('h');
                    }
                    $("#main-top-summary").removeClass("h");
                }
                ;
                if (this.displayOptions.mainmenu)
                    $("#board-cards-toolbar").removeClass("h");
                if (this.displayOptions.nogapheader)
                    $(".main-top, .main-top-col").addClass("no-gap");
                $("#main-view-tab label").click((function (e) { _this.ShowView(parseInt($(e.target).prev().val())); }));
                $("#main-view-tab input[value=" + this.app.currentViewType.toString() + "]").prop("checked", true);
                $("#main-view-tab").removeClass("h");
                this.ShowView(this.app.currentViewType);
            }
            else {
                this.ShowView(this.defaultViewType);
                $("#main-top-summary").removeClass("h");
            }
        };
        ScreenUIControl.prototype.ShowView = function (viewType) {
            this.app.currentViewType = viewType;
            $("#board-view, #table-view, #megamenu-view, #matrix-view").addClass("h");
            if (viewType == I0.ScreenViewEnumType.Board) {
                $("#top-context-expander-button").children().addClass('fa-caret-square-up').removeClass('fa-caret-square-down');
                if (this.displayOptions.header) {
                    $("#board-view").removeClass('main-top-collapsed');
                }
                else {
                    $("#board-view").addClass('main-top-collapsed');
                }
                ;
                $("#board-view").removeClass("h");
            }
            else if (viewType == I0.ScreenViewEnumType.Table) {
                $("#table-view").removeClass("h");
            }
            else if (viewType == I0.ScreenViewEnumType.Downloads) {
                $("#megamenu-view").removeClass("h");
            }
            else if (viewType == I0.ScreenViewEnumType.Matrix) {
                $("#matrix-view").removeClass("h");
            }
            else { //downloads           
                this.app.ShowAlert("View Undefined !");
            }
        };
        return ScreenUIControl;
    }(I0.UIControl));
    I0.ScreenUIControl = ScreenUIControl;
})(I0 || (I0 = {}));
var I0;
(function (I0) {
    var PopUpUIControl = /** @class */ (function (_super) {
        __extends(PopUpUIControl, _super);
        function PopUpUIControl(title, content, zIndex, appRef) {
            var _this = _super.call(this, "PopUpUIControl", "#frozen-screen-layer", appRef) || this;
            _this.zIndex = zIndex;
            _this.wrapperID = '#app_pop_up' + zIndex.toString();
            _this.app = appRef;
            var popupHtml = I0.popUpTemplate.replace(/{{templateZIndex}}/g, _this.zIndex.toString()).replace(/{{templatetitle}}/g, title);
            popupHtml = popupHtml.replace(/{{templatecontent}}/g, content);
            if ($(_this.wrapperID).length > 0)
                $(_this.wrapperID).remove();
            $("#frozen-screen-layer").append(popupHtml);
            _this.wrapper = $(_this.wrapperID);
            _this.wrapper.click(function (e) { e.stopPropagation(); });
            $("#app_pop_up" + _this.zIndex.toString() + " .close-button").click((function (e) { _this.Hide(); return false; }));
            return _this;
        }
        PopUpUIControl.prototype.BottomWrapper = function () {
            return $("#app_pop_up" + this.zIndex.toString() + " .buttons");
        };
        PopUpUIControl.prototype.OKButton = function () {
            return $("#app_pop_up" + this.zIndex.toString() + " .okbtn");
        };
        PopUpUIControl.prototype.CancelButton = function () {
            return $("#app_pop_up" + this.zIndex.toString() + " .cancelbtn");
        };
        PopUpUIControl.prototype.Show = function () {
            this.BottomWrapper().hide();
            this.Appear();
        };
        PopUpUIControl.prototype.ShowOk = function () {
            var _this = this;
            this.BottomWrapper().html(I0.OKButtonTemplate);
            this.OKButton().click((function (e) { _this.Hide(); return false; }));
            this.Appear();
        };
        PopUpUIControl.prototype.ShowOkCancel = function (okDelegate, cancelDelegate, okContext, cancelContext) {
            var _this = this;
            if (okContext == null)
                okContext = this;
            if (cancelContext == null)
                cancelContext = this;
            this.BottomWrapper().html(I0.OKButtonTemplate + I0.CancelButtonTemplate);
            this.OKButton().click((function (e) { okDelegate(okContext); return false; }));
            if (cancelDelegate == null) {
                this.CancelButton().click((function (e) { _this.Hide(); return false; }));
            }
            else {
                this.CancelButton().click((function (e) { cancelDelegate(cancelContext); return false; }));
            }
            this.Appear();
        };
        ;
        PopUpUIControl.prototype.Hide = function () {
            this.wrapper.hide();
            if ($('.popup-message').length == 1)
                this.app.HideFrozenScreen();
            this.wrapper.remove();
        };
        PopUpUIControl.prototype.Appear = function () {
            this.app.ShowFrozenScreen();
            this.wrapper.show();
        };
        return PopUpUIControl;
    }(I0.UIControl));
    I0.PopUpUIControl = PopUpUIControl;
})(I0 || (I0 = {}));
var I0;
(function (I0) {
    var ExplorerUIControl = /** @class */ (function (_super) {
        __extends(ExplorerUIControl, _super);
        function ExplorerUIControl(explorerVM, appContext) {
            var _this = _super.call(this, "ExplorerUIControl", "#explorer", appContext) || this;
            _this.VM = explorerVM;
            _this.wrapper.attr('typeid', _this.app.currentExplorerType);
            _this.DisplayPools();
            _this.ExpandMostInterestingPool();
            _this.AttachCustomEvents();
            return _this;
        }
        ExplorerUIControl.prototype.AttachCustomEvents = function () {
            var _this = this;
            if ((this.app.currentExplorerType == I0.ExplorerEnumType.Home) || (this.app.currentExplorerType == I0.ExplorerEnumType.Matrix))
                $("#explorer-add-pool-button, .explorer-pool-edit-button, .explorer-pool-remove-button").hide();
            if (this.app.currentExplorerType == I0.ExplorerEnumType.Matrix)
                $(".explorer-add-pool-item-button").hide();
            $('#explorer-add-pool-button').click((function (e) { _this.ShowNewPoolForm(); return false; }));
            $(".explorer-pool-edit-button").click((function (e) { _this.ShowEditPoolForm($(e.target).attr('poolid')); return false; }));
            $(".explorer-pool-remove-button").click((function (e) { _this.ShowRemovePoolForm($(e.target).attr('poolid')); return false; }));
            $('.explorer-add-pool-item-button').click((function (e) { _this.ShowNewPoolItemForm($(e.target).attr('poolid')); return false; }));
        };
        ExplorerUIControl.prototype.ShowNewPoolForm = function () {
            var newItem = new I0.ItemViewModel("", "-1");
            newItem.ParentKeyValue = null;
            newItem.Type = I0.ContextByExplorerType[this.app.currentExplorerType];
            this.ShowPoolForm(newItem);
        };
        ExplorerUIControl.prototype.ShowEditPoolForm = function (linkId) {
            var item;
            jQuery.each(this.VM.MenuLists, function () { if (this.Pool.KeyValue == linkId) {
                item = this.Pool;
                return false;
            } });
            this.ShowPoolForm(item);
        };
        ExplorerUIControl.prototype.ShowRemovePoolForm = function (linkid) {
            //todo check pool is empty
            this.helper.AsyncPendingID = linkid;
            this.app.ShowCustomMessage("Are you sure you want to remove this item ?", "Remove item", this.OnExplorerItemRemoveClick, null, this, null);
        };
        ExplorerUIControl.prototype.OnExplorerItemRemoveClick = function (context) {
            context.helper.AjaxCall(I0.RemoveItemEndpoint, JSON.stringify({ ProjectId: context.ProjectId(), CollectionId: context.helper.AsyncPendingID, ItemId: 0, RemovedItemId: 0, ViewType: I0.ViewEnumType.Explorer }), context.app.LoadProject, context.app);
        };
        ExplorerUIControl.prototype.ShowNewPoolItemForm = function (typeid) {
            var newItem = new I0.ItemViewModel("", "-1");
            newItem.ParentKeyValue = typeid;
            newItem.Type = I0.DataStructureByExplorerType[this.app.currentExplorerType];
            this.ShowPoolForm(newItem);
        };
        //NB: Pool item & pool form are the same except item ParentKeyValue
        ExplorerUIControl.prototype.ShowPoolForm = function (item) {
            var Label = (item.ParentKeyValue == null ? I0.ContextLabels[this.app.currentExplorerType] : I0.ContextItemLabels[this.app.currentExplorerType]);
            var formHtml = this.helper.BuildHtmlForField(1, "formName", "Name", "Name", item.Label, null);
            this.app.ShowCustomMessage("<div class='item-form form-group' type='" + item.Type + "' formid='" + item.KeyValue +
                "' poolid='" + (item.ParentKeyValue ? item.ParentKeyValue : "-1") + "'>" + formHtml + "</div>", "Define " + Label, this.OnPoolSaveClick, null, this, null);
            return false;
        };
        ExplorerUIControl.prototype.OnPoolSaveClick = function (context) {
            var item = new I0.ItemViewModel($.trim($("#formName").val()), "-1");
            item.KeyValue = $.trim($(".item-form").attr('formid'));
            item.ParentKeyValue = $.trim($(".item-form").attr('poolid'));
            item.Type = parseInt($(".item-form").attr('type'));
            var isOK = true;
            if ((context.helper.FieldIsBlank(item.Label))) {
                isOK = false;
                context.app.ShowAlert("Name is mandatory !");
            }
            if (isOK) {
                var pId = (context.app.currentExplorerType == I0.ExplorerEnumType.Home ? 0 : context.ProjectId());
                context.helper.AjaxCall(I0.DefineItemEndpoint, JSON.stringify({ ProjectId: pId, CollectionId: parseInt(item.ParentKeyValue), ItemId: 0, Item: item, ViewType: I0.ViewEnumType.Explorer }), context.OnEditorSaved, context);
            }
        };
        ExplorerUIControl.prototype.OnEditorSaved = function (response, context) {
            if (response.MenuLists != undefined) {
                context.app.SetCurrentExplorer(response);
                context.app.DisplayExplorer(context.app.currentExplorerType);
                context.app.HideUnfreezeControls();
            }
            else if (context.app.currentExplorerType == I0.ExplorerEnumType.Home) {
                context.app.LoadUserSession(response, context.app);
            }
            else {
                context.app.ShowAlert(response);
            }
        };
        ExplorerUIControl.prototype.ExpandMostInterestingPool = function () {
            var pool;
            if (this.app.currentScreenVM != null && this.app.currentScreenVM.ExplorerTypeId == this.app.currentExplorerType) {
                pool = $(".sidenav-list-header[poolid=" + this.app.currentScreenVM.Ressource.ManagerId + "]");
                $(".sublist-item[linkid=" + this.app.currentScreenVM.Ressource.RessourceId + "]").addClass("selected");
            }
            if (pool != undefined && pool.length > 0) {
                pool.toggleClass("open").parent().next().toggleClass("h");
            }
            else {
                if (this.VM.MenuLists.length > 0) {
                    $(".sidenav-list-header:first").toggleClass("open").parent().next().toggleClass("h");
                }
                else {
                    //Show warning icon with tooltip : No x found !
                }
            }
        };
        ExplorerUIControl.prototype.DisplayPools = function () {
            var _this = this;
            $("#explorer").html(I0.explorerTemplate.replace("{{explorername}}", I0.ContextPluralLabels[this.app.currentExplorerType]));
            var result = "";
            var context = this;
            jQuery.each(this.VM.MenuLists, function () {
                //TODO if refreshing same explorer Keep pool ouvertes et le select en cas de refresh
                result += I0.poolTemplate.replace("{{templatename}}", this.Pool.Label).replace(/{{templateid}}/g, "poolid='" + this.Pool.KeyValue + "'");
            });
            $("#explorer .sidenav-list").html(result);
            jQuery.each(this.VM.MenuLists, function () {
                var sublistHtml = "";
                jQuery.each(this.Items, function () {
                    sublistHtml += "<li linkid='" + this.KeyValue + "' class='sublist-item'>" + this.Label + "</li>";
                });
                $("#explorer .sublist[poolid='" + this.Pool.KeyValue + "']").html(sublistHtml);
            });
            // $("#edit-definition-button").click((e => { this.ShowEditDefinitionForm(); return false }));
            // Edit() => Synchronize, DisplayExplorer()
            $("#explorer .sublist li").click((function (e) { _this.LoadScreenAsync(parseInt($(e.target).attr('linkid'))); return false; }));
            $(".sidenav-list-header").click(function (e) {
                $(e.target).toggleClass("open").parent().next().toggleClass("h");
            });
        };
        ExplorerUIControl.prototype.LoadScreenAsync = function (ressourceId) {
            $(".sublist-item[linkid='" + ressourceId + "']").addClass("loading");
            this.app.currentViewType = 0;
            this.app.DisplayScreenAsync(ressourceId);
        };
        return ExplorerUIControl;
    }(I0.UIControl));
    I0.ExplorerUIControl = ExplorerUIControl;
})(I0 || (I0 = {}));
var I0;
(function (I0) {
    var MatrixUIControl = /** @class */ (function (_super) {
        __extends(MatrixUIControl, _super);
        function MatrixUIControl(matrixVM, appContext) {
            var _this = _super.call(this, "MatrixUIControl", "#main", appContext) || this;
            _this.ColumnFilter = [];
            _this.CurrentScopeIDs = [];
            _this.VM = matrixVM;
            _this.displayOptions.viewtabs = false;
            _this.DisplayMatrixView();
            //this.AttachDefaultEvents();  
            _this.AttachCustomEvents();
            return _this;
        }
        MatrixUIControl.prototype.AttachCustomEvents = function () {
            var _this = this;
            $("#filter-edit-button").click((function (e) { _this.ShowDefineFilterForm(); return false; }));
        };
        MatrixUIControl.prototype.ShowDefineFilterForm = function () {
            var _this = this;
            var formHtml = "";
            formHtml += this.helper.BuildHtmlForField(6, "formScope", "Scope", "", this.ColumnFilter, this.app.currentProjectVM.ScopeProfiles);
            this.app.ShowCustomMessage("<div class='screen-form form-group'>" + formHtml + "</div>", "Define Columns", this.OnFilterUpdateClick, null, this, null);
            $('#formScope .scope-CB').click((function (e) { return _this.UpdateCardItemContextSummary('#formScope'); }));
            this.UpdateCardItemContextSummary('#formScope');
            return false;
        };
        MatrixUIControl.prototype.OnFilterUpdateClick = function (context) {
            context.ColumnFilter = $('#formScope .scope-field').val().split(", ");
            context.DisplayMatrixView();
            context.AttachCustomEvents();
            context.app.HideUnfreezeControls();
        };
        MatrixUIControl.prototype.DisplayMatrixView = function () {
            $("#matrix-view").html(I0.matrixTemplate);
            var context = this;
            var headers = new Array();
            var Profiles = this.app.currentProjectVM.ScopeProfiles.sort(function (a, b) {
                var nameA = a.Label.toUpperCase();
                var nameB = b.Label.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            jQuery.each(Profiles, function () {
                var colItem = this;
                jQuery.each(context.ColumnFilter, function () {
                    if (colItem.Code == this) {
                        headers.push(colItem);
                    }
                });
                if (context.ColumnFilter.length == 0) {
                    headers.push(colItem);
                }
            });
            $("#matrix-view table thead").html(context.BuildHtmlForHeaderItem(headers));
            var bodyHtml = "";
            var colCount = (this.ColumnFilter.length == 0 ? Profiles.length : this.ColumnFilter.length);
            jQuery.each(this.VM.CardLists, function () {
                bodyHtml += context.BuildHtmlForBodyItem(this, headers);
            });
            $("#matrix-view table tbody").html(bodyHtml);
            $("#matrix-view table tbody .fa-circle").attr('title', 'Mandatory');
            $("#matrix-view table tbody .fa-adjust").attr('title', 'Optional');
            $("#matrix-view table tbody .fa-ban").attr('title', 'Alternative');
        };
        MatrixUIControl.prototype.BuildHtmlForHeaderItem = function (columns) {
            var context = this;
            var rowHtml = "<th><div>" + this.VM.Ressource.Name + "</div>";
            rowHtml += '<div id="filter-edit-button" class="clickable-icon"><span class="fas fa-filter"></span></div>' + "</div></th>";
            jQuery.each(columns, function () {
                var colItem = this;
                rowHtml += "<th>" + colItem.Label + "</th>";
            });
            return "<tr>" + rowHtml + "</tr>";
        };
        MatrixUIControl.prototype.BuildHtmlForBodyItem = function (row, columns) {
            var context = this;
            var cellIconHtml = "";
            if (context.VM.Ressource.ScaleOrder == 1) { //rule
                var cellIconClass = I0.configTypeIcons[1];
                var cellIconColorlass = "accent-color";
                if (row.Pool.Score < 100)
                    cellIconColorlass = "accent-color-refracted";
                cellIconHtml = "<span class='fas " + cellIconClass + " " + cellIconColorlass + "'></span>";
            }
            var rowHtml = "<tr><th>" + cellIconHtml + " " + row.Pool.Label + "</th><td colspan='" + columns.length.toString() + "'></td></tr>";
            rowHtml += "<tr><th>";
            jQuery.each(row.Items, function () {
                var rowItem = this;
                if (context.VM.Ressource.ScaleOrder > 1) { //feature
                    var cellIconClass = I0.configTypeIcons[rowItem.Type];
                    var cellIconColorlass = "accent-color";
                    if (rowItem.Score < 100)
                        cellIconColorlass = "accent-color-refracted";
                    rowHtml += "<div><span class='fas " + cellIconClass + " " + cellIconColorlass + "'></span>" + context.helper.sanitizeHtml(rowItem.Label) + "</div>";
                }
                else { //rule
                    var rule = context.helper.sanitizeHtml(rowItem.Label);
                    rowHtml += "<div title='" + rule + "'>" + rowItem.Code + ") " + rule + "</div>";
                }
            });
            rowHtml += "</th>";
            jQuery.each(columns, function () {
                var colItem = this;
                rowHtml += "<td>";
                jQuery.each(row.Items, function () {
                    var rowItem = this;
                    var code = 1;
                    if (context.VM.Ressource.ScaleOrder > 1) { //feature
                        if (rowItem.ScopeLists[1].indexOf(colItem.Code) > -1)
                            code = 2;
                        if (rowItem.ScopeLists[2].indexOf(colItem.Code) > -1)
                            code = 3;
                    }
                    else { //rule
                        if (rowItem.ScopeLists[0].indexOf(colItem.Code) == -1)
                            code = 3;
                    }
                    var cellIconClass = I0.configTypeIcons[code];
                    var cellIconColorlass = "accent-color";
                    if (code == 3)
                        cellIconColorlass = "accent-color-refracted"; //high contrast
                    rowHtml += "<div><span class='fas " + cellIconClass + " " + cellIconColorlass + "'></span></div>";
                });
                rowHtml += "</td>";
            });
            return rowHtml + "</tr>";
        };
        return MatrixUIControl;
    }(I0.ScreenUIControl));
    I0.MatrixUIControl = MatrixUIControl;
})(I0 || (I0 = {}));
var I0;
(function (I0) {
    var UseCaseScreenUIControl = /** @class */ (function (_super) {
        __extends(UseCaseScreenUIControl, _super);
        function UseCaseScreenUIControl(screenVM, appContext) {
            var _this = _super.call(this, "UseCaseScreenUIControl", "#main", appContext) || this;
            _this.customTableHeadersTemplate = "<th>Dependency</th><th>Responsibility</th><th>Action</th>";
            _this.VM = screenVM;
            _this.displayOptions.viewtabs = true;
            _this.displayOptions.header = true;
            _this.displayOptions.headertitle = true;
            _this.displayOptions.nogapheader = true;
            _this.displayOptions.mainmenu = true;
            _this.DisplayHeader();
            _this.DisplayBody("feature-dependency-list");
            _this.DisplayHistoryView();
            _this.DisplayDownloadView();
            _this.AttachDefaultEvents();
            _this.AttachCustomEvents();
            return _this;
        }
        UseCaseScreenUIControl.prototype.AttachCustomEvents = function () {
            var _this = this;
            //Todo check user session
            $(".card-item-remove-button").off('click');
            $(".card-item-remove-button").click((function (e) { _this.ShowRemoveCardAssociationForm($(e.target).attr('itemid')); return false; }));
            $(".download-card").click((function (e) { _this.app.ShowAlert("Coming back soon !", "Work in progress"); return false; }));
        };
        UseCaseScreenUIControl.prototype.ShowEditScreenForm = function () {
            var _this = this;
            var usecase = this.VM.Ressource;
            var definition = $.parseJSON(usecase.Definition);
            var formHtml = this.helper.BuildHtmlForTab(["Definition", "Details", "Scope"]);
            formHtml += "<div class='tab-view' tabindex='0'>";
            formHtml += this.helper.BuildHtmlForField(1, "formGoalName", "Goal", "Goal Action Verb", usecase.Name, null);
            formHtml += this.helper.BuildHtmlForField(1, "formBefore", "Preconditions", "what we expect is already the state of the world", definition["Before"], null);
            formHtml += this.helper.BuildHtmlForField(1, "formSuccess", "Success End Condition", "The state of the world upon successful completion", definition["Success"], null);
            formHtml += this.helper.BuildHtmlForField(1, "formFailure", "Failed End Condition", "The state of the world if goal abandoned", definition["Failure"], null);
            formHtml += this.helper.BuildHtmlForField(1, "formActors", "Primary, Secondary Actors", "The role name for the actors", definition["Actors"], null);
            formHtml += this.helper.BuildHtmlForField(3, "formStatus", "Status", "Select Status", usecase.StatusEnumType.toString(), I0.VersionStatusOptions);
            formHtml += "</div><div class='tab-view' tabindex='1'>";
            formHtml += this.helper.BuildHtmlForField(1, "formStartStep", "Trigger", "Starting Step", definition["Start"], null);
            formHtml += this.helper.BuildHtmlForField(2, "formFlowSteps", "Normal Flow", "Line-by-line Steps of the scenario from trigger to goal delivery, and any cleanup after", usecase.Detail1, null);
            formHtml += this.helper.BuildHtmlForField(2, "formExtensions", "Extensions", "Line-by-line Condition causing branching (Error or Subsidiary Option)", usecase.Detail2, null);
            formHtml += this.helper.BuildHtmlForField(2, "formVariations", "Sub-Variations", "Line-by-line Context causing variation (Parametric Alternative)", usecase.Detail3, null);
            formHtml += "</div><div class='tab-view' tabindex='2'>";
            formHtml += this.helper.BuildHtmlForField(3, "formScope", "Scope", "Select Scope", definition["Scope"], I0.UseCaseScopes);
            formHtml += this.helper.BuildHtmlForField(3, "formLevel", "Level", "Select Level", definition["Level"], I0.UseCaseLevels);
            formHtml += this.helper.BuildHtmlForField(3, "formContext", "Context", "Select Process", usecase.ManagerId.toString(), this.app.CurrentScreenExplorerContexts());
            formHtml += this.helper.BuildHtmlForField(1, "formGoalContext", "Goal in Context", "A longer statement of the goal in context if needed", definition["Context"], null);
            formHtml += this.helper.BuildHtmlForField(5, "formNumber", "Step Order", "-", [usecase.ScaleOrder, usecase.StepOrder], null);
            formHtml += "</div>";
            this.app.ShowCustomMessage("<div id='UCform' class='form-group' formid='" + usecase.RessourceId + "' >" + formHtml + "</div>", "Define Use Case", this.OnRessourceSaveClick, null, this, null);
            //$('#formLevel').width(140); $('#formScope').width(180);
            //TODO add tooltip icon if not placeholder null => title="This is the text of the placeholder"   
            this.helper.ShowTab("UCform", "0");
            $("#UCform .tab-item").click((function (e) { _this.helper.ShowTab("UCform", $(e.target).attr('tabindex')); return false; }));
            return false;
        };
        UseCaseScreenUIControl.prototype.OnRessourceSaveClick = function (context) {
            var usecase = context.VM.Ressource;
            var definition = { "Context": $.trim($("#formGoalContext").val()),
                "Scope": parseInt($.trim($("#formScope").val())), "Level": parseInt($.trim($("#formLevel").val())),
                "Before": $.trim($("#formBefore").val()), "Success": $.trim($("#formSuccess").val()), "Failure": $.trim($("#formFailure").val()),
                "Actors": $.trim($("#formActors").val()), "Start": $.trim($("#formStartStep").val()) };
            usecase.Definition = JSON.stringify(definition);
            usecase.RessourceId = parseInt($.trim($("#UCform").attr('formid')));
            usecase.RessourceEnumType = I0.DataStructureEnumType.UseCase;
            usecase.Name = $.trim($("#formGoalName").val());
            usecase.StatusEnumType = parseInt($.trim($("#formStatus").val()));
            usecase.Detail1 = $.trim($("#formFlowSteps").val());
            usecase.Detail2 = $.trim($("#formExtensions").val());
            usecase.Detail3 = $.trim($("#formVariations").val());
            usecase.ManagerId = parseInt($.trim($("#formContext").val()));
            usecase.ScaleOrder = parseInt($.trim($("#formNumber1").val()));
            usecase.StepOrder = parseInt($.trim($("#formNumber2").val()));
            var isOK = true;
            if ((context.helper.FieldIsBlank(usecase.ManagerId))) {
                isOK = false;
                context.app.ShowAlert("Context is mandatory !");
            }
            if (isOK) {
                context.helper.AjaxCall(I0.DefineRessourceEndpoint, JSON.stringify({ ProjectId: context.ProjectId(), CollectionId: 0, ItemId: usecase.RessourceId, Ressource: usecase, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId) }), context.OnEditorSaved, context);
            }
        };
        return UseCaseScreenUIControl;
    }(I0.ScreenUIControl));
    I0.UseCaseScreenUIControl = UseCaseScreenUIControl;
})(I0 || (I0 = {}));
var I0;
(function (I0) {
    var ConceptScreenUIControl = /** @class */ (function (_super) {
        __extends(ConceptScreenUIControl, _super);
        function ConceptScreenUIControl(screenVM, appContext) {
            var _this = _super.call(this, "ConceptScreenUIControl", "#main", appContext) || this;
            _this.customHeaderToolbarTemplate = "\n        <div id=\"add-aggregation-button\" title=\"Aggregate to Collection\" class=\"clickable-icon\"><span class=\"fas fa-sitemap\"></span></div>";
            _this.customTableHeadersTemplate = "<th>Rule</th><th>Scope</th><th>Actions</th>";
            _this.VM = screenVM;
            _this.displayOptions.viewtabs = true;
            _this.displayOptions.header = true;
            _this.displayOptions.headertitle = true;
            _this.displayOptions.nogapheader = true;
            _this.displayOptions.mainmenu = true;
            _this.DisplayHeader();
            _this.DisplayBody("concept-rule-list");
            _this.DisplayHistoryView();
            _this.DisplayDownloadView();
            _this.AttachDefaultEvents();
            _this.AttachCustomEvents();
            return _this;
        }
        ConceptScreenUIControl.prototype.AttachCustomEvents = function () {
            var _this = this;
            //Todo check user session 
            $("#add-aggregation-button").click((function (e) { _this.app.ShowAlert("Coming back soon !", "Work in progress"); return false; }));
            //$("#add-aggregation-button").click((e => { this.ShowCardAssociationForm(this.VM.Ressource.RessourceId.toString()); return false })); 
            //$(".remove-aggregation-button").click((e => { this.ShowRemoveCardAssociationForm($(e.target).attr('linkid')); return false }));
            $(".download-card").click((function (e) { _this.app.ShowAlert("Coming back soon !", "Work in progress"); return false; }));
        };
        ConceptScreenUIControl.prototype.ShowEditScreenForm = function () {
            var _this = this;
            var concept = this.VM.Ressource;
            var formHtml = this.helper.BuildHtmlForTab(["Definition", "Scope"]);
            formHtml += "<div class='tab-view' tabindex='0'>";
            formHtml += this.helper.BuildHtmlForField(1, "formConceptName", "Name", "Concept Name", concept.Name, null);
            formHtml += this.helper.BuildHtmlForField(2, "formDefinition", "Definition", "Concept Definition", concept.Definition, null);
            formHtml += this.helper.BuildHtmlForField(3, "formStatus", "Status", "Select Status", concept.StatusEnumType.toString(), I0.VersionStatusOptions);
            formHtml += "</div><div class='tab-view' tabindex='1'>";
            formHtml += this.helper.BuildHtmlForField(3, "formContext", "Context", "Select Sub-Domain", concept.ManagerId.toString(), this.app.CurrentScreenExplorerContexts());
            formHtml += "</div>";
            this.app.ShowCustomMessage("<div id='conceptform' class='form-group' formid='" + concept.RessourceId + "' >" + formHtml + "</div>", "Define Concept", this.OnRessourceSaveClick, null, this, null);
            //TODO add tooltip icon if not placeholder null => title="This is the text of the placeholder" 
            this.helper.ShowTab("conceptform", "0");
            $("#conceptform .tab-item").click((function (e) { _this.helper.ShowTab("conceptform", $(e.target).attr('tabindex')); return false; }));
            return false;
        };
        ConceptScreenUIControl.prototype.OnRessourceSaveClick = function (context) {
            var concept = context.VM.Ressource;
            concept.RessourceId = parseInt($.trim($("#conceptform").attr('formid')));
            concept.RessourceEnumType = I0.DataStructureEnumType.Concept;
            concept.Name = $.trim($("#formConceptName").val());
            concept.Definition = $.trim($("#formDefinition").val());
            concept.StatusEnumType = parseInt($.trim($("#formStatus").val()));
            concept.ManagerId = parseInt($.trim($("#formContext").val()));
            var isOK = true;
            if ((context.helper.FieldIsBlank(concept.ManagerId))) {
                isOK = false;
                context.app.ShowAlert("Context is mandatory !");
            }
            if (isOK) {
                context.helper.AjaxCall(I0.DefineRessourceEndpoint, JSON.stringify({ ProjectId: context.ProjectId(), CollectionId: 0, ItemId: concept.RessourceId, Ressource: concept, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId) }), context.OnEditorSaved, context);
            }
        };
        return ConceptScreenUIControl;
    }(I0.ScreenUIControl));
    I0.ConceptScreenUIControl = ConceptScreenUIControl;
})(I0 || (I0 = {}));
var I0;
(function (I0) {
    var ProductVersionScreenUIControl = /** @class */ (function (_super) {
        __extends(ProductVersionScreenUIControl, _super);
        function ProductVersionScreenUIControl(screenVM, appContext) {
            var _this = _super.call(this, "ProductVersionUIControl", "#main", appContext) || this;
            _this.customTableHeadersTemplate = "<th>Feature</th><th>Goal</th><th>Action</th>";
            _this.VM = screenVM;
            _this.displayOptions.viewtabs = true;
            _this.displayOptions.header = true;
            _this.displayOptions.headertitle = true;
            _this.displayOptions.nogapheader = true;
            _this.displayOptions.mainmenu = true;
            _this.displayOptions.cardicon = false;
            _this.DisplayHeader();
            $("#screen-header .card-col:nth-child(4) .card").addClass("accent-color");
            _this.DisplayBody("featureset-list");
            _this.DisplayHistoryView();
            _this.DisplayDownloadView();
            _this.AttachDefaultEvents();
            _this.AttachCustomEvents();
            return _this;
        }
        ProductVersionScreenUIControl.prototype.AttachCustomEvents = function () {
            var _this = this;
            //Todo check user session
            $(".card-item-remove-button").off('click');
            $(".card-item-remove-button").click((function (e) { _this.ShowRemoveCardAssociationForm($(e.target).attr('itemid')); return false; }));
            $(".download-card").click((function (e) { _this.app.ShowAlert("Coming back soon !", "Work in progress"); return false; }));
        };
        ProductVersionScreenUIControl.prototype.ShowEditScreenForm = function () {
            var _this = this;
            var version = this.VM.Ressource;
            var formHtml = this.helper.BuildHtmlForTab(["Definition", "Details", "Scope"]);
            formHtml += "<div class='tab-view' tabindex='0'>";
            formHtml += this.helper.BuildHtmlForField(5, "formNumber", "Number", "-", [version.ScaleOrder, version.StepOrder], null);
            formHtml += this.helper.BuildHtmlForField(1, "formNickname", "Nickname", "Version Nickname", version.Name, null);
            formHtml += this.helper.BuildHtmlForField(4, "formStart", "Start", "Select Start", version.DateDetail1, null);
            formHtml += this.helper.BuildHtmlForField(4, "formEnd", "End", "Select End", version.DateDetail2, null);
            formHtml += this.helper.BuildHtmlForField(3, "formStatus", "Status", "Select Status", version.StatusEnumType.toString(), I0.VersionStatusOptions);
            formHtml += "</div><div class='tab-view' tabindex='1'>";
            formHtml += this.helper.BuildHtmlForField(2, "formGoals", "Goals", "Business Goals", version.Definition, null);
            formHtml += this.helper.BuildHtmlForField(2, "formRisks", "Risks", "Risks encountered by this version", version.Detail1, null);
            formHtml += this.helper.BuildHtmlForField(2, "formSteps", "Steps", "Project Milestones", version.Detail2, null);
            formHtml += "</div><div class='tab-view' tabindex='2'>";
            formHtml += this.helper.BuildHtmlForField(2, "formTeams", "Teams", "Team(s) working on this version", version.Detail3, null);
            formHtml += this.helper.BuildHtmlForField(3, "formContext", "Context", "Select Product", version.ManagerId.toString(), this.app.CurrentScreenExplorerContexts());
            formHtml += "</div>";
            this.app.ShowCustomMessage("<div id='versionform' class='form-group' formid='" + version.RessourceId + "' >" + formHtml + "</div>", "Define Version", this.OnRessourceSaveClick, null, this, null);
            //TODO add tooltip icon if not placeholder null => title="This is the text of the placeholder"  
            this.helper.ShowTab("versionform", "0");
            $("#versionform .tab-item").click((function (e) { _this.helper.ShowTab("versionform", $(e.target).attr('tabindex')); return false; }));
            return false;
        };
        ProductVersionScreenUIControl.prototype.OnRessourceSaveClick = function (context) {
            var version = context.VM.Ressource;
            version.RessourceId = parseInt($.trim($("#versionform").attr('formid')));
            version.RessourceEnumType = I0.DataStructureEnumType.Version;
            version.ScaleOrder = parseInt($.trim($("#formNumber1").val()));
            version.StepOrder = parseInt($.trim($("#formNumber2").val()));
            version.Name = $.trim($("#formNickname").val());
            version.DateDetail1 = [parseInt($.trim($("#formStartMonth").val())), 1, parseInt($.trim($("#formStartYear").val()))];
            version.DateDetail2 = [parseInt($.trim($("#formEndMonth").val())), 1, parseInt($.trim($("#formEndYear").val()))];
            version.StatusEnumType = parseInt($.trim($("#formStatus").val()));
            version.Definition = $.trim($("#formGoals").val());
            version.Detail1 = $.trim($("#formRisks").val());
            version.Detail2 = $.trim($("#formSteps").val());
            version.Detail3 = $.trim($("#formTeams").val());
            version.ManagerId = parseInt($.trim($("#formContext").val()));
            var isOK = true;
            if ((context.helper.FieldIsBlank(version.ManagerId))) {
                isOK = false;
                context.app.ShowAlert("Context is mandatory !");
            }
            if (isOK) {
                context.helper.AjaxCall(I0.DefineRessourceEndpoint, JSON.stringify({ ProjectId: context.ProjectId(), CollectionId: 0, ItemId: version.RessourceId, Ressource: version, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId) }), context.OnEditorSaved, context);
            }
        };
        return ProductVersionScreenUIControl;
    }(I0.ScreenUIControl));
    I0.ProductVersionScreenUIControl = ProductVersionScreenUIControl;
})(I0 || (I0 = {}));
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
var I0;
(function (I0) {
    var Iteration0 = /** @class */ (function (_super) {
        __extends(Iteration0, _super);
        function Iteration0(appSettings) {
            var _this = _super.call(this, "App", "body", null) || this;
            _this.currentServerSetting = { name: "Intranet" };
            _this.testMode = true;
            _this.localMode = false;
            _this.helper.app = _this;
            _this.settings = appSettings;
            if (_this.testMode) {
                _this.currentSessionVM = I0.sessionMockUp;
                _this.currentProjectExplorerVM = I0.configExplorerMockUp;
                _this.currentProjectVM = I0.projectMockUp;
                _this.currentScreenVM = _this.currentProjectVM.DashboardScreenVM;
                _this.currentExplorerType = 0;
                _this.currentViewType = 0;
                _this.currentServerSetting = I0.AppSettingsMockUp;
                _this.LoadDefaultMatrixExplorerVM();
                _this.DisplayMenu();
                _this.DisplayExplorer(_this.currentExplorerType);
                _this.LoadProject(_this.currentProjectVM, _this);
            }
            else {
                _this.LoadAppSettings();
            }
            _this.AttachDefaultEvents();
            return _this;
        }
        Iteration0.prototype.LoadAppSettings = function () {
            this.currentProjectExplorerVM = new I0.ExplorerViewModel(0);
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
                else { //server only
                    this.LoadUserSessionAsync(null);
                }
            }
            else {
                this.ShowAlert("Application Settings are missing !");
            }
        };
        Iteration0.prototype.LoadLocalConfiguration = function () {
            if (this.localMode) {
                this.currentProjectExplorerVM.MenuLists.push(new I0.ItemViewModelList());
                this.currentProjectExplorerVM.MenuLists[0].Pool = new I0.ItemViewModel("Local Computer", "0");
                this.currentProjectExplorerVM.MenuLists[0].Items = new Array();
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
                this.helper.AjaxCall(I0.LoadSessionEndpoint, JSON.stringify({}), context.LoadUserSession, context);
            }
        };
        Iteration0.prototype.LoadUserSession = function (response, context) {
            if (response.Role != undefined) {
                // CanEditRequirements: boolean;
                // CanEditDomains: boolean;
                // CanEditRoadmap: boolean;
                // CanDownload: boolean;
                // CanExportProject: boolean;
                // CanImportProject: boolean;
                // IsAdmin: boolean;
                context.currentSessionVM = response;
                context.currentProjectExplorerVM.MenuLists = new Array();
                context.currentProjectExplorerVM.MenuLists.push(new I0.ItemViewModelList());
                context.currentProjectExplorerVM.MenuLists[0].Pool = new I0.ItemViewModel(context.currentServerSetting.name, "0");
                context.currentProjectExplorerVM.MenuLists[0].Items = new Array();
                jQuery.each(context.currentSessionVM.Projects, function () {
                    context.currentProjectExplorerVM.MenuLists[0].Items.push(new I0.ItemViewModel(this.Label, this.KeyValue));
                });
                context.LoadTheme(context.currentSessionVM.CustomThemecolor1, context.currentSessionVM.CustomThemecolor2);
                context.LoadDefaultMatrixExplorerVM();
                context.DisplayMenu();
                context.DisplayExplorer(I0.ExplorerEnumType.Home); //todo URL mapping
                if (context.currentSessionVM.defaultProjectId) {
                    //load default project 
                }
            }
            else {
                this.ShowAlert("User Session not found !");
            }
        };
        Iteration0.prototype.LoadTheme = function (themecolor1, themecolor2) {
            if (themecolor1.length > 0 && themecolor2.length > 0) {
                $("<div />", { html: '&shy;<style>' + I0.themeTemplate.replace(/{{templatecolor1}}/g, themecolor1).replace(/{{templatecolor2}}/g, themecolor2) + '</style>' }).appendTo("#custom-layer");
            }
        };
        Iteration0.prototype.LoadDefaultMatrixExplorerVM = function () {
            this.currentSessionVM.MatrixExplorerVM = new I0.ExplorerViewModel(I0.ExplorerEnumType.Matrix);
            this.currentSessionVM.MatrixExplorerVM.MenuLists.push(new I0.ItemViewModelList());
            this.currentSessionVM.MatrixExplorerVM.MenuLists[0].Pool = new I0.ItemViewModel("Comparison Matrix", "0");
            this.currentSessionVM.MatrixExplorerVM.MenuLists[0].Items = new Array();
            this.currentSessionVM.MatrixExplorerVM.MenuLists[0].Items.push(new I0.ItemViewModel("Features Comparison", "998"));
            this.currentSessionVM.MatrixExplorerVM.MenuLists[0].Items.push(new I0.ItemViewModel("Rules Comparison", "999"));
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
            var _this = this;
            //TODO lock explorer change during screen loading     
            this.currentExplorerType = explorerType;
            var context = this;
            var explorers = {
                '0': function () {
                    return new I0.ExplorerUIControl(context.currentProjectExplorerVM, context);
                },
                '1': function () {
                    return new I0.ExplorerUIControl(context.currentProjectVM.MarketExplorerVM, context);
                },
                '2': function () {
                    return new I0.ExplorerUIControl(context.currentProjectVM.PersonaExplorerVM, context);
                },
                '3': function () {
                    return new I0.ExplorerUIControl(context.currentProjectVM.RequirementExplorerVM, context);
                },
                '4': function () {
                    return new I0.ExplorerUIControl(context.currentProjectVM.DomainExplorerVM, context);
                },
                '5': function () {
                    return new I0.ExplorerUIControl(context.currentProjectVM.RoadMapExplorerVM, context);
                },
                '6': function () {
                    return new I0.ExplorerUIControl(context.currentSessionVM.MatrixExplorerVM, context);
                }
            };
            this.currentExplorer = explorers[explorerType.toString()]();
            this.currentExplorer.Show();
            if (this.testMode) {
                var screenMockUps = [this.currentProjectVM.DashboardScreenVM, I0.competitorScreenMockUp, I0.personaScreenMockUp, I0.UCScreenMockUp, I0.conceptScreenMockUp, I0.roadmapScreenMockUp, I0.featureMatrixExplorerMockUp, I0.ruleMatrixExplorerMockUp];
                $("#explorer[typeid=0],#explorer[typeid=1],#explorer[typeid=2],#explorer[typeid=3],#explorer[typeid=4],#explorer[typeid=5]").find(".sublist li").click((function (e) { _this.currentViewType = 0; _this.DisplayScreen(screenMockUps[_this.currentExplorerType], _this); return false; }));
                $("#explorer[typeid=6] .sublist li[linkid=998]").click((function (e) { _this.DisplayScreen(screenMockUps[_this.currentExplorerType], _this); return false; }));
                $("#explorer[typeid=6] .sublist li[linkid=999]").click((function (e) { _this.DisplayScreen(screenMockUps[_this.currentExplorerType + 1], _this); return false; }));
            }
            //TODO show current project if already selected 
        };
        Iteration0.prototype.SetCurrentExplorer = function (explorerVM) {
            switch (this.currentExplorerType) {
                case I0.ExplorerEnumType.Home:
                    return this.currentProjectExplorerVM = explorerVM;
                    break;
                case I0.ExplorerEnumType.Market:
                    return this.currentProjectVM.MarketExplorerVM = explorerVM;
                    break;
                case I0.ExplorerEnumType.Persona:
                    return this.currentProjectVM.PersonaExplorerVM = explorerVM;
                    break;
                case I0.ExplorerEnumType.Domain:
                    return this.currentProjectVM.DomainExplorerVM = explorerVM;
                    break;
                case I0.ExplorerEnumType.Requirement:
                    return this.currentProjectVM.RequirementExplorerVM = explorerVM;
                    break;
                case I0.ExplorerEnumType.Roadmap:
                    return this.currentProjectVM.RoadMapExplorerVM = explorerVM;
                    break;
                case I0.ExplorerEnumType.Matrix:
                    return this.currentSessionVM.MatrixExplorerVM = explorerVM;
                    break;
            }
        };
        Iteration0.prototype.DisplayScreenAsync = function (ressourceId) {
            var context = this;
            if (this.currentExplorerType == I0.ExplorerEnumType.Home || this.currentExplorerType == I0.ExplorerEnumType.Matrix) {
                if (context.currentProjectVMIsFresh && this.currentExplorerType == I0.ExplorerEnumType.Matrix) {
                    this.DisplayScreenCache(this.currentExplorerType, ressourceId);
                }
                else {
                    this.helper.AsyncPendingID = this.currentExplorerType;
                    this.helper.AsyncPendingJoinID = ressourceId.toString();
                    this.helper.AjaxCall(I0.LoadProjectViewEndpoint, JSON.stringify({ ProjectId: ressourceId, ItemId: 0, SearchViewOption: "", ViewType: I0.ViewEnumType.Project }), context.LoadProject, context);
                }
            }
            else {
                this.helper.AjaxCall(I0.LoadProjectViewEndpoint, JSON.stringify({ ProjectId: context.ProjectId(), ItemId: ressourceId, SearchViewOption: "", ViewType: context.GetViewTypeFor(this.currentExplorerType) }), context.DisplayScreen, context);
            }
        };
        Iteration0.prototype.DisplayScreenCache = function (explorerType, ressourceId) {
            var screenCache = [this.currentProjectVM.DashboardScreenVM, null, null, null, null, null, this.currentProjectVM.FeatureMatrixVM, this.currentProjectVM.RuleMatrixrVM];
            var cacheindex = this.currentExplorerType;
            if (this.currentExplorerType == I0.ExplorerEnumType.Matrix && ressourceId == 999)
                cacheindex += 1;
            if (screenCache[this.currentExplorerType] != null) {
                this.DisplayScreen(screenCache[cacheindex], this);
            }
            else {
                this.DisplayScreen(screenCache[0], this); //default: go home
            }
        };
        Iteration0.prototype.LoadProject = function (response, context) {
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
        };
        Iteration0.prototype.ProjectId = function () { return parseInt(this.currentProjectVM.Project.KeyValue); };
        Iteration0.prototype.CurrentScreenExplorerContexts = function () {
            var result = [];
            var pools = Array();
            switch (this.currentScreenVM.ExplorerTypeId) {
                case I0.ExplorerEnumType.Market:
                    pools = this.currentProjectVM.MarketExplorerVM.MenuLists;
                    break;
                case I0.ExplorerEnumType.Persona:
                    pools = this.currentProjectVM.PersonaExplorerVM.MenuLists;
                    break;
                case I0.ExplorerEnumType.Domain:
                    pools = this.currentProjectVM.DomainExplorerVM.MenuLists;
                    break;
                case I0.ExplorerEnumType.Requirement:
                    pools = this.currentProjectVM.RequirementExplorerVM.MenuLists;
                    break;
                case I0.ExplorerEnumType.Roadmap:
                    pools = this.currentProjectVM.RoadMapExplorerVM.MenuLists;
                    break;
            }
            if (pools.length > 0)
                jQuery.each(pools, function () { result.push(this.Pool); });
            return result;
        };
        Iteration0.prototype.DisplayScreen = function (response, context) {
            if (response.CardLists != undefined) {
                context.currentScreenVM = response;
                $("#explorer .sublist-item").removeClass("loading").removeClass("selected");
                $("#explorer .sublist-item[linkid='" + context.currentScreenVM.Ressource.RessourceId + "']").addClass("selected");
                var screens = {
                    '0': function () {
                        return new I0.DashboardScreenUIControl(context.currentScreenVM, context);
                    },
                    '1': function () {
                        return new I0.CompetitorScreenUIControl(context.currentScreenVM, context);
                    },
                    '2': function () {
                        return new I0.PersonaScreenUIControl(context.currentScreenVM, context);
                    },
                    '3': function () {
                        return new I0.UseCaseScreenUIControl(context.currentScreenVM, context);
                    },
                    '4': function () {
                        return new I0.ConceptScreenUIControl(context.currentScreenVM, context);
                    },
                    '5': function () {
                        return new I0.ProductVersionScreenUIControl(context.currentScreenVM, context);
                    },
                    '6': function () {
                        return new I0.MatrixUIControl(context.currentScreenVM, context);
                    },
                    '7': function () {
                        return new I0.SearchResultUIControl(context.currentScreenVM, context);
                    },
                    '9': function () {
                        return new I0.UserAdminScreenUIControl(context.currentScreenVM, context);
                    }
                };
                context.currentViewType = 0;
                var currentScreen = screens[context.currentScreenVM.ExplorerTypeId]();
                currentScreen.Show();
            }
            else {
                context.ShowAlert(response);
            }
        };
        Iteration0.prototype.AttachDefaultEvents = function () {
            var context = this;
            $("#app-manager-menu li[linkid=4]").click(function (e) {
                if (context.testMode) {
                    context.DisplayScreen(I0.adminScreenMockUp, context);
                }
                else {
                    context.currentViewType = 0;
                    context.helper.AjaxCall(I0.LoadAdminViewEndpoint, JSON.stringify({ ViewType: I0.ViewEnumType.UserAdmin }), context.DisplayScreen, context);
                }
                return false;
            });
            $("#app-manager-menu li[linkid=3]").click(function (e) {
                var currentScreen = new I0.UserPreferenceUIControl(new I0.ScreenViewModel(I0.ExplorerEnumType.MenuUserPrefs), context);
                //currentScreen.DisplayBody(context.currentSessionVM.PreferenceJSON, false);
                currentScreen.Show();
                return false;
            });
            $("#app-manager-menu li[linkid=2]").click(function (e) {
                var formHtml = "";
                var defaultProjectId = null;
                if (context.currentProjectVM != undefined)
                    defaultProjectId = context.currentProjectVM.Project.KeyValue;
                formHtml += context.helper.BuildHtmlForField(1, "formSearchQuery", "Search", "Search for..", "", null);
                formHtml += context.helper.BuildHtmlForField(3, "formProject", "Project", "Select Project", defaultProjectId, context.currentSessionVM.Projects);
                context.ShowCustomMessage("<div id='versionform' class='form-group'>" + formHtml + "</div>", "Search Project", context.OnSearchClick, null, context, null);
                return false;
            });
            $("#app-manager-menu li[linkid=1]").click(function (e) {
                context.ShowAlert(I0.AboutTemplate, "About Iteration0");
                //style ?
                return false;
            });
            $("#app-manager-menu li[linkid=0]").click(function (e) {
                window.location.replace(location.protocol + "//" + window.location.host + "/Application/Logout");
                return false;
            });
        };
        Iteration0.prototype.OnSearchClick = function (context) {
            if (context.testMode) {
                context.DisplaySearch(I0.SearchMockUp, context);
            }
            else {
                context.DisplaySearchAsync($.trim($("#formSearchQuery").val()), $("#formProject").val());
            }
        };
        Iteration0.prototype.DisplaySearchAsync = function (query, projectId) {
            var isOK = true;
            if ((this.helper.FieldIsBlank(query))) {
                isOK = false;
                this.app.ShowAlert("Search query is mandatory !");
            }
            if (isOK) {
                this.helper.AjaxCall(I0.LoadProjectViewEndpoint, JSON.stringify({ ProjectId: projectId, ItemId: 0, SearchViewOption: query, ViewType: I0.ViewEnumType.Search }), this.DisplaySearch, this);
            }
        };
        Iteration0.prototype.DisplaySearch = function (response, context) {
            if (response.Items != undefined) {
                context.HideUnfreezeControls();
                var currentScreen = new I0.SearchResultUIControl(new I0.ScreenViewModel(I0.ExplorerEnumType.MenuSearch), context);
                currentScreen.DisplayTableView(response);
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
            $('#app_pop_up1,#app_pop_up98,#app_pop_up99').remove();
            this.HideFrozenScreen();
        };
        Iteration0.prototype.ShowAlert = function (message, title) {
            if (title === void 0) { title = "Alert"; }
            new I0.PopUpUIControl(title, "<h3>" + message + "</h3>", 99, this).ShowOk();
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
var I0;
(function (I0) {
    //GET//////////// 
    I0.LoadSessionEndpoint = "/Application/LoadSession";
    I0.LoadAdminViewEndpoint = "/Application/LoadAdminView";
    I0.LoadProjectViewEndpoint = "/ProductLine/LoadProjectView";
    //POST////////////
    I0.DefineAdminItemEndpoint = "/Application/DefineItem";
    I0.RemoveAdminItemEndpoint = "/Application/RemoveItem";
    I0.DefineItemEndpoint = "/ProductLine/DefineItem";
    I0.DefineRessourceEndpoint = "/ProductLine/DefineRessource";
    I0.DefineAssociationEndpoint = "/ProductLine/DefineAssociation";
    I0.AddAssociationEndpoint = "/ProductLine/AddAssociation";
    I0.RemoveItemEndpoint = "/ProductLine/RemoveItem";
    I0.RemoveAssociationEndpoint = "/ProductLine/RemoveAssociation";
})(I0 || (I0 = {}));
var I0;
(function (I0) {
    I0.AppSettingsMockUp = { name: "Demo Server" };
    I0.sessionMockUp = new I0.UserSessionViewModel();
    I0.sessionMockUp.Role = new I0.ItemViewModel("Super Admin", "1");
    I0.sessionMockUp.User = new I0.ItemViewModel("JohnDoe", "1");
    I0.sessionMockUp.CustomThemecolor1 = "#7c00ff";
    I0.sessionMockUp.CustomThemecolor2 = "#373240";
    I0.sessionMockUp.defaultProjectId = 1;
    I0.sessionMockUp.Token = "hjgukhjoilj";
    I0.sessionMockUp.Projects = new Array();
    I0.sessionMockUp.Projects.push(new I0.ItemViewModel("Server MockUp Demo", "44"));
    I0.sessionMockUp.Projects.push(new I0.ItemViewModel("Server Empty Test", "55"));
    I0.configExplorerMockUp = new I0.ExplorerViewModel(0);
    I0.configExplorerMockUp.MenuLists.push(new I0.ItemViewModelList());
    I0.configExplorerMockUp.MenuLists[0].Pool = new I0.ItemViewModel("Intranet", "0");
    I0.configExplorerMockUp.MenuLists[0].Items = new Array();
    I0.configExplorerMockUp.MenuLists[0].Items.push(new I0.ItemViewModel("MockUp Demo", "1"));
    I0.configExplorerMockUp.MenuLists[0].Items.push(new I0.ItemViewModel("Empty Test", "0"));
    I0.projectMockUp = new I0.ProjectViewModel();
    I0.projectMockUp.Project = new I0.ItemViewModel("MockUp Demo", "1");
    I0.projectMockUp.DashboardScreenVM = new I0.ScreenViewModel(I0.ExplorerEnumType.Home);
    I0.projectMockUp.DashboardScreenVM.Ressource = new I0.RessourceViewModel("", 0);
    I0.projectMockUp.DashboardScreenVM.CardLists.push(new I0.ItemViewModelList());
    I0.projectMockUp.DashboardScreenVM.CardLists[0].Items.push(new I0.ItemViewModel("RULES", "0", 140, 60));
    I0.projectMockUp.DashboardScreenVM.CardLists[0].Items.push(new I0.ItemViewModel("FEATURES", "0", 85, 19));
    I0.projectMockUp.DashboardScreenVM.CardLists[0].Items.push(new I0.ItemViewModel("USE CASES", "0", 33, 6));
    I0.projectMockUp.DashboardScreenVM.CardLists[0].Items.push(new I0.ItemViewModel("PROFILES", "0", 10, 0));
    I0.projectMockUp.DashboardScreenVM.HistoryLogList.Items.push(new I0.ItemViewModel("30/08/2019 21:21", "MockUp Test", 0, 0, "JohnDoe@mail.com"));
    I0.projectMockUp.DashboardScreenVM.HistoryLogList.Items[0].Summary = "Update Project";
    I0.projectMockUp.DashboardScreenVM.HistoryLogList.Items.push(new I0.ItemViewModel("30/08/2019 21:11", "Version X", 0, 0, "JohnDoe@mail.com"));
    I0.projectMockUp.DashboardScreenVM.HistoryLogList.Items[1].Summary = "Add Version";
    I0.projectMockUp.DashboardScreenVM.HistoryLogList.Items.push(new I0.ItemViewModel("30/08/2019 21:01", "Profile 4", 0, 0, "JohnDoe@mail.com"));
    I0.projectMockUp.DashboardScreenVM.HistoryLogList.Items[2].Summary = "Add Feature Profile";
    I0.projectMockUp.DashboardScreenVM.HistoryLogList.Items.push(new I0.ItemViewModel("30/06/2019 21:21", "MockUp Test", 0, 0, "JohnDoe@mail.com"));
    I0.projectMockUp.DashboardScreenVM.HistoryLogList.Items[3].Summary = "Update Project";
    I0.projectMockUp.DashboardScreenVM.HistoryLogList.Items.push(new I0.ItemViewModel("30/06/2019 20:11", "Version X", 0, 0, "JohnDoe@mail.com"));
    I0.projectMockUp.DashboardScreenVM.HistoryLogList.Items[4].Summary = "Add Version";
    I0.projectMockUp.DashboardScreenVM.HistoryLogList.Items.push(new I0.ItemViewModel("30/02/2019 11:01", "Profile 4", 0, 0, "JohnDoe@mail.com"));
    I0.projectMockUp.DashboardScreenVM.HistoryLogList.Items[5].Summary = "Add Feature Profile";
    I0.projectMockUp.DashboardScreenVM.DownloadList.Items.push(new I0.ItemViewModel("Download All (UCs + Concepts + Rules)", "1", 0, 0, "PDF Document"));
    I0.projectMockUp.DashboardScreenVM.DownloadList.Items.push(new I0.ItemViewModel("Download Use Cases", "2", 0, 0, "PDF Document"));
    I0.projectMockUp.DashboardScreenVM.DownloadList.Items.push(new I0.ItemViewModel("Download Business Rules", "3", 0, 0, "PDF Document"));
    I0.projectMockUp.DashboardScreenVM.DownloadList.Items.push(new I0.ItemViewModel("Download Business Layer Scaffold", "4", 0, 0, "Zip Archive (C#)"));
    I0.projectMockUp.DashboardScreenVM.DownloadList.Items.push(new I0.ItemViewModel("Download Configuration Files", "5", 0, 0, "Zip Archive (Xml)"));
    I0.projectMockUp.DashboardScreenVM.DownloadList.Items.push(new I0.ItemViewModel("Download Use Cases Links", "6", 0, 0, "Markdown document"));
    I0.projectMockUp.DashboardScreenVM.DownloadList.Items.push(new I0.ItemViewModel("Download Features Links", "7", 0, 0, "Markdown document"));
    I0.projectMockUp.DashboardScreenVM.DownloadList.Items.push(new I0.ItemViewModel("Download Project Backup", "7", 0, 0, "Zip Archive (JSON)"));
    I0.projectMockUp.HistoryMarkerList.Items.push(new I0.ItemViewModel("V0.0 #Demo", "1", 2019, 12));
    I0.projectMockUp.HistoryMarkerList.Items.push(new I0.ItemViewModel("V0.1 #MVP", "2", 2020, 5));
    I0.projectMockUp.HistoryMarkerList.Items.push(new I0.ItemViewModel("V0.2 #MilkyWay", "3", 2020, 9));
    I0.projectMockUp.HistoryMarkerList.Items.push(new I0.ItemViewModel("V0.3 #Blue", "4", 2020, 12));
    I0.projectMockUp.HistoryMarkerList.Items.push(new I0.ItemViewModel("V0.4 #ReadyRed", "5", 2021, 6));
    I0.projectMockUp.HistoryMarkerList.Items.push(new I0.ItemViewModel("V0.5 #Lux", "6", 2022, 1));
    I0.projectMockUp.ScopeProfiles = new Array();
    I0.projectMockUp.ScopeProfiles.push(new I0.ItemViewModel("Profile Demo", "10", 20, 19, "DEM"));
    I0.projectMockUp.ScopeProfiles.push(new I0.ItemViewModel("Profile 1", "1", 33, 18, "PR1"));
    I0.projectMockUp.ScopeProfiles.push(new I0.ItemViewModel("Profile 2", "2", 36, 15, "PR2"));
    I0.projectMockUp.ScopeProfiles.push(new I0.ItemViewModel("Profile 3", "3", 38, 13, "PR3"));
    I0.projectMockUp.ScopeProfiles.push(new I0.ItemViewModel("Profile 4", "4", 38, 13, "PR4"));
    I0.projectMockUp.ScopeProfiles.push(new I0.ItemViewModel("Profile 5", "5", 44, 13, "PR5"));
    I0.projectMockUp.ScopeProfiles.push(new I0.ItemViewModel("Profile 6", "6", 44, 11, "PR6"));
    I0.projectMockUp.ScopeProfiles.push(new I0.ItemViewModel("Profile 7", "7", 47, 4, "PR7"));
    I0.projectMockUp.ScopeProfiles.push(new I0.ItemViewModel("Profile 8", "8", 55, 4, "PR8"));
    I0.projectMockUp.ScopeProfiles.push(new I0.ItemViewModel("Profile 9", "9", 66, 4, "PR9"));
    I0.projectMockUp.MarketExplorerVM = new I0.ExplorerViewModel(I0.ExplorerEnumType.Market);
    I0.projectMockUp.MarketExplorerVM.MenuLists.push(new I0.ItemViewModelList());
    I0.projectMockUp.MarketExplorerVM.MenuLists[0].Pool = new I0.ItemViewModel("Spreadsheet", "1");
    I0.projectMockUp.MarketExplorerVM.MenuLists[0].Items = new Array();
    I0.projectMockUp.MarketExplorerVM.MenuLists[0].Items.push(new I0.ItemViewModel("Excel", "1"));
    I0.projectMockUp.MarketExplorerVM.MenuLists[0].Items.push(new I0.ItemViewModel("Google Sheets", "2"));
    I0.projectMockUp.MarketExplorerVM.MenuLists[0].Items.push(new I0.ItemViewModel("Zoho Sheet", "3"));
    I0.projectMockUp.MarketExplorerVM.MenuLists.push(new I0.ItemViewModelList());
    I0.projectMockUp.MarketExplorerVM.MenuLists[1].Pool = new I0.ItemViewModel("Outsiders", "99");
    I0.projectMockUp.MarketExplorerVM.MenuLists[1].Items = new Array();
    I0.projectMockUp.MarketExplorerVM.MenuLists[1].Items.push(new I0.ItemViewModel("Quip", "4"));
    I0.projectMockUp.PersonaExplorerVM = new I0.ExplorerViewModel(I0.ExplorerEnumType.Persona);
    I0.projectMockUp.PersonaExplorerVM.MenuLists.push(new I0.ItemViewModelList());
    I0.projectMockUp.PersonaExplorerVM.MenuLists[0].Pool = new I0.ItemViewModel("Primary", "1");
    I0.projectMockUp.PersonaExplorerVM.MenuLists[0].Items = new Array();
    I0.projectMockUp.PersonaExplorerVM.MenuLists[0].Items.push(new I0.ItemViewModel("Financial Controller", "1"));
    I0.projectMockUp.PersonaExplorerVM.MenuLists[0].Items.push(new I0.ItemViewModel("Financial Analyst", "2"));
    I0.projectMockUp.PersonaExplorerVM.MenuLists.push(new I0.ItemViewModelList());
    I0.projectMockUp.PersonaExplorerVM.MenuLists[1].Pool = new I0.ItemViewModel("Secondary", "2");
    I0.projectMockUp.PersonaExplorerVM.MenuLists[1].Items = new Array();
    I0.projectMockUp.PersonaExplorerVM.MenuLists[1].Items.push(new I0.ItemViewModel("Help Desk Specialist", "3"));
    I0.projectMockUp.PersonaExplorerVM.MenuLists.push(new I0.ItemViewModelList());
    I0.projectMockUp.PersonaExplorerVM.MenuLists[2].Pool = new I0.ItemViewModel("System", "99");
    I0.projectMockUp.PersonaExplorerVM.MenuLists[2].Items = new Array();
    I0.projectMockUp.PersonaExplorerVM.MenuLists[2].Items.push(new I0.ItemViewModel("Default User", "4"));
    I0.projectMockUp.PersonaExplorerVM.MenuLists[2].Items.push(new I0.ItemViewModel("Admin", "5"));
    I0.projectMockUp.RequirementExplorerVM = new I0.ExplorerViewModel(I0.ExplorerEnumType.Requirement);
    I0.projectMockUp.RequirementExplorerVM.MenuLists.push(new I0.ItemViewModelList());
    I0.projectMockUp.RequirementExplorerVM.MenuLists[0].Pool = new I0.ItemViewModel("Infrastructure", "99");
    I0.projectMockUp.RequirementExplorerVM.MenuLists[0].Items = new Array();
    I0.projectMockUp.RequirementExplorerVM.MenuLists[0].Items.push(new I0.ItemViewModel("Log Into Application", "1"));
    I0.projectMockUp.RequirementExplorerVM.MenuLists[0].Items.push(new I0.ItemViewModel("Reset Password", "2"));
    I0.projectMockUp.DomainExplorerVM = new I0.ExplorerViewModel(I0.ExplorerEnumType.Domain);
    I0.projectMockUp.DomainExplorerVM.MenuLists.push(new I0.ItemViewModelList());
    I0.projectMockUp.DomainExplorerVM.MenuLists[0].Pool = new I0.ItemViewModel("Finance", "98");
    I0.projectMockUp.DomainExplorerVM.MenuLists[0].Items = new Array();
    I0.projectMockUp.DomainExplorerVM.MenuLists[0].Items.push(new I0.ItemViewModel("Concept 1", "3"));
    I0.projectMockUp.DomainExplorerVM.MenuLists[0].Items.push(new I0.ItemViewModel("Concept 2", "4"));
    I0.projectMockUp.RoadMapExplorerVM = new I0.ExplorerViewModel(I0.ExplorerEnumType.Roadmap);
    I0.projectMockUp.RoadMapExplorerVM.MenuLists.push(new I0.ItemViewModelList());
    I0.projectMockUp.RoadMapExplorerVM.MenuLists[0].Pool = new I0.ItemViewModel("Product X", "97");
    I0.projectMockUp.RoadMapExplorerVM.MenuLists[0].Items = new Array();
    I0.projectMockUp.RoadMapExplorerVM.MenuLists[0].Items.push(new I0.ItemViewModel("Version 1", "5"));
    I0.projectMockUp.RoadMapExplorerVM.MenuLists[0].Items.push(new I0.ItemViewModel("Version 2", "6"));
    I0.competitorScreenMockUp = new I0.ScreenViewModel(I0.ExplorerEnumType.Market);
    I0.competitorScreenMockUp.Ressource = new I0.RessourceViewModel("Excel", 0);
    I0.competitorScreenMockUp.Ressource.ManagerId = 97;
    I0.competitorScreenMockUp.Ressource.StatusEnumType = I0.StatusEnumType.Finalised;
    I0.competitorScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.competitorScreenMockUp.CardLists[0].Items.push(new I0.ItemViewModel("POSITIONING", "123"));
    I0.competitorScreenMockUp.CardLists[0].Items[0].Summary = "Industry standard for managing basic business processes";
    I0.competitorScreenMockUp.CardLists[0].Items.push(new I0.ItemViewModel("STRENGTH", "123"));
    I0.competitorScreenMockUp.CardLists[0].Items[1].Summary = "(+) Most Popular Spreadsheet\n(-) Lorem Ipsum\n...";
    I0.competitorScreenMockUp.CardLists[0].Items.push(new I0.ItemViewModel("REVIEWS", "123"));
    I0.competitorScreenMockUp.CardLists[0].Items[2].Summary = "...";
    I0.competitorScreenMockUp.CardLists[0].Items.push(new I0.ItemViewModel("VENDOR", "123"));
    I0.competitorScreenMockUp.CardLists[0].Items[3].Summary = "@fa:link:fa@ @link: https://products.office.com/en/excel @link@Website:link@\n@fa:money-bill-wave:fa@ $8.25 user/month";
    I0.competitorScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.competitorScreenMockUp.CardLists[1].PoolDef = new I0.RessourceViewModel("Easy to Use", 123);
    I0.competitorScreenMockUp.CardLists[1].Items.push(new I0.ItemViewModel("Can Do Everything UI", "123"));
    I0.competitorScreenMockUp.CardLists[1].Items.push(new I0.ItemViewModel("Designed for novice and experts", "124"));
    I0.competitorScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.competitorScreenMockUp.CardLists[2].PoolDef = new I0.RessourceViewModel("Error Protection", 123);
    I0.competitorScreenMockUp.CardLists[2].Items.push(new I0.ItemViewModel("Undo & Redo Typing", "123"));
    I0.competitorScreenMockUp.CardLists[2].Items.push(new I0.ItemViewModel("Wrong Data AutoCorrected", "124"));
    I0.competitorScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.competitorScreenMockUp.CardLists[3].PoolDef = new I0.RessourceViewModel("Strong Productivity", 123);
    I0.competitorScreenMockUp.CardLists[3].Items.push(new I0.ItemViewModel("Optimised Keyboard inputting", "123"));
    I0.competitorScreenMockUp.CardLists[3].Items.push(new I0.ItemViewModel("Predefined Formula Library", "124"));
    I0.competitorScreenMockUp.CardLists[3].Items.push(new I0.ItemViewModel("Macro automation", "124"));
    I0.competitorScreenMockUp.CardOptionLists.push(new I0.ItemViewModelList());
    I0.competitorScreenMockUp.HistoryLogList.Items.push(new I0.ItemViewModel("30/02/2019 11:01", "xxx x", 0, 0, "JohnDoe@mail.com"));
    I0.competitorScreenMockUp.HistoryLogList.Items[0].Summary = "Add Best Parctice Easy to Use";
    I0.competitorScreenMockUp.DownloadList.Items.push(new I0.ItemViewModel("Download Competitor", "1", 0, 0, "PDF Document"));
    I0.personaScreenMockUp = new I0.ScreenViewModel(I0.ExplorerEnumType.Market);
    I0.personaScreenMockUp.Ressource = new I0.RessourceViewModel("Financial Controller", 0);
    I0.personaScreenMockUp.Ressource.ManagerId = 97;
    I0.personaScreenMockUp.Ressource.StatusEnumType = I0.StatusEnumType.Finalised;
    I0.personaScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.personaScreenMockUp.CardLists[0].Items.push(new I0.ItemViewModel("GOALS", "123"));
    I0.personaScreenMockUp.CardLists[0].Items[0].Summary = "Analyze financial data\nPrepare financial reports\nManage invoicing\n...";
    I0.personaScreenMockUp.CardLists[0].Items.push(new I0.ItemViewModel("DISLIKES", "123"));
    I0.personaScreenMockUp.CardLists[0].Items[1].Summary = "Inconsistent data entry \nInaccurate reporting\n...";
    I0.personaScreenMockUp.CardLists[0].Items.push(new I0.ItemViewModel("SOFTWARE", "123"));
    I0.personaScreenMockUp.CardLists[0].Items[2].Summary = "Excel\nSAP / Sage / Treasury / Accounting software\n...";
    I0.personaScreenMockUp.CardLists[0].Items.push(new I0.ItemViewModel("USER ANALYTICS", "123"));
    I0.personaScreenMockUp.CardLists[0].Items[3].Summary = "@fa:chart-pie:fa@ 20%\n@fa:business-time:fa@ ~ 20m\n@fa:thermometer-full:fa@ max. 1h30";
    I0.personaScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.personaScreenMockUp.CardLists[1].PoolDef = new I0.RessourceViewModel("Want to Have Quick Access to Most Used Features so that I improve my productivity and stay alerted", 123);
    I0.personaScreenMockUp.CardLists[1].Items.push(new I0.ItemViewModel("Given I want to use an important feature When I Navigate to Start Screen Then I access feature in one click", "123"));
    I0.personaScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.personaScreenMockUp.CardLists[2].PoolDef = new I0.RessourceViewModel("Want to Compare Costing With Invoices so that I manage error and fault tolerance", 123);
    I0.personaScreenMockUp.CardLists[2].Items.push(new I0.ItemViewModel("Given Invoices When No difference with costs exists Then I approve purchase completion", "123"));
    I0.personaScreenMockUp.CardOptionLists.push(new I0.ItemViewModelList());
    I0.personaScreenMockUp.HistoryLogList.Items.push(new I0.ItemViewModel("30/02/2019 11:01", "xxx x", 0, 0, "JohnDoe@mail.com"));
    I0.personaScreenMockUp.HistoryLogList.Items[0].Summary = "Add Best Parctice Easy to Use";
    I0.personaScreenMockUp.DownloadList.Items.push(new I0.ItemViewModel("Download persona", "1", 0, 0, "PDF Document"));
    I0.UCScreenMockUp = new I0.ScreenViewModel(I0.ExplorerEnumType.Requirement);
    I0.UCScreenMockUp.Ressource = new I0.RessourceViewModel("Log Into Application", 0);
    I0.UCScreenMockUp.Ressource.ManagerId = 99;
    I0.UCScreenMockUp.Ressource.StatusEnumType = I0.StatusEnumType.Draft;
    I0.UCScreenMockUp.Ressource.Definition = "{ \"Context\": \"Game Context\", \"Scope\": 1, \"Level\": 1,\n\"Before\": \"Game Ready\", \"Success\": \"You win\", \"Failure\": \"Game Over\",\n\"Actors\": \"Player 1\", \"Start\": \"Start\"}";
    I0.UCScreenMockUp.Ressource.ScaleOrder = 1;
    I0.UCScreenMockUp.Ressource.StepOrder = 1;
    I0.UCScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.UCScreenMockUp.CardLists[0].Items.push(new I0.ItemViewModel("NORMAL FLOW", "123"));
    I0.UCScreenMockUp.CardLists[0].Items[0].Summary = "1. Show Login Form\n2. Check Login and Password :\n2.1 Check Completness\n2.2 Check Authentication Validity\n2.3 Check User Account Activation\n3. Show Homepage";
    I0.UCScreenMockUp.CardLists[0].Items.push(new I0.ItemViewModel("EXTENSIONS", "123"));
    I0.UCScreenMockUp.CardLists[0].Items[1].Summary = "2.A User needs Temporary Password : Show Temporary Password Request Form\n2.1.A Login or Password are missing : Show error message\n2.2.A Unknown Login : Empty Password Field\n2.2.B Invalid Password : Empty Password Field\n2.3.A User Account is Desactivated : Empty Password Field\n2.3.B Password Validity Period Is Ended : Empty Password Field\n3.A Specific Landing Page browsed by User : Show Specific Page\n3.A Password Validity Period Is Ending Soon : Show Reset Password Form";
    I0.UCScreenMockUp.CardLists[0].Items.push(new I0.ItemViewModel("SUB-VARIATIONS", "123"));
    I0.UCScreenMockUp.CardLists[0].Items[2].Summary = "1. Parameter [Auth: SSO, SSO+AD] and Valid Authentication Token (Provided by Identity Provider UCs, not treated here) : Show Homepage\n1. Parameter [Auth: SSO] and No Valid Authentication Token : Redirect to Identity Provider Login Page\n1. Parameter [Auth: SSO+AD] and No Valid Authentication Token : Show Login Form with Link Redirecting to Identity Provider Login Page";
    I0.UCScreenMockUp.CardLists[0].Items.push(new I0.ItemViewModel("CONDITIONS", "123"));
    I0.UCScreenMockUp.CardLists[0].Items[3].Summary = "@fa:user-friends:fa@ Default User, Autorisation Server\n@fa:flag:fa@ User is Logout\n@fa:trophy:fa@ User is Connected to application\n@fa:ban:fa@ User is Logout\n@fa:flag-checkered:fa@ User Browse to Website";
    I0.UCScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.UCScreenMockUp.CardLists[1].PoolDef = new I0.RessourceViewModel("LOGIN FORM", 123);
    I0.UCScreenMockUp.CardLists[1].PoolDef.DependencyList.push(new I0.AssociationViewModel());
    I0.UCScreenMockUp.CardLists[1].PoolDef.DependencyList[0].AssociationId = 33;
    I0.UCScreenMockUp.CardLists[1].PoolDef.DependencyList[0].ChildName = "Password Age Validity";
    I0.UCScreenMockUp.CardLists[1].PoolDef.DependencyList[0].ContractResponsibility = "Check Password";
    I0.UCScreenMockUp.CardLists[1].PoolDef.DependencyList.push(new I0.AssociationViewModel());
    I0.UCScreenMockUp.CardLists[1].PoolDef.DependencyList[1].AssociationId = 44;
    I0.UCScreenMockUp.CardLists[1].PoolDef.DependencyList[1].ChildName = "Temporary Password Age Validity";
    I0.UCScreenMockUp.CardLists[1].PoolDef.DependencyList[1].ContractResponsibility = "Check TemporaryPassword";
    I0.UCScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.UCScreenMockUp.CardLists[2].PoolDef = new I0.RessourceViewModel("RESET FORM", 123);
    I0.UCScreenMockUp.CardLists[2].PoolDef.DependencyList.push(new I0.AssociationViewModel());
    I0.UCScreenMockUp.CardLists[2].PoolDef.DependencyList[0].AssociationId = 77;
    I0.UCScreenMockUp.CardLists[2].PoolDef.DependencyList[0].ChildName = "Identity";
    I0.UCScreenMockUp.CardLists[2].PoolDef.DependencyList[0].ContractResponsibility = "Set TemporaryPassword On MailAccount";
    I0.UCScreenMockUp.CardLists[2].PoolDef.DependencyList.push(new I0.AssociationViewModel());
    I0.UCScreenMockUp.CardLists[2].PoolDef.DependencyList[1].AssociationId = 88;
    I0.UCScreenMockUp.CardLists[2].PoolDef.DependencyList[1].ChildName = "Password Reset Period Validity";
    I0.UCScreenMockUp.CardLists[2].PoolDef.DependencyList[1].ContractResponsibility = "Check MailAccount Can be reset";
    I0.UCScreenMockUp.CardOptionLists.push(new I0.ItemViewModelList());
    I0.UCScreenMockUp.CardOptionLists[0].Items = new Array();
    I0.UCScreenMockUp.CardOptionLists[0].Items.push(new I0.ItemViewModel("Concept X SubConcept 1", "44"));
    I0.UCScreenMockUp.CardOptionLists[0].Items.push(new I0.ItemViewModel("Concept X SubConcept 2", "55"));
    I0.UCScreenMockUp.CardOptionLists[0].Items.push(new I0.ItemViewModel("Concept Y SubConcept 1", "66"));
    I0.UCScreenMockUp.HistoryLogList.Items.push(new I0.ItemViewModel("30/02/2019 11:01", "Feature ZD", 0, 0, "JohnDoe@mail.com"));
    I0.UCScreenMockUp.HistoryLogList.Items[0].Summary = "Add Feature";
    I0.UCScreenMockUp.DownloadList.Items.push(new I0.ItemViewModel("Download Use Case", "1", 0, 0, "PDF Document"));
    I0.UCScreenMockUp.DownloadList.Items.push(new I0.ItemViewModel("Download Features", "2", 0, 0, "PDF Document"));
    I0.UCScreenMockUp.DownloadList.Items.push(new I0.ItemViewModel("Download Use Case", "7", 0, 0, "Markdown document"));
    I0.UCScreenMockUp.DownloadList.Items.push(new I0.ItemViewModel("Download Features", "8", 0, 0, "Markdown document"));
    I0.conceptScreenMockUp = new I0.ScreenViewModel(I0.ExplorerEnumType.Domain);
    I0.conceptScreenMockUp.Ressource = new I0.RessourceViewModel("Concept 1", 0);
    I0.conceptScreenMockUp.Ressource.ManagerId = 98;
    I0.conceptScreenMockUp.Ressource.StatusEnumType = I0.StatusEnumType.Draft;
    I0.conceptScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.conceptScreenMockUp.CardLists[0].Items.push(new I0.ItemViewModel("DEFINITION", "123"));
    I0.conceptScreenMockUp.CardLists[0].Items[0].Summary = "Lorem ipsum dolor sit amet consectetuer Lorem ipsum dolor sit amet consectetuer:\nLorem ipsum dolor sit amet consectetuer Lorem ipsum dolor sit amet consectetuer Lorem ipsum dolor sit amet consectetuer\nLorem ipsum dolor sit amet consectetuer";
    I0.conceptScreenMockUp.CardLists[0].Items.push(new I0.ItemViewModel("RESPONSIBILITIES", "123"));
    I0.conceptScreenMockUp.CardLists[0].Items[1].Summary = "Concept : sss()\nSubConceptA : wwww()\nSubConceptA : kdkd()\nSubConceptA : pp()\nSubConceptB : mmm()\nSubConceptB : aaa()\nSubConceptB : ppp()";
    I0.conceptScreenMockUp.CardLists[0].Items.push(new I0.ItemViewModel("ENTITIES", "123"));
    I0.conceptScreenMockUp.CardLists[0].Items[2].Summary = "* High Level ConceptG\n* SubConceptR\n* SubConceptL\n1 SubConceptP\n1 SubConceptE";
    I0.conceptScreenMockUp.CardLists[0].Items.push(new I0.ItemViewModel("AGGREGATES", "123"));
    I0.conceptScreenMockUp.CardLists[0].Items[3].Summary = "High Level ConceptZ\nHigh Level ConceptD";
    I0.conceptScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.conceptScreenMockUp.CardLists[1].PoolDef = new I0.RessourceViewModel("STORAGE", 123);
    I0.conceptScreenMockUp.CardLists[1].Items.push(new I0.ItemViewModel("<Strategy Documents> MUST BE STORED IN 1 <Global Library>", "123"));
    I0.conceptScreenMockUp.CardLists[1].Items.push(new I0.ItemViewModel("<Strategy Documents> MUST BE STORED IN MANY <Specific Library>", "124"));
    I0.conceptScreenMockUp.CardLists[1].Items[1].ScopeLists.push(["PR4", "PR7", "PR8"]);
    I0.conceptScreenMockUp.HistoryLogList.Items.push(new I0.ItemViewModel("30/02/2019 11:01", "Concept DD", 0, 0, "JohnDoe@mail.com"));
    I0.conceptScreenMockUp.HistoryLogList.Items[0].Summary = "Add SubConcept";
    I0.conceptScreenMockUp.DownloadList.Items.push(new I0.ItemViewModel("Download Rules", "1", 0, 0, "PDF Document"));
    I0.conceptScreenMockUp.DownloadList.Items.push(new I0.ItemViewModel("Download Rules", "7", 0, 0, "Markdown document"));
    I0.conceptScreenMockUp.CardOptionLists.push(new I0.ItemViewModelList());
    I0.conceptScreenMockUp.CardOptionLists[0].Items = new Array();
    I0.conceptScreenMockUp.CardOptionLists[0].Items.push(new I0.ItemViewModel("Concept O", "44"));
    I0.conceptScreenMockUp.CardOptionLists[0].Items.push(new I0.ItemViewModel("Concept O SubConcept 1", "44"));
    I0.conceptScreenMockUp.CardOptionLists[0].Items.push(new I0.ItemViewModel("Concept O SubConcept 2", "55"));
    I0.conceptScreenMockUp.CardOptionLists[0].Items.push(new I0.ItemViewModel("Concept T", "64"));
    I0.conceptScreenMockUp.CardOptionLists[0].Items.push(new I0.ItemViewModel("Concept T SubConcept 5", "74"));
    I0.conceptScreenMockUp.CardOptionLists[0].Items.push(new I0.ItemViewModel("Concept T SubConcept 7", "85"));
    I0.roadmapScreenMockUp = new I0.ScreenViewModel(I0.ExplorerEnumType.Roadmap);
    I0.roadmapScreenMockUp.Ressource = new I0.RessourceViewModel("Demo", 0);
    I0.roadmapScreenMockUp.Ressource.ManagerId = 97;
    I0.roadmapScreenMockUp.Ressource.StatusEnumType = I0.StatusEnumType.Finalised;
    I0.roadmapScreenMockUp.Ressource.DateDetail1 = [2, 1, 2020];
    I0.roadmapScreenMockUp.Ressource.DateDetail2 = [9, 1, 2020];
    I0.roadmapScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.roadmapScreenMockUp.CardLists[0].Items.push(new I0.ItemViewModel("GOALS", "123"));
    I0.roadmapScreenMockUp.CardLists[0].Items[0].Summary = "Improve Reliability : no deadlock when simoutaneous process X & Y\nImprove Performance : Transaction Y < 1 Sec.\nReplace [Profile Z] old Version\nWorking Continuous Integration";
    I0.roadmapScreenMockUp.CardLists[0].Items.push(new I0.ItemViewModel("RISKS", "123"));
    I0.roadmapScreenMockUp.CardLists[0].Items[1].Summary = "UI Change Management\nMandatory Password Reset Confusion\nCache latency during workflow Z";
    I0.roadmapScreenMockUp.CardLists[0].Items.push(new I0.ItemViewModel("TEAMS", "123"));
    I0.roadmapScreenMockUp.CardLists[0].Items[2].Summary = "Profile 3, 4 Dev Teams \nProfile 5 Dev Team \nProfile 7 Support Team";
    I0.roadmapScreenMockUp.CardLists[0].Items.push(new I0.ItemViewModel("TIMELINE (INTERNAL)", "123"));
    I0.roadmapScreenMockUp.CardLists[0].Items[3].Summary = "@fa:calendar-alt:fa@ 01/2020 \nEpic 1 \nChanges \n@fa:calendar-check:fa@ 06/2020";
    I0.roadmapScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.roadmapScreenMockUp.CardLists[1].PoolDef = new I0.RessourceViewModel("EPIC 1 FEATURE SET", 123);
    I0.roadmapScreenMockUp.CardLists[1].PoolDef.DependencyList.push(new I0.AssociationViewModel());
    I0.roadmapScreenMockUp.CardLists[1].PoolDef.DependencyList[0].ChildName = "Login Form";
    I0.roadmapScreenMockUp.CardLists[1].PoolDef.DependencyList[0].ContractResponsibility = "Make it";
    I0.roadmapScreenMockUp.CardLists[1].PoolDef.DependencyList.push(new I0.AssociationViewModel());
    I0.roadmapScreenMockUp.CardLists[1].PoolDef.DependencyList[1].ChildName = "Library";
    I0.roadmapScreenMockUp.CardLists[1].PoolDef.DependencyList[1].ContractResponsibility = "POC it, Make it";
    I0.roadmapScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.roadmapScreenMockUp.CardLists[2].PoolDef = new I0.RessourceViewModel("CHANGE SET", 123);
    I0.roadmapScreenMockUp.CardLists[2].PoolDef.DependencyList.push(new I0.AssociationViewModel());
    I0.roadmapScreenMockUp.CardLists[2].PoolDef.DependencyList[0].AssociationId = 111;
    I0.roadmapScreenMockUp.CardLists[2].PoolDef.DependencyList[0].ChildName = "Home Screen";
    I0.roadmapScreenMockUp.CardLists[2].PoolDef.DependencyList[0].ContractResponsibility = "Responsiveness ++";
    I0.roadmapScreenMockUp.CardLists[2].PoolDef.DependencyList.push(new I0.AssociationViewModel());
    I0.roadmapScreenMockUp.CardLists[2].PoolDef.DependencyList[1].AssociationId = 222;
    I0.roadmapScreenMockUp.CardLists[2].PoolDef.DependencyList[1].ChildName = "SSO Support";
    I0.roadmapScreenMockUp.CardLists[2].PoolDef.DependencyList[1].ContractResponsibility = "New IP Support";
    I0.roadmapScreenMockUp.CardOptionLists.push(new I0.ItemViewModelList());
    I0.roadmapScreenMockUp.CardOptionLists[0].Items = new Array();
    I0.roadmapScreenMockUp.CardOptionLists[0].Items.push(new I0.ItemViewModel("Feature X", "FeatureId"));
    I0.roadmapScreenMockUp.CardOptionLists[0].Items.push(new I0.ItemViewModel("Feature Y", "FeatureId"));
    I0.roadmapScreenMockUp.CardOptionLists[0].Items.push(new I0.ItemViewModel("Feature Z", "FeatureId"));
    I0.roadmapScreenMockUp.HistoryLogList.Items.push(new I0.ItemViewModel("30/02/2019 11:01", "Version 0.0.1", 0, 0, "JohnDoe@mail.com"));
    I0.roadmapScreenMockUp.HistoryLogList.Items[0].Summary = "Add Feature Set";
    I0.roadmapScreenMockUp.DownloadList.Items.push(new I0.ItemViewModel("Download Version", "1", 0, 0, "PDF Document"));
    I0.roadmapScreenMockUp.DownloadList.Items.push(new I0.ItemViewModel("Download Version", "7", 0, 0, "Markdown document"));
    I0.featureMatrixExplorerMockUp = new I0.ScreenViewModel(I0.ExplorerEnumType.Matrix);
    I0.featureMatrixExplorerMockUp.Ressource = new I0.RessourceViewModel("Features Comparison", 0);
    I0.featureMatrixExplorerMockUp.Ressource.ScaleOrder = 2;
    I0.featureMatrixExplorerMockUp.Ressource.ManagerId = -1;
    I0.featureMatrixExplorerMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.featureMatrixExplorerMockUp.CardLists[0].Pool = new I0.ItemViewModel("Business Process U", "-1", 0, 0, "ConceptX");
    I0.featureMatrixExplorerMockUp.CardLists[0].Items.push(new I0.ItemViewModel("Feature A", "123", 100, (Math.random() > 0.5 ? 0 : 100), "1"));
    I0.featureMatrixExplorerMockUp.CardLists[0].Items[0].ScopeLists.push(["PR1", "PR2", "PR3"]);
    I0.featureMatrixExplorerMockUp.CardLists[0].Items.push(new I0.ItemViewModel("Feature B", "124", 100, (Math.random() > 0.5 ? 0 : 100), "2"));
    I0.featureMatrixExplorerMockUp.CardLists[0].Items[1].ScopeLists.push(["PRDemo", "PR1", "PR3", "PR5", "PR7", "PR8"]);
    I0.featureMatrixExplorerMockUp.CardLists[0].Items.push(new I0.ItemViewModel("Feature C", "124", 100, (Math.random() > 0.5 ? 0 : 100), "3"));
    I0.featureMatrixExplorerMockUp.CardLists[0].Items[2].ScopeLists.push(["PRDemo", "PR2", "PR4", "PR5", "PR7", "PR9"]);
    I0.featureMatrixExplorerMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.featureMatrixExplorerMockUp.CardLists[1].Pool = new I0.ItemViewModel("Business Process P", "ConceptId", 0, 0, "ConceptX");
    I0.featureMatrixExplorerMockUp.CardLists[1].Items.push(new I0.ItemViewModel("Feature D", "124", 100, (Math.random() > 0.5 ? 0 : 100), "1"));
    I0.featureMatrixExplorerMockUp.CardLists[1].Items[0].ScopeLists.push(["PRDemo", "PR9", "PR8"]);
    I0.featureMatrixExplorerMockUp.CardOptionLists.push(new I0.ItemViewModelList());
    I0.featureMatrixExplorerMockUp.CardOptionLists[0].Items = new Array();
    I0.featureMatrixExplorerMockUp.CardLists.push(I0.featureMatrixExplorerMockUp.CardLists[0]);
    I0.featureMatrixExplorerMockUp.CardLists.push(I0.featureMatrixExplorerMockUp.CardLists[0]);
    I0.featureMatrixExplorerMockUp.CardLists.push(I0.featureMatrixExplorerMockUp.CardLists[0]);
    I0.featureMatrixExplorerMockUp.CardLists.push(I0.featureMatrixExplorerMockUp.CardLists[0]);
    I0.featureMatrixExplorerMockUp.CardLists.push(I0.featureMatrixExplorerMockUp.CardLists[0]);
    I0.featureMatrixExplorerMockUp.CardLists.push(I0.featureMatrixExplorerMockUp.CardLists[0]);
    I0.featureMatrixExplorerMockUp.CardLists.push(I0.featureMatrixExplorerMockUp.CardLists[0]);
    I0.featureMatrixExplorerMockUp.CardLists.push(I0.featureMatrixExplorerMockUp.CardLists[0]);
    I0.featureMatrixExplorerMockUp.CardLists.push(I0.featureMatrixExplorerMockUp.CardLists[0]);
    I0.featureMatrixExplorerMockUp.CardLists.push(I0.featureMatrixExplorerMockUp.CardLists[0]);
    I0.ruleMatrixExplorerMockUp = new I0.ScreenViewModel(I0.ExplorerEnumType.Matrix);
    I0.ruleMatrixExplorerMockUp.Ressource = new I0.RessourceViewModel("Business Rules Comparison", 0);
    I0.ruleMatrixExplorerMockUp.Ressource.ScaleOrder = 1;
    I0.ruleMatrixExplorerMockUp.Ressource.ManagerId = -1;
    I0.ruleMatrixExplorerMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.ruleMatrixExplorerMockUp.CardLists[0].Pool = new I0.ItemViewModel("SubConceptA", "ConceptId", 100, (Math.random() > 0.5 ? 0 : 100), "ConceptX");
    I0.ruleMatrixExplorerMockUp.CardLists[0].Items.push(new I0.ItemViewModel("<SubConceptA> MUST CONTAINS <ConstraintX>", "123", 0, 0, "A"));
    I0.ruleMatrixExplorerMockUp.CardLists[0].Items[0].ScopeLists.push(["PR1", "PR2", "PR3"]);
    I0.ruleMatrixExplorerMockUp.CardLists[0].Items.push(new I0.ItemViewModel("<SubConceptA> MUST CONTAINS <ConstraintY>", "124", 0, 0, "B"));
    I0.ruleMatrixExplorerMockUp.CardLists[0].Items[1].ScopeLists.push(["PRDemo", "PR7", "PR8"]);
    I0.ruleMatrixExplorerMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.ruleMatrixExplorerMockUp.CardLists[1].Pool = new I0.ItemViewModel("SubConceptB", "ConceptId", 100, (Math.random() > 0.5 ? 0 : 100), "ConceptX");
    I0.ruleMatrixExplorerMockUp.CardLists[1].Items.push(new I0.ItemViewModel("<SubConceptB> MUST BE IN LIST <A, B, C>", "124", 0, 0, "A"));
    I0.ruleMatrixExplorerMockUp.CardLists[1].Items[0].ScopeLists.push(["PRDemo", "PR7", "PR8"]);
    I0.ruleMatrixExplorerMockUp.CardLists.push(I0.ruleMatrixExplorerMockUp.CardLists[0]);
    I0.ruleMatrixExplorerMockUp.CardLists.push(I0.ruleMatrixExplorerMockUp.CardLists[0]);
    I0.ruleMatrixExplorerMockUp.CardLists.push(I0.ruleMatrixExplorerMockUp.CardLists[0]);
    I0.ruleMatrixExplorerMockUp.CardLists.push(I0.ruleMatrixExplorerMockUp.CardLists[0]);
    I0.ruleMatrixExplorerMockUp.CardLists.push(I0.ruleMatrixExplorerMockUp.CardLists[0]);
    I0.ruleMatrixExplorerMockUp.CardLists.push(I0.ruleMatrixExplorerMockUp.CardLists[0]);
    I0.ruleMatrixExplorerMockUp.CardLists.push(I0.ruleMatrixExplorerMockUp.CardLists[0]);
    I0.ruleMatrixExplorerMockUp.CardLists.push(I0.ruleMatrixExplorerMockUp.CardLists[0]);
    I0.ruleMatrixExplorerMockUp.CardLists.push(I0.ruleMatrixExplorerMockUp.CardLists[0]);
    I0.ruleMatrixExplorerMockUp.CardLists.push(I0.ruleMatrixExplorerMockUp.CardLists[0]);
    I0.ruleMatrixExplorerMockUp.CardLists.push(I0.ruleMatrixExplorerMockUp.CardLists[0]);
    I0.adminScreenMockUp = new I0.ScreenViewModel(I0.ExplorerEnumType.MenuUserAdmin);
    I0.adminScreenMockUp.Ressource = new I0.RessourceViewModel("User Management", 0);
    I0.adminScreenMockUp.CardLists.push(new I0.ItemViewModelList()); //no header
    I0.adminScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.adminScreenMockUp.CardLists[1].PoolDef = new I0.RessourceViewModel("Product Manager", 123);
    I0.adminScreenMockUp.CardLists[1].Items.push(new I0.ItemViewModel("Crash test dummy 1", "124"));
    I0.adminScreenMockUp.CardLists[1].Items.push(new I0.ItemViewModel("Crash test dummy 2", "124"));
    I0.adminScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.adminScreenMockUp.CardLists[2].PoolDef = new I0.RessourceViewModel("Product Strategist", 123);
    I0.adminScreenMockUp.CardLists[2].Items.push(new I0.ItemViewModel("Crash test dummy 3", "124"));
    I0.adminScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.adminScreenMockUp.CardLists[3].PoolDef = new I0.RessourceViewModel("Software Developer", 123);
    I0.adminScreenMockUp.CardLists[3].Items.push(new I0.ItemViewModel("Crash test dummy 4", "124"));
    I0.adminScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.adminScreenMockUp.CardLists[4].PoolDef = new I0.RessourceViewModel("Project Coordinator", 123);
    I0.adminScreenMockUp.CardLists[4].Items.push(new I0.ItemViewModel("Crash test dummy 5", "124"));
    I0.adminScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.adminScreenMockUp.CardLists[5].PoolDef = new I0.RessourceViewModel("Project Manager", 123);
    I0.adminScreenMockUp.CardLists[5].Items.push(new I0.ItemViewModel("Crash test dummy 6", "124"));
    I0.adminScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.adminScreenMockUp.CardLists[6].PoolDef = new I0.RessourceViewModel("Domain Expert", 123);
    I0.adminScreenMockUp.CardLists[6].Items.push(new I0.ItemViewModel("Crash test dummy 7", "124"));
    I0.adminScreenMockUp.CardLists.push(new I0.ItemViewModelList());
    I0.adminScreenMockUp.CardLists[7].PoolDef = new I0.RessourceViewModel("Guest", 123);
    I0.adminScreenMockUp.CardLists[7].Items.push(new I0.ItemViewModel("Crash test dummy 8", "124"));
    I0.adminScreenMockUp.HistoryLogList.Items.push(new I0.ItemViewModel("30/02/2019 11:01", "Role DD", 0, 0, "JohnDoe@mail.com"));
    I0.adminScreenMockUp.HistoryLogList.Items[0].Summary = "Add User";
    I0.adminScreenMockUp.DownloadList.Items.push(new I0.ItemViewModel("Download Users", "1", 0, 0, "PDF Document"));
    I0.SearchMockUp = new I0.ItemViewModelList();
    I0.SearchMockUp.PoolDef = new I0.RessourceViewModel("Search Query", 123);
    I0.SearchMockUp.Items.push(new I0.ItemViewModel("Result 1", "124"));
    I0.SearchMockUp.Items.push(new I0.ItemViewModel("Result 2", "124"));
})(I0 || (I0 = {}));
var I0;
(function (I0) {
    var CompetitorScreenUIControl = /** @class */ (function (_super) {
        __extends(CompetitorScreenUIControl, _super);
        function CompetitorScreenUIControl(screenVM, appContext) {
            var _this = _super.call(this, "CompetitorScreenUIControl", "#main", appContext) || this;
            _this.customTableHeadersTemplate = "<th>Success Factor</th><th>-</th><th>Actions</th>";
            _this.VM = screenVM;
            _this.displayOptions.viewtabs = true;
            _this.displayOptions.header = true;
            _this.displayOptions.headertitle = true;
            _this.displayOptions.nogapheader = true;
            _this.displayOptions.mainmenu = true;
            _this.DisplayHeader();
            _this.DisplayBody("concept-rule-list");
            _this.DisplayHistoryView();
            _this.DisplayDownloadView();
            _this.AttachDefaultEvents();
            _this.AttachCustomEvents();
            return _this;
        }
        CompetitorScreenUIControl.prototype.AttachCustomEvents = function () {
            var _this = this;
            //Todo check user session 
            $(".download-card").click((function (e) { _this.app.ShowAlert("Coming back soon !", "Work in progress"); return false; }));
        };
        CompetitorScreenUIControl.prototype.ShowEditScreenForm = function () {
            var _this = this;
            var competitor = this.VM.Ressource;
            var definition = $.parseJSON(competitor.Definition);
            var formHtml = this.helper.BuildHtmlForTab(["Definition", "Details", "Scope"]);
            formHtml += "<div class='tab-view' tabindex='0'>";
            formHtml += this.helper.BuildHtmlForField(1, "formCompetitorName", "Name", "Competitor Name", competitor.Name, null);
            formHtml += this.helper.BuildHtmlForField(1, "formWebsite", "Website", "https://www.vendor.com/product", definition["Website"], null);
            formHtml += this.helper.BuildHtmlForField(1, "formLicenceFee", "License Price", "License Price for 1 user / month", definition["LicenceFee"], null);
            formHtml += this.helper.BuildHtmlForField(3, "formStatus", "Status", "Select Status", competitor.StatusEnumType.toString(), I0.VersionStatusOptions);
            formHtml += "</div><div class='tab-view' tabindex='1'>";
            formHtml += this.helper.BuildHtmlForField(2, "formPositioning", "Positioning", "Product Identity, Value and Differentiation", competitor.Detail1, null);
            formHtml += this.helper.BuildHtmlForField(2, "formStrength", "Strengths", "Product Strengths (+) and  Weakness (-) against competitors", competitor.Detail2, null);
            formHtml += this.helper.BuildHtmlForField(2, "formReviews", "Reviews", "Detailled Review URLs", competitor.Detail3, null);
            formHtml += "</div><div class='tab-view' tabindex='2'>";
            formHtml += this.helper.BuildHtmlForField(3, "formContext", "Market", "Select Market", competitor.ManagerId.toString(), this.app.CurrentScreenExplorerContexts());
            formHtml += "</div>";
            this.app.ShowCustomMessage("<div id='conceptform' class='form-group' formid='" + competitor.RessourceId + "' >" + formHtml + "</div>", "Define Competitor", this.OnRessourceSaveClick, null, this, null);
            //TODO add tooltip icon if not placeholder null => title="This is the text of the placeholder" 
            this.helper.ShowTab("conceptform", "0");
            $("#conceptform .tab-item").click((function (e) { _this.helper.ShowTab("conceptform", $(e.target).attr('tabindex')); return false; }));
            return false;
        };
        CompetitorScreenUIControl.prototype.OnRessourceSaveClick = function (context) {
            var competitor = context.VM.Ressource;
            var definition = { "Website": $.trim($("#formWebsite").val()), "LicenceFee": $.trim($("#formLicenceFee").val()) };
            competitor.Definition = JSON.stringify(definition);
            competitor.RessourceId = parseInt($.trim($("#conceptform").attr('formid')));
            competitor.RessourceEnumType = I0.DataStructureEnumType.Competitor;
            competitor.Name = $.trim($("#formCompetitorName").val());
            competitor.Detail1 = $.trim($("#formPositioning").val());
            competitor.Detail2 = $.trim($("#formStrength").val());
            competitor.Detail3 = $.trim($("#formReviews").val());
            competitor.StatusEnumType = parseInt($.trim($("#formStatus").val()));
            competitor.ManagerId = parseInt($.trim($("#formContext").val()));
            var isOK = true;
            if ((context.helper.FieldIsBlank(competitor.ManagerId))) {
                isOK = false;
                context.app.ShowAlert("Context is mandatory !");
            }
            if (isOK) {
                context.helper.AjaxCall(I0.DefineRessourceEndpoint, JSON.stringify({ ProjectId: context.ProjectId(), CollectionId: 0, ItemId: competitor.RessourceId, Ressource: competitor, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId) }), context.OnEditorSaved, context);
            }
        };
        return CompetitorScreenUIControl;
    }(I0.ScreenUIControl));
    I0.CompetitorScreenUIControl = CompetitorScreenUIControl;
})(I0 || (I0 = {}));
var I0;
(function (I0) {
    var DashboardScreenUIControl = /** @class */ (function (_super) {
        __extends(DashboardScreenUIControl, _super);
        function DashboardScreenUIControl(screenVM, appContext) {
            var _this = _super.call(this, "DashboardScreenUIControl", "#main", appContext) || this;
            _this.customTableToolbarTemplate = "\n        <div id=\"add-feature-profile\" title=\"Add Profile\" class=\"clickable-icon\"><span class=\"fas fa-plus-square\"></span></div>\n        <div id=\"edit-feature-profile-visibility\" title=\"Edit Profile Visibility\" class=\"clickable-icon\"><span class=\"fas fa-eye\"></span></div>";
            _this.VM = screenVM;
            _this.displayOptions.viewtabs = true;
            _this.displayOptions.header = true;
            _this.displayOptions.headertitle = false;
            _this.displayOptions.mainmenu = false;
            _this.DisplayCustomBoardView();
            _this.DisplayHistoryView();
            _this.DisplayDownloadView();
            _this.AttachCustomEvents();
            return _this;
        }
        DashboardScreenUIControl.prototype.AttachCustomEvents = function () {
            var _this = this;
            //Todo check user session   
            $(".main .clickable-icon").off('click');
            $("#screen-edit-button").click((function (e) { _this.ShowEditProjectForm(); return false; }));
            $("#screen-remove-button").click((function (e) { _this.ShowRemoveProjectForm(); return false; }));
            $('#add-feature-profile').click((function (e) { _this.ShowNewFeatureProfileForm(); return false; }));
            $("#edit-feature-profile-visibility").click((function (e) { _this.ShowEditFeatureProfileForm(true); return false; }));
            $(".download-card").click((function (e) { _this.app.ShowAlert("Coming back soon !", "Work in progress"); return false; }));
            $("#top-context-expander-button").click((function (e) { _this.ExpandCollapseHeader(e); return false; }));
        };
        DashboardScreenUIControl.prototype.ShowEditProjectForm = function () {
            var formHtml = this.helper.BuildHtmlForField(1, "formName", "Name", "Name", this.app.currentProjectVM.Project.Label, null);
            this.app.ShowCustomMessage("<div class='item-form form-group'>" + formHtml + "</div>", "Define Project", this.OnProjectSaveClick, null, this, null);
            return false;
        };
        DashboardScreenUIControl.prototype.OnProjectSaveClick = function (context) {
            var item = context.app.currentProjectVM.Project;
            item.Label = $.trim($(".item-form").attr('formName'));
            var isOK = true;
            if ((context.helper.FieldIsBlank(item.Label))) {
                isOK = false;
                context.app.ShowAlert("Name is mandatory !");
            }
            if (isOK) {
                context.helper.AjaxCall(I0.DefineItemEndpoint, JSON.stringify({ ProjectId: context.ProjectId(), CollectionId: 0, ItemId: 0, Item: item, ViewType: I0.ViewEnumType.Project }), context.app.LoadProject, context.app);
            }
        };
        DashboardScreenUIControl.prototype.ShowRemoveProjectForm = function () {
            this.app.ShowCustomMessage("Are you sure you want to delete this project ?", "Remove Project", this.OnProjectRemoveClick, null, this, null);
        };
        DashboardScreenUIControl.prototype.OnProjectRemoveClick = function (context) {
            context.helper.AjaxCall(I0.RemoveItemEndpoint, JSON.stringify({ ProjectId: context.ProjectId(), CollectionId: 0, ItemId: 0, RemovedItemId: 0, ViewType: I0.ViewEnumType.Project }), context.app.LoadUserSession, context.app);
        };
        DashboardScreenUIControl.prototype.ShowNewFeatureProfileForm = function () {
            this.ShowEditFeatureProfileForm(false);
        };
        DashboardScreenUIControl.prototype.ShowEditFeatureProfileForm = function (mustManageVisibility) {
            var _this = this;
            var formHtml = "";
            if (this.app.currentProjectVM.ScopeProfiles.length == 0)
                mustManageVisibility = false;
            if (mustManageVisibility)
                formHtml += this.helper.BuildHtmlForField(3, "formProfile", "Profile", "Select Profile", null, this.app.currentProjectVM.ScopeProfiles);
            formHtml += this.helper.BuildHtmlForField(1, "formName", "Name", "Profile Name", "", null);
            formHtml += this.helper.BuildHtmlForField(1, "formCode", "Code", "Profile Code", "", null);
            if (mustManageVisibility)
                formHtml += "<div><input type='checkbox' id='profileVisibility'>Is Visible</div>";
            this.app.ShowCustomMessage("<div class='feature-profile-form form-group'>" + formHtml + "</div>", "Define Profile", this.OnFeatureProfileSaveClick, null, this, null);
            if (mustManageVisibility) {
                $('#formProfile').change((function (e) {
                    var item;
                    var profileid = $('#formProfile').val();
                    jQuery.each(_this.app.currentProjectVM.ScopeProfiles, function () { if (this.KeyValue == profileid) {
                        item = this;
                        return false;
                    } });
                    $("#formName").val(item.Label);
                    $("#formCode").val(item.Code);
                    $('#profileVisibility').prop('checked', item.IsSelected);
                }));
                $("#formProfile option:first").attr('selected', 'selected');
            }
            return false;
        };
        DashboardScreenUIControl.prototype.OnFeatureProfileSaveClick = function (context) {
            var profileid = $('#formProfile').val();
            var mustManageVisibility = false;
            //$('#profileVisibility:checked')
            var item = new I0.ItemViewModel($("#formName").val(), profileid.toString());
            item.ParentKeyValue = context.ProjectId().toString();
            item.Code = $.trim($('#formCode').val());
            item.Type = I0.ContextEnumType.FeatureProfile;
            var isOK = true;
            if ((context.helper.FieldIsBlank(item.Label))) {
                isOK = false;
                context.app.ShowAlert("Name is mandatory !");
            }
            if (isOK) {
                if (mustManageVisibility) {
                    this.app.ShowAlert("Coming back soon !", "Work in progress");
                }
                else {
                    context.helper.AjaxCall(I0.DefineItemEndpoint, JSON.stringify({ ProjectId: context.ProjectId(), CollectionId: -1, ItemId: 0, Item: item, ViewType: I0.ViewEnumType.Explorer }), context.app.LoadProject, context.app);
                }
            }
        };
        DashboardScreenUIControl.prototype.DisplayCustomBoardView = function () {
            this.DisplayCustomHeader();
            $("#screen-body").html("<div id='feature-rank-card' class='card-col'></div><div id='roadmap-card' class='card-col'></div>");
            this.DisplayFeatureProfileCard();
            this.DisplayRoadmapCard();
        };
        DashboardScreenUIControl.prototype.DisplayCustomHeader = function () {
            var result = "";
            jQuery.each(this.VM.CardLists[0].Items, function () {
                var progressPercent = Math.round(this.Score / this.ObjectiveScore * 100).toString();
                result += I0.progressCardTemplate.replace(/{{templatetitle}}/g, this.Label).replace(/{{templatecounter}}/g, this.ObjectiveScore).replace(/{{templateprogress}}/g, progressPercent);
            });
            $("#screen-header").html(result);
            this.DisplayHeaderToolbar();
        };
        DashboardScreenUIControl.prototype.DisplayFeatureProfileCard = function () {
            var sublistHtml = "";
            jQuery.each(this.app.currentProjectVM.ScopeProfiles, function () {
                var progressPercent = Math.round(this.Score / this.ObjectiveScore * 100).toString();
                sublistHtml += I0.rankCardRowTemplate.replace(/{{templatetitle}}/g, this.Label).replace(/{{templatecounter}}/g, this.ObjectiveScore.toString()).replace(/{{templateprogress}}/g, progressPercent);
            });
            $("#feature-rank-card").html(I0.rankCardTemplate.replace(/{{templatetabletoolbar}}/g, this.customTableToolbarTemplate).replace(/{{templatelist}}/g, sublistHtml));
        };
        DashboardScreenUIControl.prototype.DisplayRoadmapCard = function () {
            var sublistHtml = "";
            jQuery.each(this.app.currentProjectVM.HistoryMarkerList.Items, function () {
                var time = I0.MonthOptions[this.Score - 1].Label + " " + this.ObjectiveScore;
                sublistHtml += "<li class='timeline-item'><strong>" + this.Label + "</strong><p class='text-sm'>" + time + "</p></li>";
            });
            $("#roadmap-card").html(I0.roadmapCardTemplate.replace(/{{templatetimeline}}/g, sublistHtml));
        };
        return DashboardScreenUIControl;
    }(I0.ScreenUIControl));
    I0.DashboardScreenUIControl = DashboardScreenUIControl;
})(I0 || (I0 = {}));
var I0;
(function (I0) {
    var PersonaScreenUIControl = /** @class */ (function (_super) {
        __extends(PersonaScreenUIControl, _super);
        function PersonaScreenUIControl(screenVM, appContext) {
            var _this = _super.call(this, "PersonaScreenUIControl", "#main", appContext) || this;
            _this.customTableHeadersTemplate = "<th>Acceptance Criteria</th><th>-</th><th>Actions</th>";
            _this.VM = screenVM;
            _this.displayOptions.viewtabs = true;
            _this.displayOptions.header = true;
            _this.displayOptions.headertitle = true;
            _this.displayOptions.nogapheader = true;
            _this.displayOptions.mainmenu = true;
            _this.DisplayHeader();
            _this.DisplayBody("concept-rule-list");
            _this.DisplayHistoryView();
            _this.DisplayDownloadView();
            _this.AttachDefaultEvents();
            _this.AttachCustomEvents();
            return _this;
        }
        PersonaScreenUIControl.prototype.AttachCustomEvents = function () {
            var _this = this;
            //Todo check user session 
            $(".card-item-add-button, .card-item-edit-button").off('click');
            $(".card-item-add-button").click((function (e) { _this.ShowNewCardItemForm($(e.target).attr('cardid')); return false; }));
            $(".card-item-edit-button").click((function (e) { _this.ShowEditCardItemForm($(e.target).attr('itemid')); return false; }));
            $(".download-card").click((function (e) { _this.app.ShowAlert("Coming back soon !", "Work in progress"); return false; }));
        };
        PersonaScreenUIControl.prototype.ShowEditScreenForm = function () {
            var _this = this;
            var persona = this.VM.Ressource;
            var definition = $.parseJSON(persona.Definition);
            var formHtml = this.helper.BuildHtmlForTab(["Definition", "Details", "Scope"]);
            formHtml += "<div class='tab-view' tabindex='0'>";
            formHtml += this.helper.BuildHtmlForField(1, "formPersonaName", "Name", "Persona Archetype Name", persona.Name, null);
            formHtml += this.helper.BuildHtmlForField(1, "formPopulationShare", "User Population %", "1", definition["PopulationShare"], null);
            formHtml += this.helper.BuildHtmlForField(1, "formWorkingHours", "Mean Activity / Day", "1h", definition["WorkingHours"], null);
            formHtml += this.helper.BuildHtmlForField(1, "formMaxWorkingHours", "Max Activity / Day", "6h", definition["MaxWorkingHours"], null);
            formHtml += this.helper.BuildHtmlForField(3, "formStatus", "Status", "Select Status", persona.StatusEnumType.toString(), I0.VersionStatusOptions);
            formHtml += "</div><div class='tab-view' tabindex='1'>";
            formHtml += this.helper.BuildHtmlForField(2, "formGoals", "Goals", "Business Goals", persona.Detail1, null);
            formHtml += this.helper.BuildHtmlForField(2, "formDislikes", "Dislikes", "Unproductive Activity or Organizational friction", persona.Detail2, null);
            formHtml += this.helper.BuildHtmlForField(2, "formCommonSoftware", "Software", "Commonly Used Software", persona.Detail3, null);
            formHtml += "</div><div class='tab-view' tabindex='2'>";
            formHtml += this.helper.BuildHtmlForField(3, "formContext", "Persona Category", "Select Category", persona.ManagerId.toString(), this.app.CurrentScreenExplorerContexts());
            formHtml += "</div>";
            this.app.ShowCustomMessage("<div id='conceptform' class='form-group' formid='" + persona.RessourceId + "' >" + formHtml + "</div>", "Define Persona", this.OnRessourceSaveClick, null, this, null);
            //TODO add tooltip icon if not placeholder null => title="This is the text of the placeholder" 
            this.helper.ShowTab("conceptform", "0");
            $("#conceptform .tab-item").click((function (e) { _this.helper.ShowTab("conceptform", $(e.target).attr('tabindex')); return false; }));
            return false;
        };
        PersonaScreenUIControl.prototype.OnRessourceSaveClick = function (context) {
            var persona = context.VM.Ressource;
            var definition = { "PopulationShare": $.trim($("#formPopulationShare").val()),
                "WorkingHours": $.trim($("#formWorkingHours").val()), "MaxWorkingHours": $.trim($("#formMaxWorkingHours").val()) };
            persona.Definition = JSON.stringify(definition);
            persona.RessourceId = parseInt($.trim($("#conceptform").attr('formid')));
            persona.RessourceEnumType = I0.DataStructureEnumType.Persona;
            persona.Name = $.trim($("#formPersonaName").val());
            persona.Detail1 = $.trim($("#formGoals").val());
            persona.Detail2 = $.trim($("#formDislikes").val());
            persona.Detail3 = $.trim($("#formCommonSoftware").val());
            persona.StatusEnumType = parseInt($.trim($("#formStatus").val()));
            persona.ManagerId = parseInt($.trim($("#formContext").val()));
            var isOK = true;
            if ((context.helper.FieldIsBlank(persona.ManagerId))) {
                isOK = false;
                context.app.ShowAlert("Context is mandatory !");
            }
            if (isOK) {
                context.helper.AjaxCall(I0.DefineRessourceEndpoint, JSON.stringify({ ProjectId: context.ProjectId(), CollectionId: 0, ItemId: persona.RessourceId, Ressource: persona, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId) }), context.OnEditorSaved, context);
            }
        };
        return PersonaScreenUIControl;
    }(I0.ScreenUIControl));
    I0.PersonaScreenUIControl = PersonaScreenUIControl;
})(I0 || (I0 = {}));
var I0;
(function (I0) {
    var SearchResultUIControl = /** @class */ (function (_super) {
        __extends(SearchResultUIControl, _super);
        function SearchResultUIControl(searchVM, appContext) {
            var _this = _super.call(this, "SearchResultUIControl", "#main", appContext) || this;
            _this.ColumnFilter = [];
            _this.VM = searchVM;
            _this.displayOptions.viewtabs = false;
            return _this;
        }
        SearchResultUIControl.prototype.DisplayTableView = function (SearchResultList) {
            var _this = this;
            var logHtml = "<div id='search-view'>";
            var context = this;
            logHtml += "<h3>" + SearchResultList.PoolDef.Name + "</h3>";
            jQuery.each(SearchResultList.Items, function () {
                logHtml += "<div><a class='result-link' href='\ressource?id= " + this.KeyValue + "'>" + this.Label + "</a>" + this.Summary + "</div>";
            });
            logHtml += "</div>";
            $("#matrix-view").html(logHtml);
            $(".result-link").click((function (e) { _this.app.ShowAlert("Coming back soon !", "Work in progress"); return false; }));
        };
        return SearchResultUIControl;
    }(I0.ScreenUIControl));
    I0.SearchResultUIControl = SearchResultUIControl;
})(I0 || (I0 = {}));
var I0;
(function (I0) {
    var UserAdminScreenUIControl = /** @class */ (function (_super) {
        __extends(UserAdminScreenUIControl, _super);
        function UserAdminScreenUIControl(screenVM, appContext) {
            var _this = _super.call(this, "UserAdminScreenUIControl", "#main", appContext) || this;
            _this.customTableHeadersTemplate = "<th>User Mail</th><th>-</th><th>Action</th>";
            _this.VM = screenVM;
            _this.displayOptions.viewtabs = false;
            _this.defaultViewType = 0;
            _this.displayOptions.header = false;
            _this.displayOptions.headertitle = true;
            _this.displayOptions.nogapheader = false;
            _this.displayOptions.mainmenu = true;
            _this.displayOptions.cardicon = false;
            $(".breadcrumb").html(_this.VM.Ressource.Name);
            $("#screen-header").html("");
            _this.DisplayBody("role-user-list");
            _this.DisplayHistoryView();
            _this.DisplayDownloadView();
            _this.AttachDefaultEvents();
            _this.AttachCustomEvents();
            $('.card-remove-button, .breadcrumb fas').hide();
            return _this;
        }
        UserAdminScreenUIControl.prototype.AttachCustomEvents = function () {
            //Todo check user session    
        };
        UserAdminScreenUIControl.prototype.ShowDefineCardForm = function (role) {
            var _this = this;
            var definition = $.parseJSON(role.Definition);
            var formHtml = this.helper.BuildHtmlForTab(["Definition", "Edit Rights", "Permission"]);
            formHtml += "<div class='tab-view' tabindex='0'>";
            formHtml += this.helper.BuildHtmlForField(1, "formName", "Name", "Profile Name", role.Name, null);
            formHtml += this.helper.BuildHtmlForField(2, "formComment", "Comment", "Profile General description", role.Detail1, null);
            formHtml += "</div><div class='tab-view' tabindex='1'>";
            formHtml += this.helper.BuildHtmlForField(8, "formCanEditCompetitor", "Market", "", definition["CanEditCompetitor"], null);
            formHtml += this.helper.BuildHtmlForField(8, "formCanEditPersonna", "Persona", "", definition["CanEditPersonna"], null);
            formHtml += this.helper.BuildHtmlForField(8, "formCanEditRequirements", "Requirement", "", definition["CanEditRequirements"], null);
            formHtml += this.helper.BuildHtmlForField(8, "formCanEditDomains", "Domain", "", definition["CanEditDomains"], null);
            formHtml += this.helper.BuildHtmlForField(8, "formCanEditRoadmap", "Roadmap", "", definition["CanEditRoadmap"], null);
            formHtml += "</div><div class='tab-view' tabindex='2'>";
            formHtml += this.helper.BuildHtmlForField(8, "formCanDownload", "Ressource Download", "", definition["CanDownload"], null);
            formHtml += this.helper.BuildHtmlForField(8, "formCanExportProject", "Project Export", "", definition["CanExportProject"], null);
            formHtml += this.helper.BuildHtmlForField(8, "formCanImportProject", "Project Import", "", definition["CanImportProject"], null);
            formHtml += this.helper.BuildHtmlForField(8, "formIsRestrictedToEdit", "Restricted Access (/Edit Rights)", "", definition["IsRestrictedToEdit"], null);
            formHtml += this.helper.BuildHtmlForField(8, "formIsAdmin", "Admin Tools", "", definition["IsAdmin"], null);
            formHtml += "</div>";
            this.app.ShowCustomMessage("<div id='UCform' class='screen-form form-group'  typeid='" + role.RessourceId + "'>" + formHtml + "</div>", "Define Role", this.OnCardSaveClick, null, this, null);
            //TODO add tooltip icon if not placeholder null => title="This is the text of the placeholder"   
            this.helper.ShowTab("UCform", "0");
            $("#UCform .tab-item").click((function (e) { _this.helper.ShowTab("UCform", $(e.target).attr('tabindex')); return false; }));
            $(".label-switcher").click((function (e) { $(e.target).html(($(e.target).html() == "Allowed" ? "Denied" : "Allowed")); }));
            return false;
        };
        UserAdminScreenUIControl.prototype.OnCardSaveClick = function (context) {
            var item = new I0.ItemViewModel($("#formName").val(), $(".screen-form").attr('typeid'));
            item.Type = I0.DataStructureEnumType.Role;
            var summary = { "CanEditCompetitor": $("#CanEditCompetitor").html() == "Allowed",
                "CanEditPersonna": $("#CanEditPersonna").html() == "Allowed", "CanEditRequirements": $("#CanEditRequirements").html() == "Allowed",
                "CanEditDomains": $("#CanEditDomains").html() == "Allowed", "CanEditRoadmap": $("#CanEditRoadmap").html() == "Allowed", "CanDownload": $("#CanDownload").html() == "Allowed",
                "CanExportProject": $("#CanExportProject").html() == "Allowed", "CanImportProject": $("#CanImportProject").html() == "Allowed",
                "IsRestrictedToEdit": $("#IsRestrictedToEdit").html() == "Allowed", "IsAdmin": $("#IsAdmin").html() == "Allowed" };
            item.Summary = JSON.stringify(summary);
            var isOK = true;
            if ((context.helper.FieldIsBlank(item.Label))) {
                isOK = false;
                context.app.ShowAlert("Name is mandatory !");
            }
            if (isOK) {
                context.helper.AjaxCall(I0.DefineAdminItemEndpoint, JSON.stringify({ ProjectId: -1, CollectionId: -1, ItemId: -1, Item: item, ViewType: I0.ViewEnumType.UserAdmin }), context.OnEditorSaved, context);
            }
        };
        UserAdminScreenUIControl.prototype.ShowDefineCardItemForm = function (item) {
            var formHtml = "";
            formHtml += this.helper.BuildHtmlForField(1, "formMail", "Mail (UPN)", "Mail address used as Login", item.Label, null);
            this.app.ShowCustomMessage("<div class='screen-form form-group'  formid='" + item.KeyValue + "' typeid='" + item.KeyValue + "'>" + formHtml + "</div>", "Define User", this.OnCardItemSaveClick, null, this, null);
            return false;
        };
        UserAdminScreenUIControl.prototype.OnCardItemSaveClick = function (context) {
            var item = new I0.ItemViewModel($.trim($("#formMail").val()), $.trim($(".screen-form").attr('formid')));
            item.ParentKeyValue = $.trim($(".screen-form").attr('typeid'));
            item.Type = I0.SubDataStructureByExplorerType[this.app.currentExplorerType];
            var isOK = true;
            if ((context.helper.FieldIsBlank(item.Label))) {
                isOK = false;
                context.app.ShowAlert("Mail is mandatory !");
            }
            if (isOK) {
                context.helper.AjaxCall(I0.DefineAdminItemEndpoint, JSON.stringify({ ProjectId: context.ProjectId(), CollectionId: context.ScreenId(), ItemId: parseInt(item.ParentKeyValue), Item: item, ViewType: context.GetViewTypeFor(context.VM.ExplorerTypeId) }), context.OnEditorSaved, context);
            }
        };
        UserAdminScreenUIControl.prototype.ShowRemoveCardItemForm = function (linkId) {
            this.helper.AsyncPendingID = linkId;
            this.app.ShowCustomMessage("Are you sure you want to remove this user ?", "Remove User", this.OnCardItemRemoveClick, null, this, null);
        };
        UserAdminScreenUIControl.prototype.OnCardItemRemoveClick = function (context) {
            context.helper.AjaxCall(I0.RemoveAdminItemEndpoint, JSON.stringify({ ProjectId: context.ProjectId(), CollectionId: 0, ItemId: context.helper.AsyncPendingID, ViewType: I0.ViewEnumType.UserAdmin }), context.OnEditorSaved, context);
        };
        return UserAdminScreenUIControl;
    }(I0.ScreenUIControl));
    I0.UserAdminScreenUIControl = UserAdminScreenUIControl;
})(I0 || (I0 = {}));
var I0;
(function (I0) {
    var UserPreferenceUIControl = /** @class */ (function (_super) {
        __extends(UserPreferenceUIControl, _super);
        function UserPreferenceUIControl(prefVM, appContext) {
            var _this = _super.call(this, "UserPreferenceUIControl", "#main", appContext) || this;
            _this.ColumnFilter = [];
            _this.VM = prefVM;
            _this.displayOptions.viewtabs = false;
            _this.DisplaySettingView();
            _this.AttachDefaultEvents();
            _this.AttachCustomEvents();
            return _this;
        }
        UserPreferenceUIControl.prototype.DisplaySettingView = function () {
            var formHtml = "<div id='display-setting-view'>";
            formHtml += "<div class='form-element-group'><h3>Preferences</h3></div>";
            formHtml += this.helper.BuildHtmlForField(7, "formAccentColor", "Accent Color", "Select Color", this.app.currentSessionVM.CustomThemecolor1, I0.AccentColorOptions);
            formHtml += this.helper.BuildHtmlForField(3, "formProductLine", "Default Project", "Select Product Line", this.app.currentSessionVM.defaultProjectId, this.app.currentSessionVM.Projects);
            formHtml += "</div>";
            $("#matrix-view").html(formHtml); //TODO rename matrix view into custom view
            var context = this;
            var bodyHtml = "";
        };
        UserPreferenceUIControl.prototype.AttachCustomEvents = function () {
            var context = this;
            $('#formAccentColor').change(function (e) {
                var newThemeIndex = I0.AccentColorOptions.indexOf($("#formAccentColor").val());
                if (newThemeIndex > -1 && context.app.currentSessionVM.CustomThemecolor1 != I0.AccentColorOptions[newThemeIndex]) {
                    context.app.currentSessionVM.CustomThemecolor1 = I0.AccentColorOptions[newThemeIndex];
                    context.app.currentSessionVM.CustomThemecolor2 = I0.AccentColorRefractions[newThemeIndex];
                    context.app.LoadTheme(context.app.currentSessionVM.CustomThemecolor1, context.app.currentSessionVM.CustomThemecolor2);
                    context.SaveCurrentPreference();
                }
            });
            $('#formProductLine').change(function (e) {
                if (context.app.currentSessionVM.defaultProjectId == parseInt($('#formProductLine').val())) {
                    context.app.currentSessionVM.defaultProjectId = parseInt($('#formProductLine').val());
                    context.SaveCurrentPreference();
                }
            });
        };
        UserPreferenceUIControl.prototype.SaveCurrentPreference = function () {
            var preferencesJSON = { CustomThemecolor1: this.app.currentSessionVM.CustomThemecolor1,
                CustomThemecolor2: this.app.currentSessionVM.CustomThemecolor2,
                defaultProjectId: this.app.currentSessionVM.defaultProjectId };
            var item = new I0.ItemViewModel("Preferences", "-1");
            item.Summary = JSON.stringify(preferencesJSON);
            this.helper.AjaxCall(I0.DefineAdminItemEndpoint, JSON.stringify({ ProjectId: -1, CollectionId: -1, ItemId: -1, Item: item, ViewType: I0.ViewEnumType.Session }), this.OnPreferenceSaved, this);
        };
        UserPreferenceUIControl.prototype.OnPreferenceSaved = function (response, context) {
            if (response.Projects != undefined) {
                context.app.HideUnfreezeControls();
            }
            else {
                context.app.ShowAlert(response);
            }
        };
        return UserPreferenceUIControl;
    }(I0.ScreenUIControl));
    I0.UserPreferenceUIControl = UserPreferenceUIControl;
})(I0 || (I0 = {}));
