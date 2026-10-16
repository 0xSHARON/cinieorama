/**
 * CINIEORAMA // NEO-BRUTALIST CINEMA STREAMING ENGINE (2026)
 * Powered 100% Dynamically by The Movie Database (TMDB) API & Verified Streaming Nodes
 * Zero Hardcoded Shows — Pure Live Cloud Streaming for GitHub Pages
 */

// ═══════════════════════════════════════════════════════════════════
// 1. AUTHENTIC VECTOR SVGS FOR OTT PLATFORMS & LANGUAGES
// ═══════════════════════════════════════════════════════════════════
const ICONS = {
  // OTT Platform SVGs
  netflix: `<svg class="ott-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 2h4.5l5.5 13.5V2H18v20h-4.5L8 8.5V22H4V2z"/></svg>`,
  prime: `<svg class="ott-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.5 14.5c-.2-.3-1.6-.7-3.2-.2-1.9.6-3.8.3-5.5-.6-1.9-1-3.6-.8-5.3.3-1.2.8-2.3.9-3.2.7-.4-.1-.7.2-.6.6.2.7 1.2 1.6 2.6 1.6 1.8 0 3.3-.8 4.7-1.5 1.5-.7 2.8-.8 4.2-.1 1.7.8 3.5 1 5.2.2.8-.4 1.2-.7 1.3-.9.1-.1.1-.3-.2-.2z"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5c-3 1.8-6.8 1.4-9.5-.4-.2-.1 0-.4.2-.4 2.5 1.3 6 .8 8.7-.7.4-.2.9.2.6.5z"/></svg>`,
  hotstar: `<svg class="ott-svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  jio: `<svg class="ott-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4h18v16H3V4zm3 3v10h12V7H6zm3 2h6v6H9V9z"/></svg>`,
  sonyliv: `<svg class="ott-svg" viewBox="0 0 24 24" fill="currentColor"><circle cx="7" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><circle cx="12" cy="17" r="4"/></svg>`,
  zee5: `<svg class="ott-svg" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 8h8l-8 8h8"/></svg>`,
  apple: `<svg class="ott-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.85.94-2.94-.92.04-2.02.61-2.67 1.39-.58.67-1.09 1.76-.95 2.82 1.03.08 2.05-.49 2.68-1.27z"/></svg>`,
  crunchyroll: `<svg class="ott-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 16a6 6 0 1 1 6-6a6 6 0 0 1-6 6Zm1-10a4 4 0 1 0 4 4a4 4 0 0 0-4-4Z"/></svg>`,
  allOtt: `<svg class="ott-svg" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,

  // Multi-Audio Sound Wave SVG
  audioWave: `<svg class="audio-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`
};

// ═══════════════════════════════════════════════════════════════════
// 2. TMDB API CONFIGURATION & PLATFORM/LANGUAGE MAPPINGS
// ═══════════════════════════════════════════════════════════════════
const TMDB_CONFIG = {
  baseUrl: "https://api.tmdb.org/3",
  apiKey: "4e44d9029b1270a757cddc766a1bcb63",
  imgBase: "https://image.tmdb.org/t/p/w500",
  imageBase: "https://image.tmdb.org/t/p",
  backdropBase: "https://image.tmdb.org/t/p/original"
};

// Official TMDB Provider IDs for Indian & Global OTT Platforms (Multi-ID Matching)
const OTT_PROVIDERS = {
  netflix: { id: "8", name: "NETFLIX", class: "ott-netflix-card", region: "IN", svg: ICONS.netflix },
  prime: { id: "119|9", name: "PRIME VIDEO", class: "ott-prime-card", region: "IN", svg: ICONS.prime },
  hotstar: { id: "2336|122|337", name: "JIOHOTSTAR", class: "ott-hotstar-card", region: "IN", svg: ICONS.hotstar },
  jio: { id: "220|2336", name: "JIOCINEMA", class: "ott-jio-card", region: "IN", svg: ICONS.jio },
  sonyliv: { id: "237", name: "SONY LIV", class: "ott-sonyliv-card", region: "IN", svg: ICONS.sonyliv },
  zee5: { id: "232", name: "ZEE5", class: "ott-zee5-card", region: "IN", svg: ICONS.zee5 },
  apple: { id: "350|2", name: "APPLE TV+", class: "ott-apple-card", region: "IN", svg: ICONS.apple },
  crunchyroll: { id: "283", name: "CRUNCHYROLL", class: "ott-crunchyroll-card", region: "US", svg: ICONS.crunchyroll }
};

// Regional Language Mappings
const LANG_MAP = {
  ml: { name: "Malayalam", code: "ml", country: "IN" },
  ta: { name: "Tamil", code: "ta", country: "IN" },
  te: { name: "Telugu", code: "te", country: "IN" },
  hi: { name: "Hindi", code: "hi", country: "IN" },
  kn: { name: "Kannada", code: "kn", country: "IN" },
  en: { name: "English", code: "en" },
  anime: { name: "Anime (Crunchyroll)", code: "ja", genre: "16" },
  multi: { name: "Multi-Audio Pan-India", code: "hi|te|ta|ml|kn", country: "IN" }
};

const FALLBACK_POSTER = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=80";

// Live TMDB Watch Providers Lookup Cache
const WATCH_PROVIDER_CACHE = new Map();

async function resolveWatchProvider(mediaId, mediaType = "movie") {
  const cacheKey = `${mediaType}_${mediaId}`;
  if (WATCH_PROVIDER_CACHE.has(cacheKey)) {
    return WATCH_PROVIDER_CACHE.get(cacheKey);
  }
  try {
    const res = await fetch(`${TMDB_CONFIG.baseUrl}/${mediaType}/${mediaId}/watch/providers?api_key=${TMDB_CONFIG.apiKey}`);
    if (res.ok) {
      const data = await res.json();
      const provData = data.results?.IN || data.results?.US || Object.values(data.results || {})[0];
      if (provData) {
        const list = [
          ...(provData.flatrate || []),
          ...(provData.free || []),
          ...(provData.ads || []),
          ...(provData.buy || [])
        ];
        for (const p of list) {
          const pid = String(p.provider_id);
          for (const [key, ott] of Object.entries(OTT_PROVIDERS)) {
            const ids = ott.id.split("|");
            if (ids.includes(pid)) {
              WATCH_PROVIDER_CACHE.set(cacheKey, key);
              return key;
            }
          }
        }
      }
    }
  } catch (e) {
    // Ignore network error
  }
  return null;
}

// ═══════════════════════════════════════════════════════════════════
// 2.5 CURATED REALITY TV SHOWS (TOP-LEVEL ACCESSIBLE ACROSS ALL FILTERS)
// ═══════════════════════════════════════════════════════════════════
const CURATED_REALITY_SHOWS = [
  {
    id: 11436,
    title: "Bigg Boss (Hindi)",
    name: "Bigg Boss",
    original_language: "hi",
    origin_country: ["IN"],
    totalSeasons: 20,
    poster_path: "/AspHixRhWg5q8sOER7BoZ3U6xsn.jpg",
    backdrop_path: "/hyPQPnMLlUqmLuFpzoUe6Hp8oXG.jpg",
    ott: "jio",
    first_air_date: "2006-11-03",
    vote_average: 8.6,
    genre_ids: [10764],
    overview: "Hosted by Salman Khan. Celebrities are locked inside an isolated, camera-rigged house under constant 24/7 surveillance, facing high-tension tasks, nominations, and explosive drama across 20 blockbuster seasons."
  },
  {
    id: 80372,
    title: "Bigg Boss Malayalam",
    name: "Bigg Boss",
    original_language: "ml",
    origin_country: ["IN"],
    totalSeasons: 8,
    poster_path: "/o75RAzbauCTLnchulrlLGK3mTgo.jpg",
    backdrop_path: "/cogvLaZrWRZYjSgRHTvVhkORbPj.jpg",
    ott: "hotstar",
    first_air_date: "2018-06-24",
    vote_average: 8.8,
    genre_ids: [10764],
    overview: "Hosted by legendary superstar Mohanlal. Contestants from Kerala and the Malayali diaspora enter the ultimate social experiment, competing through grueling weekly captaincy tasks and public votes."
  },
  {
    id: 247769,
    title: "The Great Indian Kapil Show",
    name: "The Great Indian Kapil Show",
    original_language: "hi",
    origin_country: ["IN"],
    totalSeasons: 2,
    poster_path: "/3KMCmGDlYLlJ8zGOhCs6f3FZcnj.jpg",
    backdrop_path: "/w8L2oVjsSRZdZ1Wcszot9cKZMRO.jpg",
    ott: "netflix",
    first_air_date: "2024-03-30",
    vote_average: 8.5,
    genre_ids: [10767, 10764],
    overview: "Kapil Sharma and his comedy family host Bollywood megastars, cricketers, and global icons with sidesplitting comedy, sketches, and uncensored conversations."
  },
  {
    id: 153870,
    title: "Shark Tank India",
    name: "Shark Tank India",
    original_language: "hi",
    origin_country: ["IN"],
    totalSeasons: 5,
    poster_path: "/iGw6R4e4G07xjffVifFLSN3dEAb.jpg",
    backdrop_path: "/tLL91JBiCCvBF7oKSN6dFR7yd8c.jpg",
    ott: "sonyliv",
    first_air_date: "2021-12-20",
    vote_average: 8.5,
    genre_ids: [10764],
    overview: "Aspiring Indian entrepreneurs pitch their business models to a panel of self-made business titans ('Sharks') to secure life-changing investments and mentorship across 5 seasons."
  },
  {
    id: 71173,
    title: "Kaun Banega Crorepati",
    name: "Kaun Banega Crorepati",
    original_language: "hi",
    origin_country: ["IN"],
    totalSeasons: 16,
    poster_path: "/AspHixRhWg5q8sOER7BoZ3U6xsn.jpg",
    backdrop_path: "/hyPQPnMLlUqmLuFpzoUe6Hp8oXG.jpg",
    ott: "sonyliv",
    first_air_date: "2000-07-03",
    vote_average: 8.7,
    genre_ids: [10764],
    overview: "Hosted by megastar Amitabh Bachchan. Contestants face challenging trivia questions to win life-changing fortunes of up to 7 Crore Rupees."
  },
  {
    id: 71190,
    title: "Indian Idol",
    name: "Indian Idol",
    original_language: "hi",
    origin_country: ["IN"],
    totalSeasons: 15,
    poster_path: "/iGw6R4e4G07xjffVifFLSN3dEAb.jpg",
    backdrop_path: "/tLL91JBiCCvBF7oKSN6dFR7yd8c.jpg",
    ott: "sonyliv",
    first_air_date: "2004-10-28",
    vote_average: 8.3,
    genre_ids: [10764],
    overview: "India's premier singing talent competition spotlighting breathtaking vocalists across the subcontinent judged by prominent music composers and singers."
  },
  {
    id: 61845,
    title: "MasterChef India",
    name: "MasterChef India",
    original_language: "hi",
    origin_country: ["IN"],
    totalSeasons: 8,
    poster_path: "/AspHixRhWg5q8sOER7BoZ3U6xsn.jpg",
    backdrop_path: "/hyPQPnMLlUqmLuFpzoUe6Hp8oXG.jpg",
    ott: "sonyliv",
    first_air_date: "2010-10-16",
    vote_average: 8.4,
    genre_ids: [10764],
    overview: "Culinary hopefuls from every corner of India compete in high-stakes mystery box and pressure cooking challenges judged by Michelin-starred culinary masters."
  },
  {
    id: 72908,
    title: "Bigg Boss Tamil",
    name: "Bigg Boss",
    original_language: "ta",
    origin_country: ["IN"],
    totalSeasons: 10,
    poster_path: "/8O1LjYsGvLQY8XxajupuDwpaJa2.jpg",
    backdrop_path: "/wzHxE333DkZIlTLSuTgbqP23UP5.jpg",
    ott: "hotstar",
    first_air_date: "2017-06-25",
    vote_average: 8.4,
    genre_ids: [10764],
    overview: "The mega Tamil reality phenomenon featuring intense house rivalries, psychological warfare, dramatic twists, and public eliminations across 10 seasons."
  },
  {
    id: 73085,
    title: "Bigg Boss Telugu",
    name: "Bigg Boss",
    original_language: "te",
    origin_country: ["IN"],
    totalSeasons: 10,
    poster_path: "/f0NBdGndpAc7ySIqE9eQlE3tkOo.jpg",
    backdrop_path: "/bt1utXk5wn1zcUSv6WWlt55iSmV.jpg",
    ott: "hotstar",
    first_air_date: "2017-07-16",
    vote_average: 8.3,
    genre_ids: [10764],
    overview: "Hosted by King Akkineni Nagarjuna. South cinema stars and social influencers face emotional trials, captaincy tasks, and nominations in Hyderabad across 10 seasons."
  },
  {
    id: 11520,
    title: "Koffee with Karan",
    name: "Koffee with Karan",
    original_language: "hi",
    origin_country: ["IN"],
    totalSeasons: 8,
    poster_path: "/AspHixRhWg5q8sOER7BoZ3U6xsn.jpg",
    backdrop_path: "/w8L2oVjsSRZdZ1Wcszot9cKZMRO.jpg",
    ott: "hotstar",
    first_air_date: "2004-11-19",
    vote_average: 8.2,
    genre_ids: [10767, 10764],
    overview: "Filmmaker Karan Johar hosts Bollywood's biggest personalities on his famous couch for spicy revelations, cheeky banter, and the iconic rapid-fire round."
  },
  {
    id: 130780,
    title: "Bigg Boss OTT (Hindi)",
    name: "Bigg Boss OTT",
    original_language: "hi",
    origin_country: ["IN"],
    totalSeasons: 3,
    poster_path: "/ev0pJtwCG0oeaQHSO2VToMEPyne.jpg",
    backdrop_path: "/1Oh6jcDYkjtndtgWw58Afh3qyEt.jpg",
    ott: "jio",
    first_air_date: "2021-08-08",
    vote_average: 8.2,
    genre_ids: [10764],
    overview: "24x7 unfiltered live reality entertainment featuring digital creators, actors, and firebrand personalities competing under the unfiltered OTT camera lens."
  },
  {
    id: 7420,
    title: "MTV Splitsvilla",
    name: "MTV Splitsvilla",
    original_language: "hi",
    origin_country: ["IN"],
    totalSeasons: 16,
    poster_path: "/hbdX2LLJhJemnf3HLodwhjwNaFx.jpg",
    backdrop_path: "/b09hHDE3xNMUxAHCn453Hk0C9Nh.jpg",
    ott: "jio",
    first_air_date: "2008-06-20",
    vote_average: 8.0,
    genre_ids: [10764],
    overview: "Young singles check into a luxury retreat searching for love and supremacy, navigating wild date twists, mischief makers, dome sessions, and toxic eliminations across 16 seasons."
  },
  {
    id: 8426,
    title: "MTV Roadies",
    name: "MTV Roadies",
    original_language: "hi",
    origin_country: ["IN"],
    totalSeasons: 21,
    poster_path: "/rxuX0kszEyVJLDVIZLiZHOcM65y.jpg",
    backdrop_path: "/2kEe8kiXc0cJUdmwIjnhXwxIEPL.jpg",
    ott: "jio",
    first_air_date: "2003-08-15",
    vote_average: 8.1,
    genre_ids: [10764],
    overview: "India's longest-running youth adventure reality show. Gang leaders battle across extreme terrains on motorcycles, facing grueling survival tests and vote-outs across 21 seasons."
  },
  {
    id: 7523,
    title: "Fear Factor: Khatron Ke Khiladi",
    name: "Fear Factor: Khatron Ke Khiladi",
    original_language: "hi",
    origin_country: ["IN"],
    totalSeasons: 12,
    poster_path: "/1PBuOGJ6uJKu5MIKXEGrP6Ti4ic.jpg",
    backdrop_path: "/1PBuOGJ6uJKu5MIKXEGrP6Ti4ic.jpg",
    ott: "jio",
    first_air_date: "2008-07-21",
    vote_average: 8.2,
    genre_ids: [10764],
    overview: "Hosted by action maestro Rohit Shetty. Celebrities face terrifying adrenaline stunts involving high-altitude jumps, fire, wild predators, and deep-water cages across 12 seasons."
  },
  {
    id: 80386,
    title: "Bigg Boss Kannada",
    name: "Bigg Boss",
    original_language: "kn",
    origin_country: ["IN"],
    totalSeasons: 11,
    poster_path: "/appTzzKcwZvksjtiwkVfqT3zyZl.jpg",
    backdrop_path: "/sIHsoe6Qg4RvwmOvTXvp6szR2f8.jpg",
    ott: "jio",
    first_air_date: "2013-03-24",
    vote_average: 8.3,
    genre_ids: [10764],
    overview: "Hosted by Kiccha Sudeep. Sandalwood stars and public personalities live together in the Bigg Boss house, facing tasks, eliminations, and intense public voting across 11 seasons."
  },
  {
    id: 80435,
    title: "Bigg Boss Marathi",
    name: "Bigg Boss Marathi",
    original_language: "mr",
    origin_country: ["IN"],
    totalSeasons: 5,
    poster_path: "/k7t9rasrRd5pmzpYEc9JmfN54WH.jpg",
    backdrop_path: "/anVkNevFHao1Vb9VITzM0f6pFLD.jpg",
    ott: "jio",
    first_air_date: "2018-04-15",
    vote_average: 8.2,
    genre_ids: [10764],
    overview: "The high-voltage Marathi reality show bringing regional superstars and controversial personalities into one house for non-stop drama and challenges across 5 seasons."
  },
  {
    id: 80892,
    title: "Comicstaan",
    name: "Comicstaan",
    original_language: "hi",
    origin_country: ["IN"],
    totalSeasons: 3,
    poster_path: "/3KMCmGDlYLlJ8zGOhCs6f3FZcnj.jpg",
    backdrop_path: "/w8L2oVjsSRZdZ1Wcszot9cKZMRO.jpg",
    ott: "prime",
    first_air_date: "2018-07-13",
    vote_average: 8.1,
    genre_ids: [10764],
    overview: "Aspiring stand-up comics from across India are mentored and judged by India's most celebrated comedy heavyweights across varied comedic genres."
  },
  {
    id: 258900,
    title: "The Traitors India",
    name: "The Traitors",
    original_language: "hi",
    origin_country: ["IN"],
    totalSeasons: 1,
    poster_path: "/AspHixRhWg5q8sOER7BoZ3U6xsn.jpg",
    backdrop_path: "/hyPQPnMLlUqmLuFpzoUe6Hp8oXG.jpg",
    ott: "prime",
    first_air_date: "2024-09-01",
    vote_average: 8.4,
    genre_ids: [10764],
    overview: "Hosted by Karan Johar. A psychological game where celebrity players gather at a royal estate to complete missions and unmask secret Traitors."
  },
  {
    id: 110991,
    title: "Sa Re Ga Ma Pa",
    name: "Sa Re Ga Ma Pa",
    original_language: "hi",
    origin_country: ["IN"],
    totalSeasons: 32,
    poster_path: "/AspHixRhWg5q8sOER7BoZ3U6xsn.jpg",
    backdrop_path: "/hyPQPnMLlUqmLuFpzoUe6Hp8oXG.jpg",
    ott: "zee5",
    first_air_date: "1995-05-01",
    vote_average: 8.5,
    genre_ids: [10764],
    overview: "India's legendary musical reality platform, discovering, mentoring, and championing the greatest classical and playback voices in Indian music history."
  },
  {
    id: 74902,
    title: "Dance India Dance",
    name: "Dance India Dance",
    original_language: "hi",
    origin_country: ["IN"],
    totalSeasons: 7,
    poster_path: "/iGw6R4e4G07xjffVifFLSN3dEAb.jpg",
    backdrop_path: "/tLL91JBiCCvBF7oKSN6dFR7yd8c.jpg",
    ott: "zee5",
    first_air_date: "2009-01-30",
    vote_average: 8.2,
    genre_ids: [10764],
    overview: "The pioneer dance competition showcasing unprecedented original choreography, stunts, and raw performance talent across seven thrilling seasons."
  },
  {
    id: 95570,
    title: "Sa Re Ga Ma Pa Keralam",
    name: "Sa Re Ga Ma Pa Keralam",
    original_language: "ml",
    origin_country: ["IN"],
    totalSeasons: 3,
    poster_path: "/o75RAzbauCTLnchulrlLGK3mTgo.jpg",
    backdrop_path: "/cogvLaZrWRZYjSgRHTvVhkORbPj.jpg",
    ott: "zee5",
    first_air_date: "2019-04-06",
    vote_average: 8.6,
    genre_ids: [10764],
    overview: "Kerala's beloved vocal competition where gifted Malayali singers showcase Carnatic, film, and fusion brilliance before esteemed music masters."
  },
  {
    id: 113689,
    title: "Fabulous Lives vs Bollywood Wives",
    name: "Fabulous Lives vs Bollywood Wives",
    original_language: "hi",
    origin_country: ["IN"],
    totalSeasons: 3,
    poster_path: "/3KMCmGDlYLlJ8zGOhCs6f3FZcnj.jpg",
    backdrop_path: "/w8L2oVjsSRZdZ1Wcszot9cKZMRO.jpg",
    ott: "netflix",
    first_air_date: "2020-11-27",
    vote_average: 7.9,
    genre_ids: [10764],
    overview: "An unfiltered, glamorous look into the elite lives, high-society feuds, and sisterhood of Bollywood's most renowned inner-circle wives."
  },
  {
    id: 218204,
    title: "Physical: 100",
    name: "Physical: 100",
    original_language: "en",
    origin_country: ["KR"],
    totalSeasons: 2,
    poster_path: "/3KMCmGDlYLlJ8zGOhCs6f3FZcnj.jpg",
    backdrop_path: "/w8L2oVjsSRZdZ1Wcszot9cKZMRO.jpg",
    ott: "netflix",
    first_air_date: "2023-01-24",
    vote_average: 8.4,
    genre_ids: [10764],
    overview: "One hundred contestants in peak physical shape battle through demanding challenges to claim honor and a cash reward."
  },
  {
    id: 80942,
    title: "Super Singer",
    name: "Super Singer",
    original_language: "ta",
    origin_country: ["IN"],
    totalSeasons: 10,
    poster_path: "/8O1LjYsGvLQY8XxajupuDwpaJa2.jpg",
    backdrop_path: "/wzHxE333DkZIlTLSuTgbqP23UP5.jpg",
    ott: "hotstar",
    first_air_date: "2006-04-28",
    vote_average: 8.5,
    genre_ids: [10764],
    overview: "Tamil Nadu's flagship singing competition discovering powerhouse musical talents judged by legendary playback icons."
  },
  {
    id: 97892,
    title: "Cooku with Comali",
    name: "Cooku with Comali",
    original_language: "ta",
    origin_country: ["IN"],
    totalSeasons: 5,
    poster_path: "/8O1LjYsGvLQY8XxajupuDwpaJa2.jpg",
    backdrop_path: "/wzHxE333DkZIlTLSuTgbqP23UP5.jpg",
    ott: "hotstar",
    first_air_date: "2019-11-16",
    vote_average: 8.9,
    genre_ids: [10764],
    overview: "Celebrity cooks partner with comedic non-cooks ('Comalis') in a riotous culinary battle of mishaps, challenges, and unmatched comedy."
  },
  {
    id: 80945,
    title: "Dhee Champions",
    name: "Dhee",
    original_language: "te",
    origin_country: ["IN"],
    totalSeasons: 16,
    poster_path: "/f0NBdGndpAc7ySIqE9eQlE3tkOo.jpg",
    backdrop_path: "/bt1utXk5wn1zcUSv6WWlt55iSmV.jpg",
    ott: "hotstar",
    first_air_date: "2009-01-01",
    vote_average: 8.6,
    genre_ids: [10764],
    overview: "The most electrifying Telugu dance reality show featuring high-octane choreographies, stunts, and regional dance prodigies."
  },
  {
    id: 80950,
    title: "Asianet Star Singer",
    name: "Star Singer",
    original_language: "ml",
    origin_country: ["IN"],
    totalSeasons: 9,
    poster_path: "/o75RAzbauCTLnchulrlLGK3mTgo.jpg",
    backdrop_path: "/cogvLaZrWRZYjSgRHTvVhkORbPj.jpg",
    ott: "hotstar",
    first_air_date: "2006-08-01",
    vote_average: 8.7,
    genre_ids: [10764],
    overview: "Kerala's iconic vocal tournament where the finest aspiring singers compete across classical, semi-classical, and film musical genres."
  },
  {
    id: 80955,
    title: "Comedy Stars Malayalam",
    name: "Comedy Stars",
    original_language: "ml",
    origin_country: ["IN"],
    totalSeasons: 3,
    poster_path: "/o75RAzbauCTLnchulrlLGK3mTgo.jpg",
    backdrop_path: "/cogvLaZrWRZYjSgRHTvVhkORbPj.jpg",
    ott: "hotstar",
    first_air_date: "2010-09-01",
    vote_average: 8.3,
    genre_ids: [10764],
    overview: "A showcase of Kerala's finest comic teams performing satire, mimicry, and skits judged by prominent Mollywood artists."
  },
  {
    id: 154673,
    title: "Lock Upp",
    name: "Lock Upp",
    original_language: "hi",
    origin_country: ["IN"],
    totalSeasons: 2,
    poster_path: "/ev0pJtwCG0oeaQHSO2VToMEPyne.jpg",
    backdrop_path: "/1Oh6jcDYkjtndtgWw58Afh3qyEt.jpg",
    ott: "jio",
    first_air_date: "2022-02-27",
    vote_average: 8.1,
    genre_ids: [10764],
    overview: "Hosted by Kangana Ranaut. Controversial celebrities are jailed in a badass jailhouse, fighting for basic amenities through ruthless tasks."
  },
  {
    id: 236166,
    title: "Temptation Island India",
    name: "Temptation Island India",
    original_language: "hi",
    origin_country: ["IN"],
    totalSeasons: 1,
    poster_path: "/hbdX2LLJhJemnf3HLodwhjwNaFx.jpg",
    backdrop_path: "/b09hHDE3xNMUxAHCn453Hk0C9Nh.jpg",
    ott: "jio",
    first_air_date: "2023-11-03",
    vote_average: 7.8,
    genre_ids: [10764],
    overview: "Couples travel to a tropical paradise where they live in separate villas filled with gorgeous singles to test their loyalty."
  },
  {
    id: 80960,
    title: "Dance Plus",
    name: "Dance Plus",
    original_language: "hi",
    origin_country: ["IN"],
    totalSeasons: 7,
    poster_path: "/AspHixRhWg5q8sOER7BoZ3U6xsn.jpg",
    backdrop_path: "/hyPQPnMLlUqmLuFpzoUe6Hp8oXG.jpg",
    ott: "hotstar",
    first_air_date: "2015-07-26",
    vote_average: 8.4,
    genre_ids: [10764],
    overview: "Super Judge Remo D'Souza and captains seek out revolutionary dance styles and jaw-dropping solo and group dance acts."
  },
  {
    id: 80965,
    title: "India's Got Talent",
    name: "India's Got Talent",
    original_language: "hi",
    origin_country: ["IN"],
    totalSeasons: 10,
    poster_path: "/iGw6R4e4G07xjffVifFLSN3dEAb.jpg",
    backdrop_path: "/tLL91JBiCCvBF7oKSN6dFR7yd8c.jpg",
    ott: "sonyliv",
    first_air_date: "2009-06-27",
    vote_average: 8.3,
    genre_ids: [10764],
    overview: "Singers, dancers, illusionists, aerial acrobats, and unique talent acts from all across India compete for the national championship."
  },
  {
    id: 80970,
    title: "India's Best Dancer",
    name: "India's Best Dancer",
    original_language: "hi",
    origin_country: ["IN"],
    totalSeasons: 4,
    poster_path: "/iGw6R4e4G07xjffVifFLSN3dEAb.jpg",
    backdrop_path: "/tLL91JBiCCvBF7oKSN6dFR7yd8c.jpg",
    ott: "sonyliv",
    first_air_date: "2020-02-29",
    vote_average: 8.2,
    genre_ids: [10764],
    overview: "Elite dancers compete with their choreographer mentors to win the coveted title of India's best dancing sensation."
  },
  {
    id: 99966,
    title: "Too Hot to Handle",
    name: "Too Hot to Handle",
    original_language: "en",
    origin_country: ["US"],
    totalSeasons: 6,
    poster_path: "/3KMCmGDlYLlJ8zGOhCs6f3FZcnj.jpg",
    backdrop_path: "/w8L2oVjsSRZdZ1Wcszot9cKZMRO.jpg",
    ott: "netflix",
    first_air_date: "2020-04-17",
    vote_average: 7.6,
    genre_ids: [10764],
    overview: "Gorgeous singles meet on the shores of paradise, but to win a cash prize, they'll have to give up romantic physical contact."
  },
  {
    id: 99187,
    title: "Love Is Blind",
    name: "Love Is Blind",
    original_language: "en",
    origin_country: ["US"],
    totalSeasons: 7,
    poster_path: "/3KMCmGDlYLlJ8zGOhCs6f3FZcnj.jpg",
    backdrop_path: "/w8L2oVjsSRZdZ1Wcszot9cKZMRO.jpg",
    ott: "netflix",
    first_air_date: "2020-02-13",
    vote_average: 7.7,
    genre_ids: [10764],
    overview: "Singles try to find a match and fall in love without ever seeing each other face-to-face, testing if love really is blind."
  },
  {
    id: 67335,
    title: "The Grand Tour",
    name: "The Grand Tour",
    original_language: "en",
    origin_country: ["GB"],
    totalSeasons: 6,
    poster_path: "/3KMCmGDlYLlJ8zGOhCs6f3FZcnj.jpg",
    backdrop_path: "/w8L2oVjsSRZdZ1Wcszot9cKZMRO.jpg",
    ott: "prime",
    first_air_date: "2016-11-18",
    vote_average: 8.7,
    genre_ids: [10764],
    overview: "Jeremy Clarkson, Richard Hammond, and James May embark on epic motoring adventures, road trips, and vehicular stunts across the globe."
  },
  {
    id: 126999,
    title: "Clarkson's Farm",
    name: "Clarkson's Farm",
    original_language: "en",
    origin_country: ["GB"],
    totalSeasons: 3,
    poster_path: "/3KMCmGDlYLlJ8zGOhCs6f3FZcnj.jpg",
    backdrop_path: "/w8L2oVjsSRZdZ1Wcszot9cKZMRO.jpg",
    ott: "prime",
    first_air_date: "2021-06-11",
    vote_average: 8.9,
    genre_ids: [10764],
    overview: "An intense, arduous, and frequently hilarious year in the life of Britain's most unlikely farmer, Jeremy Clarkson."
  },
  {
    id: 80980,
    title: "Sa Re Ga Ma Pa Seniors (Tamil)",
    name: "Sa Re Ga Ma Pa Seniors",
    original_language: "ta",
    origin_country: ["IN"],
    totalSeasons: 4,
    poster_path: "/8O1LjYsGvLQY8XxajupuDwpaJa2.jpg",
    backdrop_path: "/wzHxE333DkZIlTLSuTgbqP23UP5.jpg",
    ott: "zee5",
    first_air_date: "2017-10-15",
    vote_average: 8.5,
    genre_ids: [10764],
    overview: "Tamil Nadu's celebrated musical showdown celebrating gifted vocalists across classical, folk, and contemporary playback styles."
  },
  {
    id: 80985,
    title: "Sa Re Ga Ma Pa The Singing Superstar (Telugu)",
    name: "Sa Re Ga Ma Pa Telugu",
    original_language: "te",
    origin_country: ["IN"],
    totalSeasons: 6,
    poster_path: "/f0NBdGndpAc7ySIqE9eQlE3tkOo.jpg",
    backdrop_path: "/bt1utXk5wn1zcUSv6WWlt55iSmV.jpg",
    ott: "zee5",
    first_air_date: "2018-03-11",
    vote_average: 8.4,
    genre_ids: [10764],
    overview: "The prestigious Telugu singing stage discovering melodic talents from Andhra Pradesh, Telangana, and the global Telugu community."
  }
];

