document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
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
      },
    ];
  
    var lottieAnimations = animations.map(function (animation) {
      var anim = lottie.loadAnimation({
        container: animation.container,
        renderer: "svg",
        loop: true,
        autoplay: false,
        path: animation.path,
      });
  
      anim.addEventListener("DOMLoaded", function () {
        setAnimationState();
      });
  
      return anim;
    });
    function setAnimationState() {
      animations.forEach(function (animation, index) {
          var container = animation.container;
          var anim = lottieAnimations[index];  // This is already a Lottie animation instance
  
          if (container.closest(".slide.active")) {
              anim.play();  // Play the animation if the slide is active
          } else {
              anim.stop();  // Stop otherwise
          }
      });
  }
  
    var observer = new MutationObserver(function () {
      setAnimationState();
    });
  
    var config = {
      attributes: true,
      attributeOldValue: true,
      subtree: true,
      attributeFilter: ["class"],
    };
    document.querySelectorAll(".slide").forEach(function (slide) {
      observer.observe(slide, config);
    });
  
    setAnimationState();  
  }, 1000);
});
