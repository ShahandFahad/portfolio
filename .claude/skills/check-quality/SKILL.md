---
name: check-quality
description: This skill should be used when the user asks to "check quality", "run lint and typecheck", "is this ready to commit", or before wrapping up any non-trivial change in this repo. `npm run build` in this project does NOT surface lint or type errors (both are disabled in next.config.ts), so this is the only real quality gate.
version: 1.0.0
---

# Check Quality

`next.config.ts` sets `eslint.ignoreDuringBuilds: true` and `typescript.ignoreBuildErrors: true`. A green `npm run build` proves only that the bundler ran — it does not mean the code lints or type-checks. Run both explicitly:

```bash
npm run lint
npx tsc --noEmit
```

## Reporting

- List every error/warning with `file:line`, not just a count.
- Distinguish pre-existing issues (already present before this session's changes, e.g. known issues in `src/components/ui/vortex.tsx` and `background-beams-with-collision.tsx`, and the `sanity` module types missing at the root `tsconfig` for `src/sanity/schemas/*.ts`) from newly introduced ones. Only newly introduced issues are this task's responsibility unless the user asks for a full cleanup.
- Don't claim "all clean" unless you actually ran both commands in this pass.
