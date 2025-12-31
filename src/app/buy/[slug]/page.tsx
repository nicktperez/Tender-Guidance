import { getAllProducts, getProductBySlug } from '@/lib/products';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Check, ArrowLeft, HelpCircle } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import { Metadata } from 'next';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const products = getAllProducts();
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    if (!product) return { title: 'Product Not Found' };
    return {
        title: `${product.title} | Shop`,
        description: product.shortDescription,
    };
}

export default async function ProductPage({ params }: Props) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) notFound();

    return (
        <div className="container mx-auto px-6 py-12">
            <Link href="/buy" className="inline-flex items-center text-sm text-stone-500 hover:text-stone-900 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Shop
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                {/* Images Column */}
                <div className="space-y-4">
                    <div className="aspect-[3/4] bg-stone-100 rounded-xl overflow-hidden border border-stone-200">
                        <img
                            src={product.previewImages[0]}
                            alt={product.title}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {product.previewImages.slice(1).map((img, idx) => (
                            <div key={idx} className="aspect-square bg-stone-100 rounded-lg overflow-hidden border border-stone-200">
                                <img src={img} alt={`Preview ${idx + 2}`} className="object-cover w-full h-full" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Details Column */}
                <div>
                    <Badge variant="secondary" className="mb-4 uppercase tracking-wider text-[10px]">{product.type}</Badge>
                    <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">{product.title}</h1>
                    <p className="text-2xl font-medium text-stone-900 mb-6">{formatPrice(product.price)}</p>

                    <div className="prose prose-stone mb-8 text-stone-600">
                        <p>{product.longDescription}</p>
                    </div>

                    <Button size="lg" className="w-full mb-4 font-bold text-lg h-14" href={product.checkoutUrl || '#'}>
                        Buy Now — Instant Download
                    </Button>
                    <p className="text-xs text-center text-stone-500 mb-12">
                        Secure checkout via Stripe (Placeholder). 30-day money-back guarantee.
                    </p>

                    <div className="bg-stone-50 rounded-xl p-6 border border-stone-200 mb-8">
                        <h3 className="font-bold text-stone-900 mb-4 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            What's Included
                        </h3>
                        <ul className="space-y-3">
                            {product.includes.map((item, i) => (
                                <li key={i} className="flex items-start text-sm text-stone-700">
                                    <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {product.faq.length > 0 && (
                        <div className="space-y-4">
                            <h3 className="font-bold text-stone-900 flex items-center">
                                <HelpCircle className="w-4 h-4 mr-2" />
                                FAQ
                            </h3>
                            <div className="space-y-4">
                                {product.faq.map((item, i) => (
                                    <div key={i} className="border-b border-stone-200 pb-4">
                                        <h4 className="font-semibold text-sm text-stone-900 mb-1">{item.question}</h4>
                                        <p className="text-sm text-stone-600">{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
