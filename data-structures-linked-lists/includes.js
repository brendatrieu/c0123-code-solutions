export default function includes(list, value) {
  let data = list;
  while (data !== null) {
    if (data.data === value) return true;
    data = data.next;
  }
  return false;
}
