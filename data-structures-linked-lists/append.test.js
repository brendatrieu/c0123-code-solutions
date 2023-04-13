import LinkedList from './lib/linked-list.js';
import append from './append.js';

describe('append(list, value)', () => {

  it('appends a node containing `value` to the end of `list`', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    append(list, 'dirt');
    expect(list.print()).toEqual(
      'LinkedList { "head" <- "neck" <- "back" <- "tail" <- "dirt" }'
    );
  });

});
