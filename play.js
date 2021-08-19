// 1.   Project Name: Snake
// 2.   Written By: Brad Sawyer
// 3.   Date: 18th August, 2021
// 4.   Purpose: This project will give the ability to work with on our skills of TCP while 
//                also giving the chance to continue practicing with FOCAL in a fun way by
//                implementing the game Snake. This will be the main file for the entire 
//                project. There may be other files for modularizing the code.

const net = require('net');

//Esablishes connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.0.209',
    port: 50541
  });

  //interprets the incoming data as text
  conn.setEncoding('utf8');

  return conn;
}

console.log('Connecting...');
connect();