module.exports = isoString => {
  const isISOString = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i.test(
    isoString
  );

  if (!isISOString) {
    return isoString;
  }

  return isoString.substr(0, 10);
};
