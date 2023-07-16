const d = document;
const h = d.querySelector('.main');
const hs = d.querySelectorAll('h3');
const ulHtml = `
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
h.insertAdjacentHTML('beforeend',ulHtml);
const ul = d.getElementById('ul');
const lis = hs.forEach((h)=>{
  const li = `<li><a href=#${h.id}>${h.innerHTML}</a></li>`;
  ul.insertAdjacentHTML('beforeend',li);
});
const t = d.getElementById('menu-btn'),e = d.getElementById('menu-items');d.getElementById('close-btn'),t.addEventListener('click', ()=>{t.setAttribute('style', 'display:none;'),e.setAttribute('style', 'display:block;'),e.addEventListener('click', ()=>{e.setAttribute('style', 'display:none;'),t.setAttribute('style', 'display:flex;')})})