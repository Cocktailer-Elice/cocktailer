export const createRandomNumber = (digit: number, isNumber: boolean) => {
  let randomNumber = '';
  for (let sequence = 1; sequence <= digit; sequence++) {
    const randomNumberDigit = Math.floor(Math.random() * 10);
    randomNumber += '' + randomNumberDigit;
  }
  return isNumber ? +randomNumber : randomNumber;
};
