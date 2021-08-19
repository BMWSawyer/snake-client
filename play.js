// 1.   Project Name: Snake
// 2.   File Name: play.js
// 3.   Written By: Brad Sawyer
// 4.   Date: 18th August, 2021
// 5.   Purpose: This project will give the ability to work with on our skills of TCP while 
//                also giving the chance to continue practicing with FOCAL in a fun way by
//                implementing the game Snake. This will be the main file for the entire 
//                project. There may be other files for modularizing the code.

//Requires the connect function to be able to connect with the game server
const connect = require('./client');

console.log('Connecting...');
connect();