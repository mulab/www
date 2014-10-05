'use strict';

var state = 0;
var count = 2;
var stateArray = ['simplify', 'design_code'];

function performAminate() {
    $('#'+stateArray[state]).removeClass().addClass('animated bounceOutLeft').
        one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
            $(this).hide(0, function() {
                state = (state + 1) % count;
                $('#'+stateArray[state]).show();
                $('#'+stateArray[state]).removeClass().addClass('animated bounceInLeft').
                    one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass();
                    });
            });
        });
}

$(document).ready(function() {
    $('#design_code').hide();
    window.setInterval(performAminate, 5000);
});
