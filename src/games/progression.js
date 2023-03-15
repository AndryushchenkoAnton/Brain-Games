import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const makeProgression = (first, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(first + step * i);
  }
  return progression;
};

const correctAnswer = (step, pos, first) => first + (step * pos);

const generateRound = () => {
  const progressionLength = getRandomInRange(5, 10);
  const hiddenIndex = getRandomInRange(1, progressionLength - 1);
  const step = getRandomInRange(5, 10);
  const firstElement = getRandomInRange(1, 100);
  const progression = makeProgression(firstElement, step, progressionLength);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  const answer = correctAnswer(step, hiddenIndex, firstElement).toString();
  return [question, answer];
};

const Description = 'What number is missing in the progression?';

export default () => { runEngine(generateRound, Description); };
