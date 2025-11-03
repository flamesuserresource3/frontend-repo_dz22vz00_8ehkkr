import React, { useEffect, useState } from 'react';
import { Shield, User, Search, Calendar, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  const navTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? 'backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            className="flex items-center gap-2 group"
            onClick={() => navTo('hero')}
            aria-label="CourtEase home"
          >
            <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/20">
              <Shield className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold tracking-wide">CourtEase</p>
              <p className="text-[10px] uppercase text-slate-500 dark:text-slate-400 -mt-1">Smart Legal</p>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => navTo('how-it-works')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1">
              <Search className="h-4 w-4" /> How it works
            </button>
            <button onClick={() => navTo('lawyers')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1">
              <User className="h-4 w-4" /> Top Lawyers
            </button>
            <button onClick={() => navTo('reviews')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1">
              <Calendar className="h-4 w-4" /> Reviews
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => navTo('get-started')}
              className="relative inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-white font-medium shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all group"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity" aria-hidden />
              <span className="relative">Get Started</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
