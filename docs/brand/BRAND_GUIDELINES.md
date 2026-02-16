# Brand Guidelines: ODxLab

## Color Palette

### Primary Colors

**Coral Red** `#FF6B6B` • `rgb(255, 107, 107)`
- **Usage:** Primary CTAs, key highlights, important interactive elements, hero sections
- **Represents:** Energy, passion, creativity, boldness
- **Hover State:** `#FF5252` (darker)
- **Active State:** `#FF3838` (darkest)
- **On Coral Red Text:** White `#FFFFFF` (meets WCAG AA)
- **Accessibility:** Use with white text only; 4.5:1 contrast ratio

**Turquoise** `#4ECDC4` • `rgb(78, 205, 196)`
- **Usage:** Secondary CTAs, links, accents, informational highlights
- **Represents:** Creativity, innovation, freshness, balance
- **Hover State:** `#3DBDB5` (darker)
- **Active State:** `#2CADA5` (darkest)
- **On Turquoise Text:** White `#FFFFFF` or Dark Gray `#2D3748`
- **Accessibility:** Use with white or dark text; check contrast

**Sunny Yellow** `#FFE66D` • `rgb(255, 230, 109)`
- **Usage:** Accents, highlights, badges, attention-grabbing elements (sparingly)
- **Represents:** Playfulness, optimism, joy, creativity
- **Hover State:** `#FFD93D` (slightly darker)
- **Active State:** `#FFCC00` (darkest)
- **On Sunny Yellow Text:** Dark Gray `#2D3748` (NOT white - poor contrast)
- **Accessibility:** MUST use dark text only; never white on yellow

### Supporting Colors

**Lavender** `#A78BFA` • `rgb(167, 139, 250)`
- **Usage:** Tertiary accents, decorative elements, gradient stops
- **Represents:** Creativity, imagination, premium feel

**Orange** `#FB923C` • `rgb(251, 146, 60)`
- **Usage:** Tertiary accents, warm gradients, energy pops
- **Represents:** Enthusiasm, warmth, approachability

**Pink** `#F472B6` • `rgb(244, 114, 182)`
- **Usage:** Tertiary accents, playful elements, gradient stops
- **Represents:** Fun, creativity, modern vibrancy

**Usage Rule for Supporting Colors:**  
Use 1-2 supporting colors per page maximum. They're accents, not primaries. Great for:
- Decorative background shapes
- Icon tints
- Gradient combinations
- Section dividers
- Hover effects

### Neutral Colors

#### Light Mode (Default)
**Background Primary:** `#FFFFFF` • White  
**Background Secondary:** `#F7FAFC` • Light Gray (subtle sections)  
**Background Tertiary:** `#EDF2F7` • Lighter Gray (cards, inputs)

**Text Primary:** `#2D3748` • Dark Gray (main content)  
**Text Secondary:** `#718096` • Medium Gray (supporting text, captions)  
**Text Tertiary:** `#A0AEC0` • Light Gray (disabled, placeholder)

**Border Default:** `#E2E8F0` • Light Gray  
**Border Emphasis:** `#CBD5E0` • Medium Gray

#### Dark Mode (Optional)
**Background Primary:** `#1A202C` • Dark Navy  
**Background Secondary:** `#2D3748` • Charcoal  
**Background Tertiary:** `#4A5568` • Medium Gray

**Text Primary:** `#F7FAFC` • Off-White  
**Text Secondary:** `#CBD5E0` • Light Gray  
**Text Tertiary:** `#718096` • Medium Gray

**Border Default:** `#4A5568` • Dark Gray  
**Border Emphasis:** `#718096` • Medium Gray

### Semantic Colors

**Success** `#10B981` • Green
- Success messages, confirmations, positive states
- On Success Text: White

**Warning** `#F59E0B` • Amber
- Warning messages, caution states, important notices
- On Warning Text: Dark Gray `#2D3748`

**Error** `#EF4444` • Red
- Error messages, destructive actions, critical alerts
- On Error Text: White

**Info** `#3B82F6` • Blue
- Informational messages, neutral notifications, tips
- On Info Text: White

### Gradients

**Hero Gradient (Primary)**
```css
background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
```
- Usage: Hero sections, major CTAs, feature highlights
- Direction: 135deg (diagonal top-left to bottom-right)

