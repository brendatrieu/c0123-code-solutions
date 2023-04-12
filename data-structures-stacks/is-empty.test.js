import Stack from './lib/stack';
import isEmpty from './is-empty';

describe('isEmpty(stack)', function () {

  describe('when `stack` contains no values', () => {

    it('returns true', () => {
      const stack = new Stack();
      expect(isEmpty(stack)).toEqual(true);
    });

  });

  describe('when `stack` contains one or more values', () => {

    it('returns false', () => {
      const stack = new Stack();
      stack.push(13);
      expect(isEmpty(stack)).toEqual(false);
      stack.push(9);
      expect(isEmpty(stack)).toEqual(false);
      stack.push('');
      expect(isEmpty(stack)).toEqual(false);
      stack.push(null);
      expect(isEmpty(stack)).toEqual(false);
    });

    it('does not modify `stack`', () => {
      const stack = new Stack('head', 'shoulders', 'knees', 'toes');
      isEmpty(stack);
      expect(stack.print()).toEqual(
        'Stack { "head" <- "shoulders" <- "knees" <- "toes" }'
      );
    });

  });

});
