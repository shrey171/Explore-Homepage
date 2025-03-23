const container = document.querySelector(".container");
const setGsap = () => {
  gsap.registerPlugin(
    Flip,
    ScrollTrigger,
    Observer,
    ScrollToPlugin,
    Draggable,
    MotionPathPlugin,
    EaselPlugin,
    PixiPlugin,
    TextPlugin,
    CustomEase
  );
};
document.addEventListener("DOMContentLoaded", () => {
  setGsap();
  const duration = 10;
  const ease = "power1.inOut";

  gsap.set("svg .mover", { strokeDashoffset: "0" });
  gsap.to("svg .mover", {
    strokeDashoffset: "750",
    ease,
    duration,
    repeat: -1,
  });
  gsap.to(".dashed", {
    rotate: 360,
    transformOrigin: "center center",
    ease,
    duration,
    repeat: -1,
  });
  gsap.to(".orbiter", {
    ease,
    repeat: -1,
    duration,
    motionPath: {
      path: ".mover-bg",
      align: ".mover-bg",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
      start: -0.125,
      end: 1 - 0.125,
    },
  });
});
