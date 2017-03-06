// Ad.js
// Special Script File firstly for Lab Mu girl's Day
// By Helium 2017.3.6

'use strict';

var
mottos = [
    "还在找你社的条幅在哪里嘛？~",
    "给你们个忠告，千万别找你社男孩子当男票<br>他们连条幅都懒得挂。。。",
    "感觉fish萌萌哒！",
    "听说女生节和零食更配哦~",
    "表白Lab μ的女神们！",
    "我不管，我就要会写代码的漂亮小姐姐！"
],
finalMotto = "Lab μ的女神们，女生节快乐！";

function isSpecialDay(){
    var today = new Date();
    if ((today.getMonth() == 3) && (today.getDate() == 7)){
        return true;
    }else{
        return false;
    }
}

function addAd(){
    $("head").append("<style> #special_ad { position: fixed; left: 0; right: 0; z-index: 999; top: 15%; height: auto; padding: 0.9em; font-size: 1.5em; background-color: rgba(0, 0, 0, 0.5); color: #FFF; text-align: center; cursor: pointer;transition: background-color 0.3s;}#special_ad:hover{background-color: rgba(0, 0, 0, 0.8)};");
    $("body").append("<div id='special_ad' onclick='randomMotto()'>"+ mottos[Math.floor(Math.random() * mottos.length)] +"</b>");
    setTimeout(randomMotto, 3000);
    setTimeout(randomMotto, 6000);
    setTimeout(function(){
        $("#special_ad").html(finalMotto);
    }, 9000);
    setTimeout(function(){
        $("#special_ad").fadeOut(800);
    }, 12000);
}

function randomMotto(){
    $("#special_ad").html(mottos[Math.floor(Math.random() * mottos.length)]);
}

// Main Execute

if (isSpecialDay){
    addAd();
}