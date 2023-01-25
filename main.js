// Movement Animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");
// Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

// Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = ((window.innerHeight / 2 - e.pageX) / 25);
  let yAxis = ((window.innerHeight / 2 - e.pageY) / 25);
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", e => {
  card.style.transition = "none";
  // Popout Effect
  title.style.transform = "scale(1.2) translateX(30px)";
  sneaker.style.transform = "scale(1.05) rotateZ(-25deg)";
  description.style.transform = "scale(1.1) translateX(20px)";
  sizes.style.transform = "scale(1.05) translateX(15px)";
  purchase.style.transform = "scale(1.05) translateX(15px)";
});

// Animate Out
container.addEventListener("mouseleave", e => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  // Popback Effect
  title.style.transform = "scale(1) translateX(0px)";
  sneaker.style.transform = "scale(1) translateX(0px) rotateZ(0deg)";
  description.style.transform = "scale(1) translateX(0px)";
  sizes.style.transform = "scale(1) translateX(0px)";
  purchase.style.transform = "scale(1) translateX(0px)";
});