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
  status();
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
}

function status() {
  winRow();
  winColumn();
  winDiagonal();
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
      console.log('row' + i + ' X');
    }
    else if (rowIs(field[i], 'O')) {
      console.log('row' + i + ' O');
    }
  }
}

function winColumn() {
  makeCol();
  for (var i = 0; i < columns.length; i++) {
    if (columnIs(columns[i], 'X')){
      console.log('column' + i + ' X');
    }
    else if (columnIs(columns[i], 'O')) {
      console.log('column' + i + ' O');
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
    console.log('diagonal left');
  }
  else if(XCounterRight == 3 || OcounterRight == 3){
    console.log('diagonal right');
  }
}

function paint() {

}
