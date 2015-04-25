
//ingredients checklist line out
$('.checklist').click(function(){
  $(this).toggleClass('checked');
  if ($(this).children('span').is('.box')) {
    $(this).children("span").removeClass('box').addClass('cbox');
  } else {
    $(this).children("span").removeClass('cbox').addClass('box');
  };
});

//sharebutton links
$('.share').mouseenter(function() {
  $('.share-menu').fadeIn(1000);
  $('#share').hide();
});
$('.share').mouseleave(function() {
  $('#share').show();
  $('.share-menu').hide();
});
