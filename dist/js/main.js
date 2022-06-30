(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),c=()=>{let e=(new Date("30 june 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}};c().timeRemaining>0&&setInterval((()=>{let e=c();t.textContent=e.hours.toString().padStart(2,"0"),o.textContent=e.minutes.toString().padStart(2,"0"),n.textContent=e.seconds.toString().padStart(2,"0")}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",o),t.addEventListener("click",(e=>{if(e.target.closest("a")&&""===e.target.closest("a").className){console.dir(),e.preventDefault();const t=e.target.closest("a").hash,n=document.querySelector(t).getBoundingClientRect().top;window.scrollBy({top:n,behavior:"smooth"}),o()}else e.target.closest(".close-btn")&&o()}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=e.querySelector(".popup-content");let n,c;e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none",o.style.top="")}));const r=()=>{n+=3,c=requestAnimationFrame(r),n<25?o.style.top=`${n}%`:cancelAnimationFrame(c)};t.forEach((t=>{t.addEventListener("click",(()=>{screen.width<768?e.style.display="block":(e.style.display="block",o.style.top="-100%",n=-100,r())}))}))})(),(()=>{const e=document.querySelector(".calc-block").querySelectorAll("input"),t=document.querySelectorAll(".form-email"),o=document.querySelectorAll(".form-phone"),n=document.querySelectorAll('[name="user_name"]'),c=document.querySelectorAll('[name="user_message"]');e.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/\D/g,"")}))})),t.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\@\-\.\!\~\*\'\w]+/gi,"")}))})),o.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\(\)\-\d]+/gi,"")}))})),n.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^А-Яа-я\s\-]+/gi,"")}))})),c.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^А-Яа-я\s\-]+/gi,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelectorAll("a")[0],t=document.getElementById("service-block");e.addEventListener("click",(e=>{const o=t.getBoundingClientRect().top;e.preventDefault(),window.scrollBy({top:o,behavior:"smooth"})}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let n,c=0;const r=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},a=()=>{const e=document.querySelectorAll(".dot");r(t,c,"portfolio-item-active"),r(e,c,"dot-active"),c++,c>=t.length&&(c=0),l(t,c,"portfolio-item-active"),l(e,c,"dot-active")},s=(e=1500)=>{n=setInterval(a,e)};e.addEventListener("click",(e=>{const o=document.querySelectorAll(".dot");e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(r(t,c,"portfolio-item-active"),r(o,c,"dot-active"),e.target.matches("#arrow-right")?c++:e.target.matches("#arrow-left")?c--:e.target.classList.contains("dot")&&o.forEach(((t,o)=>{e.target===t&&(c=o)})),c>=t.length&&(c=0),c<0&&(c=t.length-1),l(t,c,"portfolio-item-active"),l(o,c,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&s(2e3)}),!0),(()=>{for(let e=0;e<t.length;e++){let e=document.createElement("li");e.classList.add("dot"),o.append(e)}})(),s(2e3)})()})();