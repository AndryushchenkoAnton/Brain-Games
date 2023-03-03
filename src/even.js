const getrand = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const numbtype = (numb) => (numb % 2 === 0 ? 'yes' : 'no');
const gameEven = () => {
  const curnumb = getrand();
  console.log(`Question: ${curnumb}`);
  return numbtype(curnumb);
};
export default gameEven;