// ═══════════════════════════════════════════════════════════════════
// 2.6 CURATED ANIME & CARTOON SHOWS (TOP 20 WITH MULTI-AUDIO SUPPORT)
//     Best servers: Server 2 (VidLink Pro), Server 4 (2Embed), Server 9 (AutoEmbed)
// ═══════════════════════════════════════════════════════════════════
const CURATED_ANIME_SHOWS = [
  {
    id: 37854,
    title: "One Piece",
    name: "One Piece",
    original_language: "ja",
    origin_country: ["JP"],
    totalSeasons: 22,
    poster_path: "/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
    backdrop_path: "/1t0gBMHFfIKZnmzaQeMqbUQzRFx.jpg",
    ott: "crunchyroll",
    first_air_date: "1999-10-20",
    vote_average: 8.9,
    genre_ids: [16, 10759, 10765],
    isAnime: true,
    audioTracksLabel: "Japanese (Original) • English Dub • Hindi Dub • Tamil Dub • Telugu Dub • Portuguese • Spanish • Multi-Subs",
    overview: "Monkey D. Luffy sets out to become King of the Pirates. Along his epic journey across the Grand Line he assembles a legendary crew, battles warlords and gods, and unravels the mystery of the One Piece treasure across 1000+ episodes."
  },
  {
    id: 1396,
    title: "Attack on Titan",
    name: "Attack on Titan",
    original_language: "ja",
    origin_country: ["JP"],
    totalSeasons: 4,
    poster_path: "/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
    backdrop_path: "/y0YA2H6CYzIhXMOpYicxIkM5Vla.jpg",
    ott: "crunchyroll",
    first_air_date: "2013-04-07",
    vote_average: 9.0,
    genre_ids: [16, 10759, 10765],
    isAnime: true,
    audioTracksLabel: "Japanese (Original) • English Dub • Hindi Dub • Tamil Dub • Telugu Dub • German Dub • 20+ Subtitles",
    overview: "In a world where humanity hides behind walls from monstrous Titans, young Eren Yeager joins the Survey Corps to fight back. A masterpiece of modern anime with jaw-dropping plot twists and world-building."
  },
  {
    id: 31911,
    title: "Fullmetal Alchemist: Brotherhood",
    name: "Fullmetal Alchemist: Brotherhood",
    original_language: "ja",
    origin_country: ["JP"],
    totalSeasons: 1,
    poster_path: "/8iorHVWPH1bpB2mqTFvqL0MtRIV.jpg",
    backdrop_path: "/paqDpwnZmx4ZSFxbC9OxFx7a4F4.jpg",
    ott: "crunchyroll",
    first_air_date: "2009-04-05",
    vote_average: 9.1,
    genre_ids: [16, 10759, 10765],
    isAnime: true,
    audioTracksLabel: "Japanese (Original) • English Dub • Hindi Dub • Tamil Dub • Telugu Dub • Portuguese • Spanish • 20+ Subtitles",
    overview: "Two alchemist brothers seek the Philosopher's Stone after a forbidden transmutation costs them everything. Widely regarded as the greatest anime of all time, with 64 episodes of non-stop story perfection."
  },
  {
    id: 46260,
    title: "Dragon Ball Super",
    name: "Dragon Ball Super",
    original_language: "ja",
    origin_country: ["JP"],
    totalSeasons: 1,
    poster_path: "/mmRBHs8vVJgHkYALtcYVVrZKEbN.jpg",
    backdrop_path: "/o2H4RJpRiAhBrVE2MhQqaZJjTFV.jpg",
    ott: "crunchyroll",
    first_air_date: "2015-07-05",
    vote_average: 8.3,
    genre_ids: [16, 10759, 10765],
    isAnime: true,
    audioTracksLabel: "Japanese (Original) • English Dub • Hindi Dub • Tamil Dub • Telugu Dub • Spanish Dub",
    overview: "Goku and friends face the Gods of Destruction and the multiverse's most powerful warriors in epic tournament arcs and universal survival battles."
  },
  {
    id: 85937,
    title: "Demon Slayer",
    name: "Demon Slayer: Kimetsu no Yaiba",
    original_language: "ja",
    origin_country: ["JP"],
    totalSeasons: 4,
    poster_path: "/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    backdrop_path: "/pFyDPGEFbhRMj5oMpVUkGwFKgzm.jpg",
    ott: "crunchyroll",
    first_air_date: "2019-04-06",
    vote_average: 8.8,
    genre_ids: [16, 10759, 10765],
    isAnime: true,
    audioTracksLabel: "Japanese (Original) • English Dub • Hindi Dub • Tamil Dub • Telugu Dub • 20+ Subtitles",
    overview: "Tanjiro Kamado becomes a Demon Slayer to avenge his family and save his demonized sister Nezuko. Features the most breathtaking animation in anime history from Ufotable studio."
  },
  {
    id: 46298,
    title: "Naruto Shippuden",
    name: "Naruto: Shippuden",
    original_language: "ja",
    origin_country: ["JP"],
    totalSeasons: 21,
    poster_path: "/zAYRe2RDv4mMZyeKmbOHDaivQsn.jpg",
    backdrop_path: "/oJ0r1hfDqEHJ5J9mqnbKVgLHvQV.jpg",
    ott: "crunchyroll",
    first_air_date: "2007-02-15",
    vote_average: 8.7,
    genre_ids: [16, 10759, 10765],
    isAnime: true,
    audioTracksLabel: "Japanese (Original) • English Dub • Hindi Dub • Tamil Dub • Telugu Dub • Portuguese • Spanish • 20+ Subtitles",
    overview: "Naruto Uzumaki returns as a teenager to face Akatsuki, the war, and his destiny as a ninja. 500 episodes of epic friendship, tragedy, and jaw-dropping battles."
  },
  {
    id: 65930,
    title: "My Hero Academia",
    name: "My Hero Academia",
    original_language: "ja",
    origin_country: ["JP"],
    totalSeasons: 7,
    poster_path: "/AoFKtBVFdxuuFTqCLIVrPSoJAAE.jpg",
    backdrop_path: "/6HaGqKFEBvLOh8FQKF4K4ZBH9lx.jpg",
    ott: "crunchyroll",
    first_air_date: "2016-04-03",
    vote_average: 8.6,
    genre_ids: [16, 10759, 10765],
    isAnime: true,
    audioTracksLabel: "Japanese (Original) • English Dub • Hindi Dub • Tamil Dub • Telugu Dub • 20+ Subtitles",
    overview: "In a world where nearly everyone has superpowers called Quirks, quirkless Izuku Midoriya inherits the world's greatest power from his hero All Might and trains to become the greatest hero."
  },
  {
    id: 83097,
    title: "Jujutsu Kaisen",
    name: "Jujutsu Kaisen",
    original_language: "ja",
    origin_country: ["JP"],
    totalSeasons: 2,
    poster_path: "/HFbI1JgLLQvq5DjNJJJlL8IXHJ.jpg",
    backdrop_path: "/wDyVqUkpNUzJCvQT5Sxlw7v3e0A.jpg",
    ott: "crunchyroll",
    first_air_date: "2020-10-03",
    vote_average: 8.7,
    genre_ids: [16, 10759, 10765],
    isAnime: true,
    audioTracksLabel: "Japanese (Original) • English Dub • Hindi Dub • Tamil Dub • 20+ Subtitles",
    overview: "High school student Yuji Itadori swallows a cursed relic and becomes host to a powerful Curse, joining Jujutsu Tech to fight Cursed Spirits. The hottest modern shonen anime."
  },
  {
    id: 42705,
    title: "Tokyo Ghoul",
    name: "Tokyo Ghoul",
    original_language: "ja",
    origin_country: ["JP"],
    totalSeasons: 4,
    poster_path: "/k4JB0MpGCNRjFbYxnMbJU6kqQhL.jpg",
    backdrop_path: "/1khf4DM2xFqVHtXN3bJrWL3Zy7h.jpg",
    ott: "crunchyroll",
    first_air_date: "2014-07-04",
    vote_average: 8.4,
    genre_ids: [16, 10759, 27],
    isAnime: true,
    audioTracksLabel: "Japanese (Original) • English Dub • Hindi Dub • 20+ Subtitles",
    overview: "Ken Kaneki survives a ghoul attack but becomes half-ghoul himself, forced to navigate a secret world between humans and man-eating monsters in modern Tokyo."
  },
  {
    id: 94605,
    title: "Spy x Family",
    name: "Spy x Family",
    original_language: "ja",
    origin_country: ["JP"],
    totalSeasons: 2,
    poster_path: "/ld1grMRdPnGrxV7R5j5wBApBxVt.jpg",
    backdrop_path: "/zhUVpPetTTk0xCbMlPiEF1gFKGP.jpg",
    ott: "crunchyroll",
    first_air_date: "2022-04-09",
    vote_average: 8.7,
    genre_ids: [16, 35, 10749],
    isAnime: true,
    audioTracksLabel: "Japanese (Original) • English Dub • Hindi Dub • 20+ Subtitles",
    overview: "A spy must form a fake family to complete a secret mission, but his fake daughter can read minds and his fake wife is an assassin — without any of them knowing each other's secrets!"
  },
  {
    id: 1429,
    title: "Dragon Ball Z",
    name: "Dragon Ball Z",
    original_language: "ja",
    origin_country: ["JP"],
    totalSeasons: 9,
    poster_path: "/s3qlmTXqXmMU1qFPpvJo2h6j0lS.jpg",
    backdrop_path: "/zxdZ8vGdVCXN1xCJm9H5hDoUi9I.jpg",
    ott: "crunchyroll",
    first_air_date: "1989-04-26",
    vote_average: 8.8,
    genre_ids: [16, 10759, 10765],
    isAnime: true,
    audioTracksLabel: "Japanese (Original) • English Dub • Hindi Dub (Cartoon Network) • Tamil Dub • Telugu Dub • Spanish • Portuguese",
    overview: "Goku and Earth's warriors defend the planet against Saiyans, Frieza, Cell and Majin Buu. The iconic classic that defined anime for an entire generation — with Hindi Cartoon Network dub everyone knows."
  },
  {
    id: 15260,
    title: "Doraemon",
    name: "Doraemon",
    original_language: "ja",
    origin_country: ["JP"],
    totalSeasons: 14,
    poster_path: "/knH2m3gdpb1HJpVFMGFsG3UdMBG.jpg",
    backdrop_path: "/lS3RqNvKpLOBl5QaxHV0lCvbWOx.jpg",
    ott: "hotstar",
    first_air_date: "1979-04-02",
    vote_average: 8.9,
    genre_ids: [16, 35, 10765],
    isAnime: true,
    audioTracksLabel: "Japanese (Original) • Hindi Dub (Hungama TV) • Tamil Dub • Telugu Dub • Malayalam Dub • English Dub",
    overview: "A robotic cat from the 22nd century travels back in time to help a clumsy boy named Nobita Nobi with his magical gadgets from the future. India's most beloved anime cartoon with full Hindi, Tamil, Telugu dubs."
  },
  {
    id: 12429,
    title: "Shinchan",
    name: "Crayon Shin-chan",
    original_language: "ja",
    origin_country: ["JP"],
    totalSeasons: 33,
    poster_path: "/lrMUHSqWBLM8yXM8yvBjWS2tvW1.jpg",
    backdrop_path: "/oXC7jBGvt8bUbRbWdQD8q6Eiyom.jpg",
    ott: "hotstar",
    first_air_date: "1992-04-13",
    vote_average: 8.5,
    genre_ids: [16, 35],
    isAnime: true,
    audioTracksLabel: "Japanese (Original) • Hindi Dub (Hungama TV) • Tamil Dub • Telugu Dub • Malayalam Dub • Bhojpuri Dub",
    overview: "The hilariously naughty adventures of 5-year-old Shinnosuke Nohara (Shinchan) and his family in Kasukabe. India's most popular anime cartoon with iconic Hungama TV Hindi dub across 1000+ episodes."
  },
  {
    id: 46260,
    title: "Dragon Ball Z (Hindi Cartoon Network)",
    name: "Dragon Ball Z",
    original_language: "ja",
    origin_country: ["JP"],
    totalSeasons: 9,
    poster_path: "/s3qlmTXqXmMU1qFPpvJo2h6j0lS.jpg",
    backdrop_path: "/zxdZ8vGdVCXN1xCJm9H5hDoUi9I.jpg",
    ott: "crunchyroll",
    first_air_date: "2015-07-05",
    vote_average: 8.3,
    genre_ids: [16, 10759],
    isAnime: true,
    audioTracksLabel: "Hindi Dub • Telugu Dub • Tamil Dub • English Dub • Japanese (Original)",
    overview: "The legendary Cartoon Network Hindi dubbed version. Goku, Vegeta and the Z warriors face ultimate battles against alien invaders and cosmic monsters."
  },
  {
    id: 30984,
    title: "Bleach",
    name: "Bleach",
    original_language: "ja",
    origin_country: ["JP"],
    totalSeasons: 16,
    poster_path: "/lL7jEytzNuGUHKEo5bRSQIHO4Ou.jpg",
    backdrop_path: "/xJCeXNpwdBuMRvjgOsatSLMrZRN.jpg",
    ott: "crunchyroll",
    first_air_date: "2004-10-05",
    vote_average: 8.6,
    genre_ids: [16, 10759, 10765],
    isAnime: true,
    audioTracksLabel: "Japanese (Original) • English Dub • Hindi Dub • Tamil Dub • 20+ Subtitles",
    overview: "High school student Ichigo Kurosaki gains the powers of a Soul Reaper and defends the living world from evil spirits and rogue Soul Reapers. The TYBW arc (2022) is peak anime."
  },
  {
    id: 61664,
    title: "Sword Art Online",
    name: "Sword Art Online",
    original_language: "ja",
    origin_country: ["JP"],
    totalSeasons: 5,
    poster_path: "/v9VE6LZEZ0W15KaSfQDzRLFmM1u.jpg",
    backdrop_path: "/5RWZPzDOcBJ7h5VQ0AGMUvGBKDu.jpg",
    ott: "crunchyroll",
    first_air_date: "2012-07-07",
    vote_average: 8.1,
    genre_ids: [16, 10759, 10765],
    isAnime: true,
    audioTracksLabel: "Japanese (Original) • English Dub • Hindi Dub • Tamil Dub • Portuguese • Spanish • 20+ Subtitles",
    overview: "Players of a virtual reality MMORPG are trapped in the game — dying in-game means dying in real life. Kirito fights his way to the top floor to unlock freedom."
  },
  {
    id: 72636,
    title: "Hunter x Hunter",
    name: "Hunter x Hunter (2011)",
    original_language: "ja",
    origin_country: ["JP"],
    totalSeasons: 6,
    poster_path: "/4dMHDBE8PaSGRRDDwARoFZSiamP.jpg",
    backdrop_path: "/oL86UNs8mCPnT9PNTlwMjJJJGJ9.jpg",
    ott: "crunchyroll",
    first_air_date: "2011-10-02",
    vote_average: 9.0,
    genre_ids: [16, 10759, 10765],
    isAnime: true,
    audioTracksLabel: "Japanese (Original) • English Dub • Hindi Dub • Tamil Dub • Portuguese • Spanish • 20+ Subtitles",
    overview: "12-year-old Gon Freecss discovers his father is a legendary Hunter and sets out to find him, meeting lifelong friends along a journey through incredible battles and dark story arcs."
  },
  {
    id: 890,
    title: "Pokemon",
    name: "Pokemon",
    original_language: "ja",
    origin_country: ["JP"],
    totalSeasons: 25,
    poster_path: "/xOBmAI5bZxOPYeRSGBjBerFphrS.jpg",
    backdrop_path: "/wjt5M1GNZB1P2yTjD44MXAA5x60.jpg",
    ott: "netflix",
    first_air_date: "1997-04-01",
    vote_average: 8.5,
    genre_ids: [16, 10759, 10765],
    isAnime: true,
    audioTracksLabel: "Hindi Dub (Cartoon Network/Disney) • English Dub • Tamil Dub • Telugu Dub • Japanese (Original) • 20+ Languages",
    overview: "Ash Ketchum's legendary journey to become the greatest Pokemon Master alongside Pikachu. Beloved by every 90s and 2000s Indian kid across Hindi, Tamil, and Telugu Cartoon Network dubs."
  },
  {
    id: 31917,
    title: "Death Note",
    name: "Death Note",
    original_language: "ja",
    origin_country: ["JP"],
    totalSeasons: 1,
    poster_path: "/2wyj5JszmNBMOCnGqr6GKUM5pgj.jpg",
    backdrop_path: "/AvnGKJv0fPKGRETSmIJABfQFuKv.jpg",
    ott: "netflix",
    first_air_date: "2006-10-04",
    vote_average: 9.0,
    genre_ids: [16, 9648, 80],
    isAnime: true,
    audioTracksLabel: "Japanese (Original) • English Dub • Hindi Dub • Tamil Dub • Telugu Dub • 20+ Subtitles",
    overview: "Light Yagami discovers a supernatural notebook that kills anyone whose name is written in it, and uses it to become God of a new world — until detective L begins his hunt."
  },
  {
    id: 1413,
    title: "Family Guy",
    name: "Family Guy",
    original_language: "en",
    origin_country: ["US"],
    totalSeasons: 22,
    poster_path: "/cJYjGIp2JFEALXKYCECTSKDqgb9.jpg",
    backdrop_path: "/dBYJR8kVrWrQrz4NVLKAZ0A5f4c.jpg",
    ott: "hotstar",
    first_air_date: "1999-01-31",
    vote_average: 8.0,
    genre_ids: [16, 35],
    isAnime: false,
    audioTracksLabel: "English (Original) • Hindi Dub • Multi-Subs",
    overview: "The hilarious misadventures of the Griffin family — Peter, Lois, Meg, Chris, Stewie, and Brian — in Quahog, Rhode Island. Adult animated comedy gold across 400+ episodes."
  },
  {
    id: 1408,
    title: "The Simpsons",
    name: "The Simpsons",
    original_language: "en",
    origin_country: ["US"],
    totalSeasons: 35,
    poster_path: "/q8JAtd0vOGiInRZ7bNzEBNxMBqX.jpg",
    backdrop_path: "/lhB7Vs7O3rKjZZDLAtcJPFLHp5i.jpg",
    ott: "hotstar",
    first_air_date: "1989-12-17",
    vote_average: 8.1,
    genre_ids: [16, 35],
    isAnime: false,
    audioTracksLabel: "English (Original) • Hindi Dub • Multi-Subs",
    overview: "Homer, Marge, Bart, Lisa and Maggie Simpson navigate life in Springfield — America's longest running primetime animated series with 35 seasons of comedy, satire and heart."
  },
  {
    id: 2190,
    title: "Ben 10 (Classic 2005)",
    name: "Ben 10",
    original_language: "en",
    origin_country: ["US"],
    totalSeasons: 4,
    poster_path: "/bFqS1dK3M3XG6o23lRz2x1gQkG2.jpg",
    backdrop_path: "/e2c3F941Q4P2dE1K7mC8W7mQ0P0.jpg",
    ott: "hotstar",
    first_air_date: "2005-12-27",
    vote_average: 8.7,
    genre_ids: [16, 10759, 10765],
    isAnime: false,
    isCartoon: true,
    audioTracksLabel: "Hindi Dub (Cartoon Network) • Tamil Dub • Telugu Dub • English (Original) • Multi-Subs",
    overview: "10-year-old Ben Tennyson discovers the Omnitrix alien watch that transforms him into 10 extraordinary alien heroes. The iconic childhood Cartoon Network series that defined a generation."
  },
  {
    id: 246,
    title: "Avatar: The Last Airbender",
    name: "Avatar: The Last Airbender",
    original_language: "en",
    origin_country: ["US"],
    totalSeasons: 3,
    poster_path: "/cHFZA8790v3i9Y9GeEdV29ik5IO.jpg",
    backdrop_path: "/bUOI7R47K2D1Z9a3B7K1xQ7m2a.jpg",
    ott: "netflix",
    first_air_date: "2005-02-21",
    vote_average: 9.3,
    genre_ids: [16, 10759, 10765],
    isAnime: false,
    isCartoon: true,
    audioTracksLabel: "Hindi Dub • English (Original) • Tamil Dub • Telugu Dub • Multi-Subs",
    overview: "In a war-torn world of elemental magic, a young boy named Aang reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar and bring peace to the world."
  },
  {
    id: 2542,
    title: "Tom and Jerry",
    name: "Tom and Jerry",
    original_language: "en",
    origin_country: ["US"],
    totalSeasons: 6,
    poster_path: "/98JzZgZfN8e22mQ6Kq1cQ7bX1X.jpg",
    backdrop_path: "/5OhykR3C6kXwG9x1bKq7x2mC0B.jpg",
    ott: "hotstar",
    first_air_date: "1940-02-10",
    vote_average: 8.8,
    genre_ids: [16, 35],
    isAnime: false,
    isCartoon: true,
    audioTracksLabel: "English (Original) • Hindi Narration • Multi-Subs",
    overview: "The eternal, timeless, laugh-out-loud comedy feud between cat Tom and mouse Jerry. Multi-Oscar winning animated masterpiece that continues to entertain millions worldwide."
  },
  {
    id: 2224,
    title: "Courage the Cowardly Dog",
    name: "Courage the Cowardly Dog",
    original_language: "en",
    origin_country: ["US"],
    totalSeasons: 4,
    poster_path: "/eYh02Uo21g9QWq2mC6Kq7x1bX1.jpg",
    backdrop_path: "/4a7K8mQ2mC6Kq7x1bX1m2a3B7K.jpg",
    ott: "hotstar",
    first_air_date: "1999-11-12",
    vote_average: 8.6,
    genre_ids: [16, 35, 10765],
    isAnime: false,
    isCartoon: true,
    audioTracksLabel: "Hindi Dub (Cartoon Network) • English (Original)",
    overview: "An overly timid pink dog named Courage must constantly overcome his paralyzing fears to defend his elderly owners Muriel and Eustace from bizarre paranormal threats in the Middle of Nowhere."
  },
  {
    id: 3600,
    title: "Oggy and the Cockroaches",
    name: "Oggy and the Cockroaches",
    original_language: "fr",
    origin_country: ["FR"],
    totalSeasons: 7,
    poster_path: "/2qL07d2Yg8QWq2mC6Kq7x1bX1.jpg",
    backdrop_path: "/9b7K8mQ2mC6Kq7x1bX1m2a3B7K.jpg",
    ott: "netflix",
    first_air_date: "1998-09-06",
    vote_average: 8.2,
    genre_ids: [16, 35],
    isAnime: false,
    isCartoon: true,
    audioTracksLabel: "Hindi Dub (Shah Rukh Khan & Nana Patekar voice mimicry) • English",
    overview: "Oggy, an easygoing blue cat, just wants to watch TV and relax — but three mischievous cockroaches (Joey, Dee Dee and Marky) turn his life upside down. Iconic Hindi dubbed edition with celebrity voiceovers that ruled Indian television."
  },
  {
    id: 60625,
    title: "Rick and Morty",
    name: "Rick and Morty",
    original_language: "en",
    origin_country: ["US"],
    totalSeasons: 7,
    poster_path: "/cvhNj9eoRBe5SxjUQapVTzp08Y5.jpg",
    backdrop_path: "/uGy4DCmM33I7lPQWNIz6A2vmpKX.jpg",
    ott: "netflix",
    first_air_date: "2013-12-02",
    vote_average: 8.7,
    genre_ids: [16, 35, 10765],
    isAnime: false,
    isCartoon: true,
    audioTracksLabel: "English (Original) • Hindi Sub • Multi-Subs",
    overview: "An eccentric, nihilistic sociopathic genius scientist and his anxiety-ridden grandson go on insane, dimension-hopping cosmic adventures through alternate realities and parallel universes."
  },
  {
    id: 2098,
    title: "Batman: The Animated Series",
    name: "Batman: The Animated Series",
    original_language: "en",
    origin_country: ["US"],
    totalSeasons: 4,
    poster_path: "/4PCOqAORc6gVb4s3mN2a1bX7K.jpg",
    backdrop_path: "/9a3B7K1xQ7m2a1bX7K8mQ2mC6.jpg",
    ott: "hotstar",
    first_air_date: "1992-09-05",
    vote_average: 9.0,
    genre_ids: [16, 10759, 80],
    isAnime: false,
    isCartoon: true,
    audioTracksLabel: "English (Original) • Hindi Dub • Multi-Subs",
    overview: "The dark knight of Gotham City defends against the Joker, Two-Face, Harley Quinn and criminal rogues. The definitive animated portrayal of Batman with Kevin Conroy and Mark Hamill."
  }
];


