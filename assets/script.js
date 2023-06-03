function main() {
  const prism = document.createElement("script");
  prism.src = "../javascript/prism.js";
  document.head.appendChild(prism);

  const url = new URL(window.location.href);
  const params = url.searchParams;
  const tag = params.get("tag");
  const title = document.getElementById("title");
  title.innerHTML = tag;
};

window.addEventListener('load', main);