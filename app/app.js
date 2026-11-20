// Platinum Desk — Evidence Edition: rendering and tracker logic.
// Data lives in ./data/guide.js; everything on this page is computed from it.

import { SOURCES, ROADMAP, TROPHIES } from './data/guide.js';

const SOURCE_SHORT = {
  S1: 'PSN Official', S2: 'PowerPyx', S3: 'PSNProfiles', S4: 'TrueTrophies',
  S5: 'Push Square', S6: 'IGN', S7: 'GameSpot', S8: 'Eurogamer', S9: 'VG247',
  S10: 'Rockstar Newswire', S11: 'PS Blog', S12: 'GTA VI Site', S13: 'GTA Wiki',
};
const GRADE_ORDER = ['platinum', 'gold', 'silver', 'bronze'];
const STORAGE_KEY = 'platinum-desk-evidence-done-v1';

const state = {
  done: loadProgress(),
  gradeFilter: 'all',
  phaseFilter: null,
  missableOnly: false,
  hideDone: false,
  expanded: new Set(),
};

function computeEvidenceCounts() {
  let steps = 0, stepCitations = 0, backed = 0;
  const usedSources = new Set();
  for (const trophy of TROPHIES) {
    for (const cite of trophy.cites) usedSources.add(cite.s);
    for (const step of trophy.steps) {
      steps += 1;
      stepCitations += step.c.length;
      if (step.c.length >= 2) backed += 1;
      for (const key of step.c) usedSources.add(key);
    }
  }
  const trophyCitations = TROPHIES.reduce((sum, t) => sum + t.cites.length, 0);
  return {
    trophies: TROPHIES.length,
    steps,
    citations: stepCitations + trophyCitations,
    backed,
    sources: usedSources.size,
    missable: TROPHIES.filter((t) => t.missable).length,
    totalHours: ROADMAP.reduce((sum, p) => sum + p.hours, 0),
  };
}

function loadProgress() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const ids = JSON.parse(raw);
    return new Set(ids.filter((id) => TROPHIES.some((t) => t.id === id)));
  } catch {
    return new Set(); // storage unavailable (private mode, file access): in-memory only
  }
}

function saveProgress() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.done]));
  } catch {
    /* storage unavailable: progress lives in memory for this session */
  }
}

function trophiesInPhase(phase) {
  return TROPHIES.filter((t) => t.phase === phase);
}

function estimateHoursLeft() {
  let left = 0;
  for (const phase of ROADMAP) {
    const list = trophiesInPhase(phase.phase);
    if (list.length === 0) continue;
    const remaining = list.filter((t) => !state.done.has(t.id)).length;
    left += phase.hours * (remaining / list.length);
  }
  return Math.round(left * 2) / 2;
}

function sourceChip(key) {
  const source = SOURCES[key];
  const label = `${key} · ${SOURCE_SHORT[key]}`;
  const title = `${source.name} — ${source.date}`;
  if (source.url) {
    return `<a class="chip chip-link" href="${source.url}" title="${title}">${label}</a>`;
  }
  return `<span class="chip" title="${title}">${label}</span>`;
}

function renderStep(step, index) {
  const chips = step.c.map(sourceChip).join(' ');
  const backed = step.c.length >= 2 ? '<span class="backed-badge">2+ BACKED</span>' : '';
  return `<li class="step">
    <span class="step-kind kind-${step.k}">${step.k}</span>
    <span class="step-text">${index + 1}. ${step.t}</span>
    <span class="step-cites">${chips} ${backed}</span>
  </li>`;
}

function renderTrophyCitations(trophy) {
  const rows = trophy.cites.map((cite) => {
    const source = SOURCES[cite.s];
    const name = source.url
      ? `<a href="${source.url}">${source.name}</a>`
      : source.name;
    return `<li><b>${cite.s}</b> ${name} <span class="cite-date">${source.date}</span> — ${cite.supports}</li>`;
  }).join('');
  return `<div class="trophy-cites"><h4>Sources for this trophy</h4><ul>${rows}</ul></div>`;
}

