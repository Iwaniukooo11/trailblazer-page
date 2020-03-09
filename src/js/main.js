const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");
const navCloser = document.querySelector(".closer");
const rocket = document.querySelector(".rocket");
const time = 800;
const burger = document.querySelector(".burger");
const lastLine = document.querySelector(".burger__line--last");
const allLines = document.querySelectorAll(".burger__line");

import VanillaScrollspy from "vanillajs-scrollspy";

const homePage = document.querySelector(".section.home");
const projectGallery = document.querySelector(".project__gallery");

allLines.forEach(element =>
  window.addEventListener("scroll", () =>
    element.getBoundingClientRect().top + window.pageYOffset >=
    homePage.clientHeight
      ? element.classList.add("outMain")
      : element.classList.remove("outMain")
  )
);

navLinks.forEach(e =>
  e.addEventListener("click", () => {
    setTimeout(() => {
      nav.classList.remove("on");
      navCloser.classList.remove("on");
      lastLine.classList.remove("on");
    }, time - 10);
  })
);

navCloser.addEventListener("click", () => {
  navCloser.classList.remove("on");
  nav.classList.remove("on");
  lastLine.classList.remove("on");
});

burger.addEventListener("click", () => {
  nav.classList.toggle("on");
  lastLine.classList.toggle("on");
  navCloser.classList.toggle("on");
});

window.addEventListener(
  "scroll",
  () =>
    (rocket.style.transform = `translateX(41%) translateY(-${window.pageYOffset /
      4}%)`)
);

const navbar = document.querySelector(".nav");

const scrollspy = new VanillaScrollspy(navbar, time);
scrollspy.init();

const sections = document.querySelectorAll(".section");
sections.forEach((element, index) =>
  index === 0 ? null : element.setAttribute("data-aos", "fade-in")
);

for (let i = 1; i < 7; i++) {
  const link = document.createElement("a");
  link.classList.add("project__link");
  link.setAttribute("href", `assets/rocket_final/${i}_max.jpg`);
  link.innerHTML = `
    <img class="project__img" src="assets/rocket_final/${i}_min.jpg" />
`;
  projectGallery.appendChild(link);
}
