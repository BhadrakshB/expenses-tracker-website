# Pages and Routing Guide

In Astro, **files in the `src/pages/` folder become URLs**. This is called "file-based routing"—no router configuration needed!

---

## How Routing Works

```
src/pages/
├── index.astro      →  yoursite.com/
├── pricing.astro    →  yoursite.com/pricing
├── terms.astro      →  yoursite.com/terms
├── privacy.astro    →  yoursite.com/privacy
└── refunds.astro    →  yoursite.com/refunds
```

**The rule is simple: filename = URL path**

---

## Page Structure

Every page follows this pattern:

```astro
---
// 1. Import layout and components
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

// 2. Define page data (optional)
const pageTitle = "My Page";
---

<!-- 3. Wrap content in layout -->
<BaseLayout title={pageTitle} description="Page description for SEO">
  <Header slot="header" />
  
  <!-- 4. Your page content -->
  <section>
    <h1>Hello World</h1>
  </section>
  
  <Footer slot="footer" />
</BaseLayout>

<!-- 5. Page-specific styles (optional) -->
<style>
  section {
    padding: 4rem;
  }
</style>
```

---

## Our Layouts

### BaseLayout (`src/layouts/BaseLayout.astro`)

The main wrapper for all pages. Provides:
- `<html>`, `<head>`, `<body>` tags
- SEO meta tags (title, description, Open Graph)
- Google Fonts loading
- Accessibility skip link
- Slots for header/footer/mobile CTA

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Page title (shown in browser tab) |
| `description` | `string` | Meta description for SEO |
| `canonical` | `string` | Canonical URL (optional) |

**Usage:**
```astro
<BaseLayout 
  title="Pricing" 
  description="See our pricing plans"
  canonical="/pricing"
>
  <!-- content -->
</BaseLayout>
```

### LegalLayout (`src/layouts/LegalLayout.astro`)

Extended layout for legal pages (Terms, Privacy, Refunds). Adds:
- Sticky table of contents sidebar
- Last updated date
- Version number
- Proper legal page typography

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Page title |
| `description` | `string` | Meta description |
| `lastUpdated` | `string` | Date string (e.g., "January 15, 2026") |
| `version` | `string` | Document version (e.g., "2.1") |

---

## Creating a New Page

### Example: Adding an "About" Page

1. Create `src/pages/about.astro`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import SectionHeading from '../components/SectionHeading.astro';
---

<BaseLayout 
  title="About Us" 
  description="Learn about the team behind Expenses Tracker"
>
  <Header slot="header" />
  
  <section class="about-hero">
    <div class="container">
      <SectionHeading 
        title="About Us" 
        subtitle="We're on a mission to simplify personal finance."
      />
      
      <div class="content">
        <p>
          Expenses Tracker was founded in 2024 by a team of developers
          who were frustrated with overcomplicated finance apps.
        </p>
        
        <h2>Our Values</h2>
        <ul>
          <li>Privacy first - your data belongs to you</li>
          <li>Simplicity - no feature bloat</li>
          <li>Offline-ready - works without internet</li>
        </ul>
      </div>
    </div>
  </section>
  
  <Footer slot="footer" />
</BaseLayout>

<style>
  .about-hero {
    padding-block: 4rem;
  }
  
  .content {
    max-width: 700px;
    font-size: 1.125rem;
    line-height: 1.8;
    color: var(--text-secondary);
  }
  
  .content h2 {
    margin-top: 2rem;
    font-size: 1.5rem;
    color: var(--text-primary);
  }
  
  .content li {
    margin-bottom: 0.5rem;
  }
</style>
```

2. Done! Visit `localhost:4321/about`

---

## Navigation Links

### Adding Link to Header

Edit `src/components/Header.astro`:

```astro
---
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/#features', label: 'Features' },
  { href: '/about', label: 'About' },  // ← Add this
];
---
```

### Adding Link to Footer

Edit `src/components/Footer.astro`:

```astro
---
const footerLinks = {
  company: [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
  ],
  // ...
};
---
```

---

## Internal vs External Links

### Internal Links
```html
<!-- Same tab -->
<a href="/pricing">See Pricing</a>

<!-- Anchor link (scroll to section) -->
<a href="/#features">Our Features</a>
```

### External Links
```html
<!-- New tab + security attributes -->
<a 
  href="https://apps.apple.com/..." 
  target="_blank" 
  rel="noopener noreferrer"
>
  Download on App Store
</a>
```

---

## URL Redirects

Configured in `astro.config.mjs`:

```javascript
export default defineConfig({
  redirects: {
    '/tos': '/terms',           // Old → New
    '/privacy-policy': '/privacy',
    '/refund': '/refunds',
  },
});
```

Now visiting `/tos` automatically redirects to `/terms`.

---

## Subfolders (Nested Routes)

You can create folders for organization:

```
src/pages/
├── blog/
│   ├── index.astro      →  /blog
│   ├── post-1.astro     →  /blog/post-1
│   └── post-2.astro     →  /blog/post-2
```

---

## 404 Page (Not Found)

Create `src/pages/404.astro`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import BrutalButton from '../components/BrutalButton.astro';
---

<BaseLayout title="Page Not Found">
  <Header slot="header" />
  
  <section class="error-page">
    <h1>404</h1>
    <p>Oops! This page doesn't exist.</p>
    <BrutalButton href="/">Go Home</BrutalButton>
  </section>
  
  <Footer slot="footer" />
</BaseLayout>
```

---

## SEO Best Practices

Each page should have:

1. **Unique title**: `<BaseLayout title="Unique Page Title">`
2. **Description**: `description="Compelling 150-char description"`
3. **Canonical URL**: `canonical="/page-path"` (prevents duplicate content)

The `BaseLayout` automatically adds:
- Open Graph tags (for social sharing)
- Twitter card tags
- Structured data slot
- Proper meta tags

---

## Next Steps

→ Read [05-adding-new-content.md](./05-adding-new-content.md) to learn how to modify content
