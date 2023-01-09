console.log("Welcome to Spotify")

//Intialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    {songName: "cileo - Mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Sakhiyaannn", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Rabbaaaa", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "deaf kev invinicible", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Salam - e-Ishq", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "asjkdk kjkd dknvkdjks ", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "as- j-hh -sws ", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "asvvgf dk kjkd dkdjks ", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "asaaaaaa- hks ", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "asali - ali - ali ", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

})
//isten to events
audioElement.addEventListener('timeUpdate', ()=>{

    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
   
})

    
