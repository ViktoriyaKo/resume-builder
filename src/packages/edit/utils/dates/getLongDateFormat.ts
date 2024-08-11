const getLongDateFormat = (date: string | Date, locale = 'en') => {
  return date
    ? new Date(date).toLocaleString(locale, {
        year: 'numeric',
        month: 'long',
        // day: 'numeric',
      })
    : null;
};

export default getLongDateFormat;
