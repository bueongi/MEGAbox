$(function(){
  // 스킵메뉴
  $('.skip_menu a').focus(function(){
    $('.skip_menu').addClass('active');
  });
  $('.skip_menu a').blur(function(){
    $('.skip_menu').removeClass('active');
  });

  // ===pc팝업===
  $('#popup_close').on('click',function(){
    if($('#day3_close').is(':checked')){
      $.cookie('pc_non_popup', 'yes', { expires: 3, path: '/' });
    }       
    $('.pc_popup').hide();
  });

  if($.cookie('pc_non_popup')=='yes'){
    $('.pc_popup').hide();
  }else{
    $('.pc_popup').show();
  };
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
    direction:'vertical',
    speed:300,
    autoplay:{
      delay:2000,
    }
  });
  var swiper03 = new Swiper('.swiper-container03',{
    direction:'horizontal',
    speed:300,
    autoplay:{
      delay:2000,
    }
  })
  $('.prev_btn').on('click',function(){
    swiper02.slidePrev(500);
    swiper02.slideNext(500);
  });
  $('.prev_btn').on('click',function(){
    swiper03.slidePrev(500);
    swiper03.slideNext(500);
  });

  swiper02.autoplay.stop();
  swiper03.autoplay.stop();
  $('.page span').text(1 + '/7');

  swiper02.on('slideChange',function(){
    var acIndex = swiper02.activeIndex;
    $('.nav_bar .sliding_box').css('margin-left',acIndex * 30);
    $('.page span').text(acIndex + 1 + '/7');
  });

  swiper03.on('slideChange',function(){
    var acIndex = swiper02.activeIndex;
    $('.nav_bar .sliding_box').css('margin-left',acIndex * 30);
  });
  $('.play_btn').on('click',function(){
    $('.pasue_btn').removeClass('hide');
    $(this).addClass('hide');
    swiper02.autoplay.start();
    swiper03.autoplay.start();
  });
  $('.pasue_btn').on('click',function(){
    $('.play_btn').removeClass('hide');
    $(this).addClass('hide');
    swiper02.autoplay.stop();
    swiper03.autoplay.stop();
  });
})
// 