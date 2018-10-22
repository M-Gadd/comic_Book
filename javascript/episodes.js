


////////////////////////////////////////////////////////////////////////////
// LOADER
////////////////////////////////////////////////////////////////////////////

$(window).on( "load", () => {
  $( '.loader' ).fadeOut( 1000 );
  $( '.main' ).fadeIn( 1000 );
  $( '.main' ).css({
    'height': 'auto',
    'overflow': 'visible'
  })
});



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

$( '#full-screen-btn' )[0].onclick = function() {
  if( !isFullScreen ) {
    isFullScreen = true;
    openFullscreen();
  }
  if( isFullScreen ) {
    isFullScreen = false;
    closeFullscreen();
  }
}


  
////////////////////////////////////////////////////////////////////////////
// FOOTER
////////////////////////////////////////////////////////////////////////////

let url = window.location.href
let episodeNumber = url.includes( 1 ) ? 1
                  : url.includes( 2 ) ? 2
                  : url.includes( 3 ) ? 3
                  : url.includes( 4 ) ? 4
                  : url.includes( 5 ) ? 5
                  : 6;

$( '#prev' )[0].onclick = () => {
  if( episodeNumber > 1 ) {
    window.location.href = `./episode${ episodeNumber - 1 }.html`;
  }
}

$( '#next' )[0].onclick = () => {
  if( episodeNumber < 6 ) {
    window.location.href = `./episode${ episodeNumber + 1 }.html`;
  }
}

$( '#menu' )[0].onclick = () => {
  window.location.href = `./index.html`;
}