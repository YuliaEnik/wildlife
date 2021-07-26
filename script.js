const sliderContainer = document.querySelector(".wrapper-slider");
let cards = document.querySelectorAll(".card");
const buttonLeft = document.querySelector(".button-left");
let buttonRight = document.querySelector(".button-right");

let currentPosition = 0;

function setPosition(position) {
   if(position > 0) {
      return false;
   }
   if(position <  -cards.length-3 * 100){
      return false;
   }
   currentPosition = position;
   cards.forEach(card => card.style.transform = `translateX(${position}%)`);
   return currentPosition;
}

buttonRight.onclick = () => {
   setPosition(currentPosition-100);
}

buttonLeft.onclick = () => {
   setPosition(currentPosition+100);
}