//자동슬라이드
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
// 검색창
$("#quest").click(function(){
  $(".question").slideToggle(50);
});
// 메뉴
$('.nav1').mouseover(function(){
  $('.submenu').stop().slideDown();
});
$('.nav2').mouseover(function(){
  $('.submenu').stop().slideDown();
});
$('.question').mouseover(function(){
  $('.submenu').stop().slideDown();
});
$('.submenu').mouseover(function(){
  $('.this').stop().slideDown();
});
$('.submenu').mouseout(function(){
  $('.submenu').stop().slideUp();
});
//카드
$('.pic1').mouseover(function () {
  $('.large').eq(0).fadeIn(500);
  // $('.large').eq(0).Attr('display', 'block');
});