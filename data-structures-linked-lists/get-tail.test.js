import LinkedList from './lib/linked-list';
import getTail from './get-tail';

describe('getTail(list)', () => {

  it('returns the last value of `list`', () => {

    const list1 = new LinkedList(13);
    expect(getTail(list1)).toEqual(13);
    list1.next = new LinkedList(9);
    expect(getTail(list1)).toEqual(9);

    const list2 = new LinkedList(null, '', false);
    expect(getTail(list2)).toEqual(false);

  });

  it('does not modify `list`', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    getTail(list);
    expect(list.print()).toEqual(
      'LinkedList { "head" <- "neck" <- "back" <- "tail" }'
    );
  });

});
