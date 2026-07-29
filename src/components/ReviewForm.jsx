import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Star, Send, EyeOff, CheckCircle } from 'lucide-react';

const AVATARS = ['AV', 'SJ', 'MB', 'KC', 'JD', 'NR', 'TC'];

export const ReviewForm = ({ movieId, movieTitle, posterPath, onReviewAdded }) => {
  const { addReview } = useApp();

  const [rating, setRating] = useState(8.0);
  const [hoverRating, setHoverRating] = useState(0);
  const [author, setAuthor] = useState('');
  const [avatar, setAvatar] = useState('AV');
  const [headline, setHeadline] = useState('');
  const [content, setContent] = useState('');
  const [containsSpoilers, setContainsSpoilers] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author.trim() || !headline.trim() || !content.trim()) return;

    addReview({
      movieId,
      movieTitle,
      posterPath,
      author: author.trim(),
      avatar,
      rating: Number(rating),
      headline: headline.trim(),
      content: content.trim(),
      containsSpoilers
    });

    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setHeadline('');
      setContent('');
      if (onReviewAdded) onReviewAdded();
    }, 1200);
  };

  return (
    <div className="review-form-card">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Write a Verified Review</h3>
        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Scale 1 to 10 Stars</span>
      </div>

      {submittedSuccess ? (
        <div style={{ padding: '2rem', textAlign: 'center', color: '#22c55e', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <CheckCircle size={40} />
          <h4>Review Published Successfully!</h4>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Your review is now live in the community feed.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Star Rating Picker (1 to 10) */}
          <div className="form-group" style={{ marginBottom: '1.2rem' }}>
            <label className="form-label">Your Rating</label>
            <div className="star-rating-picker">
              {Array.from({ length: 10 }).map((_, index) => {
                const starVal = index + 1;
                const isFilled = (hoverRating || rating) >= starVal;
                return (
                  <button
                    key={starVal}
                    type="button"
                    className={`star-btn ${isFilled ? 'filled' : ''}`}
                    onMouseEnter={() => setHoverRating(starVal)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(starVal)}
                  >
                    <Star size={20} fill={isFilled ? '#f59e0b' : 'transparent'} />
                  </button>
                );
              })}
              <span className="rating-score-display">{hoverRating || rating} / 10</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Christopher Nolan"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Avatar Badge</label>
              <select
                className="form-input"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              >
                {AVATARS.map(av => (
                  <option key={av} value={av}>{av}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Review Headline</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Breathtaking score and unforgettable performances..."
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Full Review</label>
            <textarea
              className="form-textarea"
              placeholder="Share your detailed analysis of direction, story, pacing, visual effects, and music..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.2rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.85rem', color: '#94a3b8' }}>
              <input
                type="checkbox"
                checked={containsSpoilers}
                onChange={(e) => setContainsSpoilers(e.target.checked)}
              />
              <EyeOff size={15} /> Contains Spoilers (Will blur review content)
            </label>

            <button type="submit" className="btn-primary" style={{ padding: '0.65rem 1.4rem' }}>
              <Send size={16} /> Post Review
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
