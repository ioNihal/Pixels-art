// fibonacciPattern.js

let radius = 0.5; // Initial radius for the spiral
let angle = 0; // Starting angle
const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio constant

function goldenRatioPattern() {
  angle += 0.1; // Small angle step for gradual rotation
  radius += 0.05; // Slow increase in radius for compact spiral

  // Calculate x and y based on polar coordinates, and wrap around grid bounds using modulo
  const x = Math.floor((gridSize / 2 + radius * Math.cos(angle)) % gridSize);
  const y = Math.floor((gridSize / 2 + radius * Math.sin(angle)) % gridSize);

  // Ensure x and y stay positive
  const wrappedX = (x + gridSize) % gridSize;
  const wrappedY = (y + gridSize) % gridSize;

  // Apply color
  ctx5.fillStyle = `hsl(${(angle * 10) % 360}, 100%, 50%)`;
  ctx5.fillRect(wrappedX * pixelSize, wrappedY * pixelSize, pixelSize, pixelSize);

  // Decay the radius slightly when it exceeds a certain size to keep it looping in bounds
  if (radius > gridSize / 2) {
    radius *= 0.7;
  }
}
