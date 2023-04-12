export default function maxValue(stack) {
  let maxValue = -Infinity;
  while (stack.peek() !== undefined) {
    const top = stack.pop();
    if (maxValue < top) (maxValue = top);
  }
  return maxValue;
}
