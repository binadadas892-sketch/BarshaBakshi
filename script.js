const nav=document.querySelector('.nav'), toggle=document.querySelector('.nav-toggle');
toggle?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i%5,4)*70}ms`;observer.observe(el)});

const dot=document.querySelector('.cursor-dot'), ring=document.querySelector('.cursor-ring');
window.addEventListener('pointermove',e=>{
  if(!dot||!ring)return;
  dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px';
  ring.animate({left:e.clientX+'px',top:e.clientY+'px'},{duration:420,fill:'forwards'});
});
document.querySelectorAll('.magnetic').forEach(el=>{
  el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.08}px,${(e.clientY-r.top-r.height/2)*.08}px)`});
  el.addEventListener('pointerleave',()=>el.style.transform='');
});
