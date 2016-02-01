//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp", "zoomOutDown");
//Author URL: http://webdesign-master.ru
(function($) {
    $.fn.animated = function(inEffect, outEffect, delay) {
        if (delay) {
            $(this).css({
                '-webkit-animation-delay': delay,
            '-moz-animation-delay': delay,
            '-o-animation-delay': delay,
            'animation-delay': delay
            });
        }
        $(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
            if (dir === "down") {
                $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
            } else {
                $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
            };
        }, {
            offset: "80%"
        }).waypoint(function(dir) {
            if (dir === "down") {
                $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
            } else {
                $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
            };
        }, {
            offset: -$(window).height()
        });
    };
})(jQuery);