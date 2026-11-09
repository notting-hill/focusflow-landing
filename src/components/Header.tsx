import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowDownToLine, Sparkles } from 'lucide-react';
import { APP_NAME } from '../data/appConfig';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'Features', href: '/#features' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Support', href: '/#support' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-3 border-b border-gray-200/80 dark:border-gray-800'
          : 'bg-white dark:bg-gray-900 py-4 border-b border-gray-100 dark:border-gray-800/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-hidden"
            aria-label={`${APP_NAME} home`}
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#6C5CE7] to-[#A29BFE] flex items-center justify-center text-white shadow-md shadow-[#6C5CE7]/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
                {APP_NAME}
              </span>
              <span className="text-[10px] uppercase font-semibold text-[#6C5CE7] tracking-wider leading-none">
                Studio
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-[#6C5CE7] hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-[#6C5CE7] hover:bg-[#5a4bcf] active:bg-[#4d3eb8] shadow-md shadow-[#6C5CE7]/25 hover:shadow-lg hover:shadow-[#6C5CE7]/35 transition-all transform hover:-translate-y-0.5"
            >
              <ArrowDownToLine className="w-4 h-4" />
              <span>Download App</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 transition-colors focus:outline-hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-[#6C5CE7] hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100 dark:border-gray-800">
              <a
                href="#download"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-semibold text-base text-white bg-[#6C5CE7] hover:bg-[#5a4bcf] shadow-md shadow-[#6C5CE7]/20 transition-all"
              >
                <ArrowDownToLine className="w-5 h-5" />
                <span>Download App</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};