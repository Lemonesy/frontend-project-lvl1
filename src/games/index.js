import readlineSync from 'readline-sync';

const maxRoundCount = 3;

const startGame = (gameDescription, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 0; i < maxRoundCount; i += 1) {
    const [userQuestion, rightAnswer] = generateRound();
    console.log(`Question: ${userQuestion}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (rightAnswer === answerUser) {
      console.log('Correct!');
    } else {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export {
  startGame,
  maxRoundCount,
};
