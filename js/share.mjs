import html2canvas from 'html2canvas';

const button = document.querySelector('button');
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

button.addEventListener('click', async () => {
  /* eslint-disable no-irregular-whitespace */
  const message = `🙋 My browser…

👉 \`${navigator.userAgent.substr(0, 120)}\` 👈

…is ${
    fakeMeter.classList.contains('green')
      ? '🟩'
      : fakeMeter.classList.contains('red')
      ? '🟥'
      : '🟧'
  } ${label.textContent} Fugu 🐡!

How Fugu 🐡 is yours? Find out at ${canonical} and share on #HowFuguIsMyBrowser!`.trim();
  /* eslint-enable no-irregular-whitespace */

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
    ? button.classList.add('ios')
    : button.classList.add('others');
  button.style.visibility = 'visible';
})();
