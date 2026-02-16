# Brand Asset Requirements: ODxLab

## Overview

This document specifies all brand assets needed for the ODxLab portfolio website. Use this as a checklist when creating or commissioning design assets.

**Target Completion:** Before website launch  
**Priority Order:** Logo → Favicon → Social Media → Optional Extras

---

## 1. Logo (PRIMARY - REQUIRED)

### Primary Logo (Full Wordmark)

**Deliverable:** `logo.svg`

**Specifications:**
- **Format:** SVG (vector, scalable)
- **Recommended Artboard:** 200px × 50px (4:1 aspect ratio)
- **Content:** "ODxLab" wordmark with optional graphic element
- **Style:** Modern, playful, geometric, friendly
- **Typography:** Bold, sans-serif (could be based on Inter or custom)
- **Colors:** Incorporate brand colors creatively:
  - Option 1: Gradient from Coral Red `#FF6B6B` to Turquoise `#4ECDC4`
  - Option 2: Full-color using Coral + Turquoise + Sunny Yellow
  - Option 3: Monochrome with one brand color

**Design Considerations:**
- Must be legible at 120px width (minimum digital size)
- Should work on both light and dark backgrounds
- Consider a playful element: dots, gradients, geometric shapes
- "xLab" portion could have special treatment (different color, weight)

**File Exports Needed:**
1. `logo.svg` - Primary full-color version
2. `logo-white.svg` - White version (for dark backgrounds)
3. `logo-dark.svg` - Dark/black version (for light backgrounds)
4. `logo-coral.svg` - Monochrome Coral Red (special uses)

**PNG Backups (optional):**
- `logo.png` @ 1200px width (high-res, transparent background)
- `logo-white.png` @ 1200px width
- `logo-dark.png` @ 1200px width

---

### Logomark / Icon (Symbol Only)

**Deliverable:** `icon.svg`

**Specifications:**
- **Format:** SVG (vector)
- **Dimensions:** 100px × 100px (1:1 square ratio)
- **Content:** Simplified version of logo OR standalone symbol
- **Style:** Must match logo aesthetic
- **Colors:** Same options as primary logo

**Design Considerations:**
- **CRITICAL:** Must be recognizable at 16×16px (favicon size)
- Simple, bold shapes (complex details get lost when small)
- Could be:
  - Monogram: "OD" or "O" stylized
  - Geometric symbol related to "lab" concept
  - Abstracted version of full logo mark
- Should feel connected to full logo but work independently

**File Exports Needed:**
1. `icon.svg` - Full-color icon
2. `icon-white.svg` - White version
3. `icon-dark.svg` - Dark version

---

## 2. Favicon Package (REQUIRED)

### Files Required

A complete favicon package for all browsers and devices:

#### Core Favicon Files

**1. favicon.ico**
- **Format:** ICO (multi-resolution)
- **Sizes included:** 16×16, 32×32, 48×48
- **Usage:** Legacy browser support
- **Location:** `/public/favicon.ico`

**2. favicon.svg**
- **Format:** SVG
- **Usage:** Modern browsers (Chrome, Firefox, Safari)
- **Advantage:** Scalable, perfect at any size
- **Location:** `/public/favicon.svg`
- **Tip:** Use `icon.svg` simplified further if needed

#### PNG Favicons

**3. favicon-16x16.png**
- **Size:** 16×16px
- **Format:** PNG, transparent background
- **Usage:** Browser tabs (small)

**4. favicon-32x32.png**
- **Size:** 32×32px
- **Format:** PNG, transparent background
- **Usage:** Browser tabs (standard), Windows taskbar

#### Apple Touch Icon

**5. apple-touch-icon.png**
- **Size:** 180×180px
- **Format:** PNG, opaque background
- **Background:** White or subtle gradient (not transparent)
- **Usage:** iOS home screen, Safari bookmarks
- **Padding:** Include ~10% padding around icon for iOS
- **Location:** `/public/apple-touch-icon.png`

#### Android Icons

