export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-6 py-12 max-w-3xl prose prose-stone">
            <h1>Privacy Policy</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>
                No-Nonsense Mama respects your privacy. We do not sell your data.
            </p>
            <h2>Information We Collect</h2>
            <p>
                We only collect information you voluntarily provide (email, name) when you purchase a product or sign up for our newsletter.
            </p>
        </div>
    );
}
