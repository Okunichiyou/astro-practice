const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('expanded');
  });
} else {
  console.error("Error: .hamburger or .nav-links not found.");
}