$(function(){
  // 스킵메뉴
  $('.skip_menu a').focus(function(){
    $('.skip_menu').addClass('active');
  });
  $('.skip_menu a').blur(function(){
    $('.skip_menu').removeClass('active');
  });
  // 배너 닫기
  $('#banner01_close').on('click',function(){
    $('.banner01').slideUp(200);
  });
  // 박스오피스 슬라이더
  var swiper01 = new Swiper('.swiper-container01',{
    spaceBetween:32,
    slidesPerView:'auto',
  });
  var swiper02 = new Swiper('.swiper-container02',{
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})
// 