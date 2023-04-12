export default function countValues(stack) {
  let totalCount = 0;
  while (stack.pop() !== undefined) {
    totalCount++;
  }
  return totalCount;
}
