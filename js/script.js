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
  $('.subBg').stop().slideDown();
});
$('.nav1').mouseover(function(){
  $('.submenu').stop().slideDown();
});
$('.nav2').mouseover(function(){
  $('.subBg').stop().slideDown();
});
$('.nav2').mouseover(function(){
  $('.submenu').stop().slideDown();
});
$('.question').mouseover(function(){
  $('.subBg').stop().slideDown();
});
$('.question').mouseover(function(){
  $('.submenu').stop().slideDown();
});
$('.submenu').mouseover(function(){
  $('.subBg').stop().slideDown();
});
$('.subBg').mouseout(function(){
  $('.subBg').stop().slideUp();
});
$('.subBg').mouseout(function(){
  $('.submenu').stop().slideUp();
});
// 모달창 안보이게
$('.container').hide()
    
// 모달창
$('.large').eq(0).click(function () {
    $('.container.img01').fadeIn(500);
});
$('.large').eq(1).click(function () {
    $('.container.img02').fadeIn(500);
});
$('.large').eq(2).click(function () {
    $('.container.img03').fadeIn(500);
});
$('.large').eq(3).click(function () {
    $('.container.img04').fadeIn(500);
});
// 모달창 닫기
$('.closeBtn').click(function(){
  $('.container').fadeOut(500);  
});