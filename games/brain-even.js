import gameEngine from '../src/index.js';
const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const rule = () => {
  const taskPack = [];
  const number = Math.floor(Math.random() * 100);
  taskPack.push(number);
  taskPack.push(number % 2 === 0 ? 'yes' : 'no');
  return taskPack;
};
export default () => {
  gameEngine(rule, task);
};
