import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">About Me</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Passionate frontend developer creating amazing web experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            {/* ============================================================ */}
            {/* CUSTOMIZE YOUR ABOUT SECTION HERE */}
            {/* ============================================================ */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Hello! I'm Srihari Pentakota, a passionate frontend developer.
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              I'm a frontend developer with over 2.5+ years of experience creating responsive, 
              interactive web applications. I specialize in React, JavaScript, and modern CSS 
              frameworks to build user interfaces that are both beautiful and functional.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              My passion lies in transforming creative designs into pixel-perfect, interactive 
              web experiences. I love working with designers and backend developers to bring 
              ideas to life and create seamless user journeys.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              When I'm not coding, you can find me exploring new frontend frameworks, 
              contributing to open-source projects, or experimenting with the latest 
              web technologies and design trends.
            </p>
            {/* ============================================================ */}
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
            <div className="bg-blue-50 p-4 sm:p-6 rounded-xl text-center hover:bg-blue-100 transition-colors duration-300">
              <Code className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-2 sm:mb-4" />
              <h4 className="text-sm sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Clean Code</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Writing maintainable and scalable frontend code</p>
            </div>
            <div className="bg-purple-50 p-4 sm:p-6 rounded-xl text-center hover:bg-purple-100 transition-colors duration-300">
              <Palette className="w-8 h-8 sm:w-12 sm:h-12 text-purple-600 mx-auto mb-2 sm:mb-4" />
              <h4 className="text-sm sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">UI/UX Focus</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Creating intuitive and beautiful interfaces</p>
            </div>
            <div className="bg-green-50 p-4 sm:p-6 rounded-xl text-center hover:bg-green-100 transition-colors duration-300">
              <Zap className="w-8 h-8 sm:w-12 sm:h-12 text-green-600 mx-auto mb-2 sm:mb-4" />
              <h4 className="text-sm sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Performance</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Optimizing for speed and user experience</p>
            </div>
            <div className="bg-red-50 p-4 sm:p-6 rounded-xl text-center hover:bg-red-100 transition-colors duration-300">
              <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-red-600 mx-auto mb-2 sm:mb-4" />
              <h4 className="text-sm sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Passion</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Love creating amazing web experiences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;