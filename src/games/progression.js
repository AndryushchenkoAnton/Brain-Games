import getRandomInRange from '../utils.js';

const correctans = (step, pos, first) => first + (step * pos);
const gameProgression = () => {
  const progLeng = getRandomInRange(5, 10);
  const emptyEl = getRandomInRange(2, progLeng);
  const stepPr = getRandomInRange(5, 10);
  const firstEl = getRandomInRange(1, 100);
  let questionline = ' ';
  let start = true;
  for (let i = 0; i < progLeng; i += 1) {
    if (i === emptyEl) {
      questionline = `${questionline} ..`;
    } else if (start) {
      questionline = `${questionline} ${firstEl}`;
      start = false;
    } else {
      const element = firstEl + (i * stepPr);
      questionline = `${questionline}${element}`;
    }
  }
  const question = questionline;
  const answer = correctans(stepPr, emptyEl, firstEl);
  return [question, answer];
};

export default gameProgression;
