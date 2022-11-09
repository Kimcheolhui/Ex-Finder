export const makeTimes = (): string[] => {
  const times: string[] = [];
  for (let i = 0; i < 25; i++) {
    const toss = i < 10 ? '0' + i.toString() : i.toString();
    times.push(toss);
  }
  return times;
};
