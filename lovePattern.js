
const pixels6 = [];
for (let i = 0; i < gridSize * gridSize; i++) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixels6.push(pixel);
  artContainer6.appendChild(pixel); // Assuming artContainer6 is used for the heart pattern
}

// Function to create the animated heart pattern
function lovePattern() {
  // Clear the previous frame
  pixels6.forEach(pixel => pixel.style.backgroundColor = '#000');

  let time = Date.now() * 0.002; // Use time to animate the heart

  for (let t = 0; t <= 2 * Math.PI; t += 0.05) {
    // Parametric equations for the heart shape with animation effect
    const x = Math.floor(16 * Math.pow(Math.sin(t), 3)); 
    const y = Math.floor(13 * Math.cos(t + time) - 5 * Math.cos(2 * t + time) - 2 * Math.cos(3 * t + time) - Math.cos(4 * t + time));

    // Translate the x and y coordinates to fit in the grid
    const gridX = Math.floor(gridSize / 2 + x);
    const gridY = Math.floor(gridSize / 2 - y);  // Invert y for proper alignment

    // Check if the pixel is within bounds
    if (gridX >= 0 && gridX < gridSize && gridY >= 0 && gridY < gridSize) {
      const pixelIndex = gridY * gridSize + gridX;
      if (pixels6[pixelIndex]) {
        // Set the color of the pixel to a red hue
        pixels6[pixelIndex].style.backgroundColor = `hsl(0, 100%, 50%)`; // Red color
      }
    }
  }
}
