import productsData from '@/data/products.json';

export type Product = {
    id: string;
    slug: string;
    title: string;
    type: 'packet' | 'illustration';
    price: number;
    shortDescription: string;
    longDescription: string;
    includes: string[];
    previewImages: string[];
    faq: Array<{ question: string; answer: string }>;
    checkoutUrl: string;
    featured: boolean;
};

export function getAllProducts(): Product[] {
    return productsData as Product[];
}

export function getProductBySlug(slug: string): Product | undefined {
    return (productsData as Product[]).find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
    return (productsData as Product[]).filter((p) => p.featured);
}
