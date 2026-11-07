const problems = {
  'book-allocation': {
    title: 'Book Allocation', subtitle: 'Give each student a consecutive run of books while minimizing the most pages assigned to one student.', objective: 'Minimize the maximum pages', kind: 'partition', unit: 'pages', actor: 'students', source: 'https://www.geeksforgeeks.org/dsa/allocate-minimum-number-pages/',
    cases: [
      { name: 'Share four books', values: [2, 3, 5, 7], groups: 2, answer: 10, note: 'Keep books in order. Student 1 gets [2, 3, 5]. Student 2 gets [7]. The largest load is 10.' },
      { name: 'More students than books', values: [1, 4, 6], groups: 4, answer: -1, note: 'Each student needs a book. Four students cannot each receive one of three books.', special: 'more-groups-than-items' }
    ]
  },
  'koko-eating-bananas': {
    title: 'Koko Eating Bananas', subtitle: 'Find the slowest speed that lets Koko eat every pile before time runs out.', objective: 'Minimize eating speed', kind: 'ceil-piles', unit: 'bananas', actor: 'hours', source: 'https://leetcode.com/problems/koko-eating-bananas/',
    cases: [
      { name: 'Small piles', values: [2, 3, 4], limit: 5, limitName: 'hours', answer: 2, note: 'At speed 2, the piles take 1, 2, and 2 hours. Total: 5 hours.' },
      { name: 'One hour per pile', values: [4, 6, 7], limit: 3, limitName: 'hours', answer: 7, note: 'There are 3 piles and 3 hours. Koko must finish one pile each hour.' },
      { name: 'More time to eat', values: [3, 5, 6], limit: 5, limitName: 'hours', answer: 3, note: 'At speed 3, the piles take 1, 2, and 2 hours. Total: 5 hours.' }
    ]
  },
  'minimum-time-trips': {
    title: 'Minimum Time to Complete Trips', subtitle: 'Find the earliest time when independent buses have completed enough trips together.', objective: 'Minimize completion time', kind: 'trips', unit: 'trips', actor: 'buses', source: 'https://leetcode.com/problems/minimum-time-to-complete-trips/',
    cases: [
      { name: 'Three buses', values: [1, 2, 3], limit: 5, limitName: 'trips', answer: 3, note: 'At time 3, the buses make 3 + 1 + 1 = 5 trips.' },
      { name: 'Two buses', values: [2, 3], limit: 3, limitName: 'trips', answer: 4, note: 'At time 4, the buses make 2 + 1 = 3 trips.' },
      { name: 'Two slower buses', values: [2, 5], limit: 4, limitName: 'trips', answer: 6, note: 'At time 6, the buses make 3 + 1 = 4 trips.' }
    ]
  },
  'capacity-to-ship': {
    title: 'Capacity to Ship Packages Within D Days', subtitle: 'Ship packages in order. Find the smallest ship capacity that meets the day limit.', objective: 'Minimize ship capacity', kind: 'partition', unit: 'weight', actor: 'days', source: 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/',
    cases: [
      { name: 'Two-day delivery', values: [1, 2, 3, 4, 5], groups: 2, groupName: 'days', answer: 9, note: 'Load [1, 2, 3] on day 1 and [4, 5] on day 2. The largest load is 9.' },
      { name: 'Three-day delivery', values: [2, 3, 4, 5], groups: 3, groupName: 'days', answer: 5, note: 'Use capacity 5: load [2, 3], [4], and [5] on three days.' },
      { name: 'Three small packages', values: [1, 2, 4], groups: 2, groupName: 'days', answer: 4, note: 'Load [1, 2] on day 1 and [4] on day 2. The largest load is 4.' }
    ]
  },
  'maximum-candies': {
    title: 'Maximum Candies Allocated to K Children', subtitle: 'Cut piles into equal-sized portions and maximize the number of candies each child gets.', objective: 'Maximize candies per child', kind: 'floor-piles', unit: 'candies', actor: 'children', source: 'https://leetcode.com/problems/maximum-candies-allocated-to-k-children/',
    cases: [
      { name: 'Three children', values: [5, 8, 6], groups: 3, answer: 5, note: 'Count ⌊pile ÷ size⌋ for each pile. Do not combine leftovers.' },
      { name: 'Not enough candies', values: [2, 5], groups: 11, answer: 0, note: 'The piles hold 7 candies. 11 children need 11. Return 0.', special: 'not-enough-units' }
    ]
  },
  'minimum-days-bouquets': {
    title: 'Minimum Days to Make M Bouquets', subtitle: 'Wait until enough adjacent flowers have bloomed to make the required bouquets.', objective: 'Minimize waiting days', kind: 'bouquets', unit: 'flowers', actor: 'bouquets', source: 'https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/',
    cases: [
      { name: 'Two small bouquets', values: [1, 3, 5, 7], groups: 2, adjacent: 1, answer: 3, note: 'By day 3, two flowers have bloomed. Each flower makes one bouquet.' },
      { name: 'Two pairs of flowers', values: [1, 2, 3, 7], groups: 2, adjacent: 2, answer: 7, note: 'By day 7, four flowers bloom in order. They make two adjacent pairs.' },
      { name: 'Not enough flowers', values: [1, 3, 5], groups: 2, adjacent: 2, answer: -1, note: 'Two bouquets need four flowers. There are only three.', special: 'not-enough-items' }
    ]
  },
  'magnetic-force': {
    title: 'Magnetic Force Between Two Balls', subtitle: 'Place balls in distinct baskets to maximize the minimum distance between any pair.', objective: 'Maximize the minimum distance', kind: 'max-distance', unit: 'basket positions', actor: 'balls', source: 'https://leetcode.com/problems/magnetic-force-between-two-balls/',
    cases: [
      { name: 'Three balls', values: [1, 2, 3, 4, 7], groups: 3, answer: 3, note: 'Place each ball in the next basket at least the test gap away.' },
      { name: 'One ball per basket', values: [1, 3, 4, 7], groups: 4, answer: 1, note: 'Use all four baskets. The smallest gap is 1.' }
    ]
  },
  'minimum-time-build': {
    title: 'Minimum Time to Complete Trips', subtitle: 'Find the earliest time when independent buses have completed enough trips together.', objective: 'Minimize completion time', kind: 'trips', unit: 'trips', actor: 'buses', source: 'https://leetcode.com/problems/minimum-time-to-complete-trips/',
    cases: [
      { name: 'Three buses', values: [1, 2, 3], limit: 5, limitName: 'trips', answer: 3, note: 'By time 3, the buses have completed 3 + 1 + 1 = 5 trips.' }
    ]
  }
};

