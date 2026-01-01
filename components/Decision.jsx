import React from 'react';

const Decision = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          Two Paths for Your Business
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 opacity-60">
            <h4 className="font-bold text-xl text-slate-700 mb-4">Path A: Status Quo</h4>
            <ul className="space-y-3 text-slate-600">
              <li className="flex gap-2"><span>❌</span> Rely on unpredictable referrals</li>
              <li className="flex gap-2"><span>❌</span> Suffer through slow months</li>
              <li className="flex gap-2"><span>❌</span> Waste time chasing dead leads</li>
              <li className="flex gap-2"><span>❌</span> Limited by your personal network</li>
            </ul>
          </div>
          
          <div className="p-8 rounded-2xl border-2 border-blue-600 bg-blue-50 relative">
            <div className="absolute top-0 right-0 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Recommended
            </div>
            <h4 className="font-bold text-xl text-blue-900 mb-4">Path B: Install the System</h4>
            <ul className="space-y-3 text-slate-800">
              <li className="flex gap-2"><span>✅</span> Predictable, booked appointments</li>
              <li className="flex gap-2"><span>✅</span> Automated AI lead engagement</li>
              <li className="flex gap-2"><span>✅</span> Scale to your maximum capacity</li>
              <li className="flex gap-2"><span>✅</span> Focus 100% on service quality</li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-slate-600 text-lg font-medium italic">
          One path keeps you in the cycle. The other installs an asset.
        </p>
      </div>
    </section>
  );
};

export default Decision;