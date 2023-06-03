window.addEventListener("load", () => {
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
});