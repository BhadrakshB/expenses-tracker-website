# Adding & Modifying Content

This guide shows you how to update the website's content without understanding all the code.

---

## Quick Reference: Where to Edit

| Want to change... | Edit this file |
|-------------------|----------------|
| Features list | `src/pages/index.astro` (features array) |
| Testimonials | `src/pages/index.astro` (testimonials array) |
| Stats (downloads, etc) | `src/pages/index.astro` (stats array) |
| Comparison table | `src/pages/index.astro` (comparisonFeatures array) |
| Pricing plans | `src/pages/pricing.astro` |
| FAQ questions | `src/pages/pricing.astro` (faqs array) |
| Navigation links | `src/components/Header.astro` |
| Footer links | `src/components/Footer.astro` |
| Legal content | `src/pages/terms.astro`, `privacy.astro`, `refunds.astro` |

---

## Modifying Features

Open `src/pages/index.astro` and find the `features` array:

```javascript
const features = [
  { 
    icon: '📴',           // Emoji or icon
    title: 'Offline-First', 
    description: 'Track expenses anywhere, anytime.',
    isPro: false          // true = shows PRO badge
  },
  // ... more features
];
```

### Add a New Feature

```javascript
const features = [
  // Existing features...
  
  // Add this:
  { 
    icon: '🔐', 
    title: 'Bank-Level Security', 
    description: 'Your data is encrypted end-to-end.',
    isPro: false 
  },
];
```

### Remove a Feature

Just delete the object from the array.

### Reorder Features

Move the objects to your preferred order.

---

## Modifying Testimonials

Find the `testimonials` array in `src/pages/index.astro`:

```javascript
const testimonials = [
  {
    quote: "Finally, an expense tracker that works offline!",
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,  // 1-5 stars
  },
];
```

### Add a Testimonial

```javascript
{
  quote: "The best finance app I've ever used. Simple and powerful.",
  name: "John Doe",
  location: "New York, USA",
  rating: 5,
},
```

---

## Modifying Stats

Find the `stats` array:

```javascript
const stats = [
  { value: '50K', suffix: '+', label: 'Downloads' },
  { value: '4.8', suffix: '★', label: 'App Rating' },
  { value: '12', suffix: '', label: 'Countries' },
];
```

### Update Numbers

Simply change `value`, `suffix`, or `label`:

```javascript
{ value: '100K', suffix: '+', label: 'Happy Users' },
```

---

## Modifying Comparison Table

Find `comparisonFeatures` in `src/pages/index.astro`:

```javascript
const comparisonFeatures = [
  { name: 'Unlimited Expenses', free: true, pro: true },
  { name: 'Bank Accounts', free: '1', pro: 'Unlimited' },
  { name: 'Cloud Sync', free: false, pro: true },
];
```

**Values:**
- `true` = ✓ (checkmark)
- `false` = — (dash)
- `'text'` = shows the text (like "1" or "Unlimited")

---

## Modifying Pricing

Open `src/pages/pricing.astro`.

### Free Plan Features

```javascript
const freeFeatures = [
  { text: 'Unlimited expenses', included: true },
  { text: 'Cloud sync', included: false },  // Shows as unavailable
];
```

### Pro Plan Features

```javascript
const proFeatures = [
  { text: 'Everything in Free', included: true },
  { text: 'Unlimited bank accounts', included: true },
];
```

### Change Prices

Find this in the template section:

```astro
<PricingCard 
  name="Pro"
  price="$4.99"      <!-- Change this -->
  period="month"
  ...
/>
```

---

## Modifying FAQs

Find the `faqs` array in `src/pages/pricing.astro`:

```javascript
const faqs = [
  {
    question: 'What happens when my trial ends?',
    answer: 'You\'ll automatically switch to the Free plan. <strong>No charges</strong>.',
  },
];
```

**Note:** The `answer` supports HTML:
- `<strong>text</strong>` = Bold
- `<a href="/page">link</a>` = Link
- `<br/>` = Line break

### Add an FAQ

```javascript
{
  question: 'Do you offer student discounts?',
  answer: 'Yes! Email us at <a href="mailto:support@expensestracker.app">support@expensestracker.app</a> with your student ID.',
},
```

---

## Modifying Navigation

### Header Links

Edit `src/components/Header.astro`:

```javascript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/#features', label: 'Features' },
  // Add more here
];
```

### Footer Links

Edit `src/components/Footer.astro`:

```javascript
const footerLinks = {
  company: [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  product: [
    { href: '/#features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
  ],
  legal: [
    { href: '/terms', label: 'Terms of Service' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/refunds', label: 'Refund Policy' },
  ],
  download: [
    { href: 'https://apps.apple.com/...', label: 'iOS App', external: true },
  ],
};
```

---

## Modifying Legal Pages

Legal pages use plain HTML. Open `src/pages/terms.astro`:

```astro
<LegalLayout 
  title="Terms of Service" 
  lastUpdated="January 15, 2026"  <!-- Update this when you edit -->
  version="2.1"                    <!-- Increment version -->
>

<h2 id="section-name">Section Title</h2>
<p>
  Your paragraph text here. Use <strong>bold</strong> for emphasis.
</p>

<ul>
  <li>List item one</li>
  <li>List item two</li>
</ul>

</LegalLayout>
```

### Adding a New Section

```html
<h2 id="new-section">New Section Title</h2>
<p>
  Content for this section...
</p>
```

The Table of Contents updates automatically based on `<h2>` tags!

---

## Changing App Store Links

Find these throughout the pages:

```html
<a href="https://apps.apple.com/app/expenses-tracker">
```

Replace with your actual App Store/Play Store URLs.

---

## Updating the Hero Section

In `src/pages/index.astro`, find:

```astro
<h1 class="hero-title">
  YOUR MONEY.<br/>
  <span class="hero-accent">UNDER CONTROL.</span>
</h1>
```

Change the text as needed. The lime green color is controlled by `.hero-accent`.

---

## Updating the Counter

```astro
<div class="hero-counter">
  <span class="counter-value">₹45,23,456</span>
  <span class="counter-label">tracked by users this month</span>
</div>
```

---

## Testing Your Changes

1. Save the file
2. The browser auto-refreshes (if dev server is running)
3. Check the page looks correct
4. Run `bun run build` before deploying

---

## Common Mistakes to Avoid

| Mistake | How to Fix |
|---------|------------|
| Missing comma in array | Add `,` after each object: `{ ... },` |
| Unclosed quote | Make sure strings end with `'` or `"` |
| HTML in plain text | Use `set:html` for HTML content |
| Broken link | Check the `href` path is correct |

---

## Need More Help?

1. Check browser console for errors (F12 → Console)
2. The dev server shows errors in terminal
3. Compare with existing working code
4. Undo changes with Ctrl+Z if something breaks
