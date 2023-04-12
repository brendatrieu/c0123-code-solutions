import Stack from './lib/stack';
import addToTop from './add-to-top';

describe('addToTop(stack, value)', () => {

  it('adds `value` to the top of `stack`', () => {
    const stack = new Stack();
    addToTop(stack, 81);
    expect(stack.print()).toEqual('Stack { 81 }');
    addToTop(stack, 19);
    expect(stack.print()).toEqual('Stack { 81 <- 19 }');
    addToTop(stack, 27);
    expect(stack.print()).toEqual('Stack { 81 <- 19 <- 27 }');
  });

});
