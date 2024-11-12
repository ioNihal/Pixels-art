// flowerPattern.js

const pixels7 = [];
for (let i = 0; i < gridSize * gridSize; i++) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixels7.push(pixel);
  artContainer7.appendChild(pixel); // Assuming artContainer7 is used for the flower pattern
}

function flowerPattern() {
  // Clear previous frame
  pixels7.forEach(pixel => pixel.style.backgroundColor = '#000');

  let time = Date.now() * 0.002;  // Use time for animation

  const numPetals = 6;  // Number of petals in the flower
  const maxRadius = 15;  // Max size of the flower (bloom size)
  const petalLength = Math.sin(time * 0.05) * maxRadius;  // Bloom effect
  
  for (let t = 0; t < 2 * Math.PI * numPetals; t += 0.1) {
    // Parametric equations for the flower shape
    const r = petalLength * (1 + 0.5 * Math.cos(numPetals * t));  // Petal shape

    // Convert polar to cartesian coordinates (x, y)
    const x = Math.floor(r * Math.cos(t + time));
    const y = Math.floor(r * Math.sin(t + time));

    // Translate the x and y coordinates to fit in the grid
    const gridX = Math.floor(gridSize / 2 + x);
    const gridY = Math.floor(gridSize / 2 - y);  // Invert y for proper alignment

    // Check if the pixel is within bounds
    if (gridX >= 0 && gridX < gridSize && gridY >= 0 && gridY < gridSize) {
      const pixelIndex = gridY * gridSize + gridX;
      if (pixels7[pixelIndex]) {
        // Set the color of the pixels to a flower-like color (pink)
        pixels7[pixelIndex].style.backgroundColor = `hsl(${time % 360}, 100%, 50%)`;
      }
    }
  }
}
