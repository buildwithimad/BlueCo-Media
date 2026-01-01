import React from 'react';

const Results = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
          Results Speak for Themselves
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-2 rounded-xl shadow-md overflow-hidden border border-slate-200">
              <div className="aspect-[4/3] bg-slate-100 flex flex-col items-center justify-center text-slate-400 relative">
                <div className="absolute inset-0 p-6 flex flex-col justify-center">
                  <div className="w-full h-4 bg-slate-200 rounded mb-4 w-3/4"></div>
                  <div className="w-full h-4 bg-slate-200 rounded mb-4"></div>
                  <div className="w-full h-12 bg-blue-100 rounded mb-4 border-l-4 border-blue-500 flex items-center px-4">
                    <span className="text-blue-700 font-bold text-sm">BOOKED: New HVAC Install</span>
                  </div>
                  <div className="w-full h-12 bg-blue-100 rounded mb-4 border-l-4 border-blue-500 flex items-center px-4">
                    <span className="text-blue-700 font-bold text-sm">BOOKED: Emergency Pipe Leak</span>
                  </div>
                  <div className="w-full h-4 bg-slate-200 rounded w-1/2"></div>
                </div>
                <span className="mt-auto mb-4 text-xs font-semibold uppercase tracking-widest text-slate-300">
                  [ Verified Calendar Data Placeholder ]
                </span>
              </div>
              <div className="p-4 text-center">
                <p className="text-slate-700 font-semibold">
                  {i === 1 ? '32 Booked Jobs in 14 Days' : i === 2 ? 'Full Calendar for Multi-Tech Team' : 'Consistent $15k+ Weekly Revenue'}
                </p>
                <p className="text-sm text-slate-500">Actual system performance output</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-slate-600 max-w-2xl mx-auto">
          <p>
            We don't focus on "cost per click" or "impressions." We focus on how many high-intent appointments are sitting on your calendar when you wake up in the morning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Results;