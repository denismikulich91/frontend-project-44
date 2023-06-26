export default (minInt, maxInt) => {
  const min = Math.ceil(minInt);
  const max = Math.floor(maxInt);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
