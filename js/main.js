$(function() {
  let header = $('.header');
  let headerHeight = header.height();

  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
      header.addClass('header_fixed');
      $('body').css({
        'paddingTop': headerHeight+'px'
      });
    } else {
      header.removeClass('header.fixed');
      $('body').css({
        'paddingTop': 0
      })
    }
  });
});