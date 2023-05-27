window.onload = function() {
  const url = new URL(window.location.href);
  const params = url.searchParams;
  const tag = params.get("tag");
  const title = document.getElementById("title");
  title.innerHTML = tag;
}