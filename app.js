console.log("Welcome to Spotify")

let songindex=0;
let audioElement= new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let gif=document.getElementById('gif');
let myprogressBar=document.getElementById('myprogressBar');
let previous=document.getElementById('previous');
let next=document.getElementById('next');
let songItems = Array.from(document.getElementsByClassName('songitem'));
let masterSongName = document.getElementById('masterSongName');


let songs = [
    {songName: "Warriyo - Mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven  ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((Element,i)=>{
    Element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    Element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
})


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        document.getElementById(`${songindex}`).classList.remove('fa-circle-play');
        document.getElementById(`${songindex}`).classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        document.getElementById(`${songindex}`).classList.add('fa-circle-play');
        document.getElementById(`${songindex}`).classList.remove('fa-circle-pause'); 
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

 const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((Element)=>{
         Element.classList.remove('fa-circle-pause');
         Element.classList.add('fa-circle-play');
    })
 }

Array.from(document.getElementsByClassName('songItemplay')).forEach((Element)=>{
        Element.addEventListener('click',(e)=>{
           console.log(e);
           makeallplays();
           songindex=parseInt(e.target.id);
           e.target.classList.add('fa-circle-pause');
           e.target.classList.remove('fa-circle-play');
           audioElement.src=`songs/${songindex+1}.mp3`;
           masterSongName.innerText= songs[songindex].songName;
           audioElement.currentTime=0;
           audioElement.play();
           gif.style.opacity=1;
           masterPlay.classList.remove('fa-circle-play');
           masterPlay.classList.add('fa-circle-pause');
        })
})

next.addEventListener('click',()=>{
    if(songindex>=9){
        songindex = 0
    }
    else{
        songindex += 1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

previous.addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex-=1;
    }

    audioElement.src = `songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})