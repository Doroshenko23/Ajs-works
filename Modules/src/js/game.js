 //import Character from './domain';
 const { default: Character } = require('./domain');

class Game {
    start() {
      console.log('game started');
    }
  }
  
  /*exsport*/class GameSavingData {
  }
  
  /*exsport*/function readGameSaving() {
  }
  
  /*exsport*/function writeGameSaving() {
  }

  //export default Game;

  module.exports = {
    GameSavingData, 
    saveGame: readGameSaving ,
    loadGame: writeGameSaving,
    default: Game
  } 

  