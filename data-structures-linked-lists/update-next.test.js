import LinkedList from './lib/linked-list';
import updateNext from './update-next';

describe('updateNext(list, value)', () => {

  describe('when `list` contains one node', () => {

    it('does not modify `list`', () => {
      const list = new LinkedList('Han Solo');
      updateNext(list, 'Chewie');
      expect(list.print()).toEqual('LinkedList { "Han Solo" }');
    });

  });

  describe('when `list` contains at least two nodes', () => {

    it('sets the 2nd value of `list` to `value`', () => {
      const list = new LinkedList('head', 'neck', 'back', 'tail');
      updateNext(list, 'selfie stick');
      expect(list.print()).toEqual(
        'LinkedList { "head" <- "selfie stick" <- "back" <- "tail" }'
      );
    });

  });

});
