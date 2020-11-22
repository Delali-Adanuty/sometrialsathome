var track = document.querySelector('.track');
const play = document.querySelector('.buttons button.play-button');
const pause = document.querySelector('.buttons button.pause-button');
const volume = document.querySelector('.volume-buttons button.volume');
const volumeMute = document.querySelector('.volume-buttons button.volume-mute');
const trackLength = document.querySelector('.fullDuration');
var currentPosition = document.querySelector('.current-time');
var bar = document.querySelector('section .default-bar');
var progressBar = document.querySelector('section .progress-bar');
var barSize = 23.5;
const ball = document.querySelector('section .ball');
console.log(ball.style)

play.addEventListener('click', playsong);
pause.addEventListener('click', pausesong);
volumeMute.addEventListener('click', addVolume);
volume.addEventListener('click', muteVolume);



function playsong(){
    track.play();
    play.style = "display:none;"
    pause.style = "display:block;"
    setInterval(update, 500);
}

function pausesong(){
    track.pause();
    pause.style = "display:none;"
    play.style = "display:block;"
  
}

function muteVolume(){
    track.muted = true;
    volume.style = "display:none;";
    volumeMute.style = "display:block;";
}

function addVolume(){
    track.muted = false;
    volumeMute.style = "display:none;";
    volume.style = "display:block;";
}



function update(){
    if(!track.ended === true){
        var playedMinutes = parseInt(track.currentTime/60);
        var playedSeconds = (track.currentTime%60).toFixed(0);
        currentPosition.innerHTML =playedMinutes + " : " + playedSeconds;
        var size = (track.currentTime * barSize / track.duration).toFixed(1);
        progressBar.style.width = size + "vw";
        bar.style = "margin-top:0vh !important";
        ball.style.marginRight = size + "vw";
        bar.style = "margin-top:0vh !important";
    }else {
        currentPosition.innerHTML = "0 : 00"
        pause.style = "display:none;"
        play.style = "display:block;"
    }
}




