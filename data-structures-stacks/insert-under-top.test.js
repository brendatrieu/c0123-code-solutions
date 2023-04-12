import Stack from './lib/stack';
import insertUnderTop from './insert-under-top';

describe('insertUnderTop(stack, value)', function () {

  describe('when `stack` is empty', () => {

    it('does not modify `stack`', () => {
      const stack = new Stack();
      expect(() => {
        insertUnderTop(stack, 12);
      }).not.toThrow();
      expect(stack.peek()).toEqual(undefined);
    });

  });

  describe('when `stack` is not empty', () => {

    it('inserts `value` underneath the top value of `stack`', () => {

      const stack1 = new Stack(52);
      insertUnderTop(stack1, 78);
      insertUnderTop(stack1, 13);
      insertUnderTop(stack1, 94);
      expect(stack1.print()).toEqual(
        'Stack { 78 <- 13 <- 94 <- 52 }'
      );

      const stack2 = new Stack(null);
      insertUnderTop(stack2, 'o');
      expect(stack2.print()).toEqual(
        'Stack { "o" <- null }'
      );

    });

  });

});
