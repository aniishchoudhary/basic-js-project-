document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const resetButton = document.querySelector('.resetbutton'); // Updated selector
    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];
    let isGameActive = true;
  
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    function handleClick(event) {
      const index = Array.from(boxes).indexOf(event.target);
  
      if (board[index] !== '' || !isGameActive) {
        return;
      }
  
      board[index] = currentPlayer;
      event.target.textContent = currentPlayer;
  
      if (checkWin()) {
        isGameActive = false;
        alert(`Player ${currentPlayer} wins!`);
      } else if (board.every(box => box !== '')) {
        isGameActive = false;
        alert('It\'s a draw!');
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  
    function checkWin() {
      return winningCombinations.some(combination => {
        return combination.every(index => board[index] === currentPlayer);
      });
    }
  
    function resetGame() {
      board = ['', '', '', '', '', '', '', '', ''];
      isGameActive = true;
      currentPlayer = 'X';
      boxes.forEach(box => box.textContent = '');
    }
  
    boxes.forEach(box => box.addEventListener('click', handleClick));
    resetButton.addEventListener('click', resetGame);
  });
  