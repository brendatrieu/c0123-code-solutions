/* eslint-disable no-unused-vars */
import LinkedList from './lib/linked-list.js';

export default function append(list, value) {
  while (list.next !== null) {
    list = list.next;
  }
  const last = new LinkedList(value);
  list.next = last;
}
