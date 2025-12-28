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
      ctx.arc(p.x,p.y,4,0,Math.PI*2);
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

// Use 15000ms for 15 second duration
