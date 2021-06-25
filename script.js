import patterns from './patterns.mjs';

// DOM references.
const tbody = document.querySelector('tbody');
const meter = document.querySelector('meter');
const label = document.querySelector('label');
const code = document.querySelector('code');

let totalValues = 0;
let trueValues = 0;

window.addEventListener('load', async () => {
  // Some of the feature detection tests need a service worker.
  await navigator.serviceWorker.register('sw.js');

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
    tr.append(td1);
    tr.append(td2);
    const a = document.createElement('a');
    a.textContent = api;
    a.href = value.documentation;
    td1.append(a);
    td2.textContent = value.supported
      ? '✅'
      : value.supported === undefined
      ? '🤷'
      : '🚫';
  }
  tbody.parentNode.hidden = false;

  meter.max = totalValues;
  meter.low = Math.floor(0.2 * totalValues);
  meter.high = Math.floor(0.8 * totalValues);
  meter.optimum = Math.floor(0.9 * totalValues);
  meter.value = trueValues;
  label.textContent = `${Math.floor((trueValues / totalValues) * 100)}%`;
  label.parentNode.hidden = false;

  code.textContent = navigator.userAgent;
});
