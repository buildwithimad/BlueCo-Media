import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-24 bg-[#002d57] text-white overflow-hidden relative">
      {/* Decorative accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white opacity-20"></div>
      
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <h3 className="text-xl font-bold uppercase tracking-widest mb-6 opacity-80">
          Ready to Fill Your Calendar?
        </h3>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
          Let’s install a predictable system that delivers booked jobs—starting today.
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          If you are a US-based home service owner doing over $15k/month and you want to scale to your max capacity, we should talk.
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <a 
            href="https://calendly.com/haroon-alam/discovery-call-plumbing-jobs" 
            className="bg-white text-[#002d57] font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300 transform active:scale-95 inline-block"
          >
           👉 Book a Call with the Founder
          </a>
          <p className="text-sm text-blue-200">
            Limited areas available to ensure no competition between clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;