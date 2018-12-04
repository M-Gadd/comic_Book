


////////////////////////////////////////////////////////////////////////////
// PARALLAX THINGY
////////////////////////////////////////////////////////////////////////////

var controller = new ScrollMagic.Controller({vertical: true});



// APPROACHING CARDIA /////////////////////////////////

// TweenMax can tween any property of any object. We use this object to cycle through the array
var objApproach = {curImg: 0};
let imagesArrApproach = $( '.myimg-approach' );

// create tween
var tween = TweenMax.to(objApproach, 0.5,
        {
        curImg: imagesArrApproach.length - 1,	// animate propery curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        repeat: 0,									// repeat 3 times
        immediateRender: true,			// load first image automatically
        ease: Linear.easeNone,			// show every image the same ammount of time
        onUpdate: function () {
            if( objApproach.curImg < 50 ) {
            imagesArrApproach.each(( index, item ) => {
                if(index === objApproach.curImg) { item.classList.remove( 'hide' )}
                else { item.classList.add( 'hide' )}
            });
            }
        }
    }
);

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#imagesequence-approach", duration: 600})
        .setTween(tween)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

// handle form change
$("form.move input[name=duration]:radio").change(function () {
    scene.duration($(this).val());
});



// KALANDAR ARRIVES /////////////////////////////////

var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.kalandar',
    triggerHook: 1,
    duration: '220%'
})
.setTween(TweenMax.fromTo('.bcg-kalandar', 1, {y: '-10%', ease:Power0.easeNone},{y: '9%', ease:Power0.easeNone}))
.addTo(controller)



// HOVERBIKE /////////////////////////////////

var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.hoverbike',
    triggerHook: 1,
    duration: '220%'
})
.setTween(TweenMax.fromTo('.foreground-hoverbike', 1, {y: '22%', ease:Power0.easeNone},{y: '-7%', ease:Power0.easeNone}))
.addTo(controller)



// ARMOR CRACKLING /////////////////////////////////

// TweenMax can tween any property of any object. We use this object to cycle through the array
var obj = {curImg: 0};
let imagesArrArmor = $( '.myimg-armor' );

// create tween
var tween = TweenMax.to(obj, 0.5,
        {
        curImg: imagesArrArmor.length - 1,	// animate propery curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        repeat: 0,									// repeat 3 times
        immediateRender: true,			// load first image automatically
        ease: Linear.easeNone,			// show every image the same ammount of time
        onUpdate: function () {
            if( obj.curImg < 13 ) {
            imagesArrArmor.each(( index, item ) => {
                if(index === obj.curImg) { item.classList.remove( 'hide' )}
                else { item.classList.add( 'hide' )}
            });
            }
        }
    }
);

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#imagesequence-armor", duration: 600})
        .setTween(tween)
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

// handle form change
$("form.move input[name=duration]:radio").change(function () {
    scene.duration($(this).val());
});