var count = '5';

function pinboardNS_fetch_script(url)
{
    document.writeln('<s'+'cript src="' + url + '"></s'+'cript>');
}
pinboardNS_fetch_script('js/linkroll.js');


function pinboardNS_show_bmarks(r)
{
    var lr = new pinboardLinkroll();
    lr.set_items(r);
    lr.show_bmarks();
 } 

var pinboardNS_linkroll;
var pinboardNS_callback = function(x)
{
    pinboardNS_linkroll = new pinboardLinkroll();
    pinboardNS_linkroll.set_items(x);
    pinboardNS_linkroll.show_bmarks();
}
var json_URL = "https://feeds.pinboard.in/json/v1/u:Matt425/?cb=pinboardNS_show_bmarks&count=" + count;

pinboardNS_fetch_script(json_URL);