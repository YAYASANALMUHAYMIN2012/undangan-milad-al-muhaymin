const btn=document.getElementById('openInvitation');const cover=document.getElementById('cover');const content=document.getElementById('content');
btn.addEventListener('click',()=>{cover.style.display='none';content.classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'});});
const target=new Date('2026-09-26T07:30:00+07:00').getTime();
function tick(){const d=target-Date.now();if(d<=0)return;document.getElementById('days').textContent=String(Math.floor(d/86400000)).padStart(2,'0');document.getElementById('hours').textContent=String(Math.floor(d/3600000)%24).padStart(2,'0');document.getElementById('minutes').textContent=String(Math.floor(d/60000)%60).padStart(2,'0');document.getElementById('seconds').textContent=String(Math.floor(d/1000)%60).padStart(2,'0')}tick();setInterval(tick,1000);
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

function playMusic(){
  music.play().then(()=>{
    musicBtn.classList.add('playing');
    musicBtn.textContent='❚❚';
  }).catch(()=>{});
}
function pauseMusic(){
  music.pause();
  musicBtn.classList.remove('playing');
  musicBtn.textContent='♫';
}
musicBtn.addEventListener('click',()=>{
  if(music.paused) playMusic(); else pauseMusic();
});
btn.addEventListener('click', playMusic);
