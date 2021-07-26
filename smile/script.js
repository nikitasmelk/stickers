var gif = document.getElementById("gif");
var bg = document.getElementById("backgroundVideo");
var cowAudio = new Audio("minecraft_cow.mp3");
var pigAudio = new Audio("minecraft_pig.mp3");
var hitAudio = new Audio("minecraft_hit.mp3");
cowAudio.volume = 0.1;
pigAudio.volume = 0.1;
hitAudio.volume = 0.1;
const canVibrate = window.navigator.vibrate;
let swapped = 1;
let clicked = 0;

function ready() {
  gif.style.opacity = 1;

  setTimeout(function() {
    gif.src = "animation_loop.gif";
  }, 23000);
}

function handleClick(){

  if(clicked > 4) {
    let random = Math.floor(Math.random() * 10) + 1;
    if( random  == 1) {
      pigAudio.play();
    }else if ( random == 2) {
      cowAudio.play();
    } else { 
      hitAudio.play();
    }

    if (canVibrate) window.navigator.vibrate(200);
  }
  
  if(!swapped){
    gif.classList.add("invert");
    bg.classList.add("invert");
    swapped = true;
  } else {
    gif.classList.remove("invert");
    bg.classList.remove("invert");
    swapped = false;
  }

  clicked++;
}

// что ты ищещь?

document.addEventListener("DOMContentLoaded", ready);
