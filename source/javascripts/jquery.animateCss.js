/*!
 * jquery.animateCss.js v0.1.2 - 30 May, 2013
 * By João Gonçalves (http://goncalvesjoao.github.com)
 * Hosted on https://github.com/goncalvesjoao/jquery.animateCss
 * Licensed under MIT license.
 */

(function($){
  var animationEndEvents = "animationend.animateCss webkitAnimationEnd.animateCss oAnimationEnd.animateCss MSAnimationEnd.animateCss";

  var methods = {

    init: function(animationClass, callback) {
      return this.each(function() {
        var $this = $(this);

        $this.addClass('animated ' + animationClass);
        bindAnimationEnd(this, callback, animationClass);
      });
    },

    destroy: function() {
      return this.each(function() {
        unbindAnimationEnd(this);
      });
    }

  }

  function bindAnimationEnd(selector, callback, animationClass) {
    $(selector)
      .on(animationEndEvents, function(e) {
        $(this).removeClass('animated ' + animationClass);
        if (callback != undefined) {
          callback.bind(this)(e);
        }
        unbindAnimationEnd(this);
      });
  }

  function unbindAnimationEnd(selector) {
    $(selector)
      .off(animationEndEvents);
  }

  $.fn.animateCss = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else {
      return methods.init.apply(this, arguments);
    }
  };

})(jQuery, window, document);
