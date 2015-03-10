'use strict';

var members = {
  周梦宇 : '会长(big boss), Android(boss)',
  陈光 : '技术顾问(big boss)',
  何钦尧 : 'Web(boss), 人力',
  张阳坤 : 'iOS(boss)',
  岳大禹 : 'Android(boss)',
  张艺莹 : '宣传(妹子)',
  李平允 : '人力',
  谭思颖 : '宣传(妹子)',
  孙悦慧 : '设计(妹子)',
  江颖 : '设计(妹子)',
  陶君宇 : '宣传',
  郭倩 : '设计(妹子)',
  黄维啸 : 'PC',
  叶曦 : 'PC(妹子)',
  方块 : 'PC',
  蔡立崴 : 'PC',
  庄天翼 : 'Web(大腿)',
  赵金昊 : 'Web(大腿)',
  杨松洲 : 'Web(小鲜肉)',
  卫国扬 : 'Web(小鲜肉)',
  刘家硕 : 'Web(老鲜肉)',
  耿正霖 : 'Web(大腿)',
  贾志鹏 : 'Web(大腿)',
  涂金正 : 'iOS',
  任桐正 : '宣传, 客服',
};

var presentID = '0';

$(document).ready(function () {
  $('img').mouseover(function () {
    $('#name_' + presentID).html($(this).attr('alt'));
    $('#info_' + presentID).html(members[$(this).attr('alt')]);
  });

  $('div.rotate').mouseover(function () {
    var wheel = $(this).attr('id');
    presentID = wheel.charAt(wheel.length - 1);
  });
});