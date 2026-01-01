import React from 'react';

const ValueProp = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              Focus on Service Delivery. <br />
              <span className="text-blue-500">We Handle Acquisition.</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 text-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Predictable Freedom</h4>
                  <p className="text-slate-400">Know exactly how much work is coming in next week so you can plan your life and staff accordingly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 text-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Stress Reduction</h4>
                  <p className="text-slate-400">Remove the weight of "where is the next job coming from?" off your shoulders for good.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 text-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Maximum Capacity</h4>
                  <p className="text-slate-400">Our system dials up or down to ensure you hit the maximum jobs you can handle each month.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/bluecomedia/600/400" 
                alt="Happy business owner" 
                className="rounded-lg mb-6 grayscale hover:grayscale-0 transition-all duration-500"
              />
              <p className="italic text-slate-300 text-lg">
                "Our goal is simple: To provide the certainty you need to scale your business without the marketing headache."
              </p>
              <p className="mt-4 font-bold text-blue-500">— Founder, BlueCo Media</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;