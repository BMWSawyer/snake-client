// 1.   Project Name: Snake
// 2.   File Name: input.js
// 3.   Written By: Brad Sawyer
// 4.   Date Started: 20th August, 2021
// 5.   Purpose: This file handles the user input from the keyboard in order to be able to 
//                move the snake during the game or exit the game.

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (key) => {
    handleUserInput(key);
  });

  return stdin;
}

//Checks to see if the user input from the keyboard is Ctrl C, if so exits game
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
}

module.exports = { setupInput };