const capitalize = require('./capitalize');

describe('Capitalize only string format inputs', () => {
  describe('Checking for string only!', () => {
    test(`Given 3 should produce Error:"Exepct string format only!"`, () => {
      // Arrange
      const string = 3;
      const capitalized_string_Error = 'Exepct string format only!';

      // Act

      // Assert
      expect(() => capitalize(string)).toThrow(capitalized_string_Error);
    });
  });
});
