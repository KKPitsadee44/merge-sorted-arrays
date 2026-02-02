import { merge } from '../src/merge';

console.log("Running merge tests");
describe('merge function', () => {
  test('should merge three empty arrays', () => {
    const result = merge([], [], []);
    expect(result).toEqual([]);
  });

  test('should merge simple sorted arrays', () => {
    const result = merge([1, 3], [2, 4], [6, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});