import readlineSync from 'readline-sync';

const GAME_ROUND = 3;

const gameStart = (game, info) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(info);
  for (let i = 0; i < GAME_ROUND; i += 1) {
    const [question,coranswer] = game();
    console.log(`Question:${question}`);
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
