# README

Simple nextjs 16 example project using SSR and CSR.

## Run / Debug

```bash
npm run dev
```

## Tools

- install biome extension by biomejs

## DEV process

### Structure

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    favicon.ico
    weather/
      page.tsx
      loader.ts
  core/
    domain/
    services/
    repositories/
  infrastructure/
    http/
    db/        ← only if you add Drizzle later
  ui/
    components/

```

### Setup steps

`npx create-next-app@latest weather-app --ts --app --src-dir --tailwind --biome --turbopack`  
`npm update`  
`ncu -u`  
