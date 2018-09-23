var bool = true;
var episodes = document.querySelectorAll('.episodes')

episodes.forEach(one => {
  one.onclick = function(){
    bool = false;
    episodes.forEach(one => {
      one.classList.add('hidden');
    })
    document.body.style.backgroundImage = "url('./images/giphy.gif')";
    setTimeout(() => {
      window.location.href = `./html/episode${one.getAttribute('id')[one.getAttribute('id').length-1]}.html`;
    }, 3000);
  }

  one.onmouseover = function(){
    document.body.style.backgroundImage = `url('./images/episode${one.getAttribute('id')[one.getAttribute('id').length-1]}.jpg')`;
  }

})

episodes.forEach(one => {
  one.onmouseover = function(){
    document.body.style.backgroundImage = `url('./images/episode${one.getAttribute('id')[one.getAttribute('id').length-1]}.jpg')`;
    // setTimeout(() => {
    //   window.location.href = `./html/episode${one.getAttribute('id')[one.getAttribute('id').length-1]}.html`;
    // }, 3000);
  }

  one.onmouseout = function(){
    // document.body.style.backgroundImage = "url('./images/giphy.gif')";
    document.body.style.backgroundImage = "url('./images/trees-3464777_1920.jpg')";
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