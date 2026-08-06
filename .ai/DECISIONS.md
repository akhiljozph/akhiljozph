# Architectural Decision Records (ADR)

## ADR-001: Pure Static HTML/CSS/JS Architecture for Portfolio Site

### Status
Accepted

### Context
The repository serves as the personal engineering portfolio site for Akhil Joseph. The goal is maximum speed, high SEO rating, instant load times, and zero build tool overhead.

### Decision
Use native HTML5, Vanilla CSS, and ES6 JavaScript stored directly in `./src` without build tools, bundlers, or frontend frameworks.

### Consequences
- **Positive**: Blazing fast performance, 100/100 Lighthouse potential, simple deployment pipeline, zero dependency vulnerability updates.
- **Negative**: Manual component modularization if HTML grows significantly; handled via clear CSS organization and structured HTML sections.

---

## ADR-002: AI Project Governance Standard via `.ai/` Directory

### Status
Accepted

### Context
Maintaining consistent code quality, engineering standards, and AI assistant behavior across multiple sessions requires a structured source of truth.

### Decision
Implement the standard 7-file AI governance documentation set (`PROJECT.md`, `ARCHITECTURE.md`, `STANDARDS.md`, `WORKFLOW.md`, `PROMPTS.md`, `DECISIONS.md`, `CONTEXT.md`) inside `.ai/` and enforce pre-task inspection via `GEMINI.md`.

### Consequences
- **Positive**: Guaranteed alignment of AI assistance with project goals, coding standards, and historical architectural context.
- **Negative**: Requires maintaining documentation when major project decisions evolve.
