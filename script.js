function locoMotive() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
function loaderAnimation() {
  let tl = gsap.timeline();
  tl.from(".line h1", {
    y: 550,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });
  tl.from(".sub-line", {
    opacity: 0,
    onStart: function () {
      let timmer = document.querySelector(".line h5");
      let growValue = 0;
      setInterval(function () {
        if (growValue < 100) {
          timmer.innerHTML = growValue++;
        } else {
          timmer.innerHTML = growValue;
        }
      }, 33);
    },
  });
  tl.to(".line h2", {
    animationName: "animationText",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 3,
  });
  tl.from(".page1", {
    delay: 0.2,
    duration: 0.6,
    y: 1600,
    opacity: 0,
    ease: "linear",
    backgroundColor: "#030303",
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("#nav", {
    opacity: 0,
  });
  tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
    y: 520,
    stagger: 0.2,
  });
  tl.from(
    "#hero1, .page2",
    {
      opacity: 0,
    },
    "-=1.2"
  );
}
function flagAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#flag", {
      x: dets.x,
      y: dets.y,
    });
  });
  document.querySelector("#hero3").addEventListener("mouseenter", function () {
    gsap.to("#flag", {
      opacity: 1,
    });
  });
  document.querySelector("#hero3").addEventListener("mouseleave", function () {
    gsap.to("#flag", {
      opacity: 0,
    });
  });
}
function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });

  Shery.makeMagnet("#sub-nav h4", {});

  let videoMouse = document.querySelector(".video-wrapper");
  let videoPlay = document.querySelector(".video-wrapper video");
  let videoImg = document.querySelector(".video-wrapper img");
  let playPause = document.querySelector(".video-wrapper .video-mouse");
  videoMouse.addEventListener("mouseenter", function () {
    videoMouse.addEventListener("mousemove", function (elems) {
      gsap.to("#cursor", {
        opacity: 0,
        scale: 0,
      });
      gsap.to(".video-mouse", {
        left: elems.x - 430,
        top: elems.y - 255,
      });
    });
  });
  videoMouse.addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      opacity: 1,
      scale: 1,
    });
    gsap.to(".video-mouse", {
      top: "-10%",
      left: "80%",
    });
  });
  let flag = 0;
  videoPlay.addEventListener("click", function () {
    if (flag == 0) {
      videoPlay.play();
      videoPlay.style.opacity = 1;
      videoImg.style.opacity = 0;
      playPause.innerHTML = `<i class="ri-pause-fill"></i>`;
      flag = 1;
      gsap.to(".video-mouse", {
        scale: 0.5,
      });
    } else {
      videoPlay.pause();
      videoPlay.style.opacity = 0;
      videoImg.style.opacity = 1;
      playPause.innerHTML = `<i class="ri-play-fill"></i>`;
      flag = 0;
      gsap.to(".video-mouse", {
        scale: 1,
      });
    }
  });
}
function gooeyAnimation() {
  Shery.imageEffect(".img-items", {
    style: 5,
    config: {
      a: { value: 2.52, range: [0, 30] },
      b: { value: 0.76, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7272749932567818 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: false },
      maskVal: { value: 1, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.61, range: [0, 10] },
      metaball: { value: 0.49, range: [0, 2] },
      discard_threshold: { value: 0.74, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.43, range: [0, 2] },
      noise_scale: { value: 9.16, range: [0, 100] },
    },
    gooey: true,
  });
}

locoMotive();
loaderAnimation();
flagAnimation();
cursorAnimation();
gooeyAnimation();

