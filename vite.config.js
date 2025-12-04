import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      workbox: {
        navigateFallback: '/index.html',
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}'],
      },
      manifest: {
        name: 'Panda',
        short_name: 'React',
        description: 'App React+Vite PWA',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#228be6',
        screenshots: [
          {
            src: '/screnshots/728x410.jpg',
            sizes: '728x410',
            type: 'image/jpg',
            form_factor: 'wide',
          },
          {
            src: '/screnshots/736x1309.jpg',
            sizes: '736x1309',
            type: 'image/jpg',
            form_factor: 'narrow',
          },
        ],
        icons: [
          {
            src: '/icons/icon-72.png',
            sizes: '500x500',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512.png',
            sizes: '225x225',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
