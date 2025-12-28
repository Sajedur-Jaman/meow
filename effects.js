
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function startAnimation() {
  const msg = document.getElementById("messageBox");
  msg.style.display = "block";

  // create particles
  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: Math.random() * -6 - 2,
      life: 100,
      color: `hsl(${Math.random()*60 + 40}, 100%, 50%)`
    });
  }
}

// particle animation
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 3, 0, Math.PI*2);
    ctx.fill();

    p.x += p.vx;
    p.y += p.vy;
    p.life--;
  });
  particles = particles.filter(p => p.life > 0);
  requestAnimationFrame(animate);
}

animate();
