export default function takeSmaller(queue) {
  const first = queue.dequeue();
  if (first === undefined) return undefined;
  const second = queue.dequeue();
  if (second === undefined) return first;
  if (first < second || first === second) {
    queue.enqueue(second);
    return first;
  } else {
    queue.enqueue(first);
    return second;
  }
}
