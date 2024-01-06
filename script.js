document.addEventListener("DOMContentLoaded", function () {
  const slides = {
    1: document.getElementById("#1"),
    2: document.getElementById("#2"),
    3: document.getElementById("#3"),
    4: document.getElementById("#4"),
    5: document.getElementById("#5"),
  };

  const wrapperElement = document.querySelector(".main .main-wrapper");

  const navbarLinks = {
    1: document.getElementById("link1"),
    2: document.getElementById("link2"),
    3: document.getElementById("link3"),
    4: document.getElementById("link4"),
    5: document.getElementById("link5"),
  };

  const mobileNavbarLinks = {
    1: document.getElementById("mob-link1"),
    2: document.getElementById("mob-link2"),
    3: document.getElementById("mob-link3"),
    4: document.getElementById("mob-link4"),
    5: document.getElementById("mob-link5"),
  };

  const openSlide = (number) => {
    wrapperElement.classList.remove("active");
    void wrapperElement.offsetWidth;
    Object.values(slides).forEach((slide, index) => {
      slide.classList.remove("active");

      if (index + 1 === number) {
        slide.classList.add("active");
        wrapperElement.classList.add("active");
      }
    });
  };

  Object.values(navbarLinks).forEach((link, index) => {
    link.addEventListener("click", () => openSlide(index + 1));
  });

  Object.values(mobileNavbarLinks).forEach((link, index) => {
    link.addEventListener("click", () => {
      openSlide(index + 1);
      closeMobileMenu();
    });
  });

  document.querySelectorAll(".button-toogle").forEach((button) => {
    button.addEventListener("click", function (event) {
      const container = event.currentTarget.parentElement;
      const text = container.querySelector(".accordion-text");
      if (text) {
        text.classList.toggle("active");
      }
      container.classList.toggle("active");

      const button = container.querySelector(".button-toogle");
      if (button) {
        button.classList.toggle("active");
      }
    });
  });
  document.querySelectorAll(".accordion-title").forEach((title) => {
    title.addEventListener("click", function (event) {
      const container = event.currentTarget.parentElement;
      const text = container.querySelector(".accordion-text");
      if (text) {
        text.classList.toggle("active");
      }
      const button = container.querySelector(".button-toogle");
      if (button) {
        button.classList.toggle("active");
      }
      container.classList.toggle("active");
    });
  });

  const closeMobileMenu = () => {
    document.getElementById("mobile-menu").classList.remove("active");
  };
  const openMobileMenu = () => {
    document.getElementById("mobile-menu").classList.add("active");
  };

  document.getElementById("button-menu").addEventListener("click", () => {
    openMobileMenu();
  });
  document.getElementById("close-mobile-menu").addEventListener("click", () => {
    closeMobileMenu();
  });
});
