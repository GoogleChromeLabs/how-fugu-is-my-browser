import { resolve } from 'path';

import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

// ignore unused exports default
export default {
  plugins: [
    dynamicImportVars({
      include: './*.mjs',
    }),
  ],
  build: {
    outDir: 'docs',
    target: 'esnext',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        offline: resolve(__dirname, 'offline.html'),
      },
    },
  },
};
