import React from 'react';
import { Download, ListTodo, Zap, Check } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Download FocusFlow',
      description:
        'Get the app on your Android or iOS device from Google Play or the Apple App Store in under a minute.',
      icon: Download,
    },
    {
      number: '02',
      title: 'Organize Your Daily Tasks',
      description:
        'Add your priorities, create recurring habits, and group work into custom tags or projects.',
      icon: ListTodo,
    },
    {
      number: '03',
      title: 'Focus, Complete, & Track',
      description:
        'Start timed focus sessions, minimize distractions, build streaks, and review your weekly productivity insights.',
      icon: Zap,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50/70 dark:bg-gray-900/60 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#6C5CE7] dark:text-[#A29BFE] uppercase tracking-wider block mb-2">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            How FocusFlow Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Getting started takes less than two minutes. Transform your workflow into structured, achievable daily goals.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-purple-200 via-[#6C5CE7] to-purple-200 dark:from-gray-800 dark:via-purple-900 dark:to-gray-800 -translate-y-6 z-0" />

          {steps.map((step) => {
            return (
              <div
                key={step.number}
                className="relative z-10 bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200/70 dark:border-gray-700/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Number Badge */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6C5CE7] to-[#A29BFE] text-white flex items-center justify-center font-extrabold text-xl shadow-lg shadow-[#6C5CE7]/25 mb-6">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Small check indicator */}
                <div className="mt-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/40 text-xs font-medium text-[#6C5CE7] dark:text-[#A29BFE]">
                  <Check className="w-3.5 h-3.5" />
                  <span>Step {step.number}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};