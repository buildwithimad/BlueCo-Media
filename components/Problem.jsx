import React from 'react';

const Problem = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle overlay icon */}
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-1.9"/><path d="m3 3 1.9 1.9"/><path d="M5 11h14"/><path d="m19 21-1.9-1.9"/><path d="m19 3-1.9 1.9"/></svg>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            The "Feast or Famine" Cycle is Killing Your Growth
          </h2>
          
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              Most home service business owners rely on <strong>referrals and word of mouth</strong>. While those are great jobs, they are entirely unpredictable.
            </p>
            <p>
              One month, your phones are ringing off the hook and your techs are overworked. The next month, the calendar is bone-dry, and you're checking your bank balance daily, wondering when the next big job will hit.
            </p>
            <p>
              You've probably tried "Lead Generation" companies before. They send you shared leads that were sold to five other contractors, or worse—"leads" that don't pick up the phone.
            </p>
            <p className="text-white font-bold text-xl border-l-4 border-blue-500 pl-6 py-2 bg-slate-800/50 rounded-r-lg">
              The real issue isn't your service quality. It's the lack of a system.
            </p>
            <p>
              Without a predictable way to acquire customers, you don't have a business—you have a stressful job that happens to own trucks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;