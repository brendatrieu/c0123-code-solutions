export default function takeNextSmallest(numberQueue) {

  let first = numberQueue.peek();
  if (first === undefined) return undefined;
  first = numberQueue.dequeue();
  const second = numberQueue.peek();
  if (second === undefined) return first;
  if (first <= numberQueue.peek()) return first;
  while (numberQueue.peek() < first) {
    numberQueue.enqueue(first);
    first = numberQueue.dequeue();
  }
  return first;
}
