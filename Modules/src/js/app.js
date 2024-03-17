//import Game,{ GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game';
const { GameSavingData, saveGame, loadGame, default: Game} = require('./game');  

const game = new Game();
game.start();

console.log('app worked');

