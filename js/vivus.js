var stroke;
stroke = new Vivus('mask', {
  start:'manual',
  type:'scenario-sync',
  duration: 150,
  forceRender:false,
  animTimingFunction:Vivus.EASE,
});


$(window).on('load', function() {
  $('#splash').delay(3500).fadeOut('slow');
  $('#splash_logo').delay(3500).fadeOut('slow');
  stroke.play();
});