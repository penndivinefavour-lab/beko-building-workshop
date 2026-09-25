import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

// Drop a `.nojekyll` marker into the build output so GitHub Pages serves the
// static files verbatim instead of running them through Jekyll.
function nojekyllPlugin() {
  return {
    name: 'write-nojekyll',
    closeBundle() {
      const outDir = path.resolve(process.cwd(), 'dist');
      if (fs.existsSync(outDir)) {
        fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
      }
    },
  };
}

// https://vitejs.dev/config/
// `base` is driven by VITE_BASE_PATH so the same source builds correctly for
// root hosting (local preview, Netlify, Vercel) and for a GitHub Pages project
// subpath such as https://<user>.github.io/<repo>/.
export default defineConfig(() => ({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), nojekyllPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
}));
