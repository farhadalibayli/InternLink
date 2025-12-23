import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/InternLink/',
  plugins: [react()],
  server: { port: 5174, open: true, host: true },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      'framer-motion': path.resolve(__dirname, './node_modules/framer-motion'),
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
  build: {
    outDir: 'docs',          // <-- important: build to docs/
  },
});