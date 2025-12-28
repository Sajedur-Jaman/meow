const startBtn = document.getElementById("startBtn");
const firstMsg = document.getElementById("firstMessage");
const goldenText = document.getElementById("goldenText");
const ibtidaMessage = document.getElementById("ibtidaMessage");

startBtn.addEventListener("click", () => {
  firstMsg.classList.remove("hidden");
  // scroll detect for golden particle
  window.addEventListener("scroll", showGoldenParticleOnce);
});

let goldenShown = false;

function showGoldenParticleOnce() {
  if (goldenShown) return;
  goldenShown = true;
  goldenText.classList.remove("hidden");
  startGoldenParticles(5000); // 5 second particle
  // detect further scroll for ibtida
  window.addEventListener("scroll", showIbtidaOnce);
}

let ibtidaShown = false;

function showIbtidaOnce() {
  if (ibtidaShown) return;
  ibtidaShown = true;
  ibtidaMessage.classList.remove("hidden");
}

// Particle setup
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function startGoldenParticles(duration) {
  let particles = [];
  for(let i=0;i<150;i++){
    particles.push({
      x: Math.random()*canvas.width,
      y: canvas.height,
      vx: (Math.random()-0.5)*2,
      vy: Math.random()*-6-2,
      life: 100,
      color: `hsl(${Math.random()*60 + 40},100%,50%)`
    });
  }

  const startTime = Date.now();

  function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x,p.y,3,0,Math.PI*2);
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
    });
    particles = particles.filter(p=>p.life>0);

    if(Date.now()-startTime < duration){
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0,0,canvas.width,canvas.height);
    }
  }

  animate();
}
