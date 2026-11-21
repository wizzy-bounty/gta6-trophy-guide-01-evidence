# Platinum Desk — Evidence Edition

[![gta6-trophy-guide-01 on make.fun](https://make.fun/badge/gta6-trophy-guide-01.svg)](https://make.fun/c/gta6-trophy-guide-01)
[![rank](https://make.fun/badge/gta6-trophy-guide-01/wizzy-bounty/gta6-trophy-guide-01-evidence/rank.svg)](https://make.fun/c/gta6-trophy-guide-01)
[![reward](https://make.fun/badge/gta6-trophy-guide-01/wizzy-bounty/gta6-trophy-guide-01-evidence/reward.svg)](https://make.fun/c/gta6-trophy-guide-01)

A GTA VI trophy guide & tracker whose headline is its **evidence layer**: every
step of the guide carries its own source citations, and the header publishes
counts computed from the guide data itself — nothing is typed in or rounded up.

## The numbers (computed from `app/data/guide.js`)

- **55 trophies** — 1 Platinum, 2 Gold, 6 Silver, 46 Bronze — with **7 missable**
  trophies flagged, each with its own warning line.
- **276 cited steps** across the 55 trophies: compound requirements split into
  atomic setup / execution / cleanup / verification steps.
- **591 citations** in total — 463 attached to individual steps and 128 in the
  per-trophy source lists.
- **187 steps are backed by 2+ sources** and carry a visible `2+ BACKED` marker;
  the remaining 89 steps rest on a single cited source, and the app shows exactly
  that one source — no more.
- **13 dated sources**: the official PlayStation trophy list, PowerPyx,
  PSNProfiles, TrueTrophies, Push Square, IGN, GameSpot, Eurogamer, VG247,
  Rockstar Games Newswire, PlayStation Blog, the GTA VI official site and the
  community GTA Wiki. Only the PowerPyx guide is linked; every other source is
  named and dated, never given an invented URL.

## How backing works

Steps are **anchored on the official list, cross-checked against mirrors**: when
the official PlayStation trophy list (S1) is among a step's citations, it states
what the trophy requires; the independent mirrors corroborate how to do it. This
desk never claims official backing for a step that only mirrors support — the
chips on each step are the whole claim, and the source audit strip at the bottom
of the page lists every source with its date.

## The desk

One screen, no build step, works fully offline:

- **Evidence header** — trophies, cited steps, citations, 2+-backed steps and
  source count, all computed live from the data.
- **Tracker** — per-trophy check-off with a live completion percentage and
  progress bar, counts by grade (including a missable counter), and a
  *platinum pace* line: trophies done / remaining plus estimated hours left,
  weighted by phase from the roadmap. Progress persists in `localStorage` and
  the app still works when storage is unavailable. Views are shareable:
  `#check=<ids>` pre-checks trophies, `#open=<id>` opens one trophy,
  `#missable` filters to missables.
- **8-phase roadmap** — from Arrival in Leonida to Cleanup & Platinum, hour
  estimates summing to ≈55 h; clicking a phase filters the list.
- **Filters** — by grade, missable-only, hide-done, expand/collapse all.

## Run it

Open `app/index.html` in a browser, or serve it locally (Node 22):

```
node serve.ts          # http://localhost:8080
```

Hand-in build (copies `app/` and `screenshots/` into the output directory and
writes `dossier.json` with the vendored make.fun library):

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Screenshots

- `screenshots/1-desk.jpg` — the default one-screen desk: evidence counts,
  tracker bar, roadmap strip, first trophies with citation chips.
- `screenshots/2-tracker.jpg` — the tracker in use: 14 trophies checked (25%),
  grade counts and pace line updated.
- `screenshots/3-trophy.jpg` — one trophy (Treasure of the Keys) opened in full:
  every step with its source chips and its per-trophy source list.
