import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code
          "react-vendor": ["react", "react-dom"],
          router: ["react-router-dom"],
          // GSAP is heavy, keep it separate
          gsap: ["gsap"],
          // Icons
          icons: ["react-icons"],
        },
      },
    },
    // Use esbuild for faster builds (default, no extra dependency needed)
    minify: "esbuild",
    // Reduce chunk size limit warnings
    chunkSizeWarningLimit: 600,
    // Modern browser targets for smaller bundles
    target: "esnext",
    // Source maps for production debugging (optional, disable for smaller builds)
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "gsap"],
    exclude: ["@vite/client", "@vite/env"],
  },
  // CSS optimization
  css: {
    devSourcemap: false,
  },
});
