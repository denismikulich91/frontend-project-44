import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const rule = () => {
  const taskPack = [];
  const number = String(getRandomInt(0, 100));
  taskPack.push(number);
  taskPack.push(isPrime(number) ? 'yes' : 'no');
  return taskPack;
};

export default () => {
  gameEngine(rule, primeTask);
};
