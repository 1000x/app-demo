$(function() {
  "use strict";

  var defaults;
  
  var appshow = function(html, className) {

    className = className || "";
    var mask = $("<div class='weui_mask_transparent'></div>").appendTo(document.body);

    var tpl = '<div class="weui_toast ' + className + '">' + html + '</div>';
    var dialog = $(tpl).appendTo(document.body);

    dialog.show();
    dialog.addClass("weui_toast_visible");
  };

  var apphide = function() {
    $(".weui_mask_transparent").hide();
    $(".weui_toast_visible").removeClass("weui_toast_visible").transitionEnd(function() {
      $(this).remove();
    });
  }

  $.apptoast = function(text, style) {
    var className;
    if(style == "cancel") {
      className = "weui_toast_cancel";
    } else if(style == "forbidden") {
      className = "weui_toast_forbidden";
    }
    appshow('<i class="weui_icon_toast"></i><p class="weui_toast_content">' + (text || "完了") + '</p>', className);

    setTimeout(function() {
    	apphide();
    }, toastDefaults.duration);
  }

  $.appshowLoading = function(text) {
    var html = '<div class="weui_loading">';
    for(var i=0;i<12;i++) {
      html += '<div class="weui_loading_leaf weui_loading_leaf_' + i + '"></div>';
    }
    html += '</div>';
    html += '<p class="weui_toast_content">' + (text || "Loading...") + '</p>';
    appshow(html, 'weui_loading_toast');
  }

  $.hideLoading = function() {
    apphide();
  }

  var toastDefaults = $.apptoast.prototype.defaults = {
    duration: 2000
  }

//}(jQuery));
}($));
