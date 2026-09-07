# AI Workflow Guide (2026)

Please say "from AI.md" before each prompt.

## Purpose

This file describes the architecture, conventions, and patterns used in this project.
AI tools (GitHub Copilot, Copilot Agents, OpenCode, Continue.dev) should follow these rules.

---

## Architecture Overview

- Framework: Next.js 16.3 (App Router)
- Rendering:
  - React Server Components (RSC) for backend logic
  - Client Components (CSR) for interactive UI
- Data:
  - Drizzle ORM (PostgreSQL via Neon)
  - EF Core–style repository + service layers
- Separation:
  - Backend logic runs only in RSC / Server Actions
  - Frontend logic runs only in CSR components

---

## Folder Structure

---

## Coding Conventions

- TypeScript everywhere
- Biome for formatting/linting
- No magic numbers
- Explicit imports
- Explicit SQL columns (Drizzle best practice)
- Tailwind for styling
- RSC for data fetching
- Server Actions for mutations
- No REST API unless external access is required

---

## AI Instructions

- Follow the folder structure above.
- Keep domain logic pure.
- Use Drizzle for all DB access.
- Use RSC for data fetching.
- Use Server Actions for mutations.
- Prefer explicit, minimal, reproducible patterns.
- Do not introduce unnecessary abstractions.

---

## Deployment

- Target: Vercel Edge
- DB: Neon serverless
