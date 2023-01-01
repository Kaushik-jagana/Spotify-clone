console.log("Welcome to Spotify")

let songindex=0;
let audioElement= new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let gif=document.getElementById('gif');
let myprogressBar=document.getElementById("myprogressBar");
let previous=document.getElementById('previous');
let next=document.getElementById('next');
let songItems =document.getElementsByClassName('songitem');

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

audioElement.addEventListener('timeupdate',()=>{
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100) ;
    myprogressBar.value = progress;
})

myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressBar.value * audioElement.duration/100;
})

previous.addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex-=1;
    }

    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})