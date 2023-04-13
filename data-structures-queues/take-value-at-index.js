export default function takeValueAtIndex(queue, index) {
  let count = 0;
  while (count < index) {
    if (queue.peek() === undefined) return undefined;
    const item = queue.dequeue();
    queue.enqueue(item);
    count++;
  }
  return queue.dequeue();
}
