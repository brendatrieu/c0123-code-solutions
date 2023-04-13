export default function take2nd(queue) {
  const first = queue.dequeue();
  if (first === undefined) return undefined;
  queue.enqueue(first);
  return queue.dequeue();
}
