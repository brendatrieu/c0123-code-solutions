/* eslint-disable no-unused-vars -- Remove me */
import LinkedList from './lib/linked-list';

export default function prepend(list, value) {
  const first = new LinkedList(value);
  first.next = list;
  return first;
}
