namespace I0 {
export var AppSettingsMockUp = {name : "Demo Server"};
export var sessionMockUp = new UserSessionViewModel();
sessionMockUp.Role = new ItemViewModel("Super Admin", "1");
sessionMockUp.User = new ItemViewModel("JohnDoe", "1");
sessionMockUp.CustomThemecolor1 = "#7c00ff";
sessionMockUp.CustomThemecolor2 = "#373240";
sessionMockUp.defaultProjectId = 1;
sessionMockUp.Token = "hjgukhjoilj";
sessionMockUp.Projects = new Array<ItemViewModel>();
sessionMockUp.Projects.push(new ItemViewModel("Server MockUp Demo", "44"));
sessionMockUp.Projects.push(new ItemViewModel("Server Empty Test", "55"));
export var configExplorerMockUp = new ExplorerViewModel(0);
configExplorerMockUp.MenuLists.push(new ItemViewModelList());
configExplorerMockUp.MenuLists[0].Pool = new ItemViewModel("Intranet", "0")
configExplorerMockUp.MenuLists[0].Items = new Array<ItemViewModel>();
configExplorerMockUp.MenuLists[0].Items.push(new ItemViewModel("MockUp Demo", "1"));
configExplorerMockUp.MenuLists[0].Items.push(new ItemViewModel("Empty Test", "0"));
export var projectMockUp = new ProjectViewModel();
projectMockUp.Project = new ItemViewModel("MockUp Demo", "1")
projectMockUp.DashboardScreenVM = new ScreenViewModel(ExplorerEnumType.Home);
projectMockUp.DashboardScreenVM.Ressource = new RessourceViewModel("", 0);
projectMockUp.DashboardScreenVM.CardLists.push(new ItemViewModelList());
projectMockUp.DashboardScreenVM.CardLists[0].Items.push(new ItemViewModel("RULES", "0", 140, 60));
projectMockUp.DashboardScreenVM.CardLists[0].Items.push(new ItemViewModel("FEATURES", "0", 85, 19));
projectMockUp.DashboardScreenVM.CardLists[0].Items.push(new ItemViewModel("USE CASES", "0", 33, 6));
projectMockUp.DashboardScreenVM.CardLists[0].Items.push(new ItemViewModel("PROFILES", "0", 10, 0));
projectMockUp.DashboardScreenVM.HistoryLogList.Items.push(new ItemViewModel("30/08/2019 21:21", "MockUp Test",0,0,"JohnDoe@mail.com"));
projectMockUp.DashboardScreenVM.HistoryLogList.Items[0].Summary = "Update Project"
projectMockUp.DashboardScreenVM.HistoryLogList.Items.push(new ItemViewModel("30/08/2019 21:11", "Version X",0,0,"JohnDoe@mail.com"));
projectMockUp.DashboardScreenVM.HistoryLogList.Items[1].Summary = "Add Version"
projectMockUp.DashboardScreenVM.HistoryLogList.Items.push(new ItemViewModel("30/08/2019 21:01", "Profile 4",0,0,"JohnDoe@mail.com"));
projectMockUp.DashboardScreenVM.HistoryLogList.Items[2].Summary = "Add Feature Profile"
projectMockUp.DashboardScreenVM.HistoryLogList.Items.push(new ItemViewModel("30/06/2019 21:21", "MockUp Test",0,0,"JohnDoe@mail.com"));
projectMockUp.DashboardScreenVM.HistoryLogList.Items[3].Summary = "Update Project"
projectMockUp.DashboardScreenVM.HistoryLogList.Items.push(new ItemViewModel("30/06/2019 20:11", "Version X",0,0,"JohnDoe@mail.com"));
projectMockUp.DashboardScreenVM.HistoryLogList.Items[4].Summary = "Add Version"
projectMockUp.DashboardScreenVM.HistoryLogList.Items.push(new ItemViewModel("30/02/2019 11:01", "Profile 4",0,0,"JohnDoe@mail.com"));
projectMockUp.DashboardScreenVM.HistoryLogList.Items[5].Summary = "Add Feature Profile"
projectMockUp.DashboardScreenVM.DownloadList.Items.push(new ItemViewModel("Download All (UCs + Concepts + Rules)", "1", 0, 0, "PDF Document"));
projectMockUp.DashboardScreenVM.DownloadList.Items.push(new ItemViewModel("Download Use Cases", "2", 0, 0, "PDF Document"));
projectMockUp.DashboardScreenVM.DownloadList.Items.push(new ItemViewModel("Download Business Rules", "3", 0, 0, "PDF Document"));
projectMockUp.DashboardScreenVM.DownloadList.Items.push(new ItemViewModel("Download Business Layer Scaffold", "4", 0, 0, "Zip Archive (C#)"));
projectMockUp.DashboardScreenVM.DownloadList.Items.push(new ItemViewModel("Download Configuration Files", "5", 0, 0, "Zip Archive (Xml)"));
projectMockUp.DashboardScreenVM.DownloadList.Items.push(new ItemViewModel("Download Use Cases Links", "6", 0, 0, "Markdown document"));
projectMockUp.DashboardScreenVM.DownloadList.Items.push(new ItemViewModel("Download Features Links", "7", 0, 0, "Markdown document"));
projectMockUp.DashboardScreenVM.DownloadList.Items.push(new ItemViewModel("Download Project Backup", "7", 0, 0, "Zip Archive (JSON)"));
projectMockUp.HistoryMarkerList.Items.push(new ItemViewModel("V0.0 #Demo", "1", 2019, 12));
projectMockUp.HistoryMarkerList.Items.push(new ItemViewModel("V0.1 #MVP", "2", 2020, 5));
projectMockUp.HistoryMarkerList.Items.push(new ItemViewModel("V0.2 #MilkyWay", "3", 2020, 9));
projectMockUp.HistoryMarkerList.Items.push(new ItemViewModel("V0.3 #Blue", "4", 2020, 12));
projectMockUp.HistoryMarkerList.Items.push(new ItemViewModel("V0.4 #ReadyRed", "5", 2021, 6));
projectMockUp.HistoryMarkerList.Items.push(new ItemViewModel("V0.5 #Lux", "6", 2022, 1));
projectMockUp.ScopeProfiles = new Array<ItemViewModel>();
projectMockUp.ScopeProfiles.push(new ItemViewModel("Profile Demo", "10", 20, 19, "DEM"));
projectMockUp.ScopeProfiles.push(new ItemViewModel("Profile 1", "1", 33, 18, "PR1"));
projectMockUp.ScopeProfiles.push(new ItemViewModel("Profile 2", "2", 36, 15, "PR2"));
projectMockUp.ScopeProfiles.push(new ItemViewModel("Profile 3", "3", 38, 13, "PR3"));
projectMockUp.ScopeProfiles.push(new ItemViewModel("Profile 4", "4", 38, 13, "PR4"));
projectMockUp.ScopeProfiles.push(new ItemViewModel("Profile 5", "5", 44, 13, "PR5"));
projectMockUp.ScopeProfiles.push(new ItemViewModel("Profile 6", "6", 44, 11, "PR6"));
projectMockUp.ScopeProfiles.push(new ItemViewModel("Profile 7", "7", 47, 4, "PR7"));
projectMockUp.ScopeProfiles.push(new ItemViewModel("Profile 8", "8", 55, 4, "PR8"));
projectMockUp.ScopeProfiles.push(new ItemViewModel("Profile 9", "9", 66, 4, "PR9"));
projectMockUp.MarketExplorerVM = new ExplorerViewModel(ExplorerEnumType.Market);
projectMockUp.MarketExplorerVM.MenuLists.push(new ItemViewModelList());
projectMockUp.MarketExplorerVM.MenuLists[0].Pool = new ItemViewModel("Spreadsheet", "1")
projectMockUp.MarketExplorerVM.MenuLists[0].Items = new Array<ItemViewModel>();
projectMockUp.MarketExplorerVM.MenuLists[0].Items.push(new ItemViewModel("Excel", "1"));
projectMockUp.MarketExplorerVM.MenuLists[0].Items.push(new ItemViewModel("Google Sheets", "2"));
projectMockUp.MarketExplorerVM.MenuLists[0].Items.push(new ItemViewModel("Zoho Sheet", "3"));
projectMockUp.MarketExplorerVM.MenuLists.push(new ItemViewModelList());
projectMockUp.MarketExplorerVM.MenuLists[1].Pool = new ItemViewModel("Outsiders", "99")
projectMockUp.MarketExplorerVM.MenuLists[1].Items = new Array<ItemViewModel>();
projectMockUp.MarketExplorerVM.MenuLists[1].Items.push(new ItemViewModel("Quip", "4"));
projectMockUp.PersonaExplorerVM = new ExplorerViewModel(ExplorerEnumType.Persona);
projectMockUp.PersonaExplorerVM.MenuLists.push(new ItemViewModelList());
projectMockUp.PersonaExplorerVM.MenuLists[0].Pool = new ItemViewModel("Primary", "1")
projectMockUp.PersonaExplorerVM.MenuLists[0].Items = new Array<ItemViewModel>();
projectMockUp.PersonaExplorerVM.MenuLists[0].Items.push(new ItemViewModel("Financial Controller", "1"));
projectMockUp.PersonaExplorerVM.MenuLists[0].Items.push(new ItemViewModel("Financial Analyst", "2"));
projectMockUp.PersonaExplorerVM.MenuLists.push(new ItemViewModelList());
projectMockUp.PersonaExplorerVM.MenuLists[1].Pool = new ItemViewModel("Secondary", "2")
projectMockUp.PersonaExplorerVM.MenuLists[1].Items = new Array<ItemViewModel>();
projectMockUp.PersonaExplorerVM.MenuLists[1].Items.push(new ItemViewModel("Help Desk Specialist", "3"));
projectMockUp.PersonaExplorerVM.MenuLists.push(new ItemViewModelList());
projectMockUp.PersonaExplorerVM.MenuLists[2].Pool = new ItemViewModel("System", "99")
projectMockUp.PersonaExplorerVM.MenuLists[2].Items = new Array<ItemViewModel>();
projectMockUp.PersonaExplorerVM.MenuLists[2].Items.push(new ItemViewModel("Default User", "4"));
projectMockUp.PersonaExplorerVM.MenuLists[2].Items.push(new ItemViewModel("Admin", "5"));
projectMockUp.RequirementExplorerVM = new ExplorerViewModel(ExplorerEnumType.Requirement);
projectMockUp.RequirementExplorerVM.MenuLists.push(new ItemViewModelList());
projectMockUp.RequirementExplorerVM.MenuLists[0].Pool = new ItemViewModel("Infrastructure", "99")
projectMockUp.RequirementExplorerVM.MenuLists[0].Items = new Array<ItemViewModel>();
projectMockUp.RequirementExplorerVM.MenuLists[0].Items.push(new ItemViewModel("Log Into Application", "1"));
projectMockUp.RequirementExplorerVM.MenuLists[0].Items.push(new ItemViewModel("Reset Password", "2"));
projectMockUp.DomainExplorerVM = new ExplorerViewModel(ExplorerEnumType.Domain);
projectMockUp.DomainExplorerVM.MenuLists.push(new ItemViewModelList());
projectMockUp.DomainExplorerVM.MenuLists[0].Pool = new ItemViewModel("Finance", "98")
projectMockUp.DomainExplorerVM.MenuLists[0].Items = new Array<ItemViewModel>();
projectMockUp.DomainExplorerVM.MenuLists[0].Items.push(new ItemViewModel("Concept 1", "3"));
projectMockUp.DomainExplorerVM.MenuLists[0].Items.push(new ItemViewModel("Concept 2", "4"));
projectMockUp.RoadMapExplorerVM = new ExplorerViewModel(ExplorerEnumType.Roadmap);
projectMockUp.RoadMapExplorerVM.MenuLists.push(new ItemViewModelList());
projectMockUp.RoadMapExplorerVM.MenuLists[0].Pool = new ItemViewModel("Product X", "97")
projectMockUp.RoadMapExplorerVM.MenuLists[0].Items = new Array<ItemViewModel>();
projectMockUp.RoadMapExplorerVM.MenuLists[0].Items.push(new ItemViewModel("Version 1", "5"));
projectMockUp.RoadMapExplorerVM.MenuLists[0].Items.push(new ItemViewModel("Version 2", "6"));
export var competitorScreenMockUp = new ScreenViewModel(ExplorerEnumType.Market);
competitorScreenMockUp.Ressource = new RessourceViewModel("Excel", 0);
competitorScreenMockUp.Ressource.ManagerId =  97
competitorScreenMockUp.Ressource.StatusEnumType = StatusEnumType.Finalised;
competitorScreenMockUp.CardLists.push(new ItemViewModelList());
competitorScreenMockUp.CardLists[0].Items.push(new ItemViewModel("POSITIONING","123"));
competitorScreenMockUp.CardLists[0].Items[0].Summary = `Industry standard for managing basic business processes`;
competitorScreenMockUp.CardLists[0].Items.push(new ItemViewModel("STRENGTH","123"));
competitorScreenMockUp.CardLists[0].Items[1].Summary = `(+) Most Popular Spreadsheet
(-) Lorem Ipsum
...`;
competitorScreenMockUp.CardLists[0].Items.push(new ItemViewModel("REVIEWS","123"));
competitorScreenMockUp.CardLists[0].Items[2].Summary = `...`;
competitorScreenMockUp.CardLists[0].Items.push(new ItemViewModel("VENDOR","123"));
competitorScreenMockUp.CardLists[0].Items[3].Summary = `@fa:link:fa@ @link: https://products.office.com/en/excel @link@Website:link@
@fa:money-bill-wave:fa@ $8.25 user/month`;
competitorScreenMockUp.CardLists.push(new ItemViewModelList());
competitorScreenMockUp.CardLists[1].PoolDef = new RessourceViewModel("Easy to Use",123)
competitorScreenMockUp.CardLists[1].Items.push(new ItemViewModel("Can Do Everything UI","123"));
competitorScreenMockUp.CardLists[1].Items.push(new ItemViewModel("Designed for novice and experts","124"));
competitorScreenMockUp.CardLists.push(new ItemViewModelList());
competitorScreenMockUp.CardLists[2].PoolDef = new RessourceViewModel("Error Protection",123)
competitorScreenMockUp.CardLists[2].Items.push(new ItemViewModel("Undo & Redo Typing","123"));
competitorScreenMockUp.CardLists[2].Items.push(new ItemViewModel("Wrong Data AutoCorrected","124"));
competitorScreenMockUp.CardLists.push(new ItemViewModelList());
competitorScreenMockUp.CardLists[3].PoolDef = new RessourceViewModel("Strong Productivity",123)
competitorScreenMockUp.CardLists[3].Items.push(new ItemViewModel("Optimised Keyboard inputting","123"));
competitorScreenMockUp.CardLists[3].Items.push(new ItemViewModel("Predefined Formula Library","124"));
competitorScreenMockUp.CardLists[3].Items.push(new ItemViewModel("Macro automation","124"));
competitorScreenMockUp.CardOptionLists.push(new ItemViewModelList());
competitorScreenMockUp.HistoryLogList.Items.push(new ItemViewModel("30/02/2019 11:01", "xxx x",0,0,"JohnDoe@mail.com"));
competitorScreenMockUp.HistoryLogList.Items[0].Summary = "Add Best Parctice Easy to Use"
competitorScreenMockUp.DownloadList.Items.push(new ItemViewModel("Download Competitor", "1", 0, 0, "PDF Document"));
export var personaScreenMockUp = new ScreenViewModel(ExplorerEnumType.Market);
personaScreenMockUp.Ressource = new RessourceViewModel("Financial Controller", 0);
personaScreenMockUp.Ressource.ManagerId =  97
personaScreenMockUp.Ressource.StatusEnumType = StatusEnumType.Finalised;
personaScreenMockUp.CardLists.push(new ItemViewModelList());
personaScreenMockUp.CardLists[0].Items.push(new ItemViewModel("GOALS","123"));
personaScreenMockUp.CardLists[0].Items[0].Summary = `Analyze financial data
Prepare financial reports
Manage invoicing
...`;
personaScreenMockUp.CardLists[0].Items.push(new ItemViewModel("DISLIKES","123"));
personaScreenMockUp.CardLists[0].Items[1].Summary = `Inconsistent data entry 
Inaccurate reporting
...`;
personaScreenMockUp.CardLists[0].Items.push(new ItemViewModel("SOFTWARE","123"));
personaScreenMockUp.CardLists[0].Items[2].Summary = `Excel
SAP / Sage / Treasury / Accounting software
...`;
personaScreenMockUp.CardLists[0].Items.push(new ItemViewModel("USER ANALYTICS","123"));
personaScreenMockUp.CardLists[0].Items[3].Summary = `@fa:chart-pie:fa@ 20%
@fa:business-time:fa@ ~ 20m
@fa:thermometer-full:fa@ max. 1h30`;
personaScreenMockUp.CardLists.push(new ItemViewModelList());
personaScreenMockUp.CardLists[1].PoolDef = new RessourceViewModel("Want to Have Quick Access to Most Used Features so that I improve my productivity and stay alerted",123)
personaScreenMockUp.CardLists[1].Items.push(new ItemViewModel("Given I want to use an important feature When I Navigate to Start Screen Then I access feature in one click","123"));
personaScreenMockUp.CardLists.push(new ItemViewModelList());
personaScreenMockUp.CardLists[2].PoolDef = new RessourceViewModel("Want to Compare Costing With Invoices so that I manage error and fault tolerance",123)
personaScreenMockUp.CardLists[2].Items.push(new ItemViewModel("Given Invoices When No difference with costs exists Then I approve purchase completion","123"));
personaScreenMockUp.CardOptionLists.push(new ItemViewModelList());
personaScreenMockUp.HistoryLogList.Items.push(new ItemViewModel("30/02/2019 11:01", "xxx x",0,0,"JohnDoe@mail.com"));
personaScreenMockUp.HistoryLogList.Items[0].Summary = "Add Best Parctice Easy to Use"
personaScreenMockUp.DownloadList.Items.push(new ItemViewModel("Download persona", "1", 0, 0, "PDF Document"));
export var UCScreenMockUp = new ScreenViewModel(ExplorerEnumType.Requirement);
UCScreenMockUp.Ressource = new RessourceViewModel("Log Into Application", 0);
UCScreenMockUp.Ressource.ManagerId =  99;
UCScreenMockUp.Ressource.StatusEnumType = StatusEnumType.Draft;
UCScreenMockUp.Ressource.Definition = `{ "Context": "Game Context", "Scope": 1, "Level": 1,
"Before": "Game Ready", "Success": "You win", "Failure": "Game Over",
"Actors": "Player 1", "Start": "Start"}`;
UCScreenMockUp.Ressource.ScaleOrder = 1; 
UCScreenMockUp.Ressource.StepOrder = 1; 
UCScreenMockUp.CardLists.push(new ItemViewModelList());
UCScreenMockUp.CardLists[0].Items.push(new ItemViewModel("NORMAL FLOW","123"));
UCScreenMockUp.CardLists[0].Items[0].Summary = `1. Show Login Form
2. Check Login and Password :
2.1 Check Completness
2.2 Check Authentication Validity
2.3 Check User Account Activation
3. Show Homepage`;
UCScreenMockUp.CardLists[0].Items.push(new ItemViewModel("EXTENSIONS","123"));
UCScreenMockUp.CardLists[0].Items[1].Summary = `2.A User needs Temporary Password : Show Temporary Password Request Form
2.1.A Login or Password are missing : Show error message
2.2.A Unknown Login : Empty Password Field
2.2.B Invalid Password : Empty Password Field
2.3.A User Account is Desactivated : Empty Password Field
2.3.B Password Validity Period Is Ended : Empty Password Field
3.A Specific Landing Page browsed by User : Show Specific Page
3.A Password Validity Period Is Ending Soon : Show Reset Password Form`;
UCScreenMockUp.CardLists[0].Items.push(new ItemViewModel("SUB-VARIATIONS","123"));
UCScreenMockUp.CardLists[0].Items[2].Summary = `1. Parameter [Auth: SSO, SSO+AD] and Valid Authentication Token (Provided by Identity Provider UCs, not treated here) : Show Homepage
1. Parameter [Auth: SSO] and No Valid Authentication Token : Redirect to Identity Provider Login Page
1. Parameter [Auth: SSO+AD] and No Valid Authentication Token : Show Login Form with Link Redirecting to Identity Provider Login Page`;
UCScreenMockUp.CardLists[0].Items.push(new ItemViewModel("CONDITIONS","123"));
UCScreenMockUp.CardLists[0].Items[3].Summary = `@fa:user-friends:fa@ Default User, Autorisation Server
@fa:flag:fa@ User is Logout
@fa:trophy:fa@ User is Connected to application
@fa:ban:fa@ User is Logout
@fa:flag-checkered:fa@ User Browse to Website`;
UCScreenMockUp.CardLists.push(new ItemViewModelList());
UCScreenMockUp.CardLists[1].PoolDef = new RessourceViewModel("LOGIN FORM",123)
UCScreenMockUp.CardLists[1].PoolDef.DependencyList.push(new AssociationViewModel());
UCScreenMockUp.CardLists[1].PoolDef.DependencyList[0].AssociationId = 33;
UCScreenMockUp.CardLists[1].PoolDef.DependencyList[0].ChildName = "Password Age Validity";
UCScreenMockUp.CardLists[1].PoolDef.DependencyList[0].ContractResponsibility = "Check Password";
UCScreenMockUp.CardLists[1].PoolDef.DependencyList.push(new AssociationViewModel());
UCScreenMockUp.CardLists[1].PoolDef.DependencyList[1].AssociationId = 44;
UCScreenMockUp.CardLists[1].PoolDef.DependencyList[1].ChildName = "Temporary Password Age Validity";
UCScreenMockUp.CardLists[1].PoolDef.DependencyList[1].ContractResponsibility = "Check TemporaryPassword";
UCScreenMockUp.CardLists.push(new ItemViewModelList());
UCScreenMockUp.CardLists[2].PoolDef = new RessourceViewModel("RESET FORM",123)
UCScreenMockUp.CardLists[2].PoolDef.DependencyList.push(new AssociationViewModel());
UCScreenMockUp.CardLists[2].PoolDef.DependencyList[0].AssociationId = 77;
UCScreenMockUp.CardLists[2].PoolDef.DependencyList[0].ChildName = "Identity";
UCScreenMockUp.CardLists[2].PoolDef.DependencyList[0].ContractResponsibility = "Set TemporaryPassword On MailAccount";
UCScreenMockUp.CardLists[2].PoolDef.DependencyList.push(new AssociationViewModel());
UCScreenMockUp.CardLists[2].PoolDef.DependencyList[1].AssociationId = 88;
UCScreenMockUp.CardLists[2].PoolDef.DependencyList[1].ChildName = "Password Reset Period Validity";
UCScreenMockUp.CardLists[2].PoolDef.DependencyList[1].ContractResponsibility = "Check MailAccount Can be reset";
UCScreenMockUp.CardOptionLists.push(new ItemViewModelList());
UCScreenMockUp.CardOptionLists[0].Items = new Array<ItemViewModel>();
UCScreenMockUp.CardOptionLists[0].Items.push(new ItemViewModel("Concept X SubConcept 1", "44"));
UCScreenMockUp.CardOptionLists[0].Items.push(new ItemViewModel("Concept X SubConcept 2", "55"));
UCScreenMockUp.CardOptionLists[0].Items.push(new ItemViewModel("Concept Y SubConcept 1", "66"));
UCScreenMockUp.HistoryLogList.Items.push(new ItemViewModel("30/02/2019 11:01", "Feature ZD",0,0,"JohnDoe@mail.com"));
UCScreenMockUp.HistoryLogList.Items[0].Summary = "Add Feature"
UCScreenMockUp.DownloadList.Items.push(new ItemViewModel("Download Use Case", "1", 0, 0, "PDF Document"));
UCScreenMockUp.DownloadList.Items.push(new ItemViewModel("Download Features", "2", 0, 0, "PDF Document"));
UCScreenMockUp.DownloadList.Items.push(new ItemViewModel("Download Use Case", "7", 0, 0, "Markdown document"));
UCScreenMockUp.DownloadList.Items.push(new ItemViewModel("Download Features", "8", 0, 0, "Markdown document"));
export var conceptScreenMockUp = new ScreenViewModel(ExplorerEnumType.Domain);
conceptScreenMockUp.Ressource = new RessourceViewModel("Concept 1", 0);
conceptScreenMockUp.Ressource.ManagerId =  98
conceptScreenMockUp.Ressource.StatusEnumType = StatusEnumType.Draft;
conceptScreenMockUp.CardLists.push(new ItemViewModelList());
conceptScreenMockUp.CardLists[0].Items.push(new ItemViewModel("DEFINITION","123"));
conceptScreenMockUp.CardLists[0].Items[0].Summary = `Lorem ipsum dolor sit amet consectetuer Lorem ipsum dolor sit amet consectetuer:
Lorem ipsum dolor sit amet consectetuer Lorem ipsum dolor sit amet consectetuer Lorem ipsum dolor sit amet consectetuer
Lorem ipsum dolor sit amet consectetuer`;
conceptScreenMockUp.CardLists[0].Items.push(new ItemViewModel("RESPONSIBILITIES","123"));
conceptScreenMockUp.CardLists[0].Items[1].Summary = `Concept : sss()
SubConceptA : wwww()
SubConceptA : kdkd()
SubConceptA : pp()
SubConceptB : mmm()
SubConceptB : aaa()
SubConceptB : ppp()`;
conceptScreenMockUp.CardLists[0].Items.push(new ItemViewModel("ENTITIES","123"));
conceptScreenMockUp.CardLists[0].Items[2].Summary = `* High Level ConceptG
* SubConceptR
* SubConceptL
1 SubConceptP
1 SubConceptE`;
conceptScreenMockUp.CardLists[0].Items.push(new ItemViewModel("AGGREGATES","123"));
conceptScreenMockUp.CardLists[0].Items[3].Summary = `High Level ConceptZ
High Level ConceptD`;
conceptScreenMockUp.CardLists.push(new ItemViewModelList());
conceptScreenMockUp.CardLists[1].PoolDef = new RessourceViewModel("STORAGE",123)
conceptScreenMockUp.CardLists[1].Items.push(new ItemViewModel("<Strategy Documents> MUST BE STORED IN 1 <Global Library>","123"));
conceptScreenMockUp.CardLists[1].Items.push(new ItemViewModel("<Strategy Documents> MUST BE STORED IN MANY <Specific Library>","124"));
conceptScreenMockUp.CardLists[1].Items[1].ScopeLists.push(["PR4","PR7","PR8"]);
conceptScreenMockUp.HistoryLogList.Items.push(new ItemViewModel("30/02/2019 11:01", "Concept DD",0,0,"JohnDoe@mail.com"));
conceptScreenMockUp.HistoryLogList.Items[0].Summary = "Add SubConcept"
conceptScreenMockUp.DownloadList.Items.push(new ItemViewModel("Download Rules", "1", 0, 0, "PDF Document"));
conceptScreenMockUp.DownloadList.Items.push(new ItemViewModel("Download Rules", "7", 0, 0, "Markdown document"));
conceptScreenMockUp.CardOptionLists.push(new ItemViewModelList());
conceptScreenMockUp.CardOptionLists[0].Items = new Array<ItemViewModel>();
conceptScreenMockUp.CardOptionLists[0].Items.push(new ItemViewModel("Concept O", "44"));
conceptScreenMockUp.CardOptionLists[0].Items.push(new ItemViewModel("Concept O SubConcept 1", "44"));
conceptScreenMockUp.CardOptionLists[0].Items.push(new ItemViewModel("Concept O SubConcept 2", "55"));
conceptScreenMockUp.CardOptionLists[0].Items.push(new ItemViewModel("Concept T", "64"));
conceptScreenMockUp.CardOptionLists[0].Items.push(new ItemViewModel("Concept T SubConcept 5", "74"));
conceptScreenMockUp.CardOptionLists[0].Items.push(new ItemViewModel("Concept T SubConcept 7", "85"));
export var roadmapScreenMockUp = new ScreenViewModel(ExplorerEnumType.Roadmap);
roadmapScreenMockUp.Ressource = new RessourceViewModel("Demo", 0);
roadmapScreenMockUp.Ressource.ManagerId =  97
roadmapScreenMockUp.Ressource.StatusEnumType = StatusEnumType.Finalised;
roadmapScreenMockUp.Ressource.DateDetail1 = [2,1,2020];
roadmapScreenMockUp.Ressource.DateDetail2 = [9,1,2020];
roadmapScreenMockUp.CardLists.push(new ItemViewModelList());
roadmapScreenMockUp.CardLists[0].Items.push(new ItemViewModel("GOALS","123"));
roadmapScreenMockUp.CardLists[0].Items[0].Summary = `Improve Reliability : no deadlock when simoutaneous process X & Y
Improve Performance : Transaction Y < 1 Sec.
Replace [Profile Z] old Version
Working Continuous Integration`;
roadmapScreenMockUp.CardLists[0].Items.push(new ItemViewModel("RISKS","123"));
roadmapScreenMockUp.CardLists[0].Items[1].Summary = `UI Change Management
Mandatory Password Reset Confusion
Cache latency during workflow Z`;
roadmapScreenMockUp.CardLists[0].Items.push(new ItemViewModel("TEAMS","123"));
roadmapScreenMockUp.CardLists[0].Items[2].Summary = `Profile 3, 4 Dev Teams 
Profile 5 Dev Team 
Profile 7 Support Team`;
roadmapScreenMockUp.CardLists[0].Items.push(new ItemViewModel("TIMELINE (INTERNAL)","123"));
roadmapScreenMockUp.CardLists[0].Items[3].Summary = `@fa:calendar-alt:fa@ 01/2020 
Epic 1 
Changes 
@fa:calendar-check:fa@ 06/2020`; 
roadmapScreenMockUp.CardLists.push(new ItemViewModelList());
roadmapScreenMockUp.CardLists[1].PoolDef = new RessourceViewModel("EPIC 1 FEATURE SET",123)
roadmapScreenMockUp.CardLists[1].PoolDef.DependencyList.push(new AssociationViewModel());
roadmapScreenMockUp.CardLists[1].PoolDef.DependencyList[0].ChildName = "Login Form";
roadmapScreenMockUp.CardLists[1].PoolDef.DependencyList[0].ContractResponsibility = "Make it";
roadmapScreenMockUp.CardLists[1].PoolDef.DependencyList.push(new AssociationViewModel());
roadmapScreenMockUp.CardLists[1].PoolDef.DependencyList[1].ChildName = "Library";
roadmapScreenMockUp.CardLists[1].PoolDef.DependencyList[1].ContractResponsibility = "POC it, Make it";
roadmapScreenMockUp.CardLists.push(new ItemViewModelList());
roadmapScreenMockUp.CardLists[2].PoolDef = new RessourceViewModel("CHANGE SET",123)
roadmapScreenMockUp.CardLists[2].PoolDef.DependencyList.push(new AssociationViewModel());
roadmapScreenMockUp.CardLists[2].PoolDef.DependencyList[0].AssociationId = 111;
roadmapScreenMockUp.CardLists[2].PoolDef.DependencyList[0].ChildName = "Home Screen";
roadmapScreenMockUp.CardLists[2].PoolDef.DependencyList[0].ContractResponsibility = "Responsiveness ++";
roadmapScreenMockUp.CardLists[2].PoolDef.DependencyList.push(new AssociationViewModel());
roadmapScreenMockUp.CardLists[2].PoolDef.DependencyList[1].AssociationId = 222;
roadmapScreenMockUp.CardLists[2].PoolDef.DependencyList[1].ChildName = "SSO Support";
roadmapScreenMockUp.CardLists[2].PoolDef.DependencyList[1].ContractResponsibility = "New IP Support";
roadmapScreenMockUp.CardOptionLists.push(new ItemViewModelList());
roadmapScreenMockUp.CardOptionLists[0].Items = new Array<ItemViewModel>();
roadmapScreenMockUp.CardOptionLists[0].Items.push(new ItemViewModel("Feature X", "FeatureId"));
roadmapScreenMockUp.CardOptionLists[0].Items.push(new ItemViewModel("Feature Y", "FeatureId"));
roadmapScreenMockUp.CardOptionLists[0].Items.push(new ItemViewModel("Feature Z", "FeatureId"));
roadmapScreenMockUp.HistoryLogList.Items.push(new ItemViewModel("30/02/2019 11:01", "Version 0.0.1",0,0,"JohnDoe@mail.com"));
roadmapScreenMockUp.HistoryLogList.Items[0].Summary = "Add Feature Set"
roadmapScreenMockUp.DownloadList.Items.push(new ItemViewModel("Download Version", "1", 0, 0, "PDF Document"));
roadmapScreenMockUp.DownloadList.Items.push(new ItemViewModel("Download Version", "7", 0, 0, "Markdown document"));
export var featureMatrixExplorerMockUp = new ScreenViewModel(ExplorerEnumType.Matrix);
featureMatrixExplorerMockUp.Ressource = new RessourceViewModel("Features Comparison", 0);
featureMatrixExplorerMockUp.Ressource.ScaleOrder = 2;
featureMatrixExplorerMockUp.Ressource.ManagerId =  -1
featureMatrixExplorerMockUp.CardLists.push(new ItemViewModelList());
featureMatrixExplorerMockUp.CardLists[0].Pool = new ItemViewModel("Business Process U","-1",0, 0,"ConceptX");
featureMatrixExplorerMockUp.CardLists[0].Items.push(new ItemViewModel("Feature A", "123",100, (Math.random()>0.5? 0: 100), "1"));
featureMatrixExplorerMockUp.CardLists[0].Items[0].ScopeLists.push(["PR1","PR2","PR3"]);
featureMatrixExplorerMockUp.CardLists[0].Items.push(new ItemViewModel("Feature B", "124",100, (Math.random()>0.5? 0: 100), "2"));
featureMatrixExplorerMockUp.CardLists[0].Items[1].ScopeLists.push(["PRDemo","PR1","PR3","PR5","PR7","PR8"]);
featureMatrixExplorerMockUp.CardLists[0].Items.push(new ItemViewModel("Feature C", "124",100, (Math.random()>0.5? 0: 100), "3"));
featureMatrixExplorerMockUp.CardLists[0].Items[2].ScopeLists.push(["PRDemo","PR2","PR4","PR5","PR7","PR9"]);
featureMatrixExplorerMockUp.CardLists.push(new ItemViewModelList()); 
featureMatrixExplorerMockUp.CardLists[1].Pool = new ItemViewModel("Business Process P","ConceptId",0, 0,"ConceptX");
featureMatrixExplorerMockUp.CardLists[1].Items.push(new ItemViewModel("Feature D", "124",100, (Math.random()>0.5? 0: 100), "1"));
featureMatrixExplorerMockUp.CardLists[1].Items[0].ScopeLists.push(["PRDemo","PR9","PR8"]);
featureMatrixExplorerMockUp.CardOptionLists.push(new ItemViewModelList());
featureMatrixExplorerMockUp.CardOptionLists[0].Items = new Array<ItemViewModel>();
featureMatrixExplorerMockUp.CardLists.push(featureMatrixExplorerMockUp.CardLists[0]);
featureMatrixExplorerMockUp.CardLists.push(featureMatrixExplorerMockUp.CardLists[0]);
featureMatrixExplorerMockUp.CardLists.push(featureMatrixExplorerMockUp.CardLists[0]);
featureMatrixExplorerMockUp.CardLists.push(featureMatrixExplorerMockUp.CardLists[0]);
featureMatrixExplorerMockUp.CardLists.push(featureMatrixExplorerMockUp.CardLists[0]);
featureMatrixExplorerMockUp.CardLists.push(featureMatrixExplorerMockUp.CardLists[0]);
featureMatrixExplorerMockUp.CardLists.push(featureMatrixExplorerMockUp.CardLists[0]);
featureMatrixExplorerMockUp.CardLists.push(featureMatrixExplorerMockUp.CardLists[0]);
featureMatrixExplorerMockUp.CardLists.push(featureMatrixExplorerMockUp.CardLists[0]);
featureMatrixExplorerMockUp.CardLists.push(featureMatrixExplorerMockUp.CardLists[0]);
export var ruleMatrixExplorerMockUp = new ScreenViewModel(ExplorerEnumType.Matrix);
ruleMatrixExplorerMockUp.Ressource = new RessourceViewModel("Business Rules Comparison", 0);
ruleMatrixExplorerMockUp.Ressource.ScaleOrder = 1;
ruleMatrixExplorerMockUp.Ressource.ManagerId =  -1
ruleMatrixExplorerMockUp.CardLists.push(new ItemViewModelList());
ruleMatrixExplorerMockUp.CardLists[0].Pool = new ItemViewModel("SubConceptA","ConceptId",100, (Math.random()>0.5? 0: 100),"ConceptX");
ruleMatrixExplorerMockUp.CardLists[0].Items.push(new ItemViewModel("<SubConceptA> MUST CONTAINS <ConstraintX>", "123",0, 0, "A"));
ruleMatrixExplorerMockUp.CardLists[0].Items[0].ScopeLists.push(["PR1","PR2","PR3"]);
ruleMatrixExplorerMockUp.CardLists[0].Items.push(new ItemViewModel("<SubConceptA> MUST CONTAINS <ConstraintY>", "124",0, 0, "B"));
ruleMatrixExplorerMockUp.CardLists[0].Items[1].ScopeLists.push(["PRDemo","PR7","PR8"]);
ruleMatrixExplorerMockUp.CardLists.push(new ItemViewModelList()); 
ruleMatrixExplorerMockUp.CardLists[1].Pool = new ItemViewModel("SubConceptB","ConceptId",100, (Math.random()>0.5? 0: 100),"ConceptX");
ruleMatrixExplorerMockUp.CardLists[1].Items.push(new ItemViewModel("<SubConceptB> MUST BE IN LIST <A, B, C>", "124",0, 0, "A"));
ruleMatrixExplorerMockUp.CardLists[1].Items[0].ScopeLists.push(["PRDemo","PR7","PR8"]);
ruleMatrixExplorerMockUp.CardLists.push(ruleMatrixExplorerMockUp.CardLists[0]);
ruleMatrixExplorerMockUp.CardLists.push(ruleMatrixExplorerMockUp.CardLists[0]);
ruleMatrixExplorerMockUp.CardLists.push(ruleMatrixExplorerMockUp.CardLists[0]);
ruleMatrixExplorerMockUp.CardLists.push(ruleMatrixExplorerMockUp.CardLists[0]);
ruleMatrixExplorerMockUp.CardLists.push(ruleMatrixExplorerMockUp.CardLists[0]);
ruleMatrixExplorerMockUp.CardLists.push(ruleMatrixExplorerMockUp.CardLists[0]);
ruleMatrixExplorerMockUp.CardLists.push(ruleMatrixExplorerMockUp.CardLists[0]);
ruleMatrixExplorerMockUp.CardLists.push(ruleMatrixExplorerMockUp.CardLists[0]);
ruleMatrixExplorerMockUp.CardLists.push(ruleMatrixExplorerMockUp.CardLists[0]);
ruleMatrixExplorerMockUp.CardLists.push(ruleMatrixExplorerMockUp.CardLists[0]);
ruleMatrixExplorerMockUp.CardLists.push(ruleMatrixExplorerMockUp.CardLists[0]);
export var adminScreenMockUp = new ScreenViewModel(ExplorerEnumType.MenuUserAdmin);
adminScreenMockUp.Ressource = new RessourceViewModel("User Management", 0);
adminScreenMockUp.CardLists.push(new ItemViewModelList());//no header
adminScreenMockUp.CardLists.push(new ItemViewModelList());
adminScreenMockUp.CardLists[1].PoolDef = new RessourceViewModel("Product Manager",123)
adminScreenMockUp.CardLists[1].Items.push(new ItemViewModel("Crash test dummy 1","124"));
adminScreenMockUp.CardLists[1].Items.push(new ItemViewModel("Crash test dummy 2","124"));
adminScreenMockUp.CardLists.push(new ItemViewModelList());
adminScreenMockUp.CardLists[2].PoolDef = new RessourceViewModel("Product Strategist",123)
adminScreenMockUp.CardLists[2].Items.push(new ItemViewModel("Crash test dummy 3","124"));
adminScreenMockUp.CardLists.push(new ItemViewModelList());
adminScreenMockUp.CardLists[3].PoolDef = new RessourceViewModel("Software Developer",123)
adminScreenMockUp.CardLists[3].Items.push(new ItemViewModel("Crash test dummy 4","124"));
adminScreenMockUp.CardLists.push(new ItemViewModelList());
adminScreenMockUp.CardLists[4].PoolDef = new RessourceViewModel("Project Coordinator",123)
adminScreenMockUp.CardLists[4].Items.push(new ItemViewModel("Crash test dummy 5","124"));
adminScreenMockUp.CardLists.push(new ItemViewModelList());
adminScreenMockUp.CardLists[5].PoolDef = new RessourceViewModel("Project Manager",123)
adminScreenMockUp.CardLists[5].Items.push(new ItemViewModel("Crash test dummy 6","124"));
adminScreenMockUp.CardLists.push(new ItemViewModelList());
adminScreenMockUp.CardLists[6].PoolDef = new RessourceViewModel("Domain Expert",123)
adminScreenMockUp.CardLists[6].Items.push(new ItemViewModel("Crash test dummy 7","124"));
adminScreenMockUp.CardLists.push(new ItemViewModelList());
adminScreenMockUp.CardLists[7].PoolDef = new RessourceViewModel("Guest",123)
adminScreenMockUp.CardLists[7].Items.push(new ItemViewModel("Crash test dummy 8","124"));
adminScreenMockUp.HistoryLogList.Items.push(new ItemViewModel("30/02/2019 11:01", "Role DD",0,0,"JohnDoe@mail.com"));
adminScreenMockUp.HistoryLogList.Items[0].Summary = "Add User"
adminScreenMockUp.DownloadList.Items.push(new ItemViewModel("Download Users", "1", 0, 0, "PDF Document"));
export var SearchMockUp = new ItemViewModelList();
SearchMockUp.PoolDef = new RessourceViewModel("Search Query",123)
SearchMockUp.Items.push(new ItemViewModel("Result 1","124"));
SearchMockUp.Items.push(new ItemViewModel("Result 2","124"));
}