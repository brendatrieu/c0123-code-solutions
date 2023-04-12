import Stack from './lib/stack';
import takeTop from './take-top';

describe('takeTop(stack)', () => {

  describe('when `stack` is empty', () => {

    it('returns undefined', () => {
      const stack = new Stack();
      expect(takeTop(stack)).toEqual(undefined);
    });

  });

  describe('when `stack` is not empty', () => {

    it('returns the top value of `stack`', () => {
      const stack = new Stack();
      stack.push(13);
      expect(takeTop(stack)).toEqual(13);
      stack.push(9);
      expect(takeTop(stack)).toEqual(9);
      stack.push('');
      expect(takeTop(stack)).toEqual('');
      stack.push(null);
      expect(takeTop(stack)).toEqual(null);
    });

    it('removes the top value of `stack`', () => {
      const stack = new Stack('head', 'shoulders', 'knees', 'toes');
      takeTop(stack);
      expect(stack.print()).toEqual(
        'Stack { "head" <- "shoulders" <- "knees" }'
      );
    });

  });

});
