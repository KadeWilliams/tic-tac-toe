const topRow = document.querySelector('.top')
const middleRow = document.querySelector('.middle')
const bottomRow = document.querySelector('.bottom')

const Game = (() => {
    // Player()
    // getMarker()
    // gameBoard()
    // updateDisplay()


    // create player factory function to generate new players
    const Player = (name, marker) => {
        return { name, marker };
    }
    const player1 = Player('kade', 'O');
    const player2 = Player('kasady', 'X');
    let activePlayer = player1;
    // let curMarker = player1.marker;

    const nextPlayer = () => {
        this.activePlayer === player1 ? this.activePlayer = player2 : this.activePlayer = player1;
        curPlayer = this.activePlayer
        return { curPlayer }
    }

    const currentMarker = (() => {
        let { curPlayer } = nextPlayer();
        curMarker = curPlayer.marker
        return { curMarker }
    });


    const Gameboard = (() => {
        const gameboard =
            [['', '', ''],
            ['', '', ''],
            ['', '', '']]

        return { gameboard }
    })();

    const display = ((Gameboard) => {
        const { gameboard } = Gameboard

        let j = 0;
        for (let row of gameboard) {
            for (let i = 0; i < row.length; i++) {
                let square = document.createElement('div')

                square.classList.add(`box${i}`)
                square.addEventListener('click', () => {
                    let { curMarker } = currentMarker();
                    console.log(row)
                    console.log(curMarker)
                    if (row[i] === '') {
                        row[i] = curMarker;
                        square.innerText = row[i];
                    }
                })
                square.innerText = row[i];
                square.addEventListener('click', () => {
                })
                if (j === 0) {
                    topRow.appendChild(square)
                } else if (j === 1) {
                    middleRow.appendChild(square)
                }
                else {
                    bottomRow.appendChild(square)
                }
            }
            j++;
        }
    })(Gameboard);

    return { Gameboard }
})();



// create the game itself, passing through player objects 

// create the display for the game to visually track the score

