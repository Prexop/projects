const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const restartButton = document.querySelector('#restart-button');

let result = 0;
let hitPosition
let currentTime = 60;
let timerId = null;
let countDownTimerId = null;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    });
    
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    
    hitPosition = randomSquare.id;
};
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function moveMole() {
    
    timerId = setInterval(randomSquare, 500);

};



function countDown(){
 currentTime--
 timeLeft.textContent = currentTime;
 
 if(currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert('GAME OVER! Your Final Score is ' + result,);
 }
}

function restartGame(){
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    result = 0;
    currentTime = 60;
    score.textContent = result;
    timeLeft.textContent = currentTime;
    moveMole();
    countDownTimerId = setInterval(countDown,1000);
}

restartButton.addEventListener('click', restartGame);

moveMole();
countDownTimerId = setInterval(countDown, 1000)