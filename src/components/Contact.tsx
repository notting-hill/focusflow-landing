import React from 'react';
import {
  DEVELOPER,
  BUSINESS_EMAIL,
  SUPPORT_EMAIL,
  WEBSITE_URL,
  SOCIAL,
  APP_NAME,
} from '../data/appConfig';
import { SocialIcon } from './SocialIcon';
import {
  Mail,
  Globe,
  Building2,
} from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50/70 dark:bg-gray-900/60 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#6C5CE7] dark:text-[#A29BFE] uppercase tracking-wider block mb-2">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Contact {APP_NAME} Studio
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            We'd love to hear from you. Whether you have a question, feedback, or just want to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-7 border border-gray-200/70 dark:border-gray-700/70 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-[#6C5CE7]" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {DEVELOPER}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#6C5CE7]/10 text-[#6C5CE7] flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                      Website
                    </p>
                    <a
                      href={WEBSITE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-900 dark:text-white hover:text-[#6C5CE7] dark:hover:text-[#A29BFE] transition-colors"
                    >
                      {WEBSITE_URL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#6C5CE7]/10 text-[#6C5CE7] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                      General Inquiries
                    </p>
                    <a
                      href={`mailto:${BUSINESS_EMAIL}`}
                      className="text-sm text-gray-900 dark:text-white hover:text-[#6C5CE7] dark:hover:text-[#A29BFE] transition-colors"
                    >
                      {BUSINESS_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#6C5CE7]/10 text-[#6C5CE7] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                      Technical Support
                    </p>
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="text-sm text-gray-900 dark:text-white hover:text-[#6C5CE7] dark:hover:text-[#A29BFE] transition-colors"
                    >
                      {SUPPORT_EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-7 border border-gray-200/70 dark:border-gray-700/70 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Follow Us
              </h3>

              <div className="space-y-3">
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-[#6C5CE7]/40 hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <SocialIcon name="facebook" className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">Facebook</span>
                </a>

                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-[#6C5CE7]/40 hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white">
                    <SocialIcon name="instagram" className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">Instagram</span>
                </a>

                <a
                  href={SOCIAL.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-[#6C5CE7]/40 hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-gray-900">
                    <SocialIcon name="x" className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">X (Twitter)</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-7 border border-gray-200/70 dark:border-gray-700/70 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Legal & Policies
              </h3>

              <div className="space-y-3">
                <a
                  href="/privacy"
                  className="flex items-center gap-3 px-3 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-[#6C5CE7]/40 hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-950/60 flex items-center justify-center text-green-600 dark:text-green-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">Privacy Policy</span>
                </a>

                <a
                  href="/terms"
                  className="flex items-center gap-3 px-3 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-[#6C5CE7]/40 hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">Terms of Service</span>
                </a>

                <a
                  href="#support"
                  className="flex items-center gap-3 px-3 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-[#6C5CE7]/40 hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-950/60 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">Support Center</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};