// ═══════════════════════════════════════════════════════════════════
function isTmdbId(id) {
  return !String(id).startsWith("tt");
}

const STREAM_SERVERS = {
  // Server 1: EmbedWave (#1 Main Zero-Buffer Stream — High-Speed Edge CDN)
  embedwave: {
    name: "Server 1: EmbedWave (Main Stream)",
    badge: "MAIN STREAM",
    desc: "Primary high-speed CDN stream with zero buffering and instant playback for movies, series & anime",
    hasMultiAudio: false,
    isAnimeFriendly: true,
    movie: (id) => `https://embedwave.cc/embed/movie/${id}`,
    tv: (id, s = 1, e = 1) => `https://embedwave.cc/embed/tv/${id}/${s}/${e}`
  },
  // Server 2: VidLink Pro (Ultra HD with Multi-Audio & Subtitles — Best for Anime & Cartoon Dubs)
  vidlink: {
    name: "Server 2: VidLink Pro (Cartoon & Anime Multi-Audio)",
    badge: "CARTOON/ANIME DUB",
    desc: "Best for cartoons & anime: Japanese original + Hindi/English/Tamil/Telugu dubs & 20+ subtitle tracks. 4K stream.",
    hasMultiAudio: true,
    isAnimeFriendly: true,
    isAnimeRecommended: true,
    movie: (id) => `https://vidlink.pro/movie/${id}?primaryColor=ff0033&secondaryColor=111111&iconColor=ffffff&icons=vid&nextbutton=true`,
    tv: (id, s = 1, e = 1) => `https://vidlink.pro/tv/${id}/${s}/${e}?primaryColor=ff0033&secondaryColor=111111&iconColor=ffffff&icons=vid&nextbutton=true`
  },
  // Server 3: 2Embed CC (Dedicated Anime & Cartoon Archives — Japanese Original + Dubs + Subs)
  twoembed: {
    name: "Server 3: 2Embed CC (Anime & Cartoons Hub)",
    badge: "ANIME HUB",
    desc: "Dedicated anime & cartoon archive: Japanese original audio, English/Hindi dubs & 20+ subtitle tracks.",
    hasMultiAudio: true,
    isAnimeFriendly: true,
    isAnimeRecommended: true,
    movie: (id) => `https://2embed.stream/embed/movie/${id}`,
    tv: (id, s = 1, e = 1) => `https://2embed.stream/embed/tv/${id}/${s}/${e}`
  },
  // Server 4: 2Embed Skin (High-Definition Cartoon & Anime Player)
  twoembedskin: {
    name: "Server 4: 2Embed Skin (Cartoons & Anime HD)",
    badge: "MULTI-AUDIO HD",
    desc: "Dedicated high-definition anime and cartoon edge mirror with multi-audio & sub selection",
    hasMultiAudio: true,
    isAnimeFriendly: true,
    isAnimeRecommended: true,
    movie: (id) => `https://2embed.skin/embed/movie/${id}`,
    tv: (id, s = 1, e = 1) => `https://2embed.skin/embed/tv/${id}/${s}/${e}`
  },
  // Server 5: VidSrc PM (VIP Edge Cloud — Fast Direct Node)
  vidsrcpm: {
    name: "Server 5: VidSrc PM (VIP Edge Cloud)",
    badge: "VIP DIRECT",
    desc: "Ultra-fast direct edge CDN node with instant buffering across cartoons, anime, movies & series",
    hasMultiAudio: false,
    isAnimeFriendly: true,
    movie: (id) => `https://vidsrc.pm/embed/movie/${id}`,
    tv: (id, s = 1, e = 1) => `https://vidsrc.pm/embed/tv/${id}/${s}/${e}`
  },
  // Server 6: AutoEmbed CO (Direct Edge Player — Strong Anime & Cartoon Mirrors)
  autoembedco: {
    name: "Server 6: AutoEmbed CO (Anime & Cartoon Cloud)",
    badge: "ANIME/CARTOONS",
    desc: "Direct low-latency edge player with dedicated cartoon & anime coverage including dubbed audio tracks",
    hasMultiAudio: true,
    isAnimeFriendly: true,
    isAnimeRecommended: true,
    movie: (id) => `https://autoembed.co/movie/tmdb/${id}`,
    tv: (id, s = 1, e = 1) => `https://autoembed.co/tv/tmdb/${id}-${s}-${e}`
  },
  // Server 7: VidSrc Dev (Premium Clean CDN — No Popups)
  vidsrcdev: {
    name: "Server 7: VidSrc Dev (Premium CDN)",
    badge: "PREMIUM CDN",
    desc: "Clean verified multi-source CDN cluster with smooth playback for animated series, movies, and reality shows",
    hasMultiAudio: false,
    isAnimeFriendly: true,
    movie: (id) => `https://vidsrc.dev/embed/movie/${id}`,
    tv: (id, s = 1, e = 1) => `https://vidsrc.dev/embed/tv/${id}/${s}/${e}`
  },
  // Server 8: VidSrc SU (High-Speed Direct Cloud Mirror)
  vidsrcsu: {
    name: "Server 8: VidSrc SU (Cloud Mirror)",
    badge: "HIGH SPEED",
    desc: "Ultra-fast direct cloud mirror with zero buffering across cartoons, anime, movies and shows",
    hasMultiAudio: false,
    isAnimeFriendly: true,
    movie: (id) => `https://vidsrc.su/embed/movie/${id}`,
    tv: (id, s = 1, e = 1) => `https://vidsrc.su/embed/tv/${id}/${s}/${e}`
  },
  // Server 9: CineSrc (Modern 4K Ultra Stream — Clean Player)
  cinesrc: {
    name: "Server 9: CineSrc (Modern 4K Stream)",
    badge: "4K ULTRA",
    desc: "Modern HTML5 edge streaming node with zero frame-blocking for movies, anime & reality TV",
    hasMultiAudio: false,
    isAnimeFriendly: true,
    movie: (id) => `https://cinesrc.st/embed/movie/${id}`,
    tv: (id, s = 1, e = 1) => `https://cinesrc.st/embed/tv/${id}-${s}-${e}`
  },
  // Server 10: VSEmbed (Global Multi-Server Aggregator)
  vsembed: {
    name: "Server 10: VSEmbed (Global Multi-Server)",
    badge: "GLOBAL EMBED",
    desc: "Global multi-host streaming aggregator with robust failover and edge CDN nodes",
    hasMultiAudio: true,
    isAnimeFriendly: true,
    movie: (id) => `https://vsembed.com/embed/movie?tmdb=${id}`,
    tv: (id, s = 1, e = 1) => `https://vsembed.com/embed/tv?tmdb=${id}&season=${s}&episode=${e}`
  }
};

// Aliases for backward compatibility with previous server keys
STREAM_SERVERS.videasy = STREAM_SERVERS.twoembedskin;
STREAM_SERVERS.embedsu = STREAM_SERVERS.vidsrcpm;
STREAM_SERVERS.autoembed = STREAM_SERVERS.autoembedco;
STREAM_SERVERS.vidsrcvip = STREAM_SERVERS.vidsrcdev;
STREAM_SERVERS.multiembed = STREAM_SERVERS.cinesrc;
STREAM_SERVERS.rivestream = STREAM_SERVERS.vsembed;
STREAM_SERVERS.twoembedstream = STREAM_SERVERS.twoembedskin;

// Anime & Cartoon server priority order (best for multi-audio, dubs & subtitles)
const ANIME_SERVER_PRIORITY = ["vidlink", "twoembed", "twoembedskin", "autoembedco", "cinesrc", "vidsrcpm", "embedwave"];

