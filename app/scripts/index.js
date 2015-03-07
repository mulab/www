'use strict';

console.log('\'Allo \'Allo!');
var maxnav=4;

$(document).ready(function () {
  $('#back').height($('#slogan').outerHeight());
  $('#back-bottom').offset({top:($('body').height() - $('#footer').outerHeight())});
  $('#back-bottom').height($('#footer').outerHeight());
  for (var i = 1;i <= 4;i++) {
	var obj = document.getElementById("nav"+i);
	obj.onmouseover = function(){mOvernav(this)};
    obj.onmouseout = function(){mOutnav(this)};
  }
  for (var i = 1;i <= 3;i++) {
	var obj = document.getElementById("nav1nav"+i);
	obj.onmouseover = function(){mOveritem(this)};
    obj.onmouseout = function(){mOutitem(this)};
  }
  for (var i = 1;i <= 3;i++) {
	var obj = document.getElementById("nav3nav"+i);
	obj.onmouseover = function(){mOveritem(this)};
    obj.onmouseout = function(){mOutitem(this)};
  }
  var obj = document.getElementById("nav1");
  obj.onclick = function(){mClicknav(this)};
  var obj = document.getElementById("nav3");
  obj.onclick = function(){mClicknav(this)};
});

function hasClassName(inElement, inClassName)
{
  var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)');
  return regExp.test(inElement.className);
}

function addClassName(inElement, inClassName)
{
  if (!hasClassName(inElement, inClassName))
    inElement.className = [inElement.className, inClassName].join(' ');
}

function removeClassName(inElement, inClassName)
{
  if (hasClassName(inElement, inClassName)) {
    var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)', 'g');
    var curClasses = inElement.className;
    inElement.className = curClasses.replace(regExp, ' ');
  }
}

function mOvernav(obj) {
  addClassName(obj,"active");
}

function mOutnav(obj) {
  removeClassName(obj,"active");
}

function mOveritem(obj) {
  addClassName(obj,"activei");
}

function mOutitem(obj) {
  removeClassName(obj,"activei");
}

function mClicknav(obj) {
  var name = obj.id;
  if (hasClassName(obj,"clicked"))
    removeClassName(obj,"clicked");
  else
    addClassName(obj,"clicked");
}