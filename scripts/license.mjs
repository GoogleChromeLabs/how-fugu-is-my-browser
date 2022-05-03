import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs';

const LICENSE = `/**
 * @license Apache-2.0
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
`;

const listAllJavaScriptFiles = (dir) => {
  const files = [];
  const list = (dir) => {
    const entries = readdirSync(dir);
    for (const entry of entries) {
      const path = dir + '/' + entry;
      const stat = statSync(path);
      if (stat.isDirectory()) {
        list(path);
      } else if (entry.endsWith('.js')) {
        files.push(path);
      }
    }
  };
  list(dir);
  return files;
};

const prependDataToFile = (path, prependData) => {
  const data = readFileSync(path, 'utf8');
  writeFileSync(path, prependData + data);
};

const allJavaScriptFiles = listAllJavaScriptFiles('./docs');
allJavaScriptFiles.forEach((file) => {
  prependDataToFile(file, LICENSE);
});
