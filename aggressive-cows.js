const cowImage = 'https://cdn3.iconfinder.com/data/icons/agriculture-76/62/cattle-cow-livestock-farm-ranch-1024.png';
const svg = document.querySelector('#cows-scene');
const NS = 'http://www.w3.org/2000/svg';
const examples = {
  sample: { name: 'Sample pasture', positions: [1, 2, 4, 8, 9], cows: 3, note: 'The best gap is 3. A gap of 4 does not work.' },
  wide: { name: 'Wide pasture', positions: [0, 6, 12, 18, 24], cows: 3, note: 'Each stall is 6 apart. The best gap is 12.' },
  pair: { name: 'Two cows, far apart', positions: [2, 5, 11, 18], cows: 2, note: 'Place cows at 2 and 18. The gap is 16.' }
};
let selectedExample = 'sample';
let data = examples[selectedExample];
let frames = [];
let index = 0;
let playing = false;
let timer;

function makeNode(tag, attrs = {}, parent = svg) {
  const element = document.createElementNS(NS, tag);
  for (const [key, value] of Object.entries(attrs)) element.setAttribute(key, value);
  parent.append(element);
  return element;
}

function makeGreedyPlacement(positions, cows, distance) {
  const placed = [positions[0]];
  const skipped = [];
  for (const position of positions.slice(1)) {
    if (position - placed.at(-1) >= distance) {
      placed.push(position);
      if (placed.length === cows) break;
    } else {
      skipped.push(position);
    }
  }
  return { placed, skipped, valid: placed.length === cows };
}

