// this is needed for the inview library to work 
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function i(){var b,c,d={height:f.innerHeight,width:f.innerWidth};return d.height||(b=e.compatMode,(b||!a.support.boxModel)&&(c="CSS1Compat"===b?g:e.body,d={height:c.clientHeight,width:c.clientWidth})),d}function j(){return{top:f.pageYOffset||g.scrollTop||e.body.scrollTop,left:f.pageXOffset||g.scrollLeft||e.body.scrollLeft}}function k(){if(b.length){var e=0,f=a.map(b,function(a){var b=a.data.selector,c=a.$element;return b?c.find(b):c});for(c=c||i(),d=d||j();e<b.length;e++)if(a.contains(g,f[e][0])){var h=a(f[e]),k={height:h[0].offsetHeight,width:h[0].offsetWidth},l=h.offset(),m=h.data("inview");if(!d||!c)return;l.top+k.height>d.top&&l.top<d.top+c.height&&l.left+k.width>d.left&&l.left<d.left+c.width?m||h.data("inview",!0).trigger("inview",[!0]):m&&h.data("inview",!1).trigger("inview",[!1])}}}var c,d,h,b=[],e=document,f=window,g=e.documentElement;a.event.special.inview={add:function(c){b.push({data:c,$element:a(this),element:this}),!h&&b.length&&(h=setInterval(k,250))},remove:function(a){for(var c=0;c<b.length;c++){var d=b[c];if(d.element===this&&d.data.guid===a.guid){b.splice(c,1);break}}b.length||(clearInterval(h),h=null)}},a(f).on("scroll resize scrollstop",function(){c=d=null}),!g.addEventListener&&g.attachEvent&&g.attachEvent("onfocusin",function(){d=null})});

let audioP1_2     = new Audio('../../audio/EP3/LOOP 3.1.mp3');
let audioP3_4     = new Audio('../../audio/EP3/LOOP 3.2.mp3');
let audioP5_9     = new Audio('../../audio/EP3/LOOP 3.3.mp3');
let audioP10_11   = new Audio('../../audio/EP3/LOOP 3.4.mp3');
let audioP12_13   = new Audio('../../audio/EP3/LOOP 3.5.mp3');
let audioP14_17   = new Audio('../../audio/EP3/LOOP 3.6.mp3');
let audioP18      = new Audio('../../audio/EP3/LOOP 3.7.mp3');
let audioP19      = new Audio('../../audio/EP3/LOOP 3.8.mp3');
let audioP20_24   = new Audio('../../audio/EP3/LOOP 3.9.mp3');
let audioP25_27   = new Audio('../../audio/EP3/LOOP 3.10.mp3');
let audioP28      = new Audio('../../audio/EP3/LOOP 3.11.mp3');
let audioP29_34   = new Audio('../../audio/EP3/LOOP 3.12.mp3');
let audioP35_37   = new Audio('../../audio/EP3/LOOP 3.13.mp3');
let audioP38_41   = new Audio('../../audio/EP3/LOOP 3.14.mp3');
let audioP42_44   = new Audio('../../audio/EP3/LOOP 3.15.mp3');
let audioP45      = new Audio('../../audio/EP3/LOOP 3.16.mp3');

let allAudio = [
  audioP1_2,
  audioP3_4,
  audioP5_9,
  audioP10_11,
  audioP12_13,
  audioP14_17,
  audioP18,
  audioP19,
  audioP20_24,
  audioP25_27,
  audioP28,
  audioP29_34,
  audioP35_37,
  audioP38_41,
  audioP42_44,
  audioP45
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
