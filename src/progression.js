const getrandProgStart = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const getrandProgLeng = () => Math.floor(Math.random() * (10 - 5 + 1)) + 5;
const getrandProgStep = () => Math.floor(Math.random() * (10 - 5 + 1)) + 5;
const getrandProgEl = (leng) => Math.floor(Math.random() * (leng - 2 + 1)) + 1;
const correctans = (step, pos, first) => first + (step * pos);
const gameProgression = () => {
  const progLeng = getrandProgLeng();
  const emptyEl = getrandProgEl(progLeng);
  const stepPr = getrandProgStep();
  const firstEl = getrandProgStart();
  const progArr = [];
  let quastionline = '';
  let start = true;
  for (let i = 0; i < progLeng; i += 1) {
    if (i === emptyEl) {
      progArr.push('..');
    } else if (start) {
      progArr.push(firstEl);
      start = false;
    } else {
      progArr.push(firstEl + (i * stepPr));
    }
    quastionline = `${quastionline} ${progArr[i]}`;
  }
  console.log(`Question:${quastionline}`);
  return correctans(stepPr, emptyEl, firstEl);
};

export default gameProgression;
