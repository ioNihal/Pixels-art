// solarSystemPattern.js

const sunPosition = { x: gridSize / 2, y: gridSize / 2 };  // Sun at the center of the grid

// Define planet data (radius, orbital speed, color, etc.)
const planets = [
  { name: 'Mercury', radius: 5, speed: 0.02, color: 'hsl(0, 100%, 50%)' },
  { name: 'Venus', radius: 10, speed: 0.01, color: 'hsl(60, 100%, 50%)' },
  { name: 'Earth', radius: 15, speed: 0.005, color: 'hsl(120, 100%, 50%)' },
  { name: 'Mars', radius: 20, speed: 0.003, color: 'hsl(0, 100%, 60%)' },
  { name: 'Jupiter', radius: 25, speed: 0.002, color: 'hsl(30, 100%, 50%)' },
  { name: 'Saturn', radius: 30, speed: 0.0015, color: 'hsl(60, 100%, 50%)' },
  { name: 'Uranus', radius: 35, speed: 0.001, color: 'hsl(180, 100%, 50%)' },
  { name: 'Neptune', radius: 40, speed: 0.0008, color: 'hsl(240, 100%, 50%)' },
];

// Initial position of planets
let solarTime = 0;  // To simulate continuous movement over time
// Renaming 'time' to 'solarTime' to avoid conflicts if any, though scope is local in function if declared with let inside.
// But here it was global in file scope.

function solarSystemPattern() {
  // Clear previous frame (reset all pixels to black)
  ctx9.fillStyle = '#000';
  ctx9.fillRect(0, 0, gridSize * pixelSize, gridSize * pixelSize);

  // Draw the Sun at the center
  // Sun is usually larger, but original code just drew one pixel at sunPosition?
  // "const sunIndex = sunPosition.y * gridSize + sunPosition.x;"
  // Yes, one pixel.

  const sunX = Math.floor(sunPosition.x);
  const sunY = Math.floor(sunPosition.y);

  if (sunX >= 0 && sunX < gridSize && sunY >= 0 && sunY < gridSize) {
    ctx9.fillStyle = 'yellow';
    ctx9.fillRect(sunX * pixelSize, sunY * pixelSize, pixelSize, pixelSize);
  }

  // Animate each planet in its orbit
  planets.forEach(planet => {
    // Calculate the current position of the planet using sine and cosine for 2D orbit simulation
    let x = sunPosition.x + planet.radius * Math.cos(solarTime * planet.speed);  // X position
    let y = sunPosition.y + planet.radius * Math.sin(solarTime * planet.speed);  // Y position

    // Ensure the planet's position is within the grid bounds
    const gridX = Math.floor(x);
    const gridY = Math.floor(y);

    // Set the planet pixel color at the calculated position
    if (gridX >= 0 && gridX < gridSize && gridY >= 0 && gridY < gridSize) {
        ctx9.fillStyle = planet.color;
        ctx9.fillRect(gridX * pixelSize, gridY * pixelSize, pixelSize, pixelSize);
    }
  });

  // Increment the time to animate the orbit
  solarTime += 24;  // Adjust this value for faster/slower movement
}
