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

  stdin.on('data', (key) => handleUserInput(key));

  return stdin;
};

//Handles user input from the keyboard. Either exits game or sends data back to the setupInput function
const handleUserInput = function(key) {
  switch (key) {
  case 'w':
    connection.write('Move: up');
    break;
  case 'a':
    connection.write('Move: left');
    break;
  case 's':
    connection.write('Move: down');
    break;
  case 'd':
    connection.write('Move: right');
    break;
  case 'b':
    connection.write('Say: Gotcha!');
    break;
  case 'h':
    connection.write('Say: You got me!');
    break;
  case 'n':
    connection.write('Say: I\'m coming for you!');
    break;
  case '\u0003':
    process.exit();
  }
};

module.exports = { setupInput };