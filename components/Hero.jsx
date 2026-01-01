import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-slate-50 pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-full opacity-60 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="text-center">
          <p className="text-[#125a99] font-semibold tracking-wide uppercase text-sm md:text-base mb-6">For Home Service Businesses</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#002d57] leading-tight mb-8">
            Stop Chasing Leads. <br className="hidden sm:block" />
            <span className="text-[#125a99]">Start Getting Booked Jobs.</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            We install a predictable acquisition system that fills your calendar with the maximum number of jobs you can handle—consistently, every single month.
          </p>

          <div className="flex flex-col items-center gap-6">
            <a 
              href="https://calendly.com/haroon-alam/discovery-call-plumbing-jobs" 
              className="bg-[#002d57] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:bg-[#125a99] hover:shadow-xl active:transform active:scale-95 inline-block"
            >
              👉 Book a Call with the Founder
            </a>
            <p className="text-sm md:text-base text-slate-500 font-medium max-w-md">
              No pressure. Just a 15-minute diagnostic call to see if your area is available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;