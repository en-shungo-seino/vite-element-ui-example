import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import elementUiPlugin from "esbuild-plugin-vite-element-ui";

export default defineConfig({
  plugins: [createVuePlugin(), elementUiPlugin()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:color";`,
      },
    },
  },
});
