window.addEventListener('load',()=>{
  const d=document;
  !function(){
    const l=d.createElement('link');
    l.href='../../assets/stylesheet.css';
    l.rel='stylesheet';d.head.appendChild(l)
  }(),
  function(){
    const t=new URL(window.location.href).searchParams;
    const c=t.get('dir');
    let e=t.get('tag');
    const n=d.getElementById('title');
    d.title=n.innerHTML=e;
    const h = d.querySelector('.main');
    const b=`<div id='pan'><div><a href=../../assets/index.html?tag=技術記録 style='text-decoration:underline;color:#48f'>HOME</a>&nbsp;&gt;&nbsp;</div><div>${c}&nbsp;&gt;&nbsp;</div><div>${e}</div></div>`;
    if (e !== '技術記録') {
      h.insertAdjacentHTML('afterbegin',b)
    }
  }(),
  function(){
      const t=d.createElement('script');
      t.src='../../javascript/prism.js',
      d.head.appendChild(t)
  }(),
  function(){
    const t=d.createElement('script');
    t.src='../../javascript/menu.js',
    d.head.appendChild(t)
  }()
});