import"./modulepreload-polyfill-B5Qt9EMX.js";const r=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?t.target.classList.add("show"):t.target.classList.remove("show")})}),i=document.querySelectorAll(".hidden");i.forEach(e=>r.observe(e));window.addEventListener("load",()=>{document.querySelector(".navBar").classList.add("showUp")});const a=document.getElementById("overview");a.addEventListener("click",()=>{const t=document.getElementById("overviewSection").getBoundingClientRect().top+window.scrollY,n=document.querySelector(".navBar").offsetHeight*1.2;window.scrollTo({top:t-n,behavior:"smooth"})});const g=document.getElementById("development");g.addEventListener("click",()=>{const t=document.getElementById("developmentSection").getBoundingClientRect().top+window.scrollY,n=document.querySelector(".navBar").offsetHeight*1.2;window.scrollTo({top:t-n,behavior:"smooth"})});const m=document.getElementById("game");m.addEventListener("click",e=>{window.scrollTo({top:0,behavior:"smooth"})});const c=document.getElementById("lightModeButton"),s=c.querySelector(".moon"),l=c.querySelector(".sunny");c.addEventListener("click",()=>{let e=!JSON.parse(localStorage.getItem("lightModeOn"));d(e),localStorage.setItem("lightModeOn",String(e))});d(JSON.parse(localStorage.getItem("lightModeOn")));function d(e){console.log(e);const t=document.querySelectorAll(".hidden");e?(s.style.display="none",l.style.display="block",document.body.style.backgroundColor="white",t.forEach(o=>{o.style.color="black"})):(l.style.display="none",s.style.display="block",document.body.style.backgroundColor="#333",t.forEach(o=>{o.style.color="white"}))}
