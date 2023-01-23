import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  root: "src",
  build: {
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
    },
    outDir: "../build",
  },

  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/pages/partials"),
    }),
  ],
});
