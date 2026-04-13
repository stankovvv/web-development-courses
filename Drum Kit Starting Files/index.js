
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
      btnAnim(buttonInnerHTML);
  });
}


document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  btnAnim(event.key);
}
);
function makeSound(key) {
  switch (key) {
    // use switvh statement to play different sound based on the button that is clicked
    case "w":
        new Audio("sounds/tom-1.mp3").play();
        break;

      case "a":
        new Audio("sounds/tom-2.mp3").play();
        break;

      case "s":
        new Audio("sounds/tom-3.mp3").play();
        break;

      case "d":
        new Audio("sounds/tom-4.mp3").play();
        break;

      case "j":
        new Audio("sounds/snare.mp3").play();
        break;

      case "k":
        new Audio("sounds/crash.mp3").play();
        break;

      case "l":
        new Audio("sounds/kick-bass.mp3").play();
        break;

        default:
          console.log(this.innerHTML);
    }
  };
  // add animation to the button when it is clicked activate pressed animation
 function btnAnim(currentKey) {
    var acvBtn = document.querySelector("." + currentKey);
    acvBtn.classList.add("pressed");
    //set timeout to get the button back to normal after 100 milliseconds
    setTimeout(function () {
      acvBtn.classList.remove("pressed");
    }, 100);
  }