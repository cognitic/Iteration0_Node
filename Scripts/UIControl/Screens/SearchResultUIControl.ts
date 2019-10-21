namespace I0 {
    export class SearchResultUIControl extends ScreenUIControl {
        ColumnFilter: Array<string> = [];

        constructor(searchVM: ScreenViewModel, appContext: Iteration0) {
            super("SearchResultUIControl", "#main", appContext);
            this.VM = searchVM;
            this.displayOptions.viewtabs = false;
        }
        public DisplayTableView(SearchResultList : ItemViewModelList) {
            var logHtml ="<div id='search-view'>"; var context =  this;
            logHtml += "<h3>"+SearchResultList.PoolDef.Name+"</h3>";
            jQuery.each(SearchResultList.Items, function () {
              logHtml += "<div><a class='result-link' href='\ressource?id= " + this.KeyValue + "'>" + this.Label +"</a>" + this.Summary +"</div>";
            });
            logHtml += "</div>";
            $("#matrix-view").html(logHtml);
            $(".result-link").click((e => { this.app.ShowAlert("Coming back soon !", "Work in progress"); return false }));
        }   
    }
}