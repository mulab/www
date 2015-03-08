$(document).ready(function () {
  $(".navbar-nav>li").mouseover(function () {
    $(this).addClass("active");
  }).mouseout(function () {
    $(this).removeClass("active");
  });
  $(".dropdown-menu>li").mouseover(function () {
    $(this).find(".itemcircle").css("visibility", "visible");
  }).mouseout(function () {
    $(this).find(".itemcircle").css("visibility", "hidden");
  });
});