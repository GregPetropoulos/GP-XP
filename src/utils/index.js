const formatDate = (date) => {
  return new Intl.DateTimeFormat().format(new Date(date));
};

const truncateString = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + '...' : str;
};

export { truncateString, formatDate };