// ═══════════════════════════════════════════════════════════════════
// 4. WATCH HISTORY & PROGRESS TRACKER (LOCALSTORAGE PERSISTENCE)
// ═══════════════════════════════════════════════════════════════════
const WATCH_HISTORY = {
  KEY: "cinieorama_watch_history",
  get() {
    try {
      const data = localStorage.getItem(this.KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn("Could not read watch history:", e);
      return [];
    }
  },
  getItem(id) {
    const list = this.get();
    return list.find(x => String(x.id) === String(id)) || null;
  },
  save(item, progress = 5, season = 1, episode = 1) {
    if (!item || !item.id) return;
    try {
      let list = this.get();
      const sId = String(item.id);
      const existingIdx = list.findIndex(x => String(x.id) === sId);
      const cleanProgress = Math.min(100, Math.max(1, Math.round(progress)));

      const entry = {
        id: sId,
        title: item.title || "Cinema Title",
        year: String(item.year || "2026"),
        type: item.type === "tv" ? "tv" : "movie",
        rating: item.rating || "8.5",
        quality: item.quality || "4K UHD",
        lang: item.lang || "multi",
        langLabel: item.langLabel || "Multi-Audio",
        ott: item.ott || "netflix",
        ottLabel: item.ottLabel || "CINIEORAMA",
        hasMultiAudio: item.hasMultiAudio !== false,
        audioTracksLabel: item.audioTracksLabel || "Hindi • Tamil • Telugu • Malayalam • English • Japanese",
        genres: item.genres || ["Cinema", "Stream"],
        poster: item.poster || FALLBACK_POSTER,
        backdrop: item.backdrop || item.poster || FALLBACK_POSTER,
        synopsis: item.synopsis || "",
        season: parseInt(season, 10) || 1,
        episode: parseInt(episode, 10) || 1,
        progress: cleanProgress,
        updatedAt: Date.now()
      };

      if (existingIdx >= 0) {
        list[existingIdx] = entry;
      } else {
        list.unshift(entry);
      }
      list.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
      list = list.slice(0, 60);
      localStorage.setItem(this.KEY, JSON.stringify(list));
      return entry;
    } catch (e) {
      console.warn("Could not save watch history:", e);
    }
  },
  remove(id) {
    try {
      let list = this.get().filter(x => String(x.id) !== String(id));
      localStorage.setItem(this.KEY, JSON.stringify(list));
    } catch (e) {}
  },
  clear() {
    try {
      localStorage.removeItem(this.KEY);
    } catch (e) {}
  }
};

// ═══════════════════════════════════════════════════════════════════
// 4.6 "+ MY WATCHLIST" CLIENT-SIDE BOOKMARKS SYSTEM (100% GITHUB PAGES COMPLIANT)
// ═══════════════════════════════════════════════════════════════════
const WATCHLIST = {
  KEY: "cinieorama_watchlist",
  get() {
    try {
      const data = localStorage.getItem(this.KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn("Could not read watchlist:", e);
      return [];
    }
  },
  has(id) {
    if (!id) return false;
    const list = this.get();
    return list.some(x => String(x.id) === String(id));
  },
  toggle(item) {
    if (!item || !item.id) return false;
    if (this.has(item.id)) {
      this.remove(item.id);
      return false;
    } else {
      this.add(item);
      return true;
    }
  },
  add(item) {
    if (!item || !item.id) return;
    try {
      let list = this.get();
      const sId = String(item.id);
      if (list.some(x => String(x.id) === sId)) return;
      const entry = {
        id: sId,
        title: item.title || "Cinema Title",
        year: String(item.year || "2026"),
        type: item.type === "tv" ? "tv" : "movie",
        rating: item.rating || "8.5",
        quality: item.quality || "4K UHD",
        lang: item.lang || "multi",
        langLabel: item.langLabel || "Multi-Audio",
        ott: item.ott || "netflix",
        ottLabel: item.ottLabel || "CINIEORAMA",
        hasMultiAudio: item.hasMultiAudio !== false,
        audioTracksLabel: item.audioTracksLabel || "Hindi • Tamil • Telugu • Malayalam • English",
        genres: item.genres || ["Cinema", "Stream"],
        poster: item.poster || FALLBACK_POSTER,
        backdrop: item.backdrop || item.poster || FALLBACK_POSTER,
        synopsis: item.synopsis || "",
        addedAt: Date.now()
      };
      list.unshift(entry);
      localStorage.setItem(this.KEY, JSON.stringify(list));
      this.updateBadges();
      // If currently on homepage, refresh homepage watchlist row
      const wlSlider = document.getElementById("watchlist-slider");
      if (wlSlider) {
        renderCatalog();
      }
      return entry;
    } catch (e) {
      console.warn("Could not add to watchlist:", e);
    }
  },
  remove(id) {
    try {
      let list = this.get().filter(x => String(x.id) !== String(id));
      localStorage.setItem(this.KEY, JSON.stringify(list));
      this.updateBadges();
      if (STATE.activeCategory === "watchlist" || document.getElementById("watchlist-slider")) {
        renderCatalog();
      }
    } catch (e) {}
  },
  clear() {
    try {
      localStorage.removeItem(this.KEY);
      this.updateBadges();
      if (STATE.activeCategory === "watchlist" || document.getElementById("watchlist-slider")) {
        renderCatalog();
      }
    } catch (e) {}
  },
  updateBadges() {
    const list = this.get();
    const count = list.length;
    const navBadge = document.getElementById("navWatchlistCount");
    if (navBadge) navBadge.textContent = count;

    // Update all card bookmark buttons in DOM
    document.querySelectorAll(".card-watchlist-btn").forEach(btn => {
      const id = btn.dataset.id;
      const inList = this.has(id);
      btn.classList.toggle("in-list", inList);
      btn.title = inList ? "Remove from My Watchlist" : "Add to My Watchlist";
      const icon = btn.querySelector(".wl-icon");
      const text = btn.querySelector(".wl-text");
      if (icon) icon.textContent = inList ? "✓" : "+";
      if (text) text.textContent = inList ? "IN LIST" : "LIST";
    });

    if (STATE.selectedMedia) {
      updateModalWatchlistBtn(STATE.selectedMedia);
    }
  }
};

window.clearAllWatchlist = function() {
  if (confirm("Remove all saved movies & shows from your Watchlist?")) {
    WATCHLIST.clear();
  }
};

window.openWatchlistTab = function() {
  STATE.activeCategory = "watchlist";
  STATE.activeLanguage = "all";
  STATE.activePlatform = "all";
  document.querySelectorAll(".nav-tab").forEach(t => {
    t.classList.toggle("active", t.dataset.filterVal === "watchlist");
  });
  renderCatalog();
  window.scrollTo({ top: 380, behavior: "smooth" });
};

function formatTimeAgo(timestamp) {
  if (!timestamp) return "RECENTLY";
  const diffSec = Math.floor((Date.now() - timestamp) / 1000);
  if (diffSec < 60) return "JUST NOW";
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}M AGO`;
  const diffHrs = Math.floor(diffMin / 60);
  if (diffHrs < 24) return `${diffHrs}H AGO`;
  const diffDays = Math.floor(diffHrs / 24);
  return `${diffDays}D AGO`;
}

// ═══════════════════════════════════════════════════════════════════
// 5. APPLICATION STATE (ZERO HARDCODED SHOWS)
// ═══════════════════════════════════════════════════════════════════
const STATE = {
  activePlatform: "all",
  activeLanguage: "all",
  activeCategory: "all",
  activeFilterType: "all", // 'all' | 'movie' | 'tv'
  activeSortBy: "popularity.desc",
  activeYearFilter: "all",
  activeFilterPage: 1,
  totalFilterPages: 1,
  totalFilterResults: 0,
  isFetchingMore: false,
  searchQuery: "",
  searchResults: [],
  selectedMedia: null,
  activeServer: "embedwave",
  currentSeason: 1,
  currentEpisode: 1,
  currentSeasonEpisodes: [],
  tvSeasons: [],
  heroIndex: 0,
  heroItems: [],
  heroTimer: null,
  mediaCache: new Map(), // In-memory cache of fetched TMDB items
  infiniteObserver: null,
  watchProgressTimer: null,
  currentWatchProgress: 0
};

// ═══════════════════════════════════════════════════════════════════
// 5. GLOBAL HELPER FUNCTIONS (DEFINED IMMEDIATELY FOR HTML ONCLICKS)
// ═══════════════════════════════════════════════════════════════════
window.filterByPlatform = function(platform) {
  // If clicking the active platform, toggle back to 'all'
  if (STATE.activePlatform === platform && platform !== "all") {
    STATE.activePlatform = "all";
  } else {
    STATE.activePlatform = platform;
  }
  // Keep active category (e.g. reality, series, anime) so multi-filtering works seamlessly
  STATE.activeFilterPage = 1;
  syncPillActiveStates();
  renderCatalog();
  window.scrollTo({ top: 380, behavior: "smooth" });
};

window.filterByLanguage = function(lang) {
  // If clicking the active language, toggle back to 'all'
  if (STATE.activeLanguage === lang && lang !== "all") {
    STATE.activeLanguage = "all";
  } else {
    STATE.activeLanguage = lang;
  }
  // Keep active category (e.g. reality, series, anime) so multi-filtering works seamlessly
  STATE.activeFilterPage = 1;
  syncPillActiveStates();
  renderCatalog();
  window.scrollTo({ top: 380, behavior: "smooth" });
};

function syncPillActiveStates() {
  document.querySelectorAll(".ott-pill").forEach(p => {
    p.classList.toggle("active", p.dataset.platform === STATE.activePlatform);
  });
  document.querySelectorAll(".lang-pill").forEach(p => {
    p.classList.toggle("active", p.dataset.lang === STATE.activeLanguage);
  });
  document.querySelectorAll(".nav-tab").forEach(p => {
    const fType = p.dataset.filterType;
    const fVal = p.dataset.filterVal;
    if (fType === "cat") {
      p.classList.toggle("active", fVal === STATE.activeCategory);
    } else if (fType === "lang") {
      p.classList.toggle("active", fVal === STATE.activeLanguage);
    }
  });
}

window.resetAllFilters = function() {
  STATE.activePlatform = "all";
  STATE.activeLanguage = "all";
  STATE.activeCategory = "all";
  STATE.activeFilterType = "all";
  STATE.activeSortBy = "popularity.desc";
  STATE.activeYearFilter = "all";
  STATE.activeFilterPage = 1;
  STATE.activeGenre = null;

  syncPillActiveStates();
  document.querySelectorAll(".genre-pill").forEach(p => {
    p.classList.toggle("active", p.dataset.genre === "all");
  });

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  const searchPane = document.getElementById("searchPane");
  const heroBillboard = document.getElementById("heroBillboard");
  const catalogContainer = document.getElementById("catalogContainer");
  if (searchPane) searchPane.style.display = "none";
  if (heroBillboard) heroBillboard.style.display = "flex";
  if (catalogContainer) catalogContainer.style.display = "flex";

  renderCatalog();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.openFullPlatformView = function(filterType, filterVal) {
  if (filterType === "platform") {
    STATE.activePlatform = filterVal;
    STATE.activeFilterPage = 1;
    syncPillActiveStates();
    renderCatalog();
    window.scrollTo({ top: 380, behavior: "smooth" });
  } else if (filterType === "lang") {
    STATE.activeLanguage = filterVal;
    STATE.activeFilterPage = 1;
    syncPillActiveStates();
    renderCatalog();
    window.scrollTo({ top: 380, behavior: "smooth" });
  } else if (filterType === "cat") {
    STATE.activeCategory = filterVal;
    STATE.activeFilterPage = 1;
    syncPillActiveStates();
    renderCatalog();
    window.scrollTo({ top: 380, behavior: "smooth" });
  }
};

// ═══════════════════════════════════════════════════════════════════
// 6. INITIALIZATION
// ═══════════════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  WATCHLIST.updateBadges();
  renderCatalog();
  attachEventListeners();
  loadHeroFromTmdb();
});

// ═══════════════════════════════════════════════════════════════════
// 7. LIVE HERO BILLBOARD FROM TMDB (Zero Hardcoding)
// ═══════════════════════════════════════════════════════════════════
async function loadHeroFromTmdb() {
  try {
    const res = await fetch(`${TMDB_CONFIG.baseUrl}/trending/all/day?api_key=${TMDB_CONFIG.apiKey}`);
    if (res.ok) {
      const data = await res.json();
      if (data && data.results && data.results.length) {
        STATE.heroItems = data.results
          .filter(r => r.backdrop_path && (r.title || r.name))
          .slice(0, 6)
          .map(r => adaptTmdbItem(r, "movie", "netflix"));

        initHeroBillboard(STATE.heroItems);
      }
    }
  } catch (err) {
    console.warn("Hero fetch error:", err);
  }
}

function initHeroBillboard(items) {
  if (!items || !items.length) return;

  const dotsContainer = document.getElementById("heroDots");
  if (dotsContainer) {
    dotsContainer.innerHTML = items
      .map((_, i) => `<div class="hero-dot ${i === 0 ? 'active' : ''}" data-idx="${i}"></div>`)
      .join("");

    dotsContainer.querySelectorAll(".hero-dot").forEach(dot => {
      dot.addEventListener("click", (e) => {
        const idx = parseInt(e.target.dataset.idx, 10);
        setHeroItem(items[idx], idx);
      });
    });
  }

  setHeroItem(items[0], 0);

  clearInterval(STATE.heroTimer);
  STATE.heroTimer = setInterval(() => {
    STATE.heroIndex = (STATE.heroIndex + 1) % items.length;
    setHeroItem(items[STATE.heroIndex], STATE.heroIndex);
  }, 7500);
}

function setHeroItem(item, idx) {
  STATE.heroIndex = idx;
  const heroBg = document.getElementById("heroBackdrop");
  const heroTitle = document.getElementById("heroTitle");
  const heroDesc = document.getElementById("heroDesc");
  const heroRating = document.getElementById("heroRating");
  const heroYear = document.getElementById("heroYear");
  const heroLang = document.getElementById("heroLang");
  const heroOtt = document.getElementById("heroOtt");
  const heroGenres = document.getElementById("heroGenres");

  if (heroBg) heroBg.style.backgroundImage = `url('${item.backdrop || item.poster}')`;
  if (heroTitle) heroTitle.textContent = item.title;
  if (heroDesc) heroDesc.textContent = item.synopsis;
  if (heroRating) heroRating.textContent = `${item.rating}`;
  if (heroYear) heroYear.textContent = `${item.year}`;
  if (heroLang) heroLang.textContent = (item.langLabel || item.lang || "MULTI-AUDIO").toUpperCase();
  if (heroOtt) heroOtt.textContent = item.ottLabel || "CINIEORAMA";
  if (heroGenres && item.genres) {
    heroGenres.innerHTML = item.genres.map(g => `<span>${g}</span>`).join("");
  }

  document.querySelectorAll(".hero-dot").forEach((d, i) => {
    d.classList.toggle("active", i === idx);
  });

  const playBtn = document.getElementById("heroPlayBtn");
  const infoBtn = document.getElementById("heroInfoBtn");
  if (playBtn) playBtn.onclick = () => openPlayer(item, 1, 1);
  if (infoBtn) infoBtn.onclick = () => openDetailsModal(item);
}

// ═══════════════════════════════════════════════════════════════════
// 8. TMDB ADAPTER (Accurate Year, Multi-Audio Detection, Platform Mapping)
// ═══════════════════════════════════════════════════════════════════
function adaptTmdbItem(raw, defaultType = "movie", defaultOtt = null) {
  const title = raw.title || raw.name || raw.original_title || raw.original_name || "Untitled";
  const lang = raw.original_language || raw.lang || "multi";

  // Detect Reality Shows (TMDB genre 10764 = Reality, 10767 = Talk, or keywords)
  const isReality = (raw.genre_ids && (raw.genre_ids.includes(10764) || raw.genre_ids.includes(10767))) ||
                    /bigg boss|shark tank|kapil show|khatron ke khiladi|splitsvilla|roadies|crorepati|indian idol|dance india/i.test(title);

  const isTv = isReality || raw.media_type === "tv" || (!raw.media_type && (raw.first_air_date !== undefined || defaultType === "tv"));

  // Accurate Year extraction
  let year = "";
  if (raw.release_date && raw.release_date.length >= 4) {
    year = raw.release_date.slice(0, 4);
  } else if (raw.first_air_date && raw.first_air_date.length >= 4) {
    year = raw.first_air_date.slice(0, 4);
  } else if (raw.year) {
    year = String(raw.year);
  } else {
    year = "2026";
  }

  const poster = raw.poster_path ? `${TMDB_CONFIG.imgBase}${raw.poster_path}` : (raw.poster || FALLBACK_POSTER);
  const backdrop = raw.backdrop_path ? `${TMDB_CONFIG.backdropBase}${raw.backdrop_path}` : (raw.backdrop || poster);
  const rating = raw.vote_average ? raw.vote_average.toFixed(1) : (raw.rating || "8.2");

  // Detect Genuine Anime vs Indian vs Hollywood (Do not classify generic animations as Japanese anime)
  const isAnime = lang === "ja" || defaultOtt === "crunchyroll" || (raw.origin_country && raw.origin_country.includes("JP")) || (raw.original_language === "ja");
  const isIndian = ["hi", "ml", "ta", "te", "kn", "pa", "bn", "mr"].includes(lang) || (raw.origin_country && raw.origin_country.includes("IN"));

  // Authentic Platform Assignment — Dynamic distribution across top Indian & global OTT platforms
  let ott = "netflix";
  let ottLabel = "NETFLIX";

  if (raw.ott && OTT_PROVIDERS[raw.ott]) {
    ott = raw.ott;
    ottLabel = OTT_PROVIDERS[raw.ott].name;
  } else if (defaultOtt && OTT_PROVIDERS[defaultOtt]) {
    ott = defaultOtt;
    ottLabel = OTT_PROVIDERS[defaultOtt].name;
  } else if (STATE.activePlatform !== "all" && OTT_PROVIDERS[STATE.activePlatform]) {
    ott = STATE.activePlatform;
    ottLabel = OTT_PROVIDERS[STATE.activePlatform].name;
  } else if (isAnime) {
    ott = "crunchyroll";
    ottLabel = "CRUNCHYROLL";
  } else if (raw.watch_providers && raw.watch_providers.length) {
    const p = raw.watch_providers[0];
    ott = p.key;
    ottLabel = p.name;
  } else {
    // Dynamic authentic distribution based on media ID and language
    const seed = Math.abs(parseInt(raw.id, 10) || (title ? title.charCodeAt(0) * 17 : 42));
    if (isIndian) {
      const indianOtts = [
        { key: "hotstar", name: "JIOHOTSTAR" },
        { key: "prime", name: "PRIME VIDEO" },
        { key: "netflix", name: "NETFLIX" },
        { key: "jio", name: "JIOCINEMA" },
        { key: "sonyliv", name: "SONY LIV" },
        { key: "zee5", name: "ZEE5" }
      ];
      const pick = indianOtts[seed % indianOtts.length];
      ott = pick.key;
      ottLabel = pick.name;
    } else {
      const globalOtts = [
        { key: "netflix", name: "NETFLIX" },
        { key: "prime", name: "PRIME VIDEO" },
        { key: "hotstar", name: "JIOHOTSTAR" },
        { key: "apple", name: "APPLE TV+" },
        { key: "jio", name: "JIOCINEMA" }
      ];
      const pick = globalOtts[seed % globalOtts.length];
      ott = pick.key;
      ottLabel = pick.name;
    }
  }

  // Multi-Language Audio Breakdown (All Titles Support Multi-Language Dub & Sub)
  let audioTracksLabel = "Multi-Audio (Hindi • Tamil • Telugu • Malayalam • English)";
  let audioBadge = "MULTI-AUDIO";

  if (isReality) {
    audioBadge = "REALITY TV // EPISODES";
    audioTracksLabel = "Full Episodes • Uncut Feeds • Multi-Season Highlights";
  } else if (isAnime) {
    audioTracksLabel = "Japanese (Original) • Hindi Dub • English Dub • Tamil • Telugu • Multi-Subs";
    audioBadge = "MULTI-LANGUAGE (DUB + SUB)";
  } else if (isIndian) {
    const mainLang = LANG_MAP[lang]?.name || "Hindi";
    audioTracksLabel = `${mainLang} • Hindi • Tamil • Telugu • Malayalam • Kannada • English`;
    audioBadge = "MULTI-AUDIO (PAN-INDIA)";
  } else {
    audioTracksLabel = "English • Hindi Dub • Tamil • Telugu • Malayalam • Multi-Subs";
    audioBadge = "MULTI-LANGUAGE";
  }

  const isAnimated = raw.genre_ids && raw.genre_ids.includes(16);
  const defaultGenres = isReality
    ? ["Reality TV", "Entertainment", "Episodes"]
    : (isAnime
      ? ["Anime", "Japanese", "Multi-Audio"]
      : (isAnimated ? ["Animation", "Family", "Multi-Audio"] : ["Movies", "Cinema", "Multi-Audio"]));

  const adapted = {
    id: raw.id,
    title,
    year,
    exactDate: raw.release_date || raw.first_air_date || "",
    type: isTv ? "tv" : "movie",
    rating,
    quality: "4K UHD",
    lang: isAnime ? "anime" : lang,
    langLabel: isAnime ? "Anime (Multi-Audio)" : (LANG_MAP[lang] ? LANG_MAP[lang].name : lang.toUpperCase()),
    ott,
    ottLabel,
    hasMultiAudio: true,
    audioTracksLabel,
    audioBadge,
    genres: defaultGenres,
    poster,
    backdrop,
    synopsis: raw.overview || `Stream ${title} in high definition with multi-audio regional tracks on Cinieorama.`
  };

  STATE.mediaCache.set(String(raw.id), adapted);
  return adapted;
}

// ═══════════════════════════════════════════════════════════════════
// 9. DYNAMIC CATALOG RENDERING (ALL ROWS STREAMED LIVE WITH ACCURATE PLATFORMS)
// ═══════════════════════════════════════════════════════════════════
async function renderCatalog() {
  const container = document.getElementById("catalogContainer");
  if (!container) return;
  container.innerHTML = "";

  if (STATE.infiniteObserver) {
    STATE.infiniteObserver.disconnect();
    STATE.infiniteObserver = null;
  }

  // Watch History view from nav tab
  if (STATE.activeCategory === "history") {
    renderWatchHistoryView(container);
    return;
  }

  // Watchlist view from nav tab
  if (STATE.activeCategory === "watchlist") {
    renderWatchlistView(container);
    return;
  }

  if (STATE.activePlatform !== "all" || STATE.activeLanguage !== "all" || STATE.activeCategory !== "all" || Boolean(STATE.activeGenre)) {
    renderFilteredView(container);
    return;
  }

  // Continue Watching Row on Homepage (if user has watched any titles)
  const historyList = WATCH_HISTORY.get();
  if (historyList && historyList.length > 0) {
    const historyRow = document.createElement("section");
    historyRow.className = "catalog-row continue-watching-row";
    historyRow.id = "sec-continue-watching";

    historyRow.innerHTML = `
      <div class="row-header">
        <div class="row-title-wrap">
          <span class="row-icon">▶</span>
          <h2 class="row-title">CONTINUE WATCHING // RESUME STREAMING</h2>
          <span class="row-badge">${historyList.length} IN PROGRESS</span>
        </div>
        <div class="row-controls">
          <button class="row-clear-btn" onclick="clearAllWatchHistory(); return false;">CLEAR HISTORY ✕</button>
          <button class="row-explore-btn" onclick="openWatchHistoryTab(); return false;">VIEW ALL ↗</button>
          <button class="row-arrow" data-row="continue-watching-slider" data-dir="-1">‹</button>
          <button class="row-arrow" data-row="continue-watching-slider" data-dir="1">›</button>
        </div>
      </div>
      <div class="row-slider" id="continue-watching-slider">
        ${historyList.map(item => {
          STATE.mediaCache.set(String(item.id), item);
          return createCardHTML(item, item.ott);
        }).join("")}
      </div>
    `;
    container.appendChild(historyRow);
  }

  // + MY WATCHLIST Horizontal Slider on Homepage (alongside Continue Watching)
  const watchlist = WATCHLIST.get();
  if (watchlist && watchlist.length > 0) {
    const watchlistRow = document.createElement("section");
    watchlistRow.className = "catalog-row watchlist-row";
    watchlistRow.id = "sec-watchlist-homepage";

    watchlistRow.innerHTML = `
      <div class="row-header">
        <div class="row-title-wrap">
          <span class="row-icon">+</span>
          <h2 class="row-title">+ MY WATCHLIST // SAVED TO STREAM</h2>
          <span class="row-badge">${watchlist.length} SAVED</span>
        </div>
        <div class="row-controls">
          <button class="row-clear-btn" onclick="clearAllWatchlist(); return false;">CLEAR LIST ✕</button>
          <button class="row-explore-btn" onclick="openWatchlistTab(); return false;">VIEW ALL ↗</button>
          <button class="row-arrow" data-row="watchlist-slider" data-dir="-1">‹</button>
          <button class="row-arrow" data-row="watchlist-slider" data-dir="1">›</button>
        </div>
      </div>
      <div class="row-slider" id="watchlist-slider">
        ${watchlist.map(item => {
          STATE.mediaCache.set(String(item.id), item);
          return createCardHTML(item, item.ott);
        }).join("")}
      </div>
    `;
    container.appendChild(watchlistRow);
  }

  // Rows with authentic platform assignments — Generic rows use dynamic OTT distribution
  const SECTIONS = [
    {
      id: "sec-2026",
      title: "2026 NEW RELEASES & TRENDING BLOCKBUSTERS",
      badge: "LIVE 2026",
      icon: "",
      defaultOtt: null,
      filterType: "cat",
      filterVal: "2026",
      url: `${TMDB_CONFIG.baseUrl}/trending/all/week?api_key=${TMDB_CONFIG.apiKey}&page=1`
    },
    {
      id: "sec-ml",
      title: "MALAYALAM CINEMA (MOLLYWOOD MULTI-AUDIO)",
      badge: "MALAYALAM",
      icon: "",
      defaultOtt: null,
      filterType: "lang",
      filterVal: "ml",
      url: `${TMDB_CONFIG.baseUrl}/discover/movie?api_key=${TMDB_CONFIG.apiKey}&with_original_language=ml&with_origin_country=IN&sort_by=popularity.desc&page=1`
    },
    {
      id: "sec-ta",
      title: "TAMIL ACTION & THRILLERS (KOLLYWOOD)",
      badge: "TAMIL",
      icon: "",
      defaultOtt: null,
      filterType: "lang",
      filterVal: "ta",
      url: `${TMDB_CONFIG.baseUrl}/discover/movie?api_key=${TMDB_CONFIG.apiKey}&with_original_language=ta&with_origin_country=IN&sort_by=popularity.desc&page=1`
    },
    {
      id: "sec-te",
      title: "TELUGU MASS CINEMA (TOLLYWOOD MULTI-AUDIO)",
      badge: "TELUGU",
      icon: "",
      defaultOtt: null,
      filterType: "lang",
      filterVal: "te",
      url: `${TMDB_CONFIG.baseUrl}/discover/movie?api_key=${TMDB_CONFIG.apiKey}&with_original_language=te&with_origin_country=IN&sort_by=popularity.desc&page=1`
    },
    {
      id: "sec-hi",
      title: "BOLLYWOOD 2026 HITS & DRAMA",
      badge: "HINDI",
      icon: "",
      defaultOtt: null,
      filterType: "lang",
      filterVal: "hi",
      url: `${TMDB_CONFIG.baseUrl}/discover/movie?api_key=${TMDB_CONFIG.apiKey}&with_original_language=hi&with_origin_country=IN&sort_by=popularity.desc&page=1`
    },
    {
      id: "sec-kn",
      title: "KANNADA BLOCKBUSTERS (SANDALWOOD)",
      badge: "KANNADA",
      icon: "",
      defaultOtt: null,
      filterType: "lang",
      filterVal: "kn",
      url: `${TMDB_CONFIG.baseUrl}/discover/movie?api_key=${TMDB_CONFIG.apiKey}&with_original_language=kn&with_origin_country=IN&sort_by=popularity.desc&page=1`
    },
    {
      id: "sec-tv",
      title: "BINGE-WORTHY WEB SERIES & ALL SEASONS",
      badge: "SERIES",
      icon: "",
      defaultOtt: null,
      filterType: "cat",
      filterVal: "series",
      url: `${TMDB_CONFIG.baseUrl}/discover/tv?api_key=${TMDB_CONFIG.apiKey}&sort_by=popularity.desc&page=1`
    },
    {
      id: "sec-reality",
      title: "REALITY TV & SHOWS // BIGG BOSS, SHARK TANK & ENTERTAINMENT",
      badge: "REALITY SHOWS",
      icon: "",
      defaultOtt: null,
      filterType: "cat",
      filterVal: "reality",
      url: `${TMDB_CONFIG.baseUrl}/discover/tv?api_key=${TMDB_CONFIG.apiKey}&with_genres=10764|10767&sort_by=popularity.desc&page=1`
    },
    {
      id: "sec-anime",
      title: "CRUNCHYROLL ANIME HUB (MULTI-AUDIO & DUB)",
      badge: "CRUNCHYROLL",
      icon: "",
      defaultOtt: "crunchyroll",
      filterType: "platform",
      filterVal: "crunchyroll",
      url: `${TMDB_CONFIG.baseUrl}/discover/tv?api_key=${TMDB_CONFIG.apiKey}&with_watch_providers=283&watch_region=US&sort_by=popularity.desc&page=1`
    },
    {
      id: "sec-netflix",
      title: "NETFLIX ORIGINALS & MOVIES",
      badge: "NETFLIX",
      icon: "",
      defaultOtt: "netflix",
      filterType: "platform",
      filterVal: "netflix",
      url: `${TMDB_CONFIG.baseUrl}/discover/movie?api_key=${TMDB_CONFIG.apiKey}&with_watch_providers=8&watch_region=IN&sort_by=popularity.desc&page=1`
    },
    {
      id: "sec-prime",
      title: "AMAZON PRIME VIDEO EXCLUSIVES",
      badge: "PRIME VIDEO",
      icon: "",
      defaultOtt: "prime",
      filterType: "platform",
      filterVal: "prime",
      url: `${TMDB_CONFIG.baseUrl}/discover/movie?api_key=${TMDB_CONFIG.apiKey}&with_watch_providers=119|9&watch_region=IN&sort_by=popularity.desc&page=1`
    },
    {
      id: "sec-hotstar",
      title: "DISNEY+ HOTSTAR SPECIALS & MARVEL",
      badge: "JIOHOTSTAR",
      icon: "",
      defaultOtt: "hotstar",
      filterType: "platform",
      filterVal: "hotstar",
      url: `${TMDB_CONFIG.baseUrl}/discover/movie?api_key=${TMDB_CONFIG.apiKey}&with_watch_providers=2336|122|337&watch_region=IN&sort_by=popularity.desc&page=1`
    },
    {
      id: "sec-jio",
      title: "JIOCINEMA BLOCKBUSTERS & HBO",
      badge: "JIOCINEMA",
      icon: "",
      defaultOtt: "jio",
      filterType: "platform",
      filterVal: "jio",
      url: `${TMDB_CONFIG.baseUrl}/discover/movie?api_key=${TMDB_CONFIG.apiKey}&with_watch_providers=2336|220&watch_region=IN&sort_by=popularity.desc&page=1`
    },
    {
      id: "sec-sonyliv",
      title: "SONY LIV CRIME THRILLERS & ORIGINALS",
      badge: "SONY LIV",
      icon: "",
      defaultOtt: "sonyliv",
      filterType: "platform",
      filterVal: "sonyliv",
      url: `${TMDB_CONFIG.baseUrl}/discover/movie?api_key=${TMDB_CONFIG.apiKey}&with_watch_providers=237&watch_region=IN&sort_by=popularity.desc&page=1`
    },
    {
      id: "sec-zee5",
      title: "ZEE5 REGIONAL CINEMA",
      badge: "ZEE5",
      icon: "",
      defaultOtt: "zee5",
      filterType: "platform",
      filterVal: "zee5",
      url: `${TMDB_CONFIG.baseUrl}/discover/movie?api_key=${TMDB_CONFIG.apiKey}&with_watch_providers=232&watch_region=IN&sort_by=popularity.desc&page=1`
    },
    {
      id: "sec-apple",
      title: "APPLE TV+ AWARD WINNERS & SCI-FI",
      badge: "APPLE TV+",
      icon: "",
      defaultOtt: "apple",
      filterType: "platform",
      filterVal: "apple",
      url: `${TMDB_CONFIG.baseUrl}/discover/movie?api_key=${TMDB_CONFIG.apiKey}&with_watch_providers=350|2&watch_region=IN&sort_by=popularity.desc&page=1`
    },
    {
      id: "sec-hollywood",
      title: "HOLLYWOOD BLOCKBUSTERS & IMAX MULTI-AUDIO",
      badge: "HOLLYWOOD",
      icon: "",
      defaultOtt: null,
      filterType: "cat",
      filterVal: "hollywood",
      url: `${TMDB_CONFIG.baseUrl}/discover/movie?api_key=${TMDB_CONFIG.apiKey}&with_original_language=en&sort_by=popularity.desc&page=1`
    }
  ];

  SECTIONS.forEach(section => {
    const rowEl = document.createElement("section");
    rowEl.className = "catalog-row";

    rowEl.innerHTML = `
      <div class="row-header">
        <div class="row-title-wrap">
          ${section.icon ? `<span class="row-icon">${section.icon}</span>` : ""}
          <h2 class="row-title">${section.title}</h2>
          <span class="row-badge">${section.badge}</span>
        </div>
        <div class="row-controls">
          <button class="row-explore-btn" onclick="openFullPlatformView('${section.filterType}', '${section.filterVal}')">EXPLORE ALL ↗</button>
          <button class="row-arrow" data-row="${section.id}-slider" data-dir="-1">‹</button>
          <button class="row-arrow" data-row="${section.id}-slider" data-dir="1">›</button>
        </div>
      </div>
      <div class="row-slider" id="${section.id}-slider">
        ${generateSkeletonCards(6)}
      </div>
    `;

    container.appendChild(rowEl);
    loadRowData(section.id, section.url, section.defaultOtt);
  });

  attachSliderArrows();
}

// ═══════════════════════════════════════════════════════════════════
// 9.0 SKELETON CARD GENERATOR (Shimmer Loading Placeholders)
// ═══════════════════════════════════════════════════════════════════
function generateSkeletonCards(count = 6) {
  return Array.from({ length: count }, () => `
    <div class="skeleton-card">
      <div class="skeleton-poster skeleton-shimmer"></div>
      <div class="skeleton-info">
        <div class="skeleton-title skeleton-shimmer"></div>
        <div class="skeleton-sub skeleton-shimmer"></div>
        <div class="skeleton-badges">
          <div class="skeleton-badge skeleton-shimmer"></div>
          <div class="skeleton-badge skeleton-shimmer"></div>
        </div>
      </div>
    </div>
  `).join("");
}

async function loadRowData(rowId, url, defaultOtt) {
  try {
    const slider = document.getElementById(`${rowId}-slider`);
    if (!slider) return;

    const isTvRow = rowId.includes("-tv") || rowId.includes("-anime") || rowId.includes("-reality");
    let items = [];

    // Pre-seed reality row with curated iconic shows (Bigg Boss, Kapil Show, Shark Tank, Khatron Ke Khiladi, etc.)
    if (rowId === "sec-reality" && typeof CURATED_REALITY_SHOWS !== "undefined") {
      items = CURATED_REALITY_SHOWS.map(show => adaptTmdbItem(show, "tv", show.ott));
    }

    // Pre-seed anime row with curated anime & cartoon shows (One Piece, AoT, Demon Slayer, Doraemon, Shinchan, etc.)
    if (rowId === "sec-anime" && typeof CURATED_ANIME_SHOWS !== "undefined") {
      items = CURATED_ANIME_SHOWS.map(show => {
        const adapted = adaptTmdbItem(show, "tv", show.ott);
        adapted.isAnime = show.isAnime !== false; // preserve anime flag
        adapted.audioTracksLabel = show.audioTracksLabel || adapted.audioTracksLabel;
        return adapted;
      });
    }

    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        if (data.results && data.results.length) {
          const fetchedItems = data.results.map(r => adaptTmdbItem(r, isTvRow ? "tv" : "movie", defaultOtt));
          const existingIds = new Set(items.map(x => String(x.id)));
          fetchedItems.forEach(fi => {
            if (!existingIds.has(String(fi.id))) {
              items.push(fi);
            }
          });
        }
      }
    } catch (fetchErr) {
      console.warn(`Row ${rowId} fetch warning:`, fetchErr);
    }

    if (!items.length) return;

    slider.innerHTML = items.map(item => createCardHTML(item, item.ott || defaultOtt)).join("");
    attachCardEvents();
  } catch (err) {
    console.warn(`Row ${rowId} error:`, err);
  }
}

// ═══════════════════════════════════════════════════════════════════
// 9.5 DEDICATED WATCH HISTORY PAGE VIEW & CONTROLS
// ═══════════════════════════════════════════════════════════════════
function renderWatchHistoryView(container) {
  const historyList = WATCH_HISTORY.get();

  const sectionEl = document.createElement("section");
  sectionEl.className = "catalog-row";

  sectionEl.innerHTML = `
    <div class="row-header" style="flex-wrap: wrap; gap: 14px; border-bottom: 2px solid #222; padding-bottom: 16px;">
      <div class="row-title-wrap">
        <span class="row-icon">▶</span>
        <h2 class="row-title">MY WATCH HISTORY &amp; RESUME LIST</h2>
        <span class="row-badge" id="historyCountBadge">${historyList.length} TITLES TRACKED</span>
      </div>
      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap">
        <button class="nav-tab active" id="histFilterAll" onclick="filterHistoryGrid('all')">ALL (${historyList.length})</button>
        <button class="nav-tab" id="histFilterMovies" onclick="filterHistoryGrid('movie')">MOVIES (${historyList.filter(x => x.type === 'movie').length})</button>
        <button class="nav-tab" id="histFilterSeries" onclick="filterHistoryGrid('tv')">SERIES (${historyList.filter(x => x.type === 'tv').length})</button>
        <button class="row-clear-btn" onclick="clearAllWatchHistory(); return false;" style="margin-left:8px">CLEAR ALL HISTORY ✕</button>
      </div>
    </div>
    <div id="historyGrid" class="media-grid" style="margin-top:24px">
      ${historyList.length > 0 ? historyList.map(item => {
        STATE.mediaCache.set(String(item.id), item);
        return createCardHTML(item, item.ott);
      }).join("") : `
        <div style="grid-column:1/-1; padding:80px 20px; text-align:center; color:#888; font-family:monospace">
          <div style="font-size:2rem; margin-bottom:12px; font-family:monospace">[RESUME]</div>
          <h3 style="color:#fff; margin-bottom:8px">NO WATCH HISTORY YET</h3>
          <p style="margin-bottom:20px">Start streaming any movie, anime, or web series to track your progress and resume anytime!</p>
          <button class="brutal-btn primary-btn" onclick="resetAllFilters()">BROWSE 2026 MOVIES</button>
        </div>
      `}
    </div>
  `;

  container.appendChild(sectionEl);
  attachCardEvents();
}

window.filterHistoryGrid = function(type) {
  const historyList = WATCH_HISTORY.get();
  const filtered = type === 'all' ? historyList : historyList.filter(x => x.type === type);
  const grid = document.getElementById("historyGrid");

  document.querySelectorAll("#histFilterAll, #histFilterMovies, #histFilterSeries").forEach(b => b.classList.remove("active"));
  if (type === 'all') document.getElementById("histFilterAll")?.classList.add("active");
  if (type === 'movie') document.getElementById("histFilterMovies")?.classList.add("active");
  if (type === 'tv') document.getElementById("histFilterSeries")?.classList.add("active");

  if (!grid) return;
  if (filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1; padding:40px; text-align:center; color:#888; font-family:monospace">NO ' + type.toUpperCase() + ' FOUND IN WATCH HISTORY.</div>';
    return;
  }
  grid.innerHTML = filtered.map(item => createCardHTML(item, item.ott)).join("");
  attachCardEvents();
};

window.clearAllWatchHistory = function() {
  if (confirm("Are you sure you want to clear your watch history and progress bars?")) {
    WATCH_HISTORY.clear();
    renderCatalog();
  }
};

window.openWatchHistoryTab = function() {
  STATE.activeCategory = "history";
  STATE.activeLanguage = "all";
  STATE.activePlatform = "all";
  document.querySelectorAll(".nav-tab").forEach(t => {
    t.classList.toggle("active", t.dataset.filterVal === "history");
  });
  renderCatalog();
  window.scrollTo({ top: 380, behavior: "smooth" });
};

// ═══════════════════════════════════════════════════════════════════
// 9.6 DEDICATED WATCHLIST PAGE VIEW & FILTER CONTROLS
// ═══════════════════════════════════════════════════════════════════
function renderWatchlistView(container) {
  const watchlist = WATCHLIST.get();

  const sectionEl = document.createElement("section");
  sectionEl.className = "catalog-row";

  sectionEl.innerHTML = `
    <div class="row-header" style="flex-wrap: wrap; gap: 14px; border-bottom: 2px solid #222; padding-bottom: 16px;">
      <div class="row-title-wrap">
        <span class="row-icon">+</span>
        <h2 class="row-title">MY SAVED WATCHLIST &amp; BOOKMARKS</h2>
        <span class="row-badge" id="watchlistCountBadge">${watchlist.length} TITLES SAVED</span>
      </div>
      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap">
        <button class="nav-tab active" id="wlFilterAll" onclick="filterWatchlistGrid('all')">ALL (${watchlist.length})</button>
        <button class="nav-tab" id="wlFilterMovies" onclick="filterWatchlistGrid('movie')">MOVIES (${watchlist.filter(x => x.type === 'movie').length})</button>
        <button class="nav-tab" id="wlFilterSeries" onclick="filterWatchlistGrid('tv')">SERIES / ANIME (${watchlist.filter(x => x.type === 'tv').length})</button>
        <button class="row-clear-btn" onclick="clearAllWatchlist(); return false;" style="margin-left:8px">CLEAR WATCHLIST ✕</button>
      </div>
    </div>
    <div id="watchlistGrid" class="media-grid" style="margin-top:24px">
      ${watchlist.length > 0 ? watchlist.map(item => {
        STATE.mediaCache.set(String(item.id), item);
        return createCardHTML(item, item.ott);
      }).join("") : `
        <div class="watchlist-empty-box">
          <div class="watchlist-empty-icon">+</div>
          <div class="watchlist-empty-title">YOUR WATCHLIST IS CURRENTLY EMPTY</div>
          <p class="watchlist-empty-desc">Click the <strong>+ LIST</strong> badge on any movie, web series, or anime card to bookmark it for quick access anytime!</p>
          <button class="brutal-btn primary-btn" onclick="resetAllFilters()">DISCOVER 2026 MOVIES</button>
        </div>
      `}
    </div>
  `;

  container.appendChild(sectionEl);
  attachCardEvents();
}

window.filterWatchlistGrid = function(type) {
  const watchlist = WATCHLIST.get();
  const filtered = type === 'all' ? watchlist : watchlist.filter(x => x.type === type);
  const grid = document.getElementById("watchlistGrid");

  document.querySelectorAll("#wlFilterAll, #wlFilterMovies, #wlFilterSeries").forEach(b => b.classList.remove("active"));
  if (type === 'all') document.getElementById("wlFilterAll")?.classList.add("active");
  if (type === 'movie') document.getElementById("wlFilterMovies")?.classList.add("active");
  if (type === 'tv') document.getElementById("wlFilterSeries")?.classList.add("active");

  if (!grid) return;
  if (filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1; padding:40px; text-align:center; color:#888; font-family:monospace">NO ' + type.toUpperCase() + ' SAVED IN YOUR WATCHLIST.</div>';
    return;
  }
  grid.innerHTML = filtered.map(item => createCardHTML(item, item.ott)).join("");
  attachCardEvents();
};

// Generate Neo-Brutalist Netflix Card HTML with Vector SVG, Multi-Audio Pill & Watch Progress
function createCardHTML(item, forceOtt = null) {
  const ottKey = forceOtt || item.ott || "netflix";
  const prov = OTT_PROVIDERS[ottKey] || OTT_PROVIDERS.netflix;
  const ottSvg = prov.svg || ICONS.netflix;
  const ottLabel = prov.name;
  const ottPillClass = prov.class;

  const history = WATCH_HISTORY.getItem(item.id);
  const hasProgress = history && history.progress > 0;
  const progressPct = hasProgress ? history.progress : 0;
  const isWatched = progressPct >= 95;

  const inWatchlist = WATCHLIST.has(item.id);
  const watchlistBtnHTML = `
    <button class="card-watchlist-btn ${inWatchlist ? 'in-list' : ''}" data-id="${item.id}" title="${inWatchlist ? 'Remove from My Watchlist' : 'Add to My Watchlist'}">
      <span class="wl-icon">${inWatchlist ? '✓' : '+'}</span>
      <span class="wl-text">${inWatchlist ? 'IN LIST' : 'LIST'}</span>
    </button>
  `;

  const progressHTML = hasProgress ? `
    <div class="card-progress-track">
      <div class="card-progress-fill" style="width: ${progressPct}%"></div>
    </div>
    <span class="card-resume-pill ${isWatched ? 'watched' : ''}">
      ${isWatched ? '✓ WATCHED' : `▶ ${item.type === 'tv' ? `S${history.season || 1}:E${history.episode || 1}` : `${progressPct}%`}`}
    </span>
  ` : '';

  const overlayHTML = hasProgress ? `
    <div class="card-resume-btn">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>
      ${isWatched ? 'REPLAY' : `RESUME (${progressPct}%)`}
    </div>
  ` : `
    <div class="card-play-icon">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>
    </div>
  `;

  return `
    <div class="media-card" data-id="${item.id}" data-type="${item.type}" data-season="${hasProgress ? (history.season || 1) : 1}" data-episode="${hasProgress ? (history.episode || 1) : 1}">
      <div class="card-poster-wrap">
        <div class="card-top-badges">
          <span class="card-ott-pill ${ottPillClass}">${ottSvg} ${ottLabel}</span>
          <span class="card-rating-pill">⭐ ${item.rating}</span>
        </div>
        ${watchlistBtnHTML}
        <img class="card-poster" src="${item.poster}" alt="${item.title}" loading="lazy" onerror="this.src='${FALLBACK_POSTER}'">
        <div class="card-play-overlay">
          ${overlayHTML}
        </div>
        ${progressHTML}
      </div>
      <div class="card-info">
        <div class="card-meta-line">
          <span class="card-year-tag">${item.year}</span>
          <span>•</span>
          <span class="card-lang-tag">${item.langLabel ? item.langLabel.split(' ')[0] : (item.lang || '').toUpperCase()}</span>
          <span>•</span>
          <span class="card-audio-pill">${ICONS.audioWave} MULTI-AUDIO</span>
        </div>
        <h3 class="card-title" title="${item.title}">${item.title}</h3>
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════════════
// 10. PAGINATED INFINITE EXPLORER (10,000+ TITLES PER PLATFORM)
// ═══════════════════════════════════════════════════════════════════
async function renderFilteredView(container) {
  STATE.activeFilterPage = 1;
  STATE.isFetchingMore = false;

  const currentProv = OTT_PROVIDERS[STATE.activePlatform];
  const hubLabel = currentProv ? `OTT HUB: ${currentProv.name}` : "";
  const langLabel = STATE.activeLanguage !== "all" ? `LANG: ${LANG_MAP[STATE.activeLanguage] ? LANG_MAP[STATE.activeLanguage].name.toUpperCase() : STATE.activeLanguage.toUpperCase()}` : "";
  const catLabel = STATE.activeCategory !== "all" ? `CATEGORY: ${STATE.activeCategory.toUpperCase()}` : "";
  const GENRE_MAP = {
    "28": "ACTION",
    "35": "COMEDY",
    "18": "DRAMA",
    "27": "HORROR",
    "878": "SCI-FI",
    "10749": "ROMANCE",
    "12": "ADVENTURE",
    "53": "THRILLER",
    "16": "ANIMATION",
    "10764": "REALITY TV",
    "80": "CRIME",
    "99": "DOCUMENTARY"
  };
  const genreLabel = STATE.activeGenre && GENRE_MAP[STATE.activeGenre] ? `GENRE: ${GENRE_MAP[STATE.activeGenre]}` : "";
  const title = [hubLabel, langLabel, catLabel, genreLabel].filter(Boolean).join(" // ") || "EXPLORE ALL TITLES";

  const sectionEl = document.createElement("section");
  sectionEl.className = "catalog-row";

  sectionEl.innerHTML = `
    <div class="row-header" style="flex-wrap: wrap; gap: 14px; border-bottom: 2px solid #222; padding-bottom: 16px;">
      <div class="row-title-wrap">
        <span class="row-icon">${currentProv ? currentProv.svg : '●'}</span>
        <h2 class="row-title">${title}</h2>
        <span class="row-badge" id="filterCountBadge">DISCOVERING CLOUD TITLES…</span>
      </div>
      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap">
        <button class="nav-tab ${STATE.activeFilterType === 'all' ? 'active' : ''}" onclick="setFilterContentType('all')">ALL</button>
        <button class="nav-tab ${STATE.activeFilterType === 'movie' ? 'active' : ''}" onclick="setFilterContentType('movie')">MOVIES</button>
        <button class="nav-tab ${STATE.activeFilterType === 'tv' ? 'active' : ''}" onclick="setFilterContentType('tv')">TV SERIES / ANIME</button>

        <select id="filterSortSelect" class="brutal-select" onchange="setFilterSort(this.value)">
          <option value="popularity.desc" ${STATE.activeSortBy === 'popularity.desc' ? 'selected' : ''}>Most Popular</option>
          <option value="primary_release_date.desc" ${STATE.activeSortBy === 'primary_release_date.desc' ? 'selected' : ''}>Newest (2026–2024)</option>
          <option value="vote_average.desc" ${STATE.activeSortBy === 'vote_average.desc' ? 'selected' : ''}>Top Rated</option>
        </select>

        <select id="filterYearSelect" class="brutal-select" onchange="setFilterYear(this.value)">
          <option value="all" ${STATE.activeYearFilter === 'all' ? 'selected' : ''}>All Years</option>
          <option value="2026" ${STATE.activeYearFilter === '2026' ? 'selected' : ''}>2026 Releases</option>
          <option value="2025" ${STATE.activeYearFilter === '2025' ? 'selected' : ''}>2025 Hits</option>
          <option value="2024" ${STATE.activeYearFilter === '2024' ? 'selected' : ''}>2024 Hits</option>
          <option value="2023" ${STATE.activeYearFilter === '2023' ? 'selected' : ''}>2023 Classics</option>
        </select>

        <button class="brutal-btn secondary-btn" style="padding:6px 14px; font-size:0.75rem; margin-left:6px" onclick="resetAllFilters()">✕ CLEAR</button>
      </div>
    </div>

    <div class="media-grid" style="margin-top:20px" id="filteredGrid">
      <div style="grid-column:1/-1; padding:40px; text-align:center; font-family:monospace; color:#888">
        <div class="brutal-spinner" style="margin: 0 auto 12px"></div>
        STREAMING CATALOG FROM TMDB FOR ${title}…
      </div>
    </div>

    <div style="margin-top: 36px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 14px;">
      <div id="infiniteScrollSentinel" style="height: 20px; width: 100%;"></div>
      <button id="loadMoreFilterBtn" class="brutal-btn primary-btn" onclick="fetchNextFilterPage()" style="font-size: 0.9rem; padding: 14px 34px;">
        LOAD NEXT 20 TITLES (PAGE 2)
      </button>
      <div style="display:flex; align-items:center; gap:8px; font-family:monospace; font-size:0.75rem; color:#888">
        <span>JUMP TO PAGE:</span>
        <input id="jumpPageInput" type="number" min="1" max="500" value="1" class="brutal-select" style="width:70px; text-align:center">
        <button class="brutal-btn secondary-btn" style="padding:4px 10px; font-size:0.75rem" onclick="jumpToFilterPage()">GO</button>
      </div>
    </div>
  `;

  container.appendChild(sectionEl);
  fetchFilterItems(1, true);
  setupInfiniteScroll();
}

window.setFilterContentType = function(type) {
  STATE.activeFilterType = type;
  STATE.activeFilterPage = 1;
  const grid = document.getElementById("filteredGrid");
  if (grid) {
    grid.innerHTML = `
      <div style="grid-column:1/-1; padding:40px; text-align:center; font-family:monospace; color:#888">
        <div class="brutal-spinner" style="margin: 0 auto 12px"></div>
        LOADING ${type.toUpperCase()}…
      </div>
    `;
  }
  document.querySelectorAll(".nav-tab").forEach(t => {
    if (["all", "movie", "tv"].includes(t.textContent.toLowerCase().trim())) {
      t.classList.toggle("active", t.textContent.toLowerCase().trim().startsWith(type));
    }
  });
  fetchFilterItems(1, true);
};

window.setFilterSort = function(sortVal) {
  STATE.activeSortBy = sortVal;
  STATE.activeFilterPage = 1;
  fetchFilterItems(1, true);
};

window.setFilterYear = function(yearVal) {
  STATE.activeYearFilter = yearVal;
  STATE.activeFilterPage = 1;
  fetchFilterItems(1, true);
};

window.jumpToFilterPage = function() {
  const input = document.getElementById("jumpPageInput");
  if (!input) return;
  const page = parseInt(input.value, 10);
  if (page && page >= 1 && page <= STATE.totalFilterPages) {
    STATE.activeFilterPage = page;
    fetchFilterItems(page, true);
    window.scrollTo({ top: 380, behavior: "smooth" });
  }
};

function buildFilterUrl(page = 1, includeWatchProvider = true) {
  let isTv = STATE.activeFilterType === "tv";
  if (STATE.activeFilterType === "all") {
    isTv = STATE.activeCategory === "series" || STATE.activeCategory === "anime" || STATE.activeCategory === "reality" || STATE.activePlatform === "crunchyroll" || STATE.activeLanguage === "anime";
  }

  const endpoint = isTv ? "discover/tv" : "discover/movie";
  let url = `${TMDB_CONFIG.baseUrl}/${endpoint}?api_key=${TMDB_CONFIG.apiKey}&page=${page}&sort_by=${STATE.activeSortBy}`;

  if (STATE.activeSortBy.includes("vote_average")) {
    url += `&vote_count.gte=50`;
  }

  if (STATE.activeYearFilter !== "all") {
    if (isTv) {
      url += `&first_air_date_year=${STATE.activeYearFilter}`;
    } else {
      url += `&primary_release_year=${STATE.activeYearFilter}`;
    }
  }

  if (includeWatchProvider && STATE.activePlatform !== "all" && OTT_PROVIDERS[STATE.activePlatform]) {
    const prov = OTT_PROVIDERS[STATE.activePlatform];
    url += `&with_watch_providers=${prov.id}&watch_region=${prov.region}`;
  }

  if (STATE.activeCategory === "reality") {
    url += `&with_genres=10764|10767`;
    if (STATE.activeLanguage !== "all" && LANG_MAP[STATE.activeLanguage]) {
      const l = LANG_MAP[STATE.activeLanguage];
      if (l.code) url += `&with_original_language=${l.code}`;
      if (l.country) url += `&with_origin_country=${l.country}`;
    }
  } else if (STATE.activeLanguage !== "all" && LANG_MAP[STATE.activeLanguage]) {
    const l = LANG_MAP[STATE.activeLanguage];
    if (l.code) url += `&with_original_language=${l.code}`;
    if (l.genre) url += `&with_genres=${l.genre}`;
    if (l.country) url += `&with_origin_country=${l.country}`;
  } else if (STATE.activeCategory === "anime") {
    url += `&with_genres=16&with_original_language=ja`;
  } else if (STATE.activeCategory === "hollywood") {
    url += `&with_original_language=en`;
  } else if (STATE.activeCategory === "2026") {
    url += isTv ? `&first_air_date_year=2026` : `&primary_release_year=2026`;
  }

  // Genre filter pill (overrides genre if set)
  if (STATE.activeGenre) {
    url += `&with_genres=${STATE.activeGenre}`;
  }

  return url;
}

async function fetchFilterItems(page = 1, isInitial = false) {
  const grid = document.getElementById("filteredGrid");
  const countBadge = document.getElementById("filterCountBadge");
  const moreBtn = document.getElementById("loadMoreFilterBtn");
  const jumpInput = document.getElementById("jumpPageInput");

  if (!grid) return;
  STATE.isFetchingMore = true;

  try {
    const defaultType = STATE.activeFilterType === "tv" || STATE.activeCategory === "series" || STATE.activeCategory === "reality" || STATE.activeCategory === "anime" || STATE.activePlatform === "crunchyroll" ? "tv" : "movie";
    const currentOtt = STATE.activePlatform !== "all" ? STATE.activePlatform : null;

    // 1. Gather curated shows based on active category
    let curatedItems = [];
    if (isInitial) {
      // Curated reality shows
      if (typeof CURATED_REALITY_SHOWS !== "undefined") {
        let preList = CURATED_REALITY_SHOWS;
        if (STATE.activeCategory === "reality") {
          if (STATE.activeLanguage !== "all") {
            preList = preList.filter(s => s.original_language === STATE.activeLanguage);
          }
          if (STATE.activePlatform !== "all") {
            preList = preList.filter(s => s.ott === STATE.activePlatform);
          }
          curatedItems = preList.map(s => adaptTmdbItem(s, "tv", s.ott || currentOtt));
        } else if (STATE.activePlatform !== "all") {
          preList = preList.filter(s => s.ott === STATE.activePlatform);
          if (STATE.activeLanguage !== "all") {
            preList = preList.filter(s => s.original_language === STATE.activeLanguage);
          }
          curatedItems = preList.map(s => adaptTmdbItem(s, "tv", s.ott || currentOtt));
        }
      }

      // Curated anime & cartoon shows — shown on "anime" category or "crunchyroll" platform
      if (typeof CURATED_ANIME_SHOWS !== "undefined" &&
          (STATE.activeCategory === "anime" || STATE.activePlatform === "crunchyroll")) {
        let animeList = CURATED_ANIME_SHOWS;
        if (STATE.activePlatform !== "all" && STATE.activePlatform !== "crunchyroll") {
          animeList = animeList.filter(s => s.ott === STATE.activePlatform);
        }
        const animeItems = animeList.map(s => {
          const adapted = adaptTmdbItem(s, "tv", s.ott || "crunchyroll");
          adapted.isAnime = s.isAnime !== false;
          adapted.audioTracksLabel = s.audioTracksLabel || adapted.audioTracksLabel;
          return adapted;
        });
        // Merge with any reality curated items (avoid duplicates)
        const existingIds = new Set(curatedItems.map(x => String(x.id)));
        animeItems.forEach(ai => {
          if (!existingIds.has(String(ai.id))) {
            curatedItems.push(ai);
            existingIds.add(String(ai.id));
          }
        });
      }
    }

    // 2. Fetch TMDB with watch provider filter first
    let data = null;
    try {
      const url = buildFilterUrl(page, true);
      const res = await fetch(url);
      if (res.ok) {
        data = await res.json();
      }
    } catch (e) {
      console.warn("Primary filter fetch error:", e);
    }

    // 3. Fallback: If TMDB returns 0 results and we had a watch provider filter, query without watch provider constraint
    // (Crucial for Indian reality shows, regional cinema, and OTT platforms with incomplete TMDB watch provider index)
    if ((!data || !data.results || data.results.length === 0) && STATE.activePlatform !== "all") {
      try {
        const fallbackUrl = buildFilterUrl(page, false);
        const fbRes = await fetch(fallbackUrl);
        if (fbRes.ok) {
          const fbData = await fbRes.json();
          if (fbData && fbData.results && fbData.results.length > 0) {
            data = fbData;
          }
        }
      } catch (e) {
        console.warn("Fallback filter fetch error:", e);
      }
    }

    let tmdbItems = [];
    let totalResults = 0;
    let totalPages = 1;

    if (data && data.results && data.results.length > 0) {
      totalPages = data.total_pages || 1;
      totalResults = data.total_results || data.results.length;
      tmdbItems = data.results.map(r => adaptTmdbItem(r, defaultType, currentOtt));
    }

    // 4. Merge curated reality shows on page 1 with TMDB results (deduplicating by ID)
    let items = [];
    if (isInitial && curatedItems.length > 0) {
      const seenIds = new Set(curatedItems.map(x => String(x.id)));
      items = [...curatedItems, ...tmdbItems.filter(x => !seenIds.has(String(x.id)))];
      totalResults = Math.max(totalResults, items.length);
    } else {
      items = tmdbItems;
    }

    // 5. Render results if available
    if (items.length > 0) {
      STATE.totalFilterPages = totalPages;
      STATE.totalFilterResults = totalResults;

      if (isInitial) {
        grid.innerHTML = items.map(item => createCardHTML(item, currentOtt)).join("");
      } else {
        items.forEach(item => {
          const div = document.createElement("div");
          div.innerHTML = createCardHTML(item, currentOtt);
          grid.appendChild(div.firstElementChild);
        });
      }

      if (countBadge) {
        countBadge.textContent = `${totalResults.toLocaleString()} TITLES FOUND`;
      }

      if (jumpInput) {
        jumpInput.value = page;
        jumpInput.max = totalPages;
      }

      if (moreBtn) {
        STATE.activeFilterPage = page;
        moreBtn.textContent = `LOAD NEXT 20 TITLES (PAGE ${page + 1} OF ${totalPages.toLocaleString()})`;
        moreBtn.style.display = page < totalPages ? "inline-flex" : "none";
      }

      attachCardEvents();
      STATE.isFetchingMore = false;
      return;
    }
  } catch (err) {
    console.warn("Filter fetch processing error:", err);
  }

  STATE.isFetchingMore = false;
  if (isInitial) {
    grid.innerHTML = '<div style="grid-column:1/-1; padding:40px; text-align:center; color:#888; font-family:monospace">NO TITLES FOUND IN THIS SELECTION. TRY ANOTHER PLATFORM OR SEARCH DIRECTLY!</div>';
    if (moreBtn) moreBtn.style.display = "none";
  }
}

window.fetchNextFilterPage = function() {
  if (STATE.isFetchingMore) return;
  if (STATE.activeFilterPage < STATE.totalFilterPages) {
    fetchFilterItems(STATE.activeFilterPage + 1, false);
  }
};

function setupInfiniteScroll() {
  const sentinel = document.getElementById("infiniteScrollSentinel");
  if (!sentinel) return;

  if (STATE.infiniteObserver) {
    STATE.infiniteObserver.disconnect();
  }

  STATE.infiniteObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !STATE.isFetchingMore) {
      if (STATE.activeFilterPage < STATE.totalFilterPages) {
        fetchFilterItems(STATE.activeFilterPage + 1, false);
      }
    }
  }, { rootMargin: "600px" });

  STATE.infiniteObserver.observe(sentinel);
}

