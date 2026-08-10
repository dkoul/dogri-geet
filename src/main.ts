import './styles/base.css';
import './styles/scene.css';
import './styles/player.css';

import { tracks } from './data/tracks';
import { PlayerUI } from './player/ui';
import { QueueController } from './player/queue';
import { renderScene } from './scene';
import { renderChips } from './chips';
import { mountCounter, NoopCounterProvider } from './counter';

const app = document.querySelector<HTMLDivElement>('#app')!;

const scene = renderScene(app, 'folk');

// Queue is created immediately; the YouTube API loads lazily on first gesture.
let queue: QueueController;

const ui = new PlayerUI(app, {
  onPlayPause: () => void queue.togglePlay(),
  onPrev: () => void queue.prev(),
  onNext: () => void queue.next(),
  onSeek: (f) => void queue.seekToFraction(f),
});

// Default to Folk — the only two chips are Folk and Matador.
queue = new QueueController(tracks, ui);
queue.setFilter('folk');

renderChips(scene.chipsEl, tracks, queue, (mood) => scene.setHeroMood(mood));

void mountCounter(new NoopCounterProvider(), scene.listenersEl, scene.listenersCountEl);

declare global {
  interface Window {
    __dogri?: { queue: QueueController; tracks: typeof tracks };
  }
}
window.__dogri = { queue, tracks };
