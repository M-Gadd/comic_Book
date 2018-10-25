// this is needed for the inview library to work 
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function i(){var b,c,d={height:f.innerHeight,width:f.innerWidth};return d.height||(b=e.compatMode,(b||!a.support.boxModel)&&(c="CSS1Compat"===b?g:e.body,d={height:c.clientHeight,width:c.clientWidth})),d}function j(){return{top:f.pageYOffset||g.scrollTop||e.body.scrollTop,left:f.pageXOffset||g.scrollLeft||e.body.scrollLeft}}function k(){if(b.length){var e=0,f=a.map(b,function(a){var b=a.data.selector,c=a.$element;return b?c.find(b):c});for(c=c||i(),d=d||j();e<b.length;e++)if(a.contains(g,f[e][0])){var h=a(f[e]),k={height:h[0].offsetHeight,width:h[0].offsetWidth},l=h.offset(),m=h.data("inview");if(!d||!c)return;l.top+k.height>d.top&&l.top<d.top+c.height&&l.left+k.width>d.left&&l.left<d.left+c.width?m||h.data("inview",!0).trigger("inview",[!0]):m&&h.data("inview",!1).trigger("inview",[!1])}}}var c,d,h,b=[],e=document,f=window,g=e.documentElement;a.event.special.inview={add:function(c){b.push({data:c,$element:a(this),element:this}),!h&&b.length&&(h=setInterval(k,250))},remove:function(a){for(var c=0;c<b.length;c++){var d=b[c];if(d.element===this&&d.data.guid===a.guid){b.splice(c,1);break}}b.length||(clearInterval(h),h=null)}},a(f).on("scroll resize scrollstop",function(){c=d=null}),!g.addEventListener&&g.attachEvent&&g.attachEvent("onfocusin",function(){d=null})});

let audioP1_7       = new Audio('../../audio/EP4/LOOP 4.1.mp3');
let audioP8_11      = new Audio('../../audio/EP4/LOOP 4.2.mp3');
let audioP12_15     = new Audio('../../audio/EP4/LOOP 4.3.mp3');
let audioP16_17     = new Audio('../../audio/EP4/LOOP 4.4.mp3');
let audioP18_21     = new Audio('../../audio/EP4/LOOP 4.5.mp3');
let audioP22_25     = new Audio('../../audio/EP4/LOOP 4.6.mp3');
let audioP26_28     = new Audio('../../audio/EP4/LOOP 4.7.mp3');
let audioP29_32     = new Audio('../../audio/EP4/LOOP 4.8.mp3');
let audioP33        = new Audio('../../audio/EP4/LOOP 4.9.mp3');
let audioP34_36     = new Audio('../../audio/EP4/LOOP 4.10.mp3');
let audioP37_42     = new Audio('../../audio/EP4/LOOP 4.11.mp3');
let audioP43_47     = new Audio('../../audio/EP4/LOOP 4.12.mp3');
let audioP48_49     = new Audio('../../audio/EP4/LOOP 4.13.mp3');
let audioP50_51     = new Audio('../../audio/EP4/LOOP 4.14.mp3');
let audioP52_57     = new Audio('../../audio/EP4/LOOP 4.15.mp3');
let audioP58_63     = new Audio('../../audio/EP4/LOOP 4.16.mp3');
let audioP64_66     = new Audio('../../audio/EP4/LOOP 4.17.mp3');
let audioP67_69     = new Audio('../../audio/EP4/LOOP 4.18.mp3');
let audioP70_72     = new Audio('../../audio/EP4/LOOP 4.19.mp3');
let audioP73        = new Audio('../../audio/EP4/LOOP 4.20.mp3');

let allAudio = [
  audioP1_7,
  audioP8_11,
  audioP12_15,
  audioP16_17,
  audioP18_21,
  audioP22_25,
  audioP26_28,
  audioP29_32,
  audioP33,
  audioP34_36,
  audioP37_42,
  audioP43_47,
  audioP48_49,
  audioP50_51,
  audioP52_57,
  audioP58_63,
  audioP64_66,
  audioP67_69,
  audioP70_72,
  audioP73
]




let musicIsOn = false;
let soundBox = document.querySelector( '#sound-box' );
$( '#sound-on' ).hide();

let id;
let curr;


soundBox.onclick = function() {
  if( !musicIsOn ) {
    musicIsOn = true;
    $( '#sound-off' ).hide();
    $( '#sound-on' ).show();

    let index= 0;

    if(curr){
      allAudio[curr].play()
    } else if(id) {
      // if (index !== activeId ) {
        allAudio[activeId].play();
      // }
    } else {
      allAudio[index].play();
    }
    

    $('.sounds').on('inview', function (event, visible) { //looping over all the images at once inseatd of targeting one at a time 
      if (visible == true) {
      let activeId = ''; // to reset with every image in view
      if (this.getAttribute('id')) { // to not error when there is no ID
        id = this.getAttribute('id').split('').forEach(one=>{
          isNaN(one)? activeId = activeId  : activeId += one // to get the full number, otherwise the numbers will conflict after image 9
        })
      }
    
        
      console.log(activeId);
      // console.log(index);
        if (allAudio[activeId] && activeId !== index  && musicIsOn === true ) { // to not error when the aciveId index doesn't exist in the audio array 
          
        if (allAudio[curr]) {
            allAudio[curr].pause();
          }
          if (allAudio[index]) {
            allAudio[index].pause();
          }

          allAudio[activeId].loop = true;
          allAudio[activeId].play();
          index = activeId;
          curr = activeId;
    
        } 
    
        else { // having this 'else' here rathher than with the visibilty == true if statemet pronlonges the duration of thhe audio
        allAudio.forEach(one=>{ // instead of having to stop them manually one by one  
          one.pause();
          console.log('paused')
        })
        }
    
      }
    
    });
    
  }
  else if( musicIsOn ) {
    musicIsOn = false;
    $( '#sound-off' ).show();
    $( '#sound-on' ).hide();

    allAudio.forEach(one=>{ // instead of having to stop them manually one by one  
      one.pause();
      console.log('paused')
    })

    $('.sounds').on('inview', function (event, visible) { //looping over all the images at once inseatd of targeting one at a time 
      if (visible == true) {
      let activeId = ''; // to reset with every image in view
      if (this.getAttribute('id')) { // to not error when there is no ID
        id = this.getAttribute('id').split('').forEach(one=>{
          isNaN(one)? activeId = activeId  : activeId += one // to get the full number, otherwise the numbers will conflict after image 9
        })
      }
    // index = activeId;
      curr = activeId;
  }
    })
  }
}
