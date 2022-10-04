const reverseString = require('./reverseString');

describe('Reverse a given string', () => {
  test(`'Hello' should become 'olleh'`, () => {
    // Arrange
    const hello = 'Hello';
    const helloReversed = 'olleH';

    // Act
    const stringReversed = reverseString(hello);

    // Assert
    expect(stringReversed).toBe(helloReversed);
  });
});
