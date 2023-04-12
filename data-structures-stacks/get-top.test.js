import Stack from './lib/stack';
import getTop from './get-top';

describe('getTop(stack)', () => {

  describe('when `stack` is empty', () => {

    it('returns undefined', () => {
      const stack = new Stack();
      expect(getTop(stack)).toEqual(undefined);
    });

  });

  describe('when `stack` is not empty', () => {

    it('returns the top value of `stack`', () => {
      const stack = new Stack();
      stack.push(13);
      expect(getTop(stack)).toEqual(13);
      stack.push(9);
      expect(getTop(stack)).toEqual(9);
      stack.push('');
      expect(getTop(stack)).toEqual('');
      stack.push(null);
      expect(getTop(stack)).toEqual(null);
    });

    it('does not modify `stack`', () => {
      const stack = new Stack('head', 'shoulders', 'knees', 'toes');
      getTop(stack);
      expect(stack.print()).toEqual(
        'Stack { "head" <- "shoulders" <- "knees" <- "toes" }'
      );
    });

  });

});