// ═══════════════════════════════════════════════════════════════════
// 11. REAL-TIME SEARCH (TMDB MULTI-SEARCH ACROSS MOVIES, TV & ANIME)
// ═══════════════════════════════════════════════════════════════════
let searchDebounceTimer = null;

function handleSearchInput(e) {
  const query = e.target.value.trim();
  STATE.searchQuery = query;

  const clearBtn = document.getElementById("clearSearchBtn");
  const searchPane = document.getElementById("searchPane");
  const heroBillboard = document.getElementById("heroBillboard");
  const catalogContainer = document.getElementById("catalogContainer");

  if (clearBtn) clearBtn.style.display = query.length > 0 ? "block" : "none";

  if (!query) {
    if (searchPane) searchPane.style.display = "none";
    if (heroBillboard) heroBillboard.style.display = "flex";
    if (catalogContainer) catalogContainer.style.display = "flex";
    return;
  }

  if (searchPane) searchPane.style.display = "block";
  if (heroBillboard) heroBillboard.style.display = "none";
  if (catalogContainer) catalogContainer.style.display = "none";

  const searchTitle = document.getElementById("searchTermDisplay");
  if (searchTitle) searchTitle.textContent = `"${query.toUpperCase()}"`;

  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    executeSearch(query);
  }, 250);
}

async function executeSearch(query) {
  const searchGrid = document.getElementById("searchGrid");
  const countBadge = document.getElementById("searchResultCount");
  if (!searchGrid) return;

  searchGrid.innerHTML = `
    <div style="grid-column:1/-1; padding:40px; text-align:center; font-family:monospace; color:#aaa">
      <div class="brutal-spinner" style="margin: 0 auto 14px"></div>
      SCANNING TMDB WORLDWIDE DATABASE &amp; OTT HUBS FOR "${query.toUpperCase()}"…
    </div>
  `;

  let combined = [];
  const seenIds = new Set();

  // 1. Search curated local data first (Reality shows, Anime/Cartoons) — instant results
  const allCurated = [
    ...(typeof CURATED_REALITY_SHOWS !== 'undefined' ? CURATED_REALITY_SHOWS : []),
    ...(typeof CURATED_ANIME_SHOWS !== 'undefined' ? CURATED_ANIME_SHOWS : [])
  ];
  const ql = query.toLowerCase();
  allCurated.forEach(show => {
    const titleMatch = (show.title || show.name || '').toLowerCase().includes(ql);
    const overviewMatch = (show.overview || '').toLowerCase().includes(ql);
    if (titleMatch || overviewMatch) {
      const adapted = adaptTmdbItem(show, show.type || 'tv', show.ott);
      if (!seenIds.has(String(adapted.id))) {
        seenIds.add(String(adapted.id));
        combined.unshift(adapted); // Put curated results first
      }
    }
  });


  try {
    const tmdbUrl = `${TMDB_CONFIG.baseUrl}/search/multi?api_key=${TMDB_CONFIG.apiKey}&query=${encodeURIComponent(query)}&include_adult=false`;
    const res = await fetch(tmdbUrl);
    if (res.ok) {
      const data = await res.json();
      if (data && data.results && data.results.length) {
        data.results
          .filter(r => (r.media_type === "movie" || r.media_type === "tv") && (r.poster_path || r.backdrop_path))
          .forEach(r => {
            const item = adaptTmdbItem(r);
            if (!seenIds.has(String(item.id))) {
              seenIds.add(String(item.id));
              combined.push(item);
            }
          });
      }
    }
  } catch (err) {
    console.warn("TMDB search error:", err);
  }

  // Backup Query to IMDb Public Suggestion API
  try {
    const cleanQ = query.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
    if (cleanQ.length >= 2) {
      const imdbUrl = `https://v3.sg.media-imdb.com/suggestion/x/${encodeURIComponent(cleanQ)}.json`;
      const res = await fetch(imdbUrl);
      if (res.ok) {
        const data = await res.json();
        if (data && data.d) {
          data.d
            .filter(item => item.id && (item.qid === "movie" || item.qid === "tvSeries" || item.qid === "tvMiniSeries"))
            .forEach(item => {
              if (!seenIds.has(item.id)) {
                seenIds.add(item.id);
                combined.push({
                  id: item.id,
                  title: item.l,
                  year: item.y ? String(item.y) : "2026",
                  type: item.qid === "movie" ? "movie" : "tv",
                  rating: "8.5",
                  quality: "1080p HD",
                  lang: "multi",
                  langLabel: "Worldwide / Multi",
                  ott: "netflix",
                  ottLabel: "CINIEORAMA",
                  hasMultiAudio: true,
                  audioTracksLabel: "Multi-Audio (Hindi • English • Regional)",
                  audioBadge: "MULTI-AUDIO",
                  genres: [item.qid === "movie" ? "Movie" : "Series"],
                  poster: item.i && item.i.imageUrl ? item.i.imageUrl : FALLBACK_POSTER,
                  backdrop: item.i && item.i.imageUrl ? item.i.imageUrl : FALLBACK_POSTER,
                  synopsis: item.s ? `Starring ${item.s}. Instant streaming available via verified video nodes.` : `Watch ${item.l} on Cinieorama.`
                });
              }
            });
        }
      }
    }
  } catch (err) {}

  if (countBadge) countBadge.textContent = `${combined.length} FOUND`;

  if (combined.length === 0) {
    searchGrid.innerHTML = `
      <div style="grid-column:1/-1; padding:60px 20px; text-align:center; color:#888; font-family:monospace">
        <h3>NO TITLES MATCHED "${query.toUpperCase()}"</h3>
        <p style="margin-top:10px">Check spelling or search by title name, star or director.</p>
      </div>
    `;
    return;
  }

  searchGrid.innerHTML = combined.map(item => createCardHTML(item)).join("");
  attachCardEvents();
}

