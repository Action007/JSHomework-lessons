(()=>{"use strict";function e(e,n){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){o&&(e=o);var r=0,c=function(){};return{s:c,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,i=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return l=e.done,e},e:function(e){i=!0,a=e},f:function(){try{l||null==o.return||o.return()}finally{if(i)throw a}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var n,o,r,c,a,l,i,u,s,d,m,f,v,g,p,h,y,E,b,L,S,x,q,C,I,A,w,B,_,k,T,D,j,O,M,$,R;D=document.getElementById("timer-hours"),j=document.getElementById("timer-minutes"),O=document.getElementById("timer-seconds"),M=document.querySelectorAll(".span"),$=function(){var e,t,n,o=(e=(new Date("15 august 2021").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),n=Math.floor(e/60%60),{timeRemaining:e,hours:Math.floor(e/60/60),minutes:n,seconds:t});D.textContent=o.hours,j.textContent=o.minutes,O.textContent=o.seconds,o.timeRemaining>0?(D.textContent<10&&(D.textContent="0"+D.textContent),j.textContent<10&&(j.textContent="0"+j.textContent),O.textContent<10&&(O.textContent="0"+O.textContent)):(clearInterval(R),D.textContent="00",j.textContent="00",O.textContent="00",D.style.color="red",j.style.color="red",O.style.color="red",M.forEach((function(e){e.style.color="red"})))},R=setInterval($,1e3),$(),_=document.querySelector("body"),k=document.querySelector("menu"),T=function(){k.classList.toggle("active-menu")},_.addEventListener("click",(function(e){var t=e.target;t.classList.contains("close-btn")||t.closest("menu>ul>li")||t.closest(".menu")?T():"active-menu"===k.classList.value&&((t=t.closest("menu"))||T())})),A=document.querySelector(".popup"),w=document.querySelectorAll(".popup-btn"),B=function(e){!function t(){0!=+e.style.opacity?(e.style.opacity=+e.style.opacity-.1,setTimeout(t,16)):e.style.display="none"}()},w.forEach((function(e){e.addEventListener("click",(function(){var e;(e=A).style.display="block",screen.width>768&&(e.style.opacity="0",function t(){e.style.opacity=+e.style.opacity+.1,+e.style.opacity<1&&setTimeout(t,16)}())}))})),A.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?B(A):(t=t.closest(".popup-content"))||B(A)})),q=document.querySelector(".service-header"),C=q.querySelectorAll(".service-header-tab"),I=document.querySelectorAll(".service-tab"),q.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&C.forEach((function(e,n){e===t&&function(e){for(var t=0;t<I.length;t++)e===t?(C[t].classList.add("active"),I[t].classList.remove("d-none")):(C[t].classList.remove("active"),I[t].classList.add("d-none"))}(n)}))})),L=document.querySelector('a[href="#service-block"]'),S=document.getElementById("service-block"),x=document.querySelectorAll("menu>ul>li>a"),L.addEventListener("click",(function(e){e.preventDefault(),S.scrollIntoView({behavior:"smooth",block:"start"})})),x.forEach((function(e){e.addEventListener("click",(function(t){var n=e.getAttribute("href").substring(1),o=document.getElementById(n);t.preventDefault(),o.scrollIntoView({behavior:"smooth",block:"start"})}))})),m=document.querySelectorAll(".portfolio-item"),f=document.querySelector(".portfolio-dots"),v=document.querySelector(".portfolio-content"),g=document.querySelectorAll(".dot"),p=0,h=function(e,t,n){e[t].classList.remove(n)},y=function(e,t,n){e[t].classList.add(n)},E=function(){h(m,p,"portfolio-item-active"),h(g,p,"dot-active"),++p>=m.length&&(p=0),y(m,p,"portfolio-item-active"),y(g,p,"dot-active")},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;d=setInterval(E,e)},v.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".portfolio-btn, .dot")&&(h(m,p,"portfolio-item-active"),h(g,p,"dot-active"),t.matches("#arrow-right")?p++:t.matches("#arrow-left")?p--:t.matches(".dot")&&g.forEach((function(e,n){e===t&&(p=n)})),p>=m.length&&(p=0),p<0&&(p=m.length-1),y(m,p,"portfolio-item-active"),y(g,p,"dot-active"))})),v.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(d)})),v.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&b()})),function(){g.forEach((function(e){e.parentNode.removeChild(e)}));for(var e=0;e<m.length;e++){var t=document.createElement("li");t.classList="dot",0===e&&t.classList.add("dot-active"),f.append(t)}g=document.querySelectorAll(".dot")}(),b(1500),n=document.querySelectorAll(".command__photo"),o=document.querySelectorAll("input.calc-item"),r=document.querySelectorAll(".form-name"),c=document.querySelectorAll(".form-email"),a=document.querySelectorAll(".form-phone"),l=document.getElementById("form2-message"),i=function(e){e.target.value=e.target.value.replace(/[^а-яё -]/gi,"").replace(/^[ -]+/g,"").replace(/[ -]+$/g,"").replace(/\s+/g," ").split(" ").map((function(e){return""===e?e:e[0].toUpperCase()+e.slice(1)})).join(" ")},u=function(e){e.target.value=e.target.value.replace(/[^\d-()+]/g,"")},s=function(e){e.target.value=e.target.value.replace(/[^\А-Яа-я ]/,"").replace(/^ | {2}/,"")},n.forEach((function(e){e.addEventListener("mouseenter",(function(e){e.target.src=e.target.dataset.img})),e.addEventListener("mouseleave",(function(e){e.target.src=e.target.dataset.img.replace(/a(?=\.jpg)/,"")}))})),o.forEach((function(e){e.addEventListener("blur",(function(e){e.target.value=e.target.value.replace(/\D/g,"")}))})),r.forEach((function(e){e.addEventListener("input",s),e.addEventListener("blur",i)})),a.forEach((function(t){!function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__";function o(e){var t=e.keyCode,o=n,r=o.replace(/\D/g,""),c=this.value.replace(/\D/g,"");console.log(o);var a=0,l=o.replace(/[_\d]/g,(function(e){return a<c.length?c.charAt(a++)||r.charAt(a):e}));-1!=(a=l.indexOf("_"))&&(l=l.slice(0,a));var i=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(i=new RegExp("^"+i+"$")).test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=l),"blur"==e.type&&this.value.length<5&&(this.value="")}var r,c=e(document.querySelectorAll(t));try{for(c.s();!(r=c.n()).done;){var a=r.value;a.addEventListener("input",o),a.addEventListener("focus",o),a.addEventListener("blur",o)}}catch(e){c.e(e)}finally{c.f()}}("#".concat(t.id)),t.addEventListener("input",(function(){})),t.addEventListener("blur",u)})),l.addEventListener("input",(function(e){e.target.value=e.target.value.replace(/[^\А-Яа-я\d'";:_/.{},()?!* ]/,"")})),l.addEventListener("blur",(function(e){e.target.value=e.target.value.replace(/[^а-я\s\-]/gi,"").trim()})),c.forEach((function(e){e.addEventListener("input",(function(e){e.target.value=e.target.value.replace(/[^\w\d@._-~*'"!]/gi,"")}))})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),r=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),a=document.getElementById("total"),l=function(){var t=0,l=1,i=1,u=n.options[n.selectedIndex].value,s=+o.value;r.value>1&&(l+=(r.value-1)/10),c.value&&c.value<5?i*=2:c.value&&c.value<10&&(i*=1.5),u&&s&&(t=e*u*s*l*i),a.textContent=t};t.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&l()}))}(100),function(){var e=document.getElementById("form1"),t=document.getElementById("form2"),n=document.getElementById("form3"),o=document.getElementById("form1-email"),r=document.getElementById("form2-email"),c=document.getElementById("form3-email"),a=document.getElementById("form1-phone"),l=document.getElementById("form2-phone"),i=document.getElementById("form3-phone"),u=document.querySelectorAll("input"),s=document.createElement("div"),d=document.createElement("img"),m=/\S+@\S+\.\S{2}/,f=/.{16}/;s.style.cssText="\n    font-size: 2rem;\n    color: white;";var v=function(){s.textContent="",d.style.cssText=""},g=function(e){e.appendChild(s),s.textContent="Загрузка...",d.style.cssText="\n      margin-right: 10px;\n      width: 25px;",d.src="images/load2.gif",s.insertBefore(d,s.firstChild);var t=new FormData(e),n={};t.forEach((function(e,t){n[t]=e})),function(e){return fetch("./server.php",{method:"POST",body:JSON.stringify(e)})}(n).then((function(e){if(200!==e.status)throw new Error("status network not 200");u.forEach((function(e){e.value=""})),s.textContent="Спасибо! Скоро мы с вами свяжемся!",d.style.cssText="\n      margin-right: 10px;\n      width: 25px;",d.src="images/success.png",s.insertBefore(d,s.firstChild),setTimeout(v,5e3)})).catch((function(e){return function(e){console.error(e),s.textContent="Что-то пошло не так",d.style.cssText="\n      margin-right: 10px;\n      width: 25px;",d.src="images/error.png",s.insertBefore(d,s.firstChild),setTimeout(v,5e3)}(e)}))};e.addEventListener("submit",(function(t){console.log(a.value),t.preventDefault(),m.test(o.value)?f.test(a.value)?g(e):alert("введите валидный номер телефона"):alert("введите валидный e-mail")})),t.addEventListener("submit",(function(e){e.preventDefault(),m.test(r.value)?f.test(l.value)?g(t):alert("введите валидный номер телефона"):alert("введите валидный e-mail")})),n.addEventListener("submit",(function(e){e.preventDefault(),m.test(c.value)?f.test(i.value)?g(n):alert("введите валидный номер телефона"):alert("введите валидный e-mail")}))}()})();