function getElementLeft(element)
{
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    while (current !== null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
}
function getElementTop(element)
{
    var actualTop = element.offsetTop;
    var current = element.offsetParent;
    while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}
function DoDisplacement()
{
    var cnt = document.getElementById("myAnimate_Mu");
    var L = $(window).width();
    var l = getElementLeft(document.getElementById("imageLabMuIcon"))+26;
    if ($(window).width() >= 980) l += 10;
    var R = $(window).height();
    var r = getElementTop(document.getElementById("imageLabMuIcon"))+38;
    var a = Math.round(l-(L/2-l)/19);
    var b = Math.round(r-(R/2-r)/19-R/2-10);
    
    cnt.style.webkitTransformOrigin = a+"px "+b+"px";
    cnt.style.webkitTransform = "scale(0.05, 0.05) translate(0px, 0px)";
    cnt.style.webkitTransition = "all 1s 0s linear";
}
function DoAnimate()
{
    var cnt1 = document.getElementById("myAnimate_Hi");
    cnt1.style.webkitTransform = "scale(1, 0) translate(0, 0)";
    cnt1.style.webkitTransition = "all 1s 0s ease-in";
    
    var cnt2 = document.getElementById("myAnimate_Mu");
    cnt2.style.webkitTransform = "scale(1, 1) translate(0, 0)";
    cnt2.style.webkitTransition = "all 1s 1s ease-out";
}
$(document).ready(function() {
    if ($(window).width() >= 768 && $(window).height() >= 400) {
        $.blockUI({
            onOverlayClick: $.unblockUI,
            message: $('#myAnimate'),
            fadeIn: 700,
            fadeOut: 700,
            timeout: 3800,
            showOverlay: true,
            centerY: false,
            css: {
                width: $(window).width()+'px',
                height: '400px',
                top: ($(window).height()-400)/2+'px',
                left: '0px',
                right: '',
                border: 'none',
                padding: '0px',
                backgroundColor: '#000',
                '-webkit-border-radius': '10px',
                '-moz-border-radius': '10px',
                opacity: .8,
                color: '#fff'
            }
        });
        
        var cnt1 = document.getElementById("myAnimate_Hi");
        cnt1.style.left = ($(window).width()-$(cnt1).width())/2+'px';
        cnt1.style.top = (400-$(cnt1).height())/2+'px';
        var cnt2 = document.getElementById("myAnimate_Mu");
        cnt2.style.left = ($(window).width()-$(cnt2).width())/2+'px';
        cnt2.style.top = (400-$(cnt2).height())/2+'px';

        //alert($(document.getElementById("imageLabMuIcon")).height());
        //alert(getElementLeft(document.getElementById("imageLabMuIcon")));
        //alert(getElementTop(document.getElementById("imageLabMuIcon")));
        var t1 = setTimeout("DoAnimate()", 1000);
        var t3 = setTimeout("DoDisplacement()", 3000);
        //alert($(cnt).height());
        //setTimeout($.unblockUI, 2000);
    }
});
