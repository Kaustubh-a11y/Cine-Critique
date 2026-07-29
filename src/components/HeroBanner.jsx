import React from 'react';
import { getImageUrl } from '../services/tmdbApi';
import { useApp } from '../context/AppContext';
import { Play, Star, Info, Edit3, Bookmark, Check } from 'lucide-react';

export const HeroBanner = ({ movie }) => {
  const { setSelectedMovieId, watchlist, toggleWatchlist, getMovieAverageRating } = useApp();

  if (!movie) {
    return (
      <div className="hero-banner skeleton">
        <div className="section-container hero-content" />
      </div>
    );
  }

  const isBookmarked = watchlist.includes(movie.id);
  const blendedRating = getMovieAverageRating(movie.id, movie.vote_average);

  return (
    <div className="hero-banner">
      <img
        src={getImageUrl(movie.backdrop_path, 'original')}
        alt={movie.title}
        className="hero-backdrop"
      />
      <div className="hero-vignette" />

      <div className="section-container hero-content">
        <div className="hero-badge-row">
          <span className="tag-badge">FEATURED BLOCKBUSTER</span>
          <div className="rating-badge-glass">
            <Star size={14} fill="#f59e0b" color="#f59e0b" />
            <span>{blendedRating} / 10</span>
          </div>
          <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500 }}>
            {movie.release_date?.split('-')[0] || '2024'}
          </span>
        </div>

        <h1 className="hero-title">{movie.title}</h1>
        <p className="hero-overview">{movie.overview}</p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => setSelectedMovieId(movie.id)}>
            <Info size={18} /> View Details & Reviews
          </button>

          <button className="btn-glass" onClick={() => toggleWatchlist(movie.id)}>
            {isBookmarked ? (
              <>
                <Check size={18} color="#22c55e" /> In Watchlist
              </>
            ) : (
              <>
                <Bookmark size={18} /> Add to Watchlist
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
