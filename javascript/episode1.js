

  ////////////////////////////////////////////////////////////////////////////
  // SCREEN SIZE DETECTION
  ////////////////////////////////////////////////////////////////////////////
  
  // Function is triggered everytimethe window is resized, no matter in what way
  
  function resized() {
    
    if( window.innerHeight >= (screen.height * 0.90) ) {
      fullScreen = true;
    }
    else {
      fullScreen = false;
    }
    
    refreshParallaxes();
  };
  
  window.onresize = resized;
  
  
  ////////////////////////////////////////////////////////////////////////////
  // PARALLAX THINGY
  ////////////////////////////////////////////////////////////////////////////

  // Setting the global variable, so it can be checked by the parallaxes upon window resizing
  let fullScreen = false;

  // All of the parallax JS should only happen for non-mobile devices
  if( window.innerWidth > 485 ) {




  var controller = new ScrollMagic.Controller({vertical: true});


  refreshParallaxes();

  function refreshParallaxes() {

    console.log( 'screen is full:', fullScreen );
    // TOAD /////////////////////////////////

    // if( !fullScreen ){
      var slideParallaxScene = new ScrollMagic.Scene({
          triggerElement: '.toad',
          triggerHook: 1,
          duration: '220%'
      })
      .setTween(TweenMax.fromTo('.foreground-toad', 1, {y: '35%', ease:Power0.easeNone},{y: '-3%', ease:Power0.easeNone}))
      .addTo(controller)
    // }
    // else if( fullScreen ) {
    //   console.log( 'the parallax sees the fullscreen' );
    //   var slideParallaxScene = new ScrollMagic.Scene({
    //     triggerElement: '.toad',
    //     triggerHook: 1,
    //     duration: '220%'
    //   })
    //   .setTween(TweenMax.fromTo('.foreground-toad', 1, {y: '30%', ease:Power0.easeNone},{y: '-8%', ease:Power0.easeNone}))
    //   .addTo(controller)
    // }

    // THE PROBLEM HERE IS THAT WHEN ANY VALUE CHANGES BETWEEN THE TWO TWEEN SETTINGS, THE FULLSCREEN ONE STARTS JUMPING


    // GIANTS /////////////////////////////////

    // if( !fullScreen ) {
      // $( '.foreground' )[1].classList.remove( 'parallax-giants' );
      var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: '.giants',
        triggerHook: 1,
        duration: '260%'
      })
      .setTween(TweenMax.fromTo('.bcg-giants', 1, {y: '-20%', ease:Power0.easeNone}, {y: '4%', ease:Power0.easeNone}))
      .addTo(controller)
    // }
    // else {
    //   $( '.foreground' )[1].classList.add( 'parallax-giants' );
    //   var slideParallaxScene = new ScrollMagic.Scene({
    //     triggerElement: '.giants',
    //     triggerHook: 1,
    //     duration: '220%'
    //   })
    //   .setTween(TweenMax.fromTo('.bcg-giants', 1, {y: '-20%', ease:Power0.easeNone}, {y: '4%', ease:Power0.easeNone}))
    //   .addTo(controller)
    // }



    // FIGHT /////////////////////////////////

    // if( !fullScreen ) {
      var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: '.fight',
        triggerHook: 1,
        duration: '180%'
      })
      .setTween(TweenMax.fromTo('.foreground-fight', 1, {y: '50%', ease:Power0.easeNone}, {y: '0%', ease:Power0.easeNone}))
      .addTo(controller)
    // }
    // WIP
    // ------------
    // else {
    //   var slideParallaxScene = new ScrollMagic.Scene({
    //     triggerElement: '.fight',
    //     triggerHook: 1,
    //     duration: '160%'
    //   })
    //   .setTween(TweenMax.fromTo('.foreground-fight', 1, {y: '50%', ease:Power0.easeNone}, {y: '0%', ease:Power0.easeNone}))
    //   .addTo(controller)
    // }



    // CLOUD APPROACHING /////////////////////////////////

    // TweenMax can tween any property of any object. We use this object to cycle through the array
    var obj = {curImg: 0};
    let imagesArr = $( '.myimg' );

    // create tween
    var tween = TweenMax.to(obj, 0.5,
      {
        curImg: imagesArr.length - 1,	// animate propery curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        repeat: 0,									// repeat 3 times
        immediateRender: true,			// load first image automatically
        ease: Linear.easeNone,			// show every image the same ammount of time
        onUpdate: function () {
          if( obj.curImg < 24 ) {
            imagesArr.each(( index, item ) => {
              if(index === obj.curImg) { item.classList.remove( 'hide' )}
              else { item.classList.add( 'hide' )}
            });
          }
        }
      }
    );

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#imagesequence", duration: 600})
            .setTween(tween)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    // handle form change
    $("form.move input[name=duration]:radio").change(function () {
      scene.duration($(this).val());
    });



    // RUINS /////////////////////////////////

    //parallax scene
    var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: '.ruins',
        triggerHook: 1,
        duration: '150%'
    })
    .setTween(TweenMax.fromTo('.bcg-ruins', 1, {y: '-15%', ease:Power0.easeNone}, {y: '4%', ease:Power0.easeNone}))
    .addTo(controller)



    // GUARDS /////////////////////////////////

    // if( !fullScreen ) {
      var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: '.guards',
        triggerHook: 1,
        duration: '190%'
      })
      .setTween(TweenMax.fromTo('.foreground-guards', 1, {y: '26%', ease:Power0.easeNone}, {y: '-10%', ease:Power0.easeNone}))
      .addTo(controller)
    // }
    // WIP
    // ---------------
    // else {
    //   var slideParallaxScene = new ScrollMagic.Scene({
    //     triggerElement: '.guards',
    //     triggerHook: 1,
    //     duration: '170%'
    //   })
    //   .setTween(TweenMax.fromTo('.foreground-guards', 1, {y: '26%', ease:Power0.easeNone}, {y: '-10%', ease:Power0.easeNone}))
    //   .addTo(controller)
    // }

  }

}




// MUSIC THINGY
////////////////////////////////////////////////////////////////////

// var audio = new Audio('../audio/One_Republic_-_All_the_right_moves.mp3');
// var audio2 = new Audio('../audio/Cheb_Khaled-01.Cest_La_Vie.mp3');
// var audio3 = new Audio('../audio/03. She Wolf (Falling To Pieces) (Feat Sia) (www.SongsLover.pk).mp3')
// var allAudios = [audio, audio2, audio3];
// var allComics = document.querySelectorAll('.allComics');
// allComics.forEach(one => {
//   one.onclick = function(){
//     console.log(one);
//     if (one.getAttribute('id')[one.getAttribute('id').length-1] === '3') {
//       allAudios.forEach(one=>{
//         one.pause();
//       });
//       audio.play();
//     } else if ((one.getAttribute('id')[one.getAttribute('id').length-1] === '5' )) {
//       allAudios.forEach(one=>{
//         one.pause();
//       });
//       audio2.play();
//     } else {
//       allAudios.forEach(one=>{
//         one.pause();
//       });
//     }
//   }
// })


