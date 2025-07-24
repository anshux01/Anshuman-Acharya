/* Burger */
const menu = document.querySelector("#menu-icon"),
  nav = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  nav.classList.toggle("active");
};

/* Active nav on scroll */
const sections = document.querySelectorAll("section"),
  links = document.querySelectorAll(".navbar a");
window.addEventListener("scroll", () => {
  const top = scrollY;
  sections.forEach((sec) => {
    const off = sec.offsetTop - 150,
      h = sec.offsetHeight,
      id = sec.getAttribute("id");
    if (top >= off && top < off + h) {
      links.forEach((l) => l.classList.remove("active"));
      document
        .querySelector(".navbar a[href*=" + id + "]")
        .classList.add("active");
    }
  });
  menu.classList.remove("bx-x");
  nav.classList.remove("active");
});

/* ScrollReveal */
ScrollReveal({ distance: "60px", duration: 1200, delay: 150, reset: true });
ScrollReveal().reveal(".home-col,.heading", { origin: "top" });
ScrollReveal().reveal(".img-wrap img,.project-card,.contact-form", {
  origin: "bottom",
});

/* Typed */
new Typed(".typed-role", {
  strings: [
    "Full-Stack Developer",
    "Data Scientist in training",
    "Automation Enthusiast",
  ],
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});