function createFrames({ positions, cows }) {
  const minimumGap = Math.min(...positions.slice(1).map((p, i) => p - positions[i]));
  const minimumPair = positions.slice(1).reduce((best, p, i) =>
    p - positions[i] < best.gap ? { left: positions[i], right: p, gap: p - positions[i] } : best,
  { left: positions[0], right: positions[1], gap: positions[1] - positions[0] });
  const first = positions[0];
  const last = positions.at(-1);
  const span = last - first;
  let low = minimumGap;
  let high = span;
  let best = minimumGap;
  let bestPlacement = makeGreedyPlacement(positions, cows, best).placed;
  const result = [{
    type: 'setup', tag: 'SETUP', step: 'BOUNDS', low, high,
    text: `Start at the smallest gap (${minimumGap}). End at last minus first: ${last} − ${first} = ${span}.`
  }];

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    result.push({
      type: 'mid', tag: `MID = ${mid}`, step: `MID = ${mid}`, low, high, mid,
      text: `mid = ⌊(${low} + ${high}) / 2⌋ = ${mid}. Can ${cows} cows stay at least ${mid} apart?`
    });
    const placement = makeGreedyPlacement(positions, cows, mid);
    const checkText = placement.valid
      ? `${placement.placed.length} cows fit at least ${mid} apart. Save ${mid}; search higher.`
      : `Only ${placement.placed.length} of ${cows} cows fit at ${mid}. Too far apart; search lower.`;
    result.push({
      type: 'check', tag: `CHECK · DISTANCE ${mid}`, step: `IS VALID(${mid})?`, low, high, mid,
      check: mid, ok: placement.valid, placed: placement.placed, skipped: placement.skipped, text: checkText
    });
    if (placement.valid) {
      best = mid;
      bestPlacement = placement.placed;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  result.push({
    type: 'done', tag: `ANSWER · ${best}`, step: 'DONE', low, high, mid: null,
    check: best, ok: true, placed: bestPlacement, done: true,
    text: `The best minimum gap is ${best}.`
  });
  return { frames: result, minimumGap, minimumPair, span };
}

function xAt(index) {
  const count = data.positions.length;
  return count === 1 ? 500 : 82 + (index * 836) / (count - 1);
}

function stallIndex(position) {
  return data.positions.indexOf(position);
}

function drawCow(position) {
  const x = xAt(stallIndex(position));
  const image = makeNode('image', {
    href: cowImage, x: x - 26, y: 95, width: 52, height: 49,
    preserveAspectRatio: 'xMidYMid meet', class: 'cow-photo cow-step'
  });
  image.setAttribute('aria-label', `Cow placed at stall ${position}`);
  image.addEventListener('error', () => {
    image.remove();
    makeNode('text', { x, y: 133, 'text-anchor': 'middle', class: 'cow-fallback cow-step' }).textContent = '🐄';
  }, { once: true });
}

function addArrow(x1, x2, y, label, colorClass = 'distance-label') {
  makeNode('line', { x1: x1 + 5, y1: y, x2: x2 - 5, y2: y, class: 'distance-line' });
  makeNode('path', { d: `M ${x1 + 5} ${y} l6 -4 v8 Z M ${x2 - 5} ${y} l-6 -4 v8 Z`, class: 'distance-arrow' });
  const text = makeNode('text', { x: (x1 + x2) / 2, y: y - 7, 'text-anchor': 'middle', class: colorClass });
  text.textContent = label;
  return text;
}

function renderScene(frame) {
  svg.replaceChildren();
  const { positions, cows } = data;
  makeNode('line', { x1: 38, y1: 237, x2: 962, y2: 237, class: 'stall-ground' });
  positions.forEach((position, i) => {
    const x = xAt(i);
    makeNode('path', { d: `M ${x - 34} 191 L ${x} 166 L ${x + 34} 191 Z`, class: 'stall-roof' });
    makeNode('rect', { x: x - 32, y: 189, width: 64, height: 46, rx: 2, class: 'stall-wood' });
    makeNode('rect', { x: x - 29, y: 193, width: 58, height: 5, class: 'stall-wood-shadow' });
    [-17, 0, 17].forEach(dx => makeNode('line', {
      x1: x + dx, y1: 197, x2: x + dx, y2: 232, stroke: '#987347', 'stroke-width': 3
    }));
    makeNode('text', { x, y: 258, 'text-anchor': 'middle', class: 'stall-number' }).textContent = position;
  });

  (frame.placed || []).forEach(drawCow);
  if (frame.type === 'setup') {
    const { minimumPair } = derived;
    const startX1 = xAt(stallIndex(minimumPair.left));
    const startX2 = xAt(stallIndex(minimumPair.right));
    const endX1 = xAt(0);
    const endX2 = xAt(positions.length - 1);
    addArrow(startX1, startX2, 78, `START: ${minimumPair.right} − ${minimumPair.left} = ${derived.minimumGap}`);
    addArrow(endX1, endX2, 113, `END: ${positions.at(-1)} − ${positions[0]} = ${derived.span}`, 'end-label');
  }

  if (frame.type === 'check' || frame.type === 'done') {
    const placed = frame.placed || [];
    for (let i = 0; i < placed.length - 1; i++) {
      const x1 = xAt(stallIndex(placed[i]));
      const x2 = xAt(stallIndex(placed[i + 1]));
      addArrow(x1, x2, 86, String(placed[i + 1] - placed[i]));
    }
    const bubbleX = 850;
    makeNode('rect', { x: bubbleX - 63, y: 66, width: 126, height: 30, rx: 7, class: 'check-bubble' });
    makeNode('text', { x: bubbleX, y: 85, 'text-anchor': 'middle', class: 'check-label' }).textContent =
      `${placed.length} / ${cows} COWS · ${frame.ok ? 'TRUE' : 'FALSE'}`;
    if (!frame.ok) {
      (frame.skipped || []).forEach(position => {
        const x = xAt(stallIndex(position));
        makeNode('path', {
          d: `M ${x - 5} 174 l10 10 M ${x + 5} 174 l-10 10`,
          stroke: '#bc6255', 'stroke-width': 2, 'stroke-linecap': 'round'
        });
      });
    }
  }

  const axisY = 305;
  const axisX = value => 82 + ((value - derived.minimumGap) / Math.max(1, derived.span - derived.minimumGap)) * 836;
  makeNode('line', { x1: 82, y1: axisY, x2: 918, y2: axisY, class: 'answer-axis' });
  if (frame.mid != null) {
    const midX = axisX(frame.mid);
    makeNode('line', { x1: midX, y1: axisY - 10, x2: midX, y2: axisY + 10, class: 'distance-focus' });
    makeNode('text', { x: midX, y: axisY - 15, 'text-anchor': 'middle', class: 'array-indicator' }).textContent = `mid ${frame.mid}`;
  }
  if (frame.done) {
    makeNode('text', { x: 500, y: 35, 'text-anchor': 'middle', class: 'answer-banner' }).textContent =
      `BEST FEASIBLE GAP = ${frame.check}`;
  }
}

function renderArray(frame) {
  const host = document.querySelector('#array-cells');
  host.replaceChildren();
  const first = derived.minimumGap;
  const last = derived.span;
  const candidateCount = last - first + 1;

  const visibleCellLimit = Math.min(16, Math.max(6, Math.floor((host.clientWidth + 7) / 34)));
  if (candidateCount <= visibleCellLimit) {
    host.className = 'array-cells';
    host.style.gridTemplateColumns = `repeat(${candidateCount}, minmax(27px, 1fr))`;
    for (let value = first; value <= last; value++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.textContent = value;
      if (value >= frame.low && value <= frame.high) cell.classList.add('active-range');
      if (value === frame.low) cell.classList.add('start-cell');
      if (value === frame.high) cell.classList.add('end-cell');
      if (value === frame.mid) cell.classList.add('mid-cell');
      if (value === frame.check) cell.classList.add(frame.ok ? 'feasible-cell' : 'failed-cell');
      if (frame.done && value === frame.check) cell.classList.add('best-cell');
      host.append(cell);
    }
  } else {
    host.className = 'array-cells wide-range';
    host.style.gridTemplateColumns = '';
    const left = document.createElement('span');
    left.textContent = frame.low;
    const rail = document.createElement('div');
    rail.className = 'wide-rail';
    const end = document.createElement('span');
    end.textContent = frame.high;
    const mid = document.createElement('i');
    mid.style.left = `${Math.max(0, Math.min(100, ((frame.mid ?? frame.check ?? first) - frame.low) / Math.max(1, frame.high - frame.low) * 100))}%`;
    mid.title = `mid ${frame.mid ?? frame.check ?? ''}`;
    rail.append(mid);
    host.append(left, rail, end);
  }
}

function render() {
  const frame = frames[index];
  renderScene(frame);
  renderArray(frame);
  document.querySelector('#iteration').textContent = frame.tag;
  document.querySelector('#decision-step').textContent = frame.step;
  document.querySelector('#decision-text').textContent = frame.text;
  document.querySelector('#reason').hidden = index !== 0;
  document.querySelector('#reason-text').textContent =
    `Start at the smallest stall gap (${derived.minimumGap}). End at last minus first: ${data.positions.at(-1)} − ${data.positions[0]} = ${derived.span}.`;
  document.querySelector('#start-value').textContent = frame.low;
  document.querySelector('#end-value').textContent = frame.high;
  document.querySelector('#array-caption').textContent = frame.done
    ? `best feasible distance ${frame.check}`
    : frame.check != null ? `testing distance ${frame.check}` : `${derived.minimumGap} to ${derived.span}`;
  const pct = value => `${Math.max(0, Math.min(100, (value - derived.minimumGap) / Math.max(1, derived.span - derived.minimumGap) * 100))}%`;
  document.querySelector('#start-marker').style.left = pct(frame.low);
  document.querySelector('#end-marker').style.left = pct(frame.high);
  document.querySelector('#mid-marker').style.left = pct(frame.mid ?? frame.check ?? frame.low);
  document.querySelector('#back').disabled = index === 0;
  document.querySelector('#next').disabled = index === frames.length - 1;
  document.querySelector('#play-label').textContent = playing ? 'Pause' : index === frames.length - 1 ? 'Replay' : 'Play';
  document.querySelector('#play-icon').textContent = playing ? 'Ⅱ' : '▶';
}

function loadExample(nextData) {
  data = nextData;
  derived = createFrames(data);
  frames = derived.frames;
  index = 0;
  stop();
  document.querySelector('.animation-head .kicker').textContent = `PLACE ${data.cows} COWS · ${data.positions.length} STALLS`;
  document.querySelector('#example-note').textContent = data.note;
  document.querySelector('#cows-scene').setAttribute('aria-label',
    `${data.positions.length} stalls at positions ${data.positions.join(', ')}`);
  document.querySelectorAll('.example-option').forEach(option => {
    const selected = option.dataset.example === selectedExample;
    option.classList.toggle('selected', selected);
    option.setAttribute('aria-pressed', String(selected));
  });
  render();
}

function stop() {
  playing = false;
  clearTimeout(timer);
}

function advance() {
  if (index < frames.length - 1) index++;
  render();
  if (index === frames.length - 1) {
    stop();
    render();
    return;
  }
  timer = setTimeout(advance, 2000);
}

function play() {
  if (playing) {
    stop();
    render();
    return;
  }
  if (index === frames.length - 1) index = 0;
  playing = true;
  render();
  timer = setTimeout(advance, 450);
}

let derived = createFrames(data);
frames = derived.frames;
document.querySelectorAll('.example-option').forEach(option => {
  option.addEventListener('click', () => {
    selectedExample = option.dataset.example;
    loadExample(examples[selectedExample]);
  });
});
document.querySelector('#play').addEventListener('click', play);
document.querySelector('#next').addEventListener('click', () => {
  stop(); index = Math.min(frames.length - 1, index + 1); render();
});
document.querySelector('#back').addEventListener('click', () => {
  stop(); index = Math.max(0, index - 1); render();
});
document.querySelector('#reset').addEventListener('click', () => {
  stop(); index = 0; render();
});
render();
