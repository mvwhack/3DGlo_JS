(()=>{"use strict";(t=>{const e=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),i=()=>{let t=(new Date("22 june 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}},m=()=>{let t=i();e.textContent=t.hours.toString().padStart(2,"0"),n.textContent=t.minutes.toString().padStart(2,"0"),o.textContent=t.seconds.toString().padStart(2,"0")};(()=>{let t=i();console.log(t.timeRemaining),t.timeRemaining>0&&setInterval(m,1e3)})()})()})();