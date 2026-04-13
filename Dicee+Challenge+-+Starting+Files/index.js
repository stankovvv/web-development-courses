//randomizer
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//change the image source for both dice
document.querySelectorAll(".img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll(".img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png");
//reaction to the dice roll
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}