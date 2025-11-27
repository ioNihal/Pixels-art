
let imgWalker = {
    x: Math.floor(gridSize / 2),
    y: Math.floor(gridSize / 2)
};


let imgPixelData = [];


const img = new Image();
img.crossOrigin = "anonymous";
img.src = "test.png"; 

img.onload = () => {
    // Temporary canvas for downsampling image to gridSize × gridSize
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = gridSize;
    tempCanvas.height = gridSize;

    const tctx = tempCanvas.getContext("2d");
    tctx.drawImage(img, 0, 0, gridSize, gridSize);

    // Extract pixel data
    imgPixelData = [];

    for (let y = 0; y < gridSize; y++) {
        const row = [];
        for (let x = 0; x < gridSize; x++) {
            const pixel = tctx.getImageData(x, y, 1, 1).data;
            const rgba = `rgba(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, ${pixel[3] / 255})`;
            row.push(rgba);
        }
        imgPixelData.push(row);
    }
};

function imageArt() {
    if (!imgPixelData.length) return; 

    // Random walk movement
    const direction = Math.floor(Math.random() * 4);

    switch (direction) {
        case 0: if (imgWalker.y > 0) imgWalker.y--; break;
        case 1: if (imgWalker.y < gridSize - 1) imgWalker.y++; break;
        case 2: if (imgWalker.x > 0) imgWalker.x--; break;
        case 3: if (imgWalker.x < gridSize - 1) imgWalker.x++; break;
    }

    // The correct pixel color from Mona Lisa
    const color = imgPixelData[imgWalker.y][imgWalker.x];

    // Paint on canvas 1
    ctx10.fillStyle = color;
    ctx10.fillRect(
        imgWalker.x * pixelSize,
        imgWalker.y * pixelSize,
        pixelSize,
        pixelSize
    );
}
