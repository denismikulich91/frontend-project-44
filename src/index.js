import readlineSync from 'readline-sync';

export default (task, game) => {
  const name = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${name}!`);
  if (game === 'even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  } else if (game === 'calc') {
    console.log('What is the result of the expression?');
  }
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const tasks = task();
    const number = tasks[1];
    const answer = readlineSync.question(`Question: ${tasks[0]}\n`);
    if (number == answer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`${answer} is a wrong answer. The right answer is ${number}.`);
      break;
    }
  }
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  };
}