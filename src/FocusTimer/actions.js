import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'


export function play() {
  state.isRunning = true;
  timer.countdown();
}

export function stop() {
  state.isRunning = false;
}

export function plus() {
  state.minutes += 5;
  timer.updateDisplay();
  if(state.isRunning) {
    
    timer.updateDisplay();
  }
}

export function minus() {
  state.minutes -= 5;
  if (state.minutes < 0) {
    if(state.seconds != 0) {
      state.seconds = 0;
    }
    state.minutes = 0;
    timer.updateDisplay();
    return;
  }
  timer.updateDisplay();
  
}

export function removeSelectedCard() {
  const cards = document.querySelectorAll('.card');
  cards.forEach (card => {
    card.classList.remove('selected');
  })
}

export function changeCardBackground(card) {
  const cardToBeChanged = document.getElementById(card);
  cardToBeChanged.classList.add('selected');
}

export function pauseAllAudio() {
  sounds.rainAudio.pause();
  sounds.storeAudio.pause();
  sounds.fireAudio.pause();
  sounds.florestAudio.pause();
}

export function forest() {
  removeSelectedCard();
  changeCardBackground('forest');
  pauseAllAudio();
  sounds.florestAudio.play();
}

export function rain() {
  removeSelectedCard();
  changeCardBackground('rain');
  pauseAllAudio();
  sounds.rainAudio.play();
}

export function store() {
  removeSelectedCard();
  changeCardBackground('store');
  pauseAllAudio();
  sounds.storeAudio.play();
}

export function fire() {
  removeSelectedCard();
  changeCardBackground('fire');
  pauseAllAudio();
  sounds.fireAudio.play();
}