let gamePlayed = false;
const playOptions = ['rock', 'paper', 'scissors'];

const resetGame = () => {
    // Reset images
    const rockImages = [...document.querySelectorAll('.rock')];
    rockImages.forEach(element => element.src="images/rock.png");
    const paperImages = [...document.querySelectorAll('.paper')];
    paperImages.forEach(element => element.src="images/paper.png");
    const scissorsImages = [...document.querySelectorAll('.scissors')];
    scissorsImages.forEach(element => element.src="images/scissors.png");

    // Reset game
    gamePlayed = false;

    return;
}

const playGame = () => {
    if (!gamePlayed) {

        // Get plays and results
        const humanPlay = event.target.getAttribute("class").split(' ')[0];
        const computerPlay = playOptions[Math.floor(Math.random() * 3)];
        const winner = decideOutcome(humanPlay, computerPlay);

        // Get images to modify them
        const humanPlayImage = event.target;
        const computerPlayImage = document.querySelector(`#${computerPlay}-computer`)

        // Logs for debugging
        // console.log('Play');
        // console.log(`Human play: ${humanPlay}`);
        // console.log(`Computer play: ${computerPlay}`);
        // console.log(`Winner: ${winner}`);

        // Update based on colors
        let countToUpdate;
        switch (winner) {
            case 1:
                humanPlayImage.src=`images/${humanPlay}-green.png`;
                computerPlayImage.src=`images/${computerPlay}-red.png`;
                countToUpdate = document.querySelector('#human-wins');
                countToUpdate.innerHTML = countToUpdate.innerHTML * 1 + 1;
                break;
            case 2:
                humanPlayImage.src=`images/${humanPlay}-red.png`;
                computerPlayImage.src=`images/${computerPlay}-green.png`;
                countToUpdate = document.querySelector('#computer-wins');
                countToUpdate.innerHTML = countToUpdate.innerHTML * 1 + 1;
                break;
            default:
                humanPlayImage.src=`images/${humanPlay}-yellow.png`;
                computerPlayImage.src=`images/${computerPlay}-yellow.png`;
                countToUpdate = document.querySelector('#ties');
                countToUpdate.innerHTML = countToUpdate.innerHTML * 1 + 1;
                break;
        }

        gamePlayed = true;
    } else {
        alert(`Need to reset game first!`)
    }
    return;
}

const decideOutcome = (firstChoice, secondChoice) => {
    // 1 if first player, 2 if second player, 0 if tie
    switch (true) {
        case (firstChoice === 'paper' && secondChoice === 'rock'):
        case (firstChoice === 'rock' && secondChoice === 'scissors'):
        case (firstChoice === 'scissors' && secondChoice === 'paper'):
            return 1;
            break;
        case (firstChoice === 'paper' && secondChoice === 'scissors'):
        case (firstChoice === 'rock' && secondChoice === 'paper'):
        case (firstChoice === 'scissors' && secondChoice === 'rock'):
            return 2;
            break;
        default:
            return 0;
            break;
    }
}

const resetStats = () => {
    let stats = [...document.querySelectorAll('.stat')];
    stats.forEach(element => element.innerHTML = 0);
    return;
}

window.addEventListener('load', () => {
    const resetButton = document.querySelector('.button');
    resetButton.addEventListener('click', resetGame);

    const resetStatsButton = document.querySelector('.button-stats');
    resetStatsButton.addEventListener('click', resetStats);

    const actionButton = [...document.querySelectorAll('.clickable-img')];
    actionButton.forEach(element => element.addEventListener('click', playGame));
  });

