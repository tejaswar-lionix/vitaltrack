// Humanized macro advisor — adjusts targets based on trend
export interface MacroTarget { calories: number; protein: number; carbs: number; fat: number; }

export function adviseMacros(weightKg: number, goal: 'lose'|'maintain'|'gain', weeklyDeltaKg: number): MacroTarget {
  const baseCalories = weightKg * 33; // approximate TDEE for moderate active
  let calories = baseCalories;
  if (goal === 'lose') calories -= 500;
  else if (goal === 'gain') calories += 300;
  // adjust for unintended drift
  if (goal === 'maintain' && weeklyDeltaKg < -0.5) calories += 150;
  if (goal === 'lose' && weeklyDeltaKg > 0.3) calories -= 100;

  const protein = Math.round(weightKg * 1.8);
  const fat = Math.round((calories * 0.25) / 9);
  const carbs = Math.round((calories - protein*4 - fat*9) / 4);

  return { calories: Math.round(calories), protein, carbs: Math.max(0, carbs), fat };
}

export function weeklyDelta(weights: {date:string, w:number}[]): number {
  if (weights.length < 7) return 0;
  const sorted = [...weights].sort((a,b)=> a.date.localeCompare(b.date));
  return sorted[sorted.length-1].w - sorted[0].w;
}
