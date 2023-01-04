$(document).ready(function(){
  var slideI = 0;
  setInterval(function(){
    if (slideI < 2) {
      slideI++;
    } else {
      slideI = 0;
    }
    $('.newsbox').animate({
      left: slideI * (-750) + 'px'
    });
  }, 3000);
});

$("#quest").click(function(){
  $(".question").slideToggle(50);
});


