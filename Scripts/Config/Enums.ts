
namespace I0 {
    export enum ExplorerEnumType { Home = 0, Market = 1, Persona = 2, Requirement = 3, Domain = 4, Roadmap = 5, Matrix = 6, MenuSearch = 7, MenuUserPrefs = 8, MenuUserAdmin = 9};
    export enum ScreenViewEnumType { Board = 0, Table = 1, Downloads = 2, Matrix = 3};
    export enum ContextEnumType
    {
        unknown = 0,
        Application = 1,
        FeatureProfile = 2,
        Market = 3,
        PersonaCategory = 4,
        BusinessProcess = 5,
        SubDomain = 6,
        Product = 7
    };
    export const ContextByExplorerType = [1, 3, 4, 5, 6, 7, 0, 0, 0, 0];
    
    export enum ViewEnumType
    {
        unknown = 0,
        Session = 1,
        UserAdmin = 2,
        Project = 3,
        Explorer = 4,
        Competitor = 5,
        Persona = 6,
        UseCase = 7,
        Concept = 8,
        Version = 9,
        Matrix = 10,
        Search = 11,
        UseCaseDirectory = 12,
        RuleDirectory = 13,
        VersionDirectory = 14,
        UserDirectory = 15
    };
    export const ViewByExplorerType = [0, 5, 6, 7, 8, 9, 0, 0, 0, 0];
    export const DataStructureByExplorerType = [0, 14, 17, 5, 8, 11, 0, 0, 0, 0];
    export const SubDataStructureByExplorerType = [0, 15, 18, 6, 9, 12, 0, 0, 0, 1];
    export const SubDataStructureItemByExplorerType = [0, 16, 19, 7, 10, 13, 0, 0, 0, 2];
    export enum DataStructureEnumType {
        unknown = 0,
        Role = 1,
        User = 2,
        Project = 3,
        Context = 4,
        UseCase = 5,
        Feature = 6,
        FeatureDependency = 7,
        Concept = 8,
        SubConcept = 9,
        SubConceptRule = 10,
        Version = 11,
        VersionEpic = 12,
        VersionEpicFeature = 13,
        Competitor = 14,
        BestPractice = 15,
        SuccessFactor = 16,
        Persona = 17,
        EpicStory = 18,
        EpicCriteria = 19
    }; 
    export enum AssociationEnumType { unknown = 0, HasOne = 1, HasMany = 2, Responsibility = 3, Goal = 4};
    export enum StatusEnumType { unknown = 0, Draft = 1, Finalised = 2};
    export enum ConfigEnumType { unknown = 0, Mandatory = 1, Optional = 2, Alternative = 3};
    export enum PDFEnumType { unknown = 0, UseCases = 1, BusinessRules = 2, Glossary = 3, UserDirectory = 4 };
}
