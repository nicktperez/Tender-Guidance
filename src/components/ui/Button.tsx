import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', href, fullWidth, children, ...props }, ref) => {
        const variants = {
            primary: 'bg-stone-900 text-stone-50 hover:bg-stone-800 shadow-sm',
            secondary: 'bg-stone-200 text-stone-900 hover:bg-stone-300',
            outline: 'border border-stone-300 bg-transparent hover:bg-stone-100 text-stone-900',
            ghost: 'bg-transparent hover:bg-stone-100 text-stone-700',
        };

        const sizes = {
            sm: 'h-8 px-3 text-sm',
            md: 'h-10 px-4 py-2',
            lg: 'h-12 px-6 text-lg',
        };

        const classes = cn(
            'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 disabled:pointer-events-none disabled:opacity-50',
            variants[variant],
            sizes[size],
            fullWidth ? 'w-full' : '',
            className
        );

        if (href) {
            return (
                <Link href={href} className={classes}>
                    {children}
                </Link>
            );
        }

        return (
            <button className={classes} ref={ref} {...props}>
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';
