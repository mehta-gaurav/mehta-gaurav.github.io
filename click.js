var parts = window.location.href.split('/');
var match = parts.pop() || parts.pop(); 

if (match) {
        $("li a").each(function() {

var aa = this.href.substring(this.href.lastIndexOf('/') + 1);


            if (aa == match) {
                $(this).addClass("active");
            }
        });
    }

