export default function getLength(list) {
  let data = list;
  let count = 0;
  while (data !== null) {
    count++;
    data = data.next;
  }
  return count;
}