**Accent Gradient (Secondary)**
```css
background: linear-gradient(135deg, #FFE66D 0%, #FB923C 100%);
```
- Usage: Accent cards, badges, decorative elements
- Direction: 135deg

**Subtle Background Gradient**
```css
background: linear-gradient(180deg, #FFFFFF 0%, #F7FAFC 100%);
```
- Usage: Section backgrounds for subtle depth

**Creative Gradient (Tertiary)**
```css
background: linear-gradient(135deg, #A78BFA 0%, #F472B6 100%);
```
- Usage: Special sections, call-outs, creative highlights

### Color Usage Guidelines

**DO:**
✅ Use Coral Red for primary CTAs (buttons, main actions)  
✅ Use Turquoise for links and secondary actions  
✅ Use gradients for hero sections and major features  
✅ Mix supporting colors within gradients  
✅ Use neutrals for 80% of the interface  
✅ Ensure 4.5:1 contrast for text (WCAG AA)  
✅ Test color combinations for accessibility  

**DON'T:**
❌ Use all colors on one page (overwhelming)  
❌ Use Sunny Yellow for backgrounds with white text  
❌ Mix more than 3 brand colors in one section  
❌ Rely on color alone to convey meaning (add icons/text)  
❌ Use pure black `#000000` (use Dark Gray instead)  

---

## Typography

### Font Family

**Primary Font:** Inter (Google Fonts)
- **Import:** 
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  ```
- **Usage:** All text (headings, body, UI elements)
- **Weights Used:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold)
- **Characteristics:** Modern, clean, highly readable, geometric humanist
- **Why Inter:** Designed for screens, excellent at small sizes, open-source, professional yet friendly
- **Fallback:** 
  ```css
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  ```

**Monospace Font (Optional):** JetBrains Mono or Fira Code
- **Usage:** Code snippets, technical content (if applicable)
- **Fallback:** 
  ```css
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  ```

### Font Scale

#### Mobile (< 768px)

| Element | Size | Line Height | Weight | Usage |
|---------|------|-------------|--------|-------|
| **Display** | 40px (2.5rem) | 1.1 | 800 | Rare, hero only |
| **H1** | 32px (2rem) | 1.2 | 700 | Page titles, hero headlines |
| **H2** | 24px (1.5rem) | 1.3 | 700 | Section headings |
| **H3** | 20px (1.25rem) | 1.4 | 600 | Subsections, card titles |
| **H4** | 18px (1.125rem) | 1.5 | 600 | Small headings |
| **Body Large** | 18px (1.125rem) | 1.6 | 400 | Intro paragraphs, important text |
| **Body** | 16px (1rem) | 1.6 | 400 | Default text, paragraphs |
| **Body Small** | 14px (0.875rem) | 1.5 | 400 | Captions, labels, secondary text |
| **Tiny** | 12px (0.75rem) | 1.4 | 500 | Footnotes, metadata |

#### Desktop (≥ 768px)

| Element | Size | Line Height | Weight | Usage |
|---------|------|-------------|--------|-------|
| **Display** | 72px (4.5rem) | 1.1 | 800 | Rare, hero only |
| **H1** | 56px (3.5rem) | 1.1 | 700 | Page titles, hero headlines |
| **H2** | 36px (2.25rem) | 1.2 | 700 | Section headings |
| **H3** | 24px (1.5rem) | 1.3 | 600 | Subsections, card titles |
| **H4** | 20px (1.25rem) | 1.4 | 600 | Small headings |
| **Body Large** | 20px (1.25rem) | 1.7 | 400 | Intro paragraphs, important text |
| **Body** | 18px (1.125rem) | 1.7 | 400 | Default text, paragraphs |
| **Body Small** | 16px (1rem) | 1.6 | 400 | Captions, labels |
| **Tiny** | 14px (0.875rem) | 1.5 | 500 | Footnotes, metadata |

### Responsive Typography (Fluid Sizing)

For key headings, use CSS clamp() for smooth scaling:

```css
/* Hero Headline - scales smoothly from mobile to desktop */
h1.hero {
  font-size: clamp(2rem, 5vw + 1rem, 3.5rem);
  /* Min: 32px, Scales with viewport, Max: 56px */
}

