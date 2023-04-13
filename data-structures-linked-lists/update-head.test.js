import LinkedList from './lib/linked-list';
import updateHead from './update-head';

describe('updateHead(list, value)', () => {

  it('sets the head value of `list` to `value`', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    expect(list.print()).toEqual(
      'LinkedList { "head" <- "neck" <- "back" <- "tail" }'
    );
    const value = 'https://images.halloweencostumes.com/products/4090/1-1/venus-fly-trap-costume.jpg';
    updateHead(list, value);
    expect(list.print()).toEqual(
      `LinkedList { "${value}" <- "neck" <- "back" <- "tail" }`
    );
  });

});
