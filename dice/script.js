/*
// Speed factors for horizontal and vertical movement
const speedFactorX = 0.001;
const speedFactorY = 0.001;

// Get the cube element and its initial animation duration
const cube = document.getElementById('cube');
const initialDuration = parseFloat(getComputedStyle(cube).getPropertyValue('animation-duration'));

// Add event listener for mouse move events
document.addEventListener('mousemove', (event) => {
  // Calculate the rotation angles based on the mouse position
  const rotationX = (0.5 - event.clientY / window.innerHeight) * 360;
  const rotationY = (event.clientX / window.innerWidth - 0.5) * 360;

  // Calculate the distance between the mouse and the center of the cube
  const cubeRect = cube.getBoundingClientRect();
  const cubeX = cubeRect.left + cubeRect.width / 2;
  const cubeY = cubeRect.top + cubeRect.height / 2;
  const distance = Math.sqrt(Math.pow(event.clientX - cubeX, 2) + Math.pow(event.clientY - cubeY, 2));

  // Set the new animation duration based on the mouse position
  const durationX = Math.abs(event.movementX) * speedFactorX;
  const durationY = Math.abs(event.movementY) * speedFactorY;
  const durationZ = 1 - distance / Math.sqrt(window.innerWidth * window.innerHeight);
  const newDuration = Math.max(Math.min(durationX, durationY), initialDuration) * durationZ;

  // Set the rotation angles and animation duration for the cube
  cube.style.animationDuration = `${newDuration}s`;
  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});

// Add event listener for window resize events
window.addEventListener('resize', () => {
  // Reset the animation duration to its initial value on window resize
  cube.style.animationDuration = `${initialDuration}s`;
});

*/

// Speed factors for horizontal and vertical movement
const speedFactorX = 0.5;
const speedFactorY = 0.3;
let current_color = "#00ff00"; // Matrix green
let perspectives = ['50000px', '1000px', '300px', '100px'];
let perspective_counter = 0;
let colors = [ "#E74C3C", "#9B59B6", "#2980B9", "#2ECC71", "#F1C40F", "#F39C12", ];
let brightColors = [
  '#FFA726',
  '#9CCC65',
  '#29B6F6',
  '#AB47BC',
  '#FF7043',
  '#D4E157',
  '#5C6BC0',
  '#EC407A',
  '#8D6E63',
  '#42A5F5',
  '#7E57C2',
  '#26A69A',
  '#FFCA28',
  '#FFEE58',
  '#FF5252'
];

let new_color = colors[getRandomInt(colors.length)];

// Get the cube element and its initial animation duration
const cube = document.getElementById('cube');
const container = document.getElementById('container');
console.log(cube.children);


const initialDuration = parseFloat(getComputedStyle(cube).getPropertyValue('animation-duration'));

// Add event listeners for mouse move and touch move events
document.addEventListener('mousemove', handleMove);
document.addEventListener('touchmove', handleMove);
cube.addEventListener('click', handleClick);

function handleMove(event) {
  // Get the event position based on the event type (mouse or touch)
  const posX = (event.type === 'mousemove') ? event.clientX : event.touches[0].clientX;
  const posY = (event.type === 'mousemove') ? event.clientY : event.touches[0].clientY;

  // Calculate the rotation angles based on the event position
  const rotationX = (0.5 - posY / window.innerHeight) * 360;
  const rotationY = (posX / window.innerWidth - 0.5) * 360;

  /*
  // Calculate the distance between the event and the center of the cube
  const cubeRect = cube.getBoundingClientRect();
  const cubeX = cubeRect.left + cubeRect.width / 2;
  const cubeY = cubeRect.top + cubeRect.height / 2;
  const distance = Math.sqrt(Math.pow(posX - cubeX, 2) + Math.pow(posY - cubeY, 2));

  // Set the new animation duration based on the event position
  const durationX = Math.abs(event.movementX || event.touches[0].movementX) * speedFactorX;
  const durationY = Math.abs(event.movementY || event.touches[0].movementY) * speedFactorY;
  const durationZ = 1 - distance / Math.sqrt(window.innerWidth * window.innerHeight);
  const newDuration = Math.max(Math.min(durationX, durationY), initialDuration) * durationZ;
  console.log(durationX + "durationX");
  console.log(durationY + "durationY");
  console.log(durationZ + "durationZ");
  console.log(newDuration + "animationDuration");
*/
  // Set the rotation angles and animation duration for the cube
  // // cube.style.animationDuration = `${newDuration}s`;
  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}

function handleClick(){
  console.log('click');
  // document.body.style.backgroundColor = colors[getRandomInt(colors.length)];//colorToColorFilter(current_color, colors[getRandomInt(colors.length)]);
  new_color = brightColors[getRandomInt(brightColors.length)];
  console.log('new color' + new_color);
  console.log('current color' + current_color);

  Array.from(cube.children).forEach(element => {
    new_color = brightColors[getRandomInt(brightColors.length)];
    element.style.filter = colorToColorFilter(current_color, new_color);
    element.firstChild.style.filter = colorToColorFilter(current_color, new_color);

  });

  perspective_counter++;
  if(perspective_counter > (perspectives.length - 1)) perspective_counter = 0;
  container.style.perspective = perspectives[perspective_counter];

  
  // cube.style.cssText = colorToColorFilter(current_color, new_color);
  // cube.style.border = `3px solid ${new_color}`
  // document.body.style.filter = colorToColorFilter(current_color, new_color);
  console.log(colorToColorFilter(current_color, new_color));
  current_color = new_color;
}

// Add event listener for window resize events
window.addEventListener('resize', () => {
  // Reset the animation duration to its initial value on window resize
  cube.style.animationDuration = `${initialDuration}s`;
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}




function hexToHSL(hex) {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
}

function colorToColorFilter(hex1, hex2) {
  const [h1, s1, l1] = hexToHSL(hex1);
  const [h2, s2, l2] = hexToHSL(hex2);
  const hdeg = h2 - h1;
  const sPercent = (s2 - s1) / s1 * 100;
  const lPercent = (l2 - l1) / l1 * 100;

  // return `hue-rotate(${parseFloat(hdeg.toFixed(3))}deg) saturate(${parseFloat(sPercent.toFixed(3))}%) brightness(${parseFloat(lPercent.toFixed(3))}%)`;
  return `hue-rotate(${parseFloat(hdeg.toFixed(3))}deg) saturate(100%) brightness(100%)`;
}

// Usage example
console.log(colorToColorFilter(current_color, colors[getRandomInt(colors.length)]));
// document.body.style.style = colorToColorFilter(current_color, colors[getRandomInt(colors.length)]);

