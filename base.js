function min(x, y) {
    if (x < y)
        return x;
    else
        return y;
}
window.onresize = function() {
    h = min($(window).height(), $("#cutBackgroundImg").height());
    //$("#cutBackgroundImg").css("clip", "rect(0px "+$(window).width()+"px "+$(window).height()+"px 0px)");
    $("#myCarousel").css("height", h+"px");
}
window.onload = function() {
    h = min($(window).height(), $("#cutBackgroundImg").height());
    //$("#cutBackgroundImg").css("clip", "rect(0px "+$(window).width()+"px "+$(window).height()+"px 0px)");
    $("#myCarousel").css("height", h+"px");
}
