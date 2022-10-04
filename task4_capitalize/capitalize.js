const capitalize = (string) => {
  if (typeof Number(string) === 'number') {
    throw new Error('Exepct string in letters format only!');
  }
};

module.exports = capitalize;
