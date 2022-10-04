class Calculator {
  static add = (...args) => {
    const sum = args.reduce((total, num) => {
      return total + num;
    });

    return sum;
  };

  static subtract = (...args) => {
    const sub = args.reduce((total, num) => {
      return total - num;
    });

    return sub;
  };

  static divide = (...args) => {
    for (let i = 1; i < args.length; i++) {
      if (args[i] === 0) {
        throw new Error('Invalid Division!');
      }
    }

    const divided = args.reduce((total, num) => {
      return total / num;
    });

    return divided;
  };

  static multiply = (...args) => {
    const multiply = args.reduce((total, num) => {
      return total * num;
    });

    return multiply;
  };
}

module.exports = Calculator;