/* Section Headings */
h2 {
  font-size: clamp(1.5rem, 3vw + 0.5rem, 2.25rem);
  /* Min: 24px, Max: 36px */
}

/* Body Text */
p {
  font-size: clamp(1rem, 1vw + 0.75rem, 1.125rem);
  /* Min: 16px, Max: 18px */
}
```

### Font Weight Usage

| Weight | Value | Usage |
|--------|-------|-------|
| **Regular** | 400 | Body text, paragraphs, default content |
| **Medium** | 500 | Emphasized body text, navigation links, labels |
| **Semibold** | 600 | Subheadings (H3-H4), button text, important labels |
| **Bold** | 700 | Main headings (H1-H2), strong emphasis |
| **Extrabold** | 800 | Display text, hero headlines (use sparingly) |

### Typography Best Practices

**DO:**
✅ Use max-width on text blocks (65-75 characters per line)  
✅ Increase line-height for readability (1.6-1.7 for body)  
✅ Use generous line-height on mobile (harder to read)  
✅ Pair bold headings with regular body text (contrast)  
✅ Limit to 3 font sizes per section  
✅ Use optical alignment for text (not always center)  

**DON'T:**
❌ Use all caps for long text (hard to read)  
❌ Use font sizes smaller than 14px for body text  
❌ Set line-height below 1.4 (cramped)  
❌ Use more than 3 weights on a single page  
❌ Justify text (creates awkward spacing)  

---

## Spacing & Layout

### Spacing Scale (Tailwind-compatible)

Based on 4px (0.25rem) base unit:

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px (0.25rem) | Tight spacing, icon gaps |
| `sm` | 8px (0.5rem) | Small gaps, compact UI |
| `md` | 16px (1rem) | Default spacing, paragraph gaps |
| `lg` | 24px (1.5rem) | Section padding, card spacing |
| `xl` | 32px (2rem) | Large gaps, component separation |
| `2xl` | 48px (3rem) | Section spacing, major breaks |
| `3xl` | 64px (4rem) | Hero padding, major sections |
| `4xl` | 96px (6rem) | Extra large section breaks |
| `5xl` | 128px (8rem) | Hero vertical padding (desktop) |

### Layout Grid

#### Desktop (≥ 1024px)
- **Columns:** 12-column grid
- **Gutter:** 24px (1.5rem)
- **Max Width:** 1280px (80rem)
- **Margin:** Auto-centered

#### Tablet (768px - 1023px)
- **Columns:** 8-column grid
- **Gutter:** 20px (1.25rem)
- **Margin:** 32px (2rem)

#### Mobile (< 768px)
- **Columns:** 4-column grid
- **Gutter:** 16px (1rem)
- **Margin:** 16px (1rem)

### Container Widths

```css
/* Max content widths */
.container-wide    { max-width: 1280px; } /* Most content */
.container-medium  { max-width: 1024px; } /* Text-heavy sections */
.container-narrow  { max-width: 768px; }  /* Articles, forms */
.container-text    { max-width: 640px; }  /* Pure reading content */
```

### Responsive Breakpoints

```css
/* Mobile First Approach */
/* Base: 320px - 639px (mobile) */

/* Small screens */
@media (min-width: 640px) { } /* sm: Large phones, small tablets */

/* Medium screens */
@media (min-width: 768px) { } /* md: Tablets */

/* Large screens */
@media (min-width: 1024px) { } /* lg: Laptops, desktops */

/* Extra large screens */
@media (min-width: 1280px) { } /* xl: Large desktops */

/* 2X large screens */
@media (min-width: 1536px) { } /* 2xl: Wide screens */
```

### Vertical Rhythm

Maintain consistent vertical spacing:

```css
/* Section spacing */
section { padding-block: 64px; } /* Mobile: 3xl */
@media (min-width: 768px) {
  section { padding-block: 96px; } /* Desktop: 4xl */
}

/* Component spacing */
.component + .component { margin-top: 32px; } /* xl */

/* Paragraph spacing */
p + p { margin-top: 16px; } /* md */

