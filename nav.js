class Nav extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<nav>
    <div class="logo">
        <h4>portfolio</h4>
    </div>
    <div class="flex1"></div>
    <ul class="navlinks">
        <li class="li-item"><a href="#experience">experience</a></li>
        <li class="li-item"><a href="#projects">projects</a></li>
        <li class="li-item"><a href="#skills">skills</a></li>
        <li class="li-item"><a href="#skills">blogs</a></li>
        <li class="li-item"><a href="#education">education</a></li>
    </ul>
    <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>
</nav>`;
  }
}

window.customElements.define("nav-bar", Nav);

const navslide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navlinks");
  const navLinks = document.querySelectorAll(".navlinks li");

  // toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navlinkfade 0.3s ease forwards ${
          index / 9 + 0.5
        }s`;
      }

      link.addEventListener("click", () => {
        nav.classList.remove("nav-active");
        burger.classList.remove("toggle");
        navLinks.forEach((link, index) => {
          link.style.animation = "";
        });
      });
    });

    // burger animation
    burger.classList.toggle("toggle");
  });

  document.getElementsByTagName("body")[0].onscroll = () => {
    nav.classList.remove("nav-active");
    burger.classList.remove("toggle");
    navLinks.forEach((link, index) => {
      link.style.animation = "";
    });
  };
};

navslide();
