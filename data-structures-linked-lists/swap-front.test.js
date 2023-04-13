import LinkedList from './lib/linked-list';
import swapFront from './swap-front';

describe('swapFront(list)', () => {

  describe('when `list` contains one value', () => {

    it('returns `list`', () => {
      const list = new LinkedList('Bruce');
      const newList = swapFront(list);
      expect(newList).toEqual(list);
    });

    it('does not modify `list`', () => {
      const list = new LinkedList('All Mighty Then');
      swapFront(list);
      expect(list.print()).toEqual('LinkedList { "All Mighty Then" }');
    });

  });

  describe('when `list` contains at least two values', () => {

    it('swaps the first and second nodes and returns the new first node', () => {
      const list = new LinkedList('head', 'neck', 'back', 'tail');
      const swapped = swapFront(list);
      expect(swapped.print()).toEqual(
        'LinkedList { "neck" <- "head" <- "back" <- "tail" }'
      );
    });

  });

});
