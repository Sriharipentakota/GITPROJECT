import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 5174 },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('/src/data/questions.ts')) {
            return 'questions-javascript';
          }
          if (id.includes('/src/data/playwrightQuestions.ts')) {
            return 'questions-playwright';
          }
          if (id.includes('/src/data/concepts.ts') || id.includes('/src/data/playwrightConcepts.ts')) {
            return 'concept-data';
          }
          if (id.includes('/src/components/')) {
            return 'components';
          }
        },
      },
    },
  },
})
