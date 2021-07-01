import html2canvas from './html2canvas.esm.js';

const main = document.querySelector('main');
const button = document.querySelector('button');
const p = document.querySelector('p');

let logo;
let clone;

button.hidden = false;
button.addEventListener('click', () => {
  clone = main.cloneNode(true);
  clone.querySelector('.meter').hidden = false;
  logo = clone.querySelector('img');
  logo.addEventListener('load', async () => {
    const blob = await createScreenshot();
    const files = [new File([blob], 'howfuguismybrowser_dev.png')];
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
  logo.src = 'fugu.png';
});

const createScreenshot = async () => {
  const backgroundColor = getComputedStyle(
    document.documentElement,
  ).getPropertyValue('--main-background-color');
  document.body.append(clone);
  const canvas = await html2canvas(clone, {
    backgroundColor,
  });
  clone.remove();
  logo.removeEventListener('load', createScreenshot);
  return new Promise((resolve) =>
    canvas.toBlob((blob) => {
      resolve(blob);
    }),
  );
};
