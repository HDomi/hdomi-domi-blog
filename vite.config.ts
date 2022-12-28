// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import markdownRawPlugin from 'vite-raw-plugin'
// Utilities
import { defineConfig, loadEnv} from 'vite'
import { fileURLToPath, URL } from 'node:url'
// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    vue({
      include: [/\.vue$/],
    }),
    markdownRawPlugin({
      fileRegex: /\.md$/
    }),
    vuetify({
      autoImport: true,
    }),
  ],
  define: { 'process.env': loadEnv(process.cwd(), '') },
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
