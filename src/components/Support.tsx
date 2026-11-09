import React from 'react';
import {
  SUPPORT_EMAIL,
  BUSINESS_EMAIL,
  SUPPORT_RESPONSE_TIME,
} from '../data/appConfig';
import {
  Wrench,
  UserCog,
  MessageSquare,
  Mail,
  Clock,
  ArrowRight,
} from 'lucide-react';

const supportCategories = [
  {
    icon: Wrench,
    title: 'Technical Support',
    email: SUPPORT_EMAIL,
    description:
      'Help with technical problems, bugs, crashes, and application errors.',
  },
  {
    icon: UserCog,
    title: 'Account & Billing',
    email: SUPPORT_EMAIL,
    description:
      'Assistance with account access, subscription, and billing questions.',
  },
  {
    icon: MessageSquare,
    title: 'Feedback & Suggestions',
    email: BUSINESS_EMAIL,
    description:
      'Share feedback, suggest new features, or report usability issues.',
  },
];

export const Support: React.FC = () => {
  return (
    <section id="support" className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#6C5CE7] dark:text-[#A29BFE] uppercase tracking-wider block mb-2">
            Help Center
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            We're Here to Help
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Choose the category that best matches your question. Our team typically responds within {SUPPORT_RESPONSE_TIME}.
          </p>
        </div>

        {/* Support Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportCategories.map((category) => {
            const Icon = category.icon;
            return (
              <a
                key={category.title}
                href={`mailto:${category.email}?subject=${encodeURIComponent(
                  `[FocusFlow] ${category.title} Inquiry`
                )}`}
                className="group flex flex-col p-7 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/70 dark:border-gray-700/70 hover:border-[#6C5CE7]/40 dark:hover:border-[#6C5CE7]/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#6C5CE7]/10 text-[#6C5CE7] dark:text-[#A29BFE] flex items-center justify-center mb-5 group-hover:bg-[#6C5CE7] group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#6C5CE7] dark:group-hover:text-[#A29BFE] transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 mb-4">
                  {category.description}
                </p>
                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6C5CE7] dark:text-[#A29BFE] group-hover:gap-2.5 transition-all">
                  <Mail className="w-4 h-4" />
                  <span>Contact Support</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Direct Email Actions */}
        <div className="bg-gradient-to-r from-[#6C5CE7]/95 via-[#6C5CE7] to-[#A29BFE] rounded-3xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">
                Quick Email Actions
              </h3>
              <p className="text-purple-100 mb-6">
                Use these mailto links to open your default email client with pre-filled subjects.
              </p>
              <div className="space-y-3">
                <a
                  href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
                    '[FocusFlow] Technical Support Request'
                  )}`}
                  className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-medium text-sm transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Report a Bug</span>
                </a>
                <a
                  href={`mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(
                    '[FocusFlow] Feature Request / Feedback'
                  )}`}
                  className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-medium text-sm transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Request a Feature</span>
                </a>
                <a
                  href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
                    '[FocusFlow] Account Deletion Request'
                  )}`}
                  className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-medium text-sm transition-colors"
                >
                  <UserCog className="w-5 h-5" />
                  <span>Delete Account Data</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center md:items-end text-center md:text-right p-6">
              <div className="flex items-center gap-3 text-purple-100 mb-4">
                <Clock className="w-5 h-5" />
                <span className="font-medium">
                  Expected Response: {SUPPORT_RESPONSE_TIME}
                </span>
              </div>
              <p className="text-purple-200 text-sm">
                <em>
                  Note: This is a sample response time and not a guarantee.
                  Actual response times may vary based on inquiry volume.
                </em>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};