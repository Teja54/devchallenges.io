const logo = document.querySelector(".logo");
const nav = document.querySelector(".nav__wrapper");
const menuBtn = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav__links a");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  nav.classList.toggle("open");
  logo.classList.toggle("open");
});

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    logo.classList.remove("open");
    menuBtn.classList.remove("open");
  })
);

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px",
};

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

// Intersection observer
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
    }
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
