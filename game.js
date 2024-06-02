let currentPlayer = "X";
        let gameBoard = ["", "", "", "", "", "", "", "", ""];
        const winnerDisplay = document.getElementById("winner");
        const newGameButton = document.getElementById("newGameButton");
        const resetButton = document.getElementById("resetButton");

        function placeMarker(index) {
            if (gameBoard[index] === "") {
                gameBoard[index] = currentPlayer;
                render();
                if (!checkWinner()) {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        }

        function resetGame() {
            gameBoard = ["", "", "", "", "", "", "", "", ""];
            currentPlayer = "X";
            render();
            hideNewGameButton();
            hideWinner();
            showResetButton(); // Show the reset button when resetting the game
        }

        function newGame() {
            resetGame();
            hideNewGameButton();
            hideWinner();
        }

        function render() {
            const cells = document.querySelectorAll(".cell");
            cells.forEach((cell, index) => {
                cell.textContent = gameBoard[index];
            });
        }

        function checkWinner() {
            const winningCombos = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];

            for (let combo of winningCombos) {
                const [a, b, c] = combo;
                if (gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
                    const winner = gameBoard[a];
                    winnerDisplay.textContent = `Player ${winner} wins!`;
                    showWinner();
                    showNewGameButton();
                    hideResetButton(); // Hide the reset button when the game ends
                    return true;
                }
            }

            if (!gameBoard.includes("")) {
                winnerDisplay.textContent = "It's a draw!";
                showWinner();
                showNewGameButton();
                hideResetButton(); // Hide the reset button when the game ends
                return true;
            }

            return false;
        }

        function showNewGameButton() {
            newGameButton.style.display = "inline-block";
        }

        function hideNewGameButton() {
            newGameButton.style.display = "none";
        }

        function showResetButton() {
            resetButton.style.display = "inline-block";
        }

        function hideResetButton() {
            resetButton.style.display = "none";
        }

        function showWinner() {
            winnerDisplay.style.display = "block";
        }

        function hideWinner() {
            winnerDisplay.style.display = "none";
        }