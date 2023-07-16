const d = document;
const h = d.querySelector('.main');
const h2 = d.querySelectorAll('h2');
const h3 = d.querySelectorAll('h3');
let hs = [];
h2.forEach((h)=>{
  hs.push(h);
});
h3.forEach((h)=>{
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
const lis = hs.forEach((h)=>{
  const li = `<li><a href=#${h.id}>${h.innerHTML}</a></li>`;
  ul.insertAdjacentHTML('beforeend',li);
});
const t = d.getElementById('menu-btn'),e = d.getElementById('menu-items');d.getElementById('close-btn'),t.addEventListener('click', ()=>{t.setAttribute('style', 'display:none;'),e.setAttribute('style', 'display:block;'),e.addEventListener('click', ()=>{e.setAttribute('style', 'display:none;'),t.setAttribute('style', 'display:flex;')})})