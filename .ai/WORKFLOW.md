# Development & Deployment Workflow

## Local Development Workflow
1. **Local Preview**: Open `src/index.html` in a web browser or serve locally using any static file server (e.g. `npx serve src` or Live Server).
2. **Editing Static Assets**:
   - Markup changes: edit `src/index.html`.
   - Style adjustments: edit `src/styles.css`.
   - Behavioral & animation changes: edit `src/scripts.js`.
3. **Synchronization Check**: Ensure skill lists, role titles, and links in `src/index.html` match the contents of `README.md`.

## Quality Verification Checklist
Before committing and pushing changes:
- [ ] **HTML Validation**: Verify valid standard HTML5 markup syntax.
- [ ] **Responsive Visual Check**: Verify layout integrity across desktop, tablet, and mobile viewports.
- [ ] **Console Inspection**: Check browser DevTools console for zero JavaScript errors or missing asset warnings.
- [ ] **Lighthouse Check**: Ensure high scores across Performance, Accessibility, Best Practices, and SEO.

## Git & Version Control Conventions
- **Branching**: Primary development branch is `master`.
- **Commit Messages**: Use concise, imperative commit messages (e.g. `feat: update GCP skill matrix`, `fix: hero animation timing`).

## Deployment Pipeline
- Pushing to the `master` branch automatically triggers `.github/workflows/deploy.yml`.
- The GitHub Actions workflow packages `./src` and deploys it to GitHub Pages.
- Monitor deployment status via GitHub Actions tab in the repository.
