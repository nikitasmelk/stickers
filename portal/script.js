// let colors = [ "#E74C3C", "#9B59B6", "#2980B9", "#2ECC71", "#F1C40F", "#F39C12", ];

// update
let colors = ["#0057b8", "#ffd700"];

const canVibrate = window.navigator.vibrate;

let timer = 1000; // timer for animation speedup
let teleported = false;
let fade_out_activated = false
let fade_out_increment = 2;

//get DOM elements
let letters = document.getElementsByTagName("a");
let box = document.getElementById("square");
let fade_out_box = document.getElementById("fade_out");

let array_of_fonts = [`'ArialBlack-'`, `'Rampart One', cursive`, `'Shadows Into Light', cursive`, 
                      `'Fredericka the Great', cursive`, `'Playfair Display', serif`, `'Lobster', cursive`, 
                      `'Teko', sans-serif`, `'Nanum Myeongjo', serif`, `'Monoton', cursive`, `'VT323', monospace`, 
                      ` 'Rochester', cursive`, `'Cinzel Decorative', cursive`, `'Rye', cursive`, 
                      `'Seaweed Script', cursive`, `'Grenze Gotisch', cursive`, ` 'Irish Grover', cursive`, 
                      `'Frijole', cursive`, `'Pirata One', cursive`, ` 'New Rocker', cursive`, `'Junge', serif`, 
                      `'Ewert', cursive`]; // all fonts

let array_of_letters = [document.getElementsByClassName("letter 1"),
                        document.getElementsByClassName("letter 2"),
                        document.getElementsByClassName("letter 3"),
                        document.getElementsByClassName("letter 4"),
                        document.getElementsByClassName("letter 5")]; // all letters

for (let i = 0; i < letters.length; i++) { //loop for adding color functionality to each letter
  letters[i].addEventListener("mouseenter", function( event ) {

    event.target.style.color = colors[getRandomInt(colors.length)];

  }, false);

  letters[i].addEventListener("mouseleave", function( event ) {


  //  event.target.style.color = 'black';

  // update
  event.target.style.color = document.body.style.color;

  }, false);
}

function ready(){ // counters
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.countapi.xyz/hit/nikiboy.art/portal-visits");
  xhr.responseType = "json";
  xhr.onload = function() {
      // console.log(this.response.value);
  }
  xhr.send();

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.countapi.xyz/hit/nikiboy.art/total-visits");
  xhr.responseType = "json";
  xhr.onload = function() {
      // console.log(this.response.value);
  }
  xhr.send();
}

function rgb2hex(rgb){ // converts rgb to hex
rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
return (rgb && rgb.length === 4) ? "#" +
 ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
 ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
 ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

function getRandomInt(max) {
return Math.floor(Math.random() * max);
}

function setAnimations() {

if(timer < 100 && !fade_out_activated){ // activate fade out
  fade_out_activated = true;
  setInterval(startFadeOut, 10);
}

if(timer > 40) {
  timer = timer / 1.1; // decrement timer -> speeds up animation
} else if(!teleported){ // jump to next page
    // window.location.href = "https://ru.wikipedia.org/wiki/Special:Random";
    window.location.href = "https://ru.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0"
    teleported = true;

    //counter
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/nikiboy.art/portal-teleports");
    xhr.responseType = "json";
    xhr.onload = function() {
        // console.log(`Кнопка была нажата в ${this.response.value} раз`);
    }
    xhr.send();

} else {
  timer = 40; // don't go below 40 (too fast!)
}

array_of_letters.forEach(el => { // run for each letter
  for(let i = 0; i < el.length; i++){

    setTimeout(changeFont, getRandomInt(timer)/2, el[i]); // create chaotic utanimation by randomizing setTimeout

  }});

  setTimeout(setAnimations, timer); // repeat animation with now decresed timer

}

function startFadeOut() { // start fade when jumping to next page
  fade_out_box.style.width =  500 + fade_out_increment + "px";
  fade_out_box.style.height =  500 + fade_out_increment + "px";
  fade_out_increment *= 1.1;
}

function changeFont(letter){
  letter.style.fontFamily = array_of_fonts[getRandomInt(array_of_fonts.length)];
}

let handleCLick = function () { // handle click on white square


    //count interactions
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/nikiboy.art/portal-clicks");
    xhr.responseType = "json";
    xhr.onload = function() {
        // console.log(`Кнопка была нажата в ${this.response.value} раз`);
    }
    xhr.send();
  
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/nikiboy.art/total-interactions");
    xhr.responseType = "json";
    xhr.onload = function() {
        // console.log(`Кнопка была нажата в ${this.response.value} раз`);
    }
    xhr.send();


  if (canVibrate) window.navigator.vibrate(25);

  let new_color = colors[getRandomInt(colors.length)];

  while (rgb2hex(document.body.style.background) == new_color.toLowerCase()){
   new_color = colors[getRandomInt(colors.length)]; 
  }
  document.body.style.background = new_color;

  // update
  console.log(document.body.style.background);
  if(rgb2hex(document.body.style.background) == "#0057b8"){
    document.body.style.color = "#ffd700";
  } else {
    document.body.style.color = "#0057b8";
  }

  box.style.backgroundColor = document.body.style.background;

  fade_out_box.style.backgroundColor = document.body.style.background;
  //

}

box.addEventListener("click", handleCLick); // add click event

setTimeout(setAnimations, 6000); // start initial animation 6s after page loads

document.addEventListener("DOMContentLoaded", ready);// for counter functionality