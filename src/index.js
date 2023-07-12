import readlineSync from 'readline-sync';

export default (rule, task) => {
  const numberOfTries = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${name}!`);
  console.log(task);
  for (let i = 0; i < numberOfTries; i += 1) {
    const [question, taskValue] = rule();
    const answer = readlineSync.question(`Question: ${question}\n`);
    if (taskValue !== answer) {
      console.log(`${answer} is a wrong answer. The right answer is ${taskValue}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
