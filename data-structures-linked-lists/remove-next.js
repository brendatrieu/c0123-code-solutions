export default function removeNext(list) {
  if (!list.next) return;
  list.next = list.next.next;
}
