/// <reference path="../Lib/jquery.d.ts" />
/// <reference path="../Lib/jspdf.d.ts" />

//
//      PDFGenerator
// 
namespace I0 {
class PDFGenerator {
    docVM: DocumentViewModel;
    pdf: jsPDFInterface;
    HeaderTemplate: string = '<div id="app_xxx###"></div>';
    FooterTemplate: string = '<div id="app_xxx###"></div>';

    constructor(document: DocumentViewModel, jsPDF: jsPDFInterface) {
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
    public Download() {
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
                pdfContentHtml += (lastH1 != this.Header1)? "<h1>" + this.Header1 + "</h1>" : "";
                pdfContentHtml += (lastH2 != this.Header2) ? "<h2>" + this.Header2 + "</h2>" : "";
                pdfContentHtml += "<h3>" + this.Header3 + "</h3>";
                pdfContentHtml += "<p>" + this.Content + "</p>";
                pdfContentHtml += "<p class='break'></p>";
                lastH1 = this.Header1; lastH2 = this.Header2;
        });
        $('#pdf-content').html(pdfContentHtml);

        var context = this;
        this.pdf.html($('#pdf-content')[0], {
            callback: function (doc) {
                doc.save(context.docVM.FileName + '.pdf');
            }
        });
    }

}
}