const query = new URLSearchParams(location.search);
let problemId = query.get('problem') || 'koko-eating-bananas';
if (problemId === 'minimum-time-build') problemId = 'minimum-time-trips';
const definition = problems[problemId] || problems['koko-eating-bananas'];
let testCase = definition.cases[0];
let frames = [];
let currentFrame = 0;
let isPlaying = false;
let timer;
let setup = null;

const svg = document.querySelector('#story-scene');
const SVG_NS = 'http://www.w3.org/2000/svg';
const colors = ['#9ebc92', '#d7bd85', '#9cb6c7', '#c89eae', '#91b5ad', '#c99b7b'];

function svgNode(tag, attrs = {}) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, value);
  svg.append(node);
  return node;
}

function configurePage() {
  document.title = `${definition.title} — AnswerSpace`;
  document.querySelector('#problem-category').textContent = definition.objective.toUpperCase();
  document.querySelector('#problem-title').textContent = definition.title;
  document.querySelector('#problem-description').textContent = definition.subtitle;
  const sourceLink = document.querySelector('#problem-source');
  sourceLink.href = definition.source;
  sourceLink.textContent = definition.source.includes('geeksforgeeks.org') ? 'GEEKSFORGEEKS PROBLEM ↗' : 'LEETCODE PROBLEM ↗';
  document.querySelector('#scene-title').textContent = definition.title;
  document.querySelector('#footer-note').textContent = `${definition.objective.toUpperCase()} · ONE GUESS AT A TIME`;
  const host = document.querySelector('#example-options');
  definition.cases.forEach((example, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `example-option${index === 0 ? ' selected' : ''}`;
    button.dataset.caseIndex = index;
    button.setAttribute('aria-pressed', String(index === 0));
    const heading = document.createElement('span');
    heading.className = 'example-heading';
    const number = document.createElement('i'); number.textContent = String(index + 1).padStart(2, '0');
    const title = document.createElement('strong'); title.textContent = example.name;
    heading.append(number, title);
    const input = document.createElement('span');
    input.className = 'example-array';
    const inputName = definition.kind === 'max-distance' ? 'positions' : definition.kind === 'floor-piles' ? 'candies' : definition.title === 'Koko Eating Bananas' ? 'piles' : definition.title === 'Book Allocation' ? 'pages' : definition.title.startsWith('Capacity to Ship') ? 'packages' : 'values';
    input.textContent = `${inputName} = [${example.values.join(', ')}]`;
    const detail = document.createElement('span');
    detail.className = 'example-detail';
    const parameter = parameterSummary(example);
    detail.textContent = `${parameter} · answer ${example.answer}`;
    button.append(heading, input, detail);
    host.append(button);
  });
}

function parameterSummary(example) {
  if (definition.kind === 'bouquets') return `${example.groups} bouquets × ${example.adjacent} adjacent`;
  if (definition.kind === 'trips') return `${example.limit} total trips`;
  if (definition.kind === 'ceil-piles') return `${example.limit} ${example.limitName}`;
  if (definition.kind === 'max-distance') return `m = ${example.groups}`;
  if (definition.kind === 'floor-piles') return `k = ${example.groups}`;
  return `${example.groups} ${example.groups === 1 ? definition.actor.replace(/s$/, '') : definition.actor}`;
}

function getRange(example) {
  const values = example.values;
  if (definition.kind === 'partition') return { low: Math.max(...values), high: values.reduce((a, b) => a + b, 0) };
  if (definition.kind === 'ceil-piles') return { low: 1, high: Math.max(...values) };
  if (definition.kind === 'floor-piles') return { low: 0, high: Math.max(...values) };
  if (definition.kind === 'bouquets') return { low: Math.min(...values), high: Math.max(...values) };
  if (definition.kind === 'trips') return { low: 1, high: Math.min(...values) * example.limit };
  if (definition.kind === 'max-distance') {
    const sorted = [...values].sort((a, b) => a - b);
    const gaps = sorted.slice(1).map((value, i) => value - sorted[i]);
    return { low: Math.min(...gaps), high: sorted.at(-1) - sorted[0], sorted };
  }
}

function partitionCheck(values, limit, maxGroups) {
  const groups = [];
  const groupIndexes = [];
  let group = [];
  let indexes = [];
  let load = 0;
  for (let index = 0; index < values.length; index++) {
    const value = values[index];
    if (load + value > limit) {
      groups.push(group);
      groupIndexes.push(indexes);
      group = [];
      indexes = [];
      load = 0;
    }
    group.push(value);
    indexes.push(index);
    load += value;
  }
  if (group.length) { groups.push(group); groupIndexes.push(indexes); }
  return { groups, groupIndexes, count: groups.length, valid: groups.length <= maxGroups };
}

function check(example, guess) {
  const values = example.values;
  if (definition.kind === 'partition') {
    const result = partitionCheck(values, guess, example.groups);
    return { valid: result.valid, model: result, detail: `Needs ${result.count} ${definition.actor}; limit is ${example.groups}.` };
  }
  if (definition.kind === 'ceil-piles') {
    const counts = values.map(value => Math.ceil(value / guess));
    const total = counts.reduce((a, b) => a + b, 0);
    return { valid: total <= example.limit, model: { counts }, detail: `${counts.join(' + ')} = ${total} ${example.limitName}; ${total <= example.limit ? 'within' : 'over'} the limit ${example.limit}.` };
  }
  if (definition.kind === 'floor-piles') {
    const counts = values.map(value => Math.floor(value / guess));
    const total = counts.reduce((a, b) => a + b, 0);
    return { valid: total >= example.groups, model: { counts }, detail: `${counts.join(' + ')} = ${total} whole portions; ${total >= example.groups ? 'enough' : 'not enough'} for ${example.groups} children.` };
  }
  if (definition.kind === 'bouquets') {
    let run = 0;
    let bouquets = 0;
    const groups = [];
    let group = [];
    const bloomed = values.map((day, index) => {
      const ready = day <= guess;
      if (!ready) { run = 0; group = []; return false; }
      run++;
      group.push(index);
      if (run === example.adjacent) { bouquets++; groups.push(group); run = 0; group = []; }
      return true;
    });
    return { valid: bouquets >= example.groups, model: { bloomed, groups }, detail: `${bouquets} adjacent bouquets; need ${example.groups}.` };
  }
  if (definition.kind === 'trips') {
    const counts = values.map(time => Math.floor(guess / time));
    const total = counts.reduce((a, b) => a + b, 0);
    return { valid: total >= example.limit, model: { counts }, detail: `${counts.join(' + ')} = ${total} trips; need ${example.limit}.` };
  }
  if (definition.kind === 'max-distance') {
    const sorted = [...values].sort((a, b) => a - b);
    const placed = [sorted[0]];
    for (const position of sorted.slice(1)) {
      if (position - placed.at(-1) >= guess) placed.push(position);
      if (placed.length === example.groups) break;
    }
    return { valid: placed.length >= example.groups, model: { placed }, detail: `Placed ${placed.length} of ${example.groups} balls. Need ${example.groups} balls at least ${guess} apart.` };
  }
}

