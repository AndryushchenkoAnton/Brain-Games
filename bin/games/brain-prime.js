#!/usr/bin/env node

import startGame from '../../src/index.js';
import gamePrime from '../../src/games/prime.js';

const Description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

startGame(gamePrime, Description);
