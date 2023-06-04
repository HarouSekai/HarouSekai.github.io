const importModules = function() {
  const prism = document.createElement("script");
  prism.src = "../javascript/prism.js";
  document.head.appendChild(prism);
}

const menuBtn = function() {
  const menuBtn = document.getElementById("menu-btn");
  const menuItems = document.getElementById("menu-items");
  const closeBtn = document.getElementById("close-btn");
  menuBtn.addEventListener("click", function() {
    this.setAttribute("style", "display:none;");
    menuItems.setAttribute("style", "display:block;");
    menuItems.addEventListener("click", function() {
      this.setAttribute("style", "display:none;");
      menuBtn.setAttribute("style", "display:flex;");
    });
  });
}

function main() {
  importModules();
  menuBtn();
  const url = new URL(window.location.href);
  const params = url.searchParams;
  const tag = params.get("tag");
  const title = document.getElementById("title");
  title.innerHTML = tag;
};

window.addEventListener('load', main);