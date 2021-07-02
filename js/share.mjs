import html2canvas from 'html2canvas';

const main = document.querySelector('main');
const button = document.querySelector('button');
const label = document.querySelector('label');
const fakeMeter = document.querySelector('.meter');

let files;

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
  const canonical = document.querySelector('link[rel="canonical"]').href;
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

How Fugu 🐡 is yours? Find out at ${canonical} and share with #HowFuguIsMyBrowser!`.trim();
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
    .forEach((a) => (code.style.color = contrastColor));
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
  const clone = main.cloneNode(true);
  // Make the fake meter visible.
  clone.querySelector('.meter').hidden = false;
  document.body.append(clone);
  const blob = await createScreenshot(clone);
  clone.remove();
  files = [new File([blob], 'howfuguismybrowser_dev.png', { type: blob.type })];
  /Apple/.test(navigator.vendor)
    ? button.classList.add('ios')
    : button.classList.add('others');
  button.style.visibility = 'visible';
})();
