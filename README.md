# No-Nonsense Mama

A production-ready MVP website for "No-Nonsense Mama", offering unbiased advice and digital products for expecting parents.

## Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS (v4)
- **Content**: Local MDX Files (`src/content/advice`)
- **Data**: JSON Product Catalog (`src/data/products.json`)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser.

## How to Manage Content

### Adding Advice Posts
1. Create a new `.mdx` file in `src/content/advice/`.
2. Add the required frontmatter:
   ```yaml
   ---
   title: "Your Title Here"
   date: "YYYY-MM-DD"
   category: "Category Name"
   tags: ["tag1", "tag2"]
   summary: "Short description for the card."
   ---
   ```
3. Write your content using Markdown/MDX.

### Adding Products
1. Open `src/data/products.json`.
2. Add a new object to the array following the `Product` schema:
   ```json
   {
     "id": "unique-id",
     "slug": "url-friendly-slug",
     "title": "Product Title",
     "type": "packet" | "illustration",
     "price": 10,
     ...
   }
   ```
3. Add preview images (URLs or local paths in `public/`).

## Deployment
This project is ready for Vercel.
1. Push to GitHub.
2. Import project in Vercel.
3. Deploy.

## Future TODOs
- [ ] Connect a real email service provider (Resend, Mailchimp) in `src/app/contact/page.tsx` and the newsletter form `src/app/page.tsx`.
- [ ] Connect a payment processor (Stripe/Gumroad) and update `checkoutUrl` in `products.json`.
- [ ] Add Google Analytics or plausible.io.