function trophyCard(trophy) {
  const done = state.done.has(trophy.id);
  const expanded = state.expanded.has(trophy.id);
  const phase = ROADMAP.find((p) => p.phase === trophy.phase);
  const warn = trophy.missable ? `<p class="warn">⚠ ${trophy.warn}</p>` : '';
  const steps = trophy.steps.map(renderStep).join('');
  return `<article class="card grade-${trophy.grade} ${done ? 'is-done' : ''}" id="card-${trophy.id}">
    <header class="card-head">
      <label class="check"><input type="checkbox" data-check="${trophy.id}" ${done ? 'checked' : ''}><span class="box"></span></label>
      <span class="badge badge-${trophy.grade}">${trophy.grade}</span>
      <h3>${trophy.name}</h3>
      ${trophy.missable ? '<span class="missable-badge">MISSABLE</span>' : ''}
      <span class="phase-tag">Phase ${trophy.phase} · ${phase.title}</span>
      <button class="toggle-card" data-toggle="${trophy.id}" aria-expanded="${expanded}">${expanded ? 'Hide steps' : `Steps (${trophy.steps.length})`}</button>
    </header>
    <p class="desc">${trophy.desc}</p>
    ${warn}
    <div class="card-body" ${expanded ? '' : 'hidden'}>
      <ol class="steps">${steps}</ol>
      ${renderTrophyCitations(trophy)}
    </div>
  </article>`;
}

function visibleTrophies() {
  return TROPHIES.filter((trophy) => {
    if (state.gradeFilter !== 'all' && trophy.grade !== state.gradeFilter) return false;
    if (state.phaseFilter !== null && trophy.phase !== state.phaseFilter) return false;
    if (state.missableOnly && !trophy.missable) return false;
    if (state.hideDone && state.done.has(trophy.id)) return false;
    return true;
  });
}

function renderTrophies() {
  const list = visibleTrophies();
  document.getElementById('trophy-list').innerHTML =
    list.length ? list.map(trophyCard).join('') : '<p class="empty">No trophies match the current filters.</p>';
  document.getElementById('showing').textContent = `Showing ${list.length} of ${TROPHIES.length} trophies`;
}

function renderRoadmap() {
  const nav = document.getElementById('roadmap');
  nav.innerHTML = ROADMAP.map((phase) => {
    const list = trophiesInPhase(phase.phase);
    const done = list.filter((t) => state.done.has(t.id)).length;
    const pct = list.length ? Math.round((done / list.length) * 100) : 0;
    const active = state.phaseFilter === phase.phase ? ' active' : '';
    return `<button class="phase${active}" data-phase="${phase.phase}" title="${phase.blurb}">
      <span class="phase-num">P${phase.phase}</span>
      <span class="phase-title">${phase.title}</span>
      <span class="phase-meta">${phase.hours} h · ${done}/${list.length} done</span>
      <span class="phase-bar"><span class="phase-fill" style="width:${pct}%"></span></span>
    </button>`;
  }).join('');
}

function updateTracker() {
  const counts = computeEvidenceCounts();
  const doneCount = state.done.size;
  const pct = Math.round((doneCount / counts.trophies) * 100);
  document.getElementById('pct').textContent = `${pct}%`;
  document.getElementById('fill').style.width = `${pct}%`;
  const left = estimateHoursLeft();
  document.getElementById('pace').textContent =
    `${doneCount} / ${counts.trophies} trophies · ${counts.trophies - doneCount} to go · ≈${left} h left of the ≈${counts.totalHours} h roadmap`;
  for (const grade of GRADE_ORDER) {
    const total = TROPHIES.filter((t) => t.grade === grade).length;
    const done = TROPHIES.filter((t) => t.grade === grade && state.done.has(t.id)).length;
    document.getElementById(`gc-${grade}`).textContent = `${done}/${total}`;
  }
  const missableDone = TROPHIES.filter((t) => t.missable && state.done.has(t.id)).length;
  document.getElementById('gc-missable').textContent = `${missableDone}/${counts.missable}`;
}

