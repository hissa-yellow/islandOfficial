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


$(window).on('load resize', function() {
  const windowWidth = window.innerWidth;
  const elements = $('.fixed');
  if (windowWidth >= 768) {
    Stickyfill.add(elements);
  } else {
    Stickyfill.remove(elements);
  }
});
