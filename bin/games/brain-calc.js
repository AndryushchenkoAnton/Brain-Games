#!/usr/bin/env node

import startGame from '../../src/index.js';
import gameCalc from '../../src/games/calc.js';

const Description = 'What is the result of the expression?';

startGame(gameCalc, Description);
