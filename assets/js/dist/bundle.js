(()=>{"use strict";const t=function(t,e){let c;return function(){c||(t.apply(this,arguments),c=setTimeout((()=>{c=void 0}),e))}},e=function(t){t.preventDefault();let e=t.target,c=parseInt(e.getAttribute("data-activate-count"));c+=1,e.setAttribute("data-activate-count",c)};document.querySelectorAll(".js-throttle-fast").forEach((c=>c.addEventListener("click",t(e,200)))),document.querySelectorAll(".js-throttle-slow").forEach((c=>c.addEventListener("click",t(e,1e3))))})();
//# sourceMappingURL=bundle.js.map