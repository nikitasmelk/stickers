var gif = document.getElementById("gif");
let swapped = false;


function swap() {
  if(!swapped){
  setTimeout(function() {
    gif.src = "animation_loop.gif";
  }, 22000);
  swapped = true;
  }
}