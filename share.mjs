import html2canvas from 'html2canvas';

const main = document.querySelector('main');
const button = document.querySelector('button');
const p = document.querySelector('p');

let files;

button.addEventListener('click', async () => {
  const shareData = {
    url: document.querySelector('link[rel="canonical"]').href,
    text: p.textContent.replace(/\n/g, '').replace(/\s+/g, ' ').trim(),
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
  const backgroundColor = getComputedStyle(
    document.documentElement,
  ).getPropertyValue('--main-background-color');
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
  document.body.append(clone);
  const blob = await createScreenshot(clone);
  clone.remove();
  files = [new File([blob], 'howfuguismybrowser_dev.png')];
  button.style.visibility = 'visible';
})();
