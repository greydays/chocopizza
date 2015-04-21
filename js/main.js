$(document).ready(function() {
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
  $(".sharebutton").mouseenter(function() {
      $(".share-menu").fadeIn(1000);
  });
  $(".share").mouseleave(function() {
      $(".share-menu").fadeOut(1000);
  });
});
