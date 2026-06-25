# Architecture

## Structure

src/
├── app/
├── features/
├── components/
├── hooks/
├── stores/
├── lib/
├── types/
├── three/
└── styles/

---

## Rules

### app/

Routing only.

Keep business logic elsewhere.

---

### features/

Feature-based organization.

Example:

features/editor/
features/dashboard/
features/auth/

Each feature owns:

- components
- hooks
- services
- types

---

### components/

Shared reusable UI.

No business logic.

---

### three/

Contains:

- scenes
- materials
- shaders
- controls

Do not place business logic here.

---

### lib/

Pure utilities.

No React code.

---

### stores/

Zustand stores only.

---

### types/

Shared types.