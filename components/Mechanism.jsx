import React from 'react';

const Mechanism = () => {
  const steps = [
    { title: "Setup a lead form or dedicated landing page", desc: "We create high-converting assets optimized specifically for local service conversion." },
    { title: "Run Facebook and/or Google ads", desc: "We put your offer in front of homeowners in your specific service area who need help right now." },
    { title: "Generate high-intent quality leads", desc: "No more tire-kickers. We filter for people who are ready to book a service call today." },
    { title: "Setup AI-powered messaging and appointment booking", desc: "Our system responds in seconds, not hours. We engage every lead instantly using AI." },
    { title: "Automatic follow-up and engagement", desc: "The system continues to follow up until they book, so no job ever falls through the cracks." },
    { title: "Appointments booked and sent directly to the calendar", desc: "You wake up to a calendar full of qualified service calls. All you have to do is show up." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            The BlueCo Media SYSTEM
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Here’s what our SYSTEM that delivers BOOKED JOBS includes:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm mr-4 shrink-0">
                  {index + 1}
                </span>
                <h4 className="font-bold text-slate-900 text-lg leading-snug">
                  Step #{index + 1}: {step.title}
                </h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-blue-600 rounded-2xl text-center text-white">
          <p className="text-xl font-bold">
            This is 100% Done-For-You and Hands-Off.
          </p>
          <p className="mt-2 opacity-90">
            We handle the tech, the ads, and the follow-up. You focus on the trucks and the tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mechanism;