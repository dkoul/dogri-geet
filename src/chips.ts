/**
 * Mood filter chips — Folk and Matador only (Folk is the default).
 */

import type { Track, TrackMood } from './data/tracks';
import type { QueueController } from './player/queue';

const MOOD_LABELS: Record<TrackMood, string> = {
  folk: 'Folk',
  matador: 'Matador',
};

const CHIP_ORDER: TrackMood[] = ['folk', 'matador'];

export function renderChips(
  chipsEl: HTMLElement,
  tracks: Track[],
  queue: QueueController
): void {
  const moodsWithTracks = CHIP_ORDER.filter((m) => tracks.some((t) => t.mood === m));

  for (const mood of moodsWithTracks) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = MOOD_LABELS[mood];
    btn.setAttribute('aria-pressed', String(mood === queue.currentFilter()));
    btn.addEventListener('click', () => {
      if (mood === queue.currentFilter()) return;
      const ok = queue.setFilter(mood);
      if (!ok) return;
      chipsEl
        .querySelectorAll('button')
        .forEach((b) => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
    });
    chipsEl.appendChild(btn);
  }
}
