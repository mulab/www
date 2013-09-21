var broswer = function() {
    var _broswer = {};
    var sUserAgent = navigator.userAgent;
    var isOpera = sUserAgent.indexOf("Opera") > -1;
    if (isOpera) {
        /*
        if (navigator.appName == 'Opera') {
            _broswer.version = parseFloat(navigator.appVersion);
        } else {
            var reOperaVersion = new RegExp("Opera (\\d+.\\d+)");
            reOperaVersion.test(sUserAgent);
            _broswer.version = parseFloat(RegExp['$1']);
        }
        */
        var reOperaVersion = new RegExp("Version/(\\d+(?:\\.\\d*)?)");
        reOperaVersion.test(sUserAgent);
        var fOperaVersion = parseFloat(RegExp["$1"]);
        _broswer.version = parseFloat(RegExp['$1']);
        _broswer.opera = true;
    }
    var isChrome = sUserAgent.indexOf("Chrome") > -1;
    if (isChrome) {
        var reChorme = new RegExp("Chrome/(\\d+\\.\\d+(?:\\.\\d+\\.\\d+))?");
        reChorme.test(sUserAgent);
        _broswer.version = parseFloat(RegExp['$1']);
        _broswer.chrome = true;
    }
    var isKHTML = (sUserAgent.indexOf("KHTML") > -1 || sUserAgent.indexOf("Konqueror") > -1 || sUserAgent.indexOf("AppleWebKit") > -1) && !isChrome;
    if (isKHTML) {
        var isSafari = sUserAgent.indexOf("AppleWebKit") > -1;
        var isKonq = sUserAgent.indexOf("Konqueror") > -1;
        if (isSafari) {
            var reAppleWebKit = new RegExp("Version/(\\d+(?:\\.\\d*)?)");
            reAppleWebKit.test(sUserAgent);
            var fAppleWebKitVersion = parseFloat(RegExp["$1"]);
            _broswer.version = parseFloat(RegExp['$1']);
            _broswer.safari = true;
        } else if (isKonq) {
            var reKong = new RegExp("Konqueror/(\\d+(?:\\.\\d+(?\\.\\d)?)?)");
            reKong.test(sUserAgent);
            _broswer.version = parseFloat(RegExp['$1']);
            _broswer.konqueror = true;
        }
    }
    var isIE = sUserAgent.indexOf("compatible") > -1 && sUserAgent.indexOf("MSIE") > -1 && !isOpera;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(sUserAgent);
        _broswer.version = parseFloat(RegExp['$1']);
        _broswer.msie = true;
    }
    var isMoz = sUserAgent.indexOf("Gecko") > -1 && !isChrome && !isKHTML;
    if (isMoz) {
        var reMoz = new RegExp("rv:(\\d+\\.\\d+(?:\\.\\d+)?)");
        reMoz.test(sUserAgent);
        _broswer.version = parseFloat(RegExp['$1']);
        _broswer.mozilla = true;
    }
    return _broswer;
}
function getCookie(c_name)
{
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name+"=");
        if (c_start != -1) {
            c_start += c_name.length+1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
function setCookie(c_name, c_value, exprireHours)
{
	var cookieString = c_name+"="+escape(c_value);
	if (exprireHours > 0) {
		var date = new Date();
		date.setTime(date.getTime+exprireHours*3600*1000);
		cookieString = cookieString+";expire="+date.toGMTString();
	}
	document.cookie = cookieString;
}
function delCookie(c_name)
{
	c_start = document.cookie.indexOf(c_name+"=");
	if (c_start == -1) return;
	c_end = document.cookie.indexOf(";", c_start+c_name.length+1);
	if (c_end == -1) c_end = document.cookie.length;
	cnt = document.cookie;
	document.cookie = cnt.slice(0, c_start)+cnt.slice(c_end, cnt.length);
}
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
	cnt.style.mozTransformOrigin = a+"px "+b+"px";
    cnt.style.mozTransform = "scale(0.05, 0.05) translate(0px, 0px)";
    cnt.style.mozTransition = "all 1s 0s linear";
	cnt.style.oTransformOrigin = a+"px "+b+"px";
    cnt.style.oTransform = "scale(0.05, 0.05) translate(0px, 0px)";
    cnt.style.oTransition = "all 1s 0s linear";
	cnt.style.msTransformOrigin = a+"px "+b+"px";
    cnt.style.msTransform = "scale(0.05, 0.05) translate(0px, 0px)";
    cnt.style.msTransition = "all 1s 0s linear";
	cnt.style.transformOrigin = a+"px "+b+"px";
    cnt.style.transform = "scale(0.05, 0.05) translate(0px, 0px)";
    cnt.style.transition = "all 1s 0s linear";
}
function DoAnimate()
{
    var cnt1 = document.getElementById("myAnimate_Hi");
    cnt1.style.webkitTransform = "scale(1, 0) translate(0, 0)";
    cnt1.style.webkitTransition = "all 0.5s 0s ease-in";
    cnt1.style.mozTransform = "scale(1, 0) translate(0, 0)";
    cnt1.style.mozTransition = "all 0.5s 0s ease-in";
    cnt1.style.oTransform = "scale(1, 0) translate(0, 0)";
    cnt1.style.oTransition = "all 0.5s 0s ease-in";
    cnt1.style.msTransform = "scale(1, 0) translate(0, 0)";
    cnt1.style.msTransition = "all 0.5s 0s ease-in";
    cnt1.style.transform = "scale(1, 0) translate(0, 0)";
    cnt1.style.transition = "all 0.5s 0s ease-in";
    
    var cnt2 = document.getElementById("myAnimate_Mu");
    cnt2.style.webkitTransform = "scale(1, 1) translate(0, 0)";
    cnt2.style.webkitTransition = "all 0.5s 0.5s ease-out";
	cnt2.style.mozTransform = "scale(1, 1) translate(0, 0)";
    cnt2.style.mozTransition = "all 0.5s 0.5s ease-out";
	cnt2.style.oTransform = "scale(1, 1) translate(0, 0)";
    cnt2.style.oTransition = "all 0.5s 0.5s ease-out";
	cnt2.style.msTransform = "scale(1, 1) translate(0, 0)";
    cnt2.style.msTransition = "all 0.5s 0.5s ease-out";
	cnt2.style.transform = "scale(1, 1) translate(0, 0)";
    cnt2.style.transition = "all 0.5s 0.5s ease-out";
}
function showAnimate()
{
    // Check the version of the brower
    var result = broswer();
    if (result.safari && result.version < 3.1) return;
    if (result.msie && result.version < 10.0) return;
    if (result.chrome && result.version < 2.0) return;
    if (result.opera && result.version < 10.5) return;
    if (result.mozilla && result.version < 4.0) return;

	// Check the cookie
	/*
	result = getCookie("path");
	if (result == null || result == "") {
		if (document.cookie.length != 0) document.cookie += ";";
		document.cookie += "path=/";
	}
	*/
    /*
	result = getCookie("domain");
	if (result == null || result == "") {
		if (document.cookie.length != 0) document.cookie += ";";
		document.cookie += "domain=lab.mu";
	}
    */
	result = getCookie("lastLogin");
	var nowDate = new Date();
	if (result == null || result == "") {
		setCookie("lastLogin", nowDate.toString(), 24);
	}
	else {
		var preDate = new Date(result);
		if (nowDate-preDate < 3600000) return;
		setCookie("lastLogin", nowDate.toString(), 24);
	}

    if ($(window).width() >= 768 && $(window).height() >= 400) {
        $.blockUI({
            onOverlayClick: $.unblockUI,
            message: $('#myAnimate'),
            fadeIn: 700,
            fadeOut: 700,
            timeout: 2800,
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
                '-o-border-radius': '10px',
                '-ms-border-radius': '10px',
                'border-radius': '10px',
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

        var t1 = setTimeout("DoAnimate()", 1000);
        var t3 = setTimeout("DoDisplacement()", 2000);
    }
}
$(document).ready(function() {
	showAnimate();
});
