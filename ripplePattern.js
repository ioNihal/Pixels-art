
const rippleSpeed = 100;
let rippleRadius = 0;
const rippleCenter = { x: Math.floor(gridSize / 2), y: Math.floor(gridSize / 2) };

function ripplePattern() {
  rippleRadius += 0.2; // Expand the radius with each call

  // Loop through all pixels
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      const dx = x - rippleCenter.x;
      const dy = y - rippleCenter.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (Math.abs(distance - rippleRadius) < 1) {
          ctx4.fillStyle = `hsl(${(Date.now() / 10) % 360}, 100%, 50%)`;
          ctx4.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
      }
    }
  }

  // Reset ripple to start over after it reaches the grid edge
  if (rippleRadius > gridSize) {
    rippleRadius = 0;
  }
}
