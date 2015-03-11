$(document).ready(function () {
  $(".show-details").click(function () {
    $(this).parent().addClass("hidden-xs").next().removeClass("hidden-xs").next().removeClass("hidden-xs");
    event.preventDefault();
  });

  $(".hide-details").click(function () {
    $(this).parent().addClass("hidden-xs").prev().addClass("hidden-xs").prev().removeClass("hidden-xs");
    event.preventDefault();
  });
});
