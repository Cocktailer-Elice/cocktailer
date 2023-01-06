export const timeFormat = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};

export const transDate = (stringDate: string) => {
  return new Date(stringDate).toLocaleString('ko-KR', {
    timeZone: 'Asia/Seoul',
  });
};
