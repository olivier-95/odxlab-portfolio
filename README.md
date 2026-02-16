# ODxLab Portfolio

Modern, fun, and creative freelance portfolio built with Astro, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Tech Stack**: Astro 4.x + TypeScript + Tailwind CSS v4
- **Fully Responsive**: Mobile-first design (320px - 1920px)
- **Colorful Design**: Playful brand identity with vibrant gradients
- **SEO Optimized**: Meta tags, Open Graph, sitemap ready
- **Fast Performance**: Static site generation, optimized images
- **Smooth Animations**: Scroll animations with Intersection Observer
- **Accessible**: WCAG AA compliant, keyboard navigation
- **Complete Brand**: Logo suite, favicons, brand documentation

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:4321
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├── public/               # Static assets
│   ├── logo*.svg        # Logo variants
│   ├── favicon*         # Favicon package
│   └── site.webmanifest # PWA config
├── src/
│   ├── components/      # Astro components
│   │   ├── Header.astro       # Responsive nav
│   │   ├── Hero.astro         # Hero section
│   │   ├── About.astro        # About section
│   │   ├── Services.astro     # Services grid
│   │   ├── CaseStudies.astro  # Portfolio
│   │   ├── Contact.astro      # Contact form
│   │   └── Footer.astro       # Footer
│   ├── layouts/
│   │   └── Layout.astro       # Base layout + SEO
│   ├── pages/
│   │   └── index.astro        # Main one-page site
│   ├── lib/
│   │   ├── types.ts           # TypeScript types
│   │   └── utils.ts           # Helper functions
│   └── styles/
│       └── global.css         # Global styles + Tailwind
├── docs/brand/          # Brand documentation
│   ├── BRAND_STRATEGY.md
│   ├── BRAND_GUIDELINES.md
│   └── ASSET_REQUIREMENTS.md
├── CLAUDE.md            # Project memory
└── vercel.json          # Vercel config
```

## 🎨 Customization Guide

### 1. Update Content (Priority: HIGH)

Replace placeholder content with your actual information:

**Hero Section** (`src/components/Hero.astro`):
- Update headline and subheadline
- Customize CTA button text

**About Section** (`src/components/About.astro`):
- Replace `[Your Name]` with your actual name
- Update lorem ipsum bio text (3 paragraphs)
- Add your photo (replace gradient placeholder)
- Customize skills badges

**Services Section** (`src/components/Services.astro`):
- Update service titles and descriptions
- Adjust service cards to match your offerings

**Case Studies** (`src/components/CaseStudies.astro`):
- Add your actual project images
- Update project titles, descriptions, and tags
- Add project URLs if available

**Contact Form** (`src/components/Contact.astro`):
- Update form action URL (see Form Setup below)
- Update email address
- Customize location and availability info

**Footer** (`src/components/Footer.astro`):
- Add your social media links (GitHub, LinkedIn, Twitter)
- Update copyright if needed

### 2. Setup Contact Form

**Option A: Formspree (Recommended)**
1. Sign up at [formspree.io](https://formspree.io/)
2. Create a new form and get your form ID
3. Update `src/components/Contact.astro`:
   ```astro
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**Option B: Web3Forms**
1. Sign up at [web3forms.com](https://web3forms.com/)
2. Get your access key
3. Add to `.env`:
   ```
   PUBLIC_WEB3FORMS_KEY=your_access_key_here
   ```
4. Update form action accordingly

### 3. Add Your Images

**Profile Photo**:
- Add your photo to `public/` (e.g., `public/profile.jpg`)
- Update in `src/components/About.astro`

**Project Images**:
- Add to `public/projects/` directory
- Update image paths in `src/components/CaseStudies.astro`

**Recommended sizes**:
- Profile photo: 800x800px minimum
- Project images: 1200x800px for best quality

### 4. Customize Branding (Optional)

**Colors**: Edit `src/styles/global.css` CSS variables:
```css
--color-primary: 255 107 107;    /* Coral Red */
--color-secondary: 78 205 196;   /* Turquoise */
--color-accent: 255 230 109;     /* Sunny Yellow */
```

**Typography**: Update Google Fonts link in `src/layouts/Layout.astro`

**Logo**: Logo files are in `public/`, regenerate if needed

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (if not already):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   Follow prompts to link/create project

4. **Deploy to production**:
   ```bash
   vercel --prod
   ```

**Alternative**: Connect your GitHub repo to Vercel dashboard for automatic deployments.

### Deploy to Netlify

1. Push code to GitHub
2. Go to [app.netlify.com](https://app.netlify.com/)
3. Click "New site from Git"
4. Select your repository
5. Netlify will auto-detect Astro settings
6. Deploy!

For Netlify Forms, add `data-netlify="true"` to your form in `Contact.astro`.

## 🔧 Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# Contact Form (choose one)
PUBLIC_FORMSPREE_ID=your_formspree_id
PUBLIC_WEB3FORMS_KEY=your_key

# Site Config
PUBLIC_SITE_URL=https://yoursite.com
PUBLIC_SITE_NAME=ODxLab

# Analytics (optional)
PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

## 📚 Documentation

- **Project Memory**: See `CLAUDE.md` for project context
- **Brand Strategy**: See `docs/brand/BRAND_STRATEGY.md`
- **Design Guidelines**: See `docs/brand/BRAND_GUIDELINES.md`
- **Asset Requirements**: See `docs/brand/ASSET_REQUIREMENTS.md`

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Fast static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 - Utility-first CSS
- **Icons**: [Lucide Icons](https://lucide.dev/) - Beautiful & consistent
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) - Modern sans-serif
- **Deployment**: [Vercel](https://vercel.com/) - Zero-config deployment

## 📝 Commands Reference

| Command                | Action                                    |
|:-----------------------|:------------------------------------------|
| `npm install`          | Install dependencies                      |
| `npm run dev`          | Start dev server at `localhost:4321`      |
| `npm run build`        | Build production site to `./dist/`        |
| `npm run preview`      | Preview production build locally          |
| `npm test`             | Run all tests once                        |
| `npm run test:watch`   | Run tests in watch mode                   |
| `npm run test:ui`      | Run tests with UI                         |
| `npm run generate:favicons` | Regenerate favicon PNGs from SVG  |

## 🧪 Testing

This project includes comprehensive regression tests to ensure code quality and prevent bugs.

**Test Suite:**
- 38 unit and integration tests
- ~400ms execution time
- Covers Layout.astro URL construction, configuration validation, and edge cases

**Running Tests:**
```bash
# Run all tests
npm test

# Run tests in watch mode (auto-rerun on changes)
npm run test:watch

# Run tests with interactive UI
npm run test:ui
```

**Test Documentation:**
- See `tests/README.md` for test structure and guidelines
- See `tests/TEST_SUMMARY.md` for detailed test coverage

**Test Coverage:**
- ✅ Layout.astro URL construction (17 tests)
- ✅ Integration tests (13 tests)
- ✅ Configuration validation (8 tests)

## 🐛 Troubleshooting

**Issue**: Icons not showing
- **Solution**: Make sure `lucide-astro` is installed: `npm install lucide-astro`

**Issue**: Styles not applying
- **Solution**: Check that `global.css` is imported in `Layout.astro`

**Issue**: Form not working
- **Solution**: Update form action URL with your Formspree ID or Web3Forms key

**Issue**: Build fails
- **Solution**: Run `npm run build` locally to see errors, check TypeScript types

## 🤝 Need Help?

- Check the [Astro Documentation](https://docs.astro.build)
- Review `CLAUDE.md` for project-specific decisions
- Check brand docs in `docs/brand/`

## 📄 License

MIT License - feel free to use this for your own portfolio!

---

Built with ❤️ using Astro, TypeScript, and Tailwind CSS
