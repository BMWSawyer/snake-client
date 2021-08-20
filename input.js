// 1.   Project Name: Snake
// 2.   File Name: input.js
// 3.   Written By: Brad Sawyer
// 4.   Date Started: 20th August, 2021
// 5.   Purpose: This file handles the user input from the keyboard in order to be able to 
//                move the snake during the game or exit the game.


// Stores the active TCP connection object
let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (key) => {
    handleUserInput(key);
  });

  return stdin;
}

//Handles user input from the keyboard. Either exits game or sends data back to the setupInput function
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
}

module.exports = { setupInput };