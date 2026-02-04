import { defineConfig } from 'vite'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mozanfu-art.github.io/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
