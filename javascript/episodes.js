


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
  
  
  $( document ).ready( function() {
  })
  
  
  
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