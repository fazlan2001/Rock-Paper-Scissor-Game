let score;

getScore();

document.querySelector('.Score-win').innerHTML = `Wins : <span class="wins">${score.wins}</span>`;
document.querySelector('.Score-loose').innerHTML = `Losses : <span class="losses">${score.losses}</span>`;
document.querySelector('.Score-tie').innerHTML = `Ties : <span class="ties">${score.ties}</span>`;



function getScore() {
    score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
    }
}

function playGame(playerMove) {
    const computerMove = computersMove();
    let result = '';

    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'Lose';
        } else if (computerMove === 'Scissor') {
            result = 'Win';
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'Win'
        } else if (computerMove === 'Paper') {
            result = 'Tie';
        } else if (computerMove === 'Scissor') {
            result = 'Lose';
        }
    } else if (playerMove === 'Scissor') {
        if (computerMove === 'Rock') {
            result = "Lose";
        } else if (computerMove === 'Paper') {
            result = 'Win';
        } else if (computerMove === 'Scissor') {
            result = 'Tie';
        }
    }

    if (result === 'Win') {
        score.wins++;
        document.querySelector('.result').innerHTML = `You ${result}`;
    } else if (result === 'Lose') {
        score.losses++;
        document.querySelector('.result').innerHTML = `You ${result}`;
    } else if (result === 'Tie') {
        score.ties++;
        document.querySelector('.result').innerHTML = `It's a ${result}`;
    }

    document.querySelector('.chosed').innerHTML = `You ${decision(playerMove)}
                                                    ${decision(computerMove)} Computer`;
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.Score-win').innerHTML = `Wins: <span class="wins">${score.wins}</span>`;
    document.querySelector('.Score-loose').innerHTML = `Losses: <span class="losses">${score.losses}</span>`;
    document.querySelector('.Score-tie').innerHTML = `Ties: <span class="ties">${score.ties}</span>`;
}

function decision(Move) {
    switch (Move) {
        case 'Rock':
            return '<img src="10_RPS_ICONS/Rock.png" width="40" height="40">';
        case 'Paper':
            return '<img src="10_RPS_ICONS/Paper.png" width="40" height="40">';
        case 'Scissor':
            return '<img src="10_RPS_ICONS/Scissor.png" width="40" height="40">';
        default:
            return '';
    }
}

function computersMove() {
    const RandNum = Math.floor(Math.random() * 10) + 1;
    let comMove;
    if (RandNum >= 0 && RandNum <= 3) {
        comMove = 'Rock';
    } else if (RandNum > 3 && RandNum <= 6) {
        comMove = 'Paper';
    } else {
        comMove = 'Scissor';
    }
    return comMove;
}

function resetScore() {
    localStorage.removeItem('score');

    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
    document.querySelector('.Score-win').innerHTML = `Wins : <span class="wins">${score.wins}</span>`;
    document.querySelector('.Score-loose').innerHTML = `Losses : <span class="losses">${score.losses}</span>`;
    document.querySelector('.Score-tie').innerHTML = `Ties : <span class="ties">${score.ties}</span>`;

    document.querySelector('.result').innerHTML = '';
    document.querySelector('.chosed').innerHTML = '';
}