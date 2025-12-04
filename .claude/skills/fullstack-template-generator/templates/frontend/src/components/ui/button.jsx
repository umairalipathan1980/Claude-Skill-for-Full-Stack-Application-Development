import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      variant: {
        default: 'bg-emerald-500 text-white shadow-glow hover:bg-emerald-400',
        outline: 'border border-slate-200 bg-transparent text-slate-700 hover:border-emerald-400 hover:text-emerald-600',
        secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300/80',
        ghost: 'text-slate-500 hover:text-slate-900 hover:bg-slate-100',
        destructive: 'bg-rose-500 text-white hover:bg-rose-400',
        link: 'text-emerald-500 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 px-5 py-2',
        sm: 'h-9 rounded-lg px-4',
        lg: 'h-14 rounded-2xl px-6 text-base',
        icon: 'h-11 w-11 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = 'Button'

export { Button, buttonVariants }
