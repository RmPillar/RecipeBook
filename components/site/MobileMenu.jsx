import React from 'react';
import Link from 'next/link';

import classNames from 'classnames';

const MobileMenu = ({ menuActive }) => {
  return (
    <>
      <div
        className={classNames(
          'h-screen w-screen fixed inset-0 bg-teal-300 transform transition-transform duration-500 ease-in-out z-10',
          {
            'translate-x-full': !menuActive,
          }
        )}
      ></div>
      <div
        className={classNames(
          'h-screen w-screen fixed inset-0 bg-teal-400 transform transition-transform duration-500 delay-100 ease-in-out z-10',
          {
            'translate-x-full': !menuActive,
          }
        )}
      ></div>
      <div
        className={classNames(
          'h-screen w-screen fixed inset-0 bg-teal-500 transform transition-transform duration-500 delay-150 ease-in-out z-10',
          {
            'translate-x-full': !menuActive,
          }
        )}
      >
        <div className='flex flex-col w-full h-full px-30 pt-120 space-y-50'>
          <Link href='/my-recipes'>
            <a className='text-4xl tracking-wider text-white font-light'>
              My Recipes
            </a>
          </Link>
          <Link href='/conversions'>
            <a className='text-4xl tracking-wider text-white font-light'>
              Conversions
            </a>
          </Link>
          <Link href='/login'>
            <a className='text-4xl tracking-wider text-white font-light'>
              Login
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;