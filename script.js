const item = document.querySelector(".item");

item.animate(
  [{ transform: "translateX(0px)" }, { transform: "translateX(100px)" }],
  {
    duration: 3000,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);
