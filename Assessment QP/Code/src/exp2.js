const canvas = document.getElementById("canvas2");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

// Day sky gradient function
function drawDaySky() {
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#c3e8f3"); // Light blue at the top
  gradient.addColorStop(0.5, "#d0e6f0"); // Lighter blue in the middle
  gradient.addColorStop(1, "#e0effe"); // Lightest blue at the bottom
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

// Function to draw the sun
function drawSun(x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
}

// Function to draw a cloud (optional)
function drawCloud(x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(
    x + size,
    y - size,
    x + size * 2,
    y,
    x + size * 2.5,
    y + size
  );
  ctx.bezierCurveTo(
    x + size * 3,
    y + size * 2,
    x + size * 2,
    y + size * 3,
    x + size,
    y + size * 2
  );
  ctx.bezierCurveTo(
    x,
    y + size,
    x - size,
    y + size * 2,
    x - size * 1.5,
    y + size
  );
  ctx.closePath();
  ctx.fillStyle = "#fff"; // White for clouds
  ctx.fill();
}

// Function to draw multiple clouds (optional)
function drawClouds(numClouds) {
  for (let i = 0; i < numClouds; i++) {
    const x = Math.random() * width;
    const y = (Math.random() * height) / 3; // Limit clouds to top third
    const size = Math.random() * 30 + 10; // Random cloud size

    drawCloud(x, y, size);
  }
}

// Function to clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, width, height);
}

// Function to draw the scene
function drawScene() {
  clearCanvas();
  drawDaySky();
  drawSun(width / 3, height / 3, 40); // Place sun in upper left
  drawClouds(3); // Adjust the number of clouds (optional)
}

function animate() {
  drawScene();
  requestAnimationFrame(animate);
}
animate();