function reasonForSetup(range, example) {
  if (example.special === 'more-groups-than-items') return `Each student needs one book. There are ${example.values.length} books, but ${example.groups} students.`;
  if (example.special === 'not-enough-units') return `There are ${example.values.reduce((a, b) => a + b, 0)} candies. ${example.groups} children need at least ${example.groups} candies.`;
  if (example.special === 'not-enough-items') return `${example.groups} bouquets need ${example.groups * example.adjacent} flowers. There are only ${example.values.length}.`;
  if (definition.kind === 'partition') return `Start at the largest item (${range.low}). End at the total (${range.high}); all items fit at that limit.`;
  if (definition.kind === 'ceil-piles') return definition.title === 'Koko Eating Bananas'
    ? `At speed ${range.high}, Koko eats each pile in one hour. Speed 1 is the slowest useful speed.`
    : `Start at divisor 1. At divisor ${range.high}, each rounded quotient is 1.`;
  if (definition.kind === 'floor-piles') return `Start at 0 for the no-share case. No child can get more than the largest pile (${range.high}).`;
  if (definition.kind === 'bouquets') return `By day ${range.low}, no flower has bloomed. By day ${range.high}, all flowers have bloomed.`;
  if (definition.kind === 'trips') return `By time ${range.high}, the fastest bus can make all ${example.limit} trips. Start at time 1.`;
  if (definition.kind === 'max-distance') {
    const sorted = range.sorted;
    return `Start at the smallest basket gap (${range.low}). End at last minus first: ${sorted.at(-1)} − ${sorted[0]} = ${range.high}.`;
  }
}

function makeFrames(example) {
  const range = getRange(example);
  const lowStart = range.low;
  const highStart = range.high;
  const setupText = example.special
    ? 'Check the problem’s special constraint before starting binary search.'
    : `Search from ${lowStart} to ${highStart} to ${definition.objective.toLowerCase()}.`;
  const result = [{ type: 'setup', tag: 'SETUP', step: 'BOUNDS', low: lowStart, high: highStart, reason: reasonForSetup(range, example), text: setupText }];
  if (example.special) {
    const text = example.answer === 0
      ? 'No positive portion size gives every child one candy, so the correct answer is 0.'
      : 'This case cannot work. Return -1.';
    const model = definition.kind === 'bouquets' ? { bloomed: example.values.map(() => true), groups: [] } : undefined;
    result.push({ type: 'done', tag: `ANSWER · ${example.answer}`, step: 'EXCEPTION', low: lowStart, high: highStart, answer: example.answer, reason: reasonForSetup(range, example), text, model, special: true });
    return result;
  }
  let low = lowStart;
  let high = highStart;
  let best = null;
  let bestModel = null;
  const maximize = definition.kind === 'floor-piles' || definition.kind === 'max-distance';
  const returnLowerBound = definition.kind === 'floor-piles';
  while (returnLowerBound ? low < high : low <= high) {
    const mid = low + (returnLowerBound ? Math.ceil((high - low) / 2) : Math.floor((high - low) / 2));
    const pass = check(example, mid);
    const action = maximize ? (pass.valid ? 'search higher' : 'search lower') : (pass.valid ? 'search lower' : 'search higher');
    const midpointText = returnLowerBound
      ? `mid = ⌈(${low} + ${high}) / 2⌉ = ${mid}.`
      : `mid = ⌊(${low} + ${high}) / 2⌋ = ${mid}.`;
    result.push({ type: 'mid', tag: `MID = ${mid}`, step: `MID = ${mid}`, low, high, mid, reason: reasonForCheck(mid), text: `${midpointText} ${questionFor(mid)} ` });
    result.push({ type: 'check', tag: `CHECK · ${mid}`, step: 'IS VALID?', low, high, mid, check: mid, valid: pass.valid, model: pass.model, reason: pass.reason || reasonForCheck(mid), text: `${pass.detail} ${pass.valid ? `Keep ${mid}; ${action}.` : `Reject ${mid}; ${action}.`}` });
    if (pass.valid) {
      best = mid;
      bestModel = pass.model;
      if (returnLowerBound) low = mid;
      else if (maximize) low = mid + 1;
      else high = mid - 1;
    } else if (maximize) high = mid - 1;
    else low = mid + 1;
  }
  const answer = returnLowerBound ? low : best;
  const finalReason = returnLowerBound
    ? 'Return low. It is the largest share that works. If each child cannot get one candy, return 0.'
    : 'The last saved value that works is the best answer.';
  result.push({ type: 'done', tag: `ANSWER · ${answer}`, step: 'DONE', low, high, check: answer, answer, model: bestModel, valid: true, reason: finalReason, text: `The answer is ${answer}.` });
  return result;
}

function questionFor(mid) {
  if (definition.kind === 'partition') return `Can all items fit with a maximum ${definition.unit} load of ${mid}?`;
  if (definition.kind === 'ceil-piles') return definition.title === 'Koko Eating Bananas'
    ? `Can Koko eat all piles at speed ${mid} within ${testCase.limit} hours?`
    : `Do rounded-up quotients at ${mid} stay within ${testCase.limit} ${testCase.limitName}?`;
  if (definition.kind === 'floor-piles') return `Can piles make ${testCase.groups} portions of size ${mid}?`;
  if (definition.kind === 'bouquets') return `Can we make ${testCase.groups} adjacent bouquets by day ${mid}?`;
  if (definition.kind === 'trips') return `Can the buses complete ${testCase.limit} trips by time ${mid}?`;
  if (definition.kind === 'max-distance') return `Can ${testCase.groups} balls be placed at least ${mid} apart?`;
}

