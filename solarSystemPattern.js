// solarSystemPattern.js

const pixels9 = [];

const sunPosition = { x: gridSize / 2, y: gridSize / 2 };  // Sun at the center of the grid

// Create the grid of pixels for the solar system
for (let i = 0; i < gridSize * gridSize; i++) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixels9.push(pixel);
  artContainer9.appendChild(pixel); // Assuming artContainer9 is used for the solar system pattern
}

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
let time = 0;  // To simulate continuous movement over time

function solarSystemPattern() {
  // Clear previous frame (reset all pixels to black)
  pixels9.forEach(pixel => pixel.style.backgroundColor = '#000');

  // Draw the Sun at the center
  const sunIndex = sunPosition.y * gridSize + sunPosition.x;
  if (pixels9[sunIndex]) {
    pixels9[sunIndex].style.backgroundColor = 'yellow';  // Sun is yellow
  }

  // Animate each planet in its orbit
  planets.forEach(planet => {
    // Calculate the current position of the planet using sine and cosine for 2D orbit simulation
    let x = sunPosition.x + planet.radius * Math.cos(time * planet.speed);  // X position
    let y = sunPosition.y + planet.radius * Math.sin(time * planet.speed);  // Y position

    // Ensure the planet's position is within the grid bounds
    x = Math.floor(x);
    y = Math.floor(y);

    // Set the planet pixel color at the calculated position
    if (x >= 0 && x < gridSize && y >= 0 && y < gridSize) {
      const pixelIndex = y * gridSize + x;
      if (pixels9[pixelIndex]) {
        pixels9[pixelIndex].style.backgroundColor = planet.color;
      }
    }
  });

  // Increment the time to animate the orbit
  time += 24;  // Adjust this value for faster/slower movement
}
