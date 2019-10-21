
namespace I0 {
export const AccentColorOptions = ["#ff00dd", "#ffb300", "#d6ff00", "#00ff68","#7c00ff","#00fdff"];
export const AccentColorRefractions = ["#40323e", "#403232", "#394032", "#394032","#373240","#323e40"];
export const ContextLabels = ["Product Line", "Market", "Persona Type", "Business Process", "Sub-Domain", "Product", "x"];
export const ContextItemLabels = ["Project", "Competitor", "Persona", "Use Case", "Concept", "Version", "Matrix"];
export const ContextPluralLabels = ["Product Lines", "Competitors", "Persona", "Use Cases", "Concepts", "Versions", "Configurations"];
export const ContextSubItemLabels = ["Feature ¨Profile", "Best Practice", "Epic Story", "Feature", "SubConcept", "Epic Feature Set", ""];
export const ContextSubItemDetailLabels = ["", "Success Factor", "Acceptance Criteria", "Dependency", "Rule", "Goal(s)", ""];
export const RuleTypeOptions = new Array<ItemViewModel>();
RuleTypeOptions.push(new ItemViewModel("Definition", "1"));
RuleTypeOptions.push(new ItemViewModel("Structure", "2"));
RuleTypeOptions.push(new ItemViewModel("Decision", "3"));
RuleTypeOptions.push(new ItemViewModel("Behavior", "4")); 
export const RuleTypeExamples = new Array<ItemViewModel>();
RuleTypeExamples.push(new ItemViewModel("Ex: <term> MUST HAVE < at least, at most, exactly...> <term>", "1"));
RuleTypeExamples.push(new ItemViewModel("Ex : <term> MUST BE IN LIST < a, b, c...>", "2"));
RuleTypeExamples.push(new ItemViewModel("Ex : IF <condition> THEN <action>", "3"));
RuleTypeExamples.push(new ItemViewModel("Ex : <actor> MUST DO or not DO <#UCX, #FeatureY, #FeatureZ...>", "4"));
export const DocumentationSteps = new Array<ItemViewModel>();
DocumentationSteps.push(new ItemViewModel("New", "1"));
DocumentationSteps.push(new ItemViewModel("Draft", "2"));
DocumentationSteps.push(new ItemViewModel("Reviewed", "3"));
DocumentationSteps.push(new ItemViewModel("Approved", "4"));
export const UseCaseScopes = new Array<ItemViewModel>();
UseCaseScopes.push(new ItemViewModel("System (black-box)", "1"));
UseCaseScopes.push(new ItemViewModel("System (white-box)", "2"));
UseCaseScopes.push(new ItemViewModel("Component", "3"));
export const UseCaseLevels = new Array<ItemViewModel>();
UseCaseLevels.push(new ItemViewModel("User Goal", "1"));
UseCaseLevels.push(new ItemViewModel("Infrastructure", "2"));
export const MonthOptions = new Array<ItemViewModel>();
MonthOptions.push(new ItemViewModel("January", "1"));
MonthOptions.push(new ItemViewModel("February", "2"));
MonthOptions.push(new ItemViewModel("March", "3"));
MonthOptions.push(new ItemViewModel("April", "4"));
MonthOptions.push(new ItemViewModel("May", "5"));
MonthOptions.push(new ItemViewModel("June", "6"));
MonthOptions.push(new ItemViewModel("July", "7"));
MonthOptions.push(new ItemViewModel("August", "8"));
MonthOptions.push(new ItemViewModel("September", "9"));
MonthOptions.push(new ItemViewModel("October", "10"));
MonthOptions.push(new ItemViewModel("November", "11"));
MonthOptions.push(new ItemViewModel("December", "12"));
export const YearOptions = new Array<ItemViewModel>();
YearOptions.push(new ItemViewModel("2018", "2018"));
YearOptions.push(new ItemViewModel("2019", "2019"));
YearOptions.push(new ItemViewModel("2020", "2020"));
YearOptions.push(new ItemViewModel("2021", "2021"));
YearOptions.push(new ItemViewModel("2022", "2022"));
YearOptions.push(new ItemViewModel("2023", "2023"));
YearOptions.push(new ItemViewModel("2024", "2024"));
YearOptions.push(new ItemViewModel("2025", "2025"));
export var ReviewStatus = new Array<ItemViewModel>();
ReviewStatus.push(new ItemViewModel("First Draft", "1"));
ReviewStatus.push(new ItemViewModel("Work Document", "2"));
ReviewStatus.push(new ItemViewModel("Pending Global Review", "3"));
ReviewStatus.push(new ItemViewModel("Pending Final Review", "4"));
ReviewStatus.push(new ItemViewModel("Finalized", "5"));
export var PriorityLevels = new Array<ItemViewModel>();
PriorityLevels.push(new ItemViewModel("Nice to Have", "1"));
PriorityLevels.push(new ItemViewModel("Low", "2"));
PriorityLevels.push(new ItemViewModel("Medium", "3"));
PriorityLevels.push(new ItemViewModel("High", "4"));
PriorityLevels.push(new ItemViewModel("Mandatory", "5"));
export var PrecisionScale = new Array<ItemViewModel>();
PrecisionScale.push(new ItemViewModel("Slightly Precise", "1"));
PrecisionScale.push(new ItemViewModel("Moderately Precise", "2"));
PrecisionScale.push(new ItemViewModel("Precise", "3"));
PrecisionScale.push(new ItemViewModel("Very Precise", "4"));
PrecisionScale.push(new ItemViewModel("Extremely Precise", "5"));
export var ScaleOptions = new Array<ItemViewModel>();
ScaleOptions.push(new ItemViewModel("0.", "0"));
ScaleOptions.push(new ItemViewModel("1.", "1"));
ScaleOptions.push(new ItemViewModel("2.", "2"));
ScaleOptions.push(new ItemViewModel("3.", "3"));
ScaleOptions.push(new ItemViewModel("4.", "4"));
ScaleOptions.push(new ItemViewModel("5.", "5"));
export var StepOptions = new Array<ItemViewModel>();
StepOptions.push(new ItemViewModel("0", "0"));
StepOptions.push(new ItemViewModel("1", "1"));
StepOptions.push(new ItemViewModel("2", "2"));
StepOptions.push(new ItemViewModel("3", "3"));
StepOptions.push(new ItemViewModel("4", "4"));
StepOptions.push(new ItemViewModel("5", "5"));
export const ConfigOptions = new Array<ItemViewModel>();
ConfigOptions.push(new ItemViewModel("Mandatory", "1"));
ConfigOptions.push(new ItemViewModel("Optional", "2"));
ConfigOptions.push(new ItemViewModel("Alternative", "3"));
export var VersionStatusOptions = new Array<ItemViewModel>();
VersionStatusOptions.push(new ItemViewModel("Draft", "1"));
VersionStatusOptions.push(new ItemViewModel("Finalised", "2"));
export var RessourceStatusOptions = new Array<ItemViewModel>();
RessourceStatusOptions.push(new ItemViewModel("Pending", "1"));
RessourceStatusOptions.push(new ItemViewModel("Completed", "2"));
export var CardinalityOptions = new Array<ItemViewModel>();
CardinalityOptions.push(new ItemViewModel("Has One", "1"));
CardinalityOptions.push(new ItemViewModel("Has Many", "2"));
export const DownloadTypeIcons = {"PDF Document":"file-pdf","Zip Archive (C#)":"file-archive","Zip Archive (Xml)":"code","Markdown document":"link","Zip Archive (JSON)":"save"};
export const configTypeIcons = {"0":"fa-external-link-square-alt","1":"fa-circle","2":"fa-adjust","3":"fa-ban"};
}