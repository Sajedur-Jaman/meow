const startBtn = document.getElementById("startBtn");
const firstMsg = document.getElementById("firstMessage");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const ibtidaPage = document.getElementById("ibtidaPage");
const sadafPage = document.getElementById("sadafPage");
const sadafBtn = document.getElementById("sadafBtn");
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

startBtn.addEventListener("click", () => {
  firstMsg.classList.remove("hidden");
  setTimeout(() => {
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
    startGoldenParticles(15000);
    // auto go to ibtidaPage after particles
    setTimeout(() => {
      page2.classList.add("hidden");
      ibtidaPage.classList.remove("hidden");
    }, 15000);
  }, 1000);
});

sadafBtn.addEventListener("click", () => {
  ibtidaPage.classList.add("hidden");
  sadafPage.classList.remove("hidden");
});

// Golden particle animation
function startGoldenParticles(duration){
  let particles = [];
  for(let i=0;i<200;i++){
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
