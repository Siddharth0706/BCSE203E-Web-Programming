const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

// Night sky gradient function
function drawNightSky() {
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#1b2430"); // Dark blue at the top
  gradient.addColorStop(0.5, "#2c3e50"); // Darker blue in the middle
  gradient.addColorStop(1, "#344e8c"); // Darkest blue at the bottom
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

// Function to draw the moon with a slight glow
function drawMoon(x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, Math.PI, Math.PI * 2, false); // Draw crescent moon shape
  ctx.fillStyle = "white";
  ctx.fill();

  // Create a slight glow effect
  ctx.shadowColor = "white";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;
  ctx.beginPath();
  ctx.arc(x, y, radius + 5, Math.PI, Math.PI * 2, false);
  ctx.fillStyle = "rgba(255, 255, 255, 0.2)"; // Transparent white
  ctx.fill();
  ctx.shadowColor = "none"; // Reset shadow
}

// Function to draw a star
function drawStar(x, y, radius, points) {
  const angle = Math.PI / points;
  let innerRadius = radius * 0.33;
  let cornerX, cornerY;

  ctx.beginPath();
  ctx.moveTo(x, y);
  for (let i = 0; i < points; i++) {
    cornerX = x + radius * Math.cos(i * angle);
    cornerY = y + radius * Math.sin(i * angle);
    ctx.lineTo(cornerX, cornerY);

    innerRadius = radius * 0.33;
    cornerX = x + innerRadius * Math.cos((i + 0.5) * angle);
    cornerY = y + innerRadius * Math.sin((i + 0.5) * angle);
    ctx.lineTo(cornerX, cornerY);
  }
  ctx.closePath();
  ctx.fillStyle = "yellow";
  ctx.fill();
}

// Function to draw multiple stars
function drawStars(numStars) {
  for (let i = 0; i < numStars; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const radius = Math.random() * 3 + 1; // Random star size
    const points = Math.floor(Math.random() * 10) + 5; // Random number of points

    drawStar(x, y, radius, points);
  }
}

// Function to clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, width, height);
}

// Function to draw the scene
function drawScene() {
  clearCanvas();
  drawNightSky();
  drawStars(200); // Adjust the number of stars as desired
  drawMoon(width / 3, height / 3, 40); // Place moon in upper left
}

function animate() {
  drawScene();
  requestAnimationFrame(animate);
}
animate();
