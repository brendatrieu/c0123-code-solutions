import LinkedList from './lib/linked-list';
import removeTail from './remove-tail';

describe('removeTail(list)', () => {

  describe('when `list` contains one node', () => {

    it('does nothing', () => {
      const list = new LinkedList('Lone train engine');
      removeTail(list);
      expect(list.print()).toEqual('LinkedList { "Lone train engine" }');
    });

  });

  describe('when `list` contains at least two nodes', () => {

    it('removes the last node from `list`', () => {
      const list = new LinkedList('head', 'neck', 'back', 'tail');
      removeTail(list);
      expect(list.print()).toEqual(
        'LinkedList { "head" <- "neck" <- "back" }'
      );
    });

  });

});
