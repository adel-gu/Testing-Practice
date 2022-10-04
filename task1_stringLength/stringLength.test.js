const stringLength = require('./stringLength');

describe('Count string characters', () => {
  describe('when string length range in 1 and 10', () => {
    test(`"javascript" string characters count is 10`, () => {
      // Arrange
      const string = 'javascript';
      const string_Counts = 10;

      // Act
      const result = stringLength(string);

      // Asserts
      expect(result).toBe(string_Counts);
    });
  });

  describe('when string length out of range of 1 and 10', () => {
    //Expectation 1
    test(`"" empty string characters count will throw an error!`, () => {
      // Arrange
      const string = '';
      const errorMsg = 'string length is out of range!';

      // Act

      // Asserts
      expect(() => stringLength(string)).toThrow(errorMsg);
    });

    //Expectation 2
    test(`"javascript is awesome" long string characters count will throw an error!`, () => {
      // Arrange
      const string = 'javascript is awesome';
      const errorMsg = 'string length is out of range!';

      // Act

      // Asserts
      expect(() => stringLength(string)).toThrow(errorMsg);
    });
  });
});
