import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const getProgression = (progressionStart, progressionLength, progressionStep) => {
  const progressionArray = [];

  for (let i = progressionStart; i < progressionStart + progressionLength * progressionStep;
    i += progressionStep) {
    progressionArray.push(i);
  }
  return progressionArray;
};

const progressionTask = 'What number is missing in the progression?';
const rule = () => {
  const progressionStartNum = getRandomInt(0, 100);
  const progressionLength = getRandomInt(10, 20);
  const progressionStep = getRandomInt(2, 6);
  const progressionArray = getProgression(progressionStartNum, progressionLength, progressionStep);
  const randPick = getRandomInt(0, progressionArray.length - 1);
  const answer = progressionArray[randPick];
  progressionArray[randPick] = '..';
  const question = progressionArray.join(' ');
  return [question, String(answer)];
};

export default () => {
  gameEngine(rule, progressionTask);
};
