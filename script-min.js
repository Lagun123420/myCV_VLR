document.addEventListener("DOMContentLoaded",(function(){const e={1:document.getElementById("#1"),2:document.getElementById("#2"),3:document.getElementById("#3"),4:document.getElementById("#4"),5:document.getElementById("#5")},t=document.querySelector(".main .main-wrapper"),n={1:document.getElementById("link1"),2:document.getElementById("link2"),3:document.getElementById("link3"),4:document.getElementById("link4"),5:document.getElementById("link5")},c={1:document.getElementById("mob-link1"),2:document.getElementById("mob-link2"),3:document.getElementById("mob-link3"),4:document.getElementById("mob-link4"),5:document.getElementById("mob-link5")},o=n=>{t.classList.remove("active"),t.offsetWidth,Object.values(e).forEach(((e,c)=>{e.classList.remove("active"),c+1===n&&(e.classList.add("active"),t.classList.add("active"))}))};Object.values(n).forEach(((e,t)=>{e.addEventListener("click",(()=>o(t+1)))})),Object.values(c).forEach(((e,t)=>{e.addEventListener("click",(()=>{o(t+1),l()}))})),document.querySelectorAll(".button-toogle").forEach((e=>{e.addEventListener("click",(function(e){const t=e.currentTarget.parentElement,n=t.querySelector(".accordion-text");n&&n.classList.toggle("active"),t.classList.toggle("active");const c=t.querySelector(".button-toogle");c&&c.classList.toggle("active")}))})),document.querySelectorAll(".accordion-title").forEach((e=>{e.addEventListener("click",(function(e){const t=e.currentTarget.parentElement,n=t.querySelector(".accordion-text");n&&n.classList.toggle("active");const c=t.querySelector(".button-toogle");c&&c.classList.toggle("active"),t.classList.toggle("active")}))}));const l=()=>{document.getElementById("mobile-menu").classList.remove("active")};document.getElementById("button-menu").addEventListener("click",(()=>{document.getElementById("mobile-menu").classList.add("active")})),document.getElementById("close-mobile-menu").addEventListener("click",(()=>{l()}))}));