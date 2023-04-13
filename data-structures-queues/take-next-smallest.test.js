import Queue from './lib/queue';
import takeNextSmallest from './take-next-smallest';

describe('takeNextSmallest(queue)', () => {

  describe('when `queue` is empty', () => {

    it('returns undefined', () => {
      const queue = new Queue();
      expect(takeNextSmallest(queue)).toEqual(undefined);
    });

  });

  describe('when `queue` has one value', () => {

    it('returns the value', () => {
      const queue1 = new Queue(89);
      expect(takeNextSmallest(queue1)).toEqual(89);
      const queue2 = new Queue(0);
      expect(takeNextSmallest(queue2)).toEqual(0);
    });

    it('removes the value from `queue`', () => {
      const queue = new Queue(12);
      takeNextSmallest(queue);
      expect(queue.print()).toEqual('Queue { <empty> }');
      queue.enqueue(0);
      takeNextSmallest(queue);
      expect(queue.print()).toEqual('Queue { <empty> }');
    });

  });

  describe('when `queue` has at least two numbers', () => {

    it('returns the first number <= its successor', () => {
      const queue1 = new Queue(13, 64, -19, 94);
      expect(takeNextSmallest(queue1)).toEqual(13);
      const queue2 = new Queue(54, 36, 34, 0, -18, -37, -36, 63);
      expect(takeNextSmallest(queue2)).toEqual(-37);
    });

    it('moves each number > its successor to the back of `queue` until it finds one that isn\'t and removes it', () => {

      const queue1 = new Queue(51, 63, 35, 41);
      takeNextSmallest(queue1);
      expect(queue1.print()).toEqual('Queue { 63 <- 35 <- 41 }');

      const queue2 = new Queue(88, 78, 63, 101, 170, 325, 180, 102, 80, 60, 53, 49);
      takeNextSmallest(queue2);
      takeNextSmallest(queue2);
      takeNextSmallest(queue2);
      expect(queue2.print()).toEqual(
        'Queue { 325 <- 180 <- 102 <- 80 <- 60 <- 53 <- 49 <- 88 <- 78 }'
      );

    });

  });

});
