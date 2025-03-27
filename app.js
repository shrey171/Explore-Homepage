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
  const yoyo = true;
  const duration = 10;
  const ease = "power1.inOut";

  gsap.set("svg .rotor", { strokeDashoffset: "0" });
  gsap.to("svg .rotor", {
    strokeDashoffset: "750",
    ease,
    duration,
    yoyo,
    repeat: -1,
  });
  gsap.to(".dashed", {
    rotate: 360,
    transformOrigin: "center center",
    ease,
    duration,
    yoyo,
    repeat: -1,
  });
  gsap.to(".orbiter", {
    ease,
    repeat: -1,
    duration,
    yoyo,
    motionPath: {
      path: ".orbit",
      align: ".orbit",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
      start: -0.125,
      end: 1 - 0.125,
    },
  });
});
