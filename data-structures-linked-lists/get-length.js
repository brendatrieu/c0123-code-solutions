export default function getLength(list) {
  let count = 0;
  while (list !== null) {
    count++;
    list = list.next;
  }
  return count;
}
