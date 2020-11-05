"use strict"
let menu = document.querySelector('#mainMenu');
let game = document.querySelector('#GameDiv');
let end = document.querySelector('#EndGame');
let eHead = document.querySelector('#eHead');
let displayLives;
let d;
let input;
let lives;
let curword;
let guess;
let result;
let cards;
let openedCards;

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function startGame() {

  if(typeof cards != "undefined"){
  cards.forEach(function(item) {
    item.remove();
  });
  }

  lives = 3;
  cards = [];
  openedCards = [];
  let numberOfWord = randomInt(words.length);
  curword = words[numberOfWord];
  let cardsContainer = document.querySelector("#cards");
  let description = document.querySelector('#description');
  displayLives = document.querySelector('#lives');
  end.style.display = 'none';
  menu.style.display = 'none';
  game.style.display = 'inline';

  displayLives.textContent ='Жизни: ' + lives;
  description.textContent = curword.description;


  for (let i = 0; i < curword.name.length; i++){
  d = document.createElement("div");
  d.className = "card";
  cardsContainer.append(d);
  cards.push(d);
  }
}

function check(){
  input = document.querySelector('#input');
  guess = input.value.trim().toLowerCase();
  if (guess.length == 1){
    checkLetter(guess);
  }
  else{
    checkWord(guess);
  }
  input.value = "";
}

function checkLetter(val) {
  let found = false;
  for (let i = 0; i < curword.name.length; i++){
    if(curword.name[i]==val){
      openCard(i);
      found = true;
    }
  }
  if(!found) {
      takeLive();
  }
  if(openedCards.length == cards.length){
    endGame(true);
  }
}

function checkWord(val){
  if (curword.name == val){
    endGame(true);
  }
  else {
    endGame(false);
  }
}

function takeLive() {
  lives -= 1;
  displayLives.textContent ='Жизни: ' + lives;
  if(lives == 0) {
    endGame(false);
  }
}

function openCard(index){
  let c = cards[index];
  if (openedCards.indexOf(c) >= 0) return;
  c.classList.add("opened");
  c.textContent = curword.name[index].toUpperCase();
  openedCards.push(c);
}

function endGame(result){
  if(result == false){
  appendToStorage('wins', 0);
  eHead.textContent = 'Ты проиграл,' + 'Побед: ' + localStorage.getItem('wins');
  game.style.display = 'none';
  end.style.display = 'inline';
  eHead.style.color = 'red';
  }
  else{
  appendToStorage('wins', 1);

  eHead.textContent = 'Ты выиграл,' + 'Побед: ' + localStorage.getItem('wins');
  game.style.display = 'none';
  end.style.display = 'inline';
  eHead.style.color = 'green';
  }
}

function appendToStorage(name, data){
    var old = localStorage.getItem(name);
    if(old === null) old = 0;
    const dataINT = parseInt(data);
    const oldINT = parseInt(old);
    localStorage.setItem(name, oldINT + dataINT);
}

var words = [
{
  "name": "samsung",
  "description": "Как называется крупнейшая технологическая компания в Южной Корее?"
},
{
  "name": "алюминий",
  "description": "Какой металл был открыт Гансом Кристианом Эрстедом в 1825 году?"
},
{
  "name": "хэнкс",
  "description": "Фамилия актера выигравшего Оскар за фильмы «Филадельфия» (1993) и «Форрест Гамп» (1994)?"
},
{
  "name": "семь",
  "description": "Сколько игроков в команде по водному поло?"
  },
{
  "name": "queen",
  "description": "Как называется группа со следующими участниками: Джон Дикон, Брайан Мэй, Фредди Меркьюри, Роджер Тейлор?"
  }
]
