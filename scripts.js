// Player()
// getMarker()
// gameBoard()
// updateDisplay()

let checker = (arr, target, firstBoard, secondBoard) => {
    let answer;
    arr = arr.sort();
    for (let i = 0; i < target.length; i++) {
        answer = target[i].every(value => arr.includes(value));
        if (answer === true) {
            break;
        }
    }
    return answer;
}

const Player = (name, marker) => {
    const board = [];
    let score = 0;
    return { name, marker, board, score }
}

const _tie = (box, playerOne, playerTwo) => {
    const msg = document.querySelector('.message');
    msg.innerText = 'Tie!'
    playAgain(box, playerOne, playerTwo);
    gameOver();
}

const playAgain = (box, playerOne, playerTwo) => {
    const restart = document.querySelector('.playAgain');
    const msg = document.querySelector('.message');
    restart.addEventListener('click', () => {
        msg.innerText = '';
        box.innerText = '';
        box.classList.remove('avoid-clicks')
        restart.style.display = 'none';
        playerOne.board = [];
        playerTwo.board = [];
    })
}

const gameOver = (player = null) => {
    const msg = document.querySelector('.message');
    const scoreO = document.querySelector('.scoreO');
    const scoreX = document.querySelector('.scoreX');
    const restart = document.querySelector('.playAgain');

    restart.style.display = 'block';
    if (player !== null) {

        player.score++;

        if (player.marker === "O") {
            scoreO.innerText = player.score;
        } else if (player.marker === "X") {
            scoreX.innerText = player.score;
        }
        msg.innerText = `Game Over ${player.name} wins!`;
    } else {

    }

}

const Gameboard = (() => {
    const playerOne = Player('player 1', 'O');
    const playerTwo = Player('player 2', 'X');


    const scoreO = document.querySelector('.scoreO');
    const scoreX = document.querySelector('.scoreX');

    scoreO.innerText = playerOne.score;
    scoreX.innerText = playerTwo.score;

    const winningValues =
        [[0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
        ]

    let activePlayer = playerOne;

    const _activePlayer = () => {
        activePlayer === playerOne ? activePlayer = playerTwo : activePlayer = playerOne;
    };

    let board = [];
    for (let i = 0; i < 9; i++) {
        board.push('');
    }

    const squares = document.querySelector('.squares');
    board.forEach((elem, idx) => {
        const box = document.createElement('div');
        box.classList.add('box')
        box.innerText = elem;
        squares.appendChild(box)
        box.addEventListener('click', () => {
            if (box.innerHTML === '') {
                activePlayer.board.push(idx)
                box.innerHTML = activePlayer.marker;
                let boxes = document.querySelectorAll('.box')
                if (checker(activePlayer.board, winningValues, playerOne.board, playerTwo.board)) {
                    boxes.forEach(box => {
                        box.classList.add('avoid-clicks')
                        playAgain(box, playerOne, playerTwo)
                    })
                    gameOver(activePlayer);
                } else if (playerOne.board.length > 4) {
                    boxes.forEach(box => {
                        box.classList.add('avoid-clicks')
                        _tie(box, playerOne, playerTwo)
                    })

                }
                // if (gameOver(playerOne.board) || gameOver(playerTwo.board)) {
                //     console.log("I'm in here")
                //     
                // }
                _activePlayer()
            }
        })
    })
})();