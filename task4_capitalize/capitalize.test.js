const capitalize = require('./capitalize');

describe('Capitalize only string format inputs', () => {
  describe('Checking for string only!', () => {
    test(`Given 3 should produce Error:"Exepct string in letters format only!"`, () => {
      // Arrange
      const number = 3;
      const error = 'Exepct string in letters format only!';

      // Act

      // Assert
      expect(() => capitalize(number)).toThrow(error);
    });

    test(`Given "3" should produce Error:"Exepct string in letters format only!"`, () => {
      // Arrange
      const number_in_string_format = '3';
      const error = 'Exepct string in letters format only!';

      // Act

      // Assert
      expect(() => capitalize(number_in_string_format)).toThrow(error);
    });
  });
});
