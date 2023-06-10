import gameEngine from '../src/index.js';

const isPrime = (num) => {
  if (num <= 1) {
      return false;
  }
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return true;
}

const rule = () => {
  const taskPack = [];
  const number = Math.floor(Math.random() * 100);
  taskPack.push(number);
  taskPack.push(isPrime(number) ? 'yes' : 'no');
  return taskPack;
};

gameEngine(rule, 'prime');
