console.log("Welcome to Spotify")

let songindex=0;
let audioElement= new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let gif=document.getElementById('gif');

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play'); 
        gif.style.opacity=0;
    }
})