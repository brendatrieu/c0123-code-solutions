import Queue from './lib/queue';
import postpone from './postpone';

describe('postpone(queue)', () => {

  describe('when `queue` is empty', () => {

    it('does nothing', () => {
      const queue = new Queue();
      expect(() => postpone(queue)).not.toThrow();
      expect(queue.peek()).toEqual(undefined);
    });

  });

  describe('when `queue` is not empty', () => {

    it('moves the front value to the back of `queue`', () => {
      const queue1 = new Queue(13);
      postpone(queue1);
      expect(queue1.print()).toEqual('Queue { 13 }');
      const queue2 = new Queue(9, 53, 8);
      postpone(queue2);
      expect(queue2.print()).toEqual('Queue { 53 <- 8 <- 9 }');
      const queue3 = new Queue(null, false, '', 0, 'wat');
      postpone(queue3);
      postpone(queue3);
      postpone(queue3);
      postpone(queue3);
      expect(queue3.print()).toEqual(
        'Queue { "wat" <- null <- false <- "" <- 0 }'
      );
    });

  });

});
