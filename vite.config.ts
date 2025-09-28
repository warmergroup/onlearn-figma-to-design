import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  build: {
    // Performance optimizations
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue'],
          ui: ['@/components/ui'],
          sections: ['@/components/sections']
        }
      }
    },
    // Enable compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Optimize assets
    assetsInlineLimit: 4096,
    // Source maps for production debugging
    sourcemap: false
  },
  // Development server optimizations
  server: {
    hmr: {
      overlay: false
    }
  },
  // CSS optimizations
  css: {
    devSourcemap: false
  }
})
