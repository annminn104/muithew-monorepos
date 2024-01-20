import { defineConfig } from 'tsup';

const tsupConfig = defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react', 'react-dom', '@mui/material', /^@emotion/],
  splitting: false,
  clean: true,
  minifyIdentifiers: false,
  minify: false,
  minifySyntax: false,
  minifyWhitespace: false,
  keepNames: true,
  tsconfig: 'tsconfig.prod.json'
});

export default tsupConfig;
