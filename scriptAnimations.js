// document.addEventListener('DOMContentLoaded', function() {
//   var animation = lottie.loadAnimation({
//     container: document.getElementById("animationContainer"), // ID div элемента, куда будет загружена анимация
//     renderer: "svg", // Устанавливаем тип рендера (SVG/Canvas/HTML)
//     loop: true, // Зациклить анимацию
//     autoplay: true, // Автоматически запустить анимацию
//     path: "./sources/animations/anim-1.json", // Путь к файлу анимации JSON
//   });
//   var animation1 = lottie.loadAnimation({
//     container: document.getElementById("animationContainer1"), // ID div элемента, куда будет загружена анимация
//     renderer: "svg", // Устанавливаем тип рендера (SVG/Canvas/HTML)
//     loop: true, // Зациклить анимацию
//     autoplay: true, // Автоматически запустить анимацию
//     path: "./sources/animations/anim-2.json", // Путь к файлу анимации JSON
//   });
//   var animation2 = lottie.loadAnimation({  
//     container: document.getElementById("animationContainer2"), // ID div элемента, куда будет загружена анимация
//     renderer: "svg", // Устанавливаем тип рендера (SVG/Canvas/HTML)
//     loop: true, // Зациклить анимацию
//     autoplay: true, // Автоматически запустить анимацию
//     path: "./sources/animations/anim-3.json", // Путь к файлу анимации JSON
//   });
//   var animation3 = lottie.loadAnimation({
//     container: document.getElementById("animationContainer3"), // ID div элемента, куда будет загружена анимация
//     renderer: "svg", // Устанавливаем тип рендера (SVG/Canvas/HTML)
//     loop: true, // Зациклить анимацию
//     autoplay: true, // Автоматически запустить анимацию
//     path: "./sources/animations/137560-sea-walk.json", // Путь к файлу анимации JSON
//   });
// })

document.addEventListener('DOMContentLoaded', function () {
  var animations = [
    {
      container: document.getElementById("animationContainer"),
      path: "./sources/animations/anim-1.json",
    },
    {
      container: document.getElementById("animationContainer1"),
      path: "./sources/animations/anim-2.json",
    },
    {
      container: document.getElementById("animationContainer2"),
      path: "./sources/animations/anim-3.json",
    },
    {
      container: document.getElementById("animationContainer3"),
      path: "./sources/animations/137560-sea-walk.json",
    },
    {
      container: document.getElementById("animationContainer4"),
      path: "./sources/animations/anim-5.json",
    }
  ];

  var lottieAnimations = animations.map(function (animation) {
    return lottie.loadAnimation({
      container: animation.container,
      renderer: "svg",
      loop: true,
      autoplay: false, // изменено на false, чтобы не начинать автоматически
      path: animation.path,
    });
  });

  // Функция для установки состояния анимации
  function setAnimationState() {
    lottieAnimations.forEach(function (anim, index) {
      var container = animations[index].container;
      if (container.closest('.slide.active')) {
        // Если родительский слайд активен, играем анимацию
        anim.play();
      } else {
        // Иначе останавливаем
        anim.stop();
      }
    });
  }

  // Инициируем MutationObserver для отслеживания изменений класса
  var observer = new MutationObserver(function () {
    setAnimationState();
  });

  // Настройки для наблюдателя
  var config = { attributes: true, attributeOldValue: true, subtree: true, attributeFilter: ['class'] };

  // Подписываемся на изменения для каждого слайда
  document.querySelectorAll('.slide').forEach(function (slide) {
    observer.observe(slide, config);
  });

  // Установить начальное состояние анимации
  setAnimationState();
});