/* Heading to content */
h2 + p { margin-top: 16px; } /* md */
h3 + p { margin-top: 12px; } /* Between md-sm */
```

---

## Visual Elements

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `none` | 0px | Full-bleed images, sharp edges |
| `sm` | 4px | Inputs, tight UI elements |
| `md` | 8px | Buttons, small cards, badges |
| `lg` | 12px | Cards, modals, larger components |
| `xl` | 16px | Feature sections, hero cards |
| `2xl` | 24px | Large feature cards, images |
| `3xl` | 32px | Extra large decorative elements |
| `full` | 9999px | Pills, avatars, circular buttons |

**Playful Touch:** Mix border radius sizes on the same page for visual interest. Use larger radius (16-24px) for a modern, friendly feel.

### Shadows

ODxLab uses **colorful shadows** for a vibrant, modern feel:

#### Neutral Shadows (General Use)

```css
/* Small - Subtle elevation */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03);

/* Medium - Cards, hover states */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05);

/* Large - Modals, popovers */
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);

/* XL - Mega dropdowns, drawers */
box-shadow: 0 20px 25px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.04);
```

#### Colorful Shadows (Brand Elements)

```css
/* Coral Red shadow - Primary CTAs */
box-shadow: 0 8px 20px rgba(255, 107, 107, 0.25), 0 4px 8px rgba(255, 107, 107, 0.15);

/* Turquoise shadow - Secondary CTAs, cards */
box-shadow: 0 8px 20px rgba(78, 205, 196, 0.25), 0 4px 8px rgba(78, 205, 196, 0.15);

/* Sunny Yellow shadow - Accents */
box-shadow: 0 8px 20px rgba(255, 230, 109, 0.3), 0 4px 8px rgba(255, 230, 109, 0.2);

/* Multi-color shadow - Hero elements */
box-shadow: 0 12px 30px rgba(255, 107, 107, 0.15), 
            0 6px 15px rgba(78, 205, 196, 0.15),
            0 3px 8px rgba(0, 0, 0, 0.05);
```

**Usage Guidelines:**
- Use neutral shadows for most cards and components
- Use colorful shadows on hover states for interactivity
- Use brand color shadows for primary CTAs and hero elements
- Keep shadows subtle; avoid going darker than 0.25 alpha

### Icons

**Library:** Lucide React (or Lucide icons)
- **Website:** https://lucide.dev/
- **Why Lucide:** Modern, consistent, open-source, extensive library, React-friendly
- **Style:** Outlined (not filled)
- **Stroke Width:** 2px (default)

**Icon Sizes:**

| Size | Dimension | Usage |
|------|-----------|-------|
| `xs` | 16px | Inline with small text, tight UI |
| `sm` | 20px | Inline with body text, nav icons |
| `md` | 24px | Default size, buttons, headers |
| `lg` | 32px | Feature icons, emphasis |
| `xl` | 48px | Large feature sections |
| `2xl` | 64px | Hero sections, major features |

**Icon Colors:**
- Default: Inherit text color
- Brand: Use Coral Red, Turquoise, or Sunny Yellow
- Semantic: Use success/warning/error colors
- Neutral: Use gray tones for secondary actions

**Icon Best Practices:**
✅ Match icon visual weight with text weight  
✅ Center-align icons with text baseline  
✅ Add 8px gap between icon and text  
✅ Use consistent stroke width throughout  
✅ Add ARIA labels for icon-only buttons  

---

## Logo

### Primary Logo

**File:** `/public/logo.svg`

**Specifications:**
- **Format:** SVG (vector)
- **Dimensions:** 200px × 50px (4:1 ratio approximately)
- **Composition:** "ODxLab" wordmark with playful styling
- **Colors:** 
  - Primary version: Coral Red + Turquoise (or full color)
  - Dark backgrounds: Full color or white version
  - Light backgrounds: Full color or dark version

**Minimum Size:**
- **Digital:** 120px width (maintains legibility)
- **Print:** 1.5 inches width

**Clear Space:**
- Maintain 0.5x logo height on all sides (minimum 25px)
- No other elements in clear space zone

**Usage:**
- Website header (sticky nav)
- Footer
- Email signatures
- Social media branding
- Client presentations

### Logomark (Icon Only)

**File:** `/public/icon.svg`

**Specifications:**
- **Format:** SVG (vector)
- **Dimensions:** 100px × 100px (1:1 ratio)
- **Composition:** Simplified "OD" or geometric symbol
- **Colors:** Same as primary logo variations
- **Must be recognizable at 16×16px (favicon size)**

**Sizes Needed:**
- 16×16 (favicon)
- 32×32 (favicon, small screens)
- 180×180 (Apple touch icon)
- 192×192 (Android icon)
- 512×512 (high-res, splash screens)

**Usage:**
- Favicons
- App icons
- Social media profile pictures
- Small UI elements where full logo doesn't fit

### Logo Variations

1. **Full Color** - Primary use on white/light backgrounds
2. **White** - Use on dark backgrounds or photos
3. **Dark** - Use on very light/colored backgrounds
4. **Monochrome Coral Red** - Special uses, single-color printing
5. **Monochrome Black** - Black & white printing, formal docs

### Logo Don'ts

❌ Don't stretch or distort the logo  
❌ Don't change the colors (use provided variations)  
❌ Don't add effects (drop shadows, glows, outlines)  
❌ Don't rotate the logo  
❌ Don't place on busy backgrounds (reduce contrast)  
❌ Don't make it smaller than minimum size  
❌ Don't enclose in shapes (circles, squares)  

---

## Component Patterns

### Buttons

#### Primary Button
```css
background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
color: white;
padding: 12px 32px; /* Desktop */
padding: 10px 24px; /* Mobile */
border-radius: 8px;
font-weight: 600;
font-size: 16px;
box-shadow: 0 4px 12px rgba(255, 107, 107, 0.25);
transition: all 200ms ease;

