import getRandomInRange from '../utils.js';

const numbtype = (numb) => (numb % 2 === 0 ? 'yes' : 'no');
const gameEven = () => {
  const curnumb = getRandomInRange(1, 100);
  const question = ` ${curnumb}`;
  const answer = numbtype(curnumb);
  return [question, answer.toString()];
};

export default gameEven;
