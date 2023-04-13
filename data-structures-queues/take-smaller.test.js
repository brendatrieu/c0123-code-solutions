import Queue from './lib/queue';
import takeSmaller from './take-smaller';

describe('takeSmaller(queue)', () => {

  describe('when `queue` is empty', () => {

    it('returns undefined', () => {
      const queue = new Queue();
      expect(takeSmaller(queue)).toEqual(undefined);
    });

  });

  describe('when `queue` contains one value', () => {

    it('returns the value', () => {
      const queue1 = new Queue(89);
      expect(takeSmaller(queue1)).toEqual(89);
      const queue2 = new Queue(0);
      expect(takeSmaller(queue2)).toEqual(0);
    });

    it('removes the value from `queue`', () => {
      const queue1 = new Queue(12);
      takeSmaller(queue1);
      expect(queue1.peek()).toEqual(undefined);
      const queue2 = new Queue(0);
      takeSmaller(queue2);
      expect(queue2.peek()).toEqual(undefined);
    });

  });

  describe('when `queue` contains at least two values', () => {

    describe('and the first value is smaller than the second', () => {

      it('returns the first value', () => {
        const queue1 = new Queue(48, 67);
        expect(takeSmaller(queue1)).toEqual(48);
        const queue2 = new Queue(-89, 0, 35);
        expect(takeSmaller(queue2)).toEqual(-89);
      });

      it('removes the first value from `queue` and moves the second value to the back of `queue`', () => {
        const queue1 = new Queue(41, 189);
        takeSmaller(queue1);
        expect(queue1.print()).toEqual('Queue { 189 }');
        const queue2 = new Queue(0, 1, 4, 18);
        takeSmaller(queue2);
        expect(queue2.print()).toEqual(
          'Queue { 4 <- 18 <- 1 }'
        );
      });

    });

    describe('and the first value is equal to the second', () => {

      it('returns the value', () => {
        const queue1 = new Queue(8, 8);
        expect(takeSmaller(queue1)).toEqual(8);
        const queue2 = new Queue(0, 0, 0);
        expect(takeSmaller(queue2)).toEqual(0);
      });

      it('removes one value from `queue` and moves one value to the back of `queue`', () => {
        const queue1 = new Queue(9, 9);
        takeSmaller(queue1);
        expect(queue1.print()).toEqual('Queue { 9 }');
        const queue2 = new Queue(73, 73, 3, 9);
        takeSmaller(queue2);
        expect(queue2.print()).toEqual(
          'Queue { 3 <- 9 <- 73 }'
        );
      });

    });

    describe('and the first value is larger than the second', () => {

      it('returns the second value', () => {
        const queue1 = new Queue(52, 12);
        expect(takeSmaller(queue1)).toEqual(12);
        const queue2 = new Queue(23, 0, 9);
        expect(takeSmaller(queue2)).toEqual(0);
      });

      it('moves the first value to the back of `queue` and removes the second value from `queue`', () => {
        const queue1 = new Queue(19, -2);
        takeSmaller(queue1);
        expect(queue1.print()).toEqual('Queue { 19 }');
        const queue2 = new Queue(5, 4, 3, 2);
        takeSmaller(queue2);
        expect(queue2.print()).toEqual('Queue { 3 <- 2 <- 5 }');
      });

    });

  });

});
