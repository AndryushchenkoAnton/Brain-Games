import readlineSync from 'readline-sync';
import greetings from './cli.js';

const getrand = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const numbtype = (numb) => (numb % 2 === 0 ? 'yes' : 'no');
const coransw = (answer) => (answer === 'yes' ? 'no' : 'yes');
const gameEven = () => {
  const userName = greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const curnumb = getrand();
    console.log(`Question: ${curnumb}`);
    const answer = readlineSync.question('Your answer: ');
    if (numbtype(curnumb) === answer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${coransw(answer)}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export default gameEven;
