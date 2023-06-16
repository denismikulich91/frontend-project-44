import gameEngine from '../src/index.js';

const getRandomInt = () => {
  const min = Math.ceil(10);
  const max = Math.floor(20);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

const range = (startNumber) => {
  let result = [];
  for (let i = startNumber; i < startNumber + getRandomInt(); i += 2) {
      result.push(i);
  }
  return result;
}

const task = 'What number is missing in the progression?';
const rule = () => {
  const taskPack = [];
  const startnumber = Math.floor(Math.random() * 100);
  const taskArray = range(startnumber);
  const randPick = Math.floor(Math.random() * taskArray.length);
  const answer = taskArray[randPick]
  taskArray[randPick] = '..'
  const qestion = taskArray.join(' ')
  taskPack.push(qestion);
  taskPack.push(answer);
  return taskPack;
};

export default () => {
  gameEngine(rule, task);
};