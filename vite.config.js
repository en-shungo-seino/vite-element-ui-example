import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

export default defineConfig({
  plugins: [createVuePlugin()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:color";`,
      },
    },
  },
});
