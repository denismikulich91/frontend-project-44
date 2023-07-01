import readlineSync from 'readline-sync';

export default (rule, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${name}!`);
  console.log(task);
  let correctAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    const taskPack = rule();
    const taskValue = taskPack[1];
    const answer = readlineSync.question(`Question: ${taskPack[0]}\n`);
    if (taskValue === answer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`${answer} is a wrong answer. The right answer is ${taskValue}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
