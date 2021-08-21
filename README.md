# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from [here](https://github.com/lighthouse-labs/snek-multiplayer).

## Purpose

**_BEWARE:_ This game repo was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Final Product

!["This is a screenshot mid-game using one of the canned messages."]('./screenshot1.png')
!["This is a screenshot as soon as you connect to the server and your snake shows up on the game board."]('./screenshot2.png')

## Dependencies

- net

## Getting Started

- Clone the snek-multiplayer repo from Github into one directory above your Snake game.
- In order to run the game cd into your snek-multiplayer directory locally and run `npm install` and then use the `npm run play` command.
- Run the development snake client using the `node play.js` command within the snake-client directory locally.
- Movement comes from the `w`, `a`, `s`, `d` keys.
- The key inputs `b`, `h`, and `n` will generate canned messages while playing the game.