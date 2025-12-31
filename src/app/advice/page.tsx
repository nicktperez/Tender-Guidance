import { getAllPosts, getAllCategories } from '@/lib/mdx';
import AdviceList from './AdviceList';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Advice Library | No-Nonsense Mama',
    description: 'Searchable advice for pregnancy and new parenthood.',
};

export default function AdvicePage() {
    const posts = getAllPosts();
    const categories = getAllCategories();

    return <AdviceList initialPosts={posts} allCategories={categories} />;
}
