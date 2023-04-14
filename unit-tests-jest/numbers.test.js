import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toStrictEqual([4, 10, 0]);
  });
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10.2];
    const result = evenNumbers(numbers);
    expect(result).toStrictEqual([4]);
  });
  it('returns the even numbers and filter booleans', () => {
    const numbers = [true, false, 4, 5, 10];
    const result = evenNumbers(numbers);
    expect(result).toStrictEqual([4, 10]);
  });
  it('returns the even numbers and filters falsey values', () => {
    const numbers = [1, 4, 5, NaN, undefined, NaN];
    const result = evenNumbers(numbers);
    expect(result).toStrictEqual([4]);
  });
  it('returns the even numbers and filters strings', () => {
    const numbers = [1, 4, 5, '10', 'hello'];
    const result = evenNumbers(numbers);
    expect(result).toStrictEqual([4]);
  });
});

describe('toDollars', () => {
  it('returns a number formatted to currency', () => {
    const amount = 1.2;
    const result = toDollars(amount);
    expect(result).toMatch('$1.20');
  });
  it('returns a number formatted to currency', () => {
    const amount = 'hello';
    const result = toDollars(amount);
    expect(result).toMatch('Numeric value required.');
  });
  it('returns a number or string of a number formatted to currency', () => {
    const amount = '1';
    const result = toDollars(amount);
    expect(result).toMatch('$1.00');
  });
  it('returns a number formatted to currency', () => {
    const amount = NaN;
    const result = toDollars(amount);
    expect(result).toMatch('Numeric value required.');
  });
});

describe('divideBy', () => {
  it('returns an array of numbers divided by the divisor', () => {
    const numbers = [10, 15, 20];
    const divisor = 5;
    const result = divideBy(numbers, divisor);
    expect(result).toStrictEqual([2, 3, 4]);
  });
  it('returns an array of numbers divided by the divisor', () => {
    const numbers = ['hello', 15, 20];
    const divisor = 5;
    const result = divideBy(numbers, divisor);
    expect(result).toStrictEqual([NaN, 3, 4]);
  });
  it('returns an array of numbers divided by the divisor', () => {
    const numbers = ['hello', 15, 20];
    const divisor = 'test';
    const result = divideBy(numbers, divisor);
    expect(result).toMatch('Divisor must be a number.');
  });
});

describe('multiplyBy', () => {
  it('returns an object with the values of the keys multiplied by the multiplier if the value is a number', () => {
    const obj = { one: 'five', two: 2 };
    const multiplier = 5;
    const result = multiplyBy(obj, multiplier);
    expect(result).toStrictEqual({ one: 'five', two: 10 });
  });
  it('returns an object with the values of the keys multiplied by the multiplier if the value is a number', () => {
    const obj = { one: 'five', two: 2 };
    const multiplier = 'five';
    const result = multiplyBy(obj, multiplier);
    expect(result).toMatch('Multiplier must be a number.');
  });
  it('returns an object with the values of the keys multiplied by the multiplier if the value is a number', () => {
    const obj = { one: 'five', two: 2 };
    const multiplier = false;
    const result = multiplyBy(obj, multiplier);
    expect(result).toMatch('Multiplier must be a number.');
  });
  it('returns an object with the values of the keys multiplied by the multiplier if the value is a number', () => {
    const obj = { one: 'five', two: 2 };
    const multiplier = undefined;
    const result = multiplyBy(obj, multiplier);
    expect(result).toMatch('Multiplier must be a number.');
  });
  it('returns an object with the values of the keys multiplied by the multiplier if the value is a number', () => {
    const obj = { one: 'five', two: undefined };
    const multiplier = 10;
    const result = multiplyBy(obj, multiplier);
    expect(result).toStrictEqual({ one: 'five', two: undefined });
  });
});
