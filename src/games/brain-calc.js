import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const getCalculatedAnswer = (sign, number1, number2) => {
  switch (sign) {
    case '*':
      return (number1 * number2);
    case '+':
      return (number1 + number2);
    case '-':
      return (number1 - number2);
    default:
      return null;
  }
};
const task = 'What is the result of the expression?';
const rule = () => {
  const taskPack = [];
  const brainCalcNumber1 = getRandomInt(0, 10);
  const brainCalcNumber2 = getRandomInt(0, 10);
  const brainCalcOperators = ['*', '+', '-'];
  const randomSign = brainCalcOperators[getRandomInt(0, brainCalcOperators.length - 1)];
  const brainCalAnswer = `${brainCalcNumber1} ${randomSign} ${brainCalcNumber2}`;
  taskPack.push(brainCalAnswer);
  taskPack.push(String(getCalculatedAnswer(randomSign, brainCalcNumber1, brainCalcNumber2)));
  return taskPack;
};
export default () => {
  gameEngine(rule, task);
};
