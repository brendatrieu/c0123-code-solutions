export default function get2ndFromTop(stack) {
  if (stack.peek() === undefined) return undefined;
  const top = stack.pop();
  if (stack.peek() === undefined) {
    stack.push(top);
    return undefined;
  }
  const secondTop = stack.pop();
  stack.push(secondTop);
  stack.push(top);
  return secondTop;
}
