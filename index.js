const music = document.getElementById("music");
const background = document.getElementById("bgImg");
const albumArt = document.getElementById("albumArt");
const songName = document.getElementById("song-name");
const artistName = document.getElementById("artist-name");
const curTime = document.getElementById("currentTime");
const durTime = document.getElementById("durationTime");
const slider = document.getElementById("sli");
const playPause = document.getElementById("play-pause");

let songNames = [
    "Astronomia",
    "Sour Candy"
]

let artists = [
    "Vicetone, Tony Igy",
    "Lady Gaga, BlackPink"
]

let songPath = [
    "./assets/music/Astronomia - Vicetone_ Tony Igy.flac",
    "./assets/music/Sour Candy - Lady Gaga_ BlackPink.flac"
]

let albumArtPath = [
    "./assets/album_art/astronomia.jpg",
    "./assets/album_art/chromatica.jpg"
]

let playing = true;
function pp() {
    if (playing) {
        playPause.src = "./assets/player_icon/pause.png";
        music.play();
    }
    else {
        playPause.src = "./assets/player_icon/play-button.png";
        music.pause();
    }
    playing = !playing;
}

music.ontimeupdate = function updateTime() {
    durTime.innerHTML = Math.floor(music.duration / 60) + " : " + (Math.round(music.duration) % 60);
    curTime.innerHTML = Math.floor(music.currentTime / 60) + " : " + (Math.round(music.currentTime) % 60);
    slider.max = music.duration;
    slider.value = music.currentTime;
}

let count = 0;
function next() {
    count ++;
    if (count > songNames.length - 1) { 
        count = 0; 
    }
    background.src = albumArtPath[count];
    music.src = songPath[count];
    albumArt.src = albumArtPath[count];
    songName.innerText = songNames[count];
    artistName.innerText = artists[count];
    playing = true;
    pp();
}

function rewind() {
    count --;
    if (count < 0) { 
        count = songNames.length - 1; 
    }
    background.src = albumArtPath[count];
    music.src = songPath[count];
    albumArt.src = albumArtPath[count];
    songName.innerText = songNames[count];
    artistName.innerText = artists[count];
    playing = true;
    pp();
}

slider.oninput = function() {
    music.currentTime = this.value;
}