import type { LucideIcon } from 'lucide-react';
import {
  ListChecks,
  Focus,
  TrendingUp,
  BarChart3,
} from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: ListChecks,
    title: 'Smart Task Management',
    description:
      'Organize your daily tasks and priorities in one simple workspace.',
  },
  {
    icon: Focus,
    title: 'Focus Mode',
    description:
      'Stay concentrated and reduce distractions with dedicated focus sessions.',
  },
  {
    icon: TrendingUp,
    title: 'Habit Tracking',
    description:
      'Build positive habits and track your daily progress.',
  },
  {
    icon: BarChart3,
    title: 'Progress Insights',
    description:
      'Understand your productivity trends and celebrate your achievements.',
  },
];