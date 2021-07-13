var gif = document.getElementById("gif");
let swapped = false;

function ready() {
  gif.style.opacity = 1;

  setTimeout(function() {
    gif.src = "animation_loop.gif";
  }, 2200);
}

document.addEventListener("DOMContentLoaded", ready);
