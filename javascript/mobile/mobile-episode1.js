
var beginnings = [0, 19, 38, 52, 75, 93, 112, 130, 150, 168, 183];
var ends = [18, 37, 51, 74, 92, 111, 129, 149, 167, 182];

var track = document.getElementsByTagName('audio')[0];
track.load();

var soundIsOn = false;
$( '#sound-on' ).hide();
let soundBox = document.querySelectorAll( '#sound-box, .P2' );

 $( window ).on('load',function() {

    $( '#sound-box' ).click(() => {
        $( '#sound-off' ).toggle();
        $( '#sound-on' ).toggle();
        soundIsOn = !soundIsOn;
        soundIsOn ? track.play() : track.pause();
    });

    var tempo = 0;
    var currentBlockIndex = 0;
    var soundBlocks = $('son');
    
    track.ontimeupdate = function(){
        if(track.currentTime > ends[tempo]){
            track.currentTime = beginnings[tempo] + 0.5;
        }
    };
    
    $(window).scroll(function() {
        currentBlockIndex = 0;
        var windowToTop = $(window).scrollTop();
        soundBlocks.each(function() {
            var blockToTop = $(this).offset().top;
            var blockHeight = $(this).height();            
            if(blockToTop < windowToTop && windowToTop > blockToTop + blockHeight) {
                currentBlockIndex = soundBlocks.index(this);
            }
        });
        
        if(currentBlockIndex == tempo) {
            return false;
        }

        else {
            tempo = currentBlockIndex;
            console.log('currentBlockIndex', currentBlockIndex);
            track.currentTime = beginnings[currentBlockIndex];
            if(soundIsOn){
                track.play();
            }
        }
    });
 
});
