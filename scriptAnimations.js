document.addEventListener("DOMContentLoaded", function () {
  // Оптимизация: Загрузка анимаций, когда они в области видимости.
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let container = entry.target;
        let animationData = container.getAttribute('data-animation');
        lottie.loadAnimation({
          container: container,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: animationData
        });
        observer.unobserve(container); // Остановить наблюдение после загрузки анимации
      }
    });
  });

  // Привязка каждого контейнера к наблюдателю
  document.querySelectorAll(".animationContainer").forEach(container => {
    observer.observe(container);
  });
});

////////////////////////
// document.addEventListener("DOMContentLoaded", function () {
//   const containers = document.querySelectorAll(".animationContainer");
//   console.log(`Found ${containers.length} animationContainer elements`);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         let container = entry.target;
//         let animationData = container.getAttribute('data-animation');
//         console.log(`Loading animation from: ${animationData}`); // Для отладки
//         lottie.loadAnimation({
//           container: container,
//           renderer: 'svg',
//           loop: true,
//           autoplay: true,
//           path: animationData
//         });
//         observer.unobserve(container);
//       }
//     });
//   });

//   document.querySelectorAll(".animationContainer").forEach(container => {
//     console.log(`Observing: ${container.id}`); // Для отладки
//     observer.observe(container);
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   setTimeout(() => {
//     var animations = [
//       {
//         container: document.getElementById("animationContainer"),
//         path: "./sources/animations/anim-1.json",
//       },
//       {
//         container: document.getElementById("animationContainer1"),
//         path: "./sources/animations/anim-2.json",
//       },
//       {
//         container: document.getElementById("animationContainer2"),
//         path: "./sources/animations/anim-3.json",
//       },
//       {
//         container: document.getElementById("animationContainer3"),
//         path: "./sources/animations/137560-sea-walk.json",
//       },
//       {
//         container: document.getElementById("animationContainer4"),
//         path: "./sources/animations/anim-5.json",
//       },
//     ];
  
//     var lottieAnimations = animations.map(function (animation) {
//       var anim = lottie.loadAnimation({
//         container: animation.container,
//         renderer: "svg",
//         loop: true,
//         autoplay: false,
//         path: animation.path,
//       });
  
//       anim.addEventListener("DOMLoaded", function () {
//         setAnimationState();
//       });
  
//       return anim;
//     });
//     function setAnimationState() {
//       animations.forEach(function (animation, index) {
//           var container = animation.container;
//           var anim = lottieAnimations[index];  // This is already a Lottie animation instance
  
//           if (container.closest(".slide.active")) {
//               anim.play();  // Play the animation if the slide is active
//           } else {
//               anim.stop();  // Stop otherwise
//           }
//       });
//   }
  
//     var observer = new MutationObserver(function () {
//       setAnimationState();
//     });
  
//     var config = {
//       attributes: true,
//       attributeOldValue: true,
//       subtree: true,
//       attributeFilter: ["class"],
//     };
//     document.querySelectorAll(".slide").forEach(function (slide) {
//       observer.observe(slide, config);
//     });
  
//     setAnimationState();  
//   }, 1000);
// });
