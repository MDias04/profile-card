let card = document.querySelector(".card");

card.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Start Animation as soon as the mouse enters the card container
card.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
});

//Stop animation as soon as the mouse leaves the card container
card.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