function reasonForCheck(mid) {
  if (definition.kind === 'partition') return `Pack items in order. The limit works if they fit within ${testCase.groups} ${definition.actor}.`;
  if (definition.kind === 'ceil-piles') return definition.title === 'Koko Eating Bananas'
    ? `Use ⌈pile ÷ speed⌉ for each pile. Add the hours. The speed works if the total is at most ${testCase.limit}.`
    : `Use ⌈value ÷ ${mid}⌉ for each value. Add the rounded results.`;
  if (definition.kind === 'floor-piles') return `Use ⌊pile ÷ ${mid}⌋ for each pile. Add whole portions. Do not combine leftovers.`;
  if (definition.kind === 'bouquets') return `Count only adjacent flowers that bloom by day ${mid}. Reset the count at each unbloomed flower.`;
  if (definition.kind === 'trips') return `Each bus makes ⌊${mid} ÷ trip time⌋ trips by this time.`;
  if (definition.kind === 'max-distance') return `Place each ball in the next basket at least ${mid} apart.`;
}

function selectCase(caseIndex) {
  stop();
  testCase = definition.cases[caseIndex];
  setup = getRange(testCase);
  frames = makeFrames(testCase);
  currentFrame = 0;
  document.querySelector('#example-note').textContent = testCase.note;
  document.querySelectorAll('.example-option').forEach((button, index) => {
    button.classList.toggle('selected', index === caseIndex);
    button.setAttribute('aria-pressed', String(index === caseIndex));
  });
  document.querySelector('#scenario-label').textContent = scenarioLabel();
  document.querySelector('#scene-note').textContent = definition.kind === 'max-distance'
    ? 'BASKETS · POSITION-SCALED'
    : definition.title === 'Koko Eating Bananas' ? 'BANANAS · GROUPED BY PILE' : 'INPUT ITEMS · IN ORDER';
  render();
}

function scenarioLabel() {
  if (definition.kind === 'partition') {
    const itemType = definition.title === 'Book Allocation' ? 'BOOKS' : definition.title.startsWith('Capacity to Ship') ? 'PACKAGES' : 'ITEMS';
    return `${testCase.groups} ${definition.actor.toUpperCase()} · ${testCase.values.length} ${itemType}`;
  }
  if (definition.kind === 'ceil-piles') return `${testCase.limit} ${testCase.limitName.toUpperCase()} · ${testCase.values.length} ${definition.title === 'Koko Eating Bananas' ? 'PILES' : 'VALUES'}`;
  if (definition.kind === 'floor-piles') return `k = ${testCase.groups} CHILDREN · ${testCase.values.length} PILES`;
  if (definition.kind === 'bouquets') return `${testCase.groups} BOUQUETS · ${testCase.adjacent} ADJACENT FLOWERS EACH`;
  if (definition.kind === 'trips') return `${testCase.limit} TRIPS · ${testCase.values.length} BUSES`;
  if (definition.kind === 'max-distance') return `m = ${testCase.groups} BALLS · ${testCase.values.length} BASKETS`;
}

function drawValueBars(values, model, frame) {
  const n = values.length;
  const width = Math.min(58, 760 / n);
  const gap = n === 1 ? 0 : (810 - n * width) / (n - 1);
  const max = Math.max(...values, 1);
  const groupOf = new Map();
  (model?.groupIndexes || []).forEach((indexes, groupIndex) => indexes.forEach(i => groupOf.set(i, groupIndex)));
  values.forEach((value, i) => {
    const x = 95 + i * (width + gap);
    const h = 24 + (value / max) * 94;
    const groupIndex = groupOf.get(i);
    const barClass = groupIndex == null ? 'item-bar' : `item-bar ${groupIndex % 3 === 1 ? 'alt' : groupIndex % 3 === 2 ? 'third' : ''}`;
    svgNode('rect', { x, y: 220 - h, width, height: h, rx: 4, class: `${barClass} scene-item` });
    svgNode('text', { x: x + width / 2, y: 211 - h, 'text-anchor': 'middle', class: 'object-value' }).textContent = value;
    svgNode('text', { x: x + width / 2, y: 241, 'text-anchor': 'middle', class: 'object-label' }).textContent = `${definition.unit} ${i + 1}`;
    if (groupIndex != null) svgNode('text', { x: x + width / 2, y: 262, 'text-anchor': 'middle', class: 'group-label' }).textContent = `G${groupIndex + 1}`;
    if (model?.counts) {
      const divisor = frame.mid ?? frame.check;
      const unitLabel = definition.kind === 'ceil-piles'
        ? `⌈${value}/${divisor}⌉ = ${model.counts[i]}`
        : `⌊${value}/${divisor}⌋ = ${model.counts[i]}`;
      svgNode('text', { x: x + width / 2, y: 278, 'text-anchor': 'middle', class: 'units-label' }).textContent = unitLabel;
    }
  });
  svgNode('line', { x1: 68, y1: 221, x2: 932, y2: 221, class: 'story-ground' });
  (model?.groupIndexes || []).forEach((indexes, i) => {
    const centerIndex = (indexes[0] + indexes.at(-1)) / 2;
    const total = model.groups[i].reduce((a, b) => a + b, 0);
    const x = 95 + centerIndex * (width + gap);
    svgNode('text', { x, y: 298, 'text-anchor': 'middle', class: 'group-total' }).textContent = `GROUP ${i + 1} · ${total}`;
  });
  if (frame.mid != null) svgNode('text', { x: 500, y: 315, 'text-anchor': 'middle', class: 'candidate-note' }).textContent = `TEST LIMIT · ${frame.mid}`;
}

