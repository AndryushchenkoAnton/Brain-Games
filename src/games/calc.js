import getRandomInRange from '../utils.js';

const calculate = (numb1, operation, numb2) => {
  switch (operation) {
    case '+':
      return numb1 + numb2;
    case '-':
      return numb1 - numb2;
    case '*':
      return numb1 * numb2;
    default:
      return null;
  }
};

const operArr = ['+', '-', '*'];
const gameCalc = () => {
  const firstNumb = getRandomInRange(1, 100);
  const secNumb = getRandomInRange(1, 100);
  const op = getRandomInRange(2, 0);
  const answer = calculate(firstNumb, operArr[op], secNumb);
  const question = ` ${firstNumb} ${operArr[op]} ${secNumb}`;
  return [question, answer];
};

export default gameCalc;
