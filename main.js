
// Shared grid size and pixel size
const gridSize = 50;
const pixelSize = 3;

// Get canvas contexts
// Using var or window assignment to make them global for other scripts
window.ctx1 = document.getElementById('artContainer1').getContext('2d');
window.ctx2 = document.getElementById('artContainer2').getContext('2d');
window.ctx3 = document.getElementById('artContainer3').getContext('2d');
window.ctx4 = document.getElementById('artContainer4').getContext('2d');
window.ctx5 = document.getElementById('artContainer5').getContext('2d');
window.ctx6 = document.getElementById('artContainer6').getContext('2d');
window.ctx7 = document.getElementById('artContainer7').getContext('2d');
window.ctx8 = document.getElementById('artContainer8').getContext('2d');
window.ctx9 = document.getElementById('artContainer9').getContext('2d');
window.ctx10 = document.getElementById('artContainer10').getContext('2d');


// Initialize canvases with black background
const contexts = [window.ctx1, window.ctx2, window.ctx3, window.ctx4, window.ctx5, window.ctx6, window.ctx7, window.ctx8, window.ctx9, window.ctx10];

contexts.forEach(ctx => {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, gridSize * pixelSize, gridSize * pixelSize);
});
