const startBtn = document.getElementById('start-btn');
const guessBtn = document.getElementById('guess-btn');
const scoreElem = document.getElementById('score');
const winGif = document.querySelector('.win-gif');
const loseGif = document.querySelector('.lose-gif');
let score = 0;
let secretNumber;
let guess;

startBtn.addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  guessBtn.disabled = false;
  startBtn.disabled = true;
});

guessBtn.addEventListener('click', () => {
  guess = parseInt(prompt('Guess a number between 1 and 100:'));
  if (guess === secretNumber) {
    score++;
    scoreElem.textContent = score;
    winGif.style.display = 'block';
    guessBtn.disabled = true;
  } else if (guess < secretNumber) {
    alert('Too low! Try again.');
  } else {
    alert('Too high! Try again.');
  }
  if (score >= 5) {
    alert('Congratulations! You won the game.');
    startBtn.disabled = false;
    guessBtn.disabled = true;
    winGif.style.display = 'none';
  }
});