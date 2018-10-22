var bool = true;



////////////////////////////////////////////////////////////////////////////
// LOADER
////////////////////////////////////////////////////////////////////////////

$( 'footer' ).hide();

$(window).on( "load", () => {
  $( '.loader' ).fadeOut( 1000 );
  $( 'footer' ).show();
});

console.log( $( 'footer')[0] );


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
// EPISODES SELECTION AND INTERACTIONS
////////////////////////////////////////////////////////////////////////////

// var bool = true;
let isClicked = false;
var episodes = document.querySelectorAll('.episodes')

$( '.bg' ).toggle();

episodes.forEach(one => {
  
  // document.querySelectorAll( '.bg' ).setAttribute( 'visibility', 'hidden' );
  
  // ON CLICK /////////////
  one.onclick = function(){
    isClicked = true;
    let id = one.getAttribute('id');
    $( '.bg' ).hide();
    document.body.style.backgroundImage = `url('./images/homepage/homepage-gif-bcg.gif')`;
    setTimeout(() => {
      window.location.href = `./last-quest/episode${id}.html`;
    }, 2000);
  }

  
  // ON HOVER /////////////
  one.onmouseover = function(){
      if( !isClicked ) {
        let id = one.getAttribute('id');
        console.log( $(`#bg-${id}`)[0] );
        $(`#bg-${id}`).toggle();
        one.setAttribute( 'src', `./images/homepage/episodes-titles-EN/glow/ep${id}_glow.png` );
      }
    }
    
    // ON MOUSE OUT /////////////
    one.onmouseout = function(){
      if( !isClicked ) {
        let id = one.getAttribute('id');
        $( '.bg' ).hide();
        one.setAttribute( 'src', `./images/homepage/episodes-titles-EN/noglow/ep${id}_noglow.png` );
        document.body.style.backgroundImage = `url('./images/homepage/trees-3464777_1920.jpg')`;
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




// for (let i=0; i<= 38; i++ ) {

//   document.body.style.backgroundImage = `url('./images/episode/sanasndaskdas${i}')`

// }