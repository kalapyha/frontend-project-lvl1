import randomNumber from '../numbers';
import gameInit from '..';

const brainEvenGameIntro = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNum = (num) => num % 2 === 0; // Check if num is even

/* Game Runner */
export const gameRunner = () => {
  const num = randomNumber(1, 100);
  const question = num;
  const correctResult = isEvenNum(num) ? 'yes' : 'no';
  return [correctResult, question];
};

export default () => {
  gameInit(brainEvenGameIntro, gameRunner);
};
