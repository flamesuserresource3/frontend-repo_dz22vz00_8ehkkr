import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}
