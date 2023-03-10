import getRandomInRange from '../utils.js';

const getGCD = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return getGCD(number2, number1 % number2);
};

const gameGCD = () => {
  const numb1 = getRandomInRange(1, 100);
  const numb2 = getRandomInRange(1, 100);
  const question = ` ${numb1} ${numb2}`;
  const answer = getGCD(numb1, numb2);
  return [question, answer.toString()];
};

export default gameGCD;
