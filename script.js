"use strict";

let cell = document.getElementsByClassName('cell');
let turnOrder = true;
let columns;
let field = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function turn(row, column) {
  let elem = document.getElementById(`row${row},column${column}`);
  if (elem.textContent != ''){
    return
  }
  if (turnOrder == true) {
    elem.textContent = 'X';
    field[row][column] = 'X';
    turnOrder = false;
  }
  else {
    elem.textContent = 'O';
    field[row][column] = 'O';
    turnOrder = true;
  }
  winRow();
  winColumn();
  winDiagonal();
}

function newGame() {
  let input = document.getElementById('cellSize');
  let value = input.value.trim();
  if (value != '') {
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
  field = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
}

function rowIs(row, val) {
    return row.every(function(el){
      return el == val;
  });
}

function columnIs(column, val) {
  return column.every(function(el){
    return el == val;
  });
}

function makeCol() {
  columns = [
    [],
    [],
    []
  ];
  for (var i = 0; i < field.length; i++) {
    columns[0].push(field[i][0]);
    columns[1].push(field[i][1]);
    columns[2].push(field[i][2]);
  }
}

function winRow() {
  for (var i = 0; i < field.length; i++) {
    if (rowIs(field[i], 'X')) {
      paint(`row${i}`);
    }
    else if (rowIs(field[i], 'O')) {
      paint(`row${i}`);
    }
  }
}

function winColumn() {
  makeCol();
  for (var i = 0; i < columns.length; i++) {
    if (columnIs(columns[i], 'X')){
      paint(`col${i}`);
    }
    else if (columnIs(columns[i], 'O')) {
      paint(`col${i}`);
    }
  }
}

function winDiagonal() {
  let j = 0;
  let XCounterLeft = 0;
  let OcounterLeft = 0;
  let XCounterRight = 0;
  let OcounterRight = 0;
  for (var i = 0; i < field.length; i++) {
    if (field[i][i] == 'X'){
      XCounterLeft++;
    }
    else if (field[i][i] == 'O') {
      OcounterLeft++;
    }
  }
  for (var i = 2; i > -1; i--) {
    if (field[j][i] == 'X'){
      XCounterRight++;
      j++;
    }
    else if (field[j][i] == 'O') {
      OcounterRight++;
      j++;
    }
  }
  if (XCounterLeft == 3 || OcounterLeft == 3) {
    paint('diagLeft');
  }
  else if(XCounterRight == 3 || OcounterRight == 3){
    paint('diagRight');
  }
}

function paint(typeOfWin) {
  let cells = [];
  for (var i = 0; i < cell.length; i++){
    cells.splice(i, 1 ,cell[i].textContent);
  }
switch (typeOfWin) {
  case 'row0':
    cell[0].style.background = 'yellow';
    cell[1].style.background = 'yellow';
    cell[2].style.background = 'yellow';
    cell[0].style.color = 'black';
    cell[1].style.color = 'black';
    cell[2].style.color = 'black';
    break;
  case 'row1':
    cell[3].style.background = 'yellow';
    cell[4].style.background = 'yellow';
    cell[5].style.background = 'yellow';
    cell[3].style.color = 'black';
    cell[4].style.color = 'black';
    cell[5].style.color = 'black';
    break;
  case 'row2':
    cell[6].style.background = 'yellow';
    cell[7].style.background = 'yellow';
    cell[8].style.background = 'yellow';
    cell[6].style.color = 'black';
    cell[7].style.color = 'black';
    cell[8].style.color = 'black';
    break;
  case 'col0':
    cell[0].style.background = 'yellow';
    cell[3].style.background = 'yellow';
    cell[6].style.background = 'yellow';
    cell[0].style.color = 'black';
    cell[3].style.color = 'black';
    cell[6].style.color = 'black';
    break;
  case 'col1':
    cell[1].style.background = 'yellow';
    cell[4].style.background = 'yellow';
    cell[7].style.background = 'yellow';
    cell[1].style.color = 'black';
    cell[4].style.color = 'black';
    cell[7].style.color = 'black';
    break;
  case 'col2':
    cell[2].style.background = 'yellow';
    cell[5].style.background = 'yellow';
    cell[8].style.background = 'yellow';
    cell[2].style.color = 'black';
    cell[5].style.color = 'black';
    cell[8].style.color = 'black';
    break;
  case 'diagRight':
    cell[2].style.background = 'yellow';
    cell[4].style.background = 'yellow';
    cell[6].style.background = 'yellow';
    cell[2].style.color = 'black';
    cell[4].style.color = 'black';
    cell[6].style.color = 'black';
    break;
  case 'diagLeft':
    cell[0].style.background = 'yellow';
    cell[4].style.background = 'yellow';
    cell[8].style.background = 'yellow';
    cell[0].style.color = 'black';
    cell[4].style.color = 'black';
    cell[8].style.color = 'black';
    break;
  }
}
