import gameEngine from '../src/index.js';
import getRandomInt from '../src/utils.js';

const isEven = (number) => (number % 2 === 0);
const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const rule = () => {
  const taskPack = [];
  const number = getRandomInt(0, 100);
  taskPack.push(String(number));
  taskPack.push(isEven(number) ? 'yes' : 'no');
  return taskPack;
};
export default () => {
  gameEngine(rule, task);
};
