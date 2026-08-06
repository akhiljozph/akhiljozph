# Engineering Standards & Coding Guidelines

## General Principles
1. **Zero Runtime Dependencies**: Keep the website lightweight, fast, and dependency-free. Do not introduce heavy bundlers or frontend frameworks unless explicitly requested.
2. **SEO & Accessibility First**: Every interactive element must be accessible via keyboard and screen readers, with appropriate `aria-*` attributes and alt texts.
3. **Responsive Design**: Ensure mobile-first or desktop-adaptive visual presentation across all device resolutions (320px to 4K).

## HTML Standards
- Use semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Ensure all interactive elements (buttons, links, form elements) have unique, descriptive `id` attributes.
- Include proper `title`, `meta description`, and canonical URLs.
- Maintain `<noscript>` fallbacks for animated elements so the page remains fully accessible when JS is disabled.

## CSS Standards
- Organize CSS rules cleanly using CSS Custom Properties (`:root` variables) for colors, font families, line-heights, and transition curves.
- Use responsive layout primitives (Flexbox, CSS Grid) rather than static absolute pixel offsets.
- Avoid inline styles (`style="..."`) in HTML files.
- Maintain subtle, non-disruptive animations with hardware-accelerated properties (`transform`, `opacity`).

## JavaScript Standards
- Write clean, modern Vanilla JavaScript (ES6+).
- Event listeners should be attached non-intrusively without polluting the global namespace.
- Use efficient APIs such as `IntersectionObserver` for scroll effects instead of heavy window scroll event throttling.
- Gracefully check for DOM element existence before dereferencing properties to prevent runtime exceptions.
