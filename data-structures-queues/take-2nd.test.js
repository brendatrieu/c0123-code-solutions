import Queue from './lib/queue';
import take2nd from './take-2nd';

describe('take2nd(queue)', () => {

  describe('when `queue` is empty', () => {

    it('returns undefined', () => {
      const queue = new Queue();
      expect(take2nd(queue)).toEqual(undefined);
    });

  });

  describe('when `queue` contains one value', () => {

    it('returns the value', () => {
      const queue1 = new Queue(72);
      expect(take2nd(queue1)).toEqual(72);
      const queue2 = new Queue(null);
      expect(take2nd(queue2)).toEqual(null);
    });

  });

  describe('when `queue` contains at least two values', () => {

    it('returns the 2nd value in `queue`', () => {
      const queue1 = new Queue(48, 67);
      expect(take2nd(queue1)).toEqual(67);
      const queue2 = new Queue(26, 59, 35);
      expect(take2nd(queue2)).toEqual(59);
    });

    it('moves the front value in `queue` to the back of `queue` and removes the 2nd value', () => {
      const queue = new Queue(false, '', null, 'hi');
      take2nd(queue);
      expect(queue.print()).toEqual(
        'Queue { null <- "hi" <- false }'
      );
    });

  });

});
