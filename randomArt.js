
const pixels1 = [];
let ballPosition1 = { x: Math.floor(gridSize / 2), y: Math.floor(gridSize / 2) };

for (let i = 0; i < gridSize * gridSize; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixels1.push(pixel);
    artContainer1.appendChild(pixel);
}

function randomArt() {
    const direction = Math.floor(Math.random() * 4);
    switch (direction) {
        case 0:
            if (ballPosition1.y > 0) ballPosition1.y -= 1;
            break;
        case 1:
            if (ballPosition1.y < gridSize - 1) ballPosition1.y += 1;
            break;
        case 2:
            if (ballPosition1.x > 0) ballPosition1.x -= 1;
            break;
        case 3:
            if (ballPosition1.x < gridSize - 1) ballPosition1.x += 1;
            break;
    }
    const pixelIndex = (ballPosition1.y * gridSize) + ballPosition1.x;
    if (pixels1[pixelIndex]) {
        pixels1[pixelIndex].style.backgroundColor = `hsl(${(Date.now() / 10) % 360}, 100%, 50%)`;
    }
}