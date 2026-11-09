import React from 'react';
import { FEATURES } from '../data/features';
import { Sparkles } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-100 dark:border-purple-900/40 mb-4">
            <Sparkles className="w-4 h-4 text-[#6C5CE7]" />
            <span className="text-xs font-semibold text-[#6C5CE7] dark:text-[#A29BFE] uppercase tracking-wider">
              Core Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Designed for Peak Productivity
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            FocusFlow combines intelligent task organization, Pomodoro-style focus sessions, and progress tracking into one seamless experience.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative p-8 rounded-3xl bg-[#F8F9FC] dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/60 hover:border-[#6C5CE7]/40 dark:hover:border-[#6C5CE7]/40 hover:shadow-xl hover:shadow-[#6C5CE7]/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Feature Icon Header */}
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-700 text-[#6C5CE7] dark:text-[#A29BFE] flex items-center justify-center shadow-md mb-6 group-hover:scale-110 group-hover:bg-[#6C5CE7] group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#6C5CE7] dark:group-hover:text-[#A29BFE] transition-colors">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle Indicator */}
                <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50 flex items-center gap-2 text-xs font-semibold text-[#6C5CE7] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Feature 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};