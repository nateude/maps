
jQuery(function() {
  var $navLinks = jQuery('nav .btn'),
      time = function(start,end){
        var distance = start-end,
            time = Math.abs(distance/.90);
        return time
      },
      jumpto = function(el){
        var start = jQuery(document).scrollTop(),
            end = jQuery(el).offset().top;
        jQuery('html, body').animate({
          scrollTop: end
        }, {
          duration: time(start,end),
          easing: 'swing'
        });
      };

  $navLinks.click(function(){
    jumpto(jQuery(this).attr('data-section'));
  });

});
