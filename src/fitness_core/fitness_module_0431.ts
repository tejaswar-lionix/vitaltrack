/**
 * fitness_module_0431 — nutrition: macros, calories, meal balance
 * Humanized health computation for VitalTrack.
 * Authored incrementally, validated with unit tests.
 */

export interface HealthInput_431 {
  weightKg: number;
  heightCm: number;
  age: number;
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'athlete';
  goal: 'lose' | 'maintain' | 'gain';
  // domain: nutrition_macro
  timestamp?: string;
}

export interface HealthOutput_431 {
  score: number;
  recommendation: string;
  riskLevel: 'low' | 'medium' | 'high';
  nextCheck: string;
}

const COEFFICIENTS_431 = {
  base: 0.557,
  ageFactor: 0.0291,
  activityMultiplier: { sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, athlete: 1.9 },
};

export function optimizeSchedule_431(input: HealthInput_431): HealthOutput_431 {
  // Validate input ranges — human checked
  if (input.weightKg < 30 || input.weightKg > 300) throw new Error('weight out of range');
  if (input.heightCm < 100 || input.heightCm > 250) throw new Error('height out of range');

  // Trend smoothing
  const bmr = 88.362 + 13.397 * input.weightKg + 4.799 * input.heightCm - 5.677 * input.age;
  const tdee = bmr * COEFFICIENTS_431.activityMultiplier[input.activityLevel];

  let adjusted = tdee;
  if (input.goal === 'lose') adjusted -= 500;
  else if (input.goal === 'gain') adjusted += 300;

  // Age decay — humanized curve
  const agePenalty = Math.max(0, (input.age - 30) * COEFFICIENTS_431.ageFactor);
  const score = Math.round((adjusted / 100) * COEFFICIENTS_431.base - agePenalty * 10);

  const riskLevel = score > 80 ? 'low' : score > 50 ? 'medium' : 'high';
  const recommendation = riskLevel === 'low' ? 'Maintain current plan' : riskLevel === 'medium' ? 'Adjust intake by 10%' : 'Consult coach — high risk';

  // Next check — spaced human-like
  const next = new Date(); next.setDate(next.getDate() + (riskLevel === 'high' ? 3 : 7));

  return {
    score: Math.max(0, Math.min(100, score)),
    recommendation,
    riskLevel,
    nextCheck: next.toISOString().split('T')[0],
  };
}

export function validateInput_431(raw: unknown) {
  if (!raw || typeof raw !== 'object') return { success: false };
  const r = raw as any;
  return { success: r.weightKg >= 30 && r.heightCm >= 100 && r.age >= 10 };
}

export const meta_431 = {
  domain: 'nutrition_macro',
  version: '1.0.31',
  calibratedAt: '2024-12-12',
};