import LinkedList from './lib/linked-list';
import prepend from './prepend';

describe('prepend(list, value)', () => {

  it('returns a new list consisting of `value`, followed by `list`', () => {
    const input = new LinkedList('head', 'neck', 'back', 'tail');
    const output = prepend(input, 'hat');
    expect(input).not.toEqual(output);
    expect(output.print()).toEqual(
      'LinkedList { "hat" <- "head" <- "neck" <- "back" <- "tail" }'
    );
  });

  it('does not modify input `list`', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    prepend(list, 'hair piece');
    expect(list.print()).toEqual(
      'LinkedList { "head" <- "neck" <- "back" <- "tail" }'
    );
  });

});
