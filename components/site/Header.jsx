import React from 'react';
import Link from 'next/link';

import BtnNav from '../btn/BtnNav';
import BtnMenu from '../btn/BtnMenu';
import Logo from './Logo';

function Header({ menuActive, setMenuActive }) {
  return (
    <header className='site-header absolute top-0 w-full z-20'>
      <div className='flex items-center py-20 px-30 space-x-30'>
        <Link href='/'>
          <a className='mr-auto text-white'>
            <Logo />
          </a>
        </Link>

        <Link href='/my-recipes' passHref>
          <BtnNav label='My Recipes' />
        </Link>

        <Link href='/conversions' passHref>
          <BtnNav label='Conversions' />
        </Link>

        <Link href='/login' passHref>
          <BtnNav label='Login' />
        </Link>

        <BtnMenu menuActive={menuActive} setMenuActive={setMenuActive} />
      </div>
    </header>
  );
}

export default Header;
