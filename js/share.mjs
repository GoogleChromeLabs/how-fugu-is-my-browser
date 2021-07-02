import html2canvas from 'html2canvas';

const main = document.querySelector('main');
const button = document.querySelector('button');
const label = document.querySelector('label');
const fakeMeter = document.querySelector('.meter');

let files;

/Apple/.test(navigator.vendor)
  ? button.classList.add('ios')
  : button.classList.add('others');

const canonical = document.querySelector('link[rel="canonical"]').href;

const shareTextOnly = async (shareData) => {
  delete shareData.files;
  try {
    await navigator.share(shareData);
  } catch {
    console.error(err.name, err.message);
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

How Fugu 🐡 is yours? Find out and share #HowFuguIsMyBrowser at ${canonical}❗️`;
  /* eslint-enable no-irregular-whitespace */

  const shareData = {
    text: message,
    files,
  };
  if (navigator.canShare(shareData)) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.error(err.name, err.message);
      shareTextOnly(shareData);
    }
  } else {
    shareTextOnly(shareData);
  }
});

const createScreenshot = async (clone) => {
  const computedStyle = getComputedStyle(document.documentElement);
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
  clone.querySelector('.meter').hidden = false;
  clone.querySelector('button').hidden = true;
  document.body.append(clone);
  const blob = await createScreenshot(clone);
  clone.remove();
  files = [new File([blob], 'howfuguismybrowser_dev.png')];
  button.style.visibility = 'visible';
})();
