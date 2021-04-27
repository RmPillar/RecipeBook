import React, { forwardRef } from 'react';

import classNames from 'classnames';

const BtnBlock = forwardRef(({ label, href, classes }, ref) => {
  return (
    <a
      href={href}
      ref={ref}
      className={classNames(
        'btn btn--block text-xl tracking-widest uppercase py-10 px-15 rounded-full bg-white group',
        classes
      )}
    >
      {label}
    </a>
  );
});

export default BtnBlock;
