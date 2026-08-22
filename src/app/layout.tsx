import './globals.css';
export const metadata = { title: 'VitalTrack', description: 'Health & Fitness Intelligence' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 antialiased">
        <header className="border-b bg-white">
          <div className="container mx-auto px-4 py-3 flex justify-between">
            <h1 className="font-bold text-xl text-primary">VitalTrack</h1>
            <nav className="flex gap-4 text-sm">
              <a href="/dashboard">Dashboard</a>
              <a href="/workouts">Workouts</a>
              <a href="/nutrition">Nutrition</a>
              <a href="/sleep">Sleep</a>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
