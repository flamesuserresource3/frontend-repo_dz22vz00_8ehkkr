import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const links = [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Contact', href: '#' },
  ];
  return (
    <footer className="mt-8 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-slate-500 dark:text-slate-400"
          >
            © {new Date().getFullYear()} CourtEase. All rights reserved.
          </motion.p>
          <ul className="flex items-center gap-5 text-sm">
            {links.map((l, i) => (
              <motion.li
                key={l.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <a href={l.href} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {l.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
