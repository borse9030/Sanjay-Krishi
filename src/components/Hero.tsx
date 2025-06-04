import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/235925/pexels-photo-235925.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)'
        }}
      />
      <div className="z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
          आपल्या यशासाठी उत्कृष्ट शेती उत्पादने
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8">
          आधुनिक शेतकऱ्यांसाठी दर्जेदार साधने, बियाणे आणि उपकरणे
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#products" 
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg text-lg transition-colors duration-300 inline-flex items-center"
          >
            खरेदी करा
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a 
            href="#about" 
            className="px-8 py-3 bg-transparent hover:bg-gray-800 text-white border border-white hover:border-green-500 font-medium rounded-lg text-lg transition-all duration-300"
          >
            अधिक माहिती
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#featured" className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;