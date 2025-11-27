// birdPattern.js

let birdPosition = { x: 25, y: 25 };  // Starting position of the bird
let birdDirection = { x: 1, y: 0 };  // Initial movement direction
let birdFlap = 0;  // Flapping state

function birdPattern() {
  // Clear previous frame
  ctx8.fillStyle = '#000';
  ctx8.fillRect(0, 0, gridSize * pixelSize, gridSize * pixelSize);

  let time = Date.now() * 0.001;  // Use time to animate the bird

  // Simulate the bird flying in a loop
  birdPosition.x += birdDirection.x;  
  birdPosition.y += birdDirection.y + Math.sin(time * 2) * 2;  // Vertical movement with sine for flapping
  
  // Change direction at borders
  if (birdPosition.x >= gridSize || birdPosition.x < 0) birdDirection.x *= -1;  // Bounce left and right
  if (birdPosition.y >= gridSize || birdPosition.y < 0) birdDirection.y *= -1;  // Bounce top and bottom

  // Simulate the bird's wings flapping by changing its shape
  birdFlap = Math.abs(Math.sin(time * 5)) * 2;  // Small fluctuation for wing movement

  // Set the bird pixel at the current position
  const gridX = Math.floor(birdPosition.x);
  const gridY = Math.floor(birdPosition.y);

  if (gridX >= 0 && gridX < gridSize && gridY >= 0 && gridY < gridSize) {
      ctx8.fillStyle = `hsl(200, 100%, ${50 + birdFlap * 10}%)`;
      ctx8.fillRect(gridX * pixelSize, gridY * pixelSize, pixelSize, pixelSize);
  }
}
