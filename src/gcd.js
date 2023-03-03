const getrand = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;
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
  const numb1 = getrand();
  const numb2 = getrand();
  console.log(`Question: ${numb1} ${numb2}`);
  return getGCD(numb1, numb2);
};
export default gameGCD;
