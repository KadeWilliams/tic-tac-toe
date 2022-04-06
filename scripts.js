// Player()
// getMarker()
// gameBoard()
// updateDisplay()

const Player = (name, marker) => {
    return { name, marker }
}


const Gameboard = (() => {
    const playerOne = Player('kade', 'O');
    const playerTwo = Player('bot', 'X');

    let activePlayer = playerOne;

    const _activePlayer = () => {
        activePlayer === playerOne ? activePlayer = playerTwo : activePlayer = playerOne;
    };

    let board = [];
    for (let i = 0; i < 9; i++) {
        board.push('');
    }

    const squares = document.querySelector('.squares');
    console.log(squares)
    board.forEach(elem => {
        const box = document.createElement('div');
        box.classList.add('box')
        box.innerText = elem;
        squares.appendChild(box)
        box.addEventListener('click', () => {
            console.log(activePlayer.marker)
            if (box.innerHTML === '') {

                box.innerHTML = activePlayer.marker
                _activePlayer()
            }
        })
    })
})();