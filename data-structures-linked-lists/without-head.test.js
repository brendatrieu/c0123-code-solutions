import LinkedList from './lib/linked-list';
import withoutHead from './without-head';

describe('withoutHead(list)', () => {

  it('returns a list consisting of all nodes in `list` after its head', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    const decapitated = withoutHead(list);
    expect(decapitated.print()).toEqual(
      'LinkedList { "neck" <- "back" <- "tail" }'
    );
  });

  it('does not modify `list`', () => {
    const list = new LinkedList(56, 23, 8);
    expect(list.print()).toEqual(
      'LinkedList { 56 <- 23 <- 8 }'
    );
    withoutHead(list);
    expect(list.print()).toEqual(
      'LinkedList { 56 <- 23 <- 8 }'
    );
  });

});
