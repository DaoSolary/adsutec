import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from 'vite-plugin-prerender'

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: [
        '/',
        '/sobre',
        '/servicos',
        '/portfolio',
        '/contato',
        '/blog',
        '/faq',
        '/depoimentos',
        '/servicos/desenvolvimento-web',
        '/servicos/desenvolvimento-mobile',
        '/servicos/consultoria',
      ],
    }),
  ],
  build: {
    outDir: 'dist',
  },
})
