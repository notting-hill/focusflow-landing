import React from 'react';
import {
  APP_TAGLINE,
  APP_DESCRIPTION,
  GOOGLE_PLAY_URL,
  APP_STORE_URL,
  APP_VERSION,
} from '../data/appConfig';
import { PlaceholderBadge } from './PlaceholderBadge';
import { Play, Apple, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-purple-50/50 via-white to-slate-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900"
    >
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-[#6C5CE7]/10 blur-3xl" />
        <div className="absolute top-12 right-1/4 w-80 h-80 rounded-full bg-[#A29BFE]/15 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Version Badge & Status */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-purple-100 dark:border-gray-700 shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                Version {APP_VERSION} Available Now
              </span>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span className="text-xs font-medium text-[#6C5CE7] dark:text-[#A29BFE]">
                iOS & Android
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.15] mb-6">
              {APP_TAGLINE}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl font-normal leading-relaxed mb-8">
              {APP_DESCRIPTION} Build consistency, eliminate daily distractions, and track your growth effortlessly.
            </p>

            {/* Fictional Link Notice */}
            <div className="mb-6">
              <PlaceholderBadge label="Fictional Store Links" />
            </div>

            {/* Store Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 group focus:outline-hidden"
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 group focus:outline-hidden"
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

            {/* Feature Highlights / Trust Statement */}
            <div className="pt-6 border-t border-gray-200/60 dark:border-gray-800 w-full flex flex-wrap justify-center lg:justify-start items-center gap-y-3 gap-x-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#6C5CE7]" />
                <span>No complex setup</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#6C5CE7]" />
                <span>Offline support</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#6C5CE7]" />
                <span>Private & Secure</span>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
              {/* Outer Phone Frame */}
              <div className="relative mx-auto border-8 border-gray-900 dark:border-gray-800 bg-gray-900 rounded-[48px] shadow-2xl shadow-purple-900/20 overflow-hidden ring-1 ring-gray-900/10">

                {/* Dynamic Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 z-30 flex justify-center items-center">
                  <div className="w-20 h-4 bg-black rounded-b-xl" />
                </div>

                {/* Mobile App Screen Content */}
                <div className="bg-[#F8F9FC] dark:bg-gray-900 pt-8 pb-6 px-4 min-h-[580px] flex flex-col justify-between select-none">

                  {/* Top Bar inside App */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200/80 dark:border-gray-800">
                    <div>
                      <span className="text-xs text-gray-400 font-medium block">Good morning</span>
                      <h4 className="font-bold text-gray-900 dark:text-white text-base">FocusFlow</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#6C5CE7] text-white flex items-center justify-center font-bold text-xs">
                      FF
                    </div>
                  </div>

                  {/* Focus Timer Widget Card */}
                  <div className="my-3 p-4 rounded-2xl bg-gradient-to-br from-[#6C5CE7] to-[#8073eb] text-white shadow-md">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs opacity-80 uppercase tracking-wider font-semibold">Deep Focus Session</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 font-bold">25 Min</span>
                    </div>
                    <div className="text-3xl font-extrabold tracking-tight my-1 text-center">18:42</div>
                    <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden mt-3">
                      <div className="bg-white h-full w-[72%] rounded-full" />
                    </div>
                    <div className="flex justify-between items-center text-[11px] mt-2 opacity-90">
                      <span>Task: Design Landing Page</span>
                      <span className="font-semibold">72%</span>
                    </div>
                  </div>

                  {/* Daily Tasks List */}
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center px-1">
                      <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Today's Tasks</span>
                      <span className="text-[11px] text-[#6C5CE7] font-semibold">3 of 4 Completed</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 flex items-center gap-3 shadow-2xs">
                      <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-medium text-gray-500 line-through dark:text-gray-400">
                        Morning Planning & Coffee
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 flex items-center gap-3 shadow-2xs">
                      <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-medium text-gray-500 line-through dark:text-gray-400">
                        Review Q4 Habit Tracker
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-gray-800 border-2 border-[#6C5CE7]/40 flex items-center gap-3 shadow-xs">
                      <div className="w-5 h-5 rounded-md border-2 border-[#6C5CE7] flex items-center justify-center" />
                      <span className="text-xs font-semibold text-gray-900 dark:text-white">
                        Deploy FocusFlow Landing Page
                      </span>
                    </div>
                  </div>

                  {/* Habit Progress Bar */}
                  <div className="mt-3 p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40">
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="font-semibold text-gray-900 dark:text-gray-200">Daily Habit Streak</span>
                      <span className="font-bold text-[#6C5CE7] dark:text-[#A29BFE]">🔥 12 Days</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-1">
                          <div
                            className={`w-full h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${
                              idx < 6
                                ? 'bg-[#6C5CE7] text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-400'
                            }`}
                          >
                            ✓
                          </div>
                          <span className="text-[9px] text-gray-400">{day}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mock Phone Bottom Bar */}
                  <div className="pt-2 border-t border-gray-200/80 dark:border-gray-800 flex justify-around items-center text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-[#6C5CE7]" />
                    <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700" />
                    <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700" />
                  </div>
                </div>
              </div>

              {/* Floating Floating Accent Badges */}
              <div className="absolute -bottom-4 -left-6 bg-white dark:bg-gray-800 p-3.5 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">Rated 4.9 / 5.0</div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400">User Productivity Score</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};