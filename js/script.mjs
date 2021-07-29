import patterns from 'fugu-api-data/patterns';
import { sparkline } from '@fnando/sparkline';

const CHROME_STATUS_API_URL =
  'https://chromestatus.com/data/timeline/featurepopularity?bucket_id=';
const CHROME_STATUS_POPULARITY_URL =
  'https://chromestatus.com/metrics/feature/timeline/popularity/';

const NO_DATA = 'No data';

// DOM references.
const tbody = document.querySelector('tbody');
const meter = document.querySelector('meter');
const fakeMeter = document.querySelector('.meter');
const label = document.querySelector('label');
const code = document.querySelector('code');
const template = document.querySelector('template');

let totalValues = 0;
let trueValues = 0;

const onmousemove = (event, datapoint) => {
  const svg = event.target.closest('svg');
  const tooltip = svg.nextElementSibling;
  const date = new Date(datapoint.date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  tooltip.hidden = false;
  tooltip.textContent = `On ${date} on ${datapoint.value.toFixed(6)}% of pages`;
  tooltip.style.top = `${event.offsetY}px`;
  tooltip.style.left = `${event.offsetX + 20}px`;
};

const onmouseout = (event) => {
  const svg = event.target.closest('svg');
  const tooltip = svg.nextElementSibling;
  tooltip.hidden = true;
};

const getSVGCode = async (svg, blinkFeatureID) => {
  let data = await fetch(CHROME_STATUS_API_URL + blinkFeatureID).then(
    (response) => response.json(),
  );
  data = data.map((item) => {
    return {
      date: item.date,
      value: item.day_percentage * 100,
    };
  });
  if (data.filter((item) => item.value !== 0).length === 0) {
    const td = svg.parentNode.parentNode;
    svg.parentNode.remove();
    td.textContent = NO_DATA;
    return;
  }
  sparkline(svg, data, {
    onmousemove,
    onmouseout,
  });
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
};

window.addEventListener('load', async () => {
  if ('serviceWorker' in navigator) {
    // Some of the feature detection tests ideally need a service worker.
    await navigator.serviceWorker.register('./sw.js');
  }

  // Await all the promises.
  let patternsResolved = await Promise.all(
    Object.entries(patterns).map(
      (pattern) =>
        new Promise(async (resolve) => {
          pattern[1].supported = await pattern[1].supported;
          if (pattern[1].supported) trueValues++;
          if (pattern[1].supported !== undefined) totalValues++;
          resolve(pattern);
        }),
    ),
  );

  // Sort by supported status.
  patternsResolved = patternsResolved.sort((a, b) => {
    if (!a[1].supported && b[1].supported) return 1;
    if (a[1].supported && !b[1].supported) return -1;
    return 0;
  });

  // Sort by API name.
  patternsResolved = [true, false, undefined]
    .map((supported) =>
      patternsResolved
        .filter((pattern) => pattern[1].supported === supported)
        .sort((a, b) => {
          a = a[0].toLowerCase();
          b = b[0].toLowerCase();
          if (a > b) return 1;
          if (a < b) return -1;
          return 0;
        }),
    )
    .flat();

  // Create HTML.
  for (const [api, value] of patternsResolved) {
    const tr = document.createElement('tr');
    tbody.append(tr);
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    const a = document.createElement('a');
    a.textContent = api;
    a.href = value.documentation;
    td1.append(a);
    td2.classList.add('icon');
    td2.textContent = value.supported
      ? '✅ Yes'
      : value.supported === undefined
      ? '🤷 Unknown'
      : '🚫 No';
    if (value.blinkFeatureID) {
      const clone = template.content.cloneNode(true);
      const svg = clone.querySelector('svg');
      const tooltip = clone.querySelector('span');
      const link = document.createElement('a');
      link.href = `${CHROME_STATUS_POPULARITY_URL}${value.blinkFeatureID}`;
      td3.append(link);
      link.append(svg);
      link.append(tooltip);
      getSVGCode(svg, value.blinkFeatureID);
    } else {
      td3.textContent = NO_DATA;
    }
  }
  tbody.parentNode.hidden = false;

  const percentage = `${Math.floor((trueValues / totalValues) * 100)}%`;

  meter.max = totalValues;
  meter.low = Math.floor(0.2 * totalValues);
  meter.high = Math.floor(0.8 * totalValues);
  meter.optimum = Math.floor(0.9 * totalValues);
  meter.value = trueValues;

  fakeMeter.querySelector('span').style.width = percentage;
  if (meter.value < meter.low) {
    fakeMeter.classList.add('red');
  } else if (meter.value <= meter.low && meter.value <= meter.high) {
    fakeMeter.classList.add('orange');
  } else {
    fakeMeter.classList.add('green');
  }

  label.textContent = percentage;
  label.parentNode.hidden = false;

  code.textContent = navigator.userAgent;

  if ('share' in navigator) {
    import('/js/share.mjs');
  }

  if (/Apple/.test(navigator.vendor)) {
    import('pwacompat');
  }
});
