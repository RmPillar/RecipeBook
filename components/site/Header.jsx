import React, { useState } from 'react';
import Link from 'next/link';

import BtnNav from '../btn/BtnNav';
import BtnMenu from '../btn/BtnMenu';
import Logo from '../global/Logo';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

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

        <BtnMenu menuActive={menuActive} setMenuActive={setMenuActive} />
      </div>
    </section>
  );
}

export default Header;
