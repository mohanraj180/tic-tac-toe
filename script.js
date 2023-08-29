const gameBoard = (() => {
    const fieldArray = new Array(9);
    const currentPlayer = {};

    const togglePlayerSymbolAndCurrentPlayer = (event) => {
        if (event.textContent === 'O') {
            player_1.symbol = 'X';
            player_2.symbol = 'O';
            gameBoard.currentPlayer = player_1;
        } else {
            player_2.symbol = 'X';
            player_1.symbol = 'O';
            gameBoard.currentPlayer = player_2;
        }
    }

    const updateFieldAndPlayer = (event) => {
        const fieldEle = event.target;
        if (fieldEle.textContent === '' && gameBoard.currentPlayer === player_1) {
            fieldEle.textContent = player_1.symbol;
            const fieldIndex = fieldEle.getAttribute('data-index');
            gameBoard.fieldArray[parseInt(fieldIndex)] = player_1.symbol;
            gameBoard.currentPlayer = player_2;
        } else if (fieldEle.textContent === '' && gameBoard.currentPlayer === player_2) {
            fieldEle.textContent = player_2.symbol;
            const fieldIndex = fieldEle.getAttribute('data-index');
            gameBoard.fieldArray[parseInt(fieldIndex)] = player_2.symbol;
            gameBoard.currentPlayer = player_1;
        }
    }

    const checkWinCondition = () => {
        if ((fieldArray[0] === 'X' && fieldArray[1] === 'X' && fieldArray[2] === 'X')
            || (fieldArray[3] === 'X' && fieldArray[4] === 'X' && fieldArray[5] === 'X')
            || (fieldArray[6] === 'X' && fieldArray[7] === 'X' && fieldArray[8] === 'X')
            || (fieldArray[0] === 'X' && fieldArray[3] === 'X' && fieldArray[6] === 'X')
            || (fieldArray[1] === 'X' && fieldArray[4] === 'X' && fieldArray[7] === 'X')
            || (fieldArray[2] === 'X' && fieldArray[5] === 'X' && fieldArray[8] === 'X')
            || (fieldArray[0] === 'X' && fieldArray[4] === 'X' && fieldArray[8] === 'X')
            || (fieldArray[2] === 'X' && fieldArray[4] === 'X' && fieldArray[6] === 'X')) {
            console.log('player - 1 won');
        } else if ((fieldArray[0] === 'O' && fieldArray[1] === 'O' && fieldArray[2] === 'O')
            || (fieldArray[3] === 'O' && fieldArray[4] === 'O' && fieldArray[5] === 'O')
            || (fieldArray[6] === 'O' && fieldArray[7] === 'O' && fieldArray[8] === 'O')
            || (fieldArray[0] === 'O' && fieldArray[3] === 'O' && fieldArray[6] === 'O')
            || (fieldArray[1] === 'O' && fieldArray[4] === 'O' && fieldArray[7] === 'O')
            || (fieldArray[2] === 'O' && fieldArray[5] === 'O' && fieldArray[8] === 'O')
            || (fieldArray[0] === 'O' && fieldArray[4] === 'O' && fieldArray[8] === 'O')
            || (fieldArray[2] === 'O' && fieldArray[4] === 'O' && fieldArray[6] === 'O')) {
            console.log('player - 2 won');
        } else {
            console.log("IT'S A TIE");
        }
    }

    return { fieldArray, togglePlayerSymbolAndCurrentPlayer, updateFieldAndPlayer, checkWinCondition };
})();

const Player = (name, symbol) => {

    return { name, symbol };
};

const player_1 = Player()
const player_2 = Player()

// player_1.name = prompt('Player 1 Enter Your Name');
// player_2.name = prompt('Player 2 Enter Your Name');

const symbolList = document.querySelectorAll('.symbols');
symbolList.forEach(symbolEle => {

    symbolEle.addEventListener('click', (event) => {
        gameBoard.togglePlayerSymbolAndCurrentPlayer(event);
    })
});

const fieldList = document.querySelectorAll('.field');
fieldList.forEach(field => {
    field.addEventListener('click', (event) => {
        gameBoard.updateFieldAndPlayer(event);
        gameBoard.checkWinCondition();
    })
});