import LinkedList from './lib/linked-list';
import includes from './includes';

describe('includes(list, value)', () => {

  describe('when `list` contains `value`', () => {

    it('returns true', () => {

      const list1 = new LinkedList(42);
      expect(includes(list1, 42)).toEqual(true);

      const list2 = new LinkedList('billy', 'mandy', 'grim', 'irwin');
      expect(includes(list2, 'billy')).toEqual(true);
      expect(includes(list2, 'mandy')).toEqual(true);
      expect(includes(list2, 'grim')).toEqual(true);
      expect(includes(list2, 'irwin')).toEqual(true);

    });

    it('does not modify `list`', () => {
      const list = new LinkedList('head', 'neck', 'back', 'tail');
      includes(list, 'back');
      expect(list.print()).toEqual(
        'LinkedList { "head" <- "neck" <- "back" <- "tail" }'
      );
    });

  });

  describe('when `list` does not contain `value`', () => {

    it('returns false', () => {
      const list = new LinkedList(true, '99', 1e7, 'steve');
      expect(includes(list, 99)).toEqual(false);
    });

    it('does not modify `list`', () => {
      const list = new LinkedList('head', 'neck', 'back', 'tail');
      includes(list, 'jetpack');
      expect(list.print()).toEqual(
        'LinkedList { "head" <- "neck" <- "back" <- "tail" }'
      );
    });

  });

});
