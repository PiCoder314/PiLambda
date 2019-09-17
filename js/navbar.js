document.getElementById("navBtn").addEventListener("click", pushNav);
const navLinks = document.querySelectorAll(".nav-link");
const navHeight = document.getElementsByClassName("nav-list")[0].clientHeight;
if (!window.matchMedia("(min-width: 768px)").matches) {
  navLinks.forEach(function(link) {
    link.addEventListener("click", pushNav);
  });
}
let pushed = false
function pushNav() {
  let nav = document.querySelector("#pushNav");
  if (!pushed) {
    nav.style.maxHeight = `${navHeight}px`;
    pushed = true;
  } else {
    nav.style.maxHeight = 0;
    pushed = false;
  }
}
