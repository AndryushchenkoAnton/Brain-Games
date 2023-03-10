#!/usr/bin/env node

import gameGCD from '../../src/games/gcd.js';
import startGame from '../../src/index.js';

const Description = 'Find the greatest common divisor of given numbers.';

startGame(gameGCD, Description);
