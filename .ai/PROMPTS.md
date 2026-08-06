# AI Agent Directives & Prompt Guidelines

## Mandatory Pre-Task Rule
Before performing any modification or task in this codebase, AI assistants MUST read the documentation in the `.ai/` directory in the following strict order (as specified in `GEMINI.md`):

1. `PROJECT.md`
2. `ARCHITECTURE.md`
3. `STANDARDS.md`
4. `WORKFLOW.md`
5. `PROMPTS.md`
6. `DECISIONS.md`
7. `CONTEXT.md`

## AI Operating Rules
1. **Source of Truth Alignment**: Treat the contents of `.ai/` files as the supreme authority for coding styles, project structure, and workflow expectations.
2. **Never Break Baseline Simplicity**: Do not introduce node modules, build frameworks, or external CSS libraries (e.g., Tailwind, Bootstrap) unless explicitly instructed by the user.
3. **Preserve Content Consistency**: When updating skills, experience details, or GCP credentials in `src/index.html`, ensure corresponding updates are reflected in `README.md` and vice versa.
4. **Verification**: Always inspect modified files and test DOM structure for proper tag closure, attribute escaping, and layout responsiveness.
