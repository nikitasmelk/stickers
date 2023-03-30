
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
