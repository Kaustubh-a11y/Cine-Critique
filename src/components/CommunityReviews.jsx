import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getImageUrl } from '../services/tmdbApi';
import { MessageSquare, Star, ThumbsUp, Trash2, EyeOff } from 'lucide-react';

export const CommunityReviews = () => {
  const { reviews, toggleHelpful, deleteReview, setSelectedMovieId } = useApp();
  const [filterMinRating, setFilterMinRating] = useState(0);
  const [unblurredSpoilers, setUnblurredSpoilers] = useState({});

  const filteredReviews = reviews.filter(r => Number(r.rating) >= filterMinRating);

  const toggleSpoilerBlur = (revId) => {
    setUnblurredSpoilers(prev => ({ ...prev, [revId]: !prev[revId] }));
  };

  return (
    <div className="section-container" style={{ paddingTop: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Community Reviews & Ratings</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.92rem' }}>
            Real reviews and 10-star scores submitted by fellow movie enthusiasts.
          </p>
        </div>

        {/* Min Rating Filter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ fontSize: '0.88rem', color: '#94a3b8' }}>Filter Score:</span>
          <select
            className="sort-select"
            value={filterMinRating}
            onChange={(e) => setFilterMinRating(Number(e.target.value))}
          >
            <option value={0}>All Ratings</option>
            <option value={9}>9.0+ Stars (Masterpieces)</option>
            <option value={8}>8.0+ Stars (Great)</option>
            <option value={7}>7.0+ Stars (Good)</option>
          </select>
        </div>
      </div>

      {filteredReviews.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.5rem' }}>
          {filteredReviews.map(rev => (
            <div key={rev.id} className="review-item-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.8rem' }}>
                {rev.posterPath && (
                  <img
                    src={getImageUrl(rev.posterPath, 'w92')}
                    alt={rev.movieTitle}
                    style={{ width: '50px', height: '75px', borderRadius: '6px', objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => setSelectedMovieId(rev.movieId)}
                  />
                )}
                <div style={{ flex: 1 }}>
                  <div
                    style={{ fontWeight: 700, fontSize: '1.05rem', cursor: 'pointer', color: 'white' }}
                    onClick={() => setSelectedMovieId(rev.movieId)}
                  >
                    {rev.movieTitle}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.2rem' }}>
                    <span className="review-rating-badge">★ {rev.rating} / 10</span>
                    <span style={{ fontSize: '0.78rem', color: '#64748b' }}>{rev.date}</span>
                  </div>
                </div>
              </div>

              <div className="review-author-row" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.6rem' }}>
                <div className="review-author-info">
                  <div className="author-avatar">{rev.avatar || 'U'}</div>
                  <div className="author-name">{rev.author}</div>
                </div>
              </div>

              <h4 className="review-title" style={{ marginTop: '0.4rem' }}>{rev.headline}</h4>

              <div
                className={`review-content ${rev.containsSpoilers && !unblurredSpoilers[rev.id] ? 'spoiler-blur' : ''}`}
                style={{ flex: 1 }}
              >
                {rev.containsSpoilers && !unblurredSpoilers[rev.id] ? (
                  <div
                    onClick={() => toggleSpoilerBlur(rev.id)}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b' }}
                  >
                    <EyeOff size={16} /> <span>Spoiler Warning: Click to reveal</span>
                  </div>
                ) : (
                  rev.content
                )}
              </div>

              <div className="review-actions-row" style={{ marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.6rem' }}>
                <button className="helpful-btn" onClick={() => toggleHelpful(rev.id)}>
                  <ThumbsUp size={14} /> Helpful ({rev.helpfulCount})
                </button>

                {rev.id.startsWith('rev-') && !rev.id.startsWith('rev-seed') && (
                  <button
                    onClick={() => deleteReview(rev.id)}
                    style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.3rem', marginLeft: 'auto' }}
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '5rem 1rem', color: '#94a3b8' }}>
          <MessageSquare size={48} style={{ opacity: 0.4, marginBottom: '1rem' }} />
          <h3>No reviews match your selected filter criteria</h3>
        </div>
      )}
    </div>
  );
};
