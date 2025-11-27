
let ballPosition1 = { x: Math.floor(gridSize / 2), y: Math.floor(gridSize / 2) };

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

    ctx1.fillStyle = `hsl(${(Date.now() / 10) % 360}, 100%, 50%)`;
    ctx1.fillRect(ballPosition1.x * pixelSize, ballPosition1.y * pixelSize, pixelSize, pixelSize);
}
