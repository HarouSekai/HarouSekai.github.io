window.addEventListener("load",function(){!function(){const t=new URL(window.location.href).searchParams;var e=t.get("tag");const n=document.getElementById("title");n.innerHTML=e}(),function(){const t=document.createElement("script");t.src="prism.js",document.head.appendChild(t)}(),function(){const t=document.getElementById("menu-btn"),e=document.getElementById("menu-items");document.getElementById("close-btn"),t.addEventListener("click",function(){this.setAttribute("style","display:none;"),e.setAttribute("style","display:block;"),e.addEventListener("click",function(){this.setAttribute("style","display:none;"),t.setAttribute("style","display:flex;")})})}()});