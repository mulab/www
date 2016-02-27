$(document).ready(function(){
  var $head = $("<div></div>").addClass("header");
  $head.css({height: $(document).width() * 656 / 1300 + "px"})
  $("#nav").after();
  if ($(document).width() > 768) {var w = 5;}
  else {var w = 3;}
  $.getJSON("members.html.json",function(data){
    var manager=$("#manager");
    var i = 0;
    var l = data["manager"].length;
    var j = 0;
    var member = data["manager"];
    for (i = 0; i < l; i ++){
      if (j == 0){var tr = $("<div></div>").addClass("mytr");}
      var img = ($("<div></div>").addClass("flipper"));
      img.append(($("<div></div>").addClass("front")).append($("<img>").attr({ "src":member[i]["url"], "width":"100%"})));
      img.append((($("<div></div>").addClass("back")).append($("<h3></h3>").text(member[i]["name"]))).append($("<h5></h5>").text(member[i]["post"])));
      tr.append(($("<div></div>").addClass("headimg")).append((($("<div></div>").addClass("flip-container")).attr("ontouchstart","this.classList.toggle('hover');").val(i)).append(img)));
      j++;
      if(j == w || i == (l - 1)){
        manager.append(tr);
        j = 0;}
    }

    var manager=$("#consultant");
    var i = 0;
    var l = data["consultant"].length;
    var j = 0;
    var member = data["consultant"];
    for (i = 0; i < l; i ++){
      if (j == 0){var tr = $("<div></div>").addClass("mytr");}
      var img = ($("<div></div>").addClass("flipper"));
      img.append(($("<div></div>").addClass("front")).append($("<img>").attr({ "src":member[i]["url"], "width":"100%"})));
      img.append((($("<div></div>").addClass("back")).append($("<h3></h3>").text(member[i]["name"]))).append($("<h5></h5>").text(member[i]["post"])));
      tr.append(($("<div></div>").addClass("headimg")).append((($("<div></div>").addClass("flip-container")).attr("ontouchstart","this.classList.toggle('hover');").val(i)).append(img)));
      j++;
      if(j == w || i == (l - 1)){
        manager.append(tr);
        j = 0;}
    }

    var manager=$("#developer");
    var i = 0;
    var l = data["developer"].length;
    var j = 0;
    var member = data["developer"];
    for (i = 0; i < l; i ++){
      if (j == 0){var tr = $("<div></div>").addClass("mytr");}
      var img = ($("<div></div>").addClass("flipper"));
      img.append(($("<div></div>").addClass("front")).append($("<img>").attr({ "src":member[i]["url"], "width":"100%"})));
      img.append((($("<div></div>").addClass("back")).append($("<h3></h3>").text(member[i]["name"]))).append($("<h5></h5>").text(member[i]["post"])));
      tr.append(($("<div></div>").addClass("headimg")).append((($("<div></div>").addClass("flip-container")).attr("ontouchstart","this.classList.toggle('hover');").val(i)).append(img)));
      j++;
      if(j == w || i == (l - 1)){
        manager.append(tr);
        j = 0;}
    }

    var manager=$("#others");
    var i = 0;
    var l = data["others"].length;
    var member = data["others"];
    for (i = 0; i < l; i ++){
      if (j == 0){var tr = $("<div></div>").addClass("mytr");}
      var img = ($("<div></div>").addClass("flipper"));
      img.append(($("<div></div>").addClass("front")).append($("<img>").attr({ "src":member[i]["url"], "width":"100%"})));
      img.append((($("<div></div>").addClass("back")).append($("<h3></h3>").text(member[i]["name"]))).append($("<h5></h5>").text(member[i]["post"])));
      tr.append(($("<div></div>").addClass("headimg")).append((($("<div></div>").addClass("flip-container")).attr("ontouchstart","this.classList.toggle('hover');").val(i)).append(img)));
      j++;
      if(j == w || i == (l - 1)){
        manager.append(tr);
        j = 0;}
    }
  });
  var display = false;
  $("body").on("click",".flip-container",function () {
    if(!$(this).hasClass("hover")){
      if (display) {$(".tag").slideToggle("fast"); $(".tag").remove(); $(".hover").removeClass("hover");}
      display = true;
      $(this).addClass("hover");
      var $em = $("<em></em>");
      if (w == 5){var hw = 20;}
      else{var hw = 7;}
      $em.css({
      left: ($(this).parent()).position().left + ($(this).width() / 2) - hw + "px",
    });
      var block = ($("<div></div>").addClass("tag")).append($em);
      var card=($("<div></div>").addClass("card"));
      var info=($("<div></div>").addClass("discription"));
      var cat=((($(this).parent()).parent()).parent()).attr("id");
      var i = $(this).val();
      $.getJSON("members.html.json",function(data){
        card.append(($("<div></div>").addClass("top")).append($("<h1></h1>").text(data[cat][i]["name"])));
        card.append(($("<div></div>").addClass("img")).append($("<img>").attr({"src":data[cat][i]["url"], "width":"100%"})));
        card.append(($("<div></div>").addClass("tail")).append(($("<input>").addClass("button")).attr({"type":"bottom", "onclick":"location.href=" + data[cat][i]["page"], "value":"BLOG"})));
      });
      block.append($("<left></left>").append(card));
      block.append($("<right></right>").append(info));
      block.append($("<div></div>").addClass("clear"));
      (($(this).parent()).parent()).append(block.hide());
      block.slideToggle("fast");
    }
    else {$(this).removeClass("hover"); $(".tag").slideToggle("fast"); $(".tag").remove();}
  });
});
