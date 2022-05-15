import { defineConfig } from 'vite'
import * as path from 'path'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
        '@': path.resolve(__dirname, './src'),
      }
  },

  server: {
    port: 4173
  },

  base: process.env.GITHUB_ACTIONS ? '/screens/' : '/'
})
