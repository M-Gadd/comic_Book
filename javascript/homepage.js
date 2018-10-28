


////////////////////////////////////////////////////////////////////////////
// LOADER
////////////////////////////////////////////////////////////////////////////

$( 'footer' ).hide();

$(window).on( "load", () => {
  $( '.loader' ).fadeOut( 1000 );
  $( 'footer' ).show();
});


////////////////////////////////////////////////////////////////////////////
// LANGUAGE SELECTION
////////////////////////////////////////////////////////////////////////////

$( '#fr' )[0].onclick = function() {
  if( window.location.href.includes( 'EN' ) ) {
    window.location.href = `./../FR/index.html`;
  }
}

$( '#uk' )[0].onclick = function() {
  if( window.location.href.includes( 'FR' ) ) {
    window.location.href = `./../EN/index.html`;
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
// MUSIC
////////////////////////////////////////////////////////////////////////////

// let homeSound = new Audio('../../../work/comic_book/audio/Cheb_Khaled-01.Cest_La_Vie.mp3');

let homeSound = new Audio('../../audio/LOOP_Menu.mp3');


let musicIsOn = false;
let soundBox = document.querySelector( '#sound-box' );
$( '#sound-on' ).hide();

soundBox.onclick = function() {
  homeSound.oncanplay = () => {
    
  };
  if( !musicIsOn ) {
    musicIsOn = true;
    $( '#sound-off' ).hide();
    $( '#sound-on' ).show();
    homeSound.loop = true;
    homeSound.play();
  }
  else if( musicIsOn ) {
    musicIsOn = false;
    $( '#sound-off' ).show();
    $( '#sound-on' ).hide();
    homeSound.pause();  
  }

}



////////////////////////////////////////////////////////////////////////////
// EPISODES SELECTION AND INTERACTIONS
////////////////////////////////////////////////////////////////////////////

// var bool = true;
let isClicked = false;
let noGlow = document.querySelectorAll('.no-glow');
let glow = document.querySelectorAll( '.glow' );
let id;

$( '.bg' ).hide();
$( '#hyperspace-gif' ).hide();


let boxes = document.querySelectorAll( '.episode-box' );

boxes.forEach( each => {

  // ON CLICK /////////////
  each.onclick = function(){
    isClicked = true;
    let id = each.getAttribute('id').slice(1);
    $( '.bg' ).hide();
    $( '#hyperspace-gif' ).show();
    setTimeout(() => {
      window.location.href = `./episode${id}.html`;
    }, 1800);
  }

  // ON HOVER /////////////
  each.onmouseover = function(){
    if( !isClicked ) {
      let id = each.getAttribute('id').slice(1);
      $( '.bg' ).hide();
      $(`#bg-${ id }`).show();
      $( '.no-glow' ).show();
      $( `#${ id }` ).hide();
    }
  }

  // ON MOUSE OUT /////////////
  each.onmouseout = function(){
    if( !isClicked ) {
      $( '.bg' ).hide();
      $( '.no-glow' ).show();
    }
  }

})





// var ep1 = document.getElementById('ep1');
// ep1.onclick = function(){
//   window.location.href = './html/episode1.html';
// }
// if (bool){

// var ep2 = document.getElementById('ep2');
// setTimeout(() => {
//   ep2.classList.remove('hidden')
// }, 1000*3);
//////////////
// ep2.onclick = function(){
//   window.location.href = './html/episode2.html';
// }

// var ep3 = document.getElementById('ep3');
// setTimeout(() => {
//   ep3.classList.remove('hidden')
// }, 1000*6);

///////
// ep3.onclick = function(){
//   window.location.href = './html/episode3.html';
// }

// var ep4 = document.getElementById('ep4');
// setTimeout(() => {
//   ep4.classList.remove('hidden')
// }, 1000*9);

/////
// ep4.onclick = function(){
//   window.location.href = './html/episode4.html';
// }

// var ep5 = document.getElementById('ep5');
// setTimeout(() => {
//   ep5.classList.remove('hidden')
// }, 1000*12);

////
// ep5.onclick = function(){
//   window.location.href = './html/episode5.html';
// }

// var ep6 = document.getElementById('ep6');
// setTimeout(() => {
//   ep6.classList.remove('hidden')
// }, 1000*15);

////
// ep6.onclick = function(){
//   window.location.href = './html/episode6.html';
// }

// }