import React from 'react';
import { useApp } from '../context/AppContext';
import { X, CheckCircle, Sparkles, ShieldCheck } from 'lucide-react';

export const ApiKeyModal = () => {
  const { isApiKeyModalOpen, setIsApiKeyModalOpen } = useApp();

  if (!isApiKeyModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => setIsApiKeyModalOpen(false)}>
      <div className="modal-container" style={{ maxWidth: '520px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={() => setIsApiKeyModalOpen(false)}>
          <X size={20} />
        </button>

        <div style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div className="brand-icon-wrapper" style={{ background: 'rgba(34, 197, 94, 0.15)', borderColor: 'rgba(34, 197, 94, 0.3)', color: '#22c55e' }}>
              <CheckCircle size={24} />
            </div>
            <h2 style={{ fontSize: '1.5rem' }}>100% Free API Active!</h2>
          </div>

          <p style={{ color: '#cbd5e1', fontSize: '0.92rem', marginBottom: '1.2rem', lineHeight: 1.6 }}>
            Good news! <strong>No API key is required</strong> to use CineCritique. The app runs seamlessly on a 100% free open movie & TV database engine combined with a curated 4K blockbuster catalog.
          </p>

          <div style={{ padding: '1rem', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.25)', borderRadius: '12px', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#22c55e', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem' }}>
              <ShieldCheck size={18} /> Zero Configuration Needed
            </div>
            <ul style={{ color: '#94a3b8', fontSize: '0.85rem', paddingLeft: '1.2rem', lineHeight: 1.5 }}>
              <li>Live searching for thousands of movies & shows</li>
              <li>High-res posters, backdrops, cast profiles & trailers</li>
              <li>Full 10-star community review & watchlist features</li>
            </ul>
          </div>

          <button
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => setIsApiKeyModalOpen(false)}
          >
            Start Exploring Movies
          </button>
        </div>
      </div>
    </div>
  );
};
