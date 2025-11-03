import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-400/40 to-fuchsia-400/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-400/30 to-indigo-400/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/70 dark:bg-indigo-900/30 px-3 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300">
            <Sparkles className="h-3.5 w-3.5" /> Verified lawyers. Modern legal care.
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Settle Smarter.
            <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Connect with Verified Lawyers Instantly.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300">
            CourtEase is your premium hub for online settlements, legal consultations, and case management. Built for speed, trust, and results.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#get-started"
              className="relative inline-flex items-center justify-center rounded-2xl px-6 py-3 text-white font-semibold bg-gradient-to-r from-indigo-600 to-fuchsia-600 shadow-lg shadow-indigo-600/30"
            >
              <span className="absolute -inset-px rounded-2xl bg-gradient-to-r from-indigo-400/40 to-fuchsia-400/40 blur-sm" aria-hidden />
              <span className="relative">Get Started</span>
            </motion.a>
            <a href="#how-it-works" className="rounded-xl border border-slate-200 dark:border-slate-700 px-6 py-3 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition">
              How it works
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            'Online settlements made seamless',
            'Instant booking with trusted lawyers',
            'Secure payments & case tracking',
          ].map((text, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-4 sm:p-6 shadow-sm">
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">{text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
