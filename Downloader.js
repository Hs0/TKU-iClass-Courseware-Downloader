// ==UserScript==
// @name         TKU iClass Downloader
// @namespace    TKU.iClass 
// @version      2.3.4-TKU
// @license      MIT
// @description  Download Tronclass Courseware
// @author       Hs0 (Forked from NCJ)
// @match        *://iclass.tku.edu.tw/course/*/courseware
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.5.0/jquery.min.js
// ==/UserScript==
  
(document).bind('DOMSubtreeModified', function() {
    if ($('#Tronclass_Downloader').length == 0 && $('#file-previewer-with-note > div > div > div.header.clearfix').length) {
        $('#file-previewer-with-note > div > div > div.header.clearfix').append('<input type="button" value="強制下載" id="Tronclass_Downloader">');
        $("#Tronclass_Downloader").css("position", "relative").css("left", 10);
        $('#Tronclass_Downloader').click(function(){
            window.open(decodeURIComponent(document.getElementById('pdf-viewer').src.split("?file=")[1]));
        });
    }

    if ($('#Tronclass_Downloader_video').length == 0 && $('video').length && $('video')[0].children.length == 3 && $('video')[0].children[0].getAttribute('src').indexOf('/api') == 0) {
        var v=$('video')[0];
        for (var i of v.children) {
            $(v.parentNode.parentNode).prepend(`<a href="${i.getAttribute('src')}" id="Tronclass_Downloader_video">\t${i.getAttribute('label')}\t</a>`);
        }
    }
});
