import Queue from './lib/queue';
import isEmpty from './is-empty';

describe('isEmpty(queue)', () => {

  describe('when `queue` is empty', () => {

    it('returns true', () => {
      const queue = new Queue();
      expect(isEmpty(queue)).toEqual(true);
    });

  });

  describe('when `queue` is not empty', () => {

    it('returns false', () => {
      const queue1 = new Queue(13);
      expect(isEmpty(queue1)).toEqual(false);
      const queue2 = new Queue(9);
      expect(isEmpty(queue2)).toEqual(false);
      const queue3 = new Queue('');
      expect(isEmpty(queue3)).toEqual(false);
      const queue4 = new Queue(null);
      expect(isEmpty(queue4)).toEqual(false);
    });

    it('does not modify `queue`', () => {
      const queue = new Queue('head', 'shoulders', 'arms', 'hands');
      isEmpty(queue);
      expect(queue.print()).toEqual(
        'Queue { "head" <- "shoulders" <- "arms" <- "hands" }'
      );
    });

  });

});
