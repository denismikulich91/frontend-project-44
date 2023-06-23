import gameEngine from '../src/index.js';

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

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const rule = () => {
  const taskPack = [];
  const number = Math.floor(Math.random() * 100);
  taskPack.push(number);
  taskPack.push(isPrime(number) ? 'yes' : 'no');
  return taskPack;
};

export default () => {
  gameEngine(rule, task);
};
