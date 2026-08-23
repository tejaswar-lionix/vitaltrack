import { WeightChart } from '@/components/WeightChart';
export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <p className="text-sm text-gray-500">Your health telemetry at a glance.</p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="p-4 bg-white rounded border"><h3>Weight Trend</h3><WeightChart /></div>
        <div className="p-4 bg-white rounded border"><h3>Calories</h3><p className="text-2xl">2,140 kcal today</p></div>
        <div className="p-4 bg-white rounded border"><h3>Workouts</h3><p className="text-2xl">4 this week</p></div>
        <div className="p-4 bg-white rounded border"><h3>Sleep</h3><p className="text-2xl">7.2h avg</p></div>
      </div>
    </div>
  );
}
