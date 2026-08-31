import { describe, it, expect } from 'vitest';
import { adviseMacros, weeklyDelta } from '@/lib/macroAdvisor';
import { mealSchema } from '@/lib/validation';

describe('nutrition extra — humanized', () => {
  it('advises lose deficit', () => {
    const t = adviseMacros(70, 'lose', 0);
    expect(t.calories).toBeLessThan(70*33);
  });
  it('adds calories when maintain but losing fast', () => {
    const t = adviseMacros(70, 'maintain', -0.7);
    const base = adviseMacros(70, 'maintain', 0);
    expect(t.calories).toBeGreaterThan(base.calories);
  });
  it('weekly delta', () => {
    const d = weeklyDelta([{date:'2024-01-01',w:71},{date:'2024-01-08',w:70.2}]);
    expect(d).toBeCloseTo(-0.8);
  });
  it('validates meal schema', () => {
    expect(mealSchema.safeParse({name:'Chicken', calories:300, protein:30, carbs:5, fat:10}).success).toBe(true);
    expect(mealSchema.safeParse({name:'', calories:-10, protein:0, carbs:0, fat:0}).success).toBe(false);
  });
});
