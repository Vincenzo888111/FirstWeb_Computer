import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: '/FirstWeb_Computer/',  // ← MUST match your repo name exactly
  build: {
    outDir: 'dist',
    sourcemap: true,  // Helps debug
  },
  plugins: [react(), tailwindcss()],
});
