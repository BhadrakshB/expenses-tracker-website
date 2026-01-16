# Styling Guide

This website uses a combination of **CSS Custom Properties** (variables) and **Tailwind CSS**. This guide explains how styling works and how to customize the design.

---

## Understanding the Design System

### Design Tokens (CSS Variables)

All colors, fonts, and spacing are defined as CSS variables in `src/styles/global.css`. This makes the entire theme easily customizable.

```css
:root {
  /* COLORS */
  --background-primary: #0A0A0B;     /* Main dark background */
  --background-secondary: #141416;   /* Slightly lighter (cards) */
  --background-tertiary: #1C1C1F;    /* Even lighter (hover states) */
  
  --accent-primary: #CAFF33;         /* Lime green (CTAs) */
  --accent-secondary: #FF6B35;       /* Coral orange */
  --accent-tertiary: #7B61FF;        /* Purple */
  
  --text-primary: #FFFFFF;           /* Main text */
  --text-secondary: #A1A1AA;         /* Muted text */
  --text-muted: #52525B;             /* Very muted */
  
  /* FONTS */
  --font-display: 'Manrope', sans-serif;  /* Headings */
  --font-body: 'Inter', sans-serif;       /* Body text */
}
```

### Using Variables in CSS

```css
.my-element {
  background-color: var(--background-secondary);
  color: var(--text-primary);
  border: 3px solid var(--accent-primary);
}
```

---

## Changing the Color Theme

### Example: Switch Lime to Blue

1. Open `src/styles/global.css`
2. Find the `--accent-primary` variable
3. Change the value:

```css
/* Before */
--accent-primary: #CAFF33;

/* After */
--accent-primary: #3B82F6;  /* Blue */
```

This single change updates ALL buttons, accents, and highlights throughout the site!

### Example: Make Background Lighter

```css
/* Before (very dark) */
--background-primary: #0A0A0B;

/* After (dark gray) */
--background-primary: #1A1A2E;
```

---

## The Neo-Brutalist Style

This design uses these distinctive features:

| Feature | How It's Done |
|---------|---------------|
| **Thick borders** | `border: 3px solid var(--text-primary)` |
| **No shadows** | We use borders instead of box-shadow |
| **Sharp corners** | `border-radius: 0` or max `4px` |
| **Hover effects** | Transform + box-shadow offset |
| **Bold typography** | `font-weight: 700-900`, uppercase headings |

### The Signature Button Hover Effect

```css
/* Normal state */
.brutal-btn-primary {
  background: var(--accent-primary);
  color: var(--background-primary);
  border: 3px solid var(--accent-primary);
}

/* Hover: background becomes transparent, shadow appears */
.brutal-btn-primary:hover {
  background: transparent;
  color: var(--accent-primary);
  transform: translate(-4px, -4px);  /* Move up-left */
  box-shadow: 4px 4px 0 var(--accent-primary);  /* Shadow down-right */
}
```

---

## CSS Structure

### 1. Global Styles (`src/styles/global.css`)

Contains:
- CSS reset (removes browser defaults)
- Design tokens (`:root` variables)
- Base typography (body, headings, links)
- Utility classes (`.container`, `.brutal-btn`, etc.)
- Section styles
- Legal page styles

### 2. Component Styles (inside `.astro` files)

Each component has a `<style>` block at the bottom. These styles are **scoped**—they only affect that component.

```astro
<div class="card">Content</div>

<style>
  /* This .card only applies to THIS component */
  .card {
    padding: 20px;
  }
</style>
```

### 3. Tailwind Classes (optional)

Tailwind is available but we primarily use custom CSS. You CAN use Tailwind classes:

```html
<div class="flex items-center gap-4 p-6">
  <!-- Tailwind: flex layout, centered, gap, padding -->
</div>
```

---

## Common Styling Patterns

### Cards

```css
.brutal-card {
  background: var(--background-secondary);
  border: 3px solid var(--text-primary);
  padding: 1.5rem;
}

/* Accented variant */
.brutal-card-accent {
  border-color: var(--accent-primary);
}
```

### Sections

```css
section {
  padding-block: clamp(4rem, 10vh, 8rem);  /* Responsive padding */
}

.section-dark {
  background: var(--background-secondary);
}

.section-accent {
  background: var(--accent-primary);
  color: var(--background-primary);
}
```

### Responsive Typography

We use `clamp()` for fluid font sizes:

```css
.hero-title {
  /* Minimum: 3rem, Preferred: 10vw, Maximum: 6rem */
  font-size: clamp(3rem, 10vw, 6rem);
}
```

This automatically scales text based on screen width—no media queries needed!

---

## Tailwind Configuration (`tailwind.config.mjs`)

Custom values added to Tailwind:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0A0B',
        'accent-primary': '#CAFF33',
        // ... more colors
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',  /* thick borders */
        '4': '4px',
      },
    },
  },
};
```

Now you can use: `bg-bg-primary`, `text-accent-primary`, `font-display`, `border-3`, etc.

---

## Fonts

Fonts are loaded from Google Fonts in `BaseLayout.astro`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet" />
```

### Font Usage:
- **Manrope** → Headings, buttons, labels (bold, uppercase)
- **Inter** → Body text, paragraphs (readable)
- **JetBrains Mono** → Code blocks (monospace)

---

## Customization Examples

### Change Primary Button Color

In `src/components/BrutalButton.astro`:

```css
/* Find this */
.brutal-btn-primary {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
}

/* Or just change the variable in global.css! */
--accent-primary: #your-new-color;
```

### Add a New Color

1. Add to `src/styles/global.css`:
```css
:root {
  --accent-gold: #FFD700;
}
```

2. Use it:
```css
.gold-badge {
  background: var(--accent-gold);
}
```

### Make All Borders Thinner

Find and replace in `global.css`:
```css
/* Before */
border: 3px solid ...

/* After */
border: 2px solid ...
```

---

## Debugging Styles

1. **Browser DevTools**: Right-click → Inspect → See applied styles
2. **CSS Variables**: Check `:root` in DevTools to see all variables
3. **Specificity issues**: Component styles are scoped, use `!important` sparingly

---

## Next Steps

→ Read [04-pages-and-routing.md](./04-pages-and-routing.md) to learn about page creation
