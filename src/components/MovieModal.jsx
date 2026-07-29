import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  fetchMovieDetails, 
  fetchMovieCredits, 
  fetchMovieVideos, 
  fetchSimilarMovies, 
  getImageUrl 
} from '../services/tmdbApi';
import { ReviewForm } from './ReviewForm';
import { 
  X, Star, Clock, Calendar, Bookmark, Check, ThumbsUp, 
  Trash2, MessageSquare, Play, Film, EyeOff 
} from 'lucide-react';

export const MovieModal = () => {
  const { 
    selectedMovieId, 
    setSelectedMovieId, 
    apiKey, 
    watchlist, 
    toggleWatchlist, 
    getMovieReviews, 
    getMovieAverageRating,
    toggleHelpful,
    deleteReview 
  } = useApp();

  const [details, setDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'trailer', 'reviews'
  const [unblurredSpoilers, setUnblurredSpoilers] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!selectedMovieId) return;

    const loadModalData = async () => {
      setIsLoading(true);
      const [movieData, creditsData, videoData, similarData] = await Promise.all([
        fetchMovieDetails(selectedMovieId, apiKey),
        fetchMovieCredits(selectedMovieId, apiKey),
        fetchMovieVideos(selectedMovieId, apiKey),
        fetchSimilarMovies(selectedMovieId, apiKey)
      ]);

      setDetails(movieData);
      setCast(creditsData?.cast?.slice(0, 10) || []);
      setTrailer(videoData);
      setSimilarMovies(similarData?.slice(0, 6) || []);
      setIsLoading(false);
    };

    loadModalData();
  }, [selectedMovieId, apiKey]);

  if (!selectedMovieId) return null;

  const isBookmarked = watchlist.includes(Number(selectedMovieId));
  const movieReviews = getMovieReviews(selectedMovieId);
  const avgRating = getMovieAverageRating(selectedMovieId, details?.vote_average);

  const toggleSpoilerBlur = (revId) => {
    setUnblurredSpoilers(prev => ({ ...prev, [revId]: !prev[revId] }));
  };

  return (
    <div className="modal-overlay" onClick={() => setSelectedMovieId(null)}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={() => setSelectedMovieId(null)}>
          <X size={20} />
        </button>

        {isLoading ? (
          <div style={{ padding: '5rem', textAlign: 'center', color: '#94a3b8' }}>
            Loading movie details & media...
          </div>
        ) : details ? (
          <>
            {/* Header Backdrop Banner */}
            <div className="modal-header-banner">
              <img
                src={getImageUrl(details.backdrop_path, 'original')}
                alt={details.title}
                className="modal-backdrop-img"
              />
              <div className="modal-banner-overlay" />
            </div>

            {/* Main Modal Body */}
            <div className="modal-body">
              <div className="modal-main-grid">
                <img
                  src={getImageUrl(details.poster_path, 'w500')}
                  alt={details.title}
                  className="modal-poster"
                />

                <div className="modal-info">
                  <h2>{details.title}</h2>
                  {details.tagline && <p className="modal-tagline">"{details.tagline}"</p>}

                  <div className="modal-stats-row">
                    <div className="modal-stat" style={{ color: '#f59e0b' }}>
                      <Star size={16} fill="#f59e0b" />
                      <span>{avgRating} / 10 ({details.vote_count || 100} votes)</span>
                    </div>

                    {details.runtime && (
                      <div className="modal-stat" style={{ color: '#94a3b8' }}>
                        <Clock size={16} />
                        <span>{details.runtime} mins</span>
                      </div>
                    )}

                    <div className="modal-stat" style={{ color: '#94a3b8' }}>
                      <Calendar size={16} />
                      <span>{details.release_date || 'N/A'}</span>
                    </div>
                  </div>

                  <div className="genres-list">
                    {details.genres?.map(g => (
                      <span key={g.id} className="genre-tag">{g.name}</span>
                    ))}
                  </div>

                  <p className="modal-overview">{details.overview}</p>

                  <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1.2rem' }}>
                    <button
                      className="btn-primary"
                      onClick={() => toggleWatchlist(details.id)}
                    >
                      {isBookmarked ? (
                        <>
                          <Check size={16} /> In Watchlist
                        </>
                      ) : (
                        <>
                          <Bookmark size={16} /> Add to Watchlist
                        </>
                      )}
                    </button>

                    {trailer && (
                      <button
                        className="btn-glass"
                        onClick={() => setActiveTab('trailer')}
                      >
                        <Play size={16} /> Watch Trailer
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Tabs Navigation */}
              <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem', paddingBottom: '0.5rem' }}>
                <button
                  className={`category-tab ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview & Cast
                </button>
                {trailer && (
                  <button
                    className={`category-tab ${activeTab === 'trailer' ? 'active' : ''}`}
                    onClick={() => setActiveTab('trailer')}
                  >
                    Trailer
                  </button>
                )}
                <button
                  className={`category-tab ${activeTab === 'reviews' ? 'active' : ''}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  User Reviews ({movieReviews.length})
                </button>
              </div>

              {/* Tab 1: Cast & Similar */}
              {activeTab === 'overview' && (
                <>
                  {cast.length > 0 && (
                    <div className="cast-section">
                      <h4 className="section-subtitle">Top Cast & Crew</h4>
                      <div className="cast-carousel">
                        {cast.map(c => (
                          <div key={c.id} className="cast-card">
                            <img
                              src={getImageUrl(c.profile_path, 'w185')}
                              alt={c.name}
                              className="cast-avatar"
                            />
                            <div className="cast-name">{c.name}</div>
                            <div className="cast-character">{c.character}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {similarMovies.length > 0 && (
                    <div style={{ marginTop: '2rem' }}>
                      <h4 className="section-subtitle">Recommended Similar Movies</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '1rem' }}>
                        {similarMovies.map(sim => (
                          <div
                            key={sim.id}
                            style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden', background: '#1e293b' }}
                            onClick={() => setSelectedMovieId(sim.id)}
                          >
                            <img
                              src={getImageUrl(sim.poster_path, 'w185')}
                              alt={sim.title}
                              style={{ width: '100%', aspectRatio: '2/3', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '0.5rem', fontSize: '0.8rem', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {sim.title}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Tab 2: Embedded YouTube Trailer */}
              {activeTab === 'trailer' && trailer && (
                <div className="trailer-container">
                  <iframe
                    src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
                    title={trailer.name || "Movie Trailer"}
                    className="trailer-iframe"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {/* Tab 3: Reviews & Review Form */}
              {activeTab === 'reviews' && (
                <>
                  <ReviewForm
                    movieId={details.id}
                    movieTitle={details.title}
                    posterPath={details.poster_path}
                  />

                  <div className="reviews-section-header">
                    <h4 className="section-subtitle">
                      Community Reviews ({movieReviews.length})
                    </h4>
                  </div>

                  {movieReviews.length > 0 ? (
                    movieReviews.map(rev => (
                      <div key={rev.id} className="review-item-card">
                        <div className="review-author-row">
                          <div className="review-author-info">
                            <div className="author-avatar">{rev.avatar || 'U'}</div>
                            <div>
                              <div className="author-name">{rev.author}</div>
                              <div className="review-date">{rev.date}</div>
                            </div>
                          </div>

                          <div className="review-rating-badge">
                            ★ {rev.rating} / 10
                          </div>
                        </div>

                        <h4 className="review-title">{rev.headline}</h4>

                        <div className={`review-content ${rev.containsSpoilers && !unblurredSpoilers[rev.id] ? 'spoiler-blur' : ''}`}>
                          {rev.containsSpoilers && !unblurredSpoilers[rev.id] ? (
                            <div
                              onClick={() => toggleSpoilerBlur(rev.id)}
                              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b' }}
                            >
                              <EyeOff size={16} /> <span>Spoiler Warning: Click to reveal text</span>
                            </div>
                          ) : (
                            rev.content
                          )}
                        </div>

                        <div className="review-actions-row">
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
                    ))
                  ) : (
                    <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#94a3b8' }}>
                      <MessageSquare size={36} style={{ marginBottom: '0.5rem', opacity: 0.5 }} />
                      <p>No reviews written for this movie yet. Be the first to submit a review above!</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
