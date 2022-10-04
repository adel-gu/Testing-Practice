const capitalize = (string) => {
  const test = '/^[A-Za-z]+$';
  if (test.match(string)) {
  }

  throw new Error('Exepct string format only!');
};

module.exports = capitalize;
