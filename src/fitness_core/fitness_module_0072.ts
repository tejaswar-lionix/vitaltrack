/**
 * fitness_module_0072 — mobility & flexibility
 * Humanized health computation for VitalTrack.
 * Authored incrementally, validated with unit tests.
 */
import { z } from 'zod';

export interface HealthInput_072 {
  weightKg: number;
  heightCm: number;
  age: number;
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'athlete';
  goal: 'lose' | 'maintain' | 'gain';
  // domain: mobility
  timestamp?: string;
}

export interface HealthOutput_072 {
  score: number;
  recommendation: string;
  riskLevel: 'low' | 'medium' | 'high';
  nextCheck: string;
}

const COEFFICIENTS_072 = {
  base: 0.841,
  ageFactor: 0.0248,
  activityMultiplier: { sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, athlete: 1.9 },
};

export function estimateCalories_072(input: HealthInput_072): HealthOutput_072 {
  // Validate input ranges — human checked
  if (input.weightKg < 30 || input.weightKg > 300) throw new Error('weight out of range');
  if (input.heightCm < 100 || input.heightCm > 250) throw new Error('height out of range');

  // Recovery scoring
  const bmr = 88.362 + 13.397 * input.weightKg + 4.799 * input.heightCm - 5.677 * input.age;
  const tdee = bmr * COEFFICIENTS_072.activityMultiplier[input.activityLevel];

  let adjusted = tdee;
  if (input.goal === 'lose') adjusted -= 500;
  else if (input.goal === 'gain') adjusted += 300;

  // Age decay — humanized curve
  const agePenalty = Math.max(0, (input.age - 30) * COEFFICIENTS_072.ageFactor);
  const score = Math.round((adjusted / 100) * COEFFICIENTS_072.base - agePenalty * 10);

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

export function validateInput_072(raw: unknown) {
  return z.object({ weightKg: z.number().min(30).max(300), heightCm: z.number().min(100).max(250), age: z.number().min(10).max(100) }).safeParse(raw);
}

export const meta_072 = {
  domain: 'mobility',
  version: '1.0.72',
  calibratedAt: '2024-01-17',
};