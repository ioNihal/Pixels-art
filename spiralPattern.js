
const pixels3 = [];
let spiralPosition = { x: Math.floor(gridSize / 2), y: Math.floor(gridSize / 2) };
let direction = 0; // 0: right, 1: down, 2: left, 3: up
let steps = 1;
let stepCount = 0;
let layer = 1;

for (let i = 0; i < gridSize * gridSize; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixels3.push(pixel);
    artContainer3.appendChild(pixel);
}

function spiralPattern() {
    if (stepCount >= steps) {
        stepCount = 0;
        direction = (direction + 1) % 4;
        if (direction === 0 || direction === 2) steps++;
    }

    switch (direction) {
        case 0: // Move right
            if (spiralPosition.x < gridSize - layer) spiralPosition.x++;
            break;
        case 1: // Move down
            if (spiralPosition.y < gridSize - layer) spiralPosition.y++;
            break;
        case 2: // Move left
            if (spiralPosition.x > layer - 1) spiralPosition.x--;
            break;
        case 3: // Move up
            if (spiralPosition.y > layer - 1) spiralPosition.y--;
            if (spiralPosition.x === layer) layer++;
            break;
    }

    const pixelIndex = (spiralPosition.y * gridSize) + spiralPosition.x;
    if (pixels3[pixelIndex]) {
        pixels3[pixelIndex].style.backgroundColor = `hsl(${(Date.now() / 10) % 360}, 100%, 50%)`;
    }
    stepCount++;
}