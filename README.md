# GenerAite Website

Modern responsive website rebuilt from `light profile (1).pptx` for GenerAite Private Limited.

The site is not a slide viewer. It converts the PPT into real website sections while preserving the deck's visual language: white corporate layouts, teal footer bands, diagonal accents, smart-city imagery, dashboard screenshots, and compact technology cards.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Vitest

## Project Structure

```text
src/app/              Next.js App Router entry, metadata, global styles
src/components/       Shared layout and UI primitives
src/features/landing/ Landing page sections and feature-specific components
src/config/           Typed site content and PPT-to-section mappings
src/lib/              Shared utilities
public/assets/        Extracted PPT slide assets and optimized web variants
tests/                Vitest coverage for structured site data
docs/superpowers/     Implementation planning notes
```

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run test
npm run lint
npm run build
```

The production build creates a static `out/` folder. Upload the contents of `out/` to a static hosting provider such as Hostinger shared hosting.

## Deployment

### Hostinger Static Hosting

1. Run `npm install`.
2. Run `npm run build`.
3. Open the generated `out/` folder.
4. Upload the contents of `out/` into Hostinger's `public_html` folder.
5. Make sure `index.html`, `_next/`, and `assets/` are directly inside `public_html`.

### Vercel

1. Push this folder to a Git repository.
2. Import the repo in Vercel.
3. Use the default Next.js framework settings.
4. Build command: `npm run build`
5. Output directory: `out`

### Netlify

1. Connect the Git repository in Netlify.
2. Build command: `npm run build`
3. Publish directory: `out`

### AWS Amplify

1. Connect the Git repository in AWS Amplify Hosting.
2. Use static site hosting.
3. Build command: `npm run build`
4. Artifacts directory: `out`
5. Add environment variables only if future integrations require them.

## SEO Checklist

- Semantic sections with one primary `h1`.
- Metadata and Open Graph image configured in `src/app/layout.tsx`.
- Organization JSON-LD included in `src/app/page.tsx`.
- All major PPT solution categories rendered as HTML text.
- CTA links use real `mailto:` and website URLs.
- Images include descriptive alt text.

## Performance Checklist

- Optimized JPG variants generated from PPT slides under `public/assets/optimized`.
- Above-the-fold hero image uses `priority`.
- Non-critical imagery loads through `next/image`.
- CSS uses Tailwind utility classes and avoids heavy runtime styling.
- Animations are subtle and respect `prefers-reduced-motion`.

## Notes

The original PPT slide PNGs are preserved in `public/assets/slides`. The website uses optimized variants by default to keep the page lighter while retaining the PPT look.
