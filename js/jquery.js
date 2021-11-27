//--------------------------------------



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



    //tab Anime
    $('.tab li:first-of-type').addClass('active');
    $('.area:first-of-type').addClass('is-active');
    var hashName = location.hash;
    GethashID(hashName);


  


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



























//紙芝居






//tab anime-----------------
function GethashID(hashIDName) {
  if(hashIDName) {
    $('.tab li').find('a').each(function() {
      var idName = $(this).attr('href');
      if(idName == hashIDName) {
        var parentElm = $(this).parent();
        $('.tab li').removeClass('active');
        $(parentElm).addClass('active');

        $('.area').removeClass('is-active');
        $(hashIDName).addClass('is-active');
      }
      
    });
  }
}


$('.tab a').on('click', function() {
  var idName = $(this).attr('href');
  GethashID(idName);
  return false;
});





