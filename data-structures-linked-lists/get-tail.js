export default function getTail(list) {
  while (list.next !== null) {
    list = list.next;
  }
  return list.data;
}
