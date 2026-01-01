import React from 'react';
import Hero from '@/components/Hero';
import Results from '@/components/Results';
import Problem from '@/components/Problem';
import Transition from '@/components/Transition';
import Mechanism from '@/components/Mechanism';
import ValueProp from '@/components/ValueProp';
import Decision from '@/components/Decision';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Results />
      <Problem />
      <Transition />
      <Mechanism />
      <ValueProp />
      <Decision />
      <FinalCTA />
      <Footer />
    </div>
  );
};

