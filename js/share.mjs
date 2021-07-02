import html2canvas from 'html2canvas';

const main = document.querySelector('main');
const button = document.querySelector('button');
const message = document.querySelector('.message');

let files;

/Apple/.test(navigator.vendor)
  ? button.classList.add('ios')
  : button.classList.add('others');

button.addEventListener('click', async () => {
  const shareData = {
    url: document.querySelector('link[rel="canonical"]').href,
    text: message.textContent.replace(/\n/g, '').replace(/\s+/g, ' ').trim(),
    files,
  };
  if (navigator.canShare(shareData)) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.error(err.name, err.message);
    }
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
