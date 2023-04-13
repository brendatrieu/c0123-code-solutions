import Queue from './lib/queue';
import takeValueAtIndex from './take-value-at-index';

describe('takeValueAtIndex(queue, index)', () => {

  describe('when `queue` is empty', () => {

    it('returns undefined', () => {
      const queue = new Queue();
      expect(takeValueAtIndex(queue, 0)).toEqual(undefined);
      expect(takeValueAtIndex(queue, 31)).toEqual(undefined);
    });

  });

  describe('when `queue` is not empty', () => {

    it('removes and returns the front value in `queue` after cycling `index` values to the back', () => {
      const queue1 = new Queue(84);
      expect(takeValueAtIndex(queue1, 6)).toEqual(84);
      expect(queue1.print()).toEqual('Queue { <empty> }');
      const queue2 = new Queue(37, 45, 67, 0, 71, 3);
      expect(takeValueAtIndex(queue2, 3)).toEqual(0);
      expect(queue2.print()).toEqual(
        'Queue { 71 <- 3 <- 37 <- 45 <- 67 }'
      );
      const queue3 = new Queue('foo', 'bar', 'baz', 'qux');
      expect(takeValueAtIndex(queue3, 3)).toEqual('qux');
      expect(queue3.print()).toEqual(
        'Queue { "foo" <- "bar" <- "baz" }'
      );
    });

  });

});
