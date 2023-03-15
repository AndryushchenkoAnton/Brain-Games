import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const isPrime = (number) => {
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const generateRound = () => {
  const currentNumber = getRandomInRange(50, 1);
  const question = ` ${currentNumber}`;
  const answer = isPrime(currentNumber) ? 'yes' : 'no';
  return [question, answer];
};

const Description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => { runEngine(generateRound, Description); };
