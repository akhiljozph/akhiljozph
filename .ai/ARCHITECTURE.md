# System Architecture

## Architecture Pattern
The project follows a lightweight, serverless static architecture. The entire web application is located inside the `./src` directory and deployed via GitHub Pages using GitHub Actions.

## Directory Structure
```
akhiljozph/
├── .ai/                    # AI Agent Governance & Source of Truth Documentation
│   ├── PROJECT.md          # Project purpose, goals, and metadata
│   ├── ARCHITECTURE.md     # Architecture patterns and structure
│   ├── STANDARDS.md        # Code quality, HTML, CSS, and JS guidelines
│   ├── WORKFLOW.md         # Git, testing, and deployment workflows
│   ├── PROMPTS.md          # Agent prompt directives and guardrails
│   ├── DECISIONS.md        # Architectural Decision Records (ADRs)
│   └── CONTEXT.md          # Comprehensive background and domain context
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions CI/CD pipeline for GitHub Pages
├── src/                    # Web Application Source Files (Deployed Root)
│   ├── index.html          # Main HTML document & SEO structure
│   ├── styles.css          # Core CSS stylesheet, variables, animations
│   ├── scripts.js          # Interactive JavaScript logic & scroll reveals
│   ├── robots.txt          # Search engine crawler instructions
│   └── sitemap.xml         # XML sitemap for SEO indexing
├── GEMINI.md               # Entry point directing AI agents to .ai/ documentation
└── README.md               # Repository summary and engineering profile overview
```

## Component Architecture

### 1. HTML (`src/index.html`)
- Semantic HTML5 document structure (`<header>`, `<main>`, `<section>`, `<footer>`).
- Comprehensive OpenGraph and Twitter card metadata for optimal social previews.
- Pre-connected Google Fonts (`Titillium Web`).
- Embedded SVG icons for zero external visual dependencies.

### 2. Stylesheet (`src/styles.css`)
- Root CSS variables defining design tokens (colors, typography, spacing, transitions).
- Responsive breakpoint media queries for seamless mobile, tablet, and desktop viewports.
- Keyframe animations for monogram letters, scroll reveals, rating bars, and interactive hover states.

### 3. JavaScript (`src/scripts.js`)
- Light/Dark theme switching logic and state management.
- IntersectionObserver implementation for smooth scroll-triggered reveal animations.
- Dynamic layout calculations and interactive UI feedback loops.

### 4. CI/CD & Deployment (`.github/workflows/deploy.yml`)
- Triggered on push to `master` branch or manual `workflow_dispatch`.
- Uploads the `./src` directory artifact to GitHub Pages environment.
