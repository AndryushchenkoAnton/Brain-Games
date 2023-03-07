#!/usr/bin/env node

import gameEven from '../../src/games/even.js';
import gameStart from '../../src/index.js';

const Description = 'Answer "yes" if the number is even, otherwise answer "no".';

gameStart(gameEven, Description);
