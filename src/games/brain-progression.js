import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const range = (startNumber) => {
  const result = [];
  for (let i = startNumber; i < startNumber + getRandomInt(10, 20); i += 2) {
    result.push(i);
  }
  return result;
};
const progressionTask = 'What number is missing in the progression?';
const rule = () => {
  const taskPack = [];
  const progressionStartNumber = getRandomInt(0, 100);
  const progressionArray = range(progressionStartNumber);
  const randPick = getRandomInt(0, progressionArray.length - 1);
  const answer = progressionArray[randPick];
  progressionArray[randPick] = '..';
  const question = progressionArray.join(' ');
  taskPack.push(question);
  taskPack.push(String(answer));
  return taskPack;
};

export default () => {
  gameEngine(rule, progressionTask);
};
