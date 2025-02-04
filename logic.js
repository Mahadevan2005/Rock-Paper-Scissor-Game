let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function playGame(playerMove) {
const computerMove = pickComputerMove();
let result = '';
if(playerMove === 'scissors')
{
    if(computerMove === 'rock')
    {
        result = 'Lost';
    }
    else if(computerMove === 'paper')
    {
        result = 'Won!!'
    }
    else if(computerMove === 'scissors')
    {
        result = 'Tied';   
    }
}

else if(playerMove === 'rock')
{
    if(computerMove === 'rock')
    {
        result = 'Tied';
    }
    else if(computerMove === 'paper')
    {
        result = 'Lost';
    }
    else if(computerMove === 'scissors')
    {
        result = 'Won!!';
    }
}

else if(playerMove === 'paper')
{
    if(computerMove === 'rock')
    {
        result = 'Won!!';
    }
    else if(computerMove === 'paper')
    {
        result = 'Tied'
    }
    else if(computerMove === 'scissors')
    {
        result = 'Lost';
    }
}

if(result === 'Won!!')
{
    score.wins += 1;
}
else if(result === 'Lost')
{
    score.losses += 1;
}
else if(result === 'Tied')
{
    score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();
document.querySelector('.game-result').innerHTML = `Game ${result}`;
document.querySelector('.game-moves').innerHTML = `You <img src="static/${playerMove}-emoji.png" class="game-emojis">
                                                  <img src="static/${computerMove}-emoji.png" class="game-emojis"> Computer`
}

function updateScoreElement() {
    document.querySelector('.game-score')
        .innerHTML = `Wins: ${score.wins}, Loses: ${score.losses}, Ties: ${score.ties}`;
}


function pickComputerMove() {
let computerMove = '';
const randNumber = Math.random();
if(randNumber >= 0 && randNumber < 1/3)
{
    computerMove = 'rock';
}

else if (randNumber >= 1/3 && randNumber < 2/3)
{
    computerMove = 'paper';
}

else if (randNumber >= 2/3 && randNumber < 1)
{
    computerMove = 'scissors';
} 

return computerMove;
}