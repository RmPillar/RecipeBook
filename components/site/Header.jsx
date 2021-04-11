import React from 'react';
import Link from 'next/link';

import Logo from '../global/Logo';
import BtnNav from '../btn/BtnNav';

function Header() {
  return (
    <section className='site-header w-full'>
      <div className='flex items-center py-20 px-30 space-x-30'>
        <Link href='/'>
          <a className='mr-auto'>
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
      </div>
    </section>
  );
}

export default Header;
