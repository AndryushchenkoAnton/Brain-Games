#!/usr/bin/env node

import gameEven from '../../src/games/even.js';
import startGame from '../../src/index.js';

const Description = 'Answer "yes" if the number is even, otherwise answer "no".';

startGame(gameEven, Description);
