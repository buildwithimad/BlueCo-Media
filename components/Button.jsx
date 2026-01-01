import React from 'react';

const Button = ({ text, onClick, className = '', variant = 'primary' }) => {
  const baseStyles = "px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg active:transform active:scale-95 text-center inline-block";
  const variants = {
    primary: "bg-[#002d57] text-white hover:bg-[#001a33] hover:shadow-blue-500/25",
    secondary: "bg-white text-[#002d57] border-2 border-[#002d57] hover:bg-blue-50"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;