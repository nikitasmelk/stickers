let colors = [ "#E74C3C", "#9B59B6", "#2980B9", "#2ECC71", "#F1C40F", "#F39C12" ];
let logo = document.getElementById("logo");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let handleClick = function () {
  document.body.style.backgroundColor = colors[getRandomInt(colors.length)];
}

logo.addEventListener("click", handleClick); // add click event

