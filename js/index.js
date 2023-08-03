const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const links = document.getElementsByClassName("nav-link");

Array.from(links).forEach((link) => {
  link.addEventListener("click", () => {
    const navLinks = document.getElementsByClassName("nav-links")[0];
    navLinks.classList.toggle("toggle-view");
  });
});

toggleBtn.addEventListener("click", () => {
  const navLinks = document.getElementsByClassName("nav-links")[0];
  navLinks.classList.toggle("toggle-view");
});

let image = document.querySelector(".right-content .image");
let home = document.querySelector("#home");
home.addEventListener("mousemove", function (e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  image.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
