import { startGame } from './index.js';
import { getRandomInt } from './even.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomInt(2, 100);
  const userQuestion = number;
  const rightAnswer = (getPrimeNumber(number)) ? 'yes' : 'no';
  return [userQuestion, rightAnswer];
};

const evenGame = () => startGame(gameDescription, generateRound);

export default evenGame;
