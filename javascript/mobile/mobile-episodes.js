


////////////////////////////////////////////////////////////////////////////
// LOADER
////////////////////////////////////////////////////////////////////////////

$(window).on( "load", () => {
  $( '.main' ).fadeIn( 1000 );
  $( '.main' ).css({
    'height': 'auto',
    'overflow': 'visible'
  })
  $('img').unveil( 2000 );
});



////////////////////////////////////////////////////////////////////////////
// MUSIC
////////////////////////////////////////////////////////////////////////////

var beginnings;
var ends;

if(window.location.pathname.includes('episode1')) {
  beginnings = [0, 19, 38, 52, 74, 93, 112, 130, 149];
  ends = [18, 37, 51, 73, 92, 111, 129, 148, 164];
}
else if(window.location.pathname.includes('episode2')) {
  beginnings = [0, 21, 39, 60, 80, 95, 110, 127, 145, 164, 182, 201, 218, 235, 257, 272];
  ends = [19, 38, 59, 79, 94, 109, 126, 144, 163, 181, 200, 217, 234, 256, 271, 288];
}
else if(window.location.pathname.includes('episode3')) {
  beginnings = [0, 24, 48, 67, 82, 95, 114, 127, 137, 151, 170, 183, 203, 222, 241, 257];
  ends = [23, 47, 66, 81, 94, 113, 126, 136, 150, 169, 182, 202, 221, 240, 256, 273];
}
else if(window.location.pathname.includes('episode4')) {
  beginnings = [0, 19, 42, 65, 84, 103, 125, 144, 163, 188, 203, 219, 234, 249, 270, 291, 304, 318, 333];
  ends = [18, 41, 64, 83, 102, 124, 143, 162, 187, 202, 218, 233, 248, 269, 290, 303, 317, 332, 349];
}
else if(window.location.pathname.includes('episode5')) {
  beginnings = [0, 19, 38, 57, 78, 97, 117, 136, 155, 165, 184, 203, 208, 230, 251, 266];
  ends = [18, 37, 56, 77, 96, 116, 135, 154, 164, 183, 202, 207, 229, 250, 265, 282];
}
else if(window.location.pathname.includes('episode6')) {
  beginnings = [0, 17, 25, 48, 71, 93, 113, 132, 151, 172, 186, 207, 230, 251, 267, 283, 295, 311, 327, 343];
  ends = [16, 24, 47, 70, 92, 112, 131, 150, 171, 185, 206, 229, 250, 266, 282, 294, 310, 326, 342, 362];
}

var track = document.getElementsByTagName('audio')[0];
track.load();

var soundIsOn = false;
$( '#sound-on' ).hide();

$( window ).on('load',function() {

	const toggleSound = () => {
		console.log( 'hey' );
		$( '#sound-off' ).toggle();
		$( '#sound-on' ).toggle();
		soundIsOn = !soundIsOn;
		soundIsOn ? track.play() : track.pause();
	};
	$('#sound-box').click( () => toggleSound() );
	$('.P2').click( () => toggleSound() );
		
    var tempo = 0;
    var currentBlockIndex = 0;
    var soundBlocks = $('son');
    
    track.ontimeupdate = function(){
        if(track.currentTime > ends[tempo]){
            track.currentTime = beginnings[tempo] + 0.5;
        }
    };
    
    $(window).scroll(function() {
		console.log( currentBlockIndex );
        currentBlockIndex = 0;
        var windowToTop = $(window).scrollTop();
        soundBlocks.each(function() {
            var blockToTop = $(this).offset().top;
			var blockHeight = $(this).height();
			var halfWindow = $(window).height() / 2;
            if(blockToTop < (windowToTop + halfWindow) && (windowToTop + halfWindow) > blockToTop + blockHeight) {
                currentBlockIndex = soundBlocks.index(this);
            }
        });
        
        if(currentBlockIndex == tempo) {
            return false;
        }

        else {
            tempo = currentBlockIndex;
            track.currentTime = beginnings[currentBlockIndex];
            if(soundIsOn){
                track.play();
            }
        }
    });
 
});



  
////////////////////////////////////////////////////////////////////////////
// FOOTER
////////////////////////////////////////////////////////////////////////////

let url = window.location.href;
let episodeNumber = url.includes( 'episode1' ) ? 1
                  : url.includes( 'episode2' ) ? 2
                  : url.includes( 'episode3' ) ? 3
                  : url.includes( 'episode4' ) ? 4
                  : url.includes( 'episode5' ) ? 5
                  : 6;
let isMobile = url.includes('mobile') ? '../' : '';

$( '#prev' )[0].onclick = () => {
  if( episodeNumber > 1 ) {
    window.location.href = `./episode${ episodeNumber - 1 }.html`;
  }
  else {
    window.location.href = `./../${ isMobile }${ language }/index.html`
  }
}

$( '#next' )[0].onclick = () => {
  if( episodeNumber < 6 ) {
    window.location.href = `./episode${ episodeNumber + 1 }.html`;
  }
  else {
    window.location.href = `./../${ isMobile }${ language }/index.html`
  }
}

$( '#menu' )[0].onclick = () => {
  window.location.href = `./${ isMobile }index.html`
}