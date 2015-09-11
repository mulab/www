/*

CUSTOM FORM ELEMENTS

Created by Ryan Fait
www.ryanfait.com

The only things you may need to change in this file are the following
variables: checkboxHeight, radioHeight and selectWidth (lines 24, 25, 26)

The numbers you set for checkboxHeight and radioHeight should be one quarter
of the total height of the image want to use for checkboxes and radio
buttons. Both images should contain the four stages of both inputs stacked
on top of each other in this order: unchecked, unchecked-clicked, checked,
checked-clicked.

You may need to adjust your images a bit if there is a slight vertical
movement during the different stages of the button activation.

The value of selectWidth should be the width of your select list image.

Visit http://ryanfait.com/ for more information.

*/

/*

Modified by Adam Rybicki (2011-09-14)

+ wrappers
+ support for the duplicate IDs
+ support for empty values of selected option
+ current class for the active elements of checkbox & radio
+ sprites changed - no longer need to edit var

*/


/* No need to change anything after this */


document.write('<style type="text/css">input.styled { display: none; } select.styled { position: relative; opacity: 0; filter: alpha(opacity=0); z-index: 5; } select.disabled, input[type="checkbox"].disabled, input[type="radio"].disabled { opacity: 0.5; filter: alpha(opacity=50); }</style>');

var Custom = {
    init: function() {
      var inputs = jQuery("input.styled"), textnode, option, active;
      inputs.each(function(a,i) {
        var field = $(this);

        if((field.attr('type') == "checkbox" || field.attr('type') == "radio") && !field.hasClass("isstyled")) {
          if(field.attr('type') == "checkbox" || field.attr('type') != "radio"){
            var spanwrapper = jQuery('<span class="checkboxWrapper"></span>');
          }else{
            var spanwrapper = jQuery('<span class="radioWrapper"></span>');
          }

          field.addClass('isstyled');
          var span = jQuery('<span class="'+ field.attr('type') +'" id="inp'+ field.attr('id') + a +'"></span>');
          field.wrap(spanwrapper);
          field.before(span);

          if(field.attr('checked') == true) {
            if(field.attr('type') == "checkbox") {
              position = "100% 0";
              span.css('backgroundPosition',position);
            } else {
              position = "100% 0";
              span.css('backgroundPosition',position);
            }
          }

          field.click(Custom.checkLabel);
          field.change(Custom.clear);
          field.bind('clear',Custom.clear);
          if(!field.attr("disabled")) {
            span.mousedown(Custom.pushed);
            span.mouseup(Custom.check);
          } else {
            span.addClass("disabled");
          }
        }         
      });

      selects = jQuery("select.styled");
      selects.each(function(a,i) {
        var field = $(this);

        if(!field.hasClass("isstyled")) {
          field.addClass('isstyled');
          var textnode = field.find('option').first().text(); 

          field.find('option').each(function() {
            option = $(this);
            if (option.is(':selected')) {
              textnode = option.text();
            }
          });

          spanwrapper = jQuery('<span class="selectWrapper"></span>');
          span = jQuery('<span class="select" id="select'+ field.attr('id') + a +'"></span>').html(textnode);
          selarrow = jQuery('<span class="arrow"></span>');
          field.wrap(spanwrapper);
          field.before(span);
		  field.after(selarrow);
          field.data('optArtChosenOne',field.attr('id') + a);

          if(!field.attr("disabled")) {
            field.change(Custom.choose);
            field.bind("simulatechange",Custom.choose);
          } else {
            span.addClass('disabled');
          }
        }          
      });

      Custom.clear();
      jQuery(document).mouseup(Custom.clear);
      jQuery(window).trigger('custom-init');
    },
    pushed: function() {
      var span = $(this);
      field = span.next();

      if(field.attr('checked') == true && field.attr('type') == "checkbox") {
        span.css('backgroundPosition',"100% 0");
      } else if(field.attr('checked') == true && field.attr('type') == "radio") {
        span.css('backgroundPosition',"100% 0");
      } else if(field.attr('checked') != true && field.attr('type') == "checkbox") {
        span.css('backgroundPosition',"0 100%");
      } else {
        span.css('backgroundPosition',"0 100%");
      }
    },
    check: function() {
      var span = $(this);
      var field = span.next();
      if (field.attr('readonly')) return '';
      
      if (field.attr('checked') == true && field.attr('type') == "checkbox") {
        span.css('backgroundPosition',"0 0");
        span.removeClass('current');
        field.removeAttr('checked');
      }
      else {
        if(field.attr('type') == "checkbox") {
          span.css('backgroundPosition',"100% 100%");
          span.addClass('current');
        } else {
          span.css('backgroundPosition',"100% 100%");

          group = field.attr('name');
          inputs = $('input[name=\''+group+'\']');
          inputs.each(function() {
            if ($(this).attr('id') != field.attr('id')) {
              $(this).prev().css('backgroundPosition',"0 0");
              $(this).prev().removeClass('current');
            }
          });

          span.addClass('current');
        }
        field.attr('checked',true);
      }
      field.trigger('click', [field.attr('type')]);
      field.trigger('simulateclick', [field]);     
    },
    checkLabel: function(e, nochange) {
      var field = $(this);

      if (field.attr('readonly')) {
        // pole readonly - wymuszone zaznaczone
        field.attr('checked',true);
        Custom.clear();
        return '';
      }
      
      if (nochange=='checkbox') {
        // hack to prevent double click
        field.attr('checked',!field.attr('checked'));
      } else {
        if (field.attr('checked') == true) {
          if(field.attr('type') == "checkbox") {
            field.prev().css('backgroundPosition',"100% 100%");
            field.prev().attr('class',"checkbox");
            field.prev().addClass("current");
          } else {
            field.prev().css('backgroundPosition',"100% 100%");
            var group = field.attr('name');
            inputs = $('input[name=\''+group+'\']');
            inputs.each(function() {
              if(field.attr('id')!=$(this).attr('id')) {
                $(this).prev().css('backgroundPosition',"0 0");
                $(this).prev().attr('class',"radio");
              }
            });

            field.prev().attr('class',"radio");
            field.prev().addClass("current");
          }
        }
        else
        {
          field.prev().css('backgroundPosition',"0 0");
          field.prev().removeClass('current');
        }
        field.trigger('simulateclick', [field]);     
      }
    },
    clear: function(c) {
      jQuery("input.styled").each(function() {
        var field = $(this);
        if(field.attr('type') == "checkbox" && field.attr('checked') == true) {
          field.prev().css('backgroundPosition',"0 100%");
          field.prev().attr('class','checkbox current');
        } else if(field.attr('type') == "checkbox") {
          field.prev().css('backgroundPosition',"100% 0");
          field.prev().attr('class','checkbox');
        } else if(field.attr('type') == "radio" && field.attr('checked') == true) {
          field.prev().css('backgroundPosition',"0 100%");
          field.prev().attr('class','radio current');
        } else if(field.attr('type') == "radio") {
          field.prev().css('backgroundPosition',"100% 0");
          field.prev().attr('class','radio');
        }
      });
    },
    choose: function() {
      var field = $(this);
      options = field.find("option");

      options.each(function() {
        if ($(this).attr('selected')) {
          jQuery('#select'+field.data('optArtChosenOne')).text($(this).text());
        }
      });
      
      
  }
};

jQuery(document).ready(function() { Custom.init() });