/* Hover */
transform: translateY(-2px);
box-shadow: 0 8px 20px rgba(255, 107, 107, 0.3);
```

#### Secondary Button
```css
background: transparent;
color: #4ECDC4;
border: 2px solid #4ECDC4;
padding: 10px 30px; /* Desktop: Account for border */
padding: 8px 22px; /* Mobile */
border-radius: 8px;
font-weight: 600;
font-size: 16px;

/* Hover */
background: #4ECDC4;
color: white;
```

#### Ghost Button
```css
background: transparent;
color: #2D3748;
padding: 12px 24px;
border-radius: 8px;
font-weight: 500;
font-size: 16px;

/* Hover */
background: rgba(78, 205, 196, 0.1);
color: #4ECDC4;
```

**Button Sizes:**

| Size | Height | Padding (H×V) | Font Size | Usage |
|------|--------|---------------|-----------|-------|
| Small | 32px | 16px × 8px | 14px | Compact UI, inline actions |
| Medium | 40px | 24px × 12px | 16px | Default, most buttons |
| Large | 48px | 32px × 16px | 18px | Primary CTAs, hero buttons |

**Accessibility:**
- Minimum 44×44px touch target (mobile)
- Clear focus indicator (2px ring)
- Loading states (spinner + disabled)
- Icon + text for clarity

### Cards

```css
background: white;
border: 1px solid #E2E8F0;
border-radius: 12px;
padding: 24px; /* Desktop */
padding: 16px; /* Mobile */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05);
transition: all 200ms ease;

/* Hover (if interactive) */
transform: translateY(-4px);
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
border-color: #4ECDC4;
```

**Card Variations:**
- **Basic Card:** White background, subtle border
- **Elevated Card:** More prominent shadow, no border
- **Colorful Card:** Gradient background for featured content
- **Outlined Card:** Thicker border, minimal shadow

### Forms

#### Input Field
```css
height: 40px; /* Desktop */
height: 44px; /* Mobile: Larger touch target */
padding: 0 16px;
border: 1px solid #CBD5E0;
border-radius: 8px;
font-size: 16px; /* Prevents iOS zoom */
background: white;

/* Focus */
border-color: #4ECDC4;
outline: none;
box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.1);
```

#### Textarea
```css
min-height: 120px;
padding: 12px 16px;
/* Rest same as input */
```

#### Label
```css
font-size: 14px;
font-weight: 500;
color: #2D3748;
margin-bottom: 8px;
display: block;
```

#### Error State
```css
border-color: #EF4444;
box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);

