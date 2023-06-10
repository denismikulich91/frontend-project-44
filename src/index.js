// TODO: Ask for intents (2 or 4?)
// Why can't run from VSCode shell
// Add a range for the random numbers
// Repalce if else with switch?

import readlineSync from 'readline-sync';

export default (task, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${name}!`);
  if (game === 'even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  } else if (game === 'calc') {
    console.log('What is the result of the expression?');
  } else if (game === 'gcd') {
    console.log('Find the greatest common divisor of given numbers.');
  } else if (game === 'progression') {
    console.log('What number is missing in the progression?');
  } else {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
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
  }
};
