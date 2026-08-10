/**
 * Curated Dogri track list — the single source of truth for the jukebox.
 * Static, hand-verified YouTube IDs. No live search, no API keys.
 */

export type TrackMood = 'folk' | 'matador';

export interface Track {
  /** Stable internal ID, kebab-case. */
  id: string;
  title: string;
  artist: string;
  /** 11-char YouTube video ID. */
  youtubeId: string;
  /** Path under public/assets/covers/, or a full URL. */
  cover: string;
  /** Mood / era filter chip. */
  mood: TrackMood;
  /** Set true only after manually confirming the video embeds + plays. */
  verified: boolean;
}

/** Cover art from YouTube's thumbnail CDN. */
const ytCover = (id: string): string => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

/**
 * Starter set — Folk (Duggar tradition) + Matador (Jammu city ride energy).
 * oEmbed-checked 2026-08-10. Unplayable IDs auto-skip at runtime.
 */
export const tracks: Track[] = [
  // --- Folk ----------------------------------------------------------------
  {
    id: 'surma-nima-nima',
    title: 'Surma Nima Nima',
    artist: 'Folk Songs of Jammu and Kashmir',
    youtubeId: 'gJJiKIaOlEE',
    cover: ytCover('gJJiKIaOlEE'),
    mood: 'folk',
    verified: true,
  },
  {
    id: 'maruve-di-chaava',
    title: 'Maruve Di Chaava',
    artist: 'Krishna Kumari',
    youtubeId: 'eiQCy6jBcJk',
    cover: ytCover('eiQCy6jBcJk'),
    mood: 'folk',
    verified: true,
  },
  {
    id: 'tumba-ta-bajda',
    title: 'Tumba Ta Bajda',
    artist: 'Kailash Kher',
    youtubeId: 'RVyT06fd9G8',
    cover: ytCover('RVyT06fd9G8'),
    mood: 'folk',
    verified: true,
  },
  {
    id: 'des-sada-dogra',
    title: 'Des Sada Dogra Pes Sada Dogra',
    artist: 'Romalo Ram',
    youtubeId: 'Zk7i48F_AaU',
    cover: ytCover('Zk7i48F_AaU'),
    mood: 'folk',
    verified: true,
  },
  {
    id: 'chalo-lei-chalan',
    title: 'Chalo Lei Chalan Apne Garaan',
    artist: 'Romalo Ram And Party',
    youtubeId: 'Nqj2TeEESwo',
    cover: ytCover('Nqj2TeEESwo'),
    mood: 'folk',
    verified: true,
  },
  {
    id: 'dogri-anthem-isha',
    title: 'The Dogri Anthem',
    artist: 'Isha Andotra',
    youtubeId: 'Sz0TtFRBkPs',
    cover: ytCover('Sz0TtFRBkPs'),
    mood: 'folk',
    verified: true,
  },
  {
    id: 'dogri-anthem-rinku',
    title: 'The Dogri Anthem',
    artist: 'Rinku Mansarwala · Varsha Jamwal · Isha Andotra',
    youtubeId: 'NoghWY0RT5w',
    cover: ytCover('NoghWY0RT5w'),
    mood: 'folk',
    verified: true,
  },
  {
    id: 'do-mircha',
    title: 'Do Mircha',
    artist: 'Ranbhir Singh',
    youtubeId: 'HDZpua_qVDw',
    cover: ytCover('HDZpua_qVDw'),
    mood: 'folk',
    verified: true,
  },
  {
    id: 'kotha-chuk-mundeya',
    title: 'Kotha Chuk Mundeya (Folk Mashup)',
    artist: 'Sanjay Samar',
    youtubeId: 'OnncA0jV4P4',
    cover: ytCover('OnncA0jV4P4'),
    mood: 'folk',
    verified: true,
  },
  {
    id: 'jaane-mariye',
    title: 'Jaane Mariye',
    artist: 'Unexplored Duggar',
    youtubeId: 'bvsDRkwlkgY',
    cover: ytCover('bvsDRkwlkgY'),
    mood: 'folk',
    verified: true,
  },
  {
    id: 'banga-leyai-de',
    title: 'Banga Leyai De',
    artist: 'Varsha Jamwal',
    youtubeId: '6ivkZUp4dX8',
    cover: ytCover('6ivkZUp4dX8'),
    mood: 'folk',
    verified: true,
  },

  // --- Matador (Jammu city ride / speaker culture) -------------------------
  {
    id: 'jammu-di-matador',
    title: 'Jammu Di Matador',
    artist: 'HH Studios',
    youtubeId: 'l5GXKSoJSTw',
    cover: ytCover('l5GXKSoJSTw'),
    mood: 'matador',
    verified: true,
  },
  {
    id: 'speaker-bajda',
    title: 'Speaker Bajda',
    artist: 'Varsha Jamwal · Kuldeep Hans',
    youtubeId: 'TwbbAFmHsm0',
    cover: ytCover('TwbbAFmHsm0'),
    mood: 'matador',
    verified: true,
  },
  {
    id: 'speaker-di-bass',
    title: 'Speaker Di Bass',
    artist: 'Vanshika Jaral',
    youtubeId: 'LdmwT6fUJCM',
    cover: ytCover('LdmwT6fUJCM'),
    mood: 'matador',
    verified: true,
  },
  {
    id: 'tere-kanne-nai-bolna',
    title: 'Tere Kanne Nai Bolna',
    artist: 'Varsha Jamwal · Satish Bhagat',
    youtubeId: 'w21_8uC2PJo',
    cover: ytCover('w21_8uC2PJo'),
    mood: 'matador',
    verified: true,
  },
  {
    id: 'chali-jana',
    title: 'Chali Jana',
    artist: 'Rohit Kumar',
    youtubeId: 'G4dsPpH6mDg',
    cover: ytCover('G4dsPpH6mDg'),
    mood: 'matador',
    verified: true,
  },
];
