// main menu
$(document).ready(function(){
    $("ul.main-menu").mouseleave(
        function() {
            $("span.menu-line").attr("hidden", "hidden");
            $("span.menu-line").css({"opacity": "0", "width": "0"});
            $("span.menu-line").removeClass("transition");
        }
    );

    $("ul>li.main-menu-li").hover(
        function(e) {
            e.stopPropagation();
            $(this).addClass("hover");
            var left = $(this).offset().left;
            var width = $(this).width();

            if ($("span.menu-line").attr("hidden")) {
                $("span.menu-line").removeAttr("hidden").offset({left:left}).css({"display": "inline", "opacity": "1"});
                $("span.menu-line").animate({width: width}, "fast");
            }else{
                $("span.menu-line").addClass("transition");
                $("span.menu-line").css({"left": left, "width": width, "opacity": "1", "display": "inline"});
            }
        },
        function(e) {
            $(this).removeClass("hover");
            if (($("ul>li.main-menu-li").hasClass("hover"))) {
                $("span.menu-line").css({"opacity": "0", "width": "0"});
                $("span.menu-line").removeClass("transition");
            }
        }
    )
})