// Typed.js
var typed = new Typed('#typed',{
  strings:["Digital Marketer","SEO Specialist","Full Stack Developer","Graphic Designer","Voice Actor","Travel Agent"],
  typeSpeed:80,
  backSpeed:50,
  loop:true
});

// Skills Fill
window.addEventListener('scroll',()=>{
  const skills=document.querySelectorAll('.skill-fill');
  skills.forEach(skill=>{
    const width=skill.getAttribute('data-width');
    const rect=skill.getBoundingClientRect();
    if(rect.top<window.innerHeight) skill.style.width=width;
  });
});

// AOS
AOS.init({duration:1000,offset:100});

// Hamburger Menu
const hamburger=document.querySelector('.hamburger');
const navLinks=document.querySelector('.nav-links');
hamburger.addEventListener('click',()=>{navLinks.classList.toggle('open');});

// Custom Cursor
const cursor=document.createElement('div');
cursor.classList.add('cursor');document.body.appendChild(cursor);
const cursorOutline=document.createElement('div');cursorOutline.classList.add('cursor-outline');document.body.appendChild(cursorOutline);
document.addEventListener('mousemove',e=>{
  cursor.style.transform=`translate(${e.clientX-7.5}px,${e.clientY-7.5}px)`;
  cursorOutline.style.transform=`translate(${e.clientX-20}px,${e.clientY-20}px)`;
});

// tsParticles Background
tsParticles.load("tsparticles",{
  fpsLimit:60,
  interactivity:{events:{onHover:{enable:true,mode:"repulse"}}},
  particles:{
    color:{value:["#0ff","#f0f","#ff0","#f0f"]},
    links:{enable:true,color:"#0ff",distance:150,opacity:0.4,width:1},
    collisions:{enable:true},
    move:{enable:true,direction:"none",random:true,speed:1,straight:false},
    number:{value:80,density:{enable:true,value_area:800}},
    opacity:{value:0.7},
    shape:{type:"circle"},
    size:{value:{min:2,max:5}}
  },
  detectRetina:true
});

// Project Filter
const filterBtns=document.querySelectorAll('.filter-btn');
const projectCards=document.querySelectorAll('.project-grid .card');
filterBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    filterBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter=btn.getAttribute('data-filter');
    projectCards.forEach(card=>{
      if(filter==='all'||card.classList.contains(filter)) card.style.display='block';
      else card.style.display='none';
    });
  });
});
