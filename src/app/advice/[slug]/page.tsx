import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Share2 } from 'lucide-react';
import { Metadata } from 'next';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) {
        return { title: 'Post Not Found' };
    }
    return {
        title: `${post.frontmatter.title} | No-Nonsense Mama`,
        description: post.frontmatter.summary,
    };
}

const components = {
    h2: (props: any) => <h2 {...props} className="text-2xl font-bold mt-8 mb-4 text-stone-900" />,
    h3: (props: any) => <h3 {...props} className="text-xl font-semibold mt-6 mb-3 text-stone-800" />,
    p: (props: any) => <p {...props} className="mb-4 text-stone-700 leading-relaxed" />,
    ul: (props: any) => <ul {...props} className="list-disc pl-5 mb-4 space-y-2 text-stone-700" />,
    li: (props: any) => <li {...props} />,
    strong: (props: any) => <strong {...props} className="font-semibold text-stone-900" />,
    a: (props: any) => <a {...props} className="text-stone-900 underline hover:text-stone-600" />,
    blockquote: (props: any) => <blockquote {...props} className="border-l-4 border-stone-300 pl-4 py-1 italic bg-stone-50 text-stone-600 mb-4" />,
};

export default async function AdvicePostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <Link href="/advice" className="inline-flex items-center text-sm text-stone-500 hover:text-stone-900 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Library
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Content */}
                <article className="lg:col-span-8">
                    <header className="mb-8">
                        <div className="flex gap-2 mb-4">
                            <Badge>{post.frontmatter.category}</Badge>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                            {post.frontmatter.title}
                        </h1>
                        <p className="text-xl text-stone-600 border-l-4 border-stone-800 pl-4 py-2 bg-stone-100/50">
                            {post.frontmatter.summary}
                        </p>
                    </header>

                    <div className="prose prose-stone max-w-none">
                        <MDXRemote source={post.content} components={components} />
                    </div>

                    <hr className="my-12 border-stone-200" />

                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                        <h3 className="font-bold text-lg mb-2">Sources Policy</h3>
                        <p className="text-sm text-stone-500">
                            This content is based on general best practices and communications strategies. It is not medical advice.
                            Always consult your healthcare provider for medical questions.
                        </p>
                    </div>
                </article>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    <div className="sticky top-24 space-y-8">
                        {/* CTA Box */}
                        <div className="bg-stone-900 text-stone-50 p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold mb-3">Want these scripts on your phone?</h3>
                            <p className="text-stone-300 mb-6 text-sm">
                                Get our downloadable "Boundaries Pack" with printable cheatsheets and phone wallpapers so you never freeze up.
                            </p>
                            <Button href="/buy" variant="secondary" fullWidth>
                                Shop Scripts & Packs
                            </Button>
                        </div>

                        {/* Newsletter Mini */}
                        <div className="bg-white border border-stone-200 p-6 rounded-xl">
                            <h3 className="font-bold text-stone-900 mb-2">Weekly Wisdom</h3>
                            <p className="text-sm text-stone-600 mb-4">
                                Join 5,000+ parents getting one clear, helpful email a week.
                            </p>
                            <input
                                type="email"
                                placeholder="Email..."
                                className="w-full px-3 py-2 border border-stone-200 rounded mb-2 text-sm"
                            />
                            <Button size="sm" fullWidth>Subscribe</Button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
