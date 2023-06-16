// TODO: Ask for intents (2 or 4?)
// Why can't run from VSCode shell
// Add a range for the random numbers
// Repalce if else with switch?
// vite and dependencies?

import readlineSync from 'readline-sync';

export default (rule, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${name}!`);
  console.log(task);
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const tasks = rule();
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
  }
};
