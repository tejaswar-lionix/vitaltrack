'use client';
import { useEffect, useState } from 'react';
import { Droplets } from 'lucide-react';

export function HydrationReminder({ targetMl = 2500 }: { targetMl?: number }) {
  const [drank, setDrank] = useState(0);
  const [last, setLast] = useState<Date | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      if (Notification && Notification.permission === 'granted') {
        new Notification('Hydration time 💧', { body: 'Take a sip — stay fueled' });
      }
    }, 90*60*1000);
    return () => clearInterval(id);
  }, []);

  const add = (ml: number) => {
    setDrank(d => Math.min(targetMl, d + ml));
    setLast(new Date());
    localStorage.setItem('hydration_last', new Date().toISOString());
  };

  const pct = Math.round((drank/targetMl)*100);
  return (
    <div className="p-4 border rounded bg-white">
      <div className="flex items-center gap-2"><Droplets className="h-5 w-5 text-blue-500" /><h3 className="font-semibold">Hydration</h3></div>
      <div className="mt-3">
        <div className="h-2 bg-gray-200 rounded"><div className="h-2 bg-blue-500 rounded" style={{width: `${pct}%`}}/></div>
        <p className="text-sm mt-1">{drank}ml / {targetMl}ml — {pct}%</p>
        <div className="flex gap-2 mt-3">
          <button onClick={()=>add(250)} className="px-3 py-1 border rounded text-sm">+250ml</button>
          <button onClick={()=>add(500)} className="px-3 py-1 border rounded text-sm">+500ml</button>
        </div>
        {last && <p className="text-xs text-gray-500 mt-2">Last: {last.toLocaleTimeString()}</p>}
      </div>
    </div>
  );
}
