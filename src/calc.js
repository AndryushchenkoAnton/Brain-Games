const getrand = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const getrandop = () => Math.floor(Math.random() * (2 + 1));
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
  const firstNumb = getrand();
  const secNumb = getrand();
  const op = getrandop();

  console.log(`Question: ${firstNumb} ${operArr[op]} ${secNumb}`);
  return calculate(firstNumb, operArr[op], secNumb);
};

export default gameCalc;
