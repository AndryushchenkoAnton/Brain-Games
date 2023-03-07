import getRandomInRange from '../utils.js';

const getGCD = (number1, number2) => {
  const min = (number1 - number2) < 0 ? number2 : number1;
  let gcd = 1;
  for (let i = min; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      if (i > gcd) {
        gcd = i;
      }
    }
  }
  return gcd;
};

const gameGCD = () => {
  const numb1 = getRandomInRange(1, 100);
  const numb2 = getRandomInRange(1, 100);
  const question = ` ${numb1} ${numb2}`;
  const answer = getGCD(numb1, numb2);
  return [question, answer];
};

export default gameGCD;
