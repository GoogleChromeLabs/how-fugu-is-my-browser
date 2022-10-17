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

import html2canvas from 'html2canvas';

const shareButton = document.querySelector('button.share');
const screenshotButton = document.querySelector('button.screenshot');
const label = document.querySelector('label');
const fakeMeter = document.querySelector('.meter');

// This needs to be prepared before the share button is clicked,
// else, the user gesture would be consumed by the time the PNG
// image can be created.
let files;

const canonical = document.querySelector('link[rel="canonical"]').href;

const shareTextOnly = async (shareData) => {
  delete shareData.files;
  try {
    await navigator.share(shareData);
  } catch (err) {
    if (err.name !== 'AbortError') {
      console.error(err.name, err.message);
    }
  }
};

shareButton.addEventListener('click', async () => {
  // Cap the userAgent at 135 characters (just enough for Edge's.)
  const message = `🙋 My browser…

👉 \`${navigator.userAgent.substring(0, 135)}\` 👈

…is ${
    fakeMeter.classList.contains('green')
      ? '🟩'
      : fakeMeter.classList.contains('red')
      ? '🟥'
      : '🟧'
  } ${label.textContent} Fugu 🐡!

How Fugu 🐡 is yours? Find out at ${canonical} and share on #HowFuguIsMyBrowser!`.trim();
  /* eslint-enable no-irregular-whitespace */

  if ('share' in navigator) {
    const shareData = {
      text: message,
      title: '',
      files,
    };
    if (!navigator.canShare(shareData)) {
      return shareTextOnly(shareData);
    }
    try {
      await navigator.share(shareData);
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error(err.name, err.message);
        shareTextOnly(shareData);
      }
    }
  } else {
    const shareURL = new URL('https://twitter.com/intent/tweet');
    const params = new URLSearchParams();
    params.append('text', message);
    shareURL.search = params;
    window.open(shareURL, '_blank', 'popup,noreferrer,noopener');
  }
});

const createScreenshot = async (clone) => {
  const computedStyle = getComputedStyle(document.documentElement);
  const linkColor = computedStyle.getPropertyValue('--link-color');
  clone.querySelectorAll('a').forEach((a) => (a.style.color = linkColor));
  const contrastColor = computedStyle.getPropertyValue('--contrast-color');
  clone
    .querySelectorAll('code')
    .forEach((code) => (code.style.color = contrastColor));
  const backgroundColor = computedStyle.getPropertyValue(
    '--main-background-color',
  );
  const canvas = await html2canvas(clone, {
    backgroundColor,
  });
  return new Promise((resolve) =>
    canvas.toBlob((blob) => {
      resolve(blob);
    }),
  );
};

(async () => {
  const clone = document.querySelector('main').cloneNode(true);
  // Use standard `sans-serif` font instead of `system-ui`.
  clone.style.fontFamily = 'sans-serif';
  // Add some padding to the clone.
  clone.style.padding = '2rem';
  // Hide all paragraphs, except the one with the user-agent.
  clone
    .querySelectorAll('p:not(.message)')
    .forEach((p) => (p.style.display = 'none'));
  // Make the fake meter visible.
  clone.querySelector('.meter').hidden = false;
  // Show only the supported rows.
  clone.querySelectorAll('tr > td:nth-child(2)').forEach((td) => {
    if (!/✅/.test(td.textContent)) {
      td.parentNode.remove();
    }
  });
  // Hide the sparkline.
  clone.querySelectorAll('tr > th:nth-child(3)').forEach((th) => {
    th.style.display = 'none';
  });
  clone.querySelectorAll('tr > td:nth-child(3)').forEach((td) => {
    td.style.display = 'none';
  });
  // Use standard `monospace` font instead of `ui-monospace`.
  clone.querySelectorAll('code').forEach((code) => {
    code.style.fontFamily = 'monospace';
    code.style.fontSize = '16px';
  });
  // Add the URL to the footer.
  const footer = clone.querySelector('footer');
  footer.innerHTML = footer.innerHTML
    .replace('Source code on', 'Test your browser at')
    .replace('https://github.com/tomayac/how-fugu-is-my-browser', canonical)
    .replace(
      'GitHub',
      canonical
        .replace('https://', '')
        .replace('/', '')
        .replace('how', 'How')
        .replace('fugu', 'Fugu')
        .replace('is', 'Is')
        .replace('my', 'My')
        .replace('browser', 'Browser'),
    );
  document.body.append(clone);
  const blob = await createScreenshot(clone);
  clone.remove();
  files = [new File([blob], 'howfuguismybrowser_dev.png', { type: blob.type })];
  /Apple/.test(navigator.vendor)
    ? shareButton.classList.add('ios')
    : shareButton.classList.add('others');
  shareButton.style.visibility = 'visible';
  if (!('share' in navigator)) {
    document.querySelector('ol').style.display = 'block';
    screenshotButton.style.visibility = 'visible';
    // Fallback to use Twitter's Web Intent URL, as outlined in
    // https://web.dev/patterns/advanced-apps/share/.
    screenshotButton.addEventListener('click', () => {
      const a = document.createElement('a');
      a.download = 'how-fugu-is-my-browser.png';
      a.style.display = 'none';
      a.href = URL.createObjectURL(files[0]);
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.remove(a);
        URL.revokeObjectURL(a.href);
      }, 30 * 1000);
    });
  } else {
    screenshotButton.style.display = 'none';
  }
})();
