import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { fetchTrending, fetchPopular, fetchTopRated, fetchUpcoming, fetchGenres } from '../services/tmdbApi';
import { MovieCard } from './MovieCard';
import { Flame, Star, Trophy, Calendar, SlidersHorizontal } from 'lucide-react';

export const MovieGrid = () => {
  const { apiKey } = useApp();

  const [activeCategory, setActiveCategory] = useState('trending'); // 'trending', 'popular', 'top_rated', 'upcoming'
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenreId, setSelectedGenreId] = useState(null);
  const [sortBy, setSortBy] = useState('popularity'); // 'popularity', 'rating', 'date', 'title'
  const [isLoading, setIsLoading] = useState(true);

  // Load genres list
  useEffect(() => {
    fetchGenres(apiKey).then(res => setGenres(res || []));
  }, [apiKey]);

  // Load movies by category
  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);
      let data = [];
      if (activeCategory === 'trending') data = await fetchTrending(apiKey);
      else if (activeCategory === 'popular') data = await fetchPopular(1, apiKey);
      else if (activeCategory === 'top_rated') data = await fetchTopRated(1, apiKey);
      else if (activeCategory === 'upcoming') data = await fetchUpcoming(1, apiKey);

      setMovies(data || []);
      setIsLoading(false);
    };

    loadMovies();
  }, [activeCategory, apiKey]);

  // Filter & Sort Logic
  const filteredMovies = movies.filter(m => {
    if (!selectedGenreId) return true;
    return m.genre_ids && m.genre_ids.includes(selectedGenreId);
  });

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortBy === 'rating') return b.vote_average - a.vote_average;
    if (sortBy === 'date') return new Date(b.release_date || 0) - new Date(a.release_date || 0);
    if (sortBy === 'title') return a.title.localeCompare(b.title);
    return (b.popularity || 0) - (a.popularity || 0);
  });

  return (
    <div className="section-container">
      {/* Category Tabs & Controls */}
      <div className="controls-bar">
        <div className="category-tabs">
          <div className="tab-group">
            <button
              className={`category-tab ${activeCategory === 'trending' ? 'active' : ''}`}
              onClick={() => setActiveCategory('trending')}
            >
              <Flame size={16} /> Trending
            </button>
            
            <button
              className={`category-tab ${activeCategory === 'popular' ? 'active' : ''}`}
              onClick={() => setActiveCategory('popular')}
            >
              <Star size={16} /> Popular
            </button>

            <button
              className={`category-tab ${activeCategory === 'top_rated' ? 'active' : ''}`}
              onClick={() => setActiveCategory('top_rated')}
            >
              <Trophy size={16} /> Top Rated
            </button>

            <button
              className={`category-tab ${activeCategory === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveCategory('upcoming')}
            >
              <Calendar size={16} /> Upcoming
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <SlidersHorizontal size={15} color="#94a3b8" />
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="popularity">Sort by Popularity</option>
              <option value="rating">Sort by Rating (High to Low)</option>
              <option value="date">Sort by Release Date</option>
              <option value="title">Sort by Title (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Genre Pills */}
        <div className="genre-pills-row">
          <button
            className={`genre-pill ${selectedGenreId === null ? 'active' : ''}`}
            onClick={() => setSelectedGenreId(null)}
          >
            All Genres
          </button>
          {genres.map(g => (
            <button
              key={g.id}
              className={`genre-pill ${selectedGenreId === g.id ? 'active' : ''}`}
              onClick={() => setSelectedGenreId(g.id)}
            >
              {g.name}
            </button>
          ))}
        </div>
      </div>

      {/* Movies Grid */}
      {isLoading ? (
        <div className="movie-grid">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="movie-card skeleton" style={{ height: '320px' }} />
          ))}
        </div>
      ) : sortedMovies.length > 0 ? (
        <div className="movie-grid">
          {sortedMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#94a3b8' }}>
          <h3>No movies found in this genre selection</h3>
          <button
            className="btn-glass"
            style={{ marginTop: '1rem' }}
            onClick={() => setSelectedGenreId(null)}
          >
            Clear Genre Filter
          </button>
        </div>
      )}
    </div>
  );
};
