document.addEventListener("DOMContentLoaded", function () {
  const slides = {
    1: document.getElementById("#1"),
    2: document.getElementById("#2"),
    3: document.getElementById("#3"),
    4: document.getElementById("#4"),
    5: document.getElementById("#5"),
  };

  const wrapperElement = document.querySelector(".main .main-wrapper");
  const footerElement = document.querySelector(".footer .wrapper");

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

  const homeLogo = {
    1: document.getElementById('homePageActive')
  }

  const openSlide = (number) => {
    const activeSlide = document.querySelector('.main-wrapper');
    activeSlide.classList.add("hide");
    footerElement.classList.add('hide');
    setTimeout(() => {
      activeSlide.classList.remove("hide");
      wrapperElement.classList.remove("active");
      footerElement.classList.remove("active");
      footerElement.classList.remove("hide");
      void wrapperElement.offsetWidth;
  
  
      Object.values(slides).forEach((slide, index) => {
        slide.classList.remove("active");
  
        if (index + 1 === number) {
          slide.classList.add("active");
          wrapperElement.classList.add("active");
          footerElement.classList.add("active");
        }
      });
    }, 100);
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
  Object.values(homeLogo).forEach((link, index) => {
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
    document.querySelector('.wrapper-menu').classList.add('hide');
    setTimeout(() => {
      document.querySelector('html').classList.remove("fixed");
      document.getElementById("mobile-menu").classList.remove("active");
      document.querySelector('.wrapper-menu').classList.remove('active');
      document.querySelector('.wrapper-menu').classList.remove('hide');
    }, 100);
  };
  const openMobileMenu = () => {
    document.querySelector('html').classList.add("fixed");
    document.getElementById("mobile-menu").classList.add("active");
    document.querySelector('.wrapper-menu').classList.add('active');
  };

  document.getElementById("button-menu").addEventListener("click", () => {
    openMobileMenu();
  });
  document.getElementById("close-mobile-menu").addEventListener("click", () => {
    closeMobileMenu();
  });
  document.getElementById('mobile-menu').addEventListener('click', (event) => {
    if (event.currentTarget === event.target) {
      closeMobileMenu();
    }
  });

  // // Date create
  function todayDate(){
    var d = new Date();
    var n = d.getFullYear() + "  ";
    return document.getElementById("date").innerHTML = n;
  }
  todayDate();
});
