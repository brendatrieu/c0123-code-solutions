import LinkedList from './lib/linked-list';
import getLength from './get-length';

describe('getLength(list)', () => {

  it('returns the number of nodes in `list`', () => {
    const list1 = new LinkedList(82);
    expect(getLength(list1)).toEqual(1);
    const list2 = new LinkedList(null, '', false, 0, NaN);
    expect(getLength(list2)).toEqual(5);
  });

  it('does not modify `list`', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    getLength(list);
    expect(list.print()).toEqual(
      'LinkedList { "head" <- "neck" <- "back" <- "tail" }'
    );
  });

});
