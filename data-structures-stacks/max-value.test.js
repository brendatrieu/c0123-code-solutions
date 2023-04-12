import Stack from './lib/stack';
import maxValue from './max-value';

describe('maxValue(stack)', () => {

  describe('when `stack` is empty', () => {

    it('returns -Infinity', () => {
      const stack = new Stack();
      expect(maxValue(stack)).toEqual(-Infinity);
    });

  });

  describe('when `stack` is not empty', () => {

    it('returns the maximum value in `stack`', () => {

      const stack1 = new Stack(45, 26, 34, 85, 37, 0);
      expect(maxValue(stack1)).toEqual(85);

      const stack2 = new Stack(-847626, -9234752, -7444);
      expect(maxValue(stack2)).toEqual(-7444);

      const stack3 = new Stack(-Infinity, 18, 123, -5);
      expect(maxValue(stack3)).toEqual(123);

    });

  });

});
