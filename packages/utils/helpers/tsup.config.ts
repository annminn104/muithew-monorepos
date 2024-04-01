import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  external: ['react', 'react-dom', '@mui/material', /^@emotion/],
  dts: false,
  splitting: false,
  minify: true,
  clean: true,
  tsconfig: 'tsconfig.prod.json',
  ...options
}));
