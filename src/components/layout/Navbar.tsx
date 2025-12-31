'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const routes = [
        { href: '/advice', label: 'Advice Library' },
        { href: '/tools/boundary-generator', label: 'Script Generator' },
        { href: '/buy', label: 'Shop' },
        { href: '/about', label: 'About' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-bold text-xl tracking-tight text-foreground flex items-center gap-2">
                    <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                    Tender Guidance
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                'text-sm font-medium transition-colors hover:text-foreground/80',
                                pathname === route.href ? 'text-foreground font-bold' : 'text-stone-500'
                            )}
                        >
                            {route.label}
                        </Link>
                    ))}
                    <ThemeToggle />
                    <Button href="/buy" variant="primary" size="sm" className="gap-2">
                        <ShoppingBag className="w-4 h-4" /> Shop Packets
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-stone-600"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-stone-200 bg-background p-4 absolute w-full shadow-lg h-[calc(100vh-4rem)]">
                    <nav className="flex flex-col gap-4">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-stone-700 py-2 border-b border-stone-100"
                            >
                                {route.label}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Button href="/buy" className="w-full justify-center gap-2" onClick={() => setIsOpen(false)}>
                                <ShoppingBag className="w-4 h-4" /> Shop All Packets
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
