import Stack from './stack';

describe('class Stack {}', () => {

  describe('new Stack()', () => {

    it('returns an object with push(), pop(), and peek() methods', () => {
      const stack = new Stack();
      expect(typeof stack.push).toEqual('function');
      expect(typeof stack.pop).toEqual('function');
      expect(typeof stack.peek).toEqual('function');
    });

  });

  describe('stack.push(value)', () => {

    it('requires a `value` argument', () => {
      const stack = new Stack();
      expect(() => {
        stack.push();
      }).toThrow(TypeError, 'stack.push() requires a value argument');
    });

    it('rejects an undefined `value` argument', () => {
      const stack = new Stack();
      expect(() => {
        stack.push(undefined);
      }).toThrow(TypeError, 'stack.push(value) received undefined');
    });

    it('adds `value` to the top of `stack`', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(true);
      stack.push(null);
      stack.push({});
      stack.push([]);
      stack.push('data');
    });

  });

  describe('stack.peek()', () => {

    describe('when `stack` is empty', () => {

      it('returns undefined', () => {
        const stack = new Stack();
        const value = stack.peek();
        expect(value).toEqual(undefined);
      });

    });

    describe('when `stack` is not empty', () => {

      it('returns the last-in value, but doesn\'t remove it', () => {
        const stack = new Stack(1, 2, 3);
        expect(stack.peek()).toEqual(3);
        expect(stack.peek()).toEqual(3);
        expect(stack.peek()).toEqual(3);
      });

    });

  });

  describe('stack.pop()', () => {

    describe('when `stack` is empty', () => {

      it('returns undefined', () => {
        const stack = new Stack();
        const value = stack.pop();
        expect(value).toEqual(undefined);
      });

    });

    describe('when `stack` is not empty', () => {

      it('removes and returns the last-in value', () => {
        const stack = new Stack(1, 2, 3);
        expect(stack.pop()).toEqual(3);
        expect(stack.pop()).toEqual(2);
        expect(stack.pop()).toEqual(1);
        expect(stack.pop()).toEqual(undefined);
      });

    });

  });

  describe('stack.print()', () => {

    describe('when `stack` is empty', () => {

      it('shows "Stack { <empty> }"', () => {
        const stack = new Stack();
        expect(stack.print()).toEqual('Stack { <empty> }');
      });

    });

    describe('when `stack` is not empty', () => {

      it('shows "Stack { value 1 <- value 2 <- ... <- value N }"', () => {
        const stack = new Stack('a', 'b', 'c');
        expect(stack.print()).toEqual('Stack { "a" <- "b" <- "c" }');
      });

    });

  });

});
