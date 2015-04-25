
//ingredients checklist line out
$('.checklist').on('click', function(){
  $(this).toggleClass('checked');
  if ($(this).children('span').is('.box')) {
    $(this).children("span").removeClass('box').addClass('cbox');
  } else {
    $(this).children("span").removeClass('cbox').addClass('box');
  };
});

//sharebutton links
$('.share').on('click mouseenter', function() {
  $('#share').removeClass('sharebutton');
  $('.share-menu').removeClass('hide');
  $('.sharerecipe').addClass('hide');
});
$('.share').on('click mouseleave', function() {
  $('.sharerecipe').removeClass('hide');
  $('#share').addClass('sharebutton');
  $('.share-menu').addClass('hide');
});
