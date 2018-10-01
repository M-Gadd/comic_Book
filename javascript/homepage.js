
$(window).on( "load", () => {
  $( '.loader' ).fadeOut( 1000 );
});

// var bool = true;
let isClicked = false;
var episodes = document.querySelectorAll('.episodes')

$( '.bg' ).toggle();
$( '#hyperspace-gif' ).hide();

episodes.forEach(one => {
  
  // ON CLICK /////////////
  one.onclick = function(){
    isClicked = true;
    let id = one.getAttribute('id');
    $( '.bg' ).hide();
    $( '#hyperspace-gif' ).show();
    setTimeout(() => {

      // $( '#imagesequence' ).ready( function() {
        
        window.location.href = `./last-quest/episode${id}.html`;
    // })
    }, 1800);
  }

  
  // ON HOVER /////////////
  one.onmouseover = function(){
      if( !isClicked ) {
        let id = one.getAttribute('id');
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
        document.body.style.backgroundImage = `url('./images/homepage/fond_espace.png')`;
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
