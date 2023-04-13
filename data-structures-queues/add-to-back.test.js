import Queue from './lib/queue';
import addToBack from './add-to-back';

describe('addToBack(queue, value)', () => {

  it('adds `value` to the back of `queue`', () => {
    const queue = new Queue();
    addToBack(queue, 81);
    expect(queue.peek()).toEqual(81);
    addToBack(queue, 19);
    expect(queue.peek()).toEqual(81);
    addToBack(queue, 27);
    expect(queue.peek()).toEqual(81);
    expect(queue.print()).toEqual(
      'Queue { 81 <- 19 <- 27 }'
    );
  });

});
