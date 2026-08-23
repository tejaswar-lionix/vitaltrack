'use client';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
const data = [{d:'Mon', w:72.1},{d:'Tue', w:71.9},{d:'Wed', w:71.8},{d:'Thu', w:71.6},{d:'Fri', w:71.4}];
export function WeightChart() {
  return (
    <div className="h-40">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}><XAxis dataKey="d"/><YAxis domain={[70,73]}/><Line type="monotone" dataKey="w" stroke="#0ea5e9" strokeWidth={2} dot={false}/></LineChart>
      </ResponsiveContainer>
    </div>
  );
}
