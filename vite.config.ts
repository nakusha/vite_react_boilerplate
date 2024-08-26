import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@components", replacement: "/src/components" },
      { find: "@context", replacement: "/src/context" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@layouts", replacement: "/src/layout" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@router", replacement: "/src/router" },
      { find: "@services", replacement: "/src/services" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@apis", replacement: "/src/apis" },
    ],
  },
});
