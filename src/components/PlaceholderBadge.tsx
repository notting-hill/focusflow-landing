import React from 'react';
import { AlertCircle } from 'lucide-react';

interface PlaceholderBadgeProps {
  label?: string;
  compact?: boolean;
  className?: string;
}

export const PlaceholderBadge: React.FC<PlaceholderBadgeProps> = ({
  label = 'Fictional Placeholder Link',
  compact = false,
}) => {
  if (compact) {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
        <AlertCircle className="w-2.5 h-2.5 shrink-0" />
        <span>{label}</span>
      </span>
    );
  }

  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-900 dark:bg-amber-950/70 dark:text-amber-200 border border-amber-200 dark:border-amber-800 shadow-xs">
      <AlertCircle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
      <span>{label} — Replace before launch</span>
    </div>
  );
};