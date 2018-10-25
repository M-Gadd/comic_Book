let homeSound = new Audio('../../audio/LOOP_Menu.mp3');
let bool = false
let musicIsOn = false;
let soundBox = document.querySelector( '#sound-box' );
$( '#sound-on' ).hide();

soundBox.onclick = function() {
  // homeSound.oncanplay = () => {
  // };
  if( !musicIsOn ) {
    musicIsOn = true;
    $( '#sound-off' ).hide();
    $( '#sound-on' ).show();
    homeSound.loop = true;
    if (bool){
      audioVolumeIn(homeSound); 
    } else {
      homeSound.play(); 

    }
  }
  else if( musicIsOn ) {
    musicIsOn = false;
    $( '#sound-off' ).show();
    $( '#sound-on' ).hide();
    // homeSound.pause();  
    audioVolumeOut(homeSound);
    bool = true;
  }

}


function audioVolumeIn(q){
  if(q.volume){
     var InT = 0;
     var setVolume = 0.2; // Target volume level for new song
     var speed = 0.005; // Rate of increase
     q.volume = InT;
     var eAudio = setInterval(function(){
         InT += speed;
         q.volume = InT.toFixed(1);
         if(InT.toFixed(1) >= setVolume){
            clearInterval(eAudio);
            //alert('clearInterval eAudio'+ InT.toFixed(1));
         };
     },50);
  };
};


function audioVolumeOut(q){
  if(q.volume){
     var InT = 0.4;
     var setVolume = 0;  // Target volume level for old song 
     var speed = 0.005;  // Rate of volume decrease
     q.volume = InT;
     var fAudio = setInterval(function(){
         InT -= speed;
         q.volume = InT.toFixed(1);
         if(InT.toFixed(1) <= setVolume){
            clearInterval(fAudio);
            //alert('clearInterval fAudio'+ InT.toFixed(1));
         };
     },30);
  };
};