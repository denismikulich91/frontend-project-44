import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const getProgression = (progressionStep=2) => {
  const progressionArray = [];
  const progressionStartNumber = getRandomInt(0, 100);
  for (let i = progressionStartNumber; i < progressionStartNumber + getRandomInt(10, 20); i += progressionStep) {
    progressionArray.push(i);
  }
  const randPick = getRandomInt(0, progressionArray.length - 1);
  const answer = progressionArray[randPick];
  progressionArray[randPick] = '..';
  const question = progressionArray.join(' ');
  return [question, String(answer)];
};
const progressionTask = 'What number is missing in the progression?';
const rule = () => {
  return getProgression();
};

export default () => {
  gameEngine(rule, progressionTask);
};
