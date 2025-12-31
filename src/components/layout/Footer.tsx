import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-stone-100 border-t border-stone-200 pt-12 pb-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="font-bold text-lg text-stone-900 block mb-4">
                            Tender Guidance
                        </Link>
                        <p className="text-sm text-stone-600 leading-relaxed">
                            Unbiased, practical advice for the messy parts of parenthood. No judgment, just scripts and support.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-stone-900 mb-4">Explore</h4>
                        <ul className="space-y-2 text-sm text-stone-600">
                            <li><Link href="/advice" className="hover:text-stone-900">Advice Library</Link></li>
                            <li><Link href="/buy" className="hover:text-stone-900">Shop Packs</Link></li>
                            <li><Link href="/about" className="hover:text-stone-900">About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-stone-900 mb-4">Support</h4>
                        <ul className="space-y-2 text-sm text-stone-600">
                            <li><Link href="/contact" className="hover:text-stone-900">Contact</Link></li>
                            <li><Link href="/faq" className="hover:text-stone-900">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-stone-900 mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-stone-600">
                            <li><Link href="/disclaimer" className="hover:text-stone-900">Disclaimer</Link></li>
                            <li><Link href="/privacy" className="hover:text-stone-900">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-stone-900">Terms of Use</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-stone-200 pt-8 text-center text-xs text-stone-500">
                    <p className="mb-2">
                        <strong>Disclaimer:</strong> Content on this site is for educational purposes only and does not constitute medical advice.
                        Always consult your healthcare provider.
                    </p>
                    <p>© {new Date().getFullYear()} Tender Guidance. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
