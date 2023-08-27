const gameBoard = (() => {
    const fieldArray = new Array(9);
    const currentPlayer = {};

    return { fieldArray, currentPlayer };
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
        console.log('symbol choosen')
        console.log(gameBoard.fieldArray.length);
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
    )
});

const fieldList = document.querySelectorAll('.field');
fieldList.forEach(field => {
    field.addEventListener('click', (event) => {
        console.log('field clicked');
        console.log(event.target);
        console.log(field);
        if (field.textContent === '' && gameBoard.currentPlayer === player_1) {
            field.textContent = player_1.symbol;
            const fieldIndex = field.getAttribute('data-index');
            gameBoard.fieldArray[parseInt(fieldIndex)] = player_1.symbol;
            gameBoard.currentPlayer = player_2;
        } else if (field.textContent === '' && gameBoard.currentPlayer === player_2) {
            field.textContent = player_2.symbol;
            const fieldIndex = field.getAttribute('data-index');
            gameBoard.fieldArray[parseInt(fieldIndex)] = player_2.symbol;
            gameBoard.currentPlayer = player_1;
        }
        console.log(gameBoard.fieldArray);
    })
});