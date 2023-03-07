import getRandomInRange from '../utils.js';

const numbType = (number) => {
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const gamePrime = () => {
  const curnumb = getRandomInRange(50, 1);
  const question = curnumb;
  const answer = numbType(curnumb);
  return [question, answer];
};

export default gamePrime;
