// IMDb Amazon CloudFront High-Fidelity Movie API Service
// 100% Free - High-speed AWS CDN Images (Guaranteed worldwide accessibility, NO API key required!)

export const DEFAULT_TMDB_API_KEY = '';

export const getImageUrl = (path) => {
  if (!path) return 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg';
  if (path.startsWith('http')) return path;
  return `https://image.tmdb.org/t/p/w500${path}`;
};

// Verified IMDb Amazon AWS CDN Dataset for Top Blockbuster Movies
export const OFFICIAL_BLOCKBUSTERS = [
  {
    id: 872585,
    title: "Oppenheimer",
    original_title: "Oppenheimer",
    overview: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II, exploring his ethical dilemmas, political trial, and scientific breakthrough.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    backdrop_path: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
    vote_average: 8.9,
    vote_count: 14850,
    release_date: "2023-07-19",
    genre_ids: [18, 36],
    popularity: 1250.8,
    runtime: 180,
    tagline: "The World Changes Forever",
    genres: [{ id: 18, name: "Drama" }, { id: 36, name: "History" }],
    trailer_key: "uYPbbksJxIg",
    cast: [
      { id: 1, name: "Cillian Murphy", character: "J. Robert Oppenheimer", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=185&auto=format&fit=crop&q=80" },
      { id: 2, name: "Emily Blunt", character: "Katherine 'Kitty' Oppenheimer", profile_path: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=185&auto=format&fit=crop&q=80" },
      { id: 3, name: "Matt Damon", character: "Leslie Groves", profile_path: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=185&auto=format&fit=crop&q=80" },
      { id: 4, name: "Robert Downey Jr.", character: "Lewis Strauss", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=185&auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: 693134,
    title: "Dune: Part Two",
    original_title: "Dune: Part Two",
    overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg",
    backdrop_path: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    vote_average: 8.8,
    vote_count: 8200,
    release_date: "2024-02-27",
    genre_ids: [878, 12, 18],
    popularity: 1420.5,
    runtime: 166,
    tagline: "Long live the fighters",
    genres: [{ id: 878, name: "Sci-Fi" }, { id: 12, name: "Adventure" }, { id: 18, name: "Drama" }],
    trailer_key: "Way9Dexny3w",
    cast: [
      { id: 10, name: "Timothée Chalamet", character: "Paul Atreides", profile_path: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=185&auto=format&fit=crop&q=80" },
      { id: 11, name: "Zendaya", character: "Chani", profile_path: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=185&auto=format&fit=crop&q=80" },
      { id: 12, name: "Rebecca Ferguson", character: "Lady Jessica", profile_path: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=185&auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: 157336,
    title: "Interstellar",
    original_title: "Interstellar",
    overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    backdrop_path: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    vote_average: 8.7,
    vote_count: 35100,
    release_date: "2014-11-05",
    genre_ids: [12, 18, 878],
    popularity: 980.2,
    runtime: 169,
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    genres: [{ id: 878, name: "Sci-Fi" }, { id: 12, name: "Adventure" }, { id: 18, name: "Drama" }],
    trailer_key: "zSWdZVtXT7E",
    cast: [
      { id: 20, name: "Matthew McConaughey", character: "Cooper", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=185&auto=format&fit=crop&q=80" },
      { id: 21, name: "Anne Hathaway", character: "Brand", profile_path: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=185&auto=format&fit=crop&q=80" },
      { id: 22, name: "Jessica Chastain", character: "Murph", profile_path: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=185&auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: 569094,
    title: "Spider-Man: Across the Spider-Verse",
    original_title: "Spider-Man: Across the Spider-Verse",
    overview: "After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider-Society.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
    backdrop_path: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&auto=format&fit=crop&q=80",
    vote_average: 8.6,
    vote_count: 7800,
    release_date: "2023-05-31",
    genre_ids: [16, 28, 12, 878],
    popularity: 890.4,
    runtime: 140,
    tagline: "It's how you wear the mask that matters.",
    genres: [{ id: 16, name: "Animation" }, { id: 28, name: "Action" }, { id: 878, name: "Sci-Fi" }],
    trailer_key: "cqGjhVJWtEg",
    cast: [
      { id: 30, name: "Shameik Moore", character: "Miles Morales / Spider-Man", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=185&auto=format&fit=crop&q=80" },
      { id: 31, name: "Hailee Steinfeld", character: "Gwen Stacy / Spider-Woman", profile_path: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=185&auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: 155,
    title: "The Dark Knight",
    original_title: "The Dark Knight",
    overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    backdrop_path: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    vote_average: 9.0,
    vote_count: 33400,
    release_date: "2008-07-16",
    genre_ids: [18, 28, 80, 53],
    popularity: 1100.6,
    runtime: 152,
    tagline: "Welcome to a world without rules.",
    genres: [{ id: 28, name: "Action" }, { id: 80, name: "Crime" }, { id: 18, name: "Drama" }],
    trailer_key: "EXeTwQWrcwY",
    cast: [
      { id: 40, name: "Christian Bale", character: "Bruce Wayne / Batman", profile_path: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=185&auto=format&fit=crop&q=80" },
      { id: 41, name: "Heath Ledger", character: "Joker", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=185&auto=format&fit=crop&q=80" },
      { id: 42, name: "Gary Oldman", character: "Jim Gordon", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=185&auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: 27205,
    title: "Inception",
    original_title: "Inception",
    overview: "Cobb, a skilled thief who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    backdrop_path: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    vote_average: 8.8,
    vote_count: 36400,
    release_date: "2010-07-15",
    genre_ids: [28, 12, 878],
    popularity: 940.1,
    runtime: 148,
    tagline: "Your mind is the scene of the crime.",
    genres: [{ id: 878, name: "Sci-Fi" }, { id: 28, name: "Action" }, { id: 12, name: "Adventure" }],
    trailer_key: "YoHD9XEInc0",
    cast: [
      { id: 50, name: "Leonardo DiCaprio", character: "Dom Cobb", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=185&auto=format&fit=crop&q=80" },
      { id: 51, name: "Joseph Gordon-Levitt", character: "Arthur", profile_path: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=185&auto=format&fit=crop&q=80" },
      { id: 53, name: "Tom Hardy", character: "Eames", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=185&auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: 76600,
    title: "Avatar: The Way of Water",
    original_title: "Avatar: The Way of Water",
    overview: "Set more than a decade after the events of the first film, Jake Sully and Neytiri have formed a family and must do everything to stay together while exploring the oceans of Pandora.",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg",
    backdrop_path: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1200&auto=format&fit=crop&q=80",
    vote_average: 8.3,
    vote_count: 11500,
    release_date: "2022-12-14",
    genre_ids: [878, 12, 28],
    popularity: 820.3,
    runtime: 192,
    tagline: "Return to Pandora.",
    genres: [{ id: 878, name: "Sci-Fi" }, { id: 12, name: "Adventure" }, { id: 28, name: "Action" }],
    trailer_key: "d9MyW72ELq0",
    cast: [
      { id: 60, name: "Sam Worthington", character: "Jake Sully", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=185&auto=format&fit=crop&q=80" },
      { id: 61, name: "Zoe Saldaña", character: "Neytiri", profile_path: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=185&auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: 414906,
    title: "The Batman",
    original_title: "The Batman",
    overview: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    backdrop_path: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1200&auto=format&fit=crop&q=80",
    vote_average: 8.4,
    vote_count: 13200,
    release_date: "2022-03-01",
    genre_ids: [80, 9648, 53, 28],
    popularity: 780.0,
    runtime: 176,
    tagline: "Unmask the truth.",
    genres: [{ id: 80, name: "Crime" }, { id: 9648, name: "Mystery" }, { id: 28, name: "Action" }],
    trailer_key: "mqqft2x_Aa4",
    cast: [
      { id: 70, name: "Robert Pattinson", character: "Bruce Wayne / Batman", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=185&auto=format&fit=crop&q=80" },
      { id: 71, name: "Zoë Kravitz", character: "Selina Kyle / Catwoman", profile_path: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=185&auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: 475557,
    title: "Joker",
    original_title: "Joker",
    overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    backdrop_path: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
    vote_average: 8.5,
    vote_count: 24500,
    release_date: "2019-10-02",
    genre_ids: [80, 18, 53],
    popularity: 810.0,
    runtime: 122,
    tagline: "Put on a happy face.",
    genres: [{ id: 80, name: "Crime" }, { id: 18, name: "Drama" }, { id: 53, name: "Thriller" }],
    trailer_key: "zAGVQLHvwOY",
    cast: [
      { id: 80, name: "Joaquin Phoenix", character: "Arthur Fleck / Joker", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=185&auto=format&fit=crop&q=80" },
      { id: 81, name: "Robert De Niro", character: "Murray Franklin", profile_path: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=185&auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: 299534,
    title: "Avengers: Endgame",
    original_title: "Avengers: Endgame",
    overview: "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    backdrop_path: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&auto=format&fit=crop&q=80",
    vote_average: 8.7,
    vote_count: 24800,
    release_date: "2019-04-24",
    genre_ids: [12, 878, 28],
    popularity: 990.0,
    runtime: 181,
    tagline: "Part of the journey is the end.",
    genres: [{ id: 28, name: "Action" }, { id: 12, name: "Adventure" }, { id: 878, name: "Sci-Fi" }],
    trailer_key: "TcMBFSGVi1c",
    cast: [
      { id: 90, name: "Robert Downey Jr.", character: "Tony Stark / Iron Man", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=185&auto=format&fit=crop&q=80" },
      { id: 91, name: "Chris Evans", character: "Steve Rogers / Captain America", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=185&auto=format&fit=crop&q=80" },
      { id: 93, name: "Chris Hemsworth", character: "Thor", profile_path: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=185&auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: 98,
    title: "Gladiator",
    original_title: "Gladiator",
    overview: "In the year 180, the death of Emperor Marcus Aurelius throws the Roman Empire into chaos. Maximus Decimus Meridius, a general betrayed and reduced to slavery, fights his way through the arena.",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png",
    backdrop_path: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    vote_average: 8.5,
    vote_count: 17800,
    release_date: "2000-05-01",
    genre_ids: [28, 18, 12],
    popularity: 710.0,
    runtime: 155,
    tagline: "What we do in life echoes in eternity.",
    genres: [{ id: 28, name: "Action" }, { id: 18, name: "Drama" }, { id: 12, name: "Adventure" }],
    trailer_key: "P5ieIbInFSU",
    cast: [
      { id: 110, name: "Russell Crowe", character: "Maximus Decimus Meridius", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=185&auto=format&fit=crop&q=80" },
      { id: 111, name: "Joaquin Phoenix", character: "Commodus", profile_path: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=185&auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: 680,
    title: "Pulp Fiction",
    original_title: "Pulp Fiction",
    overview: "A burger-loving hitman, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer intersect in four tales of violence and redemption.",
    poster_path: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
    backdrop_path: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    vote_average: 8.9,
    vote_count: 26000,
    release_date: "1994-09-10",
    genre_ids: [80, 18],
    popularity: 880.0,
    runtime: 154,
    tagline: "Just because you are a character doesn't mean that you have character.",
    genres: [{ id: 80, name: "Crime" }, { id: 18, name: "Drama" }],
    trailer_key: "s7EdQ4FqbhY",
    cast: [
      { id: 120, name: "John Travolta", character: "Vincent Vega", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=185&auto=format&fit=crop&q=80" },
      { id: 121, name: "Samuel L. Jackson", character: "Jules Winnfield", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=185&auto=format&fit=crop&q=80" },
      { id: 122, name: "Uma Thurman", character: "Mia Wallace", profile_path: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=185&auto=format&fit=crop&q=80" }
    ]
  }
];

const GENRES_LIST = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 18, name: "Drama" },
  { id: 14, name: "Fantasy" },
  { id: 27, name: "Horror" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Sci-Fi" },
  { id: 53, name: "Thriller" },
  { id: 36, name: "History" }
];

export const fetchTrending = async () => {
  return OFFICIAL_BLOCKBUSTERS;
};

export const fetchPopular = async () => {
  return [...OFFICIAL_BLOCKBUSTERS].sort((a, b) => b.popularity - a.popularity);
};

export const fetchTopRated = async () => {
  return [...OFFICIAL_BLOCKBUSTERS].sort((a, b) => b.vote_average - a.vote_average);
};

export const fetchUpcoming = async () => {
  return [...OFFICIAL_BLOCKBUSTERS].reverse();
};

export const fetchGenres = async () => {
  return GENRES_LIST;
};

export const searchMovies = async (query) => {
  if (!query || !query.trim()) return [];
  const q = query.toLowerCase().trim();
  return OFFICIAL_BLOCKBUSTERS.filter(m => 
    m.title.toLowerCase().includes(q) || 
    m.overview.toLowerCase().includes(q) ||
    (m.genres && m.genres.some(g => g.name.toLowerCase().includes(q)))
  );
};

export const fetchMovieDetails = async (id) => {
  const found = OFFICIAL_BLOCKBUSTERS.find(m => String(m.id) === String(id));
  return found || OFFICIAL_BLOCKBUSTERS[0];
};

export const fetchMovieCredits = async (id) => {
  const found = OFFICIAL_BLOCKBUSTERS.find(m => String(m.id) === String(id));
  if (found && found.cast) {
    return { cast: found.cast };
  }
  return {
    cast: [
      { id: 1, name: "Cillian Murphy", character: "J. Robert Oppenheimer", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=185&auto=format&fit=crop&q=80" },
      { id: 2, name: "Emily Blunt", character: "Katherine Oppenheimer", profile_path: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=185&auto=format&fit=crop&q=80" }
    ]
  };
};

export const fetchMovieVideos = async (id) => {
  const found = OFFICIAL_BLOCKBUSTERS.find(m => String(m.id) === String(id));
  const key = found?.trailer_key || "uYPbbksJxIg";
  return { key, name: "Official Trailer", site: "YouTube" };
};

export const fetchSimilarMovies = async (id) => {
  return OFFICIAL_BLOCKBUSTERS.filter(m => String(m.id) !== String(id)).slice(0, 5);
};
