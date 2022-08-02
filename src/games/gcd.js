import { getRandomInt } from './even.js';
import { startGame } from './index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getDivisor = (numberOne, numberTwo) => {
  let result = 0;
  if (numberOne === 0 || numberTwo === 0) {
    return 0;
  }
  for (let i = 1; i <= numberOne && i <= numberTwo; i += 1) {
    if (numberOne % i === 0 && numberTwo % i === 0) {
      result = i;
    }
  }
  return result;
};

const generateRound = () => {
  const numberOne = getRandomInt(50);
  const numberTwo = getRandomInt(50);
  const userQuestion = `${numberOne} ${numberTwo}`;
  const rightAnswer = String(getDivisor(numberOne, numberTwo));
  return [userQuestion, rightAnswer];
};

const evenGame = () => startGame(gameDescription, generateRound);

export default evenGame;
