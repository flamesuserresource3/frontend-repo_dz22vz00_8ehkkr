import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, Briefcase } from 'lucide-react';

const topLawyers = [
  {
    name: 'Aisha Rahman',
    specialty: 'Corporate Law',
    location: 'New York, USA',
    rating: 4.9,
    reviews: 312,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Marcus Chen',
    specialty: 'Intellectual Property',
    location: 'San Francisco, USA',
    rating: 4.8,
    reviews: 221,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Elena García',
    specialty: 'Family Law',
    location: 'Madrid, Spain',
    rating: 4.9,
    reviews: 408,
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Kabir Singh',
    specialty: 'Criminal Defense',
    location: 'Delhi, India',
    rating: 4.7,
    reviews: 198,
    avatar: 'https://images.unsplash.com/photo-1549237511-6a4280a91f2a?q=80&w=400&auto=format&fit=crop',
  },
];

const clientReviews = [
  {
    name: 'Sophia Patel',
    text: 'The consultation was incredibly efficient and professional. CourtEase made the entire process stress-free.',
  },
  {
    name: 'Liam O’Connor',
    text: 'Booked a lawyer in minutes and settled a dispute online. Exceptional experience from start to finish.',
  },
  {
    name: 'Mina Okafor',
    text: 'I loved the transparency and progress tracking. Highly recommend for anyone needing quick legal help.',
  },
];

function Rating({ value }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(value));
  return (
    <div className="flex items-center gap-0.5">
      {stars.map((active, i) => (
        <Star key={i} className={`h-4 w-4 ${active ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-slate-700'}`} />
      ))}
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="relative">
      <HowItWorks />
      <TopLawyers />
      <Reviews />
      <CTA />
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: 'Search & Match',
      desc: 'Filter by specialization, location, and ratings to find the perfect legal expert.',
    },
    {
      title: 'Book & Consult',
      desc: 'Schedule secure video consultations and share documents instantly.',
    },
    {
      title: 'Settle & Track',
      desc: 'Manage cases, payments, and progress with real-time updates.',
    },
  ];
  return (
    <div id="how-it-works" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl sm:text-3xl font-bold"
      >
        How It Works
      </motion.h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
            <div className="text-lg font-semibold">{s.title}</div>
            <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function TopLawyers() {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const items = useMemo(() => topLawyers.concat(topLawyers), []);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % topLawyers.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div id="lawyers" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="flex items-end justify-between">
        <h3 className="text-xl sm:text-2xl font-semibold">Top-Rated Lawyers</h3>
        <div className="hidden sm:flex gap-2">
          <button onClick={() => setIndex((i) => (i - 1 + topLawyers.length) % topLawyers.length)} className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800">Prev</button>
          <button onClick={() => setIndex((i) => (i + 1) % topLawyers.length)} className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800">Next</button>
        </div>
      </div>
      <div className="mt-6 overflow-hidden">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-transform"
          style={{ transform: `translateX(-${(index % topLawyers.length) * (100 / visible)}%)` }}
        >
          {items.map((lawyer, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur shadow-sm overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={lawyer.avatar} alt={lawyer.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{lawyer.name}</div>
                    <div className="mt-0.5 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                      <Briefcase className="h-3.5 w-3.5" /> {lawyer.specialty}
                    </div>
                  </div>
                  <Rating value={lawyer.rating} />
                </div>
                <div className="mt-2 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <MapPin className="h-3.5 w-3.5" /> {lawyer.location} • {lawyer.reviews} reviews
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Reviews() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % clientReviews.length), 4000);
    return () => clearInterval(id);
  }, []);
  return (
    <div id="reviews" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center">
      <h3 className="text-xl sm:text-2xl font-semibold">What Clients Say</h3>
      <div className="relative mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm"
          >
            <p className="text-slate-700 dark:text-slate-300">“{clientReviews[active].text}”</p>
            <p className="mt-4 text-sm font-semibold">— {clientReviews[active].name}</p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-4 flex items-center justify-center gap-2">
          {clientReviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 w-2 rounded-full transition-all ${i === active ? 'bg-indigo-600 w-6' : 'bg-slate-300 dark:bg-slate-700'}`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CTA() {
  return (
    <div id="get-started" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white shadow-xl"
      >
        <div className="absolute inset-0 pointer-events-none opacity-25" style={{ backgroundImage: 'radial-gradient(circle at 20% 10%, white 0, transparent 40%), radial-gradient(circle at 80% 90%, white 0, transparent 40%)' }} />
        <div className="relative">
          <h3 className="text-2xl sm:text-3xl font-bold">Ready to experience premium legal care?</h3>
          <p className="mt-2 text-white/90">Join thousands using CourtEase to consult lawyers, manage cases, and settle faster.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white/95 text-slate-900 px-6 py-3 font-semibold hover:bg-white">Create free account</a>
            <a href="#" className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 font-semibold hover:bg-white/10">Book a consultation</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
