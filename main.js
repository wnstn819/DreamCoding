"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar_menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  } else {
    scrollIntoView(link);
  }
});

// Handle Contact Me button
const contactBtn = document.querySelector(".home_contact");
contactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// Scrolling fade out

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

const about = document.querySelector(".about__container");
const aboutHeight = about.getBoundingClientRect().height;

const skill = document.querySelector(".skill__container");
const skillHeight = skill.getBoundingClientRect().height;

const work = document.querySelector(".work__container");
const workHeight = work.getBoundingClientRect().height;

const testimonials = document.querySelector(".testimonials__container");
const testimonialsHeight = testimonials.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
  about.style.opacity = 1.4 - window.scrollY / (homeHeight + aboutHeight);
  skill.style.opacity =
    1.5 - window.scrollY / (homeHeight + aboutHeight + skillHeight);
  work.style.opacity =
    1.6 -
    window.scrollY / (homeHeight + aboutHeight + skillHeight + workHeight);
  console.log(workHeight);

  testimonials.style.opacity =
    1.3 -
    window.scrollY / (homeHeight + aboutHeight + skillHeight + workHeight) +
    testimonialsHeight;
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
