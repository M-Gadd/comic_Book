
////////////////////////////////////////////////////////////////////////////
// PARALLAX THINGY
////////////////////////////////////////////////////////////////////////////

if( window.innerWidth > 485 ) {

  var controller = new ScrollMagic.Controller({vertical: true});

  // FOREST /////////////////////////////////

  // build tween
  var tween = new TimelineMax ()
    .add([
      TweenMax.fromTo('.forest-1', 1, {y: '85%', ease:Power0.easeNone},{y: '20%', ease:Power0.easeNone}),
      TweenMax.fromTo('.forest-2', 1, {y: '25%', ease:Power0.easeNone},{y: '-10%', ease:Power0.easeNone}),
      TweenMax.fromTo('.forest-3', 1, {y: '12%', ease:Power0.easeNone},{y: '-5%', ease:Power0.easeNone}),
      TweenMax.fromTo('.forest-4', 1, {y: '4%', ease:Power0.easeNone},{y: '-2%', ease:Power0.easeNone}),
    ]);

  // build scene
  var slideParallaxScene = new ScrollMagic.Scene({
      triggerElement: '.forest',
      triggerHook: 1,
      duration: '360%'
  })
  .setTween(tween)
  .addTo(controller)

}