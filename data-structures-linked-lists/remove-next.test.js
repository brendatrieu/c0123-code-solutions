import LinkedList from './lib/linked-list';
import removeNext from './remove-next';

describe('removeNext(list)', () => {

  describe('when `list` contains one node', () => {

    it('does not modify list', () => {
      const list = new LinkedList('so low');
      removeNext(list);
      expect(list.print()).toEqual('LinkedList { "so low" }');
    });

  });

  describe('when `list` contains at least two nodes', () => {

    it('removes the 2nd value from `list`', () => {
      const list = new LinkedList('head', 'neck', 'back', 'tail');
      removeNext(list);
      expect(list.print()).toEqual(
        'LinkedList { "head" <- "back" <- "tail" }'
      );
    });

  });

});