**6. android-chrome-192x192.png**
- **Size:** 192×192px
- **Format:** PNG, transparent OR opaque
- **Usage:** Android home screen

**7. android-chrome-512x512.png**
- **Size:** 512×512px
- **Format:** PNG, transparent OR opaque
- **Usage:** Android splash screen, high-res displays

#### Web Manifest

**8. site.webmanifest**
- **Format:** JSON
- **Usage:** PWA support, Android icons configuration
- **Location:** `/public/site.webmanifest`

**Content Template:**
```json
{
  "name": "ODxLab Portfolio",
  "short_name": "ODxLab",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#FF6B6B",
  "background_color": "#FFFFFF",
  "display": "standalone"
}
```

### HTML Implementation

Add to `<head>` section:

```html
<!-- Favicons -->
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#FF6B6B">
```

### Favicon Design Tips

✅ **DO:**
- Keep it simple (recognizable at 16px)
- Use 1-2 colors maximum at small sizes
- Test at actual size (16×16, 32×32)
- Ensure good contrast against browser chrome
- Consider how it looks in dark mode

❌ **DON'T:**
- Use fine details (they disappear)
- Use light colors on transparent (hard to see)
- Make it too complex
- Use gradients at 16px size (use solid colors)

---

## 3. Social Media Assets (REQUIRED)

### Open Graph Image (Facebook, LinkedIn, Discord)

**Deliverable:** `og-image.png`

**Specifications:**
- **Size:** 1200px × 630px (1.91:1 ratio)
- **Format:** PNG or JPG
- **File Size:** < 8MB (ideally < 1MB)
- **Location:** `/public/og-image.png`

**Content:**
- ODxLab logo prominently displayed
- Tagline or brief description
- Colorful, on-brand background (gradient?)
- Should represent the portfolio vibe

**Safe Zones:**
- Keep important content within central 1200×600px
- Logos/text should be visible even if cropped

**Design Ideas:**
- Gradient background (Coral → Turquoise)
- Logo centered with tagline below
- Geometric shapes as decoration
- Keep text large and readable (min 48px)

### Twitter/X Card Image

**Deliverable:** `twitter-image.png`

**Specifications:**
- **Size:** 1200px × 600px (2:1 ratio)
- **Format:** PNG or JPG
- **File Size:** < 5MB
- **Location:** `/public/twitter-image.png`

**Note:** Can be the same as OG image, just ensure it works when cropped to 2:1 ratio.

### HTML Implementation

```html
<!-- Open Graph -->
<meta property="og:image" content="https://odxlab.com/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="ODxLab - Creative Design for Modern Businesses">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://odxlab.com/twitter-image.png">
<meta name="twitter:image:alt" content="ODxLab - Creative Design for Modern Businesses">
```

---

## 4. Typography Setup (REQUIRED)

### Font Loading

**Primary Font:** Inter (Google Fonts)

**Implementation:** Already configured in Astro project

**Weights Needed:**
- 400 (Regular) - Body text
- 500 (Medium) - Emphasized text, nav links
- 600 (Semibold) - Subheadings, buttons
- 700 (Bold) - Main headings
- 800 (Extrabold) - Hero headlines (optional)

**Google Fonts Import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

