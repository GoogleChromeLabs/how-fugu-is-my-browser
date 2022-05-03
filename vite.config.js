/**
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        offline: resolve(__dirname, 'offline.html'),
      },
    },
  },
};
