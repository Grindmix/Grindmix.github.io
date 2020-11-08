"use strict";

// Это попытка сделать лучше, но еще хуже, и даже не работает

let cell = document.getElementsByClassName('cell');
let cells = [];
let turnOrder = true;
let rowsX = {0: 0, 1: 0, 2: 0}, columnsX = {0: 0, 1: 0, 2: 0}, rowsO = {0: 0, 1: 0, 2: 0}, columnsO = {0: 0, 1: 0, 2: 0};
let diagonal_Left_X = 0, diagonal_Right_X = 0, diagonal_Left_O = 0, diagonal_Right_O = 0;
let lastRowX, lastRowO;

for (var i = 0; i < cell.length; i++){
  cells.splice(i, 1 ,cell[i].textContent);
}

function turn(row, column) {
  let elem = document.getElementById(`row${row},column${column}`);
  if (turnOrder == true){
    elem.textContent = 'X';
    add(row, column);
    check(turnOrder);
    turnOrder = false;
  }
  else{
    elem.textContent = 'O';
    add(row, column);
    check(turnOrder);
    turnOrder = true;
  }
}

function newGame() {
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
  rowsX = {0: 0, 1: 0, 2: 0};
  rowsO = {0: 0, 1: 0, 2: 0};
  columnsX = {0: 0, 1: 0, 2: 0};
  columnsO = {0: 0, 1: 0, 2: 0};
  diagonal_Left_X = 0;
  diagonal_Right_X = 0;
  diagonal_Left_O = 0;
  diagonal_Right_O = 0;
  turnOrder = true;
}

function add(row, column) {
  addRowX(row);
  addColumnX(column);
}

function addRowX(row) {
  switch (row) {
    case 0:
      rowsX[0]++;
      lastRowX = 0;
      break;
    case 1:
      rowsX[1]++;
      lastRowX = 1;
      break;
    case 2:
      rowsX[2]++;
      lastRowX = 2;
      break;
  }
}

function addColumnX(column) {
  switch (column) {
    case 0:
      columnsX[0]++;
      if (lastRowX == 0) {
        diagonal_Left_X++;
      }
      else if (lastRowX == 2) {
        diagonal_Right_X++;
      }
      break;
    case 1:
      columnsX[1]++;
      if (lastRowX == 1) {
        diagonal_Left_X++;
        diagonal_Right_X++;
      }
      break;
    case 2:
      columnsX[2]++;
      if (lastRowX == 2) {
        diagonal_Left_X++;
      }
      else if (lastRowX == 0) {
        diagonal_Right_X++;
      }
      break;
  }
}

function addRowO(row) {
  switch (row) {
    case 0:
      rowsO[0]++;
      lastRowO = 0;
      break;
    case 1:
      rowsO[1]++;
      lastRowO = 1;
      break;
    case 2:
      rowsO[2]++;
      lastRowO = 2;
      break;
  }
}

function addColumnO(column) {
  switch (column) {
    case 0:
      columnsO[0]++;
      if (lastRowO == 0) {
        diagonal_Left_O++;
      }
      else if (lastRowO == 2) {
        diagonal_Right_O++;
      }
      break;
    case 1:
      columnsO[1]++;
      if (lastRowO == 1) {
        diagonal_Left_O++;
        diagonal_Right_O++;
      }
      break;
    case 2:
      columnsO[2]++;
      if (lastRowO == 2) {
        diagonal_Left_O++;
      }
      else if (lastRowO == 0) {
        diagonal_Right_O++;
      }
      break;
  }
}

function check(turnOrder) {
  checkRows(turnOrder);
  checkColumns(turnOrder);
  diagonalCheck();
}

function checkRows(turn) {
  switch (turn) {
    case true:
      if (rowsX[0] == 3) {
        paint('row0');
      }
      else if (rowsX[1] == 3) {
        paint('row1');
      }
      else if (rowsX[2] == 3) {
        paint('row2');
      }
      break;
    case false:
      if (rowsO[0] == 3) {
        paint('row0');
      }
      else if (rowsO[1] == 3) {
        paint('row1');
      }
      else if (rowsO[2] == 3) {
        paint('row2');
      }
      break;
    }
}

function checkColumns(turn) {
  switch (turn) {
    case true:
      if (columnsX[0] == 3) {
        paint('column0');
      }
      else if (columnsX[1] == 3) {
        paint('column1');
      }
      else if (columnsX[2] == 3) {
        paint('column2');
      }
      break;
    case false:
      if (columnsO[0] == 3) {
        paint('column0');
      }
      else if (columnsO[1] == 3) {
        paint('column1');
      }
      else if (columnsO[2] == 3) {
        paint('column2');
      }
      break;
    }
}

function diagonalCheck(){
  if (diagonal_Left_X == 3) {
    paint('diagLeft');
  }
  else if (diagonal_Left_O == 3) {
    paint('diagLeft');
  }
  else if (diagonal_Right_X == 3) {
    paint('diagRight');
  }
  else if (diagonal_Right_O == 3) {
    paint('diagRight');
  }
}

function paint(value) {
  switch (value) {
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
    case 'column0':
      cell[0].style.background = 'yellow';
      cell[3].style.background = 'yellow';
      cell[6].style.background = 'yellow';
      cell[0].style.color = 'black';
      cell[3].style.color = 'black';
      cell[6].style.color = 'black';
      break;
    case 'column1':
      cell[1].style.background = 'yellow';
      cell[4].style.background = 'yellow';
      cell[7].style.background = 'yellow';
      cell[1].style.color = 'black';
      cell[4].style.color = 'black';
      cell[7].style.color = 'black';
      break;
    case 'column2':
      cell[2].style.background = 'yellow';
      cell[5].style.background = 'yellow';
      cell[8].style.background = 'yellow';
      cell[2].style.color = 'black';
      cell[5].style.color = 'black';
      cell[8].style.color = 'black';
      break;
    case 'diagLeft':
      cell[0].style.background = 'yellow';
      cell[4].style.background = 'yellow';
      cell[8].style.background = 'yellow';
      cell[0].style.color = 'black';
      cell[4].style.color = 'black';
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
}
}
