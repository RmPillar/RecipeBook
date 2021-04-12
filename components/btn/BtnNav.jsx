import React, { forwardRef } from 'react';

const BtnNav = forwardRef(({ label, href }, ref) => {
  return (
    <a
      href={href}
      ref={ref}
      className='btn btn--nav relative uppercase tracking-widest group overflow-hidden text-white'
    >
      {label}
      <span className='absolute w-full h-2 bg-white inset-x-0 bottom-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out'></span>
    </a>
  );
});

export default BtnNav;
