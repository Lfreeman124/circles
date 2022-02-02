let circles = document.getElementById("circles");
let redCircle = document.getElementById("red-circle");
let orangeCircle = document.getElementById("orange-circle");
let yellowCircle = document.getElementById("yellow-circle");
let greenCircle = document.getElementById("green-circle");
let blueCircle = document.getElementById("blue-circle");
let purpleCircle = document.getElementById("purple-circle");
let pinkCircle = document.getElementById("pink-circle");

const colorChange = (element) => {
  let randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
  element.style.backgroundColor = randomColor;
};

setInterval(function () {
  let randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
  circles.style.backgroundColor = randomColor;
}, 1000);

redCircle.addEventListener("animationiteration", () => {
  colorChange(redCircle);
});
orangeCircle.addEventListener("animationiteration", () => {
  colorChange(orangeCircle);
});
yellowCircle.addEventListener("animationiteration", () => {
  colorChange(yellowCircle);
});
greenCircle.addEventListener("animationiteration", () => {
  colorChange(greenCircle);
});
blueCircle.addEventListener("animationiteration", () => {
  colorChange(blueCircle);
});
purpleCircle.addEventListener("animationiteration", () => {
  colorChange(purpleCircle);
});
pinkCircle.addEventListener("animationiteration", () => {
  colorChange(pinkCircle);
});
