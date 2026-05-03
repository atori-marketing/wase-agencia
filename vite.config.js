import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'block-direct-access',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url.split('?')[0];
          const isDirectAccess = req.headers['sec-fetch-dest'] === 'document';
          
          if (isDirectAccess && (url.endsWith('.json') || url.endsWith('.md'))) {
            res.writeHead(302, { Location: '/' });
            res.end();
            return;
          }
          next();
        });
      }
    }
  ],
})
