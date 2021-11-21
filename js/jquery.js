//--------------------------------------
var stroke;
stroke = new Vivus('mask', {
  start:'manual',
  type:'scenario-sync',
  duration: 150,
  forceRender:false,
  animTimingFunction:Vivus.EASE,
});


//eachTextAnime 
function EachTextAnimeControl() {
  $('.eachTextAnime').each(function() {
    const elemPos = $(this).offset().top - 50;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('appeartext');

    } else {
      $(this).removeClass('appeartext');

    }
  });
}


//textfadeIn
function textfadeIn() {

  $('.textfadeInTrigger').each(function() {
    const elemPos = $(this).offset().top-50;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if(scroll >= elemPos - windowHeight) {
      $(this).addClass('textfadeIn');
    } else {
      $(this).removeClass('textfadeIn');
    }
  });
}





$(window).on('load',function() {
  $('#splash').delay(3500).fadeOut('slow');
  $('#splash_logo').delay(3500).fadeOut('slow');
    stroke.play();

    ScrollAnime();
    

    //eachTextAnime
    const element = $(".eachTextAnime");
    element.each(function () {
      var text = $(this).text();
      var textbox = "";
      text.split('').forEach(function (t, i) {
        if (t !== " ") {

          if (i < 10) {
            textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
          } else {
            var n = i / 10;
            textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
          }

        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);

      EachTextAnimeControl();
    });
    //-------------

    textfadeIn()







  


});



$(window).scroll(function() {

  ScrollAnime();
  EachTextAnimeControl();
  textfadeIn()
});








//header up down-----------------------------------
let beforePos = 0;

function ScrollAnime() {
  const elemTop = $('#header-up').offset().top-200;
  const scroll = $(window).scrollTop();
  
  if(scroll == beforePos) {
    //IE対策
  } else if(elemTop > scroll || 0 > scroll - beforePos) {
    $('#header').removeClass('UpMove');
    $('#header').addClass('DownMove');//

    $('#header').addClass('dnone');

    $('#openbtn').removeClass('fadeDown');
    $('#openbtn').addClass('fadeUp');
  
  
  } else {
    $('#header').removeClass('DownMove');
    $('#header').addClass('UpMove');//

    $('#header').removeClass('dnone');

    $('#openbtn').removeClass('fadeUp');
    $('#openbtn').addClass('fadeDown');//
  }




  beforePos = scroll;
}




//リンクIdまでスムーズにスクロール
$('#g-navi li a').click(function() {
  const elmHash = $(this).attr('href');
  const pos = $(elmHash).offset().top-200;
  $('body, html').animate({scrollTop: pos}, 1000);
  return false;
});







//openbtn-------------------------------




//opnebtnをクリックした時のアニメ
$('.openbtn').click(function() {
  $(this).toggleClass('active');
  $('#header').toggleClass('panelactive');
  $('#openpanel').toggleClass('panelhide');
  $('#openpanel').toggleClass('panelshow');
  
});

$('#g-navi li a').click(function() {
  $('.openbtn').toggleClass('active');
  $('#header').removeClass('panelactive');
  $('#openpanel').removeClass('panelshow');
  $('#openpanel').addClass('panelhide');
});
























//slider----------------------------------
$('.slider').slick({
  fade:true,
  autoplay:true,
  autoplaySpeed:3000,
  speed:1000,
  infinite:true,
  slidesToShow:1,
  slidesToScroll:1,
  arrows:true,
  prevArrow:'<div class="slick-prev"></div>',
  nextArrow:'<div class="slick-next"></div>',
  dots:true,
  pauseOnFocus:false,
  pauseOnHover:false,
  pauseOnDotsHover:false,
});


$('.slider').on('touchmove', function(event, slick, currentSlide,nextSlide){
  $('.slider').slick('slickPlay');
});






//pic-slider-------------------------------
$('.pic-slider').slick({
  arrows:false,
  autoplay:true,
  autoplaySpeed: 0,
  speed:6900,
  infinite:true,
  pauseOnHover: false,
  pauseOnFocus: false,
  cssEase:'linear',
  slidesToScroll:1,
  slidesToShow: 3,
});



//紙芝居
$(window).on('load resize', function() {
  const windowWidth = window.innerWidth;
  const elements = $('.fixed');
  if (windowWidth >= 768) {
    Stickyfill.add(elements);
  } else {
    Stickyfill.remove(elements);
  }
});





