import React, { createContext, useContext, useState, useEffect } from 'react';
import { DEFAULT_TMDB_API_KEY } from '../services/tmdbApi';

const AppContext = createContext();

const SEED_REVIEWS = [
  {
    id: 'rev-seed-1',
    movieId: 872585,
    movieTitle: 'Oppenheimer',
    posterPath: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    author: 'Alex Vance',
    avatar: 'AV',
    rating: 9.5,
    headline: 'A Masterpiece of Tension, Sound Design and Acting',
    content: 'Christopher Nolan crafts a relentless masterpiece. Cillian Murphy delivers the performance of his career. The Trinity test sequence without over-the-top explosive sound until the shockwave hits is pure cinematic genius.',
    containsSpoilers: false,
    date: '2024-03-12',
    helpfulCount: 42
  },
  {
    id: 'rev-seed-2',
    movieId: 693134,
    movieTitle: 'Dune: Part Two',
    posterPath: '/1pdfLPoWBkRFi8StGjKMchoT9gB.jpg',
    author: 'Sarah Jenkins',
    avatar: 'SJ',
    rating: 10,
    headline: 'Sci-Fi Worldbuilding at its Absolute Pinnacle',
    content: 'Visually astonishing from frame one. Greig Fraser’s cinematography combined with Hans Zimmer’s thunderous score creates an immersive sci-fi spectacle unlike anything since Mad Max: Fury Road.',
    containsSpoilers: false,
    date: '2024-03-18',
    helpfulCount: 89
  },
  {
    id: 'rev-seed-3',
    movieId: 157336,
    movieTitle: 'Interstellar',
    posterPath: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    author: 'Marcus Brody',
    avatar: 'MB',
    rating: 9.0,
    headline: 'Emotional and Scientifically Ambitious',
    content: 'The docking scene alone makes this an all-time classic. Hans Zimmer’s organ score provides an overwhelming sense of cosmic wonder and familial loss.',
    containsSpoilers: false,
    date: '2024-02-05',
    helpfulCount: 27
  }
];

export const AppProvider = ({ children }) => {
  // API Key
  const [apiKey, setApiKeyState] = useState(() => {
    return localStorage.getItem('cinecritique_api_key') || DEFAULT_TMDB_API_KEY;
  });

  // User Reviews
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('cinecritique_reviews');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return SEED_REVIEWS;
  });

  // Watchlist
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem('cinecritique_watchlist');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [872585, 693134]; // Default watchlist items
  });

  // Favorites
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('cinecritique_favorites');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [157336];
  });

  // Navigation View & Selected Modal
  const [activeView, setActiveView] = useState('explore'); // 'explore', 'reviews', 'watchlist'
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('cinecritique_api_key', apiKey);
  }, [apiKey]);

  useEffect(() => {
    localStorage.setItem('cinecritique_reviews', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem('cinecritique_watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    localStorage.setItem('cinecritique_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Context Actions
  const setApiKey = (key) => {
    setApiKeyState(key.trim() || DEFAULT_TMDB_API_KEY);
  };

  const addReview = (reviewData) => {
    const newRev = {
      id: `rev-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      helpfulCount: 0,
      ...reviewData
    };
    setReviews(prev => [newRev, ...prev]);
  };

  const deleteReview = (id) => {
    setReviews(prev => prev.filter(r => r.id !== id));
  };

  const toggleHelpful = (id) => {
    setReviews(prev => prev.map(r => r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r));
  };

  const toggleWatchlist = (id) => {
    setWatchlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const getMovieReviews = (movieId) => {
    return reviews.filter(r => Number(r.movieId) === Number(movieId));
  };

  const getMovieAverageRating = (movieId, tmdbVoteAverage) => {
    const movieRevs = getMovieReviews(movieId);
    if (movieRevs.length === 0) return tmdbVoteAverage ? tmdbVoteAverage.toFixed(1) : 'N/A';
    
    const userSum = movieRevs.reduce((acc, r) => acc + Number(r.rating), 0);
    const userAvg = userSum / movieRevs.length;
    
    // Weighted blend of TMDB rating and local community reviews
    if (!tmdbVoteAverage) return userAvg.toFixed(1);
    const blended = (tmdbVoteAverage * 0.7) + (userAvg * 0.3);
    return blended.toFixed(1);
  };

  return (
    <AppContext.Provider value={{
      apiKey,
      setApiKey,
      reviews,
      addReview,
      deleteReview,
      toggleHelpful,
      watchlist,
      toggleWatchlist,
      favorites,
      toggleFavorite,
      activeView,
      setActiveView,
      selectedMovieId,
      setSelectedMovieId,
      isApiKeyModalOpen,
      setIsApiKeyModalOpen,
      getMovieReviews,
      getMovieAverageRating
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
