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