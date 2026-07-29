import React from 'react';
import { getImageUrl } from '../services/tmdbApi';
import { useApp } from '../context/AppContext';
import { Star, Bookmark, Check, MessageSquare } from 'lucide-react';

export const MovieCard = ({ movie }) => {
  const { setSelectedMovieId, watchlist, toggleWatchlist, getMovieReviews, getMovieAverageRating } = useApp();

  const isBookmarked = watchlist.includes(movie.id);
  const movieReviews = getMovieReviews(movie.id);
  const ratingDisplay = getMovieAverageRating(movie.id, movie.vote_average);

  const handleBookmark = (e) => {
    e.stopPropagation();
    toggleWatchlist(movie.id);
  };

  return (
    <div className="movie-card" onClick={() => setSelectedMovieId(movie.id)}>
      <div className="card-poster-wrapper">
        <img
          src={getImageUrl(movie.poster_path, 'w500')}
          alt={movie.title}
          className="card-poster"
          loading="lazy"
        />

        {/* Rating Badge */}
        <div className="card-rating-tag">
          <Star size={12} fill="#f59e0b" color="#f59e0b" />
          <span>{ratingDisplay}</span>
        </div>

        {/* Bookmark Action */}
        <button
          className={`card-bookmark-btn ${isBookmarked ? 'active' : ''}`}
          onClick={handleBookmark}
          title={isBookmarked ? "Remove from Watchlist" : "Add to Watchlist"}
        >
          {isBookmarked ? <Check size={16} /> : <Bookmark size={16} />}
        </button>
      </div>

      <div className="card-info">
        <h3 className="card-title">{movie.title}</h3>
        <div className="card-meta">
          <span>{movie.release_date?.split('-')[0] || 'N/A'}</span>
          {movieReviews.length > 0 && (
            <div className="user-review-count-tag">
              <MessageSquare size={12} />
              <span>{movieReviews.length} {movieReviews.length === 1 ? 'review' : 'reviews'}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
