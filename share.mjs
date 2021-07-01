import html2canvas from './html2canvas.esm.js';

const main = document.querySelector('main');
const button = document.querySelector('button');
const p = document.querySelector('p');

let files;

(async () => {
  const clone = main.cloneNode(true);
  clone.querySelector('.meter').hidden = false;
  const logo = clone.querySelector('img');
  logo.addEventListener('load', async () => {
    document.body.append(clone);
    const blob = await createScreenshot(clone);
    clone.remove();
    logo.removeEventListener('load', createScreenshot);
    files = [new File([blob], 'howfuguismybrowser_dev.png')];
    button.hidden = false;
  });
  logo.src = 'fugu.png';
})();

button.addEventListener('click', async () => {
  console.log(navigator.canShare({
    url: location.href,
    text: p.textContent,
    files,
  }), {
    url: location.href,
    text: p.textContent,
    files,
  });
  try {
    await navigator.share({
      url: location.href,
      text: p.textContent,
      files,
    });
  } catch (err) {
    console.error(err.name, err.message);
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
