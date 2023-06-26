import gameEngine from '../src/index.js';
import getRandomInt from '../src/utils.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const gcdTask = 'Find the greatest common divisor of given numbers.';
const rule = () => {
  const taskPack = [];
  const gcdNumber1 = getRandomInt(0, 100);
  const gcdNumber2 = getRandomInt(0, 100);
  taskPack.push(`${gcdNumber1} ${gcdNumber2}`);
  taskPack.push(String(gcd(gcdNumber1, gcdNumber2)));
  return taskPack;
};

export default () => {
  gameEngine(rule, gcdTask);
};
