
const pixels2 = [];

for (let i = 0; i < gridSize * gridSize; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixels2.push(pixel);
    artContainer2.appendChild(pixel);
}

function wavePattern() {
    const time = Date.now() / 200;
    for (let x = 0; x < gridSize; x++) {
        const y = Math.floor((Math.sin(x / 4 + time) + 1) * gridSize / 2);
        const pixelIndex = (y * gridSize) + x;
        if (pixels2[pixelIndex]) {
            pixels2[pixelIndex].style.backgroundColor = `hsl(${(Date.now() / 10) % 360}, 100%, 50%)`;
        }
    }
}