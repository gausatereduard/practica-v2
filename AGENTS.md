# AGENTS.md

- Architecture: @ARCHITECTURE.md
- Soul: @SOUL.md
- Naming convention: @docs/conventions.md
- Three.JS rules: @docs/threejs-rules.md
- UI rules: @docs/ui-rules.md
- Decisions: @DECISIONS.md

## Project

Modern web application built with:

- Next.js (App Router)
- TypeScript
- React
- Three.js
- React Three Fiber
- Drei
- shadcn/ui
- Tailwind CSS
- Zustand

The AI is an engineering assistant.

The AI is NOT an autonomous decision maker.

Always optimize for:

1. Readability
2. Maintainability
3. Type safety
4. Performance

Never optimize prematurely.

---

## Before Writing Code

Always:

1. Read surrounding files.
2. Understand current architecture.
3. Reuse existing patterns.
4. Prefer extending existing abstractions.

Do not introduce new libraries without justification.

---

## Output Style

When implementing changes:

1. Explain reasoning briefly.
2. List affected files.
3. Implement minimal changes.
4. Avoid unrelated refactors.

---

## Code Rules

### TypeScript

Required:

- strict mode compatible
- no `any`
- explicit public interfaces

Prefer:

- type over interface for local definitions
- interface for exported contracts

---

### React

Prefer:

- Server Components by default
- Client Components only when necessary

Avoid:

- unnecessary useEffect
- prop drilling

Use:

- hooks
- composition
- feature isolation

---

### State Management

Use:

- local state first
- Zustand for shared client state

Avoid:

- global state without need

---

### Styling

Use:

- shadcn/ui
- Tailwind

Avoid:

- custom CSS unless necessary
- direct editing components in src/components/ui directory

Prefer:

- utility classes
- design tokens

---

### Three.js

Use:

- React Three Fiber
- Drei

Avoid:

- raw imperative Three.js unless required

Keep:

- scene logic
- rendering logic
- UI logic

separated.

---

## When Unsure

Ask questions rather than invent architecture.