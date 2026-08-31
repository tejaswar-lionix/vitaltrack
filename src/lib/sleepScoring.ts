// Sleep recovery scoring — humanized fix for edge cases
export function scoreSleep(hours: number, quality: number, isNap=false): number {
  const h = Math.max(0, Math.min(12, hours));
  const q = Math.max(1, Math.min(10, quality));
  let factor = 1.0;
  if (h < 6) factor = 0.9;
  else if (h >=7 && h <=8) factor = 1.0;
  else if (h >9) factor = 0.95;
  if (isNap && h < 2) factor *= 0.7; // naps weighted lower
  const raw = (h*10 + q*5) * factor;
  return Math.round(Math.min(100, raw));
}

export function sleepRecommendation(score: number): string {
  if (score >= 85) return "Optimal recovery — maintain routine";
  if (score >= 65) return "Moderate — aim for 7-8h tonight";
  return "Low recovery — prioritize sleep, reduce intensity";
}
