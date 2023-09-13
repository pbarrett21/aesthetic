import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

// use this on Mac
// export default defineConfig({
//   plugins: [react()]
// })

// use this on windows to fix hmr
// uses more cpu
// https://vitejs.dev/config/server-options.html#server-watch
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  }
})
