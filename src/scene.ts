/**
 * Scene shell: wordmark, tagline, playlist links, listener counter slot,
 * full-bleed Duggar hills hero.
 */

import heroUrl from './assets/hero.jpg';

export const TAGLINE = 'Jammu songs from the Duggar hills — folk, matador, and memory.';

export interface SceneRefs {
  root: HTMLElement;
  listenersEl: HTMLElement;
  listenersCountEl: HTMLElement;
  chipsEl: HTMLElement;
}

export function renderScene(app: HTMLElement): SceneRefs {
  const root = document.createElement('div');
  root.className = 'scene';
  root.innerHTML = `
    <img class="scene__image" src="${heroUrl}" alt="Sunlit ridges of the Duggar hills under a wide Jammu sky" />
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

  return {
    root,
    listenersEl: q('listeners'),
    listenersCountEl: q('listeners-count'),
    chipsEl: q('chips'),
  };
}
