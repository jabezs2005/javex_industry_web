import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/javex_industry_web', // ✅ moved to top-level
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
