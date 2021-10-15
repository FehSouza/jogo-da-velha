const $switchBall1 = document.querySelector(".switch-ball1");
const $switchBall2 = document.querySelector(".switch-ball2");

$switchBall1.addEventListener("click", function () {
  $switchBall1.classList.toggle("switch-active1");
});

$switchBall2.addEventListener("click", function () {
  $switchBall2.classList.toggle("switch-active2");
});
