/*! jquery.modal 2013-10-03 */
!function(a){a.fn.toggleHtml=function(){return this.each(function(){var b=jq(this);a.data(this,"toggle")?(b.html(a.data(this,"toggle")),a.data(this,"toggle",!1)):(a.data(this,"toggle",b.html()),b.html(b.attr("data-toggle")))})}}(jQuery);