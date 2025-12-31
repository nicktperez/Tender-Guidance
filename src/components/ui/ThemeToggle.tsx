'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ThemeToggle() {
    const [isAmber, setIsAmber] = useState(false);

    useEffect(() => {
        if (document.documentElement.classList.contains('amber-mode')) {
            setIsAmber(true);
        }
    }, []);

    const toggleTheme = () => {
        if (isAmber) {
            document.documentElement.classList.remove('amber-mode');
            setIsAmber(false);
        } else {
            document.documentElement.classList.add('amber-mode');
            setIsAmber(true);
        }
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            title="3 AM Mode (Low Blue Light)"
            className="rounded-full px-2"
        >
            {isAmber ? <Sun className="w-5 h-5 text-amber-200" /> : <Moon className="w-5 h-5 text-stone-500" />}
        </Button>
    );
}
