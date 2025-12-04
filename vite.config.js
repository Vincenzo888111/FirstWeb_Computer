import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/FirstWeb_Computer/',  // ← Match your GitHub repo name exactly (trailing slash!)
  build: {
    outDir: 'dist',
    sourcemap: true,  // Helps debug MIME issues
    rollupOptions: {
      output: {
        manualChunks: undefined,  // Ensures proper chunking for MIME
      },
    },
  },
  server: {
    mimeTypes: {
      'application/javascript': ['jsx', 'js'],  // ← Forces correct MIME for .jsx
    },
  },
})
