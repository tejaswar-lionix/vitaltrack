import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)) }
export function formatDate(d: Date) { return d.toISOString().split('T')[0] }
export function calcBMI(weightKg: number, heightCm: number) { return weightKg / ((heightCm/100)**2) }
