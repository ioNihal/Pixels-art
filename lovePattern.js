
// Function to create the animated heart pattern
function lovePattern() {
  // Clear the previous frame
  ctx6.fillStyle = '#000';
  ctx6.fillRect(0, 0, gridSize * pixelSize, gridSize * pixelSize);

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
        ctx6.fillStyle = `hsl(0, 100%, 50%)`; // Red color
        ctx6.fillRect(gridX * pixelSize, gridY * pixelSize, pixelSize, pixelSize);
    }
  }
}
