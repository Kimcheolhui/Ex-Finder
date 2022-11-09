type periodType = {
  start: string;
  end: string;
};

export const makeperiodArr = (period: periodType): string[] => {
  const dayArr: string[] = [];
  const startDay = new Date(period.start);
  const endDay = new Date(period.end);
  while (startDay.getTime() <= endDay.getTime()) {
    const monInt = startDay.getMonth() + 1;
    const monStr = monInt < 10 ? '0' + monInt.toString() : monInt.toString();
    const dayInt = startDay.getDate();
    const dayStr = dayInt < 10 ? '0' + dayInt.toString() : dayInt.toString();
    dayArr.push(monStr + '/' + dayStr);
    startDay.setDate(startDay.getDate() + 1);
  }
  return dayArr;
};
