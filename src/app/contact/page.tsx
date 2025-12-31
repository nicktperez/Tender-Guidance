'use client';

import { Button } from '@/components/ui/Button';
import { useState } from 'react';

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus('submitting');
        // Placeholder logic
        setTimeout(() => {
            console.log('Form submitted');
            // TODO: Connect to email service (Resend/SendGrid)
            setStatus('success');
        }, 1000);
    }

    if (status === 'success') {
        return (
            <div className="container mx-auto px-6 py-16 max-w-lg text-center">
                <h1 className="text-3xl font-bold text-stone-900 mb-4">Message Sent</h1>
                <p className="text-stone-600 mb-8">Thanks for reaching out! We'll get back to you within 48 hours.</p>
                <Button onClick={() => setStatus('idle')} variant="outline">Send another</Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-16 max-w-lg">
            <h1 className="text-4xl font-bold text-stone-900 mb-4">Contact Us</h1>
            <p className="text-stone-600 mb-8">
                Have a question about a packet? Suggestion for a script? We'd love to hear it.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-900 mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-2 rounded-md border border-stone-300 focus:ring-2 focus:ring-stone-400 focus:outline-none"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-900 mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-2 rounded-md border border-stone-300 focus:ring-2 focus:ring-stone-400 focus:outline-none"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-900 mb-1">Message</label>
                    <textarea
                        id="message"
                        required
                        rows={5}
                        className="w-full px-4 py-2 rounded-md border border-stone-300 focus:ring-2 focus:ring-stone-400 focus:outline-none"
                    ></textarea>
                </div>
                <Button type="submit" fullWidth disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
            </form>
        </div>
    );
}
