// <reference types="vitest" />
// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    css: true,
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTest.ts"],
    // exclude: [...configDefaults.exclude, "**/tests-e2e/**"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
