import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const isEven = (num) => num % 2 === 0;
const generateRound = () => {
  const currentNumber = getRandomInRange(1, 100);
  const question = ` ${currentNumber}`;
  const answer = isEven(currentNumber) ? 'yes' : 'no';
  return [question, answer];
};

const Description = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => { runEngine(generateRound, Description); };
