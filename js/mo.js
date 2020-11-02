
$(function(){
  // ===스킵메뉴===
  var skip=$('.skip_menu>a');
  var skipMenu=$('.skip_menu');

  skip.on({
    focus:function(){
      skipMenu.addClass('active');
    },
    blur:function(){
      skipMenu.removeClass('active');
    }
  });

  // ===모바일팝업===
  $('#popup_close').on('click',function(){
    if($('#day3_close').is(':checked')){
      $.cookie('non_popup', 'yes', { expires: 3, path: '/' });
    }       
    $('.popup').hide();
  });

  if($.cookie('non_popup')=='yes'){
    $('.popup').hide();
  }else{
    $('.popup').show();
  }
  
  // vip클릭
  $('.vip_box').on('click',function(){
    confirm('로그인후 이용가능합니다. \n로그인 하시겠습니까?');
  });

  // 내비호출
  $('.burger_box').on('click',function(){
    $('nav').width(300);
    $('body,html').addClass('not_scroll');
    $('.before').show();
  });
  $('.nav_close').on('click',function(){
    $('nav').width(0);
    $('body,html').removeClass('not_scroll');
    $('.before').hide();
  });

  // 윈도우 스크롤
  $(window).on('scroll',function(){
    var scrTop = $(window).scrollTop();
    var hrd = $('.header');
    if(scrTop>0){
      hrd.addClass('active');
    }else{
      hrd.removeClass('active');
    }
  });

  // 박스오피스해시태그
  $('.swiper-container-has a').on('click',function(){
    $('.swiper-container-has a').removeClass('active');
    $(this).addClass('active');
  });
  $('.hastag li').on('click',function(){
    var hasIndex = $(this).index();
    var boxSwiper = $('.box_office .swiper-container');
    boxSwiper.removeClass('active');
    boxSwiper.eq(hasIndex).addClass('active');
  });

  // 이벤트 해시태그
  $('.swiper-container-has2 a').on('click',function(){
    $('.swiper-container-has2 a').removeClass('active');
    $(this).addClass('active');
    return false;
  });

  // 스와이퍼
  
    var swiper = new Swiper('.swiper-container',{
    spaceBetween:30,
    slidesPerView:'auto',
    freeMode:true
    });
    // 박스오피스
    var swiper01 = new Swiper('.swiper-container-has',{
      slidesPerView:'auto',
      speed:50,
      freeMode:true
    });
    // 이벤트
    var swiper02 = new Swiper('.swiper-container-has2',{
      slidesPerView:'auto',
      speed:50,
      freeMode:true
    });


    // 빈링크표시
    
        // $('a').on('click',function(){
        //   if($(this).attr('href')=='#'){
        //     alert('서비스 준비중입니다.');
        //   };
        // });

    $('.box_office .all_movie, .main_nav a,.hot_clip .main_link li a,#login,.movie_tit01,.movie_tit02, .blank_link').on('click',function(){
      cons();
      return false;
    });
    function cons(){
      alert('서비스 준비중입니다.');
    };
    

    //무비클립
    $('.play_btn').on('click',function(){
      $('.movie_clip').show();
      $('#video01').get(0).play();
    });
    $('#close_clip').on('click',function(){
      $('.movie_clip').hide();
      $('#video01').get(0).pause();
    });


    //wrap_bottom 높이
    var wrapBottomHeight = $('.wrap_bottom').height();
    $('footer').css('margin-bottom',wrapBottomHeight);

    //wrap_bottom 클릭
    $('.bottom_nav li').on('click',function(){
      $('.bottom_active').hide();
      $('.bottom_origin').show();
      $('.bottom_nav li .con-txt04').removeClass('active');
      $(this).children('a').children('.bottom_img').children('.bottom_active').show();
      $(this).children('a').children('.bottom_img').children('.bottom_origin').hide();
      $(this).children('a').children('.con-txt04').addClass('active');
      return false;
    });
});