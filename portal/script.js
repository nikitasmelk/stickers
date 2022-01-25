
// let colors = [
//   "#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177" ,"#0d5ac1" ,
//   "#f205e6" ,"#1c0365" ,"#14a9ad" ,"#4ca2f9" ,"#a4e43f" ,"#d298e2" ,"#6119d0",
//   "#d2737d" ,"#c0a43c" ,"#f2510e" ,"#651be6" ,"#79806e" ,"#61da5e" ,"#cd2f00" ,
//   "#9348af" ,"#01ac53" ,"#c5a4fb" ,"#996635","#b11573" ,"#4bb473" ,"#75d89e" ,
//   "#2f3f94" ,"#2f7b99" ,"#da967d" ,"#34891f" ,"#b0d87b" ,"#ca4751" ,"#7e50a8" ,
//   "#c4d647" ,"#e0eeb8" ,"#11dec1" ,"#289812" ,"#566ca0" ,"#ffdbe1" ,"#2f1179" ,
//   "#935b6d" ,"#916988" ,"#513d98" ,"#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d",
//   "#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977",
//   "#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b",
//   "#5be4f0", "#57c4d8", "#a4d17a", "#be608b", "#96b00c", "#088baf",
//   "#f158bf", "#e145ba", "#ee91e3", "#05d371", "#5426e0", "#4834d0", "#802234",
//   "#6749e8", "#0971f0", "#8fb413", "#b2b4f0", "#c3c89d", "#c9a941", "#41d158",
//   "#fb21a3", "#51aed9", "#5bb32d", "#21538e", "#89d534", "#d36647",
//   "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
//   "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
//   "#1bb699", "#6b2e5f", "#64820f", "#21538e", "#89d534", "#d36647",
//   "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
//   "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
//   "#1bb699", "#6b2e5f", "#64820f", "#9cb64a", "#996c48", "#9ab9b7",
//   "#06e052", "#e3a481", "#0eb621", "#fc458e", "#b2db15", "#aa226d", "#792ed8",
//   "#73872a", "#520d3a", "#cefcb8", "#a5b3d9", "#7d1d85", "#c4fd57", "#f1ae16",
//   "#8fe22a", "#ef6e3c", "#243eeb", "#dd93fd", "#3f8473", "#e7dbce",
//   "#421f79", "#7a3d93", "#635f6d", "#93f2d7", "#9b5c2a", "#15b9ee", "#0f5997",
//   "#409188", "#911e20", "#1350ce", "#10e5b1", "#fff4d7", "#cb2582", "#ce00be",
//   "#32d5d6", "#608572", "#c79bc2", "#00f87c", "#77772a", "#6995ba",
//   "#fc6b57", "#f07815", "#8fd883", "#060e27", "#96e591", "#21d52e", "#d00043",
//   "#b47162", "#1ec227", "#4f0f6f", "#1d1d58", "#947002", "#bde052", "#e08c56",
//   "#28fcfd", "#36486a", "#d02e29", "#1ae6db", "#3e464c", "#a84a8f",
//   "#911e7e", "#3f16d9", "#0f525f", "#ac7c0a", "#b4c086", "#c9d730", "#30cc49",
//   "#3d6751", "#fb4c03", "#640fc1", "#62c03e", "#d3493a", "#88aa0b", "#406df9",
//   "#615af0", "#2a3434", "#4a543f", "#79bca0", "#a8b8d4", "#00efd4",
//   "#7ad236", "#7260d8", "#1deaa7", "#06f43a", "#823c59", "#e3d94c", "#dc1c06",
//   "#f53b2a", "#b46238", "#2dfff6", "#a82b89", "#1a8011", "#436a9f", "#1a806a",
//   "#4cf09d", "#c188a2", "#67eb4b", "#b308d3", "#fc7e41", "#af3101",
//   "#71b1f4", "#a2f8a5", "#e23dd0", "#d3486d", "#00f7f9", "#474893", "#3cec35",
//   "#1c65cb", "#5d1d0c", "#2d7d2a", "#ff3420", "#5cdd87", "#a259a4", "#e4ac44",
//   "#1bede6", "#8798a4", "#d7790f", "#b2c24f", "#de73c2", "#d70a9c",
//   "#88e9b8", "#c2b0e2", "#86e98f", "#ae90e2", "#1a806b", "#436a9e", "#0ec0ff",
//   "#f812b3", "#b17fc9", "#8d6c2f", "#d3277a", "#2ca1ae", "#9685eb", "#8a96c6",
//   "#dba2e6", "#76fc1b", "#608fa4", "#20f6ba", "#07d7f6", "#dce77a", "#77ecca"];

let colors = [ "#E74C3C", "#9B59B6", "#2980B9", "#2ECC71", "#F1C40F", "#F39C12"];
// let colors = ["#AF7AC5", "#A569BD", "#73C6B6", "#52BE80", "#F7DC6F", "#F5B041"];

const canVibrate = window.navigator.vibrate;

let timer = 1000;
let teleported = false;
let iterations = 1;
let numba = 1000;
let fade_out_activated = false
let fade_out_increment = 2;
// let current_bg_color = "black"

let letters = document.getElementsByTagName("a");
let box = document.getElementById("square");
let fade_out_box = document.getElementById("fade_out");
// let array_of_fonts = [`'Times New Roman'`, `'Rampart One', cursive`, 
// `'Shadows Into Light', cursive`, `'Architects Daughter', cursive`, 
//  `'Fredericka the Great', cursive`, `'Cabin Sketch', cursive`, `'ArialBlack-'`
// ];

