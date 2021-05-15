import React from 'react';
import Link from 'next/link';

import classNames from 'classnames';

const MobileMenu = ({ menuActive }) => {
  return (
    <>
      <div
        className={classNames(
          'h-screen w-screen fixed inset-y-0 left-full bg-teal-300 max-w-400 transform transition-transform duration-500 ease-in-out z-20',
          {
            '-translate-x-full': menuActive,
          }
        )}
      ></div>
      <div
        className={classNames(
          'h-screen w-screen fixed inset-y-0 left-full bg-teal-400 max-w-400 transform transition-transform duration-500 delay-100 ease-in-out z-20',
          {
            '-translate-x-full': menuActive,
          }
        )}
      ></div>
      <div
        className={classNames(
          'h-screen w-screen fixed inset-y-0 left-full bg-teal-500 max-w-400 transform transition-transform duration-500 delay-150 ease-in-out z-20',
          {
            '-translate-x-full': menuActive,
          }
        )}
      >
        <div className='flex flex-col w-full h-full px-30 pt-120 space-y-50'>
          <Link href='/my-recipes'>
            <a className='text-4xl tracking-wider text-white'>My Recipes</a>
          </Link>
          <Link href='/conversions'>
            <a className='text-4xl tracking-wider text-white'>Conversions</a>
          </Link>
          <Link href='/login'>
            <a className='text-4xl tracking-wider text-white'>Login</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