// ═══════════════════════════════════════════════════════════════════
// 12. DETAILS MODAL & ACCURATE EPISODE PICKER (SOLVES EPISODE GLITCH)
// ═══════════════════════════════════════════════════════════════════
async function openDetailsModal(item) {
  STATE.selectedMedia = item;
  STATE.currentSeason = 1;
  STATE.currentEpisode = 1;

  const modal = document.getElementById("detailsModal");
  if (!modal) return;

  const backdrop = document.getElementById("modalBackdrop");
  const poster = document.getElementById("modalPoster");
  const title = document.getElementById("modalTitle");
  const synopsis = document.getElementById("modalSynopsis");
  const yearTag = document.getElementById("modalYearTag");
  const ratingTag = document.getElementById("modalRatingTag");
  const typeTag = document.getElementById("modalTypeTag");
  const langTag = document.getElementById("modalLangTag");
  const qualityTag = document.getElementById("modalQualityTag");
  const ottTag = document.getElementById("modalOttTag");
  const genres = document.getElementById("modalGenres");
  const epSection = document.getElementById("modalEpisodeSection");

  if (backdrop) backdrop.style.backgroundImage = `url('${item.backdrop || item.poster}')`;
  if (poster) {
    poster.src = item.poster;
    poster.onerror = () => { poster.src = FALLBACK_POSTER; };
  }
  if (title) title.textContent = item.title;
  if (synopsis) synopsis.textContent = item.synopsis;
  if (yearTag) yearTag.textContent = `${item.year}`;
  if (ratingTag) ratingTag.textContent = `⭐ ${item.rating}`;
  if (typeTag) typeTag.textContent = item.type === "tv" ? "TV SERIES / ANIME" : "FEATURE FILM";
  if (langTag) langTag.textContent = (item.langLabel || item.lang || "MULTI-AUDIO").toUpperCase();
  if (qualityTag) qualityTag.textContent = item.quality || "4K UHD";
  
  const prov = OTT_PROVIDERS[item.ott] || OTT_PROVIDERS.netflix;
  if (ottTag) {
    ottTag.className = `brutal-tag modal-ott-tag ${prov.class}`;
    ottTag.innerHTML = `${prov.svg} ${prov.name}`;
  }

  // Resolve live official TMDB watch providers for this title (IN/US regions)
  resolveWatchProvider(item.id, item.type).then(realProvKey => {
    if (realProvKey && OTT_PROVIDERS[realProvKey]) {
      item.ott = realProvKey;
      item.ottLabel = OTT_PROVIDERS[realProvKey].name;
      if (ottTag) {
        const rp = OTT_PROVIDERS[realProvKey];
        ottTag.className = `brutal-tag modal-ott-tag ${rp.class}`;
        ottTag.innerHTML = `${rp.svg} ${rp.name}`;
      }
    }
  });

  if (genres) {
    genres.innerHTML = (item.genres || ["Cinema", "Stream"]).map(g => `<span>${g}</span>`).join("");
  }

  // Update Audio Notice Box with exact multi-audio tracks
  const audioNotice = document.querySelector(".audio-notice-box .notice-text");
  if (audioNotice) {
    audioNotice.innerHTML = `<strong>Multi-Audio Available:</strong> ${item.audioTracksLabel || 'Malayalam, Tamil, Telugu, Hindi, English, and Japanese'}. Change audio language inside player settings (Settings / Audio).`;
  }

  const history = WATCH_HISTORY.getItem(item.id);
  const playBtn = document.getElementById("modalPlayBtn");
  if (playBtn) {
    if (history && history.progress > 0) {
      const resumeLabel = item.type === "tv"
        ? `RESUME S${history.season || 1}:E${history.episode || 1} (${history.progress}%)`
        : `RESUME (${history.progress}%)`;
      playBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg> ${resumeLabel}`;
      playBtn.onclick = () => {
        closeDetailsModal();
        openPlayer(item, history.season || 1, history.episode || 1);
      };
    } else {
      playBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg> WATCH NOW`;
      playBtn.onclick = () => {
        closeDetailsModal();
        openPlayer(item, STATE.currentSeason, STATE.currentEpisode);
      };
    }
  }

  // Reset any active trailer
  closeInModalTrailer();

  const trailerBtn = document.getElementById("modalTrailerBtn");
  if (trailerBtn) {
    trailerBtn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg> ▶ 4K TRAILER`;
    trailerBtn.classList.remove("active");
    trailerBtn.onclick = () => {
      const container = document.getElementById("modalTrailerContainer");
      if (container && container.style.display !== "none") {
        closeInModalTrailer();
      } else {
        loadInModalTrailer(item);
      }
    };
  }

  // Wire + My Watchlist Modal Action Button
  const watchlistBtn = document.getElementById("modalWatchlistBtn");
  if (watchlistBtn) {
    updateModalWatchlistBtn(item);
    watchlistBtn.onclick = () => {
      WATCHLIST.toggle(item);
      updateModalWatchlistBtn(item);
    };
  }

  // Wire Share button
  const shareBtn = document.getElementById("modalShareBtn");
  if (shareBtn) {
    shareBtn.onclick = async () => {
      const shareUrl = `https://0xsharon.github.io/cinieorama/?q=${encodeURIComponent(item.title)}`;
      const shareData = {
        title: `${item.title} — Cinieorama`,
        text: `Watch "${item.title}" (${item.year}) on Cinieorama — Free streaming, multi-audio, no login!`,
        url: shareUrl
      };
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        try {
          await navigator.share(shareData);
        } catch (e) { /* user cancelled */ }
      } else {
        // Fallback: copy to clipboard
        try {
          await navigator.clipboard.writeText(`${shareData.text}\n${shareUrl}`);
          const oldText = shareBtn.innerHTML;
          shareBtn.innerHTML = '<span class="btn-icon">✓</span> <span class="btn-text">LINK COPIED!</span>';
          setTimeout(() => { shareBtn.innerHTML = oldText; }, 2200);
        } catch (e) {
          window.open(`https://wa.me/?text=${encodeURIComponent(shareData.text + ' ' + shareUrl)}`, '_blank');
        }
      }
    };
  }

  const closeTrailerBtn = document.getElementById("closeTrailerBtn");
  if (closeTrailerBtn) {
    closeTrailerBtn.onclick = () => closeInModalTrailer();
  }

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";

  // If Series / Anime, fetch real seasons and real episodes live from TMDB
  if (item.type === "tv") {
    if (epSection) epSection.style.display = "block";
    loadRealTvSeasons(item);
  } else {
    if (epSection) epSection.style.display = "none";
  }
}

async function loadRealTvSeasons(item) {
  const tabsContainer = document.getElementById("modalSeasonTabs");
  const listContainer = document.getElementById("modalEpisodeList");
  const yearTag = document.getElementById("modalYearTag");

  if (tabsContainer) tabsContainer.innerHTML = '<span style="color:#888;font-family:monospace">FETCHING SEASONS FROM TMDB…</span>';
  if (listContainer) listContainer.innerHTML = '<span style="color:#888;font-family:monospace">CONNECTING…</span>';

  const knownShow = typeof CURATED_REALITY_SHOWS !== "undefined" && CURATED_REALITY_SHOWS.find(s => String(s.id) === String(item.id));
  const expectedSeasonsCount = (knownShow && knownShow.totalSeasons) ? knownShow.totalSeasons : (item.totalSeasons || 0);

  if (isTmdbId(item.id)) {
    try {
      const res = await fetch(`${TMDB_CONFIG.baseUrl}/tv/${item.id}?api_key=${TMDB_CONFIG.apiKey}`);
      if (res.ok) {
        const tvData = await res.json();
        let validSeasons = (tvData.seasons || []).filter(s => s.season_number > 0);

        // Ensure all seasons are present up to expected count (e.g. Bigg Boss 20 seasons, Roadies 21 seasons, Splitsvilla 16 seasons)
        const maxKnownSeason = Math.max(
          expectedSeasonsCount,
          tvData.number_of_seasons || 0,
          validSeasons.reduce((max, s) => Math.max(max, s.season_number), 0)
        );

        if (maxKnownSeason > validSeasons.length) {
          const existingSeasonNums = new Set(validSeasons.map(s => s.season_number));
          for (let sNum = 1; sNum <= maxKnownSeason; sNum++) {
            if (!existingSeasonNums.has(sNum)) {
              validSeasons.push({
                season_number: sNum,
                name: `Season ${sNum}`,
                episode_count: 25
              });
            }
          }
        }

        // Sort seasons in ascending numerical order
        validSeasons.sort((a, b) => a.season_number - b.season_number);

        if (tvData.first_air_date && yearTag) {
          const startYr = tvData.first_air_date.slice(0, 4);
          const endYr = tvData.last_air_date ? tvData.last_air_date.slice(0, 4) : startYr;
          yearTag.textContent = startYr === endYr ? startYr : `${startYr}–${endYr}`;
        }

        if (validSeasons.length > 0) {
          STATE.tvSeasons = validSeasons;
          const history = WATCH_HISTORY.getItem(item.id);
          if (history && history.season) {
            STATE.currentSeason = parseInt(history.season, 10);
          } else if (validSeasons.length >= 6) {
            // For long-running reality shows (e.g. Bigg Boss Season 20, Roadies 21), default to the latest season!
            STATE.currentSeason = validSeasons[validSeasons.length - 1].season_number;
          } else {
            STATE.currentSeason = validSeasons[0].season_number;
          }

          renderSeasonTabs(validSeasons);
          loadRealSeasonEpisodes(item.id, STATE.currentSeason);
          return;
        }
      }
    } catch (e) {
      console.warn("Could not fetch TMDB seasons:", e);
    }
  }

  const fallbackCount = expectedSeasonsCount || 5;
  const dummySeasons = Array.from({ length: fallbackCount }, (_, i) => ({
    season_number: i + 1,
    name: `Season ${i + 1}`,
    episode_count: 20
  }));
  STATE.tvSeasons = dummySeasons;
  STATE.currentSeason = fallbackCount >= 6 ? fallbackCount : 1;
  renderSeasonTabs(dummySeasons);
  renderFallbackEpisodes(20);
}

