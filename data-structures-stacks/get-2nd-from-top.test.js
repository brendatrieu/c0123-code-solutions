import Stack from './lib/stack';
import get2ndFromTop from './get-2nd-from-top';

describe('get2ndFromTop(stack)', () => {

  describe('when `stack` is empty', () => {

    it('returns undefined', () => {
      const stack = new Stack();
      expect(get2ndFromTop(stack)).toEqual(undefined);
      expect(stack.print()).toEqual('Stack { <empty> }');
    });

  });

  describe('when `stack` contains one value', () => {

    it('returns undefined', () => {
      expect(get2ndFromTop(new Stack(36))).toEqual(undefined);
      expect(get2ndFromTop(new Stack(null))).toEqual(undefined);
      expect(get2ndFromTop(new Stack('foo'))).toEqual(undefined);
    });

    it('restores `stack` to its original state', () => {

      const stack1 = new Stack(36);
      expect(get2ndFromTop(stack1)).toEqual(undefined);
      expect(stack1.print()).toEqual('Stack { 36 }');

      const stack2 = new Stack(null);
      expect(get2ndFromTop(stack2)).toEqual(undefined);
      expect(stack2.print()).toEqual('Stack { null }');

      const stack3 = new Stack('foo');
      expect(get2ndFromTop(stack2)).toEqual(undefined);
      expect(stack3.print()).toEqual('Stack { "foo" }');

    });

  });

  describe('when `stack` contains more than one value', () => {

    it('returns the 2nd from the top value of `stack`', () => {

      const stack1 = new Stack(92, 13, 9);
      expect(get2ndFromTop(stack1)).toEqual(13);

      const stack2 = new Stack(null, false, 0);
      expect(get2ndFromTop(stack2)).toEqual(false);

      const stack3 = new Stack('foo', 'bar', 'baz');
      expect(get2ndFromTop(stack3)).toEqual('bar');

    });

    it('restores `stack` to its original state', () => {

      const stack1 = new Stack(92, 13, 9);
      get2ndFromTop(stack1);
      expect(stack1.print()).toEqual('Stack { 92 <- 13 <- 9 }');

      const stack2 = new Stack(null, false, 0);
      get2ndFromTop(stack2);
      expect(stack2.print()).toEqual('Stack { null <- false <- 0 }');

      const stack3 = new Stack('foo', 'bar', 'baz');
      get2ndFromTop(stack3);
      expect(stack3.print()).toEqual('Stack { "foo" <- "bar" <- "baz" }');

    });

  });

});
