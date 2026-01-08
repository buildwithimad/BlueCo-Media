import React from 'react';
import Image from 'next/image';

const Results = () => {
  const results = [
    {
      id: 1,
      imageSrc: "/Images/1.png",
      altText: "Screenshot of calendar showing 32 booked jobs"
    },
    {
      id: 2,
      imageSrc: "/Images/2.png",
      altText: "Screenshot of revenue dashboard showing consistent growth"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      {/* Increased max-width to 7xl to make cards wider/larger */}
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#002d57] mb-4 tracking-tight">
            Results Speak for Themselves
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Real calendars, real revenue. No vanity metrics.
          </p>
        </div>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {results.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* 1. Increased Aspect Ratio to [4/3] makes the card taller/larger.
                  2. 'relative' allows next/image to fill this div.
              */}
              <div className="relative w-full aspect-[4/4] bg-slate-100">
                
                {/* Overlay for hover effect */}
                <div className="absolute inset-0 bg-[#002d57] opacity-0 group-hover:opacity-5 transition-opacity duration-300 z-10 pointer-events-none" />
                
                <Image 
                  src={item.imageSrc} 
                  alt={item.altText}
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  // Changed to 'object-cover' so image fills 100% of the space with no gaps
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={item.id === 1}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <div className="inline-block border-l-4 border-[#125a99] bg-white p-6 shadow-sm text-left max-w-2xl">
             <p className="text-slate-700 italic text-lg">
               "We focus on how many high-intent appointments are sitting on your calendar when you wake up."
             </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Results;