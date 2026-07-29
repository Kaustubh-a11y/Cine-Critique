import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { fetchMovieDetails } from '../services/tmdbApi';
import { MovieCard } from './MovieCard';
import { Bookmark, Film } from 'lucide-react';

export const Watchlist = () => {
  const { watchlist, apiKey, setActiveView } = useApp();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadWatchlistMovies = async () => {
      setIsLoading(true);
      if (watchlist.length === 0) {
        setMovies([]);
        setIsLoading(false);
        return;
      }

      const moviePromises = watchlist.map(id => fetchMovieDetails(id, apiKey));
      const results = await Promise.all(moviePromises);
      setMovies(results.filter(Boolean));
      setIsLoading(false);
    };

    loadWatchlistMovies();
  }, [watchlist, apiKey]);

  return (
    <div className="section-container" style={{ paddingTop: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Bookmark color="#e50914" size={28} /> My Personal Watchlist ({watchlist.length})
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.92rem' }}>
          Movies bookmarked for future viewing. Saved safely in your browser storage.
        </p>
      </div>

      {isLoading ? (
        <div className="movie-grid">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="movie-card skeleton" style={{ height: '320px' }} />
          ))}
        </div>
      ) : movies.length > 0 ? (
        <div className="movie-grid">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '5rem 1rem', color: '#94a3b8' }}>
          <Film size={48} style={{ opacity: 0.4, marginBottom: '1rem' }} />
          <h3>Your watchlist is currently empty</h3>
          <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 1.5rem 0' }}>
            Explore trending movies and click the bookmark icon on any card to save it here.
          </p>
          <button className="btn-primary" onClick={() => setActiveView('explore')}>
            Explore Blockbusters
          </button>
        </div>
      )}
    </div>
  );
};
