import React, { useState } from 'react';

import Header from './Header';
import MobileMenu from './MobileMenu';

function Page({ children }) {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <Header menuActive={menuActive} setMenuActive={setMenuActive} />
      <MobileMenu menuActive={menuActive} setMenuActive={setMenuActive} />
      {children}
    </>
  );
}

export default Page;
