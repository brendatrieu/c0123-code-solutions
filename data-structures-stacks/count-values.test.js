import Stack from './lib/stack';
import countValues from './count-values';

describe('countValues(stack)', () => {

  it('returns the number of values in `stack`', () => {
    expect(countValues(new Stack())).toEqual(0);
    expect(countValues(new Stack(92, 13, 9))).toEqual(3);
    expect(countValues(new Stack(null, false, 0, NaN, ''))).toEqual(5);
  });

});
