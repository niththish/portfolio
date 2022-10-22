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
