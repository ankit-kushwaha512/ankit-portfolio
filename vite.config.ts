import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If deploying to https://<username>.github.io/<repo-name>/ (a "project" page),
  // set this to '/<repo-name>/' (must match your GitHub repo name exactly).
  // If deploying to a custom domain or a <username>.github.io "user" page,
  // leave this as '/'.
  base: '/ankit-portfolio/',
  server: {
    port: 5173,
  },
  build: {
    outDir: 'dist',
  },
});
