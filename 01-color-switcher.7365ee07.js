const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");let n=null;e.disabled=!0,t.addEventListener("click",(function(){e.disabled=!1,t.disabled=!0,n=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.7365ee07.js.map