/* Error message */
color: #EF4444;
font-size: 14px;
margin-top: 4px;
```

**Form Best Practices:**
✅ Labels above inputs (not placeholder-only)  
✅ Clear error messages with solutions  
✅ Inline validation (on blur)  
✅ Visual feedback on submission  
✅ Disabled state while loading  
✅ Autocomplete attributes  

### Navigation

#### Desktop Header (≥ 768px)
```css
height: 64px;
background: white;
border-bottom: 1px solid #E2E8F0;
position: sticky;
top: 0;
z-index: 50;
backdrop-filter: blur(12px); /* If semi-transparent */

/* Links */
font-size: 16px;
font-weight: 500;
color: #2D3748;
padding: 0 16px;
gap: 32px;

/* Active link */
color: #4ECDC4;
border-bottom: 2px solid #4ECDC4;
```

#### Mobile Header (< 768px)
```css
height: 56px;
/* Hamburger menu: 44×44px tap target */

/* Mobile menu (drawer) */
position: fixed;
top: 0;
right: 0;
width: 280px;
height: 100vh;
background: white;
transform: translateX(100%); /* Hidden */
transition: transform 300ms ease;

/* Open state */
transform: translateX(0);
```

**Navigation States:**
- Default
- Hover (desktop only)
- Active/Current page
- Focus (keyboard navigation)

---

## Accessibility

### Color Contrast (WCAG AA Minimum)

**Text Contrast:**
- Normal text (< 18px): **4.5:1** minimum
- Large text (≥ 18px or ≥ 14px bold): **3:1** minimum
- UI components & icons: **3:1** minimum

**Approved Combinations:**

✅ **Passes:**
- White on Coral Red `#FF6B6B` → 4.51:1
- White on Turquoise `#4ECDC4` → 3.02:1 (large text only)
- Dark Gray `#2D3748` on White → 12.6:1
- Dark Gray `#2D3748` on Sunny Yellow `#FFE66D` → 5.8:1

❌ **Fails:**
- White on Sunny Yellow → 1.3:1 (DO NOT USE)
- Light Gray `#A0AEC0` on White → 2.1:1 (metadata only, not critical content)

### Interactive Elements

**Touch Targets:**
- **Minimum:** 44×44px (mobile)
- **Recommended:** 48×48px
- **Spacing:** 8px minimum between targets

**Focus Indicators:**
- **Always visible** (never `outline: none` without replacement)
- **Ring style:** 2px solid or 3px with alpha
- **Color:** Turquoise `#4ECDC4` or high-contrast color
- **Example:**
  ```css
  :focus-visible {
    outline: 2px solid #4ECDC4;
    outline-offset: 2px;
  }
  ```

### Keyboard Navigation

✅ All interactive elements must be keyboard accessible  
✅ Logical tab order (top to bottom, left to right)  
✅ Skip to content link (hidden until focused)  
✅ Escape key closes modals/dropdowns  
✅ Arrow keys for navigation within components  
✅ Enter/Space activates buttons/links  

### Screen Readers

**Semantic HTML:**
```html
<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>
```

**ARIA Labels:**
- Icon-only buttons: `aria-label="Menu"`
- Icon + text: No ARIA needed (text is sufficient)
- Decorative images: `alt=""` or `aria-hidden="true"`
- Informative images: Descriptive alt text

**Landmark Roles:**
```html
<nav aria-label="Main navigation">
<main id="main-content">
<aside aria-label="Related links">
```

### Motion & Animation

**Respect User Preferences:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Default Transitions:**
- Fast interactions: **150-200ms** (button hovers)
- Medium interactions: **300ms** (modals, drawers)
- Slow animations: **500ms** (page transitions)
- Easing: `ease-out` or `cubic-bezier(0.4, 0, 0.2, 1)`

---

## Responsive Design

### Mobile-First Approach

**CRITICAL PRINCIPLE:** Design and build for mobile (320px) first, then enhance for larger screens.

```css
/* Base styles: Mobile (320px+) */
.component {
  padding: 16px;
  font-size: 16px;
}

/* Tablet enhancement (768px+) */
@media (min-width: 768px) {
  .component {
    padding: 24px;
    font-size: 18px;
  }
}

/* Desktop enhancement (1024px+) */
@media (min-width: 1024px) {
  .component {
    padding: 32px;
  }
}
```