function renderHeaderCounts() {
  const counts = computeEvidenceCounts();
  document.getElementById('stat-trophies').textContent = counts.trophies;
  document.getElementById('stat-steps').textContent = counts.steps;
  document.getElementById('stat-citations').textContent = counts.citations;
  document.getElementById('stat-backed').textContent = counts.backed;
  document.getElementById('stat-sources').textContent = counts.sources;
}

function renderSourceAudit() {
  document.getElementById('source-list').innerHTML = Object.entries(SOURCES).map(([key, source]) => {
    const name = source.url ? `<a href="${source.url}">${source.name}</a>` : source.name;
    return `<li><b>${key}</b> ${name} <span class="cite-date">${source.date}</span> <span class="source-kind">${source.kind}</span></li>`;
  }).join('');
}

function applyHashState() {
  // Shareable views: #check=id1,id2 pre-checks trophies, #open=id expands one,
  // #missable turns the missable filter on. Used by the guide's own links.
  const hash = window.location.hash.replace(/^#/, '');
  if (!hash) return;
  const params = new URLSearchParams(hash);
  const check = params.get('check');
  if (check) {
    for (const id of check.split(',')) {
      if (TROPHIES.some((t) => t.id === id)) state.done.add(id);
    }
    saveProgress();
  }
  if (params.has('missable')) {
    state.missableOnly = true;
    document.getElementById('missable-only').checked = true;
  }
  const open = params.get('open');
  if (open && TROPHIES.some((t) => t.id === open)) {
    state.expanded = new Set([open]);
    requestAnimationFrame(() => {
      const el = document.getElementById(`card-${open}`);
      if (el) el.scrollIntoView({ block: 'start' });
    });
  }
}

function bindControls() {
  document.getElementById('grade-filters').addEventListener('click', (event) => {
    const button = event.target.closest('button[data-grade]');
    if (!button) return;
    state.gradeFilter = button.dataset.grade;
    for (const b of document.querySelectorAll('#grade-filters button')) b.classList.toggle('active', b === button);
    renderTrophies();
  });
  document.getElementById('missable-only').addEventListener('change', (event) => {
    state.missableOnly = event.target.checked;
    renderTrophies();
  });
  document.getElementById('hide-done').addEventListener('change', (event) => {
    state.hideDone = event.target.checked;
    renderTrophies();
  });
  document.getElementById('expand-all').addEventListener('click', () => {
    state.expanded = new Set(visibleTrophies().map((t) => t.id));
    renderTrophies();
  });
  document.getElementById('collapse-all').addEventListener('click', () => {
    state.expanded = new Set();
    renderTrophies();
  });
  document.getElementById('reset-progress').addEventListener('click', () => {
    state.done = new Set();
    saveProgress();
    renderAll();
  });
  document.getElementById('roadmap').addEventListener('click', (event) => {
    const button = event.target.closest('button[data-phase]');
    if (!button) return;
    const phase = Number(button.dataset.phase);
    state.phaseFilter = state.phaseFilter === phase ? null : phase;
    renderRoadmap();
    renderTrophies();
  });
  document.getElementById('trophy-list').addEventListener('change', (event) => {
    const box = event.target.closest('input[data-check]');
    if (!box) return;
    if (box.checked) state.done.add(box.dataset.check);
    else state.done.delete(box.dataset.check);
    saveProgress();
    renderAll();
  });
  document.getElementById('trophy-list').addEventListener('click', (event) => {
    const button = event.target.closest('button[data-toggle]');
    if (!button) return;
    const id = button.dataset.toggle;
    if (state.expanded.has(id)) state.expanded.delete(id);
    else state.expanded.add(id);
    renderTrophies();
  });
}

function renderAll() {
  renderHeaderCounts();
  updateTracker();
  renderRoadmap();
  renderTrophies();
}

// Default view: the first trophy starts expanded so its cited steps and
// source chips are visible immediately, as the desk promises.
if (TROPHIES.length) state.expanded.add(TROPHIES[0].id);
applyHashState();
bindControls();
renderAll();
renderSourceAudit();
