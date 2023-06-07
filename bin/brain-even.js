import readlineSync from 'readline-sync';

const evenGame = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const number = Math.floor(Math.random() * 100);
    const answer = readlineSync.question(`Question: ${number}`);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (correctAnswer === answer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`${answer} is a wrong answer. The right answer is ${correctAnswer}.`);
      break;
    }
  }
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
evenGame();
