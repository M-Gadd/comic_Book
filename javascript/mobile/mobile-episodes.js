


////////////////////////////////////////////////////////////////////////////
// LOADER
////////////////////////////////////////////////////////////////////////////

$(window).on( "load", () => {
  // $( '.loader' ).fadeOut( 1000 );
  $( '.main' ).fadeIn( 1000 );
  $( '.main' ).css({
    'height': 'auto',
    'overflow': 'visible'
  })
  $('img').unveil( 2000 );
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