function drawBooks(example, model, frame) {
  const values = example.values;
  const slot = 850 / values.length;
  const bookWidth = Math.min(126, slot * 0.64);
  const bookHeight = 112;
  const top = 118;
  const centers = values.map((_, index) => 75 + slot * (index + 0.5));
  const groupOf = new Map();
  (model?.groupIndexes || []).forEach((indexes, groupIndex) => indexes.forEach(index => groupOf.set(index, groupIndex)));
  svgNode('line', { x1: 62, y1: 250, x2: 938, y2: 250, class: 'story-ground' });
  (model?.groupIndexes || []).forEach((indexes, groupIndex) => {
    const x = centers[indexes[0]] - slot / 2 + 5;
    const width = centers[indexes.at(-1)] - centers[indexes[0]] + slot - 10;
    svgNode('rect', { x, y: 93, width, height: 179, rx: 12, class: 'book-group scene-item' });
    svgNode('text', { x: x + width / 2, y: 291, 'text-anchor': 'middle', class: 'group-label' }).textContent = `STUDENT ${groupIndex + 1} · ${model.groups[groupIndex].reduce((sum, pages) => sum + pages, 0)} PAGES`;
  });
  values.forEach((pages, index) => {
    const center = centers[index];
    const group = groupOf.get(index);
    const cover = group == null ? ['#81a77c', '#d2a75d', '#7699b2', '#bd8291'][index % 4] : ['#6f996b', '#c28c4c', '#6e91a8', '#b47b8c'][group % 4];
    const x = center - bookWidth / 2;
    svgNode('rect', { x, y: top, width: bookWidth, height: bookHeight, rx: 5, fill: cover, class: 'book-cover scene-item' });
    svgNode('rect', { x: x + 9, y: top + 8, width: bookWidth - 18, height: bookHeight - 16, rx: 2, class: 'book-pages' });
    svgNode('line', { x1: x + 15, y1: top + 8, x2: x + 15, y2: top + bookHeight - 8, class: 'book-spine' });
    const pageTop = top + 22;
    const pageGap = Math.min(10, (bookHeight - 42) / Math.max(1, pages));
    for (let page = 0; page < pages; page++) {
      const y = pageTop + page * pageGap;
      svgNode('line', { x1: x + 24, y1: y, x2: x + bookWidth - 15, y2: y, class: 'book-page-line' });
    }
    svgNode('text', { x: center, y: top + bookHeight + 18, 'text-anchor': 'middle', class: 'object-value' }).textContent = `BOOK ${index + 1}`;
    svgNode('text', { x: center, y: top + bookHeight + 34, 'text-anchor': 'middle', class: 'object-label' }).textContent = `${pages} ${pages === 1 ? 'page' : 'pages'}`;
  });
  const limit = frame.mid ?? frame.check;
  if (limit != null) svgNode('text', { x: 500, y: 322, 'text-anchor': 'middle', class: 'candidate-note' }).textContent = `TEST LIMIT · ${limit} PAGES PER STUDENT`;
}

function drawShippingContainers(example, model, frame) {
  const values = example.values;
  const step = values.length === 1 ? 810 : 810 / (values.length - 1);
  const centers = values.map((_, index) => values.length === 1 ? 500 : 95 + step * index);
  const groups = model?.groupIndexes || [];
  if (groups.length) {
    groups.forEach((indexes, groupIndex) => {
      const x = Math.max(55, centers[indexes[0]] - step * 0.37);
      const right = Math.min(945, centers[indexes.at(-1)] + step * 0.37);
      const width = right - x;
      const state = frame.valid === false ? ' fail' : ' pass';
      svgNode('rect', { x, y: 105, width, height: 137, rx: 8, class: `shipping-container${state}` });
      for (let rib = x + 17; rib < x + width - 8; rib += 34) {
        svgNode('line', { x1: rib, y1: 117, x2: rib, y2: 230, class: 'container-rib' });
      }
      const load = model.groups[groupIndex].reduce((sum, weight) => sum + weight, 0);
      svgNode('text', { x: x + width / 2, y: 96, 'text-anchor': 'middle', class: 'container-label' }).textContent = `DAY ${groupIndex + 1} · LOAD ${load}`;
    });
  } else {
    svgNode('rect', { x: 62, y: 105, width: 876, height: 137, rx: 8, class: 'shipping-container waiting' });
    for (let rib = 79; rib < 930; rib += 38) svgNode('line', { x1: rib, y1: 117, x2: rib, y2: 230, class: 'container-rib' });
    svgNode('text', { x: 500, y: 96, 'text-anchor': 'middle', class: 'container-label' }).textContent = 'PACKAGES WAITING · KEEP THEM IN ORDER';
  }
  values.forEach((weight, index) => {
    const x = centers[index];
    const groupIndex = groups.findIndex(group => group.includes(index));
    const tone = groupIndex < 0 ? '' : ` group-${groupIndex % 3}`;
    svgNode('rect', { x: x - 27, y: 145, width: 54, height: 57, rx: 4, class: `shipping-box scene-item${tone}` });
    svgNode('path', { d: `M ${x - 27} 160 L ${x} 169 L ${x + 27} 160 M ${x} 169 L ${x} 202`, class: 'box-fold' });
    svgNode('text', { x, y: 192, 'text-anchor': 'middle', class: 'box-weight' }).textContent = String(weight);
    svgNode('text', { x, y: 222, 'text-anchor': 'middle', class: 'object-label' }).textContent = `PACKAGE ${index + 1}`;
  });
  svgNode('line', { x1: 62, y1: 251, x2: 938, y2: 251, class: 'story-ground' });
  const capacity = frame.mid ?? frame.check;
  if (capacity != null) {
    const days = model?.count ?? 0;
    svgNode('text', { x: 500, y: 299, 'text-anchor': 'middle', class: 'candidate-note' }).textContent = `CAPACITY ${capacity} · ${days} / ${example.groups} DAYS`;
  }
}

