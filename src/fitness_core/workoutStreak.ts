/**
 * Workout streak & PR tracker — humanized logic
 * Calculates current streak, longest streak, and personal records
 */
export interface WorkoutLog { date: string; type: string; duration: number; calories: number; }

export function calculateStreak(logs: WorkoutLog[]): { current: number; longest: number } {
  if (!logs.length) return { current: 0, longest: 0 };
  const dates = [...new Set(logs.map(l => l.date))].sort();
  let longest = 1, cur = 1;
  for (let i=1;i<dates.length;i++) {
    const d1 = new Date(dates[i-1]), d2 = new Date(dates[i]);
    const diff = (d2.getTime() - d1.getTime()) / 86400000;
    if (diff === 1) cur++; else cur = 1;
    longest = Math.max(longest, cur);
  }
  // current streak: check if today or yesterday is last log
  const today = new Date().toISOString().split('T')[0];
  const last = dates[dates.length-1];
  const isActive = last === today || new Date(last).getTime() >= new Date(today).getTime() - 86400000;
  return { current: isActive ? cur : 0, longest };
}

export function detectPR(logs: WorkoutLog[], metric: 'duration'|'calories' = 'duration') {
  if (!logs.length) return null;
  const best = logs.reduce((a,b) => a[metric] > b[metric] ? a : b);
  const isLatestPR = logs[logs.length-1][metric] === best[metric];
  return { best, isLatestPR };
}
