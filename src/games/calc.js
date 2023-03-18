import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInRange(0, operators.length - 1)];
};

const calculate = (number1, operation, number2) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;

    default: throw new Error(`Operator ${operation} - is incorrect!`);
  }
};

const generateRound = () => {
  const firstNumber = getRandomInRange(1, 100);
  const secondNumber = getRandomInRange(1, 100);
  const randomIndex = getRandomOperator();
  const answer = calculate(firstNumber, randomIndex, secondNumber).toString();
  const question = `${firstNumber} ${randomIndex} ${secondNumber}`;
  return [question, answer];
};

const description = 'What is the result of the expression?';

export default () => runEngine(generateRound, description);
