import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import VueComponents from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

const timeStamp = new Date().getTime()

export default defineConfig({
  plugins: [
    vue(),
    ViteImageOptimizer(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router', 'pinia'],
      dts: true
    }),
    VueComponents({
      resolvers: [ElementPlusResolver()],
      dts: true
    })
  ],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url))
      '@': '/src'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          pinia: ['pinia'],
          vueRouter: ['vue-router'],
          'element-plus': ['element-plus']
        },
        dir: 'docs',
        chunkFileNames: `assets/js/[name].[hash].${timeStamp}.js`,
        entryFileNames: `assets/js/[name].[hash].${timeStamp}.js`,
        assetFileNames: `assets/[ext]/[name].[hash].${timeStamp}.[ext]`
      }
    },
    cssCodeSplit: true,
    cssMinify: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: false,
        beautify: false
      }
    }
  }
})
