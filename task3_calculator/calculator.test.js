const Calculator = require('./calculator');

describe('Simple Calculator Class, with 4 methods', () => {
  describe('The add method:', () => {
    test(`Adding 1 + 1 should equal 2`, () => {
      // Arrange
      const a = 1;
      const b = 1;
      const add_a_b = 2;

      // Act
      const result = Calculator.add(a, b);

      // Asserts
      expect(result).toEqual(add_a_b);
    });

    test(`Adding 10 + 10 should equal 20`, () => {
      // Arrange
      const a = 10;
      const b = 10;
      const add_a_b = 20;

      // Act
      const result = Calculator.add(a, b);

      // Asserts
      expect(result).toEqual(add_a_b);
    });

    test(`Adding 13 + 11 + 10 should equal 34`, () => {
      // Arrange
      const a = 13;
      const b = 11;
      const c = 10;
      const add_a_b_c = 34;

      // Act
      const result = Calculator.add(a, b, c);

      // Asserts
      expect(result).toEqual(add_a_b_c);
    });
  });

  describe('The subtract method:', () => {
    test(`Subtracting 1 - 1 should equal 0`, () => {
      // Arrange
      const a = 1;
      const b = 1;
      const sub_a_b = 0;

      // Act
      const result = Calculator.subtract(a, b);

      // Asserts
      expect(result).toEqual(sub_a_b);
    });

    test(`Subtracting 5 - 10 should equal -5`, () => {
      // Arrange
      const a = 5;
      const b = 10;
      const sub_a_b = -5;

      // Act
      const result = Calculator.subtract(a, b);

      // Asserts
      expect(result).toEqual(sub_a_b);
    });

    test(`Subtracting 13 - 11 - 1 should equal 1`, () => {
      // Arrange
      const a = 13;
      const b = 11;
      const c = 1;
      const add_a_b_c = 1;

      // Act
      const result = Calculator.subtract(a, b, c);

      // Asserts
      expect(result).toEqual(add_a_b_c);
    });
  });

  describe('The divide method:', () => {
    test(`Dividing 1 / 1 should equal 1`, () => {
      // Arrange
      const a = 1;
      const b = 1;
      const div_a_b = 1;

      // Act
      const result = Calculator.divide(a, b);

      // Asserts
      expect(result).toEqual(div_a_b);
    });

    test(`Dividing 3 / 2 should equal 1.5`, () => {
      // Arrange
      const a = 3;
      const b = 2;
      const div_a_b = 1.5;

      // Act
      const result = Calculator.divide(a, b);

      // Asserts
      expect(result).toEqual(div_a_b);
    });

    test(`Dividing 13 / 0 should produce Invalid Division! Error`, () => {
      // Arrange
      const a = 13;
      const b = 0;
      const div_a_b = 'Invalid Division!';

      // Act

      // Asserts
      expect(() => Calculator.divide(a, b)).toThrow(div_a_b);
    });
  });

  describe('The multiply method:', () => {
    test(`multiplying 1 * 1 should equal 1`, () => {
      // Arrange
      const a = 1;
      const b = 1;
      const multi_a_b = 1;

      // Act
      const result = Calculator.multiply(a, b);

      // Asserts
      expect(result).toEqual(multi_a_b);
    });

    test(`multiplying 10 * 1000000 should equal 10000000`, () => {
      // Arrange
      const a = 10;
      const b = 1000000;
      const multi_a_b = 10000000;

      // Act
      const result = Calculator.multiply(a, b);

      // Asserts
      expect(result).toEqual(multi_a_b);
    });

    test(`multiplying 7 * 5 * 9 should equal 315`, () => {
      // Arrange
      const a = 7;
      const b = 5;
      const c = 9;
      const multi_a_b_c = 315;

      // Act
      const result = Calculator.multiply(a, b, c);

      // Asserts
      expect(result).toEqual(multi_a_b_c);
    });
  });
});
