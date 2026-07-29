import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { searchMovies, getImageUrl } from '../services/tmdbApi';
import { Film, Search, Bookmark, MessageSquare, Star, Sparkles, CheckCircle } from 'lucide-react';

export const Navbar = () => {
  const { 
    activeView, 
    setActiveView, 
    watchlist, 
    reviews,
    setIsApiKeyModalOpen, 
    setSelectedMovieId
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);

  // Debounced live search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearching(true);
      const results = await searchMovies(searchQuery);
      setSearchResults(results.slice(0, 6));
      setIsSearching(false);
      setShowDropdown(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectMovie = (id) => {
    setSelectedMovieId(id);
    setShowDropdown(false);
    setSearchQuery('');
  };

  return (
    <header className="navbar">
      <div className="section-container navbar-inner">
        {/* Brand Logo */}
        <button className="brand-logo" onClick={() => setActiveView('explore')}>
          <div className="brand-icon-wrapper">
            <Film size={22} />
          </div>
          Cine<span>Critique</span>
        </button>

        {/* Live Search Bar */}
        <div className="nav-search-box" ref={searchRef}>
          <Search className="search-icon" size={16} />
          <input
            type="text"
            className="nav-search-input"
            placeholder="Search movies & shows (e.g. Batman, Dune)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery.trim() && setShowDropdown(true)}
          />

          {/* Search Dropdown */}
          {showDropdown && (
            <div className="search-results-dropdown">
              {isSearching ? (
                <div style={{ padding: '1.2rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.85rem' }}>
                  Searching live database...
                </div>
              ) : searchResults.length > 0 ? (
                searchResults.map((movie) => (
                  <div
                    key={movie.id}
                    className="search-result-item"
                    onClick={() => handleSelectMovie(movie.id)}
                  >
                    <img
                      src={getImageUrl(movie.poster_path)}
                      alt={movie.title}
                      className="search-result-thumb"
                    />
                    <div className="search-result-info">
                      <h4>{movie.title}</h4>
                      <div className="search-result-meta">
                        <span>{movie.release_date?.split('-')[0] || 'N/A'}</span>
                        <span>•</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: '#f59e0b' }}>
                          <Star size={12} fill="#f59e0b" /> {movie.vote_average ? Number(movie.vote_average).toFixed(1) : '8.0'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ padding: '1.2rem', textAlign: 'center', color: '#64748b', fontSize: '0.85rem' }}>
                  No matches found for "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>

        {/* Navigation Tabs & Actions */}
        <div className="nav-links">
          <button
            className={`nav-btn ${activeView === 'explore' ? 'active' : ''}`}
            onClick={() => setActiveView('explore')}
          >
            <Sparkles size={16} /> Explore
          </button>
          
          <button
            className={`nav-btn ${activeView === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveView('reviews')}
          >
            <MessageSquare size={16} /> Community ({reviews.length})
          </button>

          <button
            className={`nav-btn ${activeView === 'watchlist' ? 'active' : ''}`}
            onClick={() => setActiveView('watchlist')}
          >
            <Bookmark size={16} /> Watchlist ({watchlist.length})
          </button>

          <button className="api-key-btn" onClick={() => setIsApiKeyModalOpen(true)}>
            <div className="badge-dot" />
            <span style={{ color: '#22c55e', fontWeight: 600 }}>100% Free API Active</span>
          </button>
        </div>
      </div>
    </header>
  );
};
