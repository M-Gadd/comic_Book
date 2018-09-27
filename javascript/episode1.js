

// PARALLAX THINGY
////////////////////////////////////////////////////////////////////

$( document ).ready( function() {
    $( '.main' ).fadeIn( 1000 );
})

// TOAD /////////////////////////////////
var controller = new ScrollMagic.Controller({vertical: true});

//parallax scene
var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.toad',
    triggerHook: 1,
    duration: '250%'
})
.setTween(TweenMax.from('.foreground-toad', 1, {y: '40%', ease:Power0.easeNone}))
.addTo(controller)



// GIANTS /////////////////////////////////
var controller = new ScrollMagic.Controller({vertical: true});

//parallax scene
var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.giants',
    triggerHook: 1,
    duration: '280%'
})
.setTween(TweenMax.from('.bcg-giants', 1, {y: '-40%', ease:Power0.easeNone}))
.addTo(controller)



// FIGHT /////////////////////////////////
var controller = new ScrollMagic.Controller({vertical: true});

//parallax scene
var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.fight',
    triggerHook: 1,
    duration: '150%'
})
.setTween(TweenMax.fromTo('.foreground-fight', 1, {y: '50%', ease:Power0.easeNone}, {y: '0%', ease:Power0.easeNone}))
.addTo(controller)



// CLOUD APPROACHING /////////////////////////////////
// define images
// var images =
// document.querySelectorAll( '.myimg' );
// [
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0000.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0001.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0002.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0003.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0004.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0005.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0005.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0006.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0007.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0008.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0009.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0010.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0011.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0012.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0013.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0014.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0015.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0016.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0017.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0018.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0019.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0020.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0021.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0022.png",
//   "./../images/EN/episode-1/P18_EN_sequence/P18_EN0023.png"
// ];

// Promise.all(images.map(url =>
//   new Promise((resolve) => {
//     const img = new Image();
//     img.src = url;
//     img.onload = resolve;
//   })
// ))
// .then(() => console.log("IMAGES DONE"));

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
          if(index === obj.curImg) { console.log( item.classList.remove( 'hide' ))}
          else { item.classList.add( 'hide' )}
        });
      }
    }
  }
);

// init controller
var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#imagesequence", duration: 450})
        .setTween(tween)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

// handle form change
$("form.move input[name=duration]:radio").change(function () {
  scene.duration($(this).val());
});



// RUINS /////////////////////////////////
var controller = new ScrollMagic.Controller({vertical: true});

//parallax scene
var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.ruins',
    triggerHook: 1,
    duration: '200%'
})
.setTween(TweenMax.fromTo('.bcg-ruins', 1, {y: '0%', ease:Power0.easeNone}, {y: '30%', ease:Power0.easeNone}))
.addTo(controller)



// GUARDS /////////////////////////////////
var controller = new ScrollMagic.Controller({vertical: true});

//parallax scene
var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.guards',
    triggerHook: 1,
    duration: '250%'
})
.setTween(TweenMax.fromTo('.foreground-guards', 1, {y: '30%', ease:Power0.easeNone}, {y: '0%', ease:Power0.easeNone}))
.addTo(controller)





// MUSIC THINGY
////////////////////////////////////////////////////////////////////

var audio = new Audio('../audio/One_Republic_-_All_the_right_moves.mp3');
var audio2 = new Audio('../audio/Cheb_Khaled-01.Cest_La_Vie.mp3');
var audio3 = new Audio('../audio/03. She Wolf (Falling To Pieces) (Feat Sia) (www.SongsLover.pk).mp3')
var allAudios = [audio, audio2, audio3];
var allComics = document.querySelectorAll('.allComics');
allComics.forEach(one => {
  one.onclick = function(){
    console.log(one);
    if (one.getAttribute('id')[one.getAttribute('id').length-1] === '3') {
      allAudios.forEach(one=>{
        one.pause();
      });
      audio.play();
    } else if ((one.getAttribute('id')[one.getAttribute('id').length-1] === '5' )) {
      allAudios.forEach(one=>{
        one.pause();
      });
      audio2.play();
    } else {
      allAudios.forEach(one=>{
        one.pause();
      });
    }
  }
})