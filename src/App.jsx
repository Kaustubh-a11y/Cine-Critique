import React, { useState, useEffect } from 'react';
import { useApp } from './context/AppContext';
import { fetchTrending } from './services/tmdbApi';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { MovieGrid } from './components/MovieGrid';
import { CommunityReviews } from './components/CommunityReviews';
import { Watchlist } from './components/Watchlist';
import { MovieModal } from './components/MovieModal';
import { ApiKeyModal } from './components/ApiKeyModal';
import { Film, Heart, Sparkles } from 'lucide-react';

export const MainApp = () => {
  const { activeView, apiKey } = useApp();
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    fetchTrending(apiKey).then(res => {
      if (res && res.length > 0) {
        setFeaturedMovie(res[0]);
      }
    });
  }, [apiKey]);

  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        {activeView === 'explore' && (
          <>
            <HeroBanner movie={featuredMovie} />
            <MovieGrid />
          </>
        )}

        {activeView === 'reviews' && <CommunityReviews />}

        {activeView === 'watchlist' && <Watchlist />}
      </main>

      {/* Popups */}
      <MovieModal />
      <ApiKeyModal />

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--bg-glass-border)', padding: '2.5rem 0', background: 'rgba(9, 13, 22, 0.95)', textAlign: 'center', color: '#64748b', fontSize: '0.88rem' }}>
        <div className="section-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontWeight: 700, fontSize: '1.1rem' }}>
            <Film color="#e50914" size={20} /> CineCritique Movie Reviews
          </div>
          <p>Powered by TMDB (The Movie Database) API & Local Storage</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: '#94a3b8' }}>
            Built with React 18, Vite & Custom Glassmorphism UI
          </div>
        </div>
      </footer>
    </div>
  );
};
