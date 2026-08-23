export default function Workouts() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Workouts</h2>
      <form className="mt-4 space-y-3 max-w-md">
        <select className="w-full border p-2 rounded"><option>strength</option><option>cardio</option><option>yoga</option></select>
        <input placeholder="Duration (min)" type="number" className="w-full border p-2 rounded" />
        <input placeholder="Calories" type="number" className="w-full border p-2 rounded" />
        <button className="px-4 py-2 bg-primary text-white rounded">Log Workout</button>
      </form>
    </div>
  );
}
