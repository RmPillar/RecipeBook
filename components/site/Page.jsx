import React, { useState } from 'react';
import { useRouter } from 'next/router';

import Header from './Header';
import MobileMenu from './MobileMenu';

function Page({ children, dark = false }) {
  const [menuActive, setMenuActive] = useState(false);
  const router = useRouter();

  const headerClasses = router.asPath.includes('baking') ? 'hidden' : '';

  return (
    <>
      <Header
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        dark={dark}
        classes={headerClasses}
      />
      <MobileMenu menuActive={menuActive} setMenuActive={setMenuActive} />
      {children}
    </>
  );
}

export default Page;
