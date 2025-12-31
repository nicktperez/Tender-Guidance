import { cn } from '@/lib/utils';
import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'outline' | 'secondary' | 'accent';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
    const variants = {
        default: 'bg-stone-900 text-stone-50',
        secondary: 'bg-stone-200 text-stone-800 hover:bg-stone-300',
        outline: 'border border-stone-300 text-stone-600',
        accent: 'bg-orange-100 text-orange-800',
    };

    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2',
                variants[variant],
                className
            )}
            {...props}
        />
    );
}
