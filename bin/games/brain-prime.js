#!/usr/bin/env node

import gameStart from '../../src/index.js';
import gamePrime from '../../src/games/prime.js';

const Description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

gameStart(gamePrime, Description);
