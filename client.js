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