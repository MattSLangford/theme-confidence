function extractDomain(url) {
    var domain;
    return '';
}

function pinboardLinkroll()
{
    var items;
    
    this.set_items = function(i)
    {
        this.items = i;
    }
    this.show_bmarks = function()
    {
        //document.write();
        var lines = [];
        for (var i in this.items)
        {
            var item = this.items[i];
            var str = this.format_item(item);
            lines.push(str);
        }
        document.write(lines.join("\n"));
    
    }
    this.cook = function(v)
    {
        if (v.replace)
        {
            return v.replace('"', '&quot;').replace('<', '&lt;').replace('>', '&gt>');
        }
        return '';
    }
    
    this.format_item = function(it)
    {
        var str = "<li class=\"pinboard_link\">";
        if (!it.d) { return; }
        str += "<a href=\"" + this.cook(it.u) + "\">" + this.cook(it.d) + "</a>";
        if (it.n)
        {
            str += "<span class=\"pinboard_desc\">" + this.cook(it.n) + "</span>\n";
        }

        return str;
    }
}

pinboardLinkroll.prototype = new pinboardLinkroll();