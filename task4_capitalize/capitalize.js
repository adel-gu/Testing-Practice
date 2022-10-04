const capitalize = (string) => {
  const letters = /^[a-zA-Z]+$/;

  if (letters.test(string)) {
    return string[0].toUpperCase() + string.substring(1);
  }

  throw new Error('Exepct string in letters format only!');
};

module.exports = capitalize;