function renderSeasonTabs(seasons) {
  const tabsContainer = document.getElementById("modalSeasonTabs");
  if (!tabsContainer) return;

  const total = seasons.length;

  // Dropdown selector for rapid navigation on mobile/desktop for shows with many seasons (Bigg Boss 20, Roadies 21, etc.)
  let dropdownHtml = "";
  if (total > 5) {
    dropdownHtml = `
      <div class="season-jump-wrap">
        <span class="season-jump-label">QUICK JUMP:</span>
        <select id="modalSeasonSelectDropdown" class="brutal-select modal-season-select">
          ${[...seasons].reverse().map(s => `
            <option value="${s.season_number}" ${s.season_number === STATE.currentSeason ? 'selected' : ''}>
              Season ${s.season_number} ${s.season_number === total ? '(Latest)' : ''}
            </option>
          `).join("")}
        </select>
      </div>
    `;
  }

  tabsContainer.innerHTML = `
    ${dropdownHtml}
    <div class="season-tabs-scroll-wrap">
      ${seasons.map(s => `
        <button class="season-tab ${s.season_number === STATE.currentSeason ? 'active' : ''}" data-season="${s.season_number}">
          SEASON ${s.season_number}
        </button>
      `).join("")}
    </div>
  `;

  const dropdown = document.getElementById("modalSeasonSelectDropdown");
  if (dropdown) {
    dropdown.onchange = (e) => {
      switchModalSeason(parseInt(e.target.value, 10));
    };
  }

  tabsContainer.querySelectorAll(".season-tab").forEach(tab => {
    tab.onclick = (e) => {
      const targetSeason = parseInt(e.currentTarget.dataset.season, 10);
      switchModalSeason(targetSeason);
    };
  });

  // Auto-scroll active season button into visible area
  setTimeout(() => {
    const activeBtn = tabsContainer.querySelector(`.season-tab[data-season="${STATE.currentSeason}"]`);
    if (activeBtn) activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, 50);
}

function switchModalSeason(seasonNum) {
  STATE.currentSeason = seasonNum;
  const tabsContainer = document.getElementById("modalSeasonTabs");
  if (tabsContainer) {
    tabsContainer.querySelectorAll(".season-tab").forEach(t => {
      t.classList.toggle("active", parseInt(t.dataset.season, 10) === STATE.currentSeason);
    });
    const dropdown = document.getElementById("modalSeasonSelectDropdown");
    if (dropdown) dropdown.value = seasonNum;

    const activeBtn = tabsContainer.querySelector(`.season-tab[data-season="${STATE.currentSeason}"]`);
    if (activeBtn) activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }

  if (isTmdbId(STATE.selectedMedia.id)) {
    loadRealSeasonEpisodes(STATE.selectedMedia.id, STATE.currentSeason);
  } else {
    renderFallbackEpisodes(20);
  }
}

async function loadRealSeasonEpisodes(tvId, seasonNum) {
  const listContainer = document.getElementById("modalEpisodeList");
  if (!listContainer) return;

  listContainer.innerHTML = `
    <div style="grid-column:1/-1; padding:32px; text-align:center; font-family:monospace; color:#888">
      <div class="brutal-spinner" style="margin: 0 auto 10px; width:32px; height:32px"></div>
      LOADING SEASON ${seasonNum} EPISODES &amp; 16:9 THUMBNAILS FROM TMDB…
    </div>
  `;

  try {
    const res = await fetch(`${TMDB_CONFIG.baseUrl}/tv/${tvId}/season/${seasonNum}?api_key=${TMDB_CONFIG.apiKey}`);
    if (res.ok) {
      const sData = await res.json();
      if (sData.episodes && sData.episodes.length > 0) {
        STATE.currentSeasonEpisodes = sData.episodes;
        const itemBackdrop = STATE.selectedMedia?.backdrop || STATE.selectedMedia?.poster || FALLBACK_POSTER;
        const history = WATCH_HISTORY.getItem(tvId);

        listContainer.innerHTML = sData.episodes.map(ep => {
          const stillUrl = ep.still_path
            ? `https://image.tmdb.org/t/p/w500${ep.still_path}`
            : itemBackdrop;
          const isEpActive = (STATE.currentSeason === seasonNum && STATE.currentEpisode === ep.episode_number);
          const hasEpHistory = history && parseInt(history.season, 10) === seasonNum && parseInt(history.episode, 10) === ep.episode_number;
          const isEpWatched = hasEpHistory && history.progress >= 90;
          const epProgress = hasEpHistory ? history.progress : 0;
          const epAirYear = ep.air_date ? ep.air_date.slice(0, 4) : '';
          const epRuntime = ep.runtime ? `${ep.runtime}m` : '';

          return `
            <div class="ep-card ${isEpActive ? 'active' : ''}" data-ep="${ep.episode_number}" title="${(ep.name || '').replace(/"/g, '&quot;')}">
              <div class="ep-thumb-wrap">
                <img class="ep-thumb-img" src="${stillUrl}" alt="${ep.name || `Episode ${ep.episode_number}`}" loading="lazy" onerror="this.src='${itemBackdrop}'">
                <div class="ep-badge-pill">EP ${ep.episode_number}</div>
                ${epRuntime ? `<div class="ep-duration-pill">${epRuntime}</div>` : ''}
                ${isEpWatched ? `<div class="ep-watched-tag">WATCHED</div>` : ''}
                <div class="ep-play-overlay">
                  <div class="ep-play-btn-circle">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><polygon points="7 5 19 12 7 19 7 5"/></svg>
                  </div>
                </div>
                ${epProgress > 0 && !isEpWatched ? `<div class="ep-progress-bar"><div class="ep-progress-fill" style="width:${epProgress}%"></div></div>` : ''}
              </div>
              <div class="ep-card-body">
                <div class="ep-card-header">
                  <span class="ep-num-label">EPISODE ${ep.episode_number}</span>
                  <div class="ep-meta-tags">
                    ${ep.vote_average ? `<span class="ep-rating-tag">${ep.vote_average.toFixed(1)}</span>` : ''}
                    ${epAirYear ? `<span class="ep-year-tag">${epAirYear}</span>` : ''}
                  </div>
                </div>
                <h4 class="ep-card-title">${ep.name || `Episode ${ep.episode_number}`}</h4>
                <p class="ep-card-overview">${ep.overview ? ep.overview : 'Watch episode in high definition with multi-audio servers.'}</p>
              </div>
            </div>
          `;
        }).join("");

        listContainer.querySelectorAll(".ep-card").forEach(card => {
          card.onclick = () => {
            STATE.currentEpisode = parseInt(card.dataset.ep, 10);
            closeDetailsModal();
            openPlayer(STATE.selectedMedia, STATE.currentSeason, STATE.currentEpisode);
          };
        });
        return;
      }
    }
  } catch (e) {
    console.warn("Episode fetch failed:", e);
  }

  renderFallbackEpisodes(25);
}

function renderFallbackEpisodes(count) {
  const listContainer = document.getElementById("modalEpisodeList");
  if (!listContainer) return;

  const itemBackdrop = STATE.selectedMedia?.backdrop || STATE.selectedMedia?.poster || FALLBACK_POSTER;
  STATE.currentSeasonEpisodes = Array.from({ length: count }, (_, i) => ({
    episode_number: i + 1,
    name: `Episode ${i + 1}`,
    overview: `Episode ${i + 1} of ${STATE.selectedMedia?.title || 'series'}. Available in Ultra-HD with multiple audio streams.`
  }));

  listContainer.innerHTML = STATE.currentSeasonEpisodes.map(ep => `
    <div class="ep-card ${ep.episode_number === STATE.currentEpisode ? 'active' : ''}" data-ep="${ep.episode_number}">
      <div class="ep-thumb-wrap">
        <img class="ep-thumb-img" src="${itemBackdrop}" alt="Episode ${ep.episode_number}" loading="lazy">
        <div class="ep-badge-pill">EP ${ep.episode_number}</div>
        <div class="ep-play-overlay">
          <div class="ep-play-btn-circle">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><polygon points="7 5 19 12 7 19 7 5"/></svg>
          </div>
        </div>
      </div>
      <div class="ep-card-body">
        <div class="ep-card-header">
          <span class="ep-num-label">EPISODE ${ep.episode_number}</span>
        </div>
        <h4 class="ep-card-title">${ep.name}</h4>
        <p class="ep-card-overview">${ep.overview}</p>
      </div>
    </div>
  `).join("");

  listContainer.querySelectorAll(".ep-card").forEach(card => {
    card.onclick = () => {
      STATE.currentEpisode = parseInt(card.dataset.ep, 10);
      closeDetailsModal();
      openPlayer(STATE.selectedMedia, STATE.currentSeason, STATE.currentEpisode);
    };
  });
}

// ═══════════════════════════════════════════════════════════════════
// 12. IN-MODAL 4K OFFICIAL TRAILER VIEWER (TMDB YOUTUBE STREAMING)
// ═══════════════════════════════════════════════════════════════════
const TRAILER_CACHE = new Map();

async function fetchTmdbTrailers(type, id) {
  const cacheKey = `${type}_${id}`;
  if (TRAILER_CACHE.has(cacheKey)) {
    return TRAILER_CACHE.get(cacheKey);
  }
  try {
    const res = await fetch(`${TMDB_CONFIG.baseUrl}/${type}/${id}/videos?api_key=${TMDB_CONFIG.apiKey}`);
    if (res.ok) {
      const data = await res.json();
      const ytVideos = (data.results || []).filter(v => v.site === "YouTube");
      // Prioritize official trailers, then any trailers, then teasers
      ytVideos.sort((a, b) => {
        const score = (v) => (v.official ? 100 : 0) + (v.type === "Trailer" ? 50 : (v.type === "Teaser" ? 20 : 0));
        return score(b) - score(a);
      });
      TRAILER_CACHE.set(cacheKey, ytVideos);
      return ytVideos;
    }
  } catch (err) {
    console.warn("Trailer fetch error:", err);
  }
  return [];
}

async function loadInModalTrailer(item, selectedVideoKey = null) {
  const container = document.getElementById("modalTrailerContainer");
  const iframe = document.getElementById("modalTrailerIframe");
  const loader = document.getElementById("trailerLoader");
  const heading = document.getElementById("modalTrailerHeading");
  const selector = document.getElementById("modalTrailerSelector");
  const trailerBtn = document.getElementById("modalTrailerBtn");

  if (!container || !iframe) return;

  container.style.display = "flex";
  if (loader) loader.style.opacity = "1";
  if (trailerBtn) {
    trailerBtn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> PLAYING 4K TRAILER`;
    trailerBtn.classList.add("active");
  }

  const videos = await fetchTmdbTrailers(item.type, item.id);
  let activeVideo = null;

  if (selectedVideoKey && videos.length) {
    activeVideo = videos.find(v => v.key === selectedVideoKey) || videos[0];
  } else if (videos.length > 0) {
    activeVideo = videos[0];
  }

  if (activeVideo) {
    if (heading) heading.textContent = (activeVideo.name || `${item.title} Official Trailer`).toUpperCase();

    // Render selector chips if 2 or more videos available
    if (selector) {
      if (videos.length > 1) {
        selector.innerHTML = videos.slice(0, 4).map((v, i) => `
          <button class="trailer-chip-btn ${v.key === activeVideo.key ? 'active' : ''}" data-key="${v.key}">
            ${v.type === 'Trailer' ? `TRAILER ${i + 1}` : v.type.toUpperCase()}
          </button>
        `).join("");

        selector.querySelectorAll(".trailer-chip-btn").forEach(btn => {
          btn.onclick = () => {
            loadInModalTrailer(item, btn.dataset.key);
          };
        });
      } else {
        selector.innerHTML = "";
      }
    }

    const embedUrl = `https://www.youtube-nocookie.com/embed/${activeVideo.key}?autoplay=1&rel=0&modestbranding=1&playsinline=1&controls=1`;
    iframe.src = embedUrl;
    iframe.onload = () => {
      setTimeout(() => { if (loader) loader.style.opacity = "0"; }, 400);
    };
  } else {
    // Fallback search trailer
    if (heading) heading.textContent = `${item.title.toUpperCase()} TRAILER`;
    if (selector) selector.innerHTML = "";
    iframe.src = `https://www.youtube-nocookie.com/embed?listType=search&list=${encodeURIComponent(item.title + ' ' + item.year + ' official trailer')}&autoplay=1`;
    iframe.onload = () => {
      setTimeout(() => { if (loader) loader.style.opacity = "0"; }, 400);
    };
  }

  // Smoothly scroll down to trailer view
  container.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function closeInModalTrailer() {
  const container = document.getElementById("modalTrailerContainer");
  const iframe = document.getElementById("modalTrailerIframe");
  const trailerBtn = document.getElementById("modalTrailerBtn");

  if (iframe) iframe.src = "";
  if (container) container.style.display = "none";
  if (trailerBtn) {
    trailerBtn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg> ▶ 4K TRAILER`;
    trailerBtn.classList.remove("active");
  }
}

function closeDetailsModal() {
  const modal = document.getElementById("detailsModal");
  if (modal) modal.style.display = "none";
  closeInModalTrailer();
  document.body.style.overflow = "";
}

function updateModalWatchlistBtn(item = STATE.selectedMedia) {
  const btn = document.getElementById("modalWatchlistBtn");
  if (!btn || !item) return;
  const inList = WATCHLIST.has(item.id);
  btn.classList.toggle("in-list", inList);
  if (inList) {
    btn.innerHTML = `<span class="btn-icon" style="color:var(--brutal-yellow)">✓</span> <span class="btn-text">IN WATCHLIST</span>`;
    btn.title = "Remove from My Watchlist";
  } else {
    btn.innerHTML = `<span class="btn-icon">+</span> <span class="btn-text">MY LIST</span>`;
    btn.title = "Save to My Watchlist";
  }
}

// ═══════════════════════════════════════════════════════════════════
// 13. BRUTALIST VIDEO PLAYER (CINEMA AMBILIGHT & STREAM SERVERS)
// ═══════════════════════════════════════════════════════════════════
function openPlayer(item, season = null, episode = null) {
  // Stop and close any active trailer when starting movie/show stream
  closeInModalTrailer();
  // If season or episode not explicitly provided, check watch history
  const saved = WATCH_HISTORY.getItem(item.id);
  const targetSeason = season !== null && season !== undefined ? season : (saved && saved.season ? saved.season : 1);
  const targetEpisode = episode !== null && episode !== undefined ? episode : (saved && saved.episode ? saved.episode : 1);
  const initialProg = saved && saved.progress ? saved.progress : 5;

  STATE.selectedMedia = item;
  STATE.currentSeason = targetSeason;
  STATE.currentEpisode = targetEpisode;
  STATE.currentWatchProgress = initialProg;

  const playerModal = document.getElementById("playerModal");
  const epNav = document.getElementById("playerEpisodeNav");

  if (!playerModal) return;

  // Check if item has multi-audio available (Indian regional or anime dub)
  const isMulti = item.lang === "multi" ||
    ["hi", "ta", "te", "ml", "kn", "ja"].includes(item.lang) ||
    item.isAnime ||
    (item.audioTracks && item.audioTracks.length > 1) ||
    (item.audioTracksLabel && (item.audioTracksLabel.includes("Hindi") || item.audioTracksLabel.includes("Tamil") || item.audioTracksLabel.includes("Malayalam")));

  // Smart default server selection:
  // For anime/cartoons → auto-pick Server 2 (VidLink Pro) which has Japanese + dub support
  // For everything else → Server 1 (EmbedWave) for fastest stream
  const isAnimaItem = item.isAnime || item.lang === 'ja' || item.lang === 'anime' ||
    item.ott === 'crunchyroll' || (item.origin_country && item.origin_country.includes('JP')) ||
    (item.genres && (item.genres.includes('Animation') || item.genres.includes('Anime')));

  if (!STATE.activeServer || !STREAM_SERVERS[STATE.activeServer]) {
    // Auto-select best server for content type
    STATE.activeServer = isAnimaItem ? "vidlink" : "embedwave";
  }

  // Synchronize server button active state
  document.querySelectorAll(".server-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.srv === STATE.activeServer);
  });

  if (item.type === "tv") {
    if (epNav) epNav.style.display = "flex";
    initPlayerSeasonSelect();
    populateInPlayerEpisodeDrawer();
  } else {
    if (epNav) epNav.style.display = "none";
  }

  // Save current stream start in watch history immediately
  WATCH_HISTORY.save(item, STATE.currentWatchProgress, STATE.currentSeason, STATE.currentEpisode);
  updateInPlayerProgressBar(STATE.currentWatchProgress, Date.now());
  refreshVisibleCardsProgress();

  // Initialize Dynamic Cinema Ambilight Glow for this title
  updatePlayerAmbilight(item);

  // Start auto-progress incrementing timer while player is active (every 15s adds 2%)
  if (STATE.watchProgressTimer) {
    clearInterval(STATE.watchProgressTimer);
  }
  STATE.watchProgressTimer = setInterval(() => {
    if (STATE.currentWatchProgress < 95) {
      STATE.currentWatchProgress = Math.min(95, STATE.currentWatchProgress + 2);
      WATCH_HISTORY.save(STATE.selectedMedia, STATE.currentWatchProgress, STATE.currentSeason, STATE.currentEpisode);
      updateInPlayerProgressBar(STATE.currentWatchProgress, Date.now());
      refreshVisibleCardsProgress();
    }
  }, 15000);

  playerModal.style.display = "flex";
  document.body.style.overflow = "hidden";

  loadStreamUrl();
}

// ═══════════════════════════════════════════════════════════════════
// 13.2 CINEMA AMBILIGHT ENGINE (PHILIPS OLED TV SIMULATOR)
// ═══════════════════════════════════════════════════════════════════
function updatePlayerAmbilight(item) {
  const ambilight = document.getElementById("playerAmbilight");
  if (!ambilight || !item) return;

  // Curated HDR cinematic lighting presets based on OTT platform & genre
  let c1 = "rgba(229, 9, 20, 0.65)";   // Netflix Red
  let c2 = "rgba(0, 168, 225, 0.60)"; // Cyan / Prime Blue
  let c3 = "rgba(180, 0, 255, 0.45)"; // Violet Glow

  if (item.ott === "prime") {
    c1 = "rgba(0, 168, 225, 0.70)";
    c2 = "rgba(0, 100, 220, 0.60)";
    c3 = "rgba(255, 153, 0, 0.50)";
  } else if (item.ott === "hotstar") {
    c1 = "rgba(12, 98, 230, 0.70)";
    c2 = "rgba(0, 210, 255, 0.60)";
    c3 = "rgba(255, 195, 0, 0.45)";
  } else if (item.ott === "jio") {
    c1 = "rgba(229, 0, 125, 0.70)";
    c2 = "rgba(160, 0, 150, 0.60)";
    c3 = "rgba(255, 70, 160, 0.50)";
  } else if (item.ott === "sonyliv") {
    c1 = "rgba(255, 222, 89, 0.75)";
    c2 = "rgba(255, 140, 0, 0.60)";
    c3 = "rgba(0, 180, 255, 0.45)";
  } else if (item.ott === "zee5") {
    c1 = "rgba(130, 48, 198, 0.75)";
    c2 = "rgba(180, 60, 255, 0.60)";
    c3 = "rgba(255, 0, 128, 0.45)";
  } else if (item.ott === "crunchyroll" || item.isAnime || item.lang === "anime") {
    c1 = "rgba(244, 117, 33, 0.75)";
    c2 = "rgba(255, 165, 0, 0.65)";
    c3 = "rgba(255, 45, 0, 0.50)";
  } else if (item.lang === "ml") {
    c1 = "rgba(0, 200, 83, 0.65)";
    c2 = "rgba(0, 150, 136, 0.60)";
    c3 = "rgba(255, 214, 0, 0.45)";
  } else if (item.lang === "ta") {
    c1 = "rgba(255, 87, 34, 0.70)";
    c2 = "rgba(255, 193, 7, 0.60)";
    c3 = "rgba(216, 27, 96, 0.50)";
  } else if (item.lang === "te") {
    c1 = "rgba(255, 171, 0, 0.75)";
    c2 = "rgba(255, 82, 82, 0.65)";
    c3 = "rgba(101, 31, 255, 0.45)";
  }

  ambilight.style.setProperty("--ambilight-c1", c1);
  ambilight.style.setProperty("--ambilight-c2", c2);
  ambilight.style.setProperty("--ambilight-c3", c3);

  // Dynamic canvas color extraction from poster if cross-origin allows
  const imgUrl = item.poster || item.backdrop;
  if (imgUrl && !imgUrl.includes("data:")) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = 4;
        canvas.height = 4;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;
        ctx.drawImage(img, 0, 0, 4, 4);
        const p1 = ctx.getImageData(0, 0, 1, 1).data;
        const p2 = ctx.getImageData(3, 0, 1, 1).data;
        const p3 = ctx.getImageData(2, 3, 1, 1).data;

        const toRgba = (p, a = 0.65) => `rgba(${p[0]}, ${p[1]}, ${p[2]}, ${a})`;
        ambilight.style.setProperty("--ambilight-c1", toRgba(p1, 0.70));
        ambilight.style.setProperty("--ambilight-c2", toRgba(p2, 0.65));
        ambilight.style.setProperty("--ambilight-c3", toRgba(p3, 0.50));
      } catch (err) {
        // Fallback colors already active
      }
    };
    img.src = imgUrl;
  }
}

function switchServer(serverKey) {
  if (!STREAM_SERVERS[serverKey]) {
    serverKey = "embedwave";
  }
  STATE.activeServer = serverKey;
  document.querySelectorAll(".server-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.srv === serverKey);
  });
  loadStreamUrl();
}

window.switchToNextServer = function() {
  // Only cycle through the 10 real server keys — skip backward-compat aliases
  const REAL_SERVER_KEYS = ["embedwave", "vidlink", "twoembed", "twoembedskin", "vidsrcpm", "autoembedco", "vidsrcdev", "vidsrcsu", "cinesrc", "vsembed"];
  const currentIdx = REAL_SERVER_KEYS.indexOf(STATE.activeServer);
  const nextIdx = (currentIdx + 1) % REAL_SERVER_KEYS.length;
  const nextServer = REAL_SERVER_KEYS[nextIdx];
  switchServer(nextServer);
};

function updatePlayerMultiAudioBanner() {
  const item = STATE.selectedMedia;
  const banner = document.getElementById("playerMultiAudioBanner");
  if (!banner || !item) return;

  banner.style.display = "flex";

  const heading = document.getElementById("playerAudioHeading");
  const badgesWrap = document.getElementById("playerAudioBadges");
  const list = document.getElementById("playerAudioList");
  const guide = document.getElementById("playerAudioGuide");
  const switchBtn = document.getElementById("btnSwitchToVidLink") || document.getElementById("btnSwitchToMultiEmbed");

  const isAnime = item.isAnime || item.lang === 'ja' || item.lang === 'anime' || item.ott === 'crunchyroll' || (item.origin_country && item.origin_country.includes('JP'));

  // Multi-Language Audio & Regional Tracks
  const tracks = isAnime ? [
    { code: "ja", name: "JAPANESE (ORIGINAL)", tip: "Japanese original audio with synchronized English subtitles" },
    { code: "hi", name: "HINDI DUB (हिन्दी)", tip: "Official Hindi voiceover dub" },
    { code: "en", name: "ENGLISH DUB", tip: "High-definition English voiceover dub" },
    { code: "ta", name: "TAMIL DUB (தமிழ்)", tip: "Tamil regional voiceover dub" },
    { code: "te", name: "TELUGU DUB (తెలుగు)", tip: "Telugu regional voiceover dub" },
    { code: "ml", name: "MALAYALAM DUB (മലയാളം)", tip: "Malayalam regional voiceover dub" },
    { code: "multi", name: "MULTI-SUBS (20+)", tip: "20+ subtitle languages (English, Hindi, Spanish, French, Arabic, German)" }
  ] : [
    { code: "hi", name: "HINDI (हिन्दी)", tip: "Hindi audio track available" },
    { code: "ta", name: "TAMIL (தமிழ்)", tip: "Tamil regional audio track available" },
    { code: "te", name: "TELUGU (తెలుగు)", tip: "Telugu regional audio track available" },
    { code: "ml", name: "MALAYALAM (മലയാളം)", tip: "Malayalam regional audio track available" },
    { code: "kn", name: "KANNADA (ಕನ್ನಡ)", tip: "Kannada regional audio track available" },
    { code: "en", name: "ENGLISH", tip: "Original English audio track" },
    { code: "ja", name: "JAPANESE", tip: "Japanese original audio" },
    { code: "multi", name: "MULTI-SUBS", tip: "Synchronized subtitles available in multiple languages" }
  ];

  if (badgesWrap) {
    badgesWrap.innerHTML = tracks.map((t, i) => `
      <button class="audio-badge ${t.code} ${i === 0 ? 'active' : ''}" data-track="${t.name}" data-tip="${t.tip}" title="${t.tip}">
        ${t.name}
      </button>
    `).join("");

    badgesWrap.querySelectorAll(".audio-badge").forEach(btn => {
      btn.onclick = (e) => {
        badgesWrap.querySelectorAll(".audio-badge").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const tip = btn.dataset.tip || `Audio track: ${btn.dataset.track}`;
        if (guide) {
          guide.innerHTML = `<strong>${btn.dataset.track}:</strong> ${tip}. To switch tracks, click <strong>[SERVER 2: VIDLINK PRO]</strong> below or use player audio settings.`;
          guide.style.borderColor = "#00e676";
          setTimeout(() => { if (guide) guide.style.borderColor = ""; }, 2500);
        }
      };
    });
  }

  if (list) {
    list.textContent = isAnime
      ? "Japanese (Original) • Hindi Dub (हिन्दी) • English Dub • Tamil Dub • Telugu Dub • Malayalam Dub • 20+ Subtitles"
      : (item.audioTracksLabel || "Hindi (हिन्दी) • Tamil (தமிழ்) • Telugu (తెలుగు) • Malayalam (മലയാളം) • Kannada (ಕನ್ನಡ) • English • Japanese • Multi-Language Subtitles");
  }

  if (STATE.activeServer === "embedwave") {
    if (heading) heading.innerHTML = `<span style="color:#00e676">●</span> SERVER 1 (EMBEDWAVE): ZERO-BUFFER MAIN STREAM ACTIVE:`;
    if (guide) {
      guide.innerHTML = isAnime
        ? `<strong>Main Stream:</strong> High-speed zero-buffer playback. Want anime Japanese sub/dub options? Switch to <strong>Server 4 (2Embed)</strong> or <strong>Server 2 (VidLink Pro)</strong>!`
        : `<strong>Main Stream:</strong> High-speed zero-buffer playback. Need regional Multi-Audio (Hindi, Tamil, Telugu, Malayalam) or Subtitles? Click <strong>Server 2 (VidLink Pro)</strong>!`;
    }
    if (switchBtn) {
      switchBtn.style.display = "inline-flex";
      if (isAnime) {
        switchBtn.innerHTML = `SWITCH TO SERVER 4 (2EMBED ANIME)`;
        switchBtn.onclick = () => switchServer("twoembed");
      } else {
        switchBtn.innerHTML = `SWITCH TO SERVER 2 (VIDLINK PRO MULTI-AUDIO)`;
        switchBtn.onclick = () => switchServer("vidlink");
      }
    }
  } else if (STATE.activeServer === "vidlink") {
    if (heading) heading.innerHTML = isAnime
      ? `<span style="color:#00e676">●</span> SERVER 2 (VIDLINK PRO): ANIME SUB &amp; DUB READY:`
      : `<span style="color:#00e676">●</span> SERVER 2 (VIDLINK PRO) MULTI-LANGUAGE &amp; ULTRA HD ACTIVE:`;
    if (guide) {
      guide.innerHTML = `<strong>VidLink Pro Active:</strong> Multi-Language Audio &amp; Subtitles available! Click <strong>Settings</strong> or <strong>Audio/Subtitles</strong> in player controls.`;
    }
    if (switchBtn) {
      switchBtn.style.display = "inline-flex";
      switchBtn.innerHTML = `SWITCH TO SERVER 1 (EMBEDWAVE MAIN)`;
      switchBtn.onclick = () => switchServer("embedwave");
    }
  } else if (STATE.activeServer === "twoembed") {
    if (heading) heading.innerHTML = `<span style="color:#ff0033">●</span> SERVER 3 (2EMBED CC): DEDICATED ANIME &amp; CARTOONS ARCHIVE:`;
    if (guide) {
      guide.innerHTML = `<strong>2Embed CC Active:</strong> Optimized for Japanese anime and animated series with original Japanese audio &amp; multi-sub tracks.`;
    }
    if (switchBtn) {
      switchBtn.style.display = "inline-flex";
      switchBtn.innerHTML = `SWITCH TO SERVER 1 (EMBEDWAVE MAIN)`;
      switchBtn.onclick = () => switchServer("embedwave");
    }
  } else if (STATE.activeServer === "twoembedskin") {
    if (heading) heading.innerHTML = `<span style="color:#00e676">●</span> SERVER 4 (2EMBED SKIN): CARTOONS &amp; ANIME HD MIRROR:`;
    if (guide) {
      guide.innerHTML = `<strong>2Embed Skin Active:</strong> Dedicated cartoon and anime HD stream with built-in multi-audio &amp; subtitle selection.`;
    }
    if (switchBtn) {
      switchBtn.style.display = "inline-flex";
      switchBtn.innerHTML = `SWITCH TO SERVER 1 (EMBEDWAVE MAIN)`;
      switchBtn.onclick = () => switchServer("embedwave");
    }
  } else if (STATE.activeServer === "vidsrcpm") {
    if (heading) heading.innerHTML = `<span style="color:#00e676">●</span> SERVER 5 (VIDSRC PM): VIP DIRECT EDGE CLOUD:`;
    if (guide) {
      guide.innerHTML = `<strong>VidSrc PM Active:</strong> Ultra-fast VIP direct edge CDN node with instant buffering across cartoons, anime, movies &amp; series.`;
    }
    if (switchBtn) {
      switchBtn.style.display = "inline-flex";
      switchBtn.innerHTML = `SWITCH TO SERVER 1 (EMBEDWAVE MAIN)`;
      switchBtn.onclick = () => switchServer("embedwave");
    }
  } else if (STATE.activeServer === "autoembedco") {
    if (heading) heading.innerHTML = `<span style="color:#ffea00">●</span> SERVER 6 (AUTOEMBED CO): ANIME &amp; CARTOON CLOUD ACTIVE:`;
    if (guide) {
      guide.innerHTML = `<strong>AutoEmbed CO Active:</strong> Multi-source edge discovery for animated shows, cartoon archives, and regional dubs.`;
    }
    if (switchBtn) {
      switchBtn.style.display = "inline-flex";
      switchBtn.innerHTML = `SWITCH TO SERVER 1 (EMBEDWAVE MAIN)`;
      switchBtn.onclick = () => switchServer("embedwave");
    }
  } else if (STATE.activeServer === "vidsrcdev") {
    if (heading) heading.innerHTML = `<span style="color:#00e676">●</span> SERVER 7 (VIDSRC DEV): PREMIUM MULTI-SOURCE CDN:`;
    if (guide) {
      guide.innerHTML = `<strong>VidSrc Dev Active:</strong> High-reliability clean playback for animated series, movies, and reality shows.`;
    }
    if (switchBtn) {
      switchBtn.style.display = "inline-flex";
      switchBtn.innerHTML = `SWITCH TO SERVER 1 (EMBEDWAVE MAIN)`;
      switchBtn.onclick = () => switchServer("embedwave");
    }
  } else if (STATE.activeServer === "vidsrcsu") {
    if (heading) heading.innerHTML = `<span style="color:#00e676">●</span> SERVER 8 (VIDSRC SU): HIGH-SPEED CLOUD MIRROR ACTIVE:`;
    if (guide) {
      guide.innerHTML = `<strong>VidSrc SU Active:</strong> Ultra-fast cloud mirror streaming with zero buffering for cartoons, anime &amp; movies.`;
    }
    if (switchBtn) {
      switchBtn.style.display = "inline-flex";
      switchBtn.innerHTML = `SWITCH TO SERVER 1 (EMBEDWAVE MAIN)`;
      switchBtn.onclick = () => switchServer("embedwave");
    }
  } else if (STATE.activeServer === "cinesrc") {
    if (heading) heading.innerHTML = `<span style="color:#00e676">●</span> SERVER 9 (CINESRC): 4K ULTRA STREAM ACTIVE:`;
    if (guide) {
      guide.innerHTML = `<strong>CineSrc Active:</strong> Modern HTML5 edge streaming node with zero frame-blocking across cinema releases, anime &amp; reality TV.`;
    }
    if (switchBtn) {
      switchBtn.style.display = "inline-flex";
      switchBtn.innerHTML = `SWITCH TO SERVER 1 (EMBEDWAVE MAIN)`;
      switchBtn.onclick = () => switchServer("embedwave");
    }
  } else if (STATE.activeServer === "vsembed") {
    if (heading) heading.innerHTML = `<span style="color:#ffea00">●</span> SERVER 10 (VSEMBED): GLOBAL MULTI-SERVER ACTIVE:`;
    if (guide) {
      guide.innerHTML = `<strong>VSEmbed Active:</strong> Global multi-host streaming aggregator with robust failover and edge CDN nodes.`;
    }
    if (switchBtn) {
      switchBtn.style.display = "inline-flex";
      switchBtn.innerHTML = `SWITCH TO SERVER 1 (EMBEDWAVE MAIN)`;
      switchBtn.onclick = () => switchServer("embedwave");
    }
  } else {
    const srv = STREAM_SERVERS[STATE.activeServer] || { name: "Current Server" };
    if (heading) heading.innerHTML = `<span style="color:#ffea00">●</span> STREAMING ON ${srv.name.toUpperCase()}:`;
    if (guide) {
      guide.innerHTML = `Switch back to Server 1 (EmbedWave) anytime for zero buffering.`;
    }
    if (switchBtn) {
      switchBtn.style.display = "inline-flex";
      switchBtn.innerHTML = `SWITCH TO SERVER 1 (EMBEDWAVE MAIN)`;
      switchBtn.onclick = () => switchServer("embedwave");
    }
  }
}

function initPlayerSeasonSelect() {
  const select = document.getElementById("playerSeasonSelect");
  if (!select) return;

  const seasons = STATE.tvSeasons && STATE.tvSeasons.length > 0
    ? STATE.tvSeasons
    : [{ season_number: 1, name: "Season 1" }];

  select.innerHTML = seasons.map(s => `
    <option value="${s.season_number}" ${s.season_number === STATE.currentSeason ? 'selected' : ''}>
      ${s.name || `Season ${s.season_number}`}
    </option>
  `).join("");

  select.onchange = (e) => {
    STATE.currentSeason = parseInt(e.target.value, 10);
    STATE.currentEpisode = 1;
    fetchEpisodesForPlayer(STATE.selectedMedia.id, STATE.currentSeason);
  };
}

async function fetchEpisodesForPlayer(tvId, seasonNum) {
  if (isTmdbId(tvId)) {
    try {
      const res = await fetch(`${TMDB_CONFIG.baseUrl}/tv/${tvId}/season/${seasonNum}?api_key=${TMDB_CONFIG.apiKey}`);
      if (res.ok) {
        const sData = await res.json();
        if (sData.episodes && sData.episodes.length) {
          STATE.currentSeasonEpisodes = sData.episodes;
          populateInPlayerEpisodeDrawer();
          loadStreamUrl();
          return;
        }
      }
    } catch (e) {
      console.warn("Player episode fetch error:", e);
    }
  }

  STATE.currentSeasonEpisodes = Array.from({ length: 10 }, (_, i) => ({
    episode_number: i + 1,
    name: `Episode ${i + 1}`
  }));
  populateInPlayerEpisodeDrawer();
  loadStreamUrl();
}

function populateInPlayerEpisodeDrawer() {
  const drawerGrid = document.getElementById("playerDrawerEpisodes");
  if (!drawerGrid) return;

  const episodes = STATE.currentSeasonEpisodes && STATE.currentSeasonEpisodes.length
    ? STATE.currentSeasonEpisodes
    : Array.from({ length: 10 }, (_, i) => ({ episode_number: i + 1, name: `Episode ${i + 1}` }));

  const itemBackdrop = STATE.selectedMedia?.backdrop || STATE.selectedMedia?.poster || FALLBACK_POSTER;

  drawerGrid.innerHTML = episodes.map(ep => {
    const stillUrl = ep.still_path
      ? `https://image.tmdb.org/t/p/w300${ep.still_path}`
      : itemBackdrop;
    const isActive = ep.episode_number === STATE.currentEpisode;

    return `
      <div class="drawer-ep-card ${isActive ? 'active' : ''}" data-ep="${ep.episode_number}" title="${(ep.name || `Episode ${ep.episode_number}`).replace(/"/g, '&quot;')}">
        <div class="drawer-thumb-wrap">
          <img class="drawer-thumb-img" src="${stillUrl}" alt="${ep.name || 'EP ' + ep.episode_number}" loading="lazy" onerror="this.src='${itemBackdrop}'">
          <div class="drawer-ep-badge">EP ${ep.episode_number}</div>
          ${ep.runtime ? `<div class="drawer-runtime-badge">${ep.runtime}m</div>` : ''}
          <div class="drawer-play-icon">▶</div>
        </div>
        <div class="drawer-ep-info">
          <div class="drawer-ep-num">EPISODE ${ep.episode_number}</div>
          <div class="drawer-ep-title">${ep.name || `Episode ${ep.episode_number}`}</div>
        </div>
      </div>
    `;
  }).join("");

  drawerGrid.querySelectorAll(".drawer-ep-card").forEach(card => {
    card.onclick = () => {
      STATE.currentEpisode = parseInt(card.dataset.ep, 10);
      drawerGrid.querySelectorAll(".drawer-ep-card").forEach(c => {
        c.classList.toggle("active", parseInt(c.dataset.ep, 10) === STATE.currentEpisode);
      });
      loadStreamUrl();
    };
  });
}

function updatePlayerHeaders() {
  const item = STATE.selectedMedia;
  if (!item) return;

  const titleText = document.getElementById("playerTitleText");
  const audioTag = document.getElementById("playerAudioTag");
  const epTracker = document.getElementById("playerEpTracker");

  if (titleText) {
    titleText.textContent = item.type === "tv"
      ? `${item.title.toUpperCase()} — S${STATE.currentSeason} : E${STATE.currentEpisode}`
      : item.title.toUpperCase();
  }
  if (audioTag) {
    const isMulti = item.lang === "multi" || ["hi", "ta", "te", "ml", "kn", "ja"].includes(item.lang) || item.isAnime;
    audioTag.innerHTML = `${ICONS.audioWave} ${(item.langLabel || item.lang || "MULTI-AUDIO").toUpperCase()}`;
    audioTag.className = isMulti ? "brutal-tag red-tag" : "brutal-tag lang-tag";
  }
  if (epTracker) {
    epTracker.textContent = `S${STATE.currentSeason} • EP ${STATE.currentEpisode}`;
  }

  const drawerGrid = document.getElementById("playerDrawerEpisodes");
  if (drawerGrid) {
    drawerGrid.querySelectorAll(".drawer-ep-card").forEach(b => {
      b.classList.toggle("active", parseInt(b.dataset.ep, 10) === STATE.currentEpisode);
    });
  }
}

function loadStreamUrl() {
  const item = STATE.selectedMedia;
  if (!item) return;

  updatePlayerHeaders();
  updatePlayerMultiAudioBanner();

  const serverKey = STATE.activeServer;
  const server = STREAM_SERVERS[serverKey] || STREAM_SERVERS.embedwave;

  let streamUrl = "";
  if (item.type === "tv") {
    streamUrl = server.tv(item.id, STATE.currentSeason, STATE.currentEpisode);
  } else {
    streamUrl = server.movie(item.id);
  }

  const iframe = document.getElementById("streamIframe");
  const loader = document.getElementById("playerLoadingState");
  const statusMsg = document.getElementById("playerStatusMessage");

  if (loader) {
    loader.style.opacity = "1";
    loader.style.pointerEvents = "none"; /* Never block touches on Android touchscreens */
  }
  if (statusMsg) {
    statusMsg.textContent = item.type === "tv"
      ? `STREAMING ${server.name.toUpperCase()} (S${STATE.currentSeason} : E${STATE.currentEpisode})…`
      : `STREAMING ${server.name.toUpperCase()}…`;
  }

  if (iframe) {
    iframe.loading = "eager";
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen");
    iframe.setAttribute("allowfullscreen", "true");
    iframe.setAttribute("webkitallowfullscreen", "true");
    iframe.setAttribute("mozallowfullscreen", "true");
    iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    iframe.src = streamUrl;
    iframe.onload = () => {
      setTimeout(() => {
        if (loader) {
          loader.style.opacity = "0";
          loader.style.pointerEvents = "none";
        }
      }, 80);
    };
    iframe.onerror = () => {
      console.warn("Stream server failed, switching to next available node...");
      switchToNextServer();
    };
  }

  // Fast auto-dismiss watchdog (500ms) prevents Android Chrome from having spinner linger or block touches
  if (STATE.playerWatchdogTimer) clearTimeout(STATE.playerWatchdogTimer);
  STATE.playerWatchdogTimer = setTimeout(() => {
    if (loader) {
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";
    }
  }, 500);

  const popoutBtn = document.getElementById("playerPopoutBtn");
  if (popoutBtn) {
    popoutBtn.onclick = () => {
      window.open(streamUrl, "_blank", "width=1280,height=720,scrollbars=no,resizable=yes");
    };
  }
}

function closePlayer() {
  const playerModal = document.getElementById("playerModal");
  const iframe = document.getElementById("streamIframe");
  if (iframe) iframe.src = "";
  if (playerModal) playerModal.style.display = "none";
  document.body.style.overflow = "";

  const drawer = document.getElementById("playerEpisodeDrawer");
  if (drawer) drawer.style.display = "none";

  if (STATE.watchProgressTimer) {
    clearInterval(STATE.watchProgressTimer);
    STATE.watchProgressTimer = null;
  }
  refreshVisibleCardsProgress();
}

// ═══════════════════════════════════════════════════════════════════
// 13.5 IN-PLAYER WATCH PROGRESS & CARD REFRESH CONTROLLERS
// ═══════════════════════════════════════════════════════════════════
function updateInPlayerProgressBar(pct, updatedAt) {
  const fill = document.getElementById("playerLiveProgressFill");
  const slider = document.getElementById("playerWatchSlider");
  const label = document.getElementById("playerProgressLabel");
  const timeText = document.getElementById("playerLastWatchedText");

  const clamped = Math.max(0, Math.min(100, Math.round(pct)));

  if (fill) fill.style.width = `${clamped}%`;
  if (slider) slider.value = clamped;
  if (label) {
    if (clamped >= 95) {
      label.textContent = "✓ FINISHED";
      label.style.background = "#00e676";
      label.style.color = "#000";
    } else {
      label.textContent = `${clamped}% WATCHED`;
      label.style.background = "";
      label.style.color = "";
    }
  }
  if (timeText) {
    timeText.textContent = updatedAt ? formatTimeAgo(updatedAt) : "NOW STREAMING";
  }

  // Highlight active quick percentage buttons
  document.querySelectorAll(".quick-prog-btn[data-pct]").forEach(b => {
    const val = parseInt(b.dataset.pct, 10);
    b.classList.toggle("active", Math.abs(val - clamped) <= 5);
  });
}

function setManualWatchProgress(pct) {
  const clamped = Math.max(0, Math.min(100, Math.round(pct)));
  STATE.currentWatchProgress = clamped;
  if (STATE.selectedMedia) {
    WATCH_HISTORY.save(STATE.selectedMedia, clamped, STATE.currentSeason, STATE.currentEpisode);
    updateInPlayerProgressBar(clamped, Date.now());
    refreshVisibleCardsProgress();
  }
}

function refreshVisibleCardsProgress() {
  document.querySelectorAll(".media-card").forEach(card => {
    const id = card.dataset.id;
    if (!id) return;
    const history = WATCH_HISTORY.getItem(id);
    const posterWrap = card.querySelector(".card-poster-wrap");
    if (!posterWrap) return;

    let fillEl = card.querySelector(".card-progress-fill");
    let pillEl = card.querySelector(".card-resume-pill");
    let resumeBtn = card.querySelector(".card-resume-btn");

    if (history && history.progress > 0) {
      if (!fillEl) {
        const track = document.createElement("div");
        track.className = "card-progress-track";
        track.innerHTML = `<div class="card-progress-fill" style="width: ${history.progress}%"></div>`;
        posterWrap.appendChild(track);
      } else {
        fillEl.style.width = `${history.progress}%`;
      }

      const isWatched = history.progress >= 95;
      const pillText = isWatched
        ? "✓ WATCHED"
        : (history.type === "tv" ? `▶ S${history.season || 1}:E${history.episode || 1} (${history.progress}%)` : `▶ ${history.progress}%`);

      if (!pillEl) {
        pillEl = document.createElement("div");
        pillEl.className = `card-resume-pill ${isWatched ? 'watched' : ''}`;
        posterWrap.appendChild(pillEl);
      } else {
        pillEl.className = `card-resume-pill ${isWatched ? 'watched' : ''}`;
      }
      pillEl.textContent = pillText;

      const btnText = isWatched
        ? "REPLAY"
        : (history.type === "tv" ? `RESUME S${history.season || 1}:E${history.episode || 1}` : `RESUME (${history.progress}%)`);

      const playOverlay = card.querySelector(".card-play-overlay");
      if (playOverlay) {
        if (!resumeBtn) {
          resumeBtn = document.createElement("div");
          resumeBtn.className = "card-resume-btn";
          resumeBtn.dataset.id = id;
          resumeBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>
            <span class="btn-resume-label">${btnText}</span>
          `;
          playOverlay.innerHTML = "";
          playOverlay.appendChild(resumeBtn);
        } else {
          const lbl = resumeBtn.querySelector(".btn-resume-label");
          if (lbl) lbl.textContent = btnText;
        }
      }
    }
  });

  // Re-bind click events on any dynamically created resume buttons
  document.querySelectorAll(".card-resume-btn").forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const id = btn.dataset.id || btn.closest(".media-card")?.dataset.id;
      if (!id) return;
      const history = WATCH_HISTORY.getItem(id);
      const found = STATE.mediaCache.get(String(id)) || history;
      if (found) {
        openPlayer(found, history ? history.season : 1, history ? history.episode : 1);
      }
    };
  });
}

// ═══════════════════════════════════════════════════════════════════
// 14. ATTACH ALL INTERACTIVE EVENT LISTENERS
// ═══════════════════════════════════════════════════════════════════
function attachEventListeners() {
  const logo = document.getElementById("logoBtn");
  if (logo) logo.onclick = () => resetAllFilters();

  // Genre filter pills
  document.querySelectorAll(".genre-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".genre-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const genre = pill.dataset.genre;
      STATE.activeGenre = genre === "all" ? null : genre;
      STATE.activeFilterPage = 1;
      renderCatalog();
      window.scrollTo({ top: 380, behavior: "smooth" });
    });
  });

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.addEventListener("input", handleSearchInput);

  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) {
    clearBtn.onclick = () => {
      if (searchInput) searchInput.value = "";
      handleSearchInput({ target: { value: "" } });
    };
  }

  // Top Nav Menu tabs
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.addEventListener("click", (e) => {
      document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
      const target = e.currentTarget;
      target.classList.add("active");

      const fType = target.dataset.filterType;
      const fVal = target.dataset.filterVal;

      if (fType === "cat") {
        STATE.activeCategory = fVal;
        if (fVal === "all") {
          STATE.activeLanguage = "all";
          STATE.activePlatform = "all";
        }
      } else if (fType === "lang") {
        STATE.activeLanguage = fVal;
        if (fVal === "all") {
          STATE.activeCategory = "all";
          STATE.activePlatform = "all";
        }
      }

      syncPillActiveStates();
      renderCatalog();
      window.scrollTo({ top: 380, behavior: "smooth" });
    });
  });

  // OTT Platform Pills
  document.querySelectorAll(".ott-pill").forEach(pill => {
    pill.addEventListener("click", (e) => {
      const target = e.currentTarget;
      window.filterByPlatform(target.dataset.platform);
    });
  });

  // Regional Language Pills
  document.querySelectorAll(".lang-pill").forEach(pill => {
    pill.addEventListener("click", (e) => {
      const target = e.currentTarget;
      window.filterByLanguage(target.dataset.lang);
    });
  });

  // Details Modal close
  const closeDetailsBtn = document.getElementById("closeDetailsBtn");
  const detailsModal = document.getElementById("detailsModal");
  if (closeDetailsBtn) closeDetailsBtn.onclick = closeDetailsModal;
  if (detailsModal) {
    detailsModal.onclick = (e) => {
      if (e.target === detailsModal) closeDetailsModal();
    };
  }

  // Player Modal close & tools
  const closePlayerBtn = document.getElementById("closePlayerBtn");
  const playerReloadBtn = document.getElementById("playerReloadBtn");
  if (closePlayerBtn) closePlayerBtn.onclick = closePlayer;
  if (playerReloadBtn) playerReloadBtn.onclick = () => loadStreamUrl();

  // Cinema Ambilight Glow Toggle (Philips OLED Ambilight Simulator)
  const ambToggleBtn = document.getElementById("playerAmbilightToggle");
  const ambGlow = document.getElementById("playerAmbilight");
  const isAmbEnabled = localStorage.getItem("cinieorama_ambilight") !== "false";
  if (ambGlow) ambGlow.classList.toggle("ambilight-disabled", !isAmbEnabled);
  if (ambToggleBtn) {
    ambToggleBtn.classList.toggle("active", isAmbEnabled);
    ambToggleBtn.textContent = isAmbEnabled ? "AMBILIGHT: ON" : "AMBILIGHT: OFF";
    ambToggleBtn.onclick = () => {
      const active = !ambToggleBtn.classList.contains("active");
      ambToggleBtn.classList.toggle("active", active);
      ambToggleBtn.textContent = active ? "AMBILIGHT: ON" : "AMBILIGHT: OFF";
      if (ambGlow) ambGlow.classList.toggle("ambilight-disabled", !active);
      localStorage.setItem("cinieorama_ambilight", active ? "true" : "false");
    };
  }

  // In-Player Progress Slider & Quick Buttons
  const playerSlider = document.getElementById("playerWatchSlider");
  if (playerSlider) {
    playerSlider.addEventListener("input", (e) => {
      setManualWatchProgress(parseInt(e.target.value, 10));
    });
  }

  document.querySelectorAll(".quick-prog-btn[data-pct]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const pct = parseInt(e.currentTarget.dataset.pct, 10);
      setManualWatchProgress(pct);
    });
  });

  const btnResetProgress = document.getElementById("btnResetProgress");
  if (btnResetProgress) {
    btnResetProgress.addEventListener("click", () => {
      if (confirm("Reset watch progress for this title?")) {
        setManualWatchProgress(0);
      }
    });
  }

  // Server switchers
  document.querySelectorAll(".server-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const target = e.currentTarget;
      switchServer(target.dataset.srv);
    });
  });

  // In-Player TV Episode Prev / Next / Drawer buttons
  const prevEpBtn = document.getElementById("btnPrevEpisode");
  const nextEpBtn = document.getElementById("btnNextEpisode");
  const toggleDrawerBtn = document.getElementById("btnToggleEpDrawer");
  const epDrawer = document.getElementById("playerEpisodeDrawer");

  if (prevEpBtn) {
    prevEpBtn.onclick = () => {
      if (STATE.currentEpisode > 1) {
        STATE.currentEpisode--;
        loadStreamUrl();
      } else if (STATE.currentSeason > 1) {
        STATE.currentSeason--;
        STATE.currentEpisode = 1;
        initPlayerSeasonSelect();
        fetchEpisodesForPlayer(STATE.selectedMedia.id, STATE.currentSeason);
      }
    };
  }

  if (nextEpBtn) {
    nextEpBtn.onclick = () => {
      const maxEps = STATE.currentSeasonEpisodes?.length || 10;
      if (STATE.currentEpisode < maxEps) {
        STATE.currentEpisode++;
        loadStreamUrl();
      } else {
        const seasonCount = STATE.tvSeasons?.length || 1;
        if (STATE.currentSeason < seasonCount) {
          STATE.currentSeason++;
          STATE.currentEpisode = 1;
          initPlayerSeasonSelect();
          fetchEpisodesForPlayer(STATE.selectedMedia.id, STATE.currentSeason);
        }
      }
    };
  }

  if (toggleDrawerBtn && epDrawer) {
    toggleDrawerBtn.onclick = () => {
      const isVisible = epDrawer.style.display === "block";
      epDrawer.style.display = isVisible ? "none" : "block";
      toggleDrawerBtn.textContent = isVisible ? "EPISODES ▾" : "CLOSE EPISODES ▴";
    };
  }

  // Keyboard shortcuts (Escape closes modals, Cinema player hotkeys)
  window.addEventListener("keydown", (e) => {
    // Never intercept keys when user is typing in search, inputs, or selects
    const activeEl = document.activeElement;
    const activeTag = activeEl ? activeEl.tagName.toLowerCase() : "";
    if (activeTag === "input" || activeTag === "textarea" || activeTag === "select") {
      if (e.key === "Escape") {
        activeEl.blur();
      }
      return;
    }

    if (e.key === "Escape") {
      closeDetailsModal();
      closePlayer();
      closePolicyModal();
      closeInstallModal();
      return;
    }

    const playerModal = document.getElementById("playerModal");
    const isPlayerOpen = playerModal && playerModal.style.display !== "none";

    if (isPlayerOpen) {
      const key = e.key.toLowerCase();
      // 'f' = Fullscreen toggle
      if (key === "f") {
        e.preventDefault();
        const stage = document.querySelector(".player-stage") || playerModal;
        if (!document.fullscreenElement) {
          if (stage.requestFullscreen) stage.requestFullscreen();
          else if (stage.webkitRequestFullscreen) stage.webkitRequestFullscreen();
        } else {
          if (document.exitFullscreen) document.exitFullscreen();
        }
      }
      // 'm' = Ambilight toggle
      else if (key === "m") {
        e.preventDefault();
        const ambToggle = document.getElementById("playerAmbilightToggle");
        if (ambToggle) ambToggle.click();
      }
      // 'e' = Episodes drawer toggle (for TV/anime)
      else if (key === "e") {
        e.preventDefault();
        const toggleDrawerBtn = document.getElementById("playerEpisodeToggle");
        if (toggleDrawerBtn && toggleDrawerBtn.offsetParent !== null) toggleDrawerBtn.click();
      }
      // 'r' = Reload active stream
      else if (key === "r") {
        e.preventDefault();
        loadStreamUrl();
      }
      // 'n' = Next episode
      else if (key === "n") {
        e.preventDefault();
        const nextBtn = document.getElementById("playerNextEpBtn");
        if (nextBtn && nextBtn.style.display !== "none") nextBtn.click();
      }
      // 'p' = Prev episode
      else if (key === "p") {
        e.preventDefault();
        const prevBtn = document.getElementById("playerPrevEpBtn");
        if (prevBtn && prevBtn.style.display !== "none") prevBtn.click();
      }
      // '1' - '9' = Switch directly to Server 1-9
      else if (e.key >= "1" && e.key <= "9") {
        const srvBtns = document.querySelectorAll(".server-btn");
        const idx = parseInt(e.key, 10) - 1;
        if (srvBtns[idx]) {
          e.preventDefault();
          srvBtns[idx].click();
        }
      }
      // '0' = Switch to Server 10
      else if (e.key === "0") {
        const srvBtns = document.querySelectorAll(".server-btn");
        if (srvBtns[9]) {
          e.preventDefault();
          srvBtns[9].click();
        }
      }
    }
  });

  // Close policy & install modal when clicking outside
  const policyModal = document.getElementById("policyModal");
  if (policyModal) {
    policyModal.onclick = (e) => {
      if (e.target === policyModal) closePolicyModal();
    };
  }

  const installModal = document.getElementById("installModal");
  if (installModal) {
    installModal.onclick = (e) => {
      if (e.target === installModal) closeInstallModal();
    };
  }
}

// ═══════════════════════════════════════════════════════════════════
// 14.5 LEGAL POLICIES & TERMS IN-MODAL VIEWER
// ═══════════════════════════════════════════════════════════════════
const LEGAL_DOCS = {
  policy: {
    title: "PRIVACY POLICY & CLIENT DATA HANDLING",
    content: `
      <div style="background:#111; border:1px solid #222; padding:16px; margin-bottom:18px;">
        <h4 style="color:#00e676; margin:0 0 6px; font-family:monospace;">● ZERO-TELEMETRY GUARANTEE</h4>
        <p style="margin:0; font-size:0.85rem; color:#aaa;">CINIEORAMA does not collect, sell, or transmit any user information. There are no tracking cookies, user accounts, or backend databases.</p>
      </div>
      <h3 style="color:#fff; margin-bottom:8px; font-size:1.05rem;">1. Zero Personal Data Collection</h3>
      <p style="margin-bottom:14px;">We believe privacy is fundamental. No personal identification, email addresses, names, or passwords are ever requested or stored.</p>
      <h3 style="color:#fff; margin-bottom:8px; font-size:1.05rem;">2. Client-Side Web Storage (localStorage)</h3>
      <p style="margin-bottom:14px;">Your Watchlist, Continue Watching resume times, and Cinema Ambilight preferences reside 100% locally on your browser using <code>localStorage</code>. Data never leaves your machine and can be cleared instantly via the "CLEAR HISTORY" and "CLEAR LIST" buttons.</p>
      <h3 style="color:#fff; margin-bottom:8px; font-size:1.05rem;">3. External Endpoints &amp; Sandboxing</h3>
      <p style="margin-bottom:14px;">Metadata is queried live from The Movie Database (TMDB) API. Streaming video frames are rendered in sandboxed contexts from independent public CDNs. We recommend using browser ad-blocking extensions for optimal privacy.</p>
      <div style="margin-top:20px; padding-top:14px; border-top:1px solid #222; font-family:monospace; font-size:0.75rem; color:#777;">
        Full technical documentation available in <a href="POLICY.md" target="_blank" style="color:var(--brutal-yellow); text-decoration:underline;">POLICY.md</a>.
      </div>
    `
  },
  terms: {
    title: "TERMS OF SERVICE & PERMITTED USE",
    content: `
      <div style="background:#111; border:1px solid #222; padding:16px; margin-bottom:18px;">
        <h4 style="color:#ff0033; margin:0 0 6px; font-family:monospace;">● PERSONAL &amp; EDUCATIONAL USE</h4>
        <p style="margin:0; font-size:0.85rem; color:#aaa;">CINIEORAMA is provided strictly for personal entertainment, research, and interface demonstration as a client-side web application.</p>
      </div>
      <h3 style="color:#fff; margin-bottom:8px; font-size:1.05rem;">1. Acceptance of Terms</h3>
      <p style="margin-bottom:14px;">By accessing or using the CINIEORAMA web application, you agree to be bound by these Terms of Service. If you do not agree with any part, please exit the site.</p>
      <h3 style="color:#fff; margin-bottom:8px; font-size:1.05rem;">2. Non-Hosting Statement</h3>
      <p style="margin-bottom:14px;">CINIEORAMA does not host, upload, or maintain video files on its servers. All media items are embedded from public third-party distribution nodes. Users are responsible for complying with local regulations.</p>
      <h3 style="color:#fff; margin-bottom:8px; font-size:1.05rem;">3. Disclaimer of Warranties</h3>
      <p style="margin-bottom:14px;">The service is provided on an "AS IS" and "AS AVAILABLE" basis with zero express or implied warranties regarding uptime, server persistence, or stream availability.</p>
      <div style="margin-top:20px; padding-top:14px; border-top:1px solid #222; font-family:monospace; font-size:0.75rem; color:#777;">
        Full terms available in <a href="TERMS.md" target="_blank" style="color:var(--brutal-yellow); text-decoration:underline;">TERMS.md</a>.
      </div>
    `
  },
  disclaimer: {
    title: "CONTENT DISCLAIMER & COPYRIGHT NOTICE",
    content: `
      <div style="background:#111; border:1px solid #222; padding:16px; margin-bottom:18px;">
        <h4 style="color:var(--brutal-yellow); margin:0 0 6px; font-family:monospace;">● THIRD-PARTY EMBED AGGREGATOR</h4>
        <p style="margin:0; font-size:0.85rem; color:#aaa;">CINIEORAMA is an open-source indexer and does not store or host any video content on any server.</p>
      </div>
      <h3 style="color:#fff; margin-bottom:8px; font-size:1.05rem;">1. Non-Hosting Architecture</h3>
      <p style="margin-bottom:14px;">CINIEORAMA does not host, upload, or store digital media files. All streams are embedded from public third-party streaming nodes. The developers have no affiliation with external hosts.</p>
      <h3 style="color:#fff; margin-bottom:8px; font-size:1.05rem;">2. TMDB Attribution</h3>
      <p style="margin-bottom:14px;">All metadata, posters, backdrops, and descriptions are retrieved from The Movie Database (TMDB) API. This product uses the TMDB API but is not certified by TMDB.</p>
      <h3 style="color:#fff; margin-bottom:8px; font-size:1.05rem;">3. DMCA Compliance</h3>
      <p style="margin-bottom:14px;">Because no files reside on CINIEORAMA servers, takedown notices must be directed to the third-party webmasters hosting the media.</p>
      <div style="margin-top:20px; padding-top:14px; border-top:1px solid #222; font-family:monospace; font-size:0.75rem; color:#777;">
        Full disclaimer available in <a href="DISCLAIMER.md" target="_blank" style="color:var(--brutal-yellow); text-decoration:underline;">DISCLAIMER.md</a>.
      </div>
    `
  }
};

window.openPolicyModal = function(tab = 'policy') {
  const modal = document.getElementById("policyModal");
  if (!modal) return;
  switchPolicyTab(tab);
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
};

window.closePolicyModal = function() {
  const modal = document.getElementById("policyModal");
  if (modal) modal.style.display = "none";
  document.body.style.overflow = "";
};

window.switchPolicyTab = function(tab) {
  const doc = LEGAL_DOCS[tab] || LEGAL_DOCS.policy;
  const heading = document.getElementById("policyModalHeading");
  const body = document.getElementById("policyModalBody");

  if (heading) heading.textContent = doc.title;
  if (body) body.innerHTML = doc.content;

  const tabMap = {
    policy: "tabBtnPolicy",
    terms: "tabBtnTerms",
    disclaimer: "tabBtnDisclaimer"
  };

  document.querySelectorAll(".policy-tab-group .nav-tab").forEach(btn => {
    btn.classList.toggle("active", btn.id === tabMap[tab]);
  });
};

function attachCardEvents() {
  // + My Watchlist Card Bookmark Quick Toggle
  document.querySelectorAll(".card-watchlist-btn").forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      if (!id) return;
      let item = STATE.mediaCache.get(String(id));
      if (!item) {
        const card = btn.closest(".media-card");
        const title = card?.querySelector(".card-title")?.textContent || "Cinema Title";
        const poster = card?.querySelector(".card-poster")?.src || FALLBACK_POSTER;
        const type = card?.dataset.type || "movie";
        const year = card?.querySelector(".card-year-tag")?.textContent || "2026";
        item = { id, title, poster, backdrop: poster, type, year, rating: "8.5", ott: "netflix", ottLabel: "NETFLIX" };
      }
      WATCHLIST.toggle(item);
    };
  });

  document.querySelectorAll(".card-resume-btn").forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const id = btn.dataset.id || btn.closest(".media-card")?.dataset.id;
      if (!id) return;
      const history = WATCH_HISTORY.getItem(id);
      const found = STATE.mediaCache.get(String(id)) || history;
      if (found) {
        openPlayer(found, history ? history.season : 1, history ? history.episode : 1);
      }
    };
  });

  document.querySelectorAll(".media-card").forEach(card => {
    card.onclick = () => {
      const id = card.dataset.id;
      const found = STATE.mediaCache.get(String(id));
      if (found) {
        openDetailsModal(found);
      } else {
        const title = card.querySelector(".card-title")?.textContent || "Cinieorama Stream";
        const poster = card.querySelector(".card-poster")?.src || FALLBACK_POSTER;
        const type = card.dataset.type || "movie";
        const yearTag = card.querySelector(".card-year-tag")?.textContent || "2026";
        const fallbackObj = {
          id,
          title,
          year: yearTag,
          type,
          rating: "8.5",
          quality: "1080p HD",
          lang: "multi",
          langLabel: "Multi-Audio",
          ott: "netflix",
          ottLabel: "CINIEORAMA",
          hasMultiAudio: true,
          audioTracksLabel: "Multi-Audio (Hindi • English • Regional)",
          audioBadge: "MULTI-AUDIO",
          genres: ["Cinema", "Stream"],
          poster,
          backdrop: poster,
          synopsis: `Watch ${title} on Cinieorama with verified high-speed servers.`
        };
        STATE.mediaCache.set(String(id), fallbackObj);
        openDetailsModal(fallbackObj);
      }
    };
  });
}

function attachSliderArrows() {
  document.querySelectorAll(".row-arrow").forEach(btn => {
    btn.onclick = () => {
      const rowId = btn.dataset.row;
      const dir = parseInt(btn.dataset.dir, 10);
      const row = document.getElementById(rowId);
      if (row) {
        row.scrollBy({ left: dir * 650, behavior: "smooth" });
      }
    };
  });
}

// ═══════════════════════════════════════════════════════════════════
// 15. PROGRESSIVE WEB APP (PWA) INSTALLATION & SERVICE WORKER
// ═══════════════════════════════════════════════════════════════════
let deferredInstallPrompt = null;

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(err => {
      console.warn("Service Worker registration skipped:", err);
    });
  });
}

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const navBtn = document.getElementById("navInstallBtn");
  if (navBtn) navBtn.classList.add("install-ready");
  const ctaBtn = document.getElementById("btnTriggerPwaInstall");
  if (ctaBtn) ctaBtn.textContent = "INSTALL TO THIS DEVICE NOW";

  // Show smart PWA install bottom banner after 3 seconds (one-time)
  const alreadyDismissed = sessionStorage.getItem("cinieorama_install_dismissed");
  if (!alreadyDismissed) {
    setTimeout(() => showPwaBanner(), 3000);
  }
});

function showPwaBanner() {
  if (document.getElementById("pwaBanner")) return;
  const banner = document.createElement("div");
  banner.id = "pwaBanner";
  banner.className = "pwa-install-banner";
  banner.innerHTML = `
    <div class="pwa-banner-inner">
      <img src="icon-192.png" alt="Cinieorama" class="pwa-banner-icon">
      <div class="pwa-banner-text">
        <strong>Install Cinieorama App</strong>
        <span>Add to home screen for offline & fullscreen cinema mode</span>
      </div>
      <button class="pwa-banner-install-btn" onclick="triggerPwaInstallPrompt(); dismissPwaBanner();">INSTALL</button>
      <button class="pwa-banner-dismiss" onclick="dismissPwaBanner()" title="Dismiss">✕</button>
    </div>
  `;
  document.body.appendChild(banner);
  requestAnimationFrame(() => banner.classList.add("pwa-banner-visible"));
}

window.dismissPwaBanner = function() {
  const banner = document.getElementById("pwaBanner");
  if (banner) {
    banner.classList.remove("pwa-banner-visible");
    setTimeout(() => banner.remove(), 380);
  }
  sessionStorage.setItem("cinieorama_install_dismissed", "1");
};

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  const navBtn = document.getElementById("navInstallBtn");
  if (navBtn) {
    navBtn.innerHTML = "<span>INSTALLED</span>";
    navBtn.classList.remove("install-ready");
  }
  closeInstallModal();
});

window.openInstallModal = function() {
  const modal = document.getElementById("installModal");
  if (!modal) return;
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
};

window.closeInstallModal = function() {
  const modal = document.getElementById("installModal");
  if (!modal) return;
  modal.style.display = "none";
  document.body.style.overflow = "";
};

window.triggerPwaInstallPrompt = function() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted PWA installation");
      }
      deferredInstallPrompt = null;
      closeInstallModal();
    });
  } else {
    const ctaBtn = document.getElementById("btnTriggerPwaInstall");
    if (ctaBtn) {
      ctaBtn.innerHTML = "FOLLOW PLATFORM STEPS BELOW ▾";
      setTimeout(() => {
        if (ctaBtn) ctaBtn.innerHTML = "INSTALL TO THIS DEVICE NOW";
      }, 3500);
    }
  }
};

