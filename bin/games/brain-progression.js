#!/usr/bin/env node

import gameStart from '../../src/index.js';
import gameProgression from '../../src/games/progression.js';

const Description = 'What number is missing in the progression?';

gameStart(gameProgression, Description);
