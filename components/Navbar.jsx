import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="w-full py-6 absolute top-0 left-0 z-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <Image
          src="/logo.png" 
          alt="BlueCo Media"
          width={400} 
          height={128} 
          className="h-32 w-auto object-contain" // Increased from h-20 to h-32 (approx 128px)
          priority 
        />
      </div>
    </nav>
  );
};

export default Navbar;