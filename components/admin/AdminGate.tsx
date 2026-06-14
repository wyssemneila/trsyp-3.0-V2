'use client';

import { useState, useEffect, ReactNode, FormEvent } from 'react';
import { motion } from 'motion/react';
import { ADMIN_AUTH_KEY, ADMIN_PASSWORD } from './adminTypes';

export default function AdminGate({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [pw, setPw] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    setAuthed(localStorage.getItem(ADMIN_AUTH_KEY) === 'true');
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      localStorage.setItem(ADMIN_AUTH_KEY, 'true');
      setAuthed(true);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  if (authed) return <>{children}</>;

  return (
    <div className="adm-gate">
      <motion.div
        className={`adm-gate-card ${shake ? 'adm-gate-shake' : ''}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="adm-gate-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <h2 className="adm-gate-title">Admin Access</h2>
        <p className="adm-gate-sub">Enter the admin password to continue</p>
        <form onSubmit={handleSubmit} className="adm-gate-form">
          <input
            type="password"
            value={pw}
            onChange={(e) => { setPw(e.target.value); setError(false); }}
            placeholder="Password"
            className={`adm-gate-input ${error ? 'adm-gate-input-error' : ''}`}
            autoFocus
          />
          {error && <span className="adm-gate-error">Incorrect password</span>}
          <button type="submit" className="adm-gate-btn">Unlock</button>
        </form>
      </motion.div>
    </div>
  );
}
