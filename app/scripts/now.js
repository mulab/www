$(document).ready(function () {
    $('header').addClass('visibility');
    $('.carousel-iphone').addClass('visibility');
});

$(window).load(function () {
    $('header').addClass("animated fadeIn");
    $('.carousel-iphone').addClass("animated fadeInLeft");
});

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var navbar = $('.navbar-default');
    if (scrollTop > 200) {
        navbar.addClass('fixed-to-top');
    } else if (scrollTop == 0) {
        navbar.removeClass('fixed-to-top');
    }
});

$('header .carousel').carousel({
    interval: 3000
});
