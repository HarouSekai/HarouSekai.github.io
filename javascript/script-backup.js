window.addEventListener('DOMContentLoaded',()=>{
  const d=document;

  //prism.jsの読み込み
  !function(){
      const t=d.createElement('script');
      t.src='../../javascript/prism.js',
      d.head.appendChild(t)
  }(),

  //CSS読み込み
  function(){
    const l=d.createElement('link');
    l.href='../../assets/stylesheet.css';
    l.rel='stylesheet';d.head.appendChild(l)
  }(),

  function(){
    //header .contentにidを付与
    const h=d.querySelector('header .content');
    h.setAttribute('id','header-content');

    //title, headerにページ名を表示
    const m=d.querySelector('.main .content');
    const t=new URL(window.location.href).searchParams;
    const c=t.get('dir');
    let e=t.get('tag');
    const n=d.getElementById('title');
    d.title=n.innerHTML=e;
    let b=`<div id='pan'><div><a href=../index.html?tag=技術記録 style='text-decoration:underline;color:#48f'>HOME</a>&nbsp;&gt;&nbsp;</div><div>${c}&nbsp;&gt;&nbsp;</div><div>${e}</div></div>`;
    if (c==='develop') {
      b=`<div id='pan'><div><a href=../articles/index.html?tag=技術記録 style='text-decoration:underline;color:#48f'>HOME</a>&nbsp;&gt;&nbsp;</div><div>${c}&nbsp;&gt;&nbsp;</div><div>${e}</div></div>`;
    }
    if (e !== '技術記録') {
      m.insertAdjacentHTML('afterbegin',b);
      if (c !== 'develop') {
        const m=d.querySelector('.menu a');
        m.setAttribute('href',`../index.html?tag=技術記録#${c.replaceAll(' ','_')}`);
      }
    }
  }()
});
window.addEventListener('load',()=>{
  const d=document;

  //サイドバー（メニューボタン）の作成・操作
  !function(){
    const h = d.querySelector('.main');
    const h2 = d.querySelectorAll('h2');
    const h3 = d.querySelectorAll('h3');
    const hb = d.querySelectorAll('.h-block');
    let hs = [];
    h2.forEach((h)=>{
      hs.push(h);
    });
    h3.forEach((h)=>{
      hs.push(h);
    });
    hb.forEach((h)=>{
      hs.push(h);
    });
    const menu = `
      <div id="menu">
      <label id="menu-btn">
          <div></div>
          <div></div>
          <div></div>
      </label>
      <div id="menu-items">
          <div id="close-btn">X</div>
          <ul id=ul>
          </ul>
      </div>
      </div>
      `;
    h.insertAdjacentHTML('beforeend',menu);
    const ul = d.getElementById('ul');
    hs.forEach((h)=>{
      const li = `<li><a href=#${h.id}>${h.innerHTML}</a></li>`;
      ul.insertAdjacentHTML('beforeend',li);
    });
    const t = d.getElementById('menu-btn'),e = d.getElementById('menu-items');d.getElementById('close-btn'),t.addEventListener('click', ()=>{t.setAttribute('style', 'display:none;'),e.setAttribute('style', 'display:block;'),e.addEventListener('click', ()=>{e.setAttribute('style', 'display:none;'),t.setAttribute('style', 'display:flex;')})})
  }(),

  //サイドバー（メニューボタン）の該当の文字を着色
  function(){
    const us=d.querySelectorAll('#ul a');
    us.forEach((u,i)=>{
      u.addEventListener('click',()=>{
        us.forEach((v,j)=>{
          if (i==j) {
            v.setAttribute('class','blue');
          } else {
            v.removeAttribute('class','blue');
          }
        });
      });
    });
    us.forEach((u)=>{
      if (location.href.match(/#.+/)[0]===u.getAttribute('href')) {
        u.setAttribute('class','blue');
      } else {
        u.removeAttribute('class','blue');
      }
    });
  }()
});