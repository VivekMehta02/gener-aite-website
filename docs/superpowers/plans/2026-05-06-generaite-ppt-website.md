# GenerAite PPT Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert `light profile (1).pptx` into a modern, responsive, production-ready GenerAite landing website that visually matches the PPT.

**Architecture:** Build a single Next.js App Router page using structured content from `src/config/site.ts`, reusable presentation components, and landing modules under `src/features/landing/`. Use extracted PPT slide images as brand-faithful visual anchors while rendering all important copy as semantic HTML.

**Tech Stack:** Next.js latest, React latest, TypeScript, Tailwind CSS, Framer Motion, Lucide React, Vitest, Testing Library.

---

### Task 1: Project Foundation

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.mjs`
- Create: `postcss.config.mjs`
- Create: `tailwind.config.ts`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`

- [ ] Add dependencies and scripts for `dev`, `build`, `start`, `lint`, and `test`.
- [ ] Configure Tailwind design tokens for GenerAite teal, navy, cyan, white, and rose accent.
- [ ] Add metadata for SEO and responsive viewport behavior.

### Task 2: Assets

**Files:**
- Create: `public/assets/slides/slide-01.png` through `slide-20.png`
- Create: optimized image variants under `public/assets/optimized/`

- [ ] Copy extracted PPT slide images into public assets.
- [ ] Generate compressed JPEG/WebP variants for website use.
- [ ] Use `next/image` for visual sections with proper alt text.

### Task 3: Content Model

**Files:**
- Create: `src/config/site.ts`
- Test: `tests/site-data.test.ts`

- [ ] Write tests that prove the content model includes required website sections, clickable CTA URLs, and all major PPT solution categories.
- [ ] Implement typed arrays for navigation, services, solutions, industries, values, metrics, and contact data.

### Task 4: Components

**Files:**
- Create: `src/components/layout/Container.tsx`
- Create: `src/components/ui/SectionHeading.tsx`
- Create: `src/components/ui/Reveal.tsx`
- Create: `src/components/ui/MagneticButton.tsx`
- Create: `src/components/ui/SlideVisual.tsx`
- Create: `src/features/landing/components/SolutionCard.tsx`

- [ ] Build reusable layout, animation, CTA, and visual components.
- [ ] Keep animations subtle and Framer Motion-based.
- [ ] Ensure buttons and links are keyboard accessible.

### Task 5: Sections

**Files:**
- Create: section files under `src/features/landing/sections/`
- Modify: `src/app/page.tsx`

- [ ] Build hero, about, services, solutions, process, industries, why-now, and contact/footer sections.
- [ ] Match the PPT’s visual language: teal bars, diagonal accents, dashboard imagery, white panels, compact corporate density.
- [ ] Make the layout responsive for desktop, tablet, and mobile.

### Task 6: Documentation And Verification

**Files:**
- Create: `README.md`

- [ ] Document setup, build, Vercel, Netlify, and AWS Amplify deployment.
- [ ] Include SEO and performance checklists.
- [ ] Run tests and production build.
