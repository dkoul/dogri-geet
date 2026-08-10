/**
 * Scene shell: wordmark, tagline, listener counter slot,
 * full-bleed hero that swaps with Folk / Matador.
 */

import type { TrackMood } from './data/tracks';
import heroFolkUrl from './assets/hero-folk.jpg';
import heroMatadorUrl from './assets/hero.jpg';

export const TAGLINE = 'Jammu songs from the Duggar hills — folk, matador, and memory.';

const HERO_BY_MOOD: Record<
  TrackMood,
  { src: string; alt: string; position: string }
> = {
  folk: {
    src: heroFolkUrl,
    alt: 'Watercolor aerial of Jammu along the Tawi river, bridges, and snow mountains',
    position: '50% 35%',
  },
  matador: {
    src: heroMatadorUrl,
    alt: 'Sunlit ridges of the Duggar hills under a wide Jammu sky',
    position: '50% 45%',
  },
};

export interface SceneRefs {
  root: HTMLElement;
  listenersEl: HTMLElement;
  listenersCountEl: HTMLElement;
  chipsEl: HTMLElement;
  setHeroMood: (mood: TrackMood) => void;
}

export function renderScene(app: HTMLElement, initialMood: TrackMood = 'folk'): SceneRefs {
  const initial = HERO_BY_MOOD[initialMood];
  const root = document.createElement('div');
  root.className = 'scene';
  root.dataset.heroMood = initialMood;
  root.innerHTML = `
    <img
      class="scene__image"
      data-el="hero"
      src="${initial.src}"
      alt="${initial.alt}"
      style="object-position: ${initial.position}"
    />
    <div class="scene__mist" aria-hidden="true"></div>
    <div class="scene__grain" aria-hidden="true"></div>
    <div class="scene__vignette" aria-hidden="true"></div>
    <header class="scene__header">
      <span class="scene__listeners" data-el="listeners" hidden>
        <span class="scene__listeners-dot"></span>
        <span data-el="listeners-count">0</span>&nbsp;listening
      </span>
      <p class="scene__credit">
        Inspired by
        <a href="https://x.com/s4tr2" target="_blank" rel="noopener noreferrer">Shubham Bhatt</a>
        and made by
        <a href="https://www.instagram.com/dkoul/" target="_blank" rel="noopener noreferrer">Deepak Koul</a>
        —
        sister station to
        <a href="https://github.com/dkoul/koshur-radio" target="_blank" rel="noopener noreferrer">Koshur Radio</a>
      </p>
    </header>
    <div class="scene__center">
      <div class="scene__brand">
        <h1 class="scene__wordmark">डोगरी गीत</h1>
        <p class="scene__tagline">${TAGLINE}</p>
      </div>
    </div>
    <div class="chips" data-el="chips" role="group" aria-label="Filter songs by mood"></div>
  `;
  app.appendChild(root);

  const q = (sel: string): HTMLElement =>
    root.querySelector<HTMLElement>(`[data-el="${sel}"]`)!;

  const heroEl = q('hero') as HTMLImageElement;

  const setHeroMood = (mood: TrackMood): void => {
    if (root.dataset.heroMood === mood) return;
    const hero = HERO_BY_MOOD[mood];
    root.dataset.heroMood = mood;
    heroEl.classList.add('scene__image--swap');
    window.setTimeout(() => {
      heroEl.src = hero.src;
      heroEl.alt = hero.alt;
      heroEl.style.objectPosition = hero.position;
      heroEl.classList.remove('scene__image--swap');
    }, 180);
  };

  return {
    root,
    listenersEl: q('listeners'),
    listenersCountEl: q('listeners-count'),
    chipsEl: q('chips'),
    setHeroMood,
  };
}
