import readlineSync from 'readline-sync';

let userName = '';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

greeting()

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(100);
    console.log('Question: ', number);
    const answerUser = readlineSync.question('Your answer: ');
    const checking1 = (number % 2 === 0) && (answerUser === 'yes');
    const checking2 = (number % 2 !== 0) && (answerUser === 'no');
    if (checking1 === true || checking2 === true) {
      console.log('Correct!');
    }
    else {
      const rightAnswer = (number % 2 === 0) ? 'yes' : 'no';
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was ${rightAnswer}'. /n Let's try again, ${userName}!`);
    return console.log(`Let's try again, ${userName}!`);
    }

  
  }
  console.log(`Congratulations, ${userName}!`);

}


export default evenGame;

     