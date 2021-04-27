import React from 'react';
import Link from 'next/link';

import BtnNav from '../btn/BtnNav';
import BtnMenu from '../btn/BtnMenu';
import Logo from './Logo';

import classNames from 'classnames';

function Header({ menuActive, setMenuActive, dark }) {
  return (
    <header className='site-header absolute top-0 w-full z-20 '>
      <div className='flex items-center py-20 px-30 space-x-30'>
        <Link href='/'>
          <a
            className={classNames('mr-auto group', {
              'text-white': !dark,
              'text-gray-900': dark,
            })}
          >
            <Logo dark={dark} />
          </a>
        </Link>

        <Link href='/my-recipes' passHref>
          <BtnNav label='My Recipes' dark={dark} />
        </Link>

        <Link href='/conversions' passHref>
          <BtnNav label='Conversions' dark={dark} />
        </Link>

        <Link href='/login' passHref>
          <BtnNav label='Login' dark={dark} />
        </Link>

        <BtnMenu menuActive={menuActive} setMenuActive={setMenuActive} />
      </div>
    </header>
  );
}

export default Header;
