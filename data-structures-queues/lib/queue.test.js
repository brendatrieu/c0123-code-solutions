import Queue from './queue';

describe('class Queue {}', () => {

  describe('new Queue()', () => {

    it('returns an object with enqueue() and dequeue() methods', () => {
      const queue = new Queue();
      expect(typeof queue.enqueue).toEqual('function');
      expect(typeof queue.dequeue).toEqual('function');
    });

  });

  describe('queue.enqueue(value)', () => {

    it('requires a `value` argument', () => {
      const queue = new Queue();
      expect(() => {
        queue.enqueue();
      }).toThrow(TypeError, 'queue.enqueue() requires a value argument');
    });

    it('rejects an undefined `value` argument', () => {
      const queue = new Queue();
      expect(() => {
        queue.enqueue(undefined);
      }).toThrow(TypeError, 'queue.enqueue(value) received undefined');
    });

    it('adds `value` to the end of `queue`', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(true);
      queue.enqueue(null);
      queue.enqueue({});
      queue.enqueue([]);
      queue.enqueue('data');
    });

  });

  describe('queue.peek()', () => {

    describe('when `queue` is empty', () => {

      it('returns undefined', () => {
        const queue = new Queue();
        const value = queue.peek();
        expect(value).toEqual(undefined);
      });

    });

    describe('when `queue` is not empty', () => {

      it('returns the first-in value, but doesn\'t remove it', () => {
        const queue = new Queue(1, 2, 3);
        expect(queue.peek()).toEqual(1);
        expect(queue.peek()).toEqual(1);
        expect(queue.peek()).toEqual(1);
      });

    });

  });

  describe('queue.dequeue()', () => {

    describe('when `queue` is empty', () => {

      it('returns undefined', () => {
        const queue = new Queue();
        const value = queue.dequeue();
        expect(value).toEqual(undefined);
      });

    });

    describe('when `queue` is not empty', () => {

      it('removes and returns the first-in value', () => {
        const queue = new Queue(1, 2, 3);
        expect(queue.dequeue()).toEqual(1);
        expect(queue.dequeue()).toEqual(2);
        expect(queue.dequeue()).toEqual(3);
        expect(queue.dequeue()).toEqual(undefined);
      });

    });

  });

  describe('queue.print()', () => {

    describe('when `queue` is empty', () => {

      it('shows "Queue { <empty> }"', () => {
        const queue = new Queue();
        expect(queue.print()).toEqual('Queue { <empty> }');
      });

    });

    describe('when `queue` is not empty', () => {

      it('shows "Queue { value 1 <- value 2 <- ... <- value N }"', () => {
        const queue = new Queue('a', 'b', 'c');
        expect(queue.print()).toEqual('Queue { "a" <- "b" <- "c" }');
      });

    });

  });

});
