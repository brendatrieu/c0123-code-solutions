export default function takeNextSmallest(numberQueue) {

  let first = numberQueue.dequeue();
  if (first === undefined) return undefined;
  const second = numberQueue.peek();
  if (second === undefined) return first;
  if (first <= numberQueue.peek()) return first;
  while (numberQueue.peek() < first) {
    numberQueue.enqueue(first);
    first = numberQueue.dequeue();
  }
  return first;
}
