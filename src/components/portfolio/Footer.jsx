import { Heart, ArrowUp } from 'lucide-react';
import { scrollToTop } from '../../utils/utils';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">SP</span>
            </div>
            <span className="text-lg sm:text-xl font-bold">Srihari Pentakota</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <button
              onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
            >
              Home
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
            >
              About
            </button>
            <button
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
            >
              Skills
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
            >
              Projects
            </button>
            <button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
            >
              Experience
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
            >
              Contact
            </button>
          </nav>

          {/* Divider */}
          <div className="w-full max-w-xs sm:max-w-md h-px bg-gray-700"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 text-xs sm:text-sm">
              <span>© 2024 Srihari Pentakota. Made with</span>
              <div className="flex items-center space-x-2">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                <span>and lots of coffee</span>
              </div>
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2.5 sm:p-3 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 z-50"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;