function drawCandyPiles(example, model, frame) {
  const palette = ['#e84f62', '#f2a52d', '#48a889', '#6487df', '#b26ad0', '#e56b34'];
  const n = example.values.length;
  const spacing = n <= 3 ? 300 : Math.min(250, 870 / n);
  const start = 500 - spacing * (n - 1) / 2;
  const zeroAnswer = frame.type === 'done' && frame.answer === 0;
  const size = zeroAnswer ? null : frame.mid ?? frame.check ?? (frame.type === 'done' ? frame.answer : null);
  svgNode('line', { x1: 62, y1: 260, x2: 938, y2: 260, class: 'story-ground' });
  example.values.forEach((amount, pileIndex) => {
    const center = start + pileIndex * spacing;
    const columns = Math.min(4, amount);
    const rows = Math.ceil(amount / columns);
    const gapX = 34;
    const gapY = 39;
    const totalPortions = size > 0 ? Math.floor(amount / size) : 0;
    svgNode('text', { x: center, y: 82, 'text-anchor': 'middle', class: 'candy-pile-title' }).textContent = `PILE ${pileIndex + 1}`;
    svgNode('text', { x: center, y: 102, 'text-anchor': 'middle', class: 'candy-pile-total' }).textContent = `${amount} candies`;
    for (let candy = 0; candy < amount; candy++) {
      const col = candy % columns;
      const row = Math.floor(candy / columns);
      const x = center + (col - (columns - 1) / 2) * gapX;
      const y = 142 + (row - (rows - 1) / 2) * gapY;
      const isLeftover = size > 0 && candy >= totalPortions * size;
      const portion = size > 0 ? Math.floor(candy / size) : 0;
      const color = isLeftover ? '#c8c9c3' : palette[portion % palette.length];
      const dim = isLeftover ? ' leftover' : '';
      svgNode('polygon', { points: `${x - 10},${y} ${x - 16},${y - 7} ${x - 16},${y + 7}`, fill: color, class: `candy-wrapper${dim}` });
      svgNode('polygon', { points: `${x + 10},${y} ${x + 16},${y - 7} ${x + 16},${y + 7}`, fill: color, class: `candy-wrapper${dim}` });
      svgNode('rect', { x: x - 11, y: y - 9, width: 22, height: 18, rx: 7, fill: color, class: `candy-body${dim}` });
      svgNode('path', { d: `M ${x - 5} ${y - 6} Q ${x - 9} ${y} ${x - 5} ${y + 6}`, class: `candy-shine${dim}` });
    }
    if (size > 0) {
      svgNode('text', { x: center, y: 222, 'text-anchor': 'middle', class: 'candy-count' }).textContent = `⌊${amount} / ${size}⌋ = ${totalPortions}`;
      const leftover = amount % size;
      if (leftover) svgNode('text', { x: center, y: 242, 'text-anchor': 'middle', class: 'candy-leftover-note' }).textContent = `${leftover} leftover`;
    } else if (zeroAnswer) {
      svgNode('text', { x: center, y: 222, 'text-anchor': 'middle', class: 'candy-leftover-note' }).textContent = 'no whole share';
    } else {
      svgNode('text', { x: center, y: 222, 'text-anchor': 'middle', class: 'candy-count' }).textContent = 'choose a share size';
    }
  });
  if (size > 0) {
    const total = model?.counts?.reduce((sum, count) => sum + count, 0)
      ?? example.values.reduce((sum, amount) => sum + Math.floor(amount / size), 0);
    svgNode('text', { x: 500, y: 294, 'text-anchor': 'middle', class: 'candidate-note' }).textContent = `SHARE SIZE ${size} · ${total ?? '—'} WHOLE PORTIONS FOR ${example.groups} CHILDREN`;
  } else if (zeroAnswer) {
    const totalCandies = example.values.reduce((sum, amount) => sum + amount, 0);
    svgNode('text', { x: 500, y: 294, 'text-anchor': 'middle', class: 'candidate-note' }).textContent = `${totalCandies} CANDIES · ${example.groups} CHILDREN · ANSWER 0`;
  }
}

function drawBananaPiles(example, model, frame) {
  const values = example.values;
  const xAt = index => values.length === 1 ? 500 : 105 + index * (790 / (values.length - 1));
  const speed = frame.mid ?? frame.check ?? null;
  const colors = ['#f4c43d', '#edb72e', '#f7d357', '#e9ad2c'];
  values.forEach((amount, pileIndex) => {
    const center = xAt(pileIndex);
    svgNode('text', { x: center, y: 68, 'text-anchor': 'middle', class: 'banana-pile-title' }).textContent = `PILE ${pileIndex + 1}`;
    svgNode('text', { x: center, y: 86, 'text-anchor': 'middle', class: 'banana-pile-total' }).textContent = `${amount} bananas`;
    const chunks = [];
    if (speed) {
      for (let start = 0; start < amount; start += speed) chunks.push(Array.from({ length: Math.min(speed, amount - start) }, (_, offset) => start + offset));
    } else {
      for (let start = 0; start < amount; start += 4) chunks.push(Array.from({ length: Math.min(4, amount - start) }, (_, offset) => start + offset));
    }
    chunks.forEach((chunk, hourIndex) => {
      const y = 112 + hourIndex * 25;
      const groupWidth = chunk.length * 29 + 13;
      if (speed) svgNode('rect', { x: center - groupWidth / 2, y: y - 12, width: groupWidth, height: 24, rx: 12, class: 'banana-hour-row' });
      chunk.forEach((bananaIndex, column) => {
        const x = center + (column - (chunk.length - 1) / 2) * 29;
        const fill = colors[hourIndex % colors.length];
        const path = `M ${x - 11} ${y - 7} C ${x - 7} ${y + 3}, ${x + 1} ${y + 8}, ${x + 11} ${y - 5} C ${x + 8} ${y + 8}, ${x - 1} ${y + 12}, ${x - 7} ${y + 7} C ${x - 10} ${y + 4}, ${x - 12} ${y}, ${x - 11} ${y - 7} Z`;
        svgNode('path', { d: path, fill, class: 'banana-image scene-item' });
        svgNode('line', { x1: x - 11, y1: y - 7, x2: x - 9, y2: y - 10, class: 'banana-stem' });
        svgNode('path', { d: `M ${x - 6} ${y + 2} Q ${x} ${y + 7} ${x + 6} ${y - 2}`, class: 'banana-highlight' });
      });
      if (speed) {
        const putLabelLeft = center + groupWidth / 2 + 25 > 985;
        svgNode('text', { x: center + (putLabelLeft ? -groupWidth / 2 - 7 : groupWidth / 2 + 7), y: y + 3, 'text-anchor': putLabelLeft ? 'end' : 'start', class: 'banana-hour-label' }).textContent = `${hourIndex + 1}h`;
      }
    });
    if (speed) {
      const hours = model?.counts?.[pileIndex] ?? Math.ceil(amount / speed);
      svgNode('text', { x: center, y: 292, 'text-anchor': 'middle', class: 'banana-formula' }).textContent = `⌈${amount} ÷ ${speed}⌉ = ${hours} h`;
    } else {
      svgNode('text', { x: center, y: 292, 'text-anchor': 'middle', class: 'banana-formula' }).textContent = 'choose a speed';
    }
  });
  svgNode('line', { x1: 62, y1: 270, x2: 938, y2: 270, class: 'story-ground' });
  if (speed) {
    const totalHours = model?.counts?.reduce((sum, hours) => sum + hours, 0)
      ?? values.reduce((sum, amount) => sum + Math.ceil(amount / speed), 0);
    svgNode('text', { x: 500, y: 322, 'text-anchor': 'middle', class: 'candidate-note' }).textContent = `SPEED ${speed} · ${totalHours} / ${example.limit} HOURS`;
  }
}

