import Queue from './lib/queue';
import getFront from './get-front';

describe('getFront(queue)', () => {

  describe('when `queue` is empty', () => {

    it('returns undefined', () => {
      const queue = new Queue();
      expect(getFront(queue)).toEqual(undefined);
    });

  });

  describe('when `queue` is not empty', () => {

    it('returns the front value of `queue`', () => {
      const queue1 = new Queue(13);
      expect(getFront(queue1)).toEqual(13);
      const queue2 = new Queue(13, 9);
      expect(getFront(queue2)).toEqual(13);
      const queue3 = new Queue(null, '');
      expect(getFront(queue3)).toEqual(null);
    });

    it('does not modify `queue`', () => {
      const queue = new Queue('head', 'shoulders', 'arms', 'hands');
      getFront(queue);
      expect(queue.print()).toEqual(
        'Queue { "head" <- "shoulders" <- "arms" <- "hands" }'
      );
    });

  });

});
