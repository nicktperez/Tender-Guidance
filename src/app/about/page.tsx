import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About | No-Nonsense Mama',
    description: 'Our mission and values.',
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-6 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold text-stone-900 mb-8">About No-Nonsense Mama</h1>

            <div className="prose prose-stone max-w-none mb-16">
                <p className="lead text-xl text-stone-600 mb-8">
                    We believe that pregnancy and parenthood are hard enough without the sugar-coating, the fear-mongering, and the judgment.
                </p>
                <p>
                    Founded on the idea that "You are not crazy, this is actually hard," we provide scripts, guides, and straight talk for the moments that baby books skip over. Like how to tell your boss you're pregnant, or how to politely ask a stranger to stop touching you.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Values</h2>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <span className="font-bold text-stone-900">Unbiased:</span>
                            <span className="text-stone-600">We don't care how you birth or feed, as long as you are supported.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-stone-900">Practical:</span>
                            <span className="text-stone-600">No fluff. Just "say this" or "do that."</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-stone-900">Inclusive:</span>
                            <span className="text-stone-600">All family structures and identities are welcome here.</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-stone-100 p-8 rounded-xl">
                    <h2 className="text-2xl font-bold text-stone-900 mb-4">How we stay unbiased</h2>
                    <p className="text-stone-600 mb-4">
                        We do not accept sponsorship from formula companies, diaper brands, or medical device manufacturers.
                    </p>
                    <p className="text-stone-600">
                        Our advice is based on communication psychology, boundary setting best practices, and the lived experiences of thousands of parents.
                    </p>
                </div>
            </div>
        </div>
    );
}
