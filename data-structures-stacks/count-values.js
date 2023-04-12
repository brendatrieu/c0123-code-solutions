export default function countValues(stack) {
  let totalCount = 0;
  while (stack.peek() !== undefined) {
    stack.pop();
    totalCount++;
  }
  return totalCount;
}
