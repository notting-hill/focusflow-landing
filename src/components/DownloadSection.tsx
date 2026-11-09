import React from 'react';
import { GOOGLE_PLAY_URL, APP_STORE_URL } from '../data/appConfig';
import { PlaceholderBadge } from './PlaceholderBadge';
import { ArrowDown, CheckCircle2, Smartphone, Apple, Play } from 'lucide-react';

export const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-purple-50/60 via-white to-slate-50/60 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-200/70 dark:border-gray-700/70 shadow-sm relative overflow-hidden">
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#6C5CE7]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#A29BFE]/15 to-transparent rounded-full blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: CTA Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-100 dark:border-purple-900/40 mb-6">
                <ArrowDown className="w-4 h-4 text-[#6C5CE7]" />
                <span className="text-xs font-semibold text-[#6C5CE7] dark:text-[#A29BFE] uppercase tracking-wider">
                  Ready to Start
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
                Start Your Productivity Journey Today
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                Join thousands of users who have already transformed their daily workflow with FocusFlow. Free to download — no commitment required.
              </p>

              {/* Placeholder Notice */}
              <PlaceholderBadge label="Fictional Store URLs" compact={false} className="mb-6" />

              {/* Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 focus:outline-hidden"
                >
                  <Play className="w-6 h-6 fill-current text-emerald-400 dark:text-emerald-600 shrink-0" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase tracking-wider font-medium opacity-80 leading-tight">
                      GET IT ON
                    </span>
                    <span className="text-base font-bold leading-none">
                      Google Play
                    </span>
                  </div>
                </a>

                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 focus:outline-hidden"
                >
                  <Apple className="w-7 h-7 fill-current shrink-0" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase tracking-wider font-medium opacity-80 leading-tight">
                      Download on the
                    </span>
                    <span className="text-base font-bold leading-none">
                      App Store
                    </span>
                  </div>
                </a>
              </div>

              {/* Platform Badges */}
              <div className="mt-10 pt-8 border-t border-gray-200/60 dark:border-gray-700 flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-white">Available on</span>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-medium">
                      <Smartphone className="w-3.5 h-3.5 text-[#6C5CE7]" />
                      Android
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-medium">
                      <Apple className="w-4 h-4" />
                      iOS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Feature List */}
            <div className="space-y-4">
              {[
                { icon: CheckCircle2, label: 'Instant download — no sign-up required' },
                { icon: CheckCircle2, label: 'Works offline after first launch' },
                { icon: CheckCircle2, label: 'Sync across devices (coming soon)' },
                { icon: CheckCircle2, label: '100% ad-free experience' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <item.icon className="w-4.5 h-4.5" />
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-200 font-medium leading-relaxed">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};