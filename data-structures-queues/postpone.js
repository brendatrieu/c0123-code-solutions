export default function postpone(queue) {
  const first = queue.dequeue();
  if (first === undefined) {
    return;
  }
  queue.enqueue(first);
}
