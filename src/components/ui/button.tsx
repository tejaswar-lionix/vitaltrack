import * as React from "react"
import { cn } from "@/lib/utils"
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'default'|'outline' }
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant='default', ...props }, ref) => (
  <button ref={ref} className={cn("px-4 py-2 rounded text-sm font-medium", variant==='default'?"bg-primary text-white":"border", className)} {...props} />
))
Button.displayName = "Button"
