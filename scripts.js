let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

// Initialize the game by setting the value inside next-lbl to nextPlayer
document.getElementById('next-lbl').innerText = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard();

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    let cells = document.querySelectorAll('td');
    for (let cell of cells) {
        let button = document.createElement('button');
        button.innerText = '[ ]';
        cell.appendChild(button);
    }

    // Programatically add 'takeCell' as an event listener to all the buttons on the board
    let btns = document.querySelectorAll('button');

    for (let i = 0; i < btns.length; i++)
    {
        /*
            Assign an event listener to each of the buttons in btns.
            The event to listen for should be 'click'. You will need to pass 
            the event to takeCell. Review the slides for the trick on how to ]
            pass a parameter.
        */
        btns[i].addEventListener('click', (event) => takeCell(event));
    }
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    let button = event.target;
    if (button.innerText === '[ ]') {
        button.innerText = `[${nextPlayer}]`;
        button.disabled = true; // Make sure the button is clickable only once
        nextPlayer = nextPlayer === 'X' ? 'O' : 'X'; // Switch player
        document.getElementById('next-lbl').innerText = nextPlayer; // Update next player label
    }

    // Check if the game is over
    if (isGameOver())
    {
        // let the label with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let gameOverLbl = document.getElementById('game-over-lbl');
        gameOverLbl.innerHTML = '<h1>Game Over</h1>';
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let btns = document.querySelectorAll('button');
    for (let button of btns) {
        if (!button.disabled) {
            return false;
        }
    }
    return true;
}
