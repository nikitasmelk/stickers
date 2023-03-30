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











/*

// Speed factors for horizontal and vertical movement
const speedFactorX = 0.05;
const speedFactorY = 0.03;

// Get the cube element and its initial animation duration
const cube = document.getElementById('cube');
const initialDuration = parseFloat(getComputedStyle(cube).getPropertyValue('animation-duration'));

// Add event listeners for mouse move and touch move events
document.addEventListener('mousemove', handleMove);
document.addEventListener('touchmove', handleMove);

function handleMove(event) {
  // Get the event position based on the event type (mouse or touch)
  const posX = (event.type === 'mousemove') ? event.clientX : event.touches[0].clientX;
  const posY = (event.type === 'mousemove') ? event.clientY : event.touches[0].clientY;

  // Calculate the rotation angles based on the event position
  const rotationX = (0.5 - posY / window.innerHeight) * 360;
  const rotationY = (posX / window.innerWidth - 0.5) * 360;

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

  // Set the rotation angles and animation duration for the cube
  cube.style.animationDuration = `${newDuration}s`;
  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}

// Add event listener for window resize events
window.addEventListener('resize', () => {
  // Reset the animation duration to its initial value on window resize
  cube.style.animationDuration = `${initialDuration}s`;
});
*/

const speedFactorX = 0.05;
const speedFactorY = 0.03;

const cube = document.getElementById('cube');
const initialDuration = parseFloat(getComputedStyle(cube).getPropertyValue('animation-duration'));

document.addEventListener('mousemove', handleMove);
document.addEventListener('touchmove', handleMove, { passive: false });

window.addEventListener('resize', () => {
  cube.style.animationDuration = `${initialDuration}s`;
});

let isZooming = false;
let initialDistance = 0;
let lastPosX = 0;
let lastPosY = 0;

function handleMove(event) {
  const isTouchEvent = (event.type === 'touchmove');
  event.preventDefault();

  if (isTouchEvent) {
    if (event.touches.length === 2) {
      const x1 = event.touches[0].clientX;
      const y1 = event.touches[0].clientY;
      const x2 = event.touches[1].clientX;
      const y2 = event.touches[1].clientY;
      const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      
      if (!isZooming) {
        initialDistance = distance;
        isZooming = true;
      } else {
        const zoomFactor = distance / initialDistance;
        cube.style.transform = `scale(${zoomFactor})`;
      }
    } else {
      isZooming = false;
    }
  }
  
  if (!isZooming) {
    const posX = (isTouchEvent) ? event.touches[0].clientX : event.clientX;
    const posY = (isTouchEvent) ? event.touches[0].clientY : event.clientY;

    const deltaX = posX - lastPosX;
    const deltaY = posY - lastPosY;

    const rotationX = (0.5 - posY / window.innerHeight) * 360;
    const rotationY = (posX / window.innerWidth - 0.5) * 360;

    const cubeRect = cube.getBoundingClientRect();
    const cubeX = cubeRect.left + cubeRect.width / 2;
    const cubeY = cubeRect.top + cubeRect.height / 2;
    const distance = Math.sqrt(Math.pow(posX - cubeX, 2) + Math.pow(posY - cubeY, 2));

    const durationX = Math.abs(deltaX) * speedFactorX;
    const durationY = Math.abs(deltaY) * speedFactorY;
    const durationZ = 1 - distance / Math.sqrt(window.innerWidth * window.innerHeight);
    const newDuration = Math.max(Math.min(durationX, durationY), initialDuration);
    
    cube.style.animationDuration = `${newDuration * durationZ}s`;
    cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    
    lastPosX = posX;
    lastPosY = posY;
  }
}
