import { merge } from '../src/merge';

console.log("Running merge tests");
describe('merge function', () => {
  test('Merge three empty arrays', () => {
    const result = merge([], [], []);
    expect(result).toEqual([]);
  });

  test('Merge simple sorted arrays', () => {
    const result = merge([1, 3], [2, 4], [6, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('Merge duplicate arrays', () => {
    const result = merge([1, 2], [2, 4], [5, 4]);
    expect(result).toEqual([1, 2, 2, 4, 4, 5]);
  });
});