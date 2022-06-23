let audio = document.getElementById("audio");
let time = document.querySelector(".time");      
let btnPlay = document.querySelector(".play");   
let btnPause = document.querySelector(".pause"); 
let btnPrev = document.querySelector(".prev");   
let btnNext = document.querySelector(".next");   



let playlist = [
    'treck1.mp3',
    'treck2.mp3',
    'treck3.mp3',
    
];
 
let treck; 
 

window.onload = function() {
    treck = 0; 
}


function switchTreck (numTreck) {
    audio.src = './audio/' + playlist[numTreck];
    audio.currentTime = 0;
    audio.play();
}


btnPlay.addEventListener("click", function() {
    audio.play();   
    audioPlay = setInterval(function() {  
        let audioTime = Math.round(audio.currentTime);
        let audioLength = Math.round(audio.duration)
        time.style.width = (audioTime * 100) / audioLength + '%';
        if (audioTime == audioLength && treck < 3) {
            treck++;
            switchTreck(treck);  
        } else if (audioTime == audioLength && treck >= 3) {
            treck = 0; 
            switchTreck(treck);
        }
    }, 10)
});



btnPause.addEventListener("click", function() {
    audio.pause(); 
    clearInterval(audioPlay) 
});


btnPrev.addEventListener("click", function() {
    
    if (treck > 0) {
        treck--; 
        switchTreck(treck);
    } else { 
        treck = 3; 
        switchTreck(treck); 
    }
});


btnNext.addEventListener("click", function() {
   
    if (treck < 3) { 
        treck++; 
        switchTreck(treck);  
    } else {
        treck = 0; 
        switchTreck(treck); 
    }
});