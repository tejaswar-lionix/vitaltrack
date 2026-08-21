# VitalTrack — Health & Fitness Intelligence Platform

VitalTrack is a full-stack health analytics suite for workouts, nutrition, sleep telemetry, and body metrics. Built for athletes and everyday users to track, plan, and optimize wellbeing.

## Key Capabilities
- **Workout Engine**: Strength/cardio/yoga planner with progressive overload and calorie burn models
- **Nutrition Studio**: Meal logging with macro breakdown and daily targets
- **Sleep Telemetry**: Hours/quality trends and recovery scoring
- **Body Metrics**: Weight, heart rate, steps with cohort visualizations
- **Analytics**: Recharts dashboards, streaks, and goal forecasting

## Architecture
- **Frontend**: Next.js 14 + React 18 + TypeScript + Tailwind + Recharts + Lucide
- **Backend**: Next.js API Routes + Prisma + PostgreSQL
- **Data**: Workout/nutrition/sleep/metric models with Zod validation

## Installation

### Prerequisites
- Node.js 18+
- PostgreSQL 14+ (or Docker)

### 1. Clone
```bash
git clone https://github.com/tejaswar-lionix/vitaltrack.git
cd vitaltrack
cp example.env .env
```

### 2. Install
```bash
npm install
npx prisma generate
npx prisma db push
```

### 3. Run Dev
```bash
npm run dev # http://localhost:3000
```

## Build
```bash
npm run build
npm start
# or Docker
docker compose up --build -d
```

## Run with Docker
```bash
docker compose up -d
# app: http://localhost:3000
# db: localhost:5432
```

## Test
```bash
npm test
npm run test:watch
```

## Project Structure
```
src/
  app/          # Next.js App Router
  components/   # UI
  fitness_core/ # 1000+ health computation modules
  lib/          # utils, prisma, validation
  test/         # vitest suites
prisma/
  schema.prisma
```

## License
Proprietary — Tejaswar. All Rights Reserved.
