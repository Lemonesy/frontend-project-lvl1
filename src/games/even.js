import {startGame } from './index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};


const generateRound = () => {
 const userQuestion = getRandomInt(100);
 const rightAnswer = (userQuestion % 2 === 0) ? 'yes' : 'no';
 return [userQuestion, rightAnswer];
};

const evenGame = () => startGame(gameDescription, generateRound);

export default evenGame;

     