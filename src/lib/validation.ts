import { z } from 'zod';
export const workoutSchema = z.object({
  type: z.enum(['strength','cardio','yoga','hiit']),
  duration: z.number().min(5).max(300),
  calories: z.number().min(0).max(2000),
  date: z.date().optional(),
});
export const mealSchema = z.object({
  name: z.string().min(2).max(80),
  calories: z.number().min(0).max(3000),
  protein: z.number().min(0).max(300),
  carbs: z.number().min(0).max(500),
  fat: z.number().min(0).max(300),
});
export type WorkoutInput = z.infer<typeof workoutSchema>;
export type MealInput = z.infer<typeof mealSchema>;
