import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/InternLink/',  
  plugins: [react()],
  server: {
    port: 5174,
    open: true,
    host: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // Core libraries
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      'framer-motion': path.resolve(__dirname, './node_modules/framer-motion'),
      
      // Common UI libraries
      '@radix-ui': path.resolve(__dirname, './node_modules/@radix-ui'),
      'class-variance-authority': path.resolve(__dirname, './node_modules/class-variance-authority'),
      'lucide-react': path.resolve(__dirname, './node_modules/lucide-react'),
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      'class-variance-authority',
      'lucide-react/dist/esm/icons',
    ],
  },
});