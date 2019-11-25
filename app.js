const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const intro = document.querySelector('.intro');
        const introButton = document.querySelector('.intro button');
        const match = document.querySelector('.match');

        introButton.addEventListener('click', () => {
            intro.classList.add('fadeOut');
            match.classList.add('fadeIn');
        })
    }

    const playGame = () => {
        const computerHand = document.querySelector('.computer-hand');
        const playerHand = document.querySelector('.player-hand');
        const optionButton = document.querySelectorAll('.option button');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach((hand) => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            })
        })

        const computerOption = ['rock', 'paper', 'scissors'];

        optionButton.forEach((option) => {
            option.addEventListener('click', function () {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOption[computerNumber];

                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000)

                playerHand.style.animation = 'shakePlayer ease 2s';
                computerHand.style.animation = 'shakeComputer ease 2s';
            })
        })
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (computerChoice, playerChoice) => {
            const winner = document.querySelector('.winner');

            if (computerChoice === playerChoice){
                winner.textContent = `It's a tie`;
                return;
            }

            if (computerChoice === 'rock'){
                if (playerChoice === 'scissors'){
                    winner.textContent = `Player Wins`;
                    pScore++;
                    updateScore();
                    return;
                } else {
                    winner.textContent = `Computer Wins`;
                    cScore++;
                    updateScore();
                    return;
                }
            }

            if (computerChoice === 'scissors'){
                if (playerChoice === 'paper'){
                    winner.textContent = `Player Wins`;
                    pScore++;
                    updateScore();
                    return;
                } else {
                    winner.textContent = `Computer Wins`;
                    cScore++;
                    updateScore();
                    return;
                }
            }

            if (computerChoice === 'paper'){
                if (playerChoice === 'rock'){
                    winner.textContent = `Player Wins`;
                    pScore++;
                    updateScore();
                    return;
                } else {
                    winner.textContent = `Computer Wins`;
                    cScore++;
                    updateScore();
                    return;
                }
            }
    }

    startGame();
    playGame();
}
game();

