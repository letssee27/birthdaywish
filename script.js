const loader=document.getElementById("loader");
window.addEventListener("load",()=>setTimeout(()=>loader.style.opacity="0",500));
setTimeout(()=>loader.remove(),1300);

const intro=document.getElementById("introScreen"), envelope=document.getElementById("envelope");
const music=document.getElementById("bgMusic"), musicBtn=document.getElementById("musicBtn");
let started=false;
envelope.addEventListener("click",()=>{
  if(started)return;
  started=true; envelope.classList.add("open");
  setTimeout(()=>{intro.classList.add("hide");document.getElementById("top").scrollIntoView({behavior:"smooth"});tryMusic();},1100);
});
function tryMusic(){music.play().then(()=>musicBtn.innerHTML="♫ <span>On</span>").catch(()=>musicBtn.innerHTML="♫ <span>Music</span>")}
musicBtn.addEventListener("click",()=>{if(music.paused){music.play();musicBtn.innerHTML="♫ <span>On</span>"}else{music.pause();musicBtn.innerHTML="♫ <span>Music</span>"}});

document.getElementById("startBtn").addEventListener("click",()=>document.getElementById("story").scrollIntoView({behavior:"smooth"}));

const msg=`Happy Birthday, Kanupriya! 🎂🥳

Wishing the busiest (and sleepiest 😴) future doctor a birthday as amazing as you are! Here's to another year of acing exams, saving lives one day at a time, and still making time for your two true loves — sleep and cats 🐱💤

May this year bring you less stress, more naps, extra cuddles from cats, and every success you're working so hard for. The world needs more doctors like you — kind, brilliant, and secretly powered by catnaps ✨

Happy Birthday, future Dr. Kanupriya! Can't wait to watch you shine 🩺💫.`;
let typedDone=false;
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");if(e.target.id==="letter"&&!typedDone){typedDone=true;typeText()}}}),{threshold:.18});
document.querySelectorAll("section").forEach(s=>observer.observe(s));
function typeText(){const el=document.getElementById("typed");let i=0;const timer=setInterval(()=>{el.textContent+=msg[i++];if(i>=msg.length)clearInterval(timer)},12)}

document.querySelectorAll(".post img").forEach(img=>img.addEventListener("click",()=>{document.getElementById("lightboxImg").src=img.src;document.getElementById("lightbox").classList.add("open")}));
document.getElementById("closeLightbox").addEventListener("click",()=>document.getElementById("lightbox").classList.remove("open"));
document.getElementById("lightbox").addEventListener("click",e=>{if(e.target.id==="lightbox")e.currentTarget.classList.remove("open")});

const candles=[...document.querySelectorAll(".candle")], status=document.getElementById("cakeStatus");
candles.forEach(c=>c.addEventListener("click",()=>{c.classList.add("off");c.textContent="♡";let left=candles.filter(x=>!x.classList.contains("off")).length;if(left)status.textContent=`${left} little flame${left>1?"s":""} left... make it a good one ✨`;else{status.textContent="Wish released into the universe. 💗";confetti()}}));

function confetti(){for(let i=0;i<65;i++){let x=document.createElement("i");x.textContent=["♥","✦","✧","♡"][Math.floor(Math.random()*4)];x.style.cssText=`position:fixed;left:${45+Math.random()*10}vw;top:45vh;z-index:800;color:${Math.random()>.5?"#f66d9b":"#f4b44f"};font-size:${12+Math.random()*18}px;pointer-events:none`;document.body.appendChild(x);x.animate([{transform:"translate(0,0) scale(1)",opacity:1},{transform:`translate(${(Math.random()-.5)*800}px,${250+Math.random()*600}px) rotate(${Math.random()*720}deg)`,opacity:0}],{duration:1200+Math.random()*1300,easing:"cubic-bezier(.2,.8,.3,1)"}).onfinish=()=>x.remove()}}
function particle(){let p=document.createElement("span");p.textContent=["♡","♥","✦","✧"][Math.floor(Math.random()*4)];p.style.cssText=`position:fixed;left:${Math.random()*100}vw;bottom:-20px;color:#f28caf;opacity:.45;font-size:${10+Math.random()*16}px;z-index:1;pointer-events:none`;document.getElementById("particles").appendChild(p);p.animate([{transform:"translateY(0)",opacity:.5},{transform:`translateY(-110vh) rotate(${Math.random()*180}deg)`,opacity:0}],{duration:7000+Math.random()*5000}).onfinish=()=>p.remove()}
setInterval(particle,650);

window.addEventListener("scroll",()=>{let h=document.documentElement.scrollHeight-innerHeight;document.getElementById("progressBar").style.width=(scrollY/h*100)+"%"});
document.getElementById("againBtn").addEventListener("click",()=>{location.hash="";location.reload()});

