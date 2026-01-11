import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: 'src/app.ts'
      },
      output: {
        entryFileNames: 'main.js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  plugins: [
    tailwindcss(),
  ],
});