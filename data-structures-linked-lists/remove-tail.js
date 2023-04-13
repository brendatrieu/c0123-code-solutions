export default function removeTail(list) {
  if (!list.next) return;
  while (list.next.next !== null) {
    list = list.next;
  }
  list.next = null;
}
