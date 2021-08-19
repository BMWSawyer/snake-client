// 1.   Project Name: Snake
// 2.   File Name: client.js
// 3.   Written By: Brad Sawyer
// 4.   Date: 18th August, 2021
// 5.   Purpose: This file current holds the function that connects with the game server. 
//                The function is exported so it's available in other files.

const net = require('net');

//Esablishes connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  //interprets the incoming data as text
  conn.setEncoding('utf8');

  //implements the ability to receive messages from the game server
  conn.on('data', (message) => {
    console.log(`Message from the server: ${message}`);
  });

  return conn;
}

module.exports = connect;