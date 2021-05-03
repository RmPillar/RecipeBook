import React, { forwardRef } from 'react';

import classNames from 'classnames';

const BtnBlock = forwardRef(({ label, href, classes }, ref) => {
  return (
    <a
      href={href}
      ref={ref}
      className={classNames(
        'btn btn--block text-xl tracking-widest uppercase py-10 px-15 rounded-full bg-white group hover:bg-green-500 transition-colors duration-500 overflow-hidden',
        classes
      )}
    >
      <span className='relative z-10 group-hover:text-white transition-colors duration-500'>
        {label}
      </span>
    </a>
  );
});

export default BtnBlock;
