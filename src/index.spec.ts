// eslint-disable-next-line import/no-unresolved
import { expect, it, describe } from 'bun:test';
import { sum } from '.';

describe('sum', () => {
  it('sum(1, 1) = 2', () => {
    expect(sum(1, 1)).toBe(2);
  });
});
