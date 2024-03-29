import { getRandomInt } from './even.js';
import { startGame } from './index.js';

const gameDescription = 'What is the result of the expression?';

const calculatedExpression = (numberOne, numberTwo, operator) => {
  switch (operator) {
    case '+':
      return (numberOne + numberTwo);
    case '-':
      return (numberOne - numberTwo);
    case '*':
      return (numberOne * numberTwo);
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const numberOne = getRandomInt(1, 50);
  const numberTwo = getRandomInt(1, 50);
  const operator = operators[getRandomInt(0, 2)];
  const userQuestion = `${numberOne} ${operator} ${numberTwo}`;
  const rightAnswer = String(calculatedExpression(numberOne, numberTwo, operator));
  return [userQuestion, rightAnswer];
};

const evenGame = () => startGame(gameDescription, generateRound);

export default evenGame;
