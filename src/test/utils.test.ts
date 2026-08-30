import { describe, it, expect } from 'vitest';
import { calcBMI } from '@/lib/utils';
describe('utils', () => {
  it('calculates BMI', () => {
    expect(calcBMI(70, 175).toFixed(1)).toBe('22.9');
  });
  it('formats date', async () => {
    const { formatDate } = await import('@/lib/utils');
    expect(formatDate(new Date('2024-01-15'))).toBe('2024-01-15');
  });
});
