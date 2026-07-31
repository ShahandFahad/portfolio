# Working with Claude Code on this repo

This project's `.claude/` folder defines four subagents, four skills, and three hooks tailored to this codebase (see `CLAUDE.md` at the repo root for the underlying architecture they're built on: the `portfolioData.ts` content layer, the dead-code cleanup history, the in-progress Sanity migration, and the fact that `next.config.ts` disables lint/type checks at build time).

## Agents — `.claude/agents/`

Agents are scoped personas for open-ended, multi-step work. Invoke one by asking for it by name ("use the section-builder agent to...") or by describing a task that matches its description below — Claude will pick it up automatically in most cases.

| Agent | Use it for | Don't use it for |
|---|---|---|
| **content-editor** | Adding/editing projects, jobs, hero/about/contact copy, links — anything in `src/data/portfolioData.ts` | Layout/styling changes, Sanity wiring |
| **section-builder** | New/changed page sections, shadcn/ui primitives, Tailwind + framer-motion work, accessibility (contrast, tablist, focus rings) | Copy edits, CMS fetching |
| **cms-migrator** | Moving a section from static data to Sanity, editing Sanity schemas, `studio/` work | Portfolio copy edits, general UI |
| **release-auditor** | End-of-task gate: lint + typecheck + orphan-file sweep + env var checks, before calling something "done" | Mid-task iteration — this is a final check, not a helper |

These four cover the main seams in the codebase: content vs. presentation vs. CMS integration vs. "is this actually safe to ship" (the last one exists because `npm run build` silently swallows lint/type errors here — see below).

## Skills — `.claude/skills/`

Skills are shorter, single-purpose workflows. Trigger them by name (`/add-project`) or by asking in the words in their description.

| Skill | Trigger phrases | What it does |
|---|---|---|
| **add-project** | "add a project", "new project entry" | Adds a correctly-shaped `ProjectItem` to `portfolioData.ts` |
| **add-experience** | "add a job", "add work experience" | Adds a correctly-shaped `ExperienceItem`, respecting tab ordering |
| **check-quality** | "check quality", "is this ready to commit" | Runs `npm run lint` + `npx tsc --noEmit` and reports real issues (since `npm run build` won't) |
| **sync-sanity-schema** | "sync the sanity schemas", after touching schema files | Diffs `src/sanity/schemas/*` against `studio/schemaTypes/*` and reconciles drift |

**content-editor vs. add-project/add-experience**: the skills are the fast path for the common case (one new entry, known shape); reach for the `content-editor` agent when you're doing something less templated — bulk edits, restructuring the interfaces, or copy changes across multiple sections at once.

## Hooks — `.claude/settings.json`

Three automation hooks run without being asked:

1. **`.env` write guard** (`PreToolUse`, Edit/Write) — blocks any attempt to write to a file literally named `.env`, so an automated edit can't accidentally overwrite or blank out `RESEND_API_KEY`, the Sanity project id/dataset, etc. Denies with a clear reason instead of silently warning.
2. **Targeted lint feedback** (`PostToolUse`, Edit/Write on `*.ts`/`*.tsx`) — runs `npx eslint` on just the file that was changed and feeds the result back into context. This exists because `next.config.ts` sets `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors` to `true`, so this hook is the only automatic signal that a change introduced a lint problem.
3. **Sanity schema-drift reminder** (`PostToolUse`, Edit/Write on `src/sanity/schemas/*.ts` or `studio/schemaTypes/*.ts`) — non-blocking nudge that these two directories hold independent, manually-synced copies of the same schema (confirmed identical via `diff`, not shared by import).

> **Activation note:** hooks are picked up by a file watcher that starts watching `.claude/` when a session begins. Since `settings.json` was created *during* the current session, these hooks won't fire until you either run `/hooks` once (reloads config) or start a fresh session. The JSON itself has been validated (`jq -e` against the hook schema) and each command was pipe-tested with realistic input — only the live-reload is pending.

## Suggested workflow

- Adding portfolio content → `/add-project` or `/add-experience`, or the `content-editor` agent for anything bigger.
- Building/tweaking UI → `section-builder` agent.
- Touching the Sanity integration → `cms-migrator` agent (it owns keeping the schema pair in sync; `/sync-sanity-schema` is the quick manual check).
- Before saying a task is done → `/check-quality` at minimum; for anything non-trivial, hand off to `release-auditor` for the full gate (lint, typecheck, orphan sweep, env var check).
