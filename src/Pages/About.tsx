import React from 'react';

const About = () => {
  return (
    <div className="bg-black text-white py-16 px-6 pt-24">
      
      {/* Main Heading */}
      <div className="relative max-w-7xl mx-auto mb-20">
        <img src="/about4.webp" alt="" className=" w-full mx-auto mb-8 h-[500px] w-[500px]" />
      <h1 className="text-4xl md:text-6xl font-bold text-start mb-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        REBELLIOUS BY NATURE
      </h1>
      </div>

      {/* Intro Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          REAP WHAT YOU SOW
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Death Wish Coffee follows strict grading requirements to ensure
          quality and consistency from cup to cup. We source USDA Organic
          and Fair Trade Certified™ arabica and robusta coffee beans from
          India, Peru, and other countries throughout South and Central
          America for our everyday coffee roasts. This means our coffee is
          made according to rigorous standards that protect the environment
          and the livelihoods of coffee farmers.
        </p>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

        <div className="flex flex-col items-center">
          <img
            src="/about1.png"
            alt="Protect Farmers"
            className="w-40 h-40 object-contain mb-6"
          />
          <h2 className="text-2xl font-bold uppercase">
            Guaranteed Minimum Prices To Protect Farmers
          </h2>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/About.png"
            alt="Sustainable Farming"
            className="w-40 h-40 object-contain mb-6"
          />
          <h2 className="text-2xl font-bold uppercase">
            Safe And Sustainable Farming Methods
          </h2>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/about3.png"
            alt="Community Development"
            className="w-40 h-40 object-contain mb-6"
          />
          <h2 className="text-2xl font-bold uppercase">
            Community Development Funds In Coffee-Growing Regions
          </h2>
        </div>

      </div>

    </div>
  );
};

export default About;