/* FinMedia Group — shared site behaviour */
(function(){
  const hdr=document.getElementById('hdr');
  if(hdr) addEventListener('scroll',()=>hdr.classList.toggle('scrolled',scrollY>20));

  const burger=document.querySelector('.nav-burger');
  const menu=document.querySelector('.mobile-menu');
  if(burger&&menu) burger.addEventListener('click',()=>menu.classList.toggle('open'));

  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}
  }),{threshold:.1});
  document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(i%3)*0.08+'s';io.observe(el);});
})();

/* hub-and-spoke builder (homepage only; runs if #edges present) */
function buildHub(){
  const svg=document.getElementById('edges');
  if(!svg) return;
  const VB=760,C=VB/2,R=300,start=-90;
  const spokes=[...document.querySelectorAll('.node.spoke')];
  const N=spokes.length;
  spokes.forEach((node,i)=>{
    const ang=(start+i*(360/N))*Math.PI/180;
    const x=C+R*Math.cos(ang),y=C+R*Math.sin(ang);
    node.style.left=(x/VB*100)+'%';
    node.style.top=(y/VB*100)+'%';
    node.style.animationDelay=(0.9+i*0.07)+'s';
    const cx=C,cy=C,dx=x-cx,dy=y-cy,len=Math.hypot(dx,dy),ux=dx/len,uy=dy/len;
    const x1=cx+ux*58,y1=cy+uy*58,x2=x-ux*38,y2=y-uy*38;
    const segLen=Math.hypot(x2-x1,y2-y1);
    const base=document.createElementNS('http://www.w3.org/2000/svg','line');
    base.setAttribute('x1',x1);base.setAttribute('y1',y1);base.setAttribute('x2',x2);base.setAttribute('y2',y2);
    base.setAttribute('class','edge');base.style.setProperty('--len',segLen);
    base.style.animationDelay=(0.75+i*0.07)+'s';svg.appendChild(base);
    const glow=base.cloneNode();glow.setAttribute('class','edge glow');
    glow.style.setProperty('--len',segLen);glow.style.animation='none';
    glow.style.transition='opacity .6s';glow.style.opacity=0;svg.appendChild(glow);
    node.addEventListener('mouseenter',()=>glow.style.opacity=1);
    node.addEventListener('mouseleave',()=>glow.style.opacity=0);
    const pulse=document.createElementNS('http://www.w3.org/2000/svg','circle');
    pulse.setAttribute('r','2.4');pulse.setAttribute('class','pulse');svg.appendChild(pulse);
    const dur=2600+i*120,delay=1600+i*120;
    setTimeout(()=>pulse.animate([
      {transform:`translate(${x1}px,${y1}px)`,opacity:0,offset:0},
      {opacity:.9,offset:.15},{opacity:.9,offset:.85},
      {transform:`translate(${x2}px,${y2}px)`,opacity:0,offset:1}
    ],{duration:dur,iterations:Infinity,easing:'linear'}),delay);
  });
  const st=document.createElement('style');
  st.textContent='@keyframes nodepop{from{opacity:0;transform:translate(-50%,-50%) scale(.4)}to{opacity:1;transform:translate(-50%,-50%) scale(1)}} .node.center{animation:nodepop .6s cubic-bezier(.16,1.4,.3,1) .75s forwards}';
  document.head.appendChild(st);
}
buildHub();

/* count-up stats: any .stats .n with data-count animates from 0 on first view */
(function(){
  function animateCount(el){
    const raw=el.getAttribute('data-count');
    const target=parseFloat(raw);
    const suffix=el.getAttribute('data-suffix')||'';
    const prefix=el.getAttribute('data-prefix')||'';
    const dur=1100, t0=performance.now();
    function step(now){
      const p=Math.min((now-t0)/dur,1);
      const eased=1-Math.pow(1-p,3);
      let val=target*eased;
      // round: integers for whole targets
      val = (target%1===0)? Math.round(val) : Math.round(val*10)/10;
      el.textContent=prefix+val+suffix;
      if(p<1) requestAnimationFrame(step);
      else el.textContent=prefix+raw+suffix;
    }
    requestAnimationFrame(step);
  }
  const nums=[...document.querySelectorAll('.stats .n[data-count]')];
  if(!nums.length) return;
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){animateCount(e.target);io.unobserve(e.target);}
  }),{threshold:.6});
  nums.forEach(n=>{n.textContent=(n.getAttribute('data-prefix')||'')+'0'+(n.getAttribute('data-suffix')||'');io.observe(n);});
})();

/* subtle parallax drift on panel watermark monograms */
(function(){
  const marks=[...document.querySelectorAll('.panel-visual .big-mark')];
  if(!marks.length) return;
  let ticking=false;
  function upd(){
    marks.forEach(m=>{
      const r=m.getBoundingClientRect();
      const center=r.top+r.height/2;
      const off=(center-innerHeight/2)/innerHeight; // -0.5..0.5-ish
      m.style.transform=`translate(0,${(-off*36).toFixed(1)}px) rotate(${(off*4).toFixed(2)}deg)`;
    });
    ticking=false;
  }
  addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(upd);ticking=true;}},{passive:true});
  upd();
})();

/* growth curve: add .in when scrolled into view (triggers draw animation) */
(function(){
  const g=document.getElementById('growth');
  if(!g) return;
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}
  }),{threshold:.4});
  io.observe(g);
})();
