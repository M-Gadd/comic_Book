

$(window).on( "load", () => {
  $( '.loader' ).fadeOut( 1000 );
});

// var bool = true;
let isClicked = false;
let noGlow = document.querySelectorAll('.no-glow');
let glow = document.querySelectorAll( '.glow' );
let id;

$( '.bg' ).toggle();
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
    }, 2000);
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
      let id = each.getAttribute('id').slice(1);
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