### Required Responsive Patterns

#### Navigation
- **Mobile:** Hamburger menu → slide-in drawer
- **Desktop:** Horizontal navigation bar

#### Typography
- Use `clamp()` for fluid sizing
- Reduce heading sizes on mobile
- Maintain 16px minimum body text

#### Images
```html
<img 
  src="image-800.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
  alt="Description"
/>
```

#### Tables
- **Mobile:** Horizontal scroll or card layout
- **Desktop:** Full table layout

#### Grids
```css
/* Mobile: 1 column */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

/* Desktop: 3-4 columns */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
}
```

### Testing Requirements

**Must test on:**
1. **iPhone SE (375×667)** - Smallest modern phone
2. **iPhone 13/14 (390×844)** - Common phone size
3. **iPad (768×1024)** - Tablet portrait
4. **Desktop (1280×720)** - Small laptop
5. **Large Desktop (1920×1080)** - Standard monitor

**Test for:**
- Touch target sizes (44px minimum)
- Readable text (no horizontal scroll)
- Usable forms (iOS zoom prevention: 16px min)
- Proper image sizing (responsive images)
- Navigation functionality

---

## Implementation Notes

### Tailwind CSS Integration

**tailwind.config.js:**
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        coral: '#FF6B6B',
        turquoise: '#4ECDC4',
        sunny: '#FFE66D',
        lavender: '#A78BFA',
        orange: '#FB923C',
        pink: '#F472B6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
    },
  },
}
```

### CSS Custom Properties (Variables)

```css
:root {
  /* Colors */
  --color-coral: #FF6B6B;
  --color-turquoise: #4ECDC4;
  --color-sunny: #FFE66D;
  
  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  
  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-coral: 0 8px 20px rgba(255, 107, 107, 0.25);
}
```

### File Structure

```
/public/
  /brand/
    logo.svg                 # Primary logo
    logo-dark.svg           # Dark version
    icon.svg                # Logomark
    favicon.ico             # Favicon
    og-image.png            # Social share image
    
/src/
  /styles/
    global.css              # Global styles + Tailwind
    
  /components/
    Button.astro            # Reusable button component
    Card.astro              # Card component
    Logo.astro              # Logo component
    
/docs/
  /brand/
    BRAND_STRATEGY.md       # This document's companion
    BRAND_GUIDELINES.md     # This document
    ASSET_REQUIREMENTS.md   # Asset specs
```

---

## Design System Checklist

Before launching, ensure:

### Visual
- [ ] Logo created and exported in all formats
- [ ] Favicon package generated and installed
- [ ] All colors tested for accessibility
- [ ] Typography scales consistently across breakpoints
- [ ] Consistent spacing throughout (4px grid)
- [ ] Border radius consistently applied
- [ ] Shadows consistently styled

### Components
- [ ] Button variants created (primary, secondary, ghost)
- [ ] Form inputs styled with focus states
- [ ] Cards designed with hover states
- [ ] Navigation works on mobile and desktop
- [ ] Error and success states designed

### Accessibility
- [ ] All text meets 4.5:1 contrast minimum
- [ ] All interactive elements ≥ 44px (mobile)
- [ ] Focus indicators visible and styled
- [ ] Keyboard navigation tested
- [ ] Screen reader tested with basic flows
- [ ] Motion respects `prefers-reduced-motion`

### Responsive
- [ ] Mobile (375px) tested
- [ ] Tablet (768px) tested
- [ ] Desktop (1280px) tested
- [ ] No horizontal scroll on any device
- [ ] Touch targets sized appropriately
- [ ] Images responsive with srcset

### Code
- [ ] Tailwind configured with brand colors
- [ ] Fonts loaded and optimized
- [ ] CSS variables defined
- [ ] Components documented
- [ ] Reusable component library started

---

**Document Version:** 1.0  
**Last Updated:** February 16, 2026  
**Next Review:** After first client project or 3 months  

**Quick Reference:**  
- Primary Color: `#FF6B6B` (Coral Red)
- Secondary Color: `#4ECDC4` (Turquoise)  
- Font: Inter  
- Base Spacing: 4px  
- Border Radius: 8-16px  
- Min Touch Target: 44×44px
