import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Only ignore the 'photo archive' folder (has a space in the name which
      // causes Windows EBUSY errors). All other public/ folders are watched normally.
      ignored: (filePath) => filePath.includes('photo archive'),
    },
  },
})
