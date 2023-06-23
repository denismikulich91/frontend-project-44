import gameEngine from '../src/index.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const task = 'Find the greatest common divisor of given numbers.';
const rule = () => {
  const taskPack = [];
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  taskPack.push(`${number1} ${number2}`);
  taskPack.push(gcd(number1, number2));
  return taskPack;
};

export default () => {
  gameEngine(rule, task);
};
