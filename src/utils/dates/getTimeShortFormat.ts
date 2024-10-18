const getTimeShortFormat = (str: string | Date) => {
  const date = str instanceof Date ? str : new Date(str);
  const copyDate = new Date(date.getTime());

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const startOfToday = today.getTime();
  const startOfDate = copyDate.setHours(0, 0, 0, 0);

  if (startOfDate === startOfToday && date) {
    return date.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
    });
  } else if (date) {
    return date.toLocaleDateString(undefined, {
      day: '2-digit',
      month: 'short',
    });
  } else {
    return null;
  }
};

export default getTimeShortFormat;
