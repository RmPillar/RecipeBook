import React from 'react';
import Link from 'next/link';

import BtnNav from '../btn/BtnNav';
import BtnMenu from '../btn/BtnMenu';
import Logo from './Logo';

import classNames from 'classnames';

function Header({ menuActive, setMenuActive, dark }) {
  return (
    <header className='site-header absolute top-0 w-full z-30'>
      <div className='flex items-center py-20 px-30 space-x-30'>
        <Link href='/'>
          <a
            className={classNames('mr-auto group', {
              'text-white': !dark || menuActive,
              'text-gray-900': dark && !menuActive,
            })}
          >
            <Logo dark={dark} />
          </a>
        </Link>

        <Link href='/my-recipes' passHref>
          <BtnNav label='My Recipes' dark={dark} classes='xl-max:hidden' />
        </Link>

        <Link href='/conversions' passHref>
          <BtnNav label='Conversions' dark={dark} classes='xl-max:hidden' />
        </Link>

        <Link href='/login' passHref>
          <BtnNav label='Login' dark={dark} classes='xl-max:hidden' />
        </Link>

        <BtnMenu
          menuActive={menuActive}
          setMenuActive={setMenuActive}
          dark={dark}
        />
      </div>
    </header>
  );
}

export default Header;
