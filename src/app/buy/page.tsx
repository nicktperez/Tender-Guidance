import Link from 'next/link';
import { getAllProducts } from '@/lib/products';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';

export const metadata = {
    title: 'Shop | No-Nonsense Mama',
    description: 'Digital packets, scripts, and art for your journey.',
};

export default function ShopPage() {
    const products = getAllProducts();
    const packets = products.filter((p) => p.type === 'packet');
    const illustrations = products.filter((p) => p.type === 'illustration');

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-stone-900 mb-4">Shop Resources</h1>
                <p className="text-stone-600 max-w-2xl mx-auto">
                    Tools to help you set boundaries, stay calm, and reclaim your space.
                    Instant digital downloads.
                </p>
            </div>

            {/* Packets Section */}
            <section className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-bold text-stone-900">Scripts & Boundary Packs</h2>
                    <div className="h-px flex-1 bg-stone-200"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packets.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Illustrations Section */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-bold text-stone-900">Printable Art</h2>
                    <div className="h-px flex-1 bg-stone-200"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {illustrations.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
}

function ProductCard({ product }: { product: any }) {
    return (
        <Link href={`/buy/${product.slug}`} className="group h-full block">
            <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-stone-200">
                <div className="aspect-[4/3] relative bg-stone-100 overflow-hidden">
                    {/* Placeholder for Next.js Image, using plain img for external placeholder compatibility if not configured in next.config */}
                    <img
                        src={product.previewImages[0]}
                        alt={product.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.featured && (
                        <span className="absolute top-2 right-2 bg-stone-900 text-white text-xs px-2 py-1 rounded font-medium">Bestseller</span>
                    )}
                </div>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-lg leading-tight group-hover:text-stone-700 transition-colors">
                            {product.title}
                        </CardTitle>
                        <span className="font-bold text-stone-900 ml-2">{formatPrice(product.price)}</span>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-stone-600 line-clamp-2">{product.shortDescription}</p>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" className="w-full group-hover:bg-stone-900 group-hover:text-white group-hover:border-stone-900 transition-all">
                        View Details
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    );
}
