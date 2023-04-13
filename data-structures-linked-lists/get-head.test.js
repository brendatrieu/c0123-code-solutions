import LinkedList from './lib/linked-list';
import getHead from './get-head';

describe('getHead(list)', () => {

  it('returns the head value of `list`', () => {
    const list1 = new LinkedList(13, 9);
    expect(getHead(list1)).toEqual(13);
    const list2 = new LinkedList(null, '');
    expect(getHead(list2)).toEqual(null);
  });

  it('does not modify `list`', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    getHead(list);
    expect(list.print()).toEqual(
      'LinkedList { "head" <- "neck" <- "back" <- "tail" }'
    );
  });

});
