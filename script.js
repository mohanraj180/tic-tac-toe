const gameBoard = (() => {
    const fieldArray = new Array(9);
    const currentPlayer = {};

    const updateFieldAndPlayer = (event) => {
        const fieldEle = event.target;
        if (fieldEle.textContent === '' && gameBoard.currentPlayer === player_1) {
            const fieldIndex = fieldEle.getAttribute('data-index');
            gameBoard.fieldArray[parseInt(fieldIndex)] = player_1.symbol;
            fieldEle.textContent = gameBoard.fieldArray[parseInt(fieldIndex)];
            gameBoard.currentPlayer = player_2;
        } else if (fieldEle.textContent === '' && gameBoard.currentPlayer === player_2) {
            // fieldEle.textContent = player_2.symbol;
            const fieldIndex = fieldEle.getAttribute('data-index');
            gameBoard.fieldArray[parseInt(fieldIndex)] = player_2.symbol;
            fieldEle.textContent = gameBoard.fieldArray[parseInt(fieldIndex)];
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
            return 'player-1 won';
        } else if ((fieldArray[0] === 'O' && fieldArray[1] === 'O' && fieldArray[2] === 'O')
            || (fieldArray[3] === 'O' && fieldArray[4] === 'O' && fieldArray[5] === 'O')
            || (fieldArray[6] === 'O' && fieldArray[7] === 'O' && fieldArray[8] === 'O')
            || (fieldArray[0] === 'O' && fieldArray[3] === 'O' && fieldArray[6] === 'O')
            || (fieldArray[1] === 'O' && fieldArray[4] === 'O' && fieldArray[7] === 'O')
            || (fieldArray[2] === 'O' && fieldArray[5] === 'O' && fieldArray[8] === 'O')
            || (fieldArray[0] === 'O' && fieldArray[4] === 'O' && fieldArray[8] === 'O')
            || (fieldArray[2] === 'O' && fieldArray[4] === 'O' && fieldArray[6] === 'O')) {
            console.log('player - 2 won');
            return 'player-2 won';
        } else if (!fieldArray.includes(undefined)) {
            console.log("IT'S A TIE");
            return 'game tied';
        }
    }

    const displayResultMessage = (result) => {
        const resultMessage = document.getElementById('message');
        const messageOverlay = document.getElementById('overlay');
        switch (result) {
            case 'player-1 won':
                resultMessage.textContent = player_1.name + " " + 'won';
                messageOverlay.style.display = 'block';
                resultMessage.style.display = 'block';
                break;

            case 'player-2 won':
                resultMessage.textContent = player_2.name + " " + 'won';
                messageOverlay.style.display = 'block';
                resultMessage.style.display = 'block';
                break;

            case 'game tied':
                resultMessage.textContent = 'Game Tied';
                messageOverlay.style.display = 'block';
                resultMessage.style.display = 'block';
                break;

            default:
                break;
        }
    }

    const closeResultMessage = () => {
        const resultMessage = document.getElementById('message');
        const messageOverlay = document.getElementById('overlay');

        messageOverlay.style.display = 'none';
        resultMessage.style.display = 'none';

        gameBoard.reset();
    }

    const reset = () => {
        const fieldEleList = document.querySelectorAll('.field');
        fieldEleList.forEach(fieldEle => {
            const fieldEleIndex = fieldEle.getAttribute('data-index');
            fieldEle.textContent = undefined;
        })
    }

    return { fieldArray, updateFieldAndPlayer, checkWinCondition, displayResultMessage, closeResultMessage, reset };
})();

const Player = (name, symbol) => {

    return { name, symbol };
};

const player_1 = Player();
player_1.symbol = "X";
const player_2 = Player();
player_2.symbol = "O";

const startBut = document.querySelector('.start');
startBut.addEventListener('click', () => {
    player_1.name = prompt('Enter player 1 name');
    player_2.name = prompt('Enter player 2 name');

    const player_1_name = document.getElementById('player-1');
    player_1_name.textContent = player_1.name;
    const player_2_name = document.getElementById('player-2');
    player_2_name.textContent = player_2.name;
    gameBoard.currentPlayer = player_1;
})


const fieldList = document.querySelectorAll('.field');
fieldList.forEach(field => {
    field.addEventListener('click', (event) => {
        gameBoard.updateFieldAndPlayer(event);
        const result = gameBoard.checkWinCondition();

        gameBoard.displayResultMessage(result);

    })
});

const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', gameBoard.closeResultMessage);