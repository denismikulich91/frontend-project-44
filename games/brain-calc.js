import gameEngine from '../src/index.js';
const task = 'What is the result of the expression?';
const rule = () => {
  const taskPack = [];
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const operators = ['*', '+', '-'];
  const randomSign = operators[Math.floor(Math.random() * operators.length)];
  const strTask = `${number1} ${randomSign} ${number2}`;
  taskPack.push(strTask);
  if (randomSign === '*') {
    taskPack.push(number1 * number2);
  } else if (randomSign === '+') {
    taskPack.push(number1 + number2);
  } else {
    taskPack.push(number1 - number2);
  }
  return taskPack;
};
export default () => {
  gameEngine(rule, task);
};
