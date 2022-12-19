import { authContants } from './constants';
import { createRandomNumber } from './createRandomNumber';

export const createNickname = async (alcohol: string) => {
  if (alcohol === 'Random') {
    const randomAlcoholSet = authContants.RANDOM_ALCOHOL_SET;
    const randomNumberCount = Math.floor(
      Math.random() * randomAlcoholSet.length,
    );
    alcohol = randomAlcoholSet[randomNumberCount];
  }

  const randomDecoSet = authContants.RANDOM_DECO_SET;
  const randomDecoCount = Math.floor(Math.random() * randomDecoSet.length);
  const decorator = randomDecoSet[randomDecoCount];

  const randomNumber = createRandomNumber(4, true);

  const nickname = `${decorator} ${alcohol} #${randomNumber}`;

  return nickname;
};