function drawFlowers(example, model, frame) {
  const n = example.values.length;
  const xAt = i => 95 + i * (810 / Math.max(1, n - 1));
  example.values.forEach((day, i) => {
    const x = xAt(i);
    const bloomed = model ? model.bloomed[i] : false;
    svgNode('line', { x1: x, y1: 202, x2: x, y2: 286, class: 'flower-stem' });
    svgNode('circle', { cx: x, cy: 191, r: 12, class: bloomed ? 'flower-bloom' : 'flower-bud' });
    if (bloomed) for (let petal = 0; petal < 5; petal++) {
      const angle = petal * Math.PI * 2 / 5;
      svgNode('circle', { cx: x + Math.cos(angle) * 13, cy: 191 + Math.sin(angle) * 13, r: 5, class: 'flower-bloom' });
    }
  });
  svgNode('line', { x1: 67, y1: 242, x2: 933, y2: 242, class: 'story-ground' });
  example.values.forEach((day, i) => {
    svgNode('text', { x: xAt(i), y: 264, 'text-anchor': 'middle', class: 'object-value' }).textContent = `day ${day}`;
  });
  (model?.groups || []).forEach((group, groupIndex) => {
    const x1 = xAt(group[0]); const x2 = xAt(group.at(-1));
    const width = Math.max(70, x2 - x1 + 52);
    const x = Math.max(62, Math.min(938 - width, (x1 + x2) / 2 - width / 2));
    svgNode('path', { d: `M ${x + 5} 281 Q ${x + width / 2} 258 ${x + width - 5} 281`, class: 'basket-handle' });
    svgNode('path', { d: `M ${x} 278 L ${x + width} 278 L ${x + width - 8} 316 Q ${x + width / 2} 324 ${x + 8} 316 Z`, class: 'bouquet-basket scene-item' });
    svgNode('line', { x1: x - 2, y1: 279, x2: x + width + 2, y2: 279, class: 'basket-rim' });
    for (let weave = x + 12; weave < x + width - 8; weave += 18) {
      svgNode('line', { x1: weave, y1: 286, x2: weave + 3, y2: 313, class: 'basket-weave' });
    }
    svgNode('text', { x: x + width / 2, y: 305, 'text-anchor': 'middle', class: 'basket-label' }).textContent = `BOUQUET ${groupIndex + 1}`;
  });
  const day = frame.mid ?? frame.check;
  if (day != null) svgNode('text', { x: 500, y: 334, 'text-anchor': 'middle', class: 'candidate-note' }).textContent = `DAY ${day} · ${model?.groups?.length ?? 0} / ${example.groups} BOUQUETS`;
}

function drawBuses(example, model, frame) {
  const n = example.values.length;
  const width = Math.min(120, 720 / n);
  const gap = n === 1 ? 0 : (800 - width * n) / (n - 1);
  svgNode('line', { x1: 55, y1: 204, x2: 945, y2: 204, class: 'story-ground' });
  example.values.forEach((time, i) => {
    const x = 100 + i * (width + gap);
    svgNode('text', { x: x + width / 2, y: 100, 'text-anchor': 'middle', class: 'object-value' }).textContent = `BUS ${i + 1}`;
    svgNode('rect', { x, y: 114, width, height: 78, rx: 14, class: 'trip-bus scene-item' });
    const windows = Math.max(1, Math.floor((width - 37) / 25));
    for (let window = 0; window < windows; window++) {
      svgNode('rect', { x: x + 14 + window * 25, y: 126, width: 19, height: 19, rx: 3, class: 'bus-window' });
    }
    svgNode('text', { x: x + width / 2, y: 171, 'text-anchor': 'middle', class: 'object-label' }).textContent = `${time} time / trip`;
    svgNode('circle', { cx: x + 26, cy: 194, r: 8, class: 'bus-wheel' });
    svgNode('circle', { cx: x + width - 26, cy: 194, r: 8, class: 'bus-wheel' });
    if (model) svgNode('text', { x: x + width / 2, y: 237, 'text-anchor': 'middle', class: 'units-label' }).textContent = `${model.counts[i]} trips`;
  });
  if (frame.mid != null) svgNode('text', { x: 500, y: 294, 'text-anchor': 'middle', class: 'candidate-note' }).textContent = `BY TIME ${frame.mid} · ${model?.counts?.reduce((a, b) => a + b, 0) ?? 0} / ${example.limit} TRIPS`;
}

function drawDistance(example, model, frame) {
  const values = [...example.values].sort((a, b) => a - b);
  const min = values[0];
  const span = values.at(-1) - min || 1;
  const xAt = value => 95 + ((value - min) / span) * 810;
  svgNode('line', { x1: 55, y1: 226, x2: 945, y2: 226, class: 'story-ground' });
  if (definition.kind === 'max-distance') {
    const defs = document.createElementNS(SVG_NS, 'defs');
    const gradient = document.createElementNS(SVG_NS, 'radialGradient');
    gradient.setAttribute('id', 'steel-ball');
    gradient.setAttribute('cx', '34%'); gradient.setAttribute('cy', '26%'); gradient.setAttribute('r', '78%');
    [['0%', '#ffffff'], ['18%', '#e8ebed'], ['48%', '#aeb5ba'], ['76%', '#777f85'], ['100%', '#4e565c']].forEach(([offset, color]) => {
      const stop = document.createElementNS(SVG_NS, 'stop');
      stop.setAttribute('offset', offset); stop.setAttribute('stop-color', color); gradient.append(stop);
    });
    defs.append(gradient); svg.append(defs);
  }
  values.forEach((value, i) => {
    const x = xAt(value);
    svgNode('rect', { x: x - 21, y: 183, width: 42, height: 43, rx: 5, class: 'item-block' });
    svgNode('text', { x, y: 210, 'text-anchor': 'middle', class: 'object-value' }).textContent = value;
    if (model?.placed?.includes(value)) {
      svgNode('ellipse', { cx: x, cy: 166, rx: 17, ry: 4, class: 'ball-shadow' });
      svgNode('circle', { cx: x, cy: 158, r: 17, class: 'magnetic-ball scene-item' });
      svgNode('ellipse', { cx: x - 5, cy: 151, rx: 5, ry: 3, class: 'ball-glint' });
    }
  });
  const gap = frame.mid ?? frame.check;
  if (gap != null) svgNode('text', { x: 500, y: 277, 'text-anchor': 'middle', class: 'candidate-note' }).textContent = `${model?.placed?.length ?? 0} / ${example.groups} BALLS PLACED · TRIAL GAP ${gap}`;
}

