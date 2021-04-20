import React, { useState } from 'react';

import Header from './Header';
import MobileMenu from './MobileMenu';

function Page({ children, dark = false }) {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <Header
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        dark={dark}
      />
      <MobileMenu menuActive={menuActive} setMenuActive={setMenuActive} />
      {children}
    </>
  );
}

export default Page;
