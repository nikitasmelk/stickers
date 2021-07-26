var gif = document.getElementById("gif");
var bg = document.getElementById("backgroundVideo");
let swapped = 1;

function ready() {
  gif.style.opacity = 1;

  setTimeout(function() {
    gif.src = "animation_loop.gif";
  }, 23000);
}

function handleClick(){
  console.log("click");
  if(!swapped){
    gif.classList.add("invert");
    bg.classList.add("invert");
    swapped = true;
  } else {
    gif.classList.remove("invert");
    bg.classList.remove("invert");
    swapped = false;
  }
  
}

// что ты ищещь?

document.addEventListener("DOMContentLoaded", ready);
