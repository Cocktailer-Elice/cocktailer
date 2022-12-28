export const createRandomPassword = () => {
  let randomPassword = '';
  const uppercases = ['A', 'H', 'Z', 'K', 'H'];
  const lowercases = ['a', 'b', 'h', 'l', 'x', 'y', 't'];
  const oddCahracters = ['!', '*', '%'];
  randomPassword +=
    oddCahracters[Math.floor(Math.random() * oddCahracters.length)];
  randomPassword += lowercases[Math.floor(Math.random() * lowercases.length)];
  randomPassword += uppercases[Math.floor(Math.random() * uppercases.length)];
  randomPassword += lowercases[Math.floor(Math.random() * lowercases.length)];
  randomPassword += uppercases[Math.floor(Math.random() * uppercases.length)];
  randomPassword += lowercases[Math.floor(Math.random() * lowercases.length)];
  randomPassword += Math.floor(Math.random() * 10);
  randomPassword += Math.floor(Math.random() * 10);

  return randomPassword;
};
