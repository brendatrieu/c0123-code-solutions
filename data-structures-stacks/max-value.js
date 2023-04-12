export default function maxValue(stack) {
  const allValues = [];
  while (stack.peek() !== undefined) {
    allValues.push(stack.pop());
  }
  return Math.max(...allValues);
}
