import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: 'prerendered-preview-paths',
    configurePreviewServer(server) {
      server.middlewares.use((request, _response, next) => {
        const url = new URL(request.url || '/', 'http://localhost')
        let pathname: string
        try { pathname = decodeURIComponent(url.pathname) }
        catch (error) { if (error instanceof URIError) { next(); return } throw error }
        if (/^\/(projects|competitions|blog|talks)(\/[^/]+)?$/.test(pathname)) request.url = `${url.pathname}/${url.search}`
        next()
      })
    },
  }],
})
