# Astro Basics

Astro is a modern web framework that makes building fast websites simple. If you know Flutter, think of Astro as the "web version" of Flutter's widget system.

---

## What Makes Astro Special?

| Feature | What It Means |
|---------|---------------|
| **Zero JavaScript by default** | Pages load FAST because Astro sends only HTML/CSS |
| **Component-based** | Like Flutter widgets, you build reusable pieces |
| **File-based routing** | A file in `/pages` = a URL (e.g., `pricing.astro` → `/pricing`) |
| **Island architecture** | JavaScript only where needed (we don't use this much) |

---

## Understanding `.astro` Files

Every `.astro` file has two parts separated by `---`:

```astro
---
// PART 1: FRONTMATTER (JavaScript/TypeScript)
// This runs at BUILD TIME, not in the browser
// Use it for: imports, data fetching, variables

import Header from '../components/Header.astro';

const pageTitle = "Hello World";
const features = ["Feature 1", "Feature 2"];
---

<!-- PART 2: TEMPLATE (HTML-like) -->
<!-- This is what gets rendered as HTML -->

<Header />
<h1>{pageTitle}</h1>

<ul>
  {features.map(f => <li>{f}</li>)}
</ul>
```

### Key Points:
- **Frontmatter** (between `---`) = JavaScript that runs during build
- **Template** (after `---`) = HTML that users see
- **`{variable}`** = Insert JavaScript values into HTML
- **`{array.map()}`** = Loop through items (like ListView.builder)

---

## Comparing to Flutter

| Flutter Concept | Astro Equivalent |
|-----------------|------------------|
| Widget | Component (`.astro` file) |
| StatelessWidget | Standard Astro component |
| MaterialApp | BaseLayout |
| Navigator routes | Files in `/pages` folder |
| Build method | Template section (after `---`) |
| Constructor parameters | Props (Astro.props) |

---

## File Structure Explained

```
src/
├── components/          # Reusable UI pieces
│   ├── Header.astro     # Navigation bar
│   ├── Footer.astro     # Page footer
│   └── BrutalButton.astro  # Styled button
│
├── layouts/             # Page wrappers
│   ├── BaseLayout.astro    # Main template (head, body)
│   └── LegalLayout.astro   # For legal pages
│
├── pages/               # Each file = one URL
│   ├── index.astro      # → yoursite.com/
│   ├── pricing.astro    # → yoursite.com/pricing
│   ├── terms.astro      # → yoursite.com/terms
│   └── privacy.astro    # → yoursite.com/privacy
│
└── styles/
    └── global.css       # Site-wide styles
```

---

## How a Page Gets Built

```
1. User visits /pricing
         ↓
2. Astro finds src/pages/pricing.astro
         ↓
3. Runs frontmatter (imports, data)
         ↓
4. Renders template with data
         ↓
5. Wraps in BaseLayout (adds <head>, etc)
         ↓
6. Outputs pure HTML + CSS (no JS!)
         ↓
7. Browser displays the page
```

---

## The Config File: `astro.config.mjs`

```javascript
export default defineConfig({
  site: 'https://expensestracker.app',  // Your domain
  integrations: [
    tailwind(),   // For styling
    sitemap(),    // Auto-generates sitemap.xml
  ],
  redirects: {
    '/tos': '/terms',  // Old URL → New URL
  },
});
```

---

## Common Tasks

### Adding a new page
1. Create `src/pages/mypage.astro`
2. Done! Visit `localhost:4321/mypage`

### Using a component
```astro
---
import MyComponent from '../components/MyComponent.astro';
---

<MyComponent />
```

### Passing data to a component
```astro
<MyComponent title="Hello" count={5} />
```

---

## Dev Commands

```bash
# Start development server
bun run dev

# Build for production (creates /dist folder)
bun run build

# Preview production build
bun run preview
```

---

## Next Steps

→ Read [02-components-guide.md](./02-components-guide.md) to learn how components work
