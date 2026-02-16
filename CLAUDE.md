# ODxLab Portfolio - Project Memory

## Project Overview

**Name:** ODxLab Portfolio  
**Type:** Static one-page freelance portfolio website  
**Created:** February 16, 2026  
**Purpose:** Personal portfolio for freelancing, targeting SMB clients

## Tech Stack

- **Framework:** Astro 4.x (static site generator)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide Icons
- **Deployment:** Vercel
- **Version Control:** Git + GitHub

## Brand Identity

**Brand Name:** ODxLab

**Brand Adjectives:**
- Modern
- Fun
- Creative

**Visual Style:** Playful, colorful, vibrant

**Target Audience:** Small and Medium Businesses (SMBs) needing creative freelance services

## Brand Colors

```css
Primary: #FF6B6B (Coral Red) - energetic
Secondary: #4ECDC4 (Turquoise) - creative
Accent: #FFE66D (Sunny Yellow) - playful
Supporting: #A78BFA (Lavender), #FB923C (Orange), #F472B6 (Pink)
Neutrals: #2D3748 (Dark), #718096 (Gray), #F7FAFC (Light)
```

**Gradients:**
- Hero: Coral Red → Turquoise (135deg)
- Accent: Sunny Yellow → Orange (135deg)

## Typography

- **Font Family:** Inter (Google Fonts)
- **Headings:** Bold, geometric
- **Body:** Regular, readable
- **Sizes:**
  - Mobile: H1 32px, H2 24px, H3 20px, Body 16px
  - Desktop: H1 56px, H2 36px, H3 24px, Body 18px

## Site Structure

**Single-page layout with sections:**
1. Header (sticky navigation)
2. Hero (gradient background, CTA)
3. About (bio, skills, photo)
4. Services (4 service cards)
5. Case Studies (portfolio grid)
6. Contact (form with validation)
7. Footer (social links, copyright)

## Responsive Design

**Breakpoints:**
- xs: 320px (small phones)
- sm: 640px (phones)
- md: 768px (tablets)
- lg: 1024px (laptops)
- xl: 1280px (desktops)
- 2xl: 1536px (large screens)

**Mobile-First Approach:**
- Stacked layout on mobile
- Hamburger menu < 768px
- Multi-column grid on desktop
- Touch-friendly targets (44x44px minimum)

## Features

- Smooth scroll navigation
- Scroll animations (Intersection Observer)
- Responsive navigation (hamburger → horizontal)
- Contact form (Formspree/Web3Forms integration)
- SEO optimized (meta tags, Open Graph)
- Accessible (WCAG AA, keyboard nav, semantic HTML)
- Fast loading (static site, optimized images)

## Content Strategy

**Current Status:** Lorem ipsum placeholders

**To Customize:**
1. Replace hero headline and subheadline
2. Add real bio and skills in About section
3. Update service offerings (currently 4 placeholder services)
4. Add actual project images and descriptions
5. Update contact form endpoint
6. Add social media links to footer

## Development Commands

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Build for production (outputs to dist/)
npm run preview   # Preview production build locally
```

## Deployment

**Platform:** Vercel  
**Build Command:** `npm run build`  
**Output Directory:** `dist`  
**Environment Variables:**
- `PUBLIC_FORMSPREE_ID` or `PUBLIC_WEB3FORMS_KEY` for contact form
- `PUBLIC_SITE_URL` for canonical URLs
- `PUBLIC_SITE_NAME` for SEO

## File Structure

```
src/
├── pages/
│   └── index.astro           # Main one-page site
├── layouts/
│   └── Layout.astro          # Base layout with SEO
├── components/
│   ├── Header.astro          # Responsive navigation
│   ├── Hero.astro            # Hero section
│   ├── About.astro           # About section
│   ├── Services.astro        # Services grid
│   ├── CaseStudies.astro    # Portfolio showcase
│   ├── Contact.astro         # Contact form
│   ├── Footer.astro          # Footer
│   └── Logo.astro            # ODxLab logo
├── styles/
│   └── global.css            # Global styles + Tailwind
└── lib/
    ├── types.ts              # TypeScript types
    └── utils.ts              # Helper functions
```

## Design Guidelines

**Spacing:** 4px base unit (Tailwind spacing scale)  
**Border Radius:** Medium to large (8-16px) for playful feel  
**Shadows:** Soft, colorful shadows (not just gray)  
**Animations:** Smooth, bouncy transitions  
**Icons:** Rounded, outlined style (Lucide)

## Accessibility

- Semantic HTML5 elements
- ARIA labels for icon-only buttons
- Focus visible styles (colorful outline)
- Color contrast WCAG AA minimum
- Keyboard navigation support
- Skip to content link
- Alt text for all images
- Form labels and error messages
- Respects prefers-reduced-motion

## Next Steps

1. **Customize Content:** Replace all lorem ipsum with real content
2. **Add Images:** Add your photo and project screenshots
3. **Setup Form:** Configure Formspree or Web3Forms for contact form
4. **Add Social Links:** Update footer with your social media profiles
5. **Custom Domain:** Configure custom domain in Vercel (optional)
6. **Analytics:** Add Google Analytics or Plausible (optional)

## Notes

- All components are mobile-first and fully responsive
- Color palette can be customized in `src/styles/global.css`
- Tailwind config extends with ODxLab brand colors
- Lucide icons used throughout for consistency
- Static site = excellent performance and SEO