**CSS:**
```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

**Status:** ✅ Inter is free and already implemented

---

## 5. Color System (REQUIRED)

### Implementation

**Tailwind Config:** Already set up in project

**CSS Custom Properties:**

Create in `/src/styles/global.css`:

```css
:root {
  /* Brand Colors */
  --color-coral: #FF6B6B;
  --color-coral-hover: #FF5252;
  --color-coral-active: #FF3838;
  
  --color-turquoise: #4ECDC4;
  --color-turquoise-hover: #3DBDB5;
  --color-turquoise-active: #2CADA5;
  
  --color-sunny: #FFE66D;
  --color-sunny-hover: #FFD93D;
  --color-sunny-active: #FFCC00;
  
  --color-lavender: #A78BFA;
  --color-orange: #FB923C;
  --color-pink: #F472B6;
  
  /* Neutrals */
  --color-dark: #2D3748;
  --color-gray: #718096;
  --color-light: #F7FAFC;
  
  /* Semantic */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;
  
  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
  --gradient-accent: linear-gradient(135deg, #FFE66D 0%, #FB923C 100%);
  --gradient-creative: linear-gradient(135deg, #A78BFA 0%, #F472B6 100%);
}
```

**Status:** ✅ Colors defined, ready to implement in CSS

---

## 6. Component Assets (OPTIONAL)

These are nice-to-have but not required for MVP:

### Custom Illustrations

**Empty States:**
- No projects yet
- No results found
- Coming soon

**Hero Illustration:**
- Abstract geometric shapes
- Creative workspace scene
- Colorful, modern aesthetic

**About Section:**
- Professional photo or avatar
- Illustrated version of photo (optional)
- Background decorative elements

**Style:**
- Flat or semi-flat design
- Use brand colors
- Geometric shapes
- Playful but professional

### Icon Set (OPTIONAL)

**Note:** Lucide Icons is already configured and provides 1000+ icons. Custom icons only needed if specific symbols are required.

**Potential Custom Icons:**
- ODxLab-specific service icons
- Process step icons
- Unique tech stack icons

**Specifications:**
- SVG format
- 24×24px base size
- 2px stroke width
- Outlined style (matches Lucide)
- Brand colors

---

## 7. Additional Assets (OPTIONAL)

### Patterns & Textures

**Background Patterns:**
- Subtle geometric patterns
- Dot grids
- Line patterns
- Noise texture

**Usage:**
- Section backgrounds
- Card backgrounds
- Hero overlays

**Format:** SVG or PNG (tileable)

### Photography

**If using photos:**
- Professional headshot (About section)
- Workspace/office photos
- Project mockup templates

**Requirements:**
- High resolution (min 2000px wide)
- Bright, colorful, modern vibe
- Consistent color grading
- Optimized for web (WebP format)

### Brand Elements

**Decorative Shapes:**
- Circles
- Rounded rectangles
- Gradient blobs
- Abstract geometric compositions

**Usage:**
- Background decorations
- Section dividers
- Visual interest

**Format:** SVG (vector)

---

## Asset Creation Workflow

### DIY Approach

**Logo Design:**
1. **Option A:** Use Figma/Adobe Illustrator
   - Start with Inter Bold for "ODxLab"
   - Add geometric shapes or gradient
   - Export SVG
   
2. **Option B:** Use online logo makers
   - Looka.com
   - Canva (Pro version for SVG export)
   - Hatchful by Shopify (free)

**Favicon Generation:**
- Use https://realfavicongenerator.net/
- Upload `icon.svg` or `icon.png`
- Download complete package
- Move files to `/public/`

**Social Media Images:**
- Design in Canva (free templates available)
- Use Figma with templates
- Export at correct dimensions

### Professional Approach

**Hire a Designer:**
- **Platforms:** Fiverr, Upwork, Dribbble, 99designs
- **Budget:** $50-$300 for logo + favicon package
- **Brief:** Provide this document + brand guidelines
- **Deliverables:** All files listed in sections 1-3

**Stock/Template Resources:**
- **Logoipsum:** Free placeholder logos (temporary)
- **Unsplash/Pexels:** Free stock photography
- **unDraw:** Free customizable illustrations
- **Heroicons/Lucide:** Free icon sets (already using Lucide)

---

## File Organization

### Directory Structure

```
/public/
  ├── brand/
  │   ├── logo.svg                    # Primary logo
  │   ├── logo-white.svg              # White version
  │   ├── logo-dark.svg               # Dark version
  │   ├── logo-coral.svg              # Monochrome
  │   ├── icon.svg                    # Logomark
  │   ├── icon-white.svg              # White logomark
  │   └── icon-dark.svg               # Dark logomark
  │
  ├── favicon.ico                     # Multi-res ICO
  ├── favicon.svg                     # Modern favicon
  ├── favicon-16x16.png               # Small PNG
  ├── favicon-32x32.png               # Standard PNG
  ├── apple-touch-icon.png            # iOS icon
  ├── android-chrome-192x192.png      # Android icon
  ├── android-chrome-512x512.png      # Android icon (large)
  ├── site.webmanifest                # PWA manifest
  │
  ├── og-image.png                    # Social share image
  ├── twitter-image.png               # Twitter card
  │
  └── images/
      ├── hero/
      ├── projects/
      └── about/
```

---

## Delivery Checklist

### Minimum Viable Product (MVP)

Essential assets to launch:

- [ ] `logo.svg` - Primary full-color logo
- [ ] `logo-white.svg` - White version for dark backgrounds
- [ ] `icon.svg` - Logomark/icon
- [ ] `favicon.ico` - Legacy browser favicon
- [ ] `favicon.svg` - Modern browser favicon
- [ ] `apple-touch-icon.png` - iOS home screen icon
- [ ] `og-image.png` - Social media preview image
- [ ] Inter font configured (already done ✅)
- [ ] CSS color variables defined

### Nice to Have

Enhance the brand over time:

- [ ] `logo-dark.svg` - Dark version
- [ ] `logo-coral.svg` - Monochrome version
- [ ] Complete Android icon set
- [ ] `site.webmanifest` configured
- [ ] `twitter-image.png` optimized
- [ ] Custom illustrations (hero, empty states)
- [ ] Professional photos
- [ ] Background patterns/decorations

### Future Enhancements

- [ ] Animated logo version
- [ ] Brand video/motion graphics
- [ ] Email signature template
- [ ] Business card design (if needed)
- [ ] Letterhead/invoice template
- [ ] Presentation template
- [ ] Social media templates (posts, stories)

---

## Usage Guidelines

### Logo Usage

**DO:**
✅ Use provided logo files (don't recreate)  
✅ Maintain clear space (0.5x logo height)  
✅ Use on backgrounds with sufficient contrast  
✅ Scale proportionally (lock aspect ratio)  
✅ Use white version on dark backgrounds  
✅ Use dark version on light backgrounds  

**DON'T:**
❌ Stretch, distort, or rotate the logo  
❌ Change colors or apply effects  
❌ Use on busy backgrounds (reduces legibility)  
❌ Make smaller than 120px width (digital)  
❌ Enclose in shapes or add borders  
❌ Rearrange or modify elements  

### Icon/Logomark Usage

**When to use logomark instead of full logo:**
- Browser tabs (favicon)
- App icons
- Social media profile pictures
- Very small spaces (< 120px width)
- Square format requirements
- Loading indicators

**When to use full logo:**
- Website header
- Footer
- Email signatures
- Marketing materials
- Anywhere with adequate space (> 120px)

### Color Usage Hierarchy

1. **Primary Use:** Coral Red, Turquoise (80% of brand color usage)
2. **Secondary Use:** Sunny Yellow (15% - accents)
3. **Tertiary Use:** Lavender, Orange, Pink (5% - decorative)
4. **Neutrals:** White, Dark Gray, Light Gray (majority of interface)

### File Format Guide

| Format | Use Case |
|--------|----------|
| **SVG** | Logos, icons, web graphics (scalable) |
| **PNG** | Raster images with transparency (favicons, social) |
| **JPG** | Photos, images without transparency |
| **ICO** | Legacy browser favicons |
| **WebP** | Modern image format (photos, smaller file size) |

---

## Tools & Resources

### Design Tools

**Free:**
- **Figma** - Full-featured design tool (web-based)
- **Inkscape** - Vector graphics editor (desktop)
- **GIMP** - Raster image editor (desktop)
- **Canva Free** - Simplified design tool (web)

**Paid:**
- **Adobe Illustrator** - Professional vector editor
- **Adobe Photoshop** - Professional raster editor
- **Sketch** - Mac-only design tool
- **Affinity Designer** - One-time purchase alternative

### Favicon Tools

- **RealFaviconGenerator** - https://realfavicongenerator.net/
- **Favicon.io** - https://favicon.io/ (text to favicon)
- **Figma Favicon Export** - Plugin

### Color Tools

- **Coolors** - https://coolors.co/ (palette generator)
- **Contrast Checker** - https://webaim.org/resources/contrastchecker/
- **Color Contrast Analyzer** - Free desktop app

### Image Optimization

- **TinyPNG** - https://tinypng.com/ (PNG compression)
- **Squoosh** - https://squoosh.app/ (Google's image optimizer)
- **ImageOptim** - Mac app for image optimization

### Stock Resources

- **Unsplash** - Free high-quality photos
- **Pexels** - Free photos and videos
- **unDraw** - Free customizable illustrations
- **Heroicons** - Free MIT-licensed icons
- **Lucide Icons** - Free icon set (already using)

---

## Questions & Answers

### "Do I REALLY need all these favicon sizes?"

**Short answer:** For professional appearance, yes.

**Minimum to function:**
- `favicon.ico` (legacy)
- `favicon.svg` (modern)
- `apple-touch-icon.png` (iOS)

**Best practice:** Include all sizes for optimal display across all devices and platforms.

### "Can I use a free online logo maker?"

**Yes!** For a freelance portfolio, a well-designed logo from Canva, Looka, or similar tools is perfectly acceptable. Just ensure:
- You can export SVG (important for web)
- You have commercial rights to use it
- It aligns with brand guidelines (colors, style)

### "What if I'm not a designer?"

**Options:**
1. **DIY with templates** - Canva has great logo templates
2. **Hire on Fiverr** - $50-$150 for logo + favicon package
3. **Use placeholders initially** - Launch with text logo, upgrade later
4. **Trade services** - Exchange web design work for logo design

### "Can I launch without a logo?"

**Yes, but...** You can start with:
- Text-based logo using Inter Bold
- Single-letter icon ("O" in brand colors)
- Temporary placeholder

**But plan to upgrade within first 3 months.** A professional logo significantly impacts credibility with SMB clients.

### "How do I test my favicon?"

1. Add favicon files to `/public/`
2. Run `npm run dev`
3. Open http://localhost:4321
4. Check browser tab for icon
5. Test on mobile by adding to home screen
6. Use RealFaviconGenerator's checker

### "What about dark mode?"

**Logo considerations:**
- Create white version for dark backgrounds
- Test logo visibility in both modes
- Consider a semi-transparent white version if needed

**Site support:**
- Dark mode is optional for MVP
- Can be added later with CSS variables
- Focus on perfecting light mode first

---

## Timeline Estimate

### DIY Approach

| Task | Time | Priority |
|------|------|----------|
| Design logo in Figma/Canva | 2-4 hours | High |
| Export logo variations | 30 min | High |
| Create favicon package | 30 min | High |
| Design OG image | 1 hour | High |
| Implement in codebase | 1 hour | High |
| Test across devices | 1 hour | High |
| **Total DIY** | **6-8 hours** | |

### Professional Approach

| Task | Time | Cost | Priority |
|------|------|------|----------|
| Brief designer | 1 hour | $0 | High |
| Designer creates concepts | 3-5 days | $150-300 | High |
| Revisions | 1-2 days | Included | High |
| Receive final files | Instant | - | High |
| Implement in codebase | 1 hour | $0 | High |
| **Total Professional** | **5-7 days** | **$150-300** | |

---

## Next Steps

1. **Decide on approach:** DIY or hire designer
2. **Create logo & logomark** (highest priority)
3. **Generate favicon package** using RealFaviconGenerator
4. **Design OG social image** in Canva or Figma
5. **Add files to `/public/` directory**
6. **Update HTML `<head>` with meta tags**
7. **Test on multiple devices and browsers**
8. **Launch! 🚀**

---

**Document Version:** 1.0  
**Last Updated:** February 16, 2026  
**Owner:** ODxLab Brand System

**Quick Links:**
- Brand Strategy: `BRAND_STRATEGY.md`
- Brand Guidelines: `BRAND_GUIDELINES.md`
- Asset Requirements: This document
