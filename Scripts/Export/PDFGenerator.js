/// <reference path=".\..\Libs\jquery.d.ts" />
/// <reference path=".\..\Libs\jspdf.d.ts" />
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
