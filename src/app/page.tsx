import Link from 'next/link';
export default function Home() {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold">Track. Analyze. Thrive.</h2>
      <p className="mt-3 text-muted-foreground max-w-2xl">VitalTrack unifies workouts, nutrition, sleep and body metrics into one intelligent dashboard. Plan progressive overload, balance macros, and forecast recovery.</p>
      <div className="mt-6 flex gap-3">
        <Link href="/dashboard" className="px-4 py-2 bg-primary text-white rounded">Go to Dashboard</Link>
        <Link href="/workouts" className="px-4 py-2 border rounded">Log Workout</Link>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="p-4 bg-white rounded border"><h3 className="font-semibold">Workouts</h3><p className="text-sm text-gray-500">500+ exercise templates, streaks, PRs</p></div>
        <div className="p-4 bg-white rounded border"><h3 className="font-semibold">Nutrition</h3><p className="text-sm text-gray-500">Macro targets, meal history</p></div>
        <div className="p-4 bg-white rounded border"><h3 className="font-semibold">Sleep</h3><p className="text-sm text-gray-500">Recovery score, trends</p></div>
      </div>
    </div>
  );
}
