# Components Guide

Components are reusable UI pieces. Think of them like Flutter widgets—build once, use everywhere.

---

## Component Anatomy

Every component follows this structure:

```astro
---
// 1. PROPS INTERFACE (optional, defines what data the component accepts)
export interface Props {
  title: string;           // Required
  description?: string;    // Optional (? means optional)
  count?: number;         
}

// 2. DESTRUCTURE PROPS (get the values passed to this component)
const { title, description = "Default text", count = 0 } = Astro.props;

// 3. LOCAL VARIABLES (computed values, etc)
const formattedCount = count.toLocaleString();
---

<!-- 4. TEMPLATE (the HTML this component renders) -->
<div class="my-component">
  <h2>{title}</h2>
  <p>{description}</p>
  <span>{formattedCount} items</span>
</div>

<!-- 5. SCOPED STYLES (only apply to THIS component) -->
<style>
  .my-component {
    padding: 20px;
    border: 2px solid white;
  }
</style>
```

---

## Our Components Explained

### 1. BrutalButton (`src/components/BrutalButton.astro`)

The main call-to-action button with Neo-Brutalist styling.

**Usage:**
```astro
---
import BrutalButton from '../components/BrutalButton.astro';
---

<!-- Primary button (lime green) -->
<BrutalButton href="/pricing" variant="primary">
  Get Started
</BrutalButton>

<!-- Secondary button (outlined) -->
<BrutalButton href="/features" variant="secondary">
  Learn More →
</BrutalButton>

<!-- Button (not a link) -->
<BrutalButton type="submit">
  Submit Form
</BrutalButton>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary'` \| `'secondary'` | `'primary'` | Button style |
| `href` | `string` | - | Makes it a link |
| `size` | `'sm'` \| `'md'` \| `'lg'` | `'md'` | Button size |
| `fullWidth` | `boolean` | `false` | Takes full container width |
| `external` | `boolean` | `false` | Opens in new tab |

---

### 2. FeatureCard (`src/components/FeatureCard.astro`)

Displays a single feature with icon and description.

**Usage:**
```astro
<FeatureCard 
  icon="📴" 
  title="Offline-First" 
  description="Track expenses anywhere, anytime."
  isPro={false}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `string` | - | Emoji or icon |
| `title` | `string` | - | Feature name |
| `description` | `string` | - | Short explanation |
| `isPro` | `boolean` | `false` | Shows PRO badge |

---

### 3. PricingCard (`src/components/PricingCard.astro`)

Full pricing tier card with features list.

**Usage:**
```astro
<PricingCard 
  name="Pro"
  price="$4.99"
  period="month"
  description="Unlock everything"
  features={[
    { text: 'Unlimited exports', included: true },
    { text: 'Cloud sync', included: true },
  ]}
  ctaText="Start Free Trial"
  ctaHref="/signup"
  highlighted={true}
  badge="Most Popular"
/>
```

---

### 4. FAQAccordion (`src/components/FAQAccordion.astro`)

Expandable question/answer using native HTML `<details>`.

**Usage:**
```astro
<FAQAccordion 
  question="How do refunds work?" 
  answer="We offer a <strong>14-day refund</strong>. <a href='/refunds'>Learn more</a>."
/>
```

**Note:** The `answer` supports HTML tags for formatting.

---

### 5. Header & Footer

These are already included in `BaseLayout`, so you don't need to add them manually.

```astro
<!-- In BaseLayout.astro -->
<Header slot="header" />
<!-- ... your content ... -->
<Footer slot="footer" />
```

---

## Creating a New Component

### Example: Creating a "StatBadge" Component

1. Create file: `src/components/StatBadge.astro`

```astro
---
export interface Props {
  value: string;
  label: string;
  color?: 'lime' | 'coral' | 'purple';
}

const { value, label, color = 'lime' } = Astro.props;

const colorMap = {
  lime: 'var(--accent-primary)',
  coral: 'var(--accent-secondary)',
  purple: 'var(--accent-tertiary)',
};
---

<div class="stat-badge">
  <span class="value" style={`color: ${colorMap[color]}`}>{value}</span>
  <span class="label">{label}</span>
</div>

<style>
  .stat-badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
  
  .value {
    font-family: 'Manrope', sans-serif;
    font-size: 2rem;
    font-weight: 800;
  }
  
  .label {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: var(--text-secondary);
  }
</style>
```

2. Use it anywhere:

```astro
---
import StatBadge from '../components/StatBadge.astro';
---

<StatBadge value="50K+" label="Downloads" color="lime" />
```

---

## Slots (Like Flutter's `child` Property)

Components can accept children using `<slot />`:

```astro
<!-- Card.astro -->
<div class="card">
  <slot />  <!-- Children go here -->
</div>

<!-- Usage -->
<Card>
  <h2>This is inside the card!</h2>
  <p>So is this paragraph.</p>
</Card>
```

### Named Slots

```astro
<!-- Layout.astro -->
<header>
  <slot name="header" />
</header>
<main>
  <slot />  <!-- Default slot -->
</main>
<footer>
  <slot name="footer" />
</footer>

<!-- Usage -->
<Layout>
  <Header slot="header" />
  <p>This goes in the default slot (main)</p>
  <Footer slot="footer" />
</Layout>
```

---

## Component Best Practices

1. **Keep components focused** - One component = one job
2. **Use TypeScript interfaces** - Prevents prop mistakes
3. **Provide defaults** - `const { count = 0 } = Astro.props`
4. **Scope styles** - `<style>` in component only affects that component
5. **Document props** - Add comments explaining what each prop does

---

## Next Steps

→ Read [03-styling-guide.md](./03-styling-guide.md) to learn about CSS and theming
