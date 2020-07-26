let score = 0;
activePlayer = 0;
let gScore = [0, 0];
document.querySelector('.dice').style.display = "none";
//document.querySelector('.dice').textContent = "0";

document.querySelector(".btn-again").addEventListener("click", () => {
    let dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').style.display = "block";
    document.querySelector(".dice").textContent = dice;
    if (dice !== 1) {
        score += dice;
        document.querySelector(`.player-${activePlayer}__current`).textContent = score;
    } else {
        score = 0;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
    }
})

document.querySelector(".btn-keep").addEventListener("click", () => {
    gScore[activePlayer] += score;
    score = 0;
    document.querySelector('.player-' + activePlayer + '__score').textContent = gScore[activePlayer];
    document.querySelector('.dice').style.display = "none";
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    if (gScore[activePlayer] >= max) {
        document.querySelector('.dice').style.display = "none";
        document.querySelector('.p' + activePlayer).textContent = 'Winner!';
    } activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
})

document.querySelector(".btn-restart").addEventListener("click", () => {
    document.querySelector('.dice').style.display = "none";
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0__score').textContent = '0';
    document.querySelector('.player-1__score').textContent = '0';
    score = 0;
    activePlayer = 0;
    gScore = [0, 0];
})

let max = 50;
document.querySelector('.title').addEventListener('click', () => {
    max = prompt('Maximale Punktzahl');
    document.querySelector('.title').textContent = 'Pig Game ' + max;
})

