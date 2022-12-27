// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { ghPages } from "vite-plugin-gh-pages";
import fs from "node:fs";
import path from "node:path";
// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    ghPages(
      {
        /** @type {options: GhPagesOptions & { outDir: string } => void} */
        onPublish: (options) => {
          // ...
        },
      }
    ),
    vue({
      include: [/\.vue$/],
    }),
    vuetify({
      autoImport: true,
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },
})
