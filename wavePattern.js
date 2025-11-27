
function wavePattern() {
    const time = Date.now() / 200;
    for (let x = 0; x < gridSize; x++) {
        const y = Math.floor((Math.sin(x / 4 + time) + 1) * gridSize / 2);

        // Ensure y is within bounds
        if (y >= 0 && y < gridSize) {
             ctx2.fillStyle = `hsl(${(Date.now() / 10) % 360}, 100%, 50%)`;
             ctx2.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
        }
    }
}
