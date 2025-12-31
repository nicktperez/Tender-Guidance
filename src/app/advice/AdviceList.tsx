'use client';

import { useState } from 'react';
import type { Post } from '@/lib/mdx';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { readingTime } from '@/lib/utils';
import { Search } from 'lucide-react';

interface AdviceListProps {
    initialPosts: Post[];
    allCategories: string[];
}

export default function AdviceList({ initialPosts, allCategories }: AdviceListProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredPosts = initialPosts.filter((post) => {
        const matchesSearch =
            searchTerm === '' ||
            post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.frontmatter.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.frontmatter.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesCategory = selectedCategory ? post.frontmatter.category === selectedCategory : true;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="mb-12 space-y-6">
                <h1 className="text-4xl font-bold text-stone-900">Advice Library</h1>
                <p className="text-stone-600 max-w-2xl">
                    Straight answers to hard questions. Search for topics or browse by category.
                </p>

                {/* Search & Filters */}
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-2.5 h-5 w-5 text-stone-400" />
                        <input
                            type="text"
                            placeholder="Search titles, summaries, tags..."
                            className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-400"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedCategory === null
                                    ? 'bg-stone-900 text-white'
                                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                                }`}
                        >
                            All
                        </button>
                        {allCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedCategory === cat
                                        ? 'bg-stone-900 text-white'
                                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <Link key={post.slug} href={`/advice/${post.slug}`} className="group block h-full">
                            <Card className="h-full hover:border-stone-400 transition-colors">
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant="secondary">{post.frontmatter.category}</Badge>
                                        <span className="text-xs text-stone-400">{readingTime(post.content)}</span>
                                    </div>
                                    <CardTitle className="group-hover:text-stone-700 transition-colors">
                                        {post.frontmatter.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-stone-600 line-clamp-3">
                                        {post.frontmatter.summary}
                                    </p>
                                </CardContent>
                                <CardFooter className="mt-auto pt-0">
                                    <div className="flex gap-2 flex-wrap">
                                        {post.frontmatter.tags.slice(0, 3).map(tag => (
                                            <span key={tag} className="text-xs text-stone-400">#{tag}</span>
                                        ))}
                                    </div>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 text-stone-500">
                        No posts found matching your criteria.
                    </div>
                )}
            </div>
        </div>
    );
}
