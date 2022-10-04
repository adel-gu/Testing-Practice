const capitalize = (string) => {
  if (typeof Number(string) === 'number') {
    throw new Error('Exepct string format only!');
  }
};

module.exports = capitalize;
