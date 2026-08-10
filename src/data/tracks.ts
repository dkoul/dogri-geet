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
 * Folk (Duggar tradition) + Matador from "Jammu matador vol 1".
 * Matador playlist: https://music.youtube.com/playlist?list=PLaFMODhciZxbIke0bpzFLaK-BQXyFL1Ua
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

  // --- Matador — Jammu matador vol 1 ---------------------------------------
  // https://music.youtube.com/playlist?list=PLaFMODhciZxbIke0bpzFLaK-BQXyFL1Ua
  {
    id: 'nazron-ton-gir-gayee',
    title: 'Nazron Ton Gir Gayee',
    artist: 'Jaidev Kumar · Charanjit Ahuja',
    youtubeId: 'U3qfcGk4TZs',
    cover: ytCover('U3qfcGk4TZs'),
    mood: 'matador',
    verified: true,
  },
  {
    id: 'khat-tukde-tukde',
    title: 'Khat Tukde Tukde',
    artist: 'Sardool Sikander',
    youtubeId: 'MFfzEnE6reY',
    cover: ytCover('MFfzEnE6reY'),
    mood: 'matador',
    verified: true,
  },
  {
    id: 'dil-ditta-nahin-si',
    title: 'Dil Ditta Nahin Si',
    artist: 'Nachhattar Gill',
    youtubeId: 'L29D9K0OFEI',
    cover: ytCover('L29D9K0OFEI'),
    mood: 'matador',
    verified: true,
  },
  {
    id: 'vaadeyan-ton-mukri',
    title: 'Vaadeyan Ton Mukri',
    artist: 'Nachhattar Gill',
    youtubeId: '8CXyDLSQ8d0',
    cover: ytCover('8CXyDLSQ8d0'),
    mood: 'matador',
    verified: true,
  },
  {
    id: 'saadi-jaan-te',
    title: 'Saadi Jaan Te',
    artist: 'Nachhattar Gill',
    youtubeId: '3YPFXs3SNGo',
    cover: ytCover('3YPFXs3SNGo'),
    mood: 'matador',
    verified: true,
  },
  {
    id: 'tutde-ne-tare',
    title: 'Tutde Ne Tare',
    artist: 'Nachhattar Gill',
    youtubeId: '9IWdAG5Ye3g',
    cover: ytCover('9IWdAG5Ye3g'),
    mood: 'matador',
    verified: true,
  },
  {
    id: 'kachi-pencil-naal',
    title: 'Kachi Pencil Naal',
    artist: 'Akram Rahi · Naseebo Lal',
    youtubeId: 'E1S8UnNCu2M',
    cover: ytCover('E1S8UnNCu2M'),
    mood: 'matador',
    verified: true,
  },
  {
    id: 'tu-badli',
    title: 'Tu Badli',
    artist: 'Master Saleem',
    youtubeId: 'qAdNcu7V0OQ',
    cover: ytCover('qAdNcu7V0OQ'),
    mood: 'matador',
    verified: true,
  },
  {
    id: 'rukhan-wangoo-khade-rahe',
    title: 'Rukhan Wangoo Khade Rahe',
    artist: 'Sabar Koti',
    youtubeId: 'q0P3mKHG2ak',
    cover: ytCover('q0P3mKHG2ak'),
    mood: 'matador',
    verified: true,
  },
  {
    id: 'kalli-baih-ke',
    title: 'Kalli Baih Ke',
    artist: 'Manmohan Waris',
    youtubeId: 'rOZt1HWk7oo',
    cover: ytCover('rOZt1HWk7oo'),
    mood: 'matador',
    verified: true,
  },
  {
    id: 'keemat',
    title: 'Keemat (Tenu Apni Keemat Pata Nahi)',
    artist: 'Sabar Koti',
    youtubeId: 'GB83V8BJ7wE',
    cover: ytCover('GB83V8BJ7wE'),
    mood: 'matador',
    verified: true,
  },
  {
    id: 'assi-kehrha-tere-bina',
    title: 'Assi Kehrha Tere Bina',
    artist: 'Kanth Kaler',
    youtubeId: 'nHvKmxO1yPE',
    cover: ytCover('nHvKmxO1yPE'),
    mood: 'matador',
    verified: true,
  },
  {
    id: 'khat-more-ke-kehni-aen',
    title: 'Khat More Ke Kehni Aen',
    artist: 'Harbhajan Shera',
    youtubeId: 'kkRQ1hNfJJk',
    cover: ytCover('kkRQ1hNfJJk'),
    mood: 'matador',
    verified: true,
  },
  {
    id: 'tara-ambran-te',
    title: 'Tara Ambran Te',
    artist: 'Sabar Koti',
    youtubeId: '13g51uxjGqs',
    cover: ytCover('13g51uxjGqs'),
    mood: 'matador',
    verified: true,
  },
  {
    id: 'chite-suit-te-daag',
    title: 'Chite Suit Te Daag Pe Gaye',
    artist: 'Aadi Music World',
    youtubeId: 'XoznVLresrs',
    cover: ytCover('XoznVLresrs'),
    mood: 'matador',
    verified: true,
  },
  {
    id: 'sili-sili-hawa',
    title: 'Sili Sili Hawa',
    artist: 'Hans Raj Hans',
    youtubeId: 'Ht5l1ojaaLU',
    cover: ytCover('Ht5l1ojaaLU'),
    mood: 'matador',
    verified: true,
  },
  {
    id: 'tum-to-thehre-pardesi',
    title: 'Tum To Thehre Pardesi',
    artist: 'Altaf Raja',
    youtubeId: 'uDkPqtj80Rs',
    cover: ytCover('uDkPqtj80Rs'),
    mood: 'matador',
    verified: true,
  },
  {
    id: 'chham-chham',
    title: 'Chham Chham',
    artist: 'Harbhajan Mann · Jaidev Kumar',
    youtubeId: '3LAPVRtWbJg',
    cover: ytCover('3LAPVRtWbJg'),
    mood: 'matador',
    verified: true,
  },
];
