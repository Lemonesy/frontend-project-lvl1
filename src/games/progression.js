import { getRandomInt } from './even.js';
import {startGame } from './index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const makeProgression = (startProgression, progressionLength, step) => {
const result = [];
for( let i = 0; i <= progressionLength; i += 1) {
  result.push(startProgression + step * i);
}
  return result;
};

const generateRound = () => {
  const startProgression = getRandomInt(1, 9);
  const progressionLength = getRandomInt(3,12);
  const step = getRandomInt(1,10)
  const currentProgression = makeProgression(startProgression, progressionLength, step);
  const hidden = getRandomInt(1, currentProgression.length - 1);
  const rightAnswer = String(currentProgression[hidden]); 
  currentProgression[hidden] = '..';
const userQuestion = currentProgression.join(' ');
  return [userQuestion, rightAnswer];
}







const evenGame = () => startGame(gameDescription, generateRound);

export default evenGame;
