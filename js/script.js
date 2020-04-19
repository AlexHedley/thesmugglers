$(document).ready(function(){
	//Open all external links in a new window
    $('a[href^="http://"]')
        .attr({
            target: "_blank",
            title: "Opens in a new window"
        });
});