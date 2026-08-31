# VitalTrack API Handbook

## Models
```prisma
User 1—* Workout, Meal, Sleep, Metric
```

## Endpoints
### Workouts
`POST /api/workouts` — body: { type, duration, calories }
`GET /api/workouts?from=2024-01-01`

### Meals
`POST /api/meals` — { name, calories, protein, carbs, fat }

### Metrics
`GET /api/metrics?range=7d` → [{date, weight, steps}]

## Env
```
DATABASE_URL=postgresql://...
NEXTAUTH_URL=http://localhost:3000
```

## Deploy
`docker compose up -d` — app:3000, db:5432
Vercel: set env vars, `vercel --prod`
