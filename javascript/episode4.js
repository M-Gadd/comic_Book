
let url = window.location.href
let language = url.includes( "FR" ) ? "FR" : "EN";
window.location.href = `./../${ language }/index.html`;

if( window.innerWidth > 485 ) {

    ////////////////////////////////////////////////////////////////////////////
    // PARALLAX THINGY
    ////////////////////////////////////////////////////////////////////////////

    var controller = new ScrollMagic.Controller({vertical: true});



    // EYE OPENING /////////////////////////////////

    // TweenMax can tween any property of any object. We use this object to cycle through the array
    var objEye = {curImg: 0};
    let imagesArrEye = $( '.myimg-eye' );

    // create tween
    var tween = TweenMax.to(objEye, 0.5,
        {
        curImg: imagesArrEye.length - 1,	// animate propery curImg to number of images
        roundProps: "curImg",		        // only integers so it can be used as an array index
        repeat: 0,						    // repeat 0 times
        immediateRender: true,			    // load first image automatically
        ease: Linear.easeNone,			    // show every image the same ammount of time
        onUpdate: function () {
            if( objEye.curImg < 11 ) {
                imagesArrEye.each(( index, item ) => {
                    if(index === objEye.curImg) { item.classList.remove( 'hide' )}
                    else { item.classList.add( 'hide' )}
                });
            }
        }
        }
    );

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#imagesequence-eye", duration: 400})
            .setTween(tween)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    // handle form change
    $("form.move input[name=duration]:radio").change(function () {
        scene.duration($(this).val());
    });



    // WINGS UNFOLDING /////////////////////////////////

    // TweenMax can tween any property of any object. We use this object to cycle through the array
    var objWings = {curImg: 0};
    let imagesArrWings = $( '.myimg-wings' );

    // create tween
    var tween = TweenMax.to(objWings, 0.5,
        {
        curImg: imagesArrWings.length - 1,	// animate propery curImg to number of images
        roundProps: "curImg",		        // only integers so it can be used as an array index
        repeat: 0,						    // repeat 0 times
        immediateRender: true,			    // load first image automatically
        ease: Linear.easeNone,			    // show every image the same ammount of time
        onUpdate: function () {
            if( objWings.curImg < 16 ) {
                imagesArrWings.each(( index, item ) => {
                    if(index === objWings.curImg) { item.classList.remove( 'hide' )}
                    else { item.classList.add( 'hide' )}
                });
            }
        }
        }
    );

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#imagesequence-wings", duration: 400})
            .setTween(tween)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    // handle form change
    $("form.move input[name=duration]:radio").change(function () {
        scene.duration($(this).val());
    });



    // FLYING /////////////////////////////////

    var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: '.flying',
        triggerHook: 0.8,
        duration: '220%'
    })
    .setTween(TweenMax.fromTo('.foreground-flying', 1, {y: '70%', ease:Power0.easeNone},{y: '5%', ease:Power0.easeNone}))
    .addTo(controller)



    // ARMOR CREATING /////////////////////////////////

    // TweenMax can tween any property of any object. We use this object to cycle through the array
    var objArmor = {curImg: 0};
    let imagesArrArmor = $( '.myimg-armor' );

    // create tween
    var tween = TweenMax.to(objArmor, 0.5,
        {
        curImg: imagesArrArmor.length - 1,	// animate propery curImg to number of images
        roundProps: "curImg",		        // only integers so it can be used as an array index
        repeat: 0,						    // repeat 0 times
        immediateRender: true,			    // load first image automatically
        ease: Linear.easeNone,			    // show every image the same ammount of time
        onUpdate: function () {
            if( objArmor.curImg < 52 ) {
                imagesArrArmor.each(( index, item ) => {
                    if(index === objArmor.curImg) { item.classList.remove( 'hide' )}
                    else { item.classList.add( 'hide' )}
                });
            }
        }
        }
    );

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#imagesequence-armor", duration: 380})
            .setTween(tween)
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    // handle form change
    $("form.move input[name=duration]:radio").change(function () {
        scene.duration($(this).val());
    });

}