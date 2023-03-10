import getRandomInRange from '../utils.js';

const correctAnswer = (step, pos, first) => first + (step * pos);
const gameProgression = () => {
  const progLeng = getRandomInRange(5, 10);
  const emptyEl = getRandomInRange(1, progLeng - 1);
  const stepPr = getRandomInRange(5, 10);
  const firstEl = getRandomInRange(1, 100);
  let questionline = '';
  let start = true;
  for (let i = 0; i < progLeng; i += 1) {
    if (i === emptyEl) {
      questionline = `${questionline} ..`;
    } else if (start) {
      questionline = `${questionline} ${firstEl}`;
      start = false;
    } else {
      const element = firstEl + (i * stepPr);
      questionline = `${questionline} ${element}`;
    }
  }
  const question = questionline;
  const answer = correctAnswer(stepPr, emptyEl, firstEl);
  return [question, answer.toString()];
};

export default gameProgression;
