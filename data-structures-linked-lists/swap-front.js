export default function swapFront(list) {
  if (!list.next) return list;
  const first = list;
  const second = list.next;
  first.next = second.next;
  list = second;
  list.next = first;
  return list;
}
