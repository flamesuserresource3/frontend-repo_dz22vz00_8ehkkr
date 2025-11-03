import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Star, User } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Decorative background glows (non-interactive) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-400/40 to-fuchsia-400/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-400/30 to-indigo-400/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
        {/* Heading & CTAs */}
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
              aria-label="Get started with CourtEase"
            >
              <span className="absolute -inset-px rounded-2xl bg-gradient-to-r from-indigo-400/40 to-fuchsia-400/40 blur-sm" aria-hidden />
              <span className="relative">Get Started</span>
            </motion.a>
            <a
              href="#how-it-works"
              className="rounded-xl border border-slate-200 dark:border-slate-700 px-6 py-3 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              aria-label="Learn how CourtEase works"
            >
              How it works
            </a>
          </div>
        </motion.div>

        {/* Spline 3D animation - Interactive rotating globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-16"
        >
          <div className="relative mx-auto w-full max-w-5xl rounded-3xl border border-slate-200/70 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/40 backdrop-blur-md shadow-xl overflow-hidden">
            {/* Soft inner glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme(colors.indigo.500/10),transparent_55%)]" aria-hidden />
            <div className="h-[380px] sm:h-[480px] md:h-[560px]">
              <Spline
                scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>

            {/* Orbiting network badges to indicate lawyers across the country */}
            <motion.div
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              aria-hidden
              initial={false}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
            >
              <div className="relative h-[85%] w-[85%]">
                {/* top node */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 -top-2"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <Node label="Delhi NCR" icon={<User className="h-3.5 w-3.5" />} />
                </motion.div>
                {/* right node */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 -right-2"
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <Node label="Mumbai" icon={<Shield className="h-3.5 w-3.5" />} />
                </motion.div>
                {/* bottom-left node */}
                <motion.div
                  className="absolute -bottom-2 left-1/4"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <Node label="Bengaluru" icon={<Star className="h-3.5 w-3.5" />} />
                </motion.div>
                {/* top-left small dot */}
                <motion.span
                  className="absolute top-6 left-6 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 shadow-[0_0_20px_rgba(139,92,246,0.6)]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: 'spring', stiffness: 220, damping: 14 }}
                />
                {/* bottom-right small dot */}
                <motion.span
                  className="absolute bottom-8 right-8 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-[0_0_18px_rgba(99,102,241,0.55)]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.1, type: 'spring', stiffness: 220, damping: 14 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Quick feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
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

function Node({ label, icon }) {
  return (
    <motion.div
      className="flex items-center gap-2 rounded-full bg-white/80 dark:bg-slate-900/70 backdrop-blur px-3 py-1.5 border border-slate-200/70 dark:border-slate-800/70 shadow-md"
      initial={{ y: -4, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow">
        {icon}
      </span>
      <span className="text-xs font-medium text-slate-700 dark:text-slate-200">{label}</span>
    </motion.div>
  );
}
