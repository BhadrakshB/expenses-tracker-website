# Expenses Tracker Website - Documentation

This folder contains detailed documentation to help you understand how this Astro website is built.

## Quick Navigation

| Document | What You'll Learn |
|----------|-------------------|
| [01-astro-basics.md](./01-astro-basics.md) | What Astro is, how it works, file structure |
| [02-components-guide.md](./02-components-guide.md) | How components work, creating reusable UI |
| [03-styling-guide.md](./03-styling-guide.md) | CSS, design tokens, Tailwind integration |
| [04-pages-and-routing.md](./04-pages-and-routing.md) | How pages work, linking, navigation |
| [05-adding-new-content.md](./05-adding-new-content.md) | How to add/modify features, testimonials, etc |

## Quick Start

```bash
# Install dependencies
bun install

# Start dev server (http://localhost:4321)
bun run dev

# Build for production
bun run build
```

## Project Structure Overview

```
expenses-tracker-website/
├── src/
│   ├── components/     # Reusable UI pieces (Header, Footer, Buttons)
│   ├── layouts/        # Page templates (BaseLayout, LegalLayout)
│   ├── pages/          # Each file = one page (/pricing, /terms, etc)
│   └── styles/         # Global CSS
├── public/             # Static files (favicon, images)
├── astro.config.mjs    # Astro configuration
└── tailwind.config.mjs # Tailwind CSS configuration
```

## Key Concept: Components → Layouts → Pages

Think of it like building with LEGO:
1. **Components** = Individual LEGO blocks (buttons, cards, headers)
2. **Layouts** = Base plates that hold blocks together (page structure)
3. **Pages** = Final assembled models (what users see)
