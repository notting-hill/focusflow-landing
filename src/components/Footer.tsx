import React from 'react';
import { Link } from 'react-router-dom';
import {
  APP_NAME,
  APP_DESCRIPTION,
  APP_VERSION,
  DEVELOPER,
  GOOGLE_PLAY_URL,
  APP_STORE_URL,
  WEBSITE_URL,
  SOCIAL,
  SUPPORT_EMAIL,
} from '../data/appConfig';
import { SocialIcon } from './SocialIcon';
import { Sparkles, Play, Apple } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 focus:outline-hidden" aria-label={`${APP_NAME} home`}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6C5CE7] to-[#A29BFE] flex items-center justify-center text-white shadow-md shadow-[#6C5CE7]/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight">{APP_NAME}</span>
                <span className="text-[10px] uppercase font-semibold text-[#A29BFE] tracking-wider leading-none">
                  Studio
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              {APP_DESCRIPTION}
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium transition-colors"
              >
                <Play className="w-4.5 h-4.5 fill-current text-emerald-400" />
                <span>Google Play</span>
              </a>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium transition-colors"
              >
                <Apple className="w-5.5 h-5.5 fill-current" />
                <span>App Store</span>
              </a>
            </div>

            <p className="text-gray-500 text-xs">
              Version {APP_VERSION}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="/#features" className="text-gray-400 hover:text-[#A29BFE] text-sm transition-colors">Features</a>
              </li>
              <li>
                <a href="/#how-it-works" className="text-gray-400 hover:text-[#A29BFE] text-sm transition-colors">How It Works</a>
              </li>
              <li>
                <a href="/#faq" className="text-gray-400 hover:text-[#A29BFE] text-sm transition-colors">FAQ</a>
              </li>
              <li>
                <a href="/#download" className="text-gray-400 hover:text-[#A29BFE] text-sm transition-colors">Download</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="/#support" className="text-gray-400 hover:text-[#A29BFE] text-sm transition-colors">Help Center</a>
              </li>
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-gray-400 hover:text-[#A29BFE] text-sm transition-colors">Contact Us</a>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-[#A29BFE] text-sm transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-[#A29BFE] text-sm transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#A29BFE] text-sm transition-colors">Website</a>
              </li>
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-gray-400 hover:text-[#A29BFE] text-sm transition-colors">Support</a>
              </li>
              <li>
                <span className="text-gray-500 text-sm">{DEVELOPER}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <SocialIcon name="facebook" className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <SocialIcon name="instagram" className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL.x}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <SocialIcon name="x" className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-500 text-xs">
              © {currentYear} {DEVELOPER}. All rights reserved.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            {APP_NAME} is a fictional productivity app. All store links are placeholders and must be replaced before publishing.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-[#A29BFE] transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-[#A29BFE] transition-colors">Terms</Link>
            <a href="/#support" className="hover:text-[#A29BFE] transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};