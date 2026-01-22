import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-slate-900">BlueCo Media</p>
            <p className="text-sm text-slate-500 mt-1">
              The predictable job-acquisition system for home services.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-slate-500 font-medium">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
                 <Link href="/termsandconditions" className="hover:text-slate-900">
              Terms & Conditions
            </Link>
          </div>
       
            

          {/* Copyright */}
          <div className="text-sm text-slate-400 font-medium">
            © {new Date().getFullYear()} BlueCo Media
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[10px] text-slate-300 uppercase tracking-[0.2em]">
            Brick-and-mortar Growth Partners
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
