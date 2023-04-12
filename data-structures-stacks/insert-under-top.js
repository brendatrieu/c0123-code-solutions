export default function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) return;
  const top = stack.pop();
  stack.push(value);
  stack.push(top);
}
