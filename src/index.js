import readlineSync from 'readline-sync';
import greetings from './cli.js';

const quastionArr = [
  'Answer "yes" if the number is even, otherwise answer "no".',
  'What is the result of the expression?',
];
const games = [
  'gameEven',
  'gameCalc',
];

const gameStart = (game) => {
  const name = greetings();
  const gameName = game.name;
  console.log(quastionArr[games.indexOf(gameName)]);
  for (let i = 0; i < 3; i += 1) {
    const coranswer = game();
    const answer = readlineSync.question('Your answer: ');
    if (coranswer.toString() === answer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${coranswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export default gameStart;
