/**
 * Static asset URL helper.
 *
 * Lives in its own leaf module (rather than `main.tsx`) so that data files and
 * components can import it without creating a circular import back through the
 * application entry point. A cycle here is not harmless: `src/data/projects.ts`
 * calls `assetPath()` at module-evaluation time, so importing it from `main.tsx`
 * would hit the temporal dead zone and blank the entire app.
 *
 * Vite statically replaces `import.meta.env.BASE_URL` at build time, which lets
 * the same source serve from the domain root (`/`) or a hosting subpath such as
 * GitHub Pages (`/beko-building-workshop/`).
 */
export const assetPath = (asset: string): string => {
  const base = (import.meta.env?.BASE_URL as string) || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${asset.replace(/^\/+/, '')}`;
};