function renderScene(frame) {
  svg.replaceChildren();
  const model = frame.model;
  if (definition.kind === 'bouquets') drawFlowers(testCase, model, frame);
  else if (definition.kind === 'trips') drawBuses(testCase, model, frame);
  else if (definition.kind === 'max-distance') drawDistance(testCase, model, frame);
  else if (definition.kind === 'floor-piles') drawCandyPiles(testCase, model, frame);
  else if (definition.kind === 'partition' && definition.title === 'Book Allocation') drawBooks(testCase, model, frame);
  else if (definition.kind === 'partition' && definition.title.startsWith('Capacity to Ship')) drawShippingContainers(testCase, model, frame);
  else if (definition.kind === 'ceil-piles' && definition.title === 'Koko Eating Bananas') drawBananaPiles(testCase, model, frame);
  else drawValueBars(testCase.values, model, frame);
  if (frame.type === 'done') svgNode('text', { x: 500, y: 47, 'text-anchor': 'middle', class: 'answer-banner' }).textContent =
    `ANSWER · ${frame.answer}`;
}

function renderCandidates(frame) {
  const host = document.querySelector('#array-cells');
  host.replaceChildren();
  const lo = setup.low;
  const hi = setup.high;
  const count = hi - lo + 1;
  const limit = Math.min(18, Math.max(6, Math.floor((host.clientWidth + 5) / 32)));
  if (count > 0 && count <= limit) {
    host.className = 'array-cells';
    host.style.gridTemplateColumns = `repeat(${count}, minmax(22px, 1fr))`;
    for (let candidate = lo; candidate <= hi; candidate++) {
      const cell = document.createElement('div');
      cell.className = 'candidate';
      cell.textContent = candidate;
      if (candidate >= frame.low && candidate <= frame.high) cell.classList.add('active');
      if (candidate === frame.low) cell.classList.add('low');
      if (candidate === frame.high) cell.classList.add('high');
      if (candidate === frame.mid) cell.classList.add('mid');
      if (candidate === frame.check) cell.classList.add(frame.valid ? 'pass' : 'fail');
      if (frame.type === 'done' && candidate === frame.answer) cell.classList.add('answer');
      host.append(cell);
    }
  } else {
    host.className = 'array-cells wide-range';
    host.style.gridTemplateColumns = '';
    const low = document.createElement('span'); low.textContent = frame.low;
    const rail = document.createElement('div'); rail.className = 'wide-rail';
    const dot = document.createElement('i');
    const value = frame.mid ?? frame.check ?? frame.answer ?? frame.low;
    dot.style.left = `${Math.max(0, Math.min(100, (value - frame.low) / Math.max(1, frame.high - frame.low) * 100))}%`;
    rail.append(dot);
    const high = document.createElement('span'); high.textContent = frame.high;
    host.append(low, rail, high);
  }
}

function render() {
  const frame = frames[currentFrame];
  renderScene(frame);
  renderCandidates(frame);
  document.querySelector('#iteration').textContent = frame.tag;
  document.querySelector('#decision-step').textContent = frame.step;
  document.querySelector('#decision-text').textContent = frame.text;
  const reason = document.querySelector('#decision-reason');
  reason.hidden = !frame.reason;
  reason.querySelector('span').textContent = frame.step === 'BOUNDS' ? 'WHY THESE BOUNDS' : 'WHY THIS CHECK';
  document.querySelector('#reason-text').textContent = frame.reason || '';
  document.querySelector('#low-value').textContent = frame.low ?? '—';
  document.querySelector('#high-value').textContent = frame.high ?? '—';
  document.querySelector('#array-caption').textContent = frame.check != null ? `testing ${frame.check}` : `${setup.low} to ${setup.high}`;
  document.querySelector('#range-label').textContent = definition.kind === 'max-distance' ? 'SEARCH DISTANCE' : 'ANSWER CANDIDATES';
  const percent = value => `${Math.max(0, Math.min(100, (value - setup.low) / Math.max(1, setup.high - setup.low) * 100))}%`;
  document.querySelector('#low-marker').style.left = percent(frame.low ?? setup.low);
  document.querySelector('#high-marker').style.left = percent(frame.high ?? setup.high);
  document.querySelector('#mid-marker').style.left = percent(frame.mid ?? frame.check ?? frame.answer ?? setup.low);
  document.querySelector('#back').disabled = currentFrame === 0;
  document.querySelector('#next').disabled = currentFrame === frames.length - 1;
  document.querySelector('#play-label').textContent = isPlaying ? 'Pause' : currentFrame === frames.length - 1 ? 'Replay' : 'Play';
  document.querySelector('#play-icon').textContent = isPlaying ? 'Ⅱ' : '▶';
}

function stop() { isPlaying = false; clearTimeout(timer); }
function advance() {
  if (currentFrame < frames.length - 1) currentFrame++;
  render();
  if (currentFrame === frames.length - 1) { stop(); render(); return; }
  timer = setTimeout(advance, 1800);
}
function play() {
  if (isPlaying) { stop(); render(); return; }
  if (currentFrame === frames.length - 1) currentFrame = 0;
  isPlaying = true; render(); timer = setTimeout(advance, 400);
}

configurePage();
document.querySelectorAll('.example-option').forEach((button, index) => button.addEventListener('click', () => selectCase(index)));
document.querySelector('#play').addEventListener('click', play);
document.querySelector('#next').addEventListener('click', () => { stop(); currentFrame = Math.min(frames.length - 1, currentFrame + 1); render(); });
document.querySelector('#back').addEventListener('click', () => { stop(); currentFrame = Math.max(0, currentFrame - 1); render(); });
document.querySelector('#reset').addEventListener('click', () => { stop(); currentFrame = 0; render(); });
selectCase(0);
