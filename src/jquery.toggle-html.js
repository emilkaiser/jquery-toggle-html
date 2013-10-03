(function ($) {
  $.fn.toggleHtml = function () {
    return this.each(function() {
      var $el = jq(this);
      if ($.data(this, 'toggle')) {
        $el.html($.data(this, 'toggle'));
        $.data(this, 'toggle', false);
      } else {
        $.data(this, 'toggle', $el.html());
        $el.html($el.attr('data-toggle'));
      }
    });
  };
})(jQuery);