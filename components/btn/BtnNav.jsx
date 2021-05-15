import React, { forwardRef } from 'react';

import classNames from 'classnames';

const BtnNav = forwardRef(({ label, href, dark, classes = '' }, ref) => {
  return (
    <a
      href={href}
      ref={ref}
      className={classNames(
        'btn btn--nav relative uppercase tracking-widest group overflow-hidden lg-max:hidden',
        {
          'text-white': !dark,
          'text-gray-900': dark,
        },
        classes
      )}
    >
      {label}
      <span
        className={classNames(
          'absolute w-full h-2 inset-x-0 bottom-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out',
          {
            'bg-white': !dark,
            'bg-gray-900': dark,
          }
        )}
      ></span>
    </a>
  );
});

export default BtnNav;
