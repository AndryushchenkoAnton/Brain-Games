import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const getGCD = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return getGCD(number2, number1 % number2);
};

const generateRound = () => {
  const firstNumber = getRandomInRange(1, 100);
  const secondNumber = getRandomInRange(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGCD(firstNumber, secondNumber).toString();
  return [question, answer];
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => runEngine(generateRound, description);
