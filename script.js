"use strict";

let cell = document.getElementsByClassName('cell');
let cells = []
let turnOrder = true;

function turn(row, column) {
  let elem = document.getElementById(`row${row},column${column}`);
  if (turnOrder == true){
    elem.textContent = 'X';
    turnOrder = false;
  }
  else{
    elem.textContent = 'O';
    turnOrder = true;
  }
  check();
}

function newGame() {
  cells = []
  let input = document.getElementById('cellSize');
  let value = input.value.trim();
  if(value != ''){
    for (var i = 0; i < cell.length; i++) {
      cell[i].style.width = `${value}px`;
      cell[i].style.height = `${value}px`;
      cell[i].style.background = 'grey';
      cell[i].style.color = 'white';
      cell[i].textContent = '';
    }
  }
  else{
    for (var i = 0; i < cell.length; i++) {
      cell[i].style.background = 'grey';
      cell[i].style.color = 'white';
      cell[i].textContent = '';
    }
  }
  turnOrder = true;
}

function check() {
  for (var i = 0; i < cell.length; i++){
    cells.splice(i, 1 ,cell[i].textContent);
  }
  if (cells[0] != '' && cells[1] != '' && cells[2] != '' // row 1
  && cells[0] == cells[1] && cells[1] == cells[2]) {
    cell[0].style.background = 'yellow';
    cell[1].style.background = 'yellow';
    cell[2].style.background = 'yellow';
    cell[0].style.color = 'black';
    cell[1].style.color = 'black';
    cell[2].style.color = 'black';
  }
  else if (cells[3] != '' && cells[4] != '' && cells[5] != '' // row 2
  && cells[3] == cells[4] && cells[4] == cells[5]) {
    cell[3].style.background = 'yellow';
    cell[4].style.background = 'yellow';
    cell[5].style.background = 'yellow';
    cell[3].style.color = 'black';
    cell[4].style.color = 'black';
    cell[5].style.color = 'black';
  }
  else if (cells[6] != '' && cells[7] != '' && cells[8] != '' // row 3
  && cells[6] == cells[7] && cells[7] == cells[8]) {
    cell[6].style.background = 'yellow';
    cell[7].style.background = 'yellow';
    cell[8].style.background = 'yellow';
    cell[6].style.color = 'black';
    cell[7].style.color = 'black';
    cell[8].style.color = 'black';
  }
  else if (cells[0] != '' && cells[3] != '' && cells[6] != '' // column 1
  && cells[0] == cells[3] && cells[3] == cells[6]) {
    cell[0].style.background = 'yellow';
    cell[3].style.background = 'yellow';
    cell[6].style.background = 'yellow';
    cell[0].style.color = 'black';
    cell[3].style.color = 'black';
    cell[6].style.color = 'black';
  }
  else if (cells[1] != '' && cells[4] != '' && cells[7] != '' // column 2
  && cells[1] == cells[4] && cells[4] == cells[7]) {
    cell[1].style.background = 'yellow';
    cell[4].style.background = 'yellow';
    cell[7].style.background = 'yellow';
    cell[1].style.color = 'black';
    cell[4].style.color = 'black';
    cell[7].style.color = 'black';
  }
  else if (cells[2] != '' && cells[5] != '' && cells[8] != '' // column 3
  && cells[2] == cells[5] && cells[5] == cells[8]) {
    cell[2].style.background = 'yellow';
    cell[5].style.background = 'yellow';
    cell[8].style.background = 'yellow';
    cell[2].style.color = 'black';
    cell[5].style.color = 'black';
    cell[8].style.color = 'black';
  }
  else if (cells[2] != '' && cells[4] != '' && cells[6] != '' // diagonal left to right
  && cells[2] == cells[4] && cells[4] == cells[6]) {
    cell[2].style.background = 'yellow';
    cell[4].style.background = 'yellow';
    cell[6].style.background = 'yellow';
    cell[2].style.color = 'black';
    cell[4].style.color = 'black';
    cell[6].style.color = 'black';
  }
  else if (cells[0] != '' && cells[4] != '' && cells[8] != '' // diagonal right to left
  && cells[0] == cells[4] && cells[4] == cells[8]) {
    cell[0].style.background = 'yellow';
    cell[4].style.background = 'yellow';
    cell[8].style.background = 'yellow';
    cell[0].style.color = 'black';
    cell[4].style.color = 'black';
    cell[8].style.color = 'black';
  }
}
