/**
 * Returns a new array that contains only the even numbers in the given array.
 */
export function evenNumbers(numbers) {
  return numbers.filter((n) => {
    if (typeof n !== 'number' || isNaN(n)) return false;
    return !(n % 2);
  });
}

/**
 * Returns a number formatted in dollars and cents.
 */
export function toDollars(amount) {
  const convertedAmount = Number(amount);
  if (typeof convertedAmount !== 'number' || isNaN(convertedAmount)) return 'Numeric value required.';
  return `$${convertedAmount.toFixed(2)}`;
}

/**
 * Returns a new array of numbers where every entry has been divided by the
 * given divisor. Does not modify the original array.
 * @param {Array} numbers The array of numbers to be divided by the divisor.
 * @param {number} divisor The number to divide into each element of `numbers`.
 * @returns a new array.
 */
export function divideBy(numbers, divisor) {
  if (typeof divisor !== 'number' || isNaN(divisor)) return 'Divisor must be a number.';
  return numbers.map((n) => n / divisor);
}

/**
 * Modifies an object by multiplying the value of each key, but only if that
 * value is a number. Key names are arbitrary.
 * @param {Object} obj The object to modify.
 * @param {number} multiplier The number to multiply by.
 * @returns the input object.
 */
export function multiplyBy(obj, multiplier) {
  if (typeof multiplier !== 'number' || isNaN(multiplier)) {
    return 'Multiplier must be a number.';
  }
  const result = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'number' && !isNaN(value)) {
      result[key] = value * multiplier;
    } else {
      result[key] = value;
    }
  });
  return result;
}
