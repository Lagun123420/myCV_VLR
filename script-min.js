document.addEventListener("DOMContentLoaded",(function(){const e={1:document.getElementById("#1"),2:document.getElementById("#2"),3:document.getElementById("#3"),4:document.getElementById("#4"),5:document.getElementById("#5")},t=document.querySelector(".main .main-wrapper"),c=document.querySelector(".footer .wrapper"),n={1:document.getElementById("link1"),2:document.getElementById("link2"),3:document.getElementById("link3"),4:document.getElementById("link4"),5:document.getElementById("link5")},o={1:document.getElementById("mob-link1"),2:document.getElementById("mob-link2"),3:document.getElementById("mob-link3"),4:document.getElementById("mob-link4"),5:document.getElementById("mob-link5")},l={1:document.getElementById("homePageActive")},d=n=>{const o=document.querySelector(".main-wrapper");o.classList.add("hide"),c.classList.add("hide"),setTimeout((()=>{o.classList.remove("hide"),t.classList.remove("active"),c.classList.remove("active"),c.classList.remove("hide"),t.offsetWidth,Object.values(e).forEach(((e,o)=>{e.classList.remove("active"),o+1===n&&(e.classList.add("active"),t.classList.add("active"),c.classList.add("active"))}))}),100)};Object.values(n).forEach(((e,t)=>{e.addEventListener("click",(()=>d(t+1)))})),Object.values(o).forEach(((e,t)=>{e.addEventListener("click",(()=>{d(t+1),s()}))})),Object.values(l).forEach(((e,t)=>{e.addEventListener("click",(()=>{d(t+1),s()}))})),document.querySelectorAll(".button-toogle").forEach((e=>{e.addEventListener("click",(function(e){const t=e.currentTarget.parentElement,c=t.querySelector(".accordion-text");c&&c.classList.toggle("active"),t.classList.toggle("active");const n=t.querySelector(".button-toogle");n&&n.classList.toggle("active")}))})),document.querySelectorAll(".accordion-title").forEach((e=>{e.addEventListener("click",(function(e){const t=e.currentTarget.parentElement,c=t.querySelector(".accordion-text");c&&c.classList.toggle("active");const n=t.querySelector(".button-toogle");n&&n.classList.toggle("active"),t.classList.toggle("active")}))}));const s=()=>{document.querySelector(".wrapper-menu").classList.add("hide"),setTimeout((()=>{document.querySelector("html").classList.remove("fixed"),document.getElementById("mobile-menu").classList.remove("active"),document.querySelector(".wrapper-menu").classList.remove("active"),document.querySelector(".wrapper-menu").classList.remove("hide")}),100)};var i;document.getElementById("button-menu").addEventListener("click",(()=>{document.querySelector("html").classList.add("fixed"),document.getElementById("mobile-menu").classList.add("active"),document.querySelector(".wrapper-menu").classList.add("active")})),document.getElementById("close-mobile-menu").addEventListener("click",(()=>{s()})),document.getElementById("mobile-menu").addEventListener("click",(e=>{e.currentTarget===e.target&&s()})),i=(new Date).getFullYear()+"  ",document.getElementById("date").innerHTML=i}));