const getrandNumb = () => Math.floor(Math.random() * (50 - 1 + 1)) + 1;
const numbType = (number) => {
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const gamePrime = () => {
  const curnumb = getrandNumb();
  console.log(`Question: ${curnumb}`);
  return numbType(curnumb);
};

export default gamePrime;
