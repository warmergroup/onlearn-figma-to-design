import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.ts', '.vue', '.json']
  },
  build: {
    
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue'],
          ui: ['@/components/ui'],
          sections: ['@/components/sections']
        }
      }
    },
    
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    assetsInlineLimit: 4096,
    sourcemap: false
  },
  
  server: {
    hmr: {
      overlay: false
    }
  },
  css: {
    devSourcemap: false
  }
})
