#!/usr/bin/env node

import gameStart from '../../src/index.js';
import gameCalc from '../../src/games/calc.js';

const Description = 'What is the result of the expression?';

gameStart(gameCalc, Description);