let array_of_fonts = [`'ArialBlack-'`, `'Rampart One', cursive`, `'Shadows Into Light', cursive`, `'Fredericka the Great', cursive`, `'Playfair Display', serif`, `'Lobster', cursive`, `'Teko', sans-serif`, `'Nanum Myeongjo', serif`, `'Monoton', cursive`, `'VT323', monospace`, ` 'Rochester', cursive`, `'Cinzel Decorative', cursive`, `'Rye', cursive`, `'Seaweed Script', cursive`, `'Grenze Gotisch', cursive`, ` 'Irish Grover', cursive`, `'Frijole', cursive`, `'Pirata One', cursive`, ` 'New Rocker', cursive`, `'Junge', serif`, `'Ewert', cursive`];
let array_of_links = []; 
// let array_of_colors = ["pink", "green", "yellow", "red", "purple", "blue", "black"];
// let array_of_letters = [['S', 'P', 'A', 'C', 'E', 'R'],['N', 'A', 'M', 'E', 'R'],['J', 'U', 'I', 'C', 'E'],['C', 'O', 'Z', 'E', 'K'],['C', 'A', 'P', 'T', 'E', 'K']];
let array_of_letters = [document.getElementsByClassName("letter 1"),document.getElementsByClassName("letter 2"),document.getElementsByClassName("letter 3"),document.getElementsByClassName("letter 4"),document.getElementsByClassName("letter 5")];

for (let i = 0; i < letters.length; i++) {
letters[i].addEventListener("mouseenter", function( event ) {
  // highlight the mouseenter target
  // let rand = getRandomInt(array_of_fonts.length);
  // event.target.style.fontFamily = array_of_fonts[getRandomInt(array_of_fonts.length)];
  event.target.style.color = colors[getRandomInt(colors.length)];
  //font-family:Georgia, 'Times New Roman', Times, serif;

  // reset the color after a short delay
  // setTimeout(function() {
  //   event.target.style.color = "";
  // }, 500);
}, false);

letters[i].addEventListener("mouseleave", function( event ) {
  event.target.style.color = 'black';
}, false);

//   document.addEventListener('swiped', function(e) {
//     e.target.style.color = array_of_colors[getRandomInt(array_of_colors.length)];
// });

// letters[i].addEventListener('swiped', function(e) {
//   e.target.style.color = array_of_colors[getRandomInt(array_of_colors.length)];
//   window.location.href = "https://ru.wikipedia.org/wiki/Special:Random";
// });

// letters[i].addEventListener("click", function( event ) {
//   // highlight the mouseenter target
//   let rand = getRandomInt()
//   window.open('https://www.instagram.com/a_d_e_d_/?hl=en', '_blank');
  
// }, false);

}


function rgb2hex(rgb){
rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
return (rgb && rgb.length === 4) ? "#" +
 ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
 ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
 ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}



function getRandomInt(max) {
return Math.floor(Math.random() * max);
}

let changeFonts = function () {
clearFonts();
array_of_letters.forEach(el => {
  for(let i = 0; i < el.length; i++){
    el[i].style.fontFamily = array_of_fonts[getRandomInt(array_of_fonts.length)];
    console.log('hihihi');
    // el[i].style.color = colors[getRandomInt(colors.length)];
  }

  // el[getRandomInt(el.length)].style.fontFamily = array_of_fonts[getRandomInt(array_of_fonts.length)];
  // el[getRandomInt(el.length)].style.color = colors[getRandomInt(colors.length)];
});
};

function clearFonts() {
console.log('hihihi');
if(timer > 40) {
  // timer = timer / 1.1;
} else if(!teleported){
  // window.location.href = "https://ru.wikipedia.org/wiki/Special:Random";
  teleported = true;
} 

//repeat
setTimeout(changeFonts, timer);

// for(let i = 0; i < array_of_letters.length; i++){

//   for(let j = 0; j < array_of_letters[i].length; j++){

//     array_of_letters[i][j].style.fontFamily = 'ArialBlack-, sans-serif';
//     // array_of_letters[i][j].style.color = 'black';
//   }
// }


// array_of_letters.forEach(i => {
//   i.forEach(j => {
//     j.style.fontFamily = 'Arial, Helvetica, sans-serif';
//   });
// });
};

function setAnimations() {
// console.log("hi");
// timer /= 1.1;
// if(timer < 40) timer = 40;

if(timer < 100 && !fade_out_activated){
  fade_out_activated = true;
  setInterval(startFadeOut, 10);
}

if(timer > 40) {
  timer = timer / 1.1;
} else if(!teleported){
  window.location.href = "https://ru.wikipedia.org/wiki/Special:Random";
  teleported = true;
} else {
  timer = 40;
}

array_of_letters.forEach(el => {
  for(let i = 0; i < el.length; i++){

    rand = getRandomInt(9)*1000;
    setTimeout(changeFont, getRandomInt(timer)/2, el[i]);

  }
});

setTimeout(setAnimations, timer);

}

function startFadeOut() {

  fade_out_box.style.width =  500 + fade_out_increment + "px";
  fade_out_box.style.height =  500 + fade_out_increment + "px";
  fade_out_increment *= 1.1;
}

function changeFont(letter){
letter.style.fontFamily = array_of_fonts[getRandomInt(array_of_fonts.length)];
}

// setTimeout(changeFonts, timer);
// setTimeout(clearFonts, 5000);
setTimeout(setAnimations, 6000);

let handleCLick = function () {

  if (canVibrate) window.navigator.vibrate(200);

let new_color = colors[getRandomInt(colors.length)];

while (rgb2hex(document.body.style.background) == new_color.toLowerCase()){
  new_color = colors[getRandomInt(colors.length)]; 
}
document.body.style.background = new_color;

}

box.addEventListener("click", handleCLick);