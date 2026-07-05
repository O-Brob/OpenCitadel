import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    host: "0.0.0.0",
    port: 5173, // Vite default
    proxy: { // For development mode, vite act as mini proxy since we don't have nginx server in dev.
      "/api": {
        target: "http://server:5050", // Redirect to server:5050 (apps/server)
        changeOrigin: true
      }
    }
  }
})
