"use strict"

let end = document.querySelector('#end');
end.classList.add('closed');

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function changeButton() {
  let menu = document.querySelector('#main');
  let game = document.querySelector('#game');

  menu.style.display = 'none';
}
