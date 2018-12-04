


////////////////////////////////////////////////////////////////////////////
// LOADER
////////////////////////////////////////////////////////////////////////////



var audioArray = new Array();

$(window).on( "load", () => {
  // $( '.loader' ).fadeOut( 1000 );
  $( '.main' ).fadeIn( 1000 );
  $( '.main' ).css({
    'height': 'auto',
    'overflow': 'visible'
  })
  $('img').unveil( 2000 );
});


function activateAudio(){
  var allaudio = $('audio').length;
 
 var location = new Array();
    var edges = new Array();
    
    var imgHeight = $(window).height();
    var fadeDuration = $(window).height();
    
      for(var i=0;i<allaudio;i++){
        var offset = $('.sounds').eq(i).offset();
        location[i] = Math.floor(offset.top);
        edges[i] = $('.sounds').eq(i).height();
        var count = i+1;
        audioArray[i] = new AudioFade('#S' + count, location[i] - imgHeight, location[i] + edges[i] - imgHeight,fadeDuration).init();
      }
    }



////////////////////////////////////////////////////////////////////////////
// FULLSCREEN
////////////////////////////////////////////////////////////////////////////

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}

let isFullScreen = false;
$( '#full-screen-off' ).hide();

$( '#full-screen-box' )[0].onclick = function( e ) {
  if( !isFullScreen ) {
    isFullScreen = true;
    $( '#full-screen-on' ).toggle();
    $( '#full-screen-off' ).toggle();
    openFullscreen();
  }
  if( isFullScreen ) {
    isFullScreen = false;
    // $( '#full-screen-off' ).toggle();
    // $( '#full-screen-on' ).toggle();
    closeFullscreen();
  }
}



////////////////////////////////////////////////////////////////////////////
// MUSIC
////////////////////////////////////////////////////////////////////////////

let musicIsOn = false;
let soundBox = document.querySelectorAll( '#sound-box, .P2' );
$( '#sound-on' ).hide();

soundBox.forEach( each => {

  each.onclick = function() {
    if( !musicIsOn ) {
      musicIsOn = true;
      $( '#sound-off' ).hide();
      $( '#sound-on' ).show();
      activateAudio();
      
    }
    else if( musicIsOn ) {
      musicIsOn = false;
      $( '#sound-off' ).show();
      $( '#sound-on' ).hide();
      
      delete activateAudio();
      $(window).unbind('scroll');
    }
  }

})


  
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