import Queue from './lib/queue';
import takeFront from './take-front';

describe('takeFront(queue)', () => {

  describe('when `queue` is empty', () => {

    it('returns undefined', () => {
      const queue = new Queue();
      expect(takeFront(queue)).toEqual(undefined);
    });

  });

  describe('when `queue` is not empty', () => {

    it('returns the front value of `queue`', () => {
      const queue1 = new Queue(13);
      expect(takeFront(queue1)).toEqual(13);
      const queue2 = new Queue(13, 9);
      expect(takeFront(queue2)).toEqual(13);
      const queue3 = new Queue(null, '');
      expect(takeFront(queue3)).toEqual(null);
    });

    it('removes the front value from `queue`', () => {
      const queue = new Queue('head', 'shoulders', 'arms', 'hands');
      takeFront(queue);
      expect(queue.print()).toEqual(
        'Queue { "shoulders" <- "arms" <- "hands" }'
      );
    });

  });

});
