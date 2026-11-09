import React, { useState, useRef } from 'react';
import { Smartphone, ListTodo, Timer, LineChart } from 'lucide-react';
import { APP_NAME } from '../data/appConfig';

interface PreviewPanel {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export const AppPreview: React.FC = () => {
  const [activePanel, setActivePanel] = useState(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const panels: PreviewPanel[] = [
    {
      id: 'tasks',
      label: 'Tasks',
      icon: ListTodo,
      title: 'Effortless Task Management',
      description:
        'Create clear daily priorities, mark tasks complete with one tap, and group your work by project.',
    },
    {
      id: 'focus',
      label: 'Focus',
      icon: Timer,
      title: 'Dedicated Focus Sessions',
      description:
        'Start a timer, silence distractions, and stay in flow with beautiful countdown visualizations.',
    },
    {
      id: 'insights',
      label: 'Insights',
      icon: LineChart,
      title: 'Clear Productivity Insights',
      description:
        'Review your best hours, longest streaks, and completed tasks with simple, actionable charts.',
    },
  ];

  // Accessible tab pattern (WAI-ARIA)
  return (
    <section id="preview" className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#6C5CE7] dark:text-[#A29BFE] uppercase tracking-wider block mb-2">
            App Preview
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            A Glimpse Inside {APP_NAME}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Illustrated concept previews — these mockups are placeholders and will be replaced with real app screenshots at release.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Preview phone mockup */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative w-full max-w-[300px]">
              <div className="relative border-8 border-gray-900 dark:border-gray-800 bg-gray-900 rounded-[44px] shadow-2xl shadow-purple-900/20 overflow-hidden ring-1 ring-gray-900/10">
                {/* Dynamic Island */}
                <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 z-30 flex justify-center items-center">
                  <div className="w-16 h-4 bg-black rounded-full" />
                </div>

                <div className="bg-[#F8F9FC] dark:bg-gray-900 pt-10 pb-6 px-4 min-h-[520px]">
                  {/* Mini header with tabs */}
                  <div className="flex gap-1.5 mb-4">
                    <div className="flex-1 py-2 px-3 rounded-lg bg-[#6C5CE7] text-white text-center text-xs font-semibold">
                      Today
                    </div>
                    <div className="flex-1 py-2 px-3 rounded-lg bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-center text-xs font-medium">
                      Week
                    </div>
                  </div>

                  {/* Tasks Preview */}
                  <div className="space-y-2.5">
                    <div className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200/70 dark:border-gray-700/70 flex items-center gap-3">
                      <div className="w-5 h-5 rounded-lg bg-emerald-500 text-white flex items-center justify-center shrink-0">
                        <ListTodo className="w-3 h-3" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-gray-900 dark:text-white">Deep Work Block</div>
                        <div className="text-[10px] text-gray-400">09:00 – 12:00 · Focus Session</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200/70 dark:border-gray-700/70 flex items-center gap-3">
                      <div className="w-5 h-5 rounded-lg border-2 border-[#6C5CE7] shrink-0" />
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-gray-900 dark:text-white">Write Feature Spec</div>
                        <div className="text-[10px] text-gray-400">Product · Due Today</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200/70 dark:border-gray-700/70 flex items-center gap-3">
                      <div className="w-5 h-5 rounded-lg border-2 border-gray-300 dark:border-gray-600 shrink-0" />
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-gray-900 dark:text-white">Weekly Review & Plan</div>
                        <div className="text-[10px] text-gray-400">Habit · Sun</div>
                      </div>
                    </div>
                  </div>

                  {/* Focus Stats Card */}
                  <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-[#6C5CE7] to-[#9a90ec] text-white">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-semibold uppercase tracking-wider opacity-90">Focus Today</span>
                      <span className="px-2 py-0.5 rounded-full bg-white/20 font-bold text-[10px]">+2 Hrs</span>
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="text-3xl font-extrabold">3:45</div>
                      <div className="text-xs text-right opacity-90">
                        <div>Goal: 4 hours</div>
                        <div>🔥 12-day streak</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Tabs Content */}
          <div className="order-1 lg:order-2">
            {/* Tab List */}
            <div
              role="tablist"
              aria-label="App preview panels"
              className="flex gap-2 flex-wrap mb-8"
            >
              {panels.map((panel, idx) => {
                const Icon = panel.icon;
                const isActive = activePanel === idx;
                return (
                  <button
                    key={panel.id}
                    role="tab"
                    id={`tab-${panel.id}`}
                    aria-controls={`panel-${panel.id}`}
                    aria-selected={isActive}
                    onClick={() => setActivePanel(idx)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 focus:outline-hidden ${
                      isActive
                        ? 'bg-[#6C5CE7] text-white border-[#6C5CE7] shadow-md shadow-[#6C5CE7]/20'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-[#6C5CE7]/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{panel.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Panel Content */}
            {panels.map((panel, idx) => {
              const isActive = activePanel === idx;
              const Icon = panel.icon;
              return (
                <div
                  key={panel.id}
                  ref={(el) => { panelRefs.current[idx] = el; }}
                  role="tabpanel"
                  id={`panel-${panel.id}`}
                  aria-labelledby={`tab-${panel.id}`}
                  hidden={!isActive}
                  className="max-w-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#6C5CE7]/10 text-[#6C5CE7] dark:text-[#A29BFE] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {panel.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    {panel.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F8F9FC] dark:bg-gray-800 border border-gray-200/70 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300">
                      <Smartphone className="w-4 h-4 text-[#6C5CE7]" />
                      Works on iOS & Android
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};