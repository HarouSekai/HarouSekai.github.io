window.addEventListener('load',()=>{const d=document;!function(){const l=d.createElement('link');l.href='../assets/stylesheet.css';l.rel='stylesheet';d.head.appendChild(l)}(),function(){const t=new URL(window.location.href).searchParams;var e=t.get('tag');const n=d.getElementById('title');d.title=n.innerHTML=e}(),function(){const t=d.createElement('script');t.src='../javascript/prism.js',d.head.appendChild(t)}(),function(){const t=d.getElementById('menu-btn'),e=d.getElementById('menu-items');d.getElementById('close-btn'),t.addEventListener('click',()=>{t.setAttribute('style','display:none;'),e.setAttribute('style','display:block;'),e.addEventListener('click',()=>{e.setAttribute('style','display:none;'),t.setAttribute('style','display:flex;')})})}()});