/* eslint-disable no-unused-vars -- Remove me */
import LinkedList from './lib/linked-list';

export default function insertNext(list, value) {
  const second = new LinkedList(value);
  second.next = list.next;
  list.